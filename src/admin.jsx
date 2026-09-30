// v2 EzRoots admin views (§26–31, §47, §52, §53).

/* Overview additions: usage by role, low-usage alerts, school health. */
function EzSAHome() {
  const { db, me, update, toast } = b();
  const th = db.settings.lowUsageThreshold;
  const rows = db.schools.map((s) => ({ s, st: EzSchoolStats(db, s), h: EzHealth(db, s), u: EzUsage(db, s.id) }));
  const low = rows.filter((r) => Math.min(r.u.teachers, r.u.children) < th);
  const avg = (k) => Math.round(EzAvg(rows.map((r) => r.u[k])) ?? 0);
  return (
    <>
      <Nh />
      <div className="sectionhead section" style={{ marginTop: 24 }}>
        <div><div className="eyebrow">Usage</div><h2>Average weekly use of the portal</h2></div>
        <K className="textlink" to="/sa/analytics">Learning analytics <S n="arrow" /></K>
      </div>
      <div className="grid g3">
        <F label="Teachers" value={`${avg("teachers")}%`} icon="user" sub="signed in this week" meter={avg("teachers")} />
        <F label="Children" value={`${avg("children")}%`} icon="star" sub="used the child app this week" meter={avg("children")} />
        <F label="Parents" value={`${avg("parents")}%`} icon="heart" sub="opened the parent portal this week" meter={avg("parents")} />
      </div>
      <div className="split section">
        <EzCard eyebrow={`Alerts · below ${th}%`} title="Schools not using the platform enough" actions={<K className="textlink" to="/sa/settings">Change threshold</K>}>
          {low.map((r) => (
            <div key={r.s.id} className="ezinsight warn">
              <strong>{r.s.name}</strong>
              <p>Teachers {r.u.teachers}% · children {r.u.children}% · parents {r.u.parents}% this week{r.s.lowNetwork ? " · low-network area" : ""}.</p>
              <div className="row">
                <button className="btn secondary sm" onClick={() => {
                  update((d) => { if (r.s.principalId) EzNotify(d, r.s.principalId, "EzRoots: platform use at your school is low this week. Can we help with training or offline set-up?", "/principal/reports"); EzAudit(d, me, "sent low-usage alert", r.s.name); });
                  toast(`Alert sent to ${r.s.name}`);
                }}>Alert the principal</button>
                <K className="btn ghost sm" to={`/sa/schools/${r.s.id}`}>Open school</K>
              </div>
            </div>
          ))}
          {!low.length && <small>Every school is above the threshold.</small>}
        </EzCard>
        <EzTable head={["School", "Health score", "Teachers", "Children", "Parents"]} rows={rows.sort((a, c) => a.h.score - c.h.score).map((r) => (
          <tr key={r.s.id}>
            <td><strong>{r.s.name}</strong><small>{r.s.city}</small></td>
            <td><b>{r.h.score}</b><TA v={r.h.score} tone={r.h.score < 60 ? "bad" : r.h.score < 75 ? "warn" : "good"} /></td>
            <td>{r.u.teachers}%</td><td>{r.u.children}%</td><td>{r.u.parents}%</td>
          </tr>
        ))} />
      </div>
      <small className="muted">School health score = implementation {db.settings.health.implementation}% + engagement {db.settings.health.engagement}% + performance {db.settings.health.performance}% + training {db.settings.health.training}% (weights set in Platform settings).</small>
    </>
  );
}

/* §26 Drill-down: All schools → Grade → Subject → Topic → Concept → Activity → Child. */
const EzLevels = ["All schools", "School", "Grade", "Subject", "Topic", "Concept", "Activity", "Child"];
function EzSAAnalytics({ network }) {
  const { db } = b();
  const [path, setPath] = B.useState([]); // [{level, id, label}]
  const [period, setPeriod] = B.useState("Last 30 days");
  const from = EzAddDays(uA, period === "Last 7 days" ? -7 : period === "Last 30 days" ? -30 : -120);
  const at = (lvl) => path.find((p) => p.level === lvl)?.id;
  const school = db.schools.find((s) => s.id === at("School"));
  const depth = path.length;
  const next = EzLevels[depth + 1];

  // Real rows for schools with child data, synthetic summaries otherwise.
  const kidsOf = (sch, grade) => db.students.filter((s) => s.status === "active" && db.sections.some((x) => x.id === s.sectionId && x.schoolId === sch.id && (!grade || x.level === grade)));
  const measure = (kids, actFilter) => {
    const ids = kids.map((k) => k.id);
    const atts = EzAttempts(db, ids, from, uA).filter((a) => !actFilter || actFilter(EzAct(db, a.activityId)));
    const active = new Set(EzSessions(db, ids, EzAddDays(uA, -7), uA).map((s) => s.studentId)).size;
    const assigns = db.assignments.filter((a) => a.createdAt >= from && a.due <= uA && kids.some((k) => k.sectionId === a.sectionId) && (!actFilter || actFilter(EzAct(db, a.activityId))));
    const expected = assigns.reduce((s, a) => s + (a.studentIds === "all" ? kids.filter((k) => k.sectionId === a.sectionId).length : a.studentIds.length), 0);
    const scores = atts.map((a) => a.score).filter((x) => x != null);
    return { students: kids.length, engagement: kids.length ? (active / kids.length) * 100 : null, completion: expected ? Math.min(100, (atts.filter((a) => a.assignmentId).length / expected) * 100) : null, performance: EzAvg(scores), mastery: scores.length ? (scores.filter((x) => x >= EzMasteryCfg(db).strong).length / scores.length) * 100 : null };
  };
  let rows = [];
  if (depth === 0) {
    rows = db.schools.map((s) => {
      if (s.summary) { const st = EzSchoolStats(db, s); return { id: s.id, label: s.name, sub: s.city, students: st.students, engagement: st.engagement, completion: st.completion, performance: st.performance, mastery: null, synthetic: true }; }
      return { id: s.id, label: s.name, sub: s.city, ...measure(kidsOf(s)) };
    });
  } else if (school) {
    const grade = at("Grade");
    const subject = at("Subject");
    const topic = at("Topic");
    const concept = at("Concept");
    const actId = at("Activity");
    const levelActs = db.activities.filter((a) => a.status === "published" && (!grade || a.level === grade) && (!subject || a.subject === subject) && (!topic || a.topic === topic) && (!concept || a.concept === concept));
    const synth = (key, label, sub) => ({ id: key, label, sub, ...EzSynth(school, `${path.map((p) => p.id).join("|")}|${key}`), mastery: null, synthetic: true });
    if (next === "Grade") {
      const grades = Object.keys(school.packages);
      rows = grades.map((g) => (school.summary ? synth(g, g, `${school.packages[g]} package`) : { id: g, label: g, sub: `${school.packages[g]} package`, ...measure(kidsOf(school, g)) }));
    } else if (next === "Subject") {
      rows = Ct.map((sj) => (school.summary ? synth(sj, sj) : { id: sj, label: sj, ...measure(kidsOf(school, grade), (a) => a?.subject === sj && a?.level === grade) }));
    } else if (next === "Topic") {
      rows = EzUniq(levelActs.map((a) => a.topic)).map((tp) => (school.summary ? synth(tp, tp) : { id: tp, label: tp, ...measure(kidsOf(school, grade), (a) => a?.topic === tp && a?.level === grade && a?.subject === subject) }));
    } else if (next === "Concept") {
      rows = EzUniq(levelActs.map((a) => a.concept)).map((c) => (school.summary ? synth(c, c) : { id: c, label: c, ...measure(kidsOf(school, grade), (a) => a?.concept === c && a?.level === grade) }));
    } else if (next === "Activity") {
      rows = levelActs.map((a) => (school.summary ? synth(a.id, a.title, EzTypeOf(a)) : { id: a.id, label: a.title, sub: EzTypeOf(a), ...measure(kidsOf(school, grade), (x) => x?.id === a.id) }));
    } else if (next === "Child") {
      rows = school.summary ? [] : kidsOf(school, grade).map((k) => {
        const atts = EzAttempts(db, k.id, from, uA).filter((a) => a.activityId === actId);
        return { id: k.id, label: k.name, sub: z(db, k.sectionId), students: 1, engagement: null, completion: atts.length ? 100 : 0, performance: EzAvg(atts.map((a) => a.score).filter((x) => x != null)), mastery: null, child: true };
      });
    }
  }
  const canDrill = (r) => !r.child && next && next !== "Child" && !(network && next === "Activity");
  const table = [["Name", "Students", "Engagement", "Completion", "Performance", "At Strong"], ...rows.map((r) => [r.label, r.students ?? "", EzPct(r.engagement), EzPct(r.completion), EzPct(r.performance), EzPct(r.mastery)])];
  return (
    <>
      <W eyebrow={network ? "Network analytics · aggregated" : "Learning analytics"} title="Across all schools" sub={network ? "Compare schools, grades, subjects and concepts. Individual children at other schools are never shown." : "Drill down: all schools → school → grade → subject → topic → concept → activity → child."}>
        <EzTabs value={period} options={["Last 7 days", "Last 30 days", "This term"]} onChange={setPeriod} />
        <EzExportButtons rows={table} name={`analytics-${EzLevels[depth + 1] ?? "child"}`.toLowerCase()} title={`Learning analytics · ${path.map((p) => p.label).join(" › ") || "All schools"}`} />
      </W>
      <div className="steps">
        <button className={`pill ${depth === 0 ? "primary" : ""}`} onClick={() => setPath([])}>All schools</button>
        {path.map((p, i) => <button key={i} className={`pill ${i === depth - 1 ? "primary" : ""}`} onClick={() => setPath(path.slice(0, i + 1))}>{p.label}</button>)}
      </div>
      {school?.summary && depth > 0 && <EzInfo>{school.name} is shown from summary data in this demo (child records exist for Sunrise Montessori only). Figures below school level are illustrative.</EzInfo>}
      <div className="section">
        <EzTable head={[next ?? "Child", "Students", "Engagement", "Completion", "Performance", "At Strong", ""]} rows={rows.map((r) => (
          <tr key={r.id} className={canDrill(r) ? "click" : ""} onClick={() => { if (canDrill(r)) setPath([...path, { level: next, id: r.id, label: r.label }]); }}>
            <td><strong>{r.label}</strong>{r.sub && <small>{r.sub}</small>}</td>
            <td>{r.students ?? "—"}</td>
            <td>{EzPct(r.engagement)}{r.engagement != null && <TA v={r.engagement} tone={r.engagement < db.settings.lowUsageThreshold ? "bad" : "good"} />}</td>
            <td>{EzPct(r.completion)}</td>
            <td>{EzPct(r.performance)}</td>
            <td>{EzPct(r.mastery)}</td>
            <td>{canDrill(r) ? <S n="arrow" /> : r.child ? <small>child</small> : null}</td>
          </tr>
        ))} empty={next === "Child" && school?.summary ? "Child-level records are available for Sunrise Montessori in this demo." : "No data for this selection."} />
      </div>
      <small className="muted">Engagement = children who used the child app in the last 7 days. Completion = finished ÷ enabled. Performance = average score. “At Strong” = results at or above {EzMasteryCfg(db).strong}%.</small>
    </>
  );
}

/* §27, §28 Curriculum analytics and activity effectiveness. */
function EzCurriculumTable({ rows }) {
  return (
    <EzTable head={["Activity", "Uses", "Engagement", "Mastery", "Needs support rate", "Repeats", "Verdict"]} rows={rows.map((r) => (
      <tr key={r.act.id}>
        <td><strong>{r.act.title}</strong><small>{r.act.level} · {r.act.concept} · {EzTypeOf(r.act)}</small></td>
        <td>{r.uses}</td><td>{EzPct(r.engagement)}</td><td>{EzPct(r.mastery)}</td><td>{EzPct(r.fail)}</td><td>{r.repeats}</td>
        <td><small>{EzQuadrant(r)}</small></td>
      </tr>
    ))} />
  );
}
function EzCurriculumAnalytics() {
  const { db } = b();
  const [level, setLevel] = B.useState("All");
  const rows = EzActivityEffectiveness(db, (a) => level === "All" || a.level === level);
  const byConcept = EzGroup(rows, (r) => `${r.act.level} · ${r.act.concept}`);
  const concepts = [...byConcept.entries()].map(([k, xs]) => ({ k, mastery: EzAvg(xs.map((x) => x.mastery).filter((x) => x != null)), uses: xs.reduce((a, x) => a + x.uses, 0) })).sort((a, c) => (a.mastery ?? 0) - (c.mastery ?? 0));
  const views = db.resourceViews ?? {};
  const rare = db.files.filter((f) => (views[f.id] ?? 0) < 10).slice(0, 6);
  const schools = db.schools.map((s) => ({ s, st: EzSchoolStats(db, s) })).sort((a, c) => c.st.implementation - a.st.implementation);
  const top = (arr, fn, n = 3) => [...arr].sort(fn).slice(0, n);
  const exportRows = [["Activity", "Level", "Concept", "Type", "Uses", "Engagement", "Mastery", "Needs support rate", "Repeats", "Verdict"], ...rows.map((r) => [r.act.title, r.act.level, r.act.concept, EzTypeOf(r.act), r.uses, EzPct(r.engagement), EzPct(r.mastery), EzPct(r.fail), r.repeats, EzQuadrant(r)])];
  const Q = ({ q, children }) => <EzCard eyebrow="Question" title={q}>{children}</EzCard>;
  return (
    <>
      <W eyebrow="Curriculum intelligence" title="Curriculum analytics" sub="What works, what’s hard, and where schools need support. Feeds curriculum improvement.">
        <select className="input" style={{ width: 140 }} value={level} onChange={(e) => setLevel(e.target.value)}>{["All", ...Mt].map((l) => <option key={l}>{l}</option>)}</select>
        <EzExportButtons rows={exportRows} name="curriculum-analytics" title="Curriculum analytics" />
      </W>
      <div className="grid g2">
        <Q q="Which activities work?">{top(rows.filter((r) => EzQuadrant(r) === "Strong activity"), (a, c) => (c.mastery ?? 0) - (a.mastery ?? 0)).map((r) => <p key={r.act.id}>🟢 <b>{r.act.title}</b> · engagement {EzPct(r.engagement)}, mastery {EzPct(r.mastery)}</p>)}</Q>
        <Q q="Which activities are difficult?">{top(rows, (a, c) => (c.fail ?? 0) - (a.fail ?? 0)).map((r) => <p key={r.act.id}>🔴 <b>{r.act.title}</b> · {EzPct(r.fail)} below Developing</p>)}</Q>
        <Q q="Which concepts have low mastery?">{concepts.slice(0, 4).map((c) => <p key={c.k}>{c.k} · <b>{EzPct(c.mastery)}</b> average</p>)}</Q>
        <Q q="Which activities are highly engaging?">{top(rows, (a, c) => (c.engagement ?? 0) - (a.engagement ?? 0)).map((r) => <p key={r.act.id}>⭐ <b>{r.act.title}</b> · {EzPct(r.engagement)} completion</p>)}</Q>
        <Q q="Which resources are rarely used?">{rare.map((f) => <p key={f.id}>📁 {f.name} · {views[f.id] ?? 0} views</p>)}</Q>
        <Q q="Which activities are frequently repeated?">{top(rows, (a, c) => c.repeats - a.repeats).map((r) => <p key={r.act.id}>🔁 <b>{r.act.title}</b> · {r.repeats} repeats</p>)}</Q>
        <Q q="Which schools have high implementation?">{schools.slice(0, 3).map(({ s, st }) => <p key={s.id}>🏫 <b>{s.name}</b> · {EzPct(st.implementation)} of plan</p>)}</Q>
        <Q q="Which schools need support?">{schools.slice(-2).map(({ s, st }) => <p key={s.id}>🤝 <b>{s.name}</b> · {EzPct(st.implementation)} of plan, engagement {EzPct(st.engagement)}</p>)}</Q>
      </div>
      <div className="split section">
        <EzCard eyebrow="Activity effectiveness" title="Engagement against mastery">
          <EzQuadrantChart rows={rows} />
          <small>Top right: strong. Bottom right: enjoyable but needs instructional improvement. Top left: effective but needs better presentation.</small>
        </EzCard>
        <EzCard eyebrow="How to read this">
          <p><b>Engagement</b> = results ÷ children the activity was enabled for.</p>
          <p><b>Mastery</b> = average score. <b>Needs support rate</b> = share of results below {EzMasteryCfg(db).developing}%.</p>
          <p><b>Repeats</b> = results with a retry or more than two tries.</p>
          <small>Data covers every school with child records (Sunrise Montessori in this demo).</small>
        </EzCard>
      </div>
      <div className="section"><EzCurriculumTable rows={rows} /></div>
    </>
  );
}

/* §30 Role-based analytics access, configurable and enforced. */
function EzPermissions() {
  const { db, me, update, toast } = b();
  const opts = { yes: "✓", no: "—", controlled: "Controlled", limited: "Limited" };
  const choices = (key, role) =>
    key === "childDetail" && role === "principal" ? ["controlled", "yes", "no"] : key === "curriculum" ? ["limited", "yes", "no"] : ["yes", "no"];
  const cycle = (key, role, v2) => { const c = choices(key, role); return c[(c.indexOf(v2) + 1) % c.length] ?? c[0]; };
  const heads = [["student", "Child"], ["parent", "Parent"], ["teacher", "Teacher"], ["principal", "Principal / coordinator"], ["ezroots", "EzRoots"]];
  return (
    <>
      <W eyebrow="Access" title="Role-based analytics access" sub="Click a cell to change it. Changes apply straight away across the platform and are recorded in the audit log.">
        <button className="btn secondary" onClick={() => { update((d) => { d.permissions = JSON.parse(JSON.stringify(EzPermDefaults)); EzAudit(d, me, "reset permissions to defaults"); }); toast("Permissions reset"); }}>Reset to defaults</button>
      </W>
      <div className="card tablewrap">
        <table className="table matrix">
          <thead><tr><th>Data</th>{heads.map(([, l]) => <th key={l}>{l}</th>)}</tr></thead>
          <tbody>
            {EzPermRows.map(([key, label]) => (
              <tr key={key}>
                <td><strong>{label}</strong></td>
                {heads.map(([role]) => {
                  if (role === "ezroots") return <td key={role}><span className="ezperm yes">✓</span></td>;
                  if (!EzPermApplies[key].includes(role)) return <td key={role}><small className="muted">n/a</small></td>;
                  const val = db.permissions[key][role];
                  return (
                    <td key={role}>
                      <button className={`ezperm ${val}`} title={EzPermHelp[key]?.[role]} onClick={() => update((d) => { const nv = cycle(key, role, val); d.permissions[key][role] = nv; EzAudit(d, me, "changed permission", `${label} · ${role}: ${nv}`); })}>
                        {opts[val]}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid g2 section">
        <EzCard eyebrow="Meaning">
          <p><b>✓</b> full access · <b>—</b> switched off · <b>n/a</b> doesn’t apply to that role</p>
          <p><b>Controlled</b>: the principal sees child details only if the school’s own policy switches it on. Each view is audit-logged.</p>
          <p><b>Limited</b>: curriculum analytics for own class (teacher) or own school (principal) only.</p>
          <p>Parents only ever see their own children; children only their own work; no public rankings. EzRoots always has full access.</p>
        </EzCard>
        <EzCard eyebrow="What each cell controls">
          {EzPermRows.map(([key, label]) => (
            <details key={key}>
              <summary><b>{label}</b></summary>
              {Object.entries(EzPermHelp[key] ?? {}).map(([role, txt]) => <p key={role} className="muted" style={{ margin: "4px 0" }}><b>{heads.find((h) => h[0] === role)?.[1]}:</b> {txt}</p>)}
            </details>
          ))}
        </EzCard>
      </div>
    </>
  );
}

/* §31–33 Privacy & data. */
function EzPrivacy() {
  const { db, me, update, toast } = b();
  const [tab, setTab] = B.useState("Overview");
  const parents = db.users.filter((u) => u.role === "parent");
  const consented = parents.filter((u) => u.consent);
  const ret = db.settings.retention;
  const setRet = (k, v2) => update((d) => { d.settings.retention[k] = v2; EzAudit(d, me, "changed retention", `${k}: ${v2}`); });
  const fulfil = (r) => {
    const kid = EzStudent(db, r.studentId);
    if (r.kind === "Export") {
      const data = { child: kid, attempts: db.attempts.filter((a) => a.studentId === kid.id), sessions: db.sessions.filter((s) => s.studentId === kid.id), observations: db.observations.filter((o) => o.studentId === kid.id), assessments: db.assessments.filter((a) => a.studentId === kid.id) };
      EzDownload(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), `${kid.username}-export.json`);
    }
    update((d) => {
      const x = d.dataRequests.find((y) => y.id === r.id);
      x.status = "Done";
      x.doneAt = uA;
      if (r.kind === "Deletion") {
        d.attempts = d.attempts.filter((a) => a.studentId !== r.studentId);
        d.sessions = d.sessions.filter((s) => s.studentId !== r.studentId);
        d.portfolio = d.portfolio.filter((p) => p.studentId !== r.studentId);
        d.homeObservations = d.homeObservations.filter((p) => p.studentId !== r.studentId);
        d.events = d.events.filter((e) => e.studentId !== r.studentId);
      }
      EzNotify(d, r.parentId, `Your ${r.kind.toLowerCase()} request for ${kid.name} is complete.`, "/parent/settings");
      EzAudit(d, me, `completed ${r.kind.toLowerCase()} request`, kid.name);
    });
    toast(`${r.kind} request completed · parent notified`);
  };
  const laws = [
    ["Digital Personal Data Protection Act, 2023 · s.9 (children)", "Verifiable consent of a parent before processing a child’s data; no processing likely to harm a child’s well-being; no tracking, behavioural monitoring or targeted advertising directed at children.", "Parent OTP verification + recorded consent before the child app works; analytics limited to learning; no ads or third-party trackers. Exemptions for educational institutions under the DPDP Rules, 2025 to be confirmed with counsel."],
    ["DPDP Act · s.5–6 (notice & consent)", "Clear notice of what is collected and why; consent that can be withdrawn as easily as given.", "Plain-language consent screen; withdraw from parent Settings; consent version and date stored."],
    ["DPDP Act · s.8 (obligations)", "Reasonable security safeguards; personal data breach notification to the Data Protection Board and affected people; erase data when purpose ends.", "Encryption, access control, audit log, retention rules below, breach runbook (production)."],
    ["DPDP Act · s.11–13 (rights)", "Right to access, correction and erasure; grievance redressal.", "Parent download & deletion requests (this page); grievance contact published in the parent portal."],
    ["IT Act, 2000 · s.43A & SPDI Rules, 2011", "Reasonable security practices for sensitive personal data.", "ISO 27001-style controls in hosting set-up (production)."],
    ["CERT-In Directions, 28 April 2022", "Report cyber incidents within 6 hours; keep ICT system logs for 180 days in India.", "Log retention 180 days in an Indian region; incident runbook (production)."],
  ];
  return (
    <>
      <W eyebrow="Privacy & data" title="Child data protection" sub="Child privacy is a high-priority requirement (§31).">
        <EzTabs value={tab} options={["Overview", "Consent", "Requests", "Retention", "Audit log", "India compliance"]} onChange={setTab} />
      </W>
      {tab === "Overview" && (
        <div className="grid g2">
          <EzCard eyebrow="In this prototype">
            <p>✅ Parent invite → OTP verification → consent before linking (§32)</p>
            <p>✅ Role-based access with configurable permissions (§30)</p>
            <p>✅ Child media private by default: only the child, their teachers and family (§33)</p>
            <p>✅ Audit log of sensitive actions; data export & deletion requests</p>
            <p>✅ No leaderboards, no public profiles, no ads</p>
          </EzCard>
          <EzCard eyebrow="Production controls (to build)">
            <p>🔒 TLS 1.2+ in transit; AES-256 encryption at rest for database, backups and media</p>
            <p>🔒 Media served through short-lived signed URLs; no public buckets</p>
            <p>🔒 MFA for EzRoots admin accounts; session timeouts on shared school devices</p>
            <p>🔒 Data hosted in an Indian region (to confirm with EzRoots)</p>
            <p>🔒 Daily encrypted backups, tested restores, monitoring and alerting</p>
          </EzCard>
          <div className="grid g3" style={{ gridColumn: "1 / -1" }}>
            <F label="Parents with consent" value={`${consented.length} / ${parents.length}`} icon="heart" meter={gA(consented.length, parents.length)} />
            <F label="Open data requests" value={db.dataRequests.filter((r) => r.status === "Open").length} icon="flag" />
            <F label="Audit entries" value={db.audit.length} icon="shield" />
          </div>
        </div>
      )}
      {tab === "Consent" && (
        <EzTable head={["Parent", "Children", "Status", "Consent", "Method"]} rows={parents.slice(0, 80).map((u) => (
          <tr key={u.id}>
            <td><strong>{u.name}</strong><small>{db.schools.find((s) => s.id === u.schoolId)?.name}</small></td>
            <td>{EzParentChildIds(u).map((id) => EzStudent(db, id)?.name).join(", ")}</td>
            <td><EzPill tone={u.consent ? "good" : "warn"}>{u.invite?.status ?? "—"}</EzPill></td>
            <td>{u.consent ? `${u.consent.version} · ${CA(u.consent.at)}` : "Pending"}</td>
            <td><small>{u.consent?.method ?? u.invite?.via}</small></td>
          </tr>
        ))} />
      )}
      {tab === "Requests" && (
        <EzTable head={["Date", "Request", "Child", "Parent", "Status", ""]} rows={db.dataRequests.map((r) => (
          <tr key={r.id}>
            <td>{CA(r.date)}</td><td>{r.kind}</td><td>{EzStudent(db, r.studentId)?.name ?? "(deleted)"}</td><td>{EzUser(db, r.parentId)?.name}</td>
            <td><EzPill tone={r.status === "Done" ? "good" : "warn"}>{r.status}</EzPill></td>
            <td>{r.status === "Open" && <button className="btn sm" onClick={() => fulfil(r)}>{r.kind === "Export" ? "Export & close" : "Delete learning data"}</button>}</td>
          </tr>
        ))} empty="No requests." />
      )}
      {tab === "Retention" && (
        <EzCard eyebrow="Retention rules" title="How long data is kept">
          {[["activity", "Learning activity & results", ["While enrolled + 1 year", "While enrolled + 3 years", "Until deletion request"]], ["media", "Child photos, drawings & uploads", ["6 months after leaving", "1 year after leaving", "Until deletion request"]], ["sessions", "Session & event logs", ["90 days", "180 days", "1 year"]], ["audit", "Audit log", ["1 year", "3 years", "7 years"]], ["backups", "Backups", ["7 days", "30 days", "90 days"]]].map(([k, l, os]) => (
            <N key={k} label={l}><select className="input" value={ret[k]} onChange={(e) => setRet(k, e.target.value)}>{os.map((o) => <option key={o}>{o}</option>)}</select></N>
          ))}
          <small>When a student leaves, the principal chooses “archive” or “delete history”; archived data is deleted automatically when its period ends.</small>
        </EzCard>
      )}
      {tab === "Audit log" && (
        <>
          <div className="row between"><small>{db.audit.length} entries</small><EzExportButtons rows={[["When", "Who", "Role", "Action", "Detail"], ...db.audit.map((a) => [a.at, a.who, a.role, a.action, a.detail])]} name="audit-log" title="Audit log" /></div>
          <div className="section"><EzTable head={["When", "Who", "Action", "Detail"]} rows={db.audit.slice(0, 100).map((a) => (
            <tr key={a.id}><td><small>{new Date(a.at).toLocaleString("en-IN")}</small></td><td><b>{a.who}</b><small>{a.role}</small></td><td>{a.action}</td><td><small>{a.detail}</small></td></tr>
          ))} /></div>
        </>
      )}
      {tab === "India compliance" && (
        <>
          <EzInfo tone="">This mapping is a starting point for EzRoots’ legal counsel to confirm, not legal advice.</EzInfo>
          <div className="section"><EzTable head={["Requirement", "What it asks", "How the platform addresses it"]} rows={laws.map((l) => <tr key={l[0]}><td><strong>{l[0]}</strong></td><td><small>{l[1]}</small></td><td><small>{l[2]}</small></td></tr>)} /></div>
        </>
      )}
    </>
  );
}

/* Platform settings, wired to the mastery engine (§14) and others. */
function EzPlatformSettings() {
  const { db, me, update, toast } = b();
  const [s, setS] = B.useState(() => JSON.parse(JSON.stringify(db.settings)));
  const m = s.mastery;
  const setM = (k, v2) => setS({ ...s, mastery: { ...m, [k]: Number(v2) } });
  const setH = (k, v2) => setS({ ...s, health: { ...s.health, [k]: Number(v2) } });
  const valid = m.strong > m.developing && m.developing > 0 && m.strong <= 100;
  const save = () => {
    update((d) => { d.settings = s; EzAudit(d, me, "changed platform settings"); });
    toast("Settings saved · dashboards now use the new rules");
  };
  const storage = db.files.reduce((a, f) => a + (f.sizeMB ?? 0), 0);
  return (
    <>
      <W eyebrow="Platform" title="Platform settings"><button className="btn" disabled={!valid} onClick={save}>Save changes</button></W>
      <div className="grid g2">
        <EzCard eyebrow="Learning indicators" title="Concept mastery method (§14)">
          <div className="grid g2">
            <N label="“Strong” from (%)"><input className="input" type="number" value={m.strong} onChange={(e) => setM("strong", e.target.value)} /></N>
            <N label="“Developing” from (%)"><input className="input" type="number" value={m.developing} onChange={(e) => setM("developing", e.target.value)} /></N>
            <N label="Activity weight"><input className="input" type="number" value={m.activityWeight} onChange={(e) => setM("activityWeight", e.target.value)} /></N>
            <N label="Term assessment weight"><input className="input" type="number" value={m.assessmentWeight} onChange={(e) => setM("assessmentWeight", e.target.value)} /></N>
            <N label="Look back (days)"><input className="input" type="number" value={m.recencyDays} onChange={(e) => setM("recencyDays", e.target.value)} /></N>
            <N label="Minimum results"><input className="input" type="number" value={m.minEvidence} onChange={(e) => setM("minEvidence", e.target.value)} /></N>
          </div>
          {!valid && <div className="notice bad">“Strong” must be higher than “Developing”.</div>}
          <small>Teachers and parents see a “How is this calculated?” note that always matches these values.</small>
        </EzCard>
        <EzCard eyebrow="Content" title="Files and viewing (§54–55)">
          <N label="Maximum upload size (MB)" hint="larger videos get a streaming copy"><input className="input" type="number" value={s.maxUploadMB} onChange={(e) => setS({ ...s, maxUploadMB: Number(e.target.value) })} /></N>
          <label className="row between"><span>Allow downloads by default for new files</span><EzSwitch label="Downloads default" checked={s.downloadsDefault} onChange={(v2) => setS({ ...s, downloadsDefault: v2 })} /></label>
          <label className="row between"><span>Watermark viewed files with the school name</span><EzSwitch label="Watermark" checked={s.watermark} onChange={(v2) => setS({ ...s, watermark: v2 })} /></label>
          <label className="row between"><span>Child “See” section (read-along stories, songs & rhymes)</span><EzSwitch label="Child See" checked={s.childSee !== false} onChange={(v2) => setS({ ...s, childSee: v2 })} /></label>
          <small>EzRoots to confirm: the call summary says no recorded lessons for children. “See” holds interactive read-along stories and action rhymes only, not teacher videos.</small>
          <EzInfo>Screenshots can’t be fully blocked in a browser. Production uses view-only streaming, watermarks and no downloads for protected files.</EzInfo>
        </EzCard>
        <EzCard eyebrow="School dashboard" title="Welcome note & quotes (§54)">
          <N label="Welcome note from EzRoots"><textarea className="input" value={s.welcomeNote} onChange={(e) => setS({ ...s, welcomeNote: e.target.value })} /></N>
          <N label="Motivational quotes" hint="one per line, rotates daily"><textarea className="input" rows={5} value={s.quotes.join("\n")} onChange={(e) => setS({ ...s, quotes: e.target.value.split("\n").filter((x) => x.trim()) })} /></N>
        </EzCard>
        <EzCard eyebrow="Alerts & health" title="School monitoring (§26, §52)">
          <N label="Low-usage alert below (%)"><input className="input" type="number" value={s.lowUsageThreshold} onChange={(e) => setS({ ...s, lowUsageThreshold: Number(e.target.value) })} /></N>
          <div className="grid g2">
            {Object.keys(s.health).map((k) => <N key={k} label={`Health weight · ${k}`}><input className="input" type="number" value={s.health[k]} onChange={(e) => setH(k, e.target.value)} /></N>)}
          </div>
        </EzCard>
        <EzCard eyebrow="Future features" title="Switch on when ready">
          <label className="row between"><span>Adaptive difficulty (§37) · only after enough data and pedagogical validation</span><EzSwitch label="Adaptive" checked={s.adaptive} onChange={(v2) => setS({ ...s, adaptive: v2 })} /></label>
          <label className="row between"><span>EzRoots Assistant preview for teachers, parents and admins (§56)</span><EzSwitch label="AI preview" checked={s.aiPreview} onChange={(v2) => setS({ ...s, aiPreview: v2 })} /></label>
          <small>When adaptive is on, a child who scores Strong twice in a concept is offered the next level; a child who needs support is offered simpler practice first.</small>
        </EzCard>
        <EzCard eyebrow="Hosting (§53)" title="Platform health">
          <div className="row between"><span>Storage used</span><b>{(storage / 1024).toFixed(1)} GB of 500 GB</b></div>
          <TA v={(storage / 1024 / 500) * 100} tone="good" />
          <div className="row between"><span>Last backup</span><b>Today 02:00 · encrypted</b></div>
          <div className="row between"><span>HTTPS certificate</span><b>Valid · auto-renews</b></div>
          <div className="row between"><span>Uptime (30 days)</span><b>99.9%</b></div>
          <small>Sample values. Hosting, backups and monitoring are set up by the vendor on EzRoots’ behalf; the architecture is shared after UI sign-off.</small>
        </EzCard>
      </div>
    </>
  );
}
