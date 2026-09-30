// v2 principal views (§24–25, §30, §32, §4).

function EzPrincipalSchool() {
  const { db, me } = b();
  return db.schools.find((s) => s.id === me.schoolId);
}

function EzSectionRow(db, sec) {
  const st = EzSectionStats(db, sec.id);
  return { sec, st, engagement: st.students ? (st.active7 / st.students) * 100 : null };
}

/* §24 School learning overview, shown under v1's seats & implementation overview. */
function EzPrincipalHome() {
  const { db, me } = b();
  const school = EzPrincipalSchool();
  const s = EzSchoolStats(db, school);
  const health = EzHealth(db, school);
  const rows = EzSchoolSections(db, school.id).map((sec) => EzSectionRow(db, sec));
  const concern = rows.flatMap((r) => r.st.conceptRows.filter((c) => (c.below ?? 0) >= 25).map((c) => ({ ...c, sec: r.sec })));
  const teachers = db.users.filter((u) => u.role === "teacher" && u.schoolId === school.id && u.active);
  const tEng = teachers.length ? (teachers.filter((u) => (db.events ?? []).some((e) => e.userId === u.id && e.type === "login" && e.date >= EzAddDays(uA, -7))).length / teachers.length) * 100 : 0;
  const isCo = me.role === "coordinator";
  const base = isCo ? "/coordinator" : "/principal";
  return (
    <>
      {isCo ? <W eyebrow={`${school.name} · Academic coordinator`} title={`Good morning, ${EzFirst(me.name)}`} sub="Learning and curriculum implementation across the school." /> : <Qh />}
      <EzWelcomeStrip schoolId={school.id} />
      <div className="sectionhead section" style={{ marginTop: 24 }}>
        <div><div className="eyebrow">Learning</div><h2>School learning overview</h2></div>
        <K className="textlink" to={`${base}/reports`}>Full reports <S n="arrow" /></K>
      </div>
      <div className="grid g4">
        <F label="Students" value={s.students} icon="users" sub={`${s.active} active learners this week`} meter={gA(s.active, s.students)} />
        <F label="Teacher engagement" value={EzPct(tEng)} icon="user" sub={`training completion ${EzPct(s.training)}`} />
        <F label="Average activity completion" value={EzPct(s.completion)} icon="check" />
        <F label="Average performance" value={EzPct(s.performance)} icon="chart" sub={`School health score ${health.score}`} />
      </div>
      <EzGate perm="classAnalytics" inline>
      <div className="split section">
        <EzTable head={["Class", "Students", "Engagement", "Completion", "Performance"]}
          rows={rows.map((r) => (
            <tr key={r.sec.id}>
              <td><strong>{z(db, r.sec.id)}</strong></td>
              <td>{r.st.students}</td>
              <td>{EzPct(r.engagement)}</td>
              <td>{EzPct(r.st.completion)}</td>
              <td>{EzPct(r.st.performance)}</td>
            </tr>
          ))} />
        <EzCard eyebrow="Insights" title="Where to focus">
          {concern.slice(0, 4).map((c) => (
            <EzInsight key={c.sec.id + c.concept} tone="bad" title={`${c.concept} needs reinforcement in ${z(db, c.sec.id)}.`} text={`${Math.round(c.below ?? 0)}% of children are below the expected mastery level.`} />
          ))}
          {rows.filter((r) => r.engagement != null && r.engagement < 50).map((r) => (
            <EzInsight key={r.sec.id} tone="warn" title={`Few children in ${z(db, r.sec.id)} used the child app this week.`} text="Worth a word with the class teacher and families." />
          ))}
          {!concern.length && <small>No concept has a quarter of a class needing support. 🎉</small>}
        </EzCard>
      </div>
      </EzGate>
    </>
  );
}

/* §25 School-level learning analytics. */
function EzPrincipalReports() {
  const { db, me, update } = b();
  const school = EzPrincipalSchool();
  const [tab, setTab] = B.useState("Grades & classes");
  const secs = EzSchoolSections(db, school.id);
  const rows = secs.map((sec) => EzSectionRow(db, sec));
  const byGrade = EzGroup(rows, (r) => r.sec.level);
  const teachers = db.users.filter((u) => u.role === "teacher" && u.schoolId === school.id);
  const canChild = EzPrincipalSeesChild(db, school);
  const curriculumPerm = EzPerm(db, "principal", "curriculum");
  const kids = db.students.filter((s) => secs.some((x) => x.id === s.sectionId) && s.status === "active");
  const [pick, setPick] = B.useState(null);

  const gradeTable = [["Grade", "Class", "Students", "Engagement", "Completion", "Performance"], ...rows.map((r) => [r.sec.level, z(db, r.sec.id), r.st.students, EzPct(r.engagement), EzPct(r.st.completion), EzPct(r.st.performance)])];
  const subjectRows = Ct.map((subj) => {
    const atts = db.attempts.filter((a) => kids.some((k) => k.id === a.studentId) && EzAct(db, a.activityId)?.subject === subj && a.date >= EzAddDays(uA, -30));
    const lv = (l) => atts.filter((a) => a.level === l).length;
    return [subj, atts.length, EzPct(EzAvg(atts.map((a) => a.score).filter((x) => x != null))), lv("Strong"), lv("Developing"), lv("Needs support")];
  });
  const teacherRows = teachers.map((u) => {
    const mySecs = EzUniq((u.teaches ?? []).map((x) => x.sectionId));
    const behind = mySecs.map((sid) => 63 - (db.classPosition[sid] ?? 63)).reduce((a, c) => Math.max(a, c), 0);
    const logins = (db.events ?? []).filter((e) => e.userId === u.id && e.type === "login" && e.date >= EzAddDays(uA, -30)).length;
    const assigned = db.assignments.filter((a) => a.createdBy === u.id && a.createdAt >= EzAddDays(uA, -30)).length;
    const tr = EzAvg(Object.values(db.trainingProgress?.[u.id] ?? {})) ?? 0;
    return [u.name, mySecs.map((sid) => z(db, sid)).join(", "), behind ? `${behind} days behind` : "On plan", logins, assigned, EzPct(tr)];
  });

  return (
    <>
      <W eyebrow="Reports" title="School learning analytics" sub="Aggregated by default. Individual child details follow school policy and EzRoots permissions.">
        <EzTabs value={tab} options={["Grades & classes", "Subjects", "Teachers & training", "Curriculum", "Children"]} onChange={setTab} />
      </W>
      {["Grades & classes", "Subjects", "Teachers & training"].includes(tab) && !EzAllowed(db, me, "schoolAnalytics") && <EzGate perm="schoolAnalytics" />}
      {tab === "Grades & classes" && EzAllowed(db, me, "schoolAnalytics") && (
        <>
          <div className="row between wrap"><small>Last 30 days · engagement = children active in the last 7 days</small><EzExportButtons rows={gradeTable} name="grade-report" title="Grade-wise report" /></div>
          <div className="section"><EzTable head={gradeTable[0]} rows={gradeTable.slice(1).map((r, i) => <tr key={i}>{r.map((c, k) => <td key={k}>{k === 1 ? <strong>{c}</strong> : c}</td>)}</tr>)} /></div>
          <div className="grid g2 section">
            {[...byGrade.keys()].map((g) => {
              const xs = byGrade.get(g);
              return (
                <EzCard key={g} eyebrow={g} title={`${xs.reduce((a, r) => a + r.st.students, 0)} children`}>
                  <EzProgress label="Engagement" pct={EzAvg(xs.map((r) => r.engagement).filter((x) => x != null))} />
                  <EzProgress label="Completion" pct={EzAvg(xs.map((r) => r.st.completion).filter((x) => x != null))} />
                  <EzProgress label="Performance" pct={EzAvg(xs.map((r) => r.st.performance).filter((x) => x != null))} />
                </EzCard>
              );
            })}
          </div>
        </>
      )}
      {tab === "Subjects" && EzAllowed(db, me, "schoolAnalytics") && (
        <>
          <div className="row between wrap"><small>Activity results in the last 30 days</small><EzExportButtons rows={[["Subject", "Results", "Average", "Strong", "Developing", "Needs support"], ...subjectRows]} name="subject-report" title="Subject-wise report" /></div>
          <div className="section"><EzTable head={["Subject", "Results", "Average", "Strong", "Developing", "Needs support"]} rows={subjectRows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)} /></div>
        </>
      )}
      {tab === "Teachers & training" && EzAllowed(db, me, "schoolAnalytics") && (
        <>
          <div className="row between wrap"><small>Curriculum implementation, platform use and training completion per teacher</small><EzExportButtons rows={[["Teacher", "Classes", "Plan position", "Logins (30d)", "Activities enabled (30d)", "Training"], ...teacherRows]} name="teacher-report" title="Teacher implementation" /></div>
          <div className="section"><EzTable head={["Teacher", "Classes", "Plan position", "Logins (30d)", "Activities enabled (30d)", "Training"]} rows={teacherRows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{k === 0 ? <strong>{c}</strong> : c}</td>)}</tr>)} /></div>
        </>
      )}
      {tab === "Curriculum" && (
        curriculumPerm === "no" ? <EzEmpty icon="lock" title="Curriculum analytics are not enabled for principals" /> : (
          <>
            <EzInfo>School-level view only (“Limited” access set by EzRoots). Cross-school comparisons stay with EzRoots.</EzInfo>
            <div className="section"><EzCurriculumTable rows={EzActivityEffectiveness(db, () => true).map((r) => {
              const ids = new Set(kids.map((k) => k.id));
              const atts = db.attempts.filter((a) => a.activityId === r.act.id && ids.has(a.studentId));
              return { ...r, uses: atts.length, mastery: EzAvg(atts.map((a) => a.score)) };
            }).filter((r) => r.uses)} /></div>
            <div className="section"><EzV1Impl /></div>
          </>
        )
      )}
      {tab === "Children" && (
        canChild ? (
          <>
            <EzInfo>Your school allows the principal to view individual learning details. Every view is recorded in the audit log.</EzInfo>
            <div className="section">
              <EzTable head={["Child", "Class", "Activities", "Average", ""]} rows={kids.map((k) => {
                const atts = EzAttempts(db, k.id);
                return (
                  <tr key={k.id}>
                    <td><strong>{k.name}</strong></td><td>{z(db, k.sectionId)}</td><td>{atts.length}</td><td>{EzPct(EzAvg(atts.map((a) => a.score).filter((x) => x != null)))}</td>
                    <td><button className="btn secondary sm" onClick={() => { update((d) => EzAudit(d, me, "viewed child learning details", k.name)); setPick(k); }}>View</button></td>
                  </tr>
                );
              })} />
            </div>
            {pick && <AA wide title={pick.name} onClose={() => setPick(null)}><EzLearningReport kid={pick} /></AA>}
          </>
        ) : (
          <EzEmpty icon="lock" title="Individual child details stay with the class teacher">
            <p>This follows your school’s policy and EzRoots’ permissions (“Controlled”). You can change the school policy in Settings.</p>
          </EzEmpty>
        )
      )}
    </>
  );
}

/* Parents with invitation, verification and consent status (§32). */
function EzPrincipalParents() {
  const { db, me, update, toast } = b();
  const school = EzPrincipalSchool();
  const [q, setQ] = B.useState("");
  const [modal, setModal] = B.useState(null);
  const [form, setForm] = B.useState({});
  const secs = EzSchoolSections(db, school.id).map((s) => s.id);
  const kids = db.students.filter((s) => secs.includes(s.sectionId) && s.status === "active");
  const parents = db.users.filter((u) => u.role === "parent" && u.schoolId === school.id && (!q || `${u.name} ${u.phone}`.toLowerCase().includes(q.toLowerCase())));
  const status = (u) => (u.invite?.status === "linked" && u.consent ? ["Linked · consent given", "good"] : u.invite?.status === "verified" ? ["Verified · consent pending", "warn"] : ["Invited · not verified", ""]);
  const counts = { linked: parents.filter((u) => status(u)[1] === "good").length, pending: parents.filter((u) => status(u)[1] !== "good").length };
  return (
    <>
      <W eyebrow="Families" title="Parents" sub="One login per parent covers all their children. Linking needs the parent to verify their mobile and give consent.">
        <button className="btn" onClick={() => { setForm({ kid: kids[0]?.id, name: "", phone: "" }); setModal("invite"); }}><S n="plus" />Invite parent</button>
      </W>
      <div className="grid g3">
        <F label="Linked families" value={counts.linked} icon="heart" />
        <F label="Waiting for the parent" value={counts.pending} icon="clock" sub="invited or consent pending" />
        <F label="Children without a linked parent" value={kids.filter((k) => !EzParentsOf(db, k.id).some((p) => p.consent)).length} icon="user" />
      </div>
      <div className="row section" style={{ marginTop: 14 }}><div className="search" style={{ maxWidth: 360 }}><S n="search" /><input placeholder="Search parents" value={q} onChange={(e) => setQ(e.target.value)} /></div></div>
      <div className="section">
        <EzTable head={["Parent", "Children", "Status", "Consent", ""]} rows={parents.map((u) => {
          const [label, tone] = status(u);
          return (
            <tr key={u.id}>
              <td><strong>{u.name}</strong><small>{u.phone} · {u.username}</small></td>
              <td>{EzParentChildIds(u).map((id) => EzStudent(db, id)).filter(Boolean).map((s) => <div key={s.id}>{s.name} <small>{z(db, s.sectionId)}</small></div>)}</td>
              <td><EzPill tone={tone}>{label}</EzPill></td>
              <td>{u.consent ? <small>{u.consent.version} · {CA(u.consent.at)}</small> : <small>—</small>}</td>
              <td className="row">
                {status(u)[1] !== "good" && <button className="btn secondary sm" onClick={() => { update((d) => { EzUser(d, u.id).invite.sentAt = uA; EzAudit(d, me, "re-sent parent invite", u.name); }); toast(`Invite re-sent to ${u.phone}`); }}>Resend invite</button>}
                <button className="btn ghost sm" onClick={() => { setForm({ parent: u.id, kid: kids.find((k) => !EzParentChildIds(u).includes(k.id))?.id }); setModal("link"); }}>Link another child</button>
              </td>
            </tr>
          );
        })} />
      </div>
      {modal === "invite" && (
        <AA title="Invite a parent" onClose={() => setModal(null)} foot={<button className="btn" disabled={!form.name || !form.phone} onClick={() => {
          const existing = db.users.find((u) => u.role === "parent" && u.phone === form.phone);
          update((d) => {
            if (existing) {
              const u = EzUser(d, existing.id);
              u.childIds = EzUniq([...EzParentChildIds(u), form.kid]);
              EzAudit(d, me, "linked sibling to existing parent", `${u.name} → ${EzStudent(d, form.kid).name}`);
            } else {
              const id = O("pa");
              d.users.push({ id, role: "parent", name: form.name, username: `parent.${form.phone.slice(-4)}`, schoolId: school.id, active: true, childIds: [form.kid], childId: form.kid, phone: form.phone, invite: { status: "invited", sentAt: uA, via: "SMS link" }, notif: { channels: { inapp: true, email: false, whatsapp: false, sms: true }, frequency: "daily" } });
              EzAudit(d, me, "invited parent", `${form.name} for ${EzStudent(d, form.kid).name}`);
            }
          });
          toast(existing ? `${existing.name} already has a login. ${EzStudent(db, form.kid).name} was added to it.` : `Invite sent to ${form.phone}. They verify with a code, then give consent.`);
          setModal(null);
        }}>Send invite</button>}>
          <N label="Child"><select className="input" value={form.kid} onChange={(e) => setForm({ ...form, kid: e.target.value })}>{kids.map((k) => <option key={k.id} value={k.id}>{k.name} · {z(db, k.sectionId)}</option>)}</select></N>
          <N label="Parent’s name"><input className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></N>
          <N label="Mobile number" hint="the invite and verification code go here"><input className="input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98…" /></N>
          <small>If this number already has a parent login (a sibling at this school), the child is added to that login instead of creating a new one. The parent doesn’t use a seat.</small>
        </AA>
      )}
      {modal === "link" && (
        <AA title="Link another child" onClose={() => setModal(null)} foot={<button className="btn" disabled={!form.kid} onClick={() => {
          update((d) => { const u = EzUser(d, form.parent); u.childIds = EzUniq([...EzParentChildIds(u), form.kid]); EzAudit(d, me, "linked child to parent", `${u.name} → ${EzStudent(d, form.kid).name}`); EzNotify(d, u.id, `${EzStudent(d, form.kid).name} was added to your EzRoots login.`, "/parent"); });
          toast("Linked. The parent now sees both children.");
          setModal(null);
        }}>Link</button>}>
          <N label="Child"><select className="input" value={form.kid} onChange={(e) => setForm({ ...form, kid: e.target.value })}>{kids.map((k) => <option key={k.id} value={k.id}>{k.name} · {z(db, k.sectionId)}</option>)}</select></N>
          <small>Use this for siblings. The parent is notified and sees a switcher for their children.</small>
        </AA>
      )}
    </>
  );
}

/* School settings: v1 screen-time settings + child sign-in method + data policy. */
function EzPrincipalSettings() {
  const { db, me, update, toast } = b();
  const school = EzPrincipalSchool();
  const pol = school.policy;
  const set = (fn) => update((d) => { const s = d.schools.find((x) => x.id === school.id); fn(s.policy); EzAudit(d, me, "changed school settings"); });
  const levels = EzUniq(EzSchoolSections(db, school.id).map((s) => s.level));
  const permChild = EzPerm(db, "principal", "childDetail");
  return (
    <>
      <EzV1SchoolSettings />
      <div className="grid g2 section">
        <EzCard eyebrow="Child sign-in" title="How children sign in">
          <EzInfo>Recommended for ages 3–7: <b>picture + picture PIN</b> on a shared class screen, or a printed <b>QR card</b>. Username and password from Grade 3. Parents can also open the child app from their own login.</EzInfo>
          {levels.map((l) => (
            <N key={l} label={l}>
              <select className="input" value={pol.childSignIn[l] ?? "picture"} onChange={(e) => set((p) => (p.childSignIn[l] = e.target.value))}>
                <option value="picture">Picture + picture PIN</option>
                <option value="qr">QR sign-in card</option>
                <option value="password">Username + password</option>
                <option value="sso" disabled>School single sign-on (Google / Microsoft) · setup by EzRoots</option>
              </select>
            </N>
          ))}
          <small>School code for sign-in: <b>{school.code}</b></small>
        </EzCard>
        <EzCard eyebrow="Data & access policy" title="Who sees what">
          <label className="row between">
            <span>Principal may view individual child learning details</span>
            <EzSwitch label="Principal child access" checked={!!pol.principalChildAccess} onChange={(v2) => set((p) => (p.principalChildAccess = v2))} />
          </label>
          <small>EzRoots permission for principals: <b>{permChild}</b>. {permChild === "controlled" ? "Your school decides with this switch." : "Set by EzRoots."}</small>
          <label className="row between">
            <span>Let children explore extra activities beyond what the teacher enables</span>
            <EzSwitch label="Child explore" checked={!!pol.childExplore} onChange={(v2) => set((p) => (p.childExplore = v2))} />
          </label>
          <small>Off by default: EzRoots is still deciding whether children can browse freely.</small>
        </EzCard>
      </div>
    </>
  );
}


/* Grade & subject tables, reused by the teacher "School analytics" page. */
function EzSchoolAnalytics() {
  const { db, me } = b();
  const school = db.schools.find((s) => s.id === me.schoolId);
  const rows = EzSchoolSections(db, school.id).map((sec) => EzSectionRow(db, sec));
  const table = [["Class", "Students", "Engagement", "Completion", "Performance"], ...rows.map((r) => [z(db, r.sec.id), r.st.students, EzPct(r.engagement), EzPct(r.st.completion), EzPct(r.st.performance)])];
  return (
    <>
      <W eyebrow={school.name} title="School analytics" sub="Aggregated by class. Individual children stay with their own class teacher.">
        <EzExportButtons rows={table} name="school-analytics" title="School analytics" />
      </W>
      <EzTable head={table[0]} rows={table.slice(1).map((r, i) => <tr key={i}>{r.map((c, k) => <td key={k}>{k ? c : <strong>{c}</strong>}</td>)}</tr>)} />
    </>
  );
}

/* Principal manages academic coordinators (PDF §2 "Principal / Academic Coordinator"). */
function EzCoordinators() {
  const { db, me, update, toast } = b();
  const school = EzPrincipalSchool();
  const cos = db.users.filter((u) => u.role === "coordinator" && u.schoolId === school.id);
  const [open, setOpen] = B.useState(false);
  const [f, setF] = B.useState({ name: "", email: "" });
  return (
    <>
      <W eyebrow="People" title="Academic coordinators" sub="Coordinators see the same learning analytics, implementation and school resources as the principal. They don’t manage seats, packages, accounts or school settings.">
        <button className="btn" onClick={() => { setF({ name: "", email: "" }); setOpen(true); }}><S n="plus" />Add coordinator</button>
      </W>
      <EzTable head={["Name", "Username", "Status", ""]} rows={cos.map((u) => (
        <tr key={u.id}>
          <td><strong>{u.name}</strong><small>{u.email}</small></td>
          <td>{u.username}</td>
          <td><EzPill tone={u.active ? "good" : ""}>{u.active ? "Active" : "Deactivated"}</EzPill></td>
          <td><button className="btn secondary sm" onClick={() => { update((d) => { const x = EzUser(d, u.id); x.active = !x.active; EzAudit(d, me, x.active ? "reactivated coordinator" : "deactivated coordinator", u.name); }); }}>{u.active ? "Deactivate" : "Reactivate"}</button></td>
        </tr>
      ))} empty="No coordinators yet." />
      <small className="muted">Coordinators don’t use a teacher seat. Their access to child-level detail follows the same rule as the principal’s.</small>
      {open && (
        <AA title="Add academic coordinator" onClose={() => setOpen(false)} foot={<button className="btn" disabled={!f.name || !f.email} onClick={() => {
          update((d) => { d.users.push({ id: O("u-co"), role: "coordinator", name: f.name, username: `${f.name.split(" ")[0].toLowerCase()}.coordinator`, email: f.email, schoolId: school.id, active: true }); EzAudit(d, me, "added coordinator", f.name); });
          toast(`${f.name} added · sign-in details sent`);
          setOpen(false);
        }}>Add & send sign-in details</button>}>
          <N label="Full name"><input className="input" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></N>
          <N label="Email"><input className="input" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></N>
        </AA>
      )}
    </>
  );
}

/* Coordinator: teacher implementation and training (read-only). */
function EzCoordinatorTeachers() {
  const { db } = b();
  const school = EzPrincipalSchool();
  const teachers = db.users.filter((u) => u.role === "teacher" && u.schoolId === school.id && u.active);
  return (
    <>
      <W eyebrow={school.name} title="Teachers & training" sub="Where each class is in the plan, and each teacher’s training progress." />
      <EzTable head={["Teacher", "Classes", "Plan position", ...db.training.map((m) => m.title)]} rows={teachers.map((u) => {
        const secs = EzUniq((u.teaches ?? []).map((x) => x.sectionId));
        return (
          <tr key={u.id}>
            <td><strong>{u.name}</strong></td>
            <td>{secs.map((sid) => z(db, sid)).join(", ")}</td>
            <td>{secs.map((sid) => `Day ${db.classPosition[sid] ?? 63}`).join(", ")}</td>
            {db.training.map((m) => { const p = db.trainingProgress?.[u.id]?.[m.id] ?? 0; return <td key={m.id}>{p >= 100 ? <EzPill tone="good">Done</EzPill> : `${p}%`}</td>; })}
          </tr>
        );
      })} />
    </>
  );
}
