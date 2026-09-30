// v2 parent portal (§16–20, §32, §42–46). One parent login covers all children.

function EzParentCtx() {
  const { db, me } = b();
  const kid = EzStudent(db, EzParentChildId(db, me));
  const section = db.sections.find((s) => s.id === kid?.sectionId);
  const school = EzSchoolOfSection(db, kid?.sectionId);
  return { db, me, kid, section, school, first: EzFirst(kid?.name), teacher: EzTeacherOf(db, kid?.sectionId) };
}

/* Sidebar: "My children" switcher (§16). */
function EzParentSwitcher() {
  const { db, me, update } = b();
  const ids = EzParentChildIds(me);
  const cur = EzParentChildId(db, me);
  return (
    <div className="ctx">
      <label>{ids.length > 1 ? "My children" : "Your child"}</label>
      {ids.map((id) => {
        const s = EzStudent(db, id);
        if (!s) return null;
        return (
          <button key={id} className={`ezchild ${id === cur ? "on" : ""}`} onClick={() => update((d) => { d.parentContext = { ...(d.parentContext ?? {}), [me.id]: id }; })}>
            <span style={{ fontSize: 20 }}>{s.avatar}</span>
            <span>
              <strong>{EzFirst(s.name)}</strong>
              <small>{z(db, s.sectionId)}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* First sign-in: verify identity, then give consent (§32, DPDP). */
function EzParentGate({ children }) {
  const { db, me, update, toast } = b();
  const [step, setStep] = B.useState(me?.invite?.status === "verified" ? 2 : 1);
  const [otp, setOtp] = B.useState("");
  const [agree, setAgree] = B.useState({ data: false, share: false });
  if (!me || (me.invite?.status === "linked" && me.consent)) return children;
  const kids = EzParentChildIds(me).map((id) => EzStudent(db, id)).filter(Boolean);
  const school = EzSchoolOfSection(db, kids[0]?.sectionId);
  return (
    <div className="login">
      <section className="left">
        <span className="brand"><span className="mark">EZ</span><strong style={{ color: "#fff" }}>EZ ROOTS</strong></span>
        <div>
          <h1>Welcome, {EzFirst(me.name)}</h1>
          <p>{school?.name} invited you to follow {kids.map((k) => EzFirst(k.name)).join(" and ")}’s learning.</p>
        </div>
        <small style={{ color: "#cfc6e8" }}>Step {step} of 2</small>
      </section>
      <section className="right">
        <div className="box">
          {step === 1 ? (
            <>
              <div className="eyebrow">Step 1 · Verify it’s you</div>
              <h1>Enter the code we sent</h1>
              <p className="muted">We sent a 6-digit code to the mobile number the school has for you: {me.phone?.replace(/\d(?=\d{2})/g, "•")}.</p>
              <N label="Code" hint="demo code 123456"><input className="input" inputMode="numeric" value={otp} onChange={(e) => setOtp(e.target.value)} /></N>
              <button className="btn lg" disabled={otp.length !== 6} onClick={() => {
                if (otp !== "123456") return toast("That code doesn’t match. Try 123456 in the demo.");
                update((d) => { const u = EzUser(d, me.id); u.invite = { ...u.invite, status: "verified", verifiedAt: uA }; EzAudit(d, me, "verified identity (OTP)"); });
                setStep(2);
              }}>Verify</button>
              <small>Not your number? Ask the school office to correct it.</small>
            </>
          ) : (
            <>
              <div className="eyebrow">Step 2 · Your consent</div>
              <h1>How EzRoots uses {kids.map((k) => EzFirst(k.name)).join(" and ")}’s data</h1>
              <div className="ezconsent">
                <p><b>What we collect:</b> name, class, the activities your child does, results, time spent, teacher notes and any work your child or you choose to upload.</p>
                <p><b>Why:</b> only to support your child’s learning at school and at home. No advertising, no selling data, no profiling beyond learning.</p>
                <p><b>Who sees it:</b> you, your child’s teachers, and EzRoots’ academic team. The principal sees class and school summaries.</p>
                <p><b>Your rights:</b> see, download or ask us to delete your child’s data at any time from Settings, and withdraw consent (the child account then stops).</p>
              </div>
              <label className="row"><input type="checkbox" checked={agree.data} onChange={(e) => setAgree({ ...agree, data: e.target.checked })} /> I am the parent or guardian and I agree to the above.</label>
              <label className="row"><input type="checkbox" checked={agree.share} onChange={(e) => setAgree({ ...agree, share: e.target.checked })} /> My child may upload drawings and photos of their work (private to teacher and family).</label>
              <button className="btn lg" disabled={!agree.data} onClick={() => {
                update((d) => {
                  const u = EzUser(d, me.id);
                  u.invite = { ...u.invite, status: "linked" };
                  u.consent = { at: uA, version: "v1.0", method: "In-app, after OTP verification", media: agree.share };
                  EzAudit(d, me, "gave consent v1.0", kids.map((k) => k.name).join(", "));
                });
                toast("Thank you. You’re all set.");
              }}>Agree and continue</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function EzWeekSummary(db, kid, weekStart) {
  const end = EzAddDays(weekStart, 6) > uA ? uA : EzAddDays(weekStart, 6);
  const e = EzEngagement(db, kid.id, weekStart, end);
  const atts = EzAttempts(db, kid.id, weekStart, end);
  const assigned = db.assignments.filter((a) => a.sectionId === kid.sectionId && a.createdAt >= weekStart && a.createdAt <= end && (a.studentIds === "all" || a.studentIds.includes(kid.id)));
  const concepts = EzUniq(atts.map((a) => EzAct(db, a.activityId)?.concept).filter(Boolean));
  const ms = EzChildConcepts(db, kid.id);
  const strong = ms.filter((m) => m.level === "Strong" && concepts.includes(m.concept)).map((m) => m.concept);
  const allStrong = ms.filter((m) => m.level === "Strong").map((m) => m.concept);
  const practising = ms.filter((m) => m.level === "Needs support" || (m.level === "Developing" && m.pct < 70)).map((m) => m.concept);
  const prefs = EzPreferences(db, kid.id);
  const fav = prefs[0]?.type;
  const idea = practising.map((c) => EzHomeIdeas[c]?.[0]).find(Boolean) ?? concepts.map((c) => EzHomeIdeas[c]?.[0]).find(Boolean);
  return { ...e, attempts: atts, assigned: assigned.length, completed: EzUniq(atts.map((a) => a.assignmentId).filter(Boolean)).length, concepts, strong: strong.length ? strong : allStrong.slice(0, 3), practising, fav, idea, end };
}

/* §17 Parent dashboard. */
function EzParentHome() {
  const { db, me, kid, section, school, first, teacher } = EzParentCtx();
  const nav = H();
  const { update } = b();
  const w = EzWeekSummary(db, kid, EzAddDays(uA, -6));
  const last = EzWeekSummary(db, kid, EzAddDays(uA, -13));
  const notes = db.observations.filter((o) => o.studentId === kid.id && o.shared).sort((a, c) => c.date.localeCompare(a.date));
  const open = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)) && a.due >= uA && !db.attempts.some((x) => x.assignmentId === a.id && x.studentId === kid.id));
  const canAct = EzAllowed(db, me, "ownActivity");
  const canPerf = EzAllowed(db, me, "ownPerformance");
  const exploring = EzChildConcepts(db, kid.id).filter((m) => w.concepts.includes(m.concept) || m.level === "Strong").slice(0, 4);
  return (
    <>
      <W eyebrow={`${z(db, section.id)} · ${school.name}`} title={`${first}’s learning`} sub={`Class teacher: ${teacher?.name ?? "—"} · Class is on Day ${db.classPosition[section.id] ?? 63}`}>
        {canPerf && <button className="btn secondary" onClick={() => nav("/parent/weekly")}><S n="file" />Weekly summary</button>}
        <button className="btn" onClick={() => {
          update((d) => { d.parentAssist = me.id; d.userId = db.users.find((u) => u.role === "student" && u.childId === kid.id)?.id; EzAudit(d, me, "opened child app (parent-assisted)", kid.name); });
          nav("/student");
        }}>▶ Open {first}’s learning app</button>
      </W>
      <div className="eyebrow" style={{ marginBottom: 8 }}>Last 7 days</div>
      <div className="grid g4">
        {canAct && <F label="Learning time" value={EzFmtMin(w.activeSec)} icon="clock" sub={`${w.sessions} sessions · last week ${EzFmtMin(last.activeSec)}`} />}
        {canAct && <F label="Activities" value={w.attempts.length} icon="star" sub={`${w.assigned} enabled by the teacher`} />}
        {canAct && <F label="Completed" value={w.completed} icon="check" sub="teacher-enabled activities finished" />}
        {canPerf && <F label="Average performance" value={EzPct(w.avgScore)} icon="chart" sub="how well, not just done" />}
      </div>
      <div className="split section">
        <div className="stack">
          {canPerf && <EzCard eyebrow="Exploring" title="What’s going well">
            <div className="row wrap">
              {exploring.map((m) => <EzPill key={m.concept} tone="good">⭐ {m.concept}</EzPill>)}
              {!exploring.length && <small>Activities will show here as {first} plays.</small>}
            </div>
            <div className="eyebrow" style={{ marginTop: 10 }}>Needs more practice</div>
            <div className="row wrap">
              {w.practising.map((c) => <EzPill key={c} tone="warn">{c}</EzPill>)}
              {!w.practising.length && <small>Nothing right now. 🎉</small>}
            </div>
            <small>“Needs more practice” means a little more play will help. It is never a label.</small>
          </EzCard>}
          <EzCard eyebrow="Waiting at home" title="Home activities">
            {open.map((a) => {
              const act = EzAct(db, a.activityId);
              return (
                <div key={a.id} className="row between">
                  <span>{act?.art} <b>{act?.title}</b> <small>· {a.mode === "home" ? "Home" : "Class"}</small></span>
                  <EzPill tone="pink">Due {CA(a.due)}</EzPill>
                </div>
              );
            })}
            {!open.length && <small>All caught up. 🎉</small>}
            <small>{first} signs in on the child app to play. Screen time is limited by the school.</small>
          </EzCard>
        </div>
        <div className="stack">
          {notes[0] && (
            <EzCard eyebrow={`Teacher note · ${notes[0].type ?? "Note"}`}>
              <p>“{notes[0].text}”</p>
              <small>{CA(notes[0].date)} · {notes[0].concept}</small>
              <button className="btn secondary sm" onClick={() => nav("/parent/notes")}>All notes</button>
            </EzCard>
          )}
          {w.idea && (
            <EzCard eyebrow="Try at home" title="5 minutes, everyday things">
              <p>{w.idea}</p>
              <button className="btn secondary sm" onClick={() => nav("/parent/try")}>More ideas</button>
            </EzCard>
          )}
          <EzCard eyebrow="Class diary">
            <p>See what the class did each day.</p>
            <button className="btn secondary sm" onClick={() => nav("/parent/diary")}>Open class diary</button>
          </EzCard>
        </div>
      </div>
    </>
  );
}

/* §19 Weekly summary ("This Week with EzRoots"). */
function EzParentWeekly() {
  const { db, kid, section, school, first } = EzParentCtx();
  const [off, setOff] = B.useState(0);
  const ws = EzAddDays(uA, -6 - 7 * off);
  const w = EzWeekSummary(db, kid, ws);
  const allowed = _e(school.packages[section.level], "Gold");
  if (!allowed) return <><W title="Weekly summary" /><div className="notice"><S n="lock" />The weekly summary is part of the Gold package and above.</div></>;
  return (
    <>
      <W eyebrow="Weekly summary" title="This week with EzRoots" sub={`${CA(ws)} – ${CA(w.end)} · ${first}`}>
        <button className="btn secondary" onClick={() => setOff(off + 1)}>← Earlier week</button>
        <button className="btn secondary" disabled={!off} onClick={() => setOff(off - 1)}>Later week →</button>
        <button className="btn secondary" onClick={() => window.print()}><S n="down" />Print</button>
      </W>
      <div className="card pad stack ezweekly">
        <h2>{first} explored {w.attempts.length} {w.attempts.length === 1 ? "activity" : "activities"} and learned for {EzFmtMin(w.activeSec)}.</h2>
        <div className="grid g3">
          <div>
            <div className="eyebrow">Did especially well in</div>
            {w.strong.length ? w.strong.map((c) => <p key={c}>⭐ {c}</p>) : <p>Keep exploring!</p>}
          </div>
          <div>
            <div className="eyebrow">Is practising</div>
            {w.practising.length ? w.practising.map((c) => <p key={c}>🌱 {c}</p>) : <p>Nothing extra this week.</p>}
          </div>
          <div>
            <div className="eyebrow">Favourite activity type</div>
            <p>🧩 {w.fav ?? "—"}</p>
            <small>Based on what {first} played most. It’s about enjoyment, not personality.</small>
          </div>
        </div>
        {w.idea && (
          <div className="notice good">
            <S n="heart" />
            <span><b>Try at home:</b> {w.idea.replace(/your child/gi, first)}</span>
          </div>
        )}
      </div>
    </>
  );
}

/* §18 Parent analytics. */
function EzParentProgress() {
  const { db, kid, first } = EzParentCtx();
  const [concept, setConcept] = B.useState(null);
  const ms = EzChildConcepts(db, kid.id);
  const weeks = EzBuckets(db, kid.id, "week", 8);
  const prefs = EzPreferences(db, kid.id);
  const trendConcept = concept ?? EzTrendDefault(db, kid.id, ms);
  const monthly = EzMonthly(db, kid.id, trendConcept);
  const assess = db.assessments.filter((a) => a.studentId === kid.id);
  return (
    <>
      <W eyebrow="Progress" title={`How ${first} is growing`} sub="Based on activities and the teacher’s term assessments. It complements, and doesn’t replace, the school report card." />
      <div className="split">
        <EzCard eyebrow="Concept progress" title="Strengths and areas to practise">
          <EzMasteryMap rows={ms} onPick={setConcept} />
          <EzMethod />
        </EzCard>
        <EzCard eyebrow="Progress over time" title={trendConcept ?? "—"}>
          <EzLine points={monthly.map((m) => ({ label: m.label, v: m.pct }))} />
          <small>Tap a concept on the left to see its progress month by month.</small>
        </EzCard>
      </div>
      <div className="split section">
        <EzCard eyebrow="Learning time" title="Last 8 weeks">
          <EzBars items={weeks.map((w) => ({ label: w.label, v: Math.round(w.activeSec / 60), text: `${Math.round(w.activeSec / 60)}m` }))} />
          <small>Active learning time only. Time with the app open but idle is not counted.</small>
        </EzCard>
        <EzCard eyebrow="Activity types" title={`What ${first} enjoys`}>
          {prefs.slice(0, 6).map((p) => <EzProgress key={p.type} label={`${p.type} · ${p.activities}`} pct={p.avg} sub={p.completion != null ? `${Math.round(p.completion)}% completed` : undefined} />)}
          <small>These are engagement preferences, not personality conclusions.</small>
        </EzCard>
      </div>
      <EzCard className="section" eyebrow="Term assessments" title="Results shared by the teacher">
        {assess.length ? assess.map((a) => (
          <div key={a.id} className="row between"><span><b>{a.subject}</b> · {a.term} <small>{a.note}</small></span><At level={a.result} /></div>
        )) : <small>No assessment sheets shared yet.</small>}
      </EzCard>
    </>
  );
}

/* §20/§44 Teacher notes: controlled, no open chat. */
function EzParentNotes() {
  const { db, me, kid, first } = EzParentCtx();
  const { update, toast } = b();
  const notes = db.observations.filter((o) => o.studentId === kid.id && o.shared).sort((a, c) => c.date.localeCompare(a.date));
  return (
    <>
      <W eyebrow="From school" title="Teacher notes" sub={`Notes and suggestions the teacher chose to share about ${first}.`} />
      <div className="stack">
        {notes.map((o) => {
          const t2 = EzUser(db, o.teacherId);
          return (
            <div key={o.id} className="card pad stack">
              <div className="row between wrap">
                <span className="row"><EzPill tone="primary">{o.type ?? "Teacher note"}</EzPill><small>{o.subject} · {o.concept}</small></span>
                <small>{CA(o.date)} · {t2?.name}</small>
              </div>
              <p>“{o.text}”</p>
              {o.type === "Suggested home activity" && <small>👉 Also listed under Try at home.</small>}
              <div className="row">
                {o.ack ? <EzPill tone="good">✓ You said thank you on {CA(o.ack)}</EzPill> : (
                  <button className="btn secondary sm" onClick={() => {
                    update((d) => { d.observations.find((x) => x.id === o.id).ack = uA; EzNotify(d, o.teacherId, `${me.name} read your note about ${first}. 🙏`, `/teacher/students/${kid.id}`); });
                    toast("Teacher notified");
                  }}>🙏 Thank the teacher</button>
                )}
              </div>
            </div>
          );
        })}
        {!notes.length && <div className="card"><EzEmpty icon="message" title="No shared notes yet" /></div>}
      </div>
      <EzDemoNote>Notes only, no open chat, as the requirements ask for the first version (§20). Parents can acknowledge a note or share a home observation from Try at home.</EzDemoNote>
    </>
  );
}

/* §43 Try this at home, linked to what the class and the child are working on. */
function EzParentTry() {
  const { db, me, kid, first, teacher } = EzParentCtx();
  const { update, toast } = b();
  const [share, setShare] = B.useState(null);
  const [txt, setTxt] = B.useState("");
  const [photo, setPhoto] = B.useState(null);
  const ms = EzChildConcepts(db, kid.id);
  const recent = EzUniq(db.assignments.filter((a) => a.sectionId === kid.sectionId && a.createdAt >= EzAddDays(uA, -14)).map((a) => EzAct(db, a.activityId)?.concept).filter(Boolean));
  const practise = ms.filter((m) => m.level === "Needs support" || m.level === "Developing").map((m) => m.concept);
  const teacherSuggest = db.observations.filter((o) => o.studentId === kid.id && o.shared && o.type === "Suggested home activity");
  const concepts = EzUniq([...practise, ...recent]).filter((c) => EzHomeIdeas[c]);
  const ideas = [
    ...teacherSuggest.map((o) => ({ key: o.id, concept: o.concept, text: o.text, why: `Suggested by ${EzUser(db, o.teacherId)?.name}` })),
    ...concepts.flatMap((c) => EzHomeIdeas[c].map((t2, i) => ({ key: `${c}|${i}`, concept: c, text: t2.replace(/your child/gi, first), why: practise.includes(c) ? `${first} is practising ${c}` : `The class did ${c} recently` }))),
  ];
  const doneKey = (k) => `${kid.id}|${k}`;
  const done = db.homeDone?.[doneKey("")] ?? null;
  const onPhoto = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      const s = Math.min(1, 360 / img.width);
      c.width = img.width * s;
      c.height = img.height * s;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      setPhoto(c.toDataURL("image/jpeg", 0.7));
    };
    img.src = URL.createObjectURL(f);
  };
  return (
    <>
      <W eyebrow="Screen-free" title="Try this at home" sub={`Small ideas linked to what ${first} is learning. 5–10 minutes, everyday things.`} />
      <div className="grid g2">
        {ideas.map((i) => {
          const isDone = db.homeDone?.[doneKey(i.key)];
          return (
            <div key={i.key} className="card pad stack">
              <div className="row between"><EzPill tone="primary">{i.concept}</EzPill>{isDone && <EzPill tone="good">✓ Done {CA(isDone)}</EzPill>}</div>
              <p style={{ fontSize: 16 }}>{i.text}</p>
              <small>{i.why}</small>
              <div className="row">
                <button className={`btn ${isDone ? "good" : "secondary"} sm`} onClick={() => update((d) => { d.homeDone = { ...(d.homeDone ?? {}), [doneKey(i.key)]: isDone ? undefined : uA }; })}>
                  {isDone ? "✓ We did it" : "Mark as done"}
                </button>
                <button className="btn ghost sm" onClick={() => { setShare(i); setTxt(""); setPhoto(null); }}>Share what {first} did</button>
              </div>
            </div>
          );
        })}
        {!ideas.length && <div className="card"><EzEmpty icon="heart" title="Ideas appear once the class starts activities" /></div>}
      </div>
      {share && (
        <AA title={`Share with ${teacher?.name ?? "the teacher"}`} onClose={() => setShare(null)} foot={<button className="btn" disabled={!txt.trim()} onClick={() => {
          update((d) => {
            d.homeObservations.unshift({ id: O("ho"), studentId: kid.id, concept: share.concept, idea: share.text, text: txt.trim(), photo, date: uA, by: me.id });
            d.homeDone = { ...(d.homeDone ?? {}), [doneKey(share.key)]: uA };
            if (photo) d.portfolio.unshift({ id: O("pf"), studentId: kid.id, kind: "Photo", title: `At home: ${share.concept}`, image: photo, text: txt.trim(), date: uA, by: me.name });
            if (teacher) EzNotify(d, teacher.id, `${me.name} shared a home observation about ${kid.name}.`, `/teacher/students/${kid.id}`);
          });
          setShare(null);
          toast("Shared with the teacher");
        }}>Share</button>}>
          <p className="muted">{share.text}</p>
          <N label={`What did ${first} do or say?`}><textarea className="input" value={txt} onChange={(e) => setTxt(e.target.value)} /></N>
          <N label="Photo" hint="optional · private to teacher and family"><input type="file" accept="image/*" onChange={onPhoto} /></N>
          {photo && <img src={photo} alt="" className="ezpfimg" />}
        </AA>
      )}
    </>
  );
}

function EzParentPortfolio() {
  const { db, kid, first } = EzParentCtx();
  const items = [
    ...db.portfolio.filter((p) => p.studentId === kid.id),
    ...db.observations.filter((o) => o.studentId === kid.id && o.shared && o.type !== "Suggested home activity").map((o) => ({ id: o.id, kind: "Teacher comment", title: o.concept, text: o.text, date: o.date, by: EzUser(db, o.teacherId)?.name })),
  ].sort((a, c) => c.date.localeCompare(a.date));
  const [k, setK] = B.useState("All");
  const kinds = ["All", ...EzUniq(items.map((i) => i.kind))];
  return (
    <>
      <W eyebrow="Portfolio" title={`${first}’s learning journey`} sub="Drawings, work, reflections, achievements and selected teacher comments. Private to family and teachers.">
        <EzTabs value={k} options={kinds} onChange={setK} />
      </W>
      <EzPortfolioGrid items={items.filter((i) => k === "All" || i.kind === k)} />
    </>
  );
}

/* §46 Holistic learning report (complements the school report card). */
function EzLearningReport({ kid }) {
  const { db } = b();
  const [range, setRange] = B.useState("This term");
  const from = range === "This month" ? `${uA.slice(0, 7)}-01` : "2026-06-01";
  const e = EzEngagement(db, kid.id, from, uA);
  const ms = EzChildConcepts(db, kid.id);
  const strong = ms.filter((m) => m.level === "Strong");
  const dev = ms.filter((m) => m.level === "Developing" || m.level === "Needs support");
  const recs = dev.slice(0, 3).map((m) => ({ m, r: EzRecommend(db, m.concept) }));
  const notes = db.observations.filter((o) => o.studentId === kid.id && o.shared);
  const section = db.sections.find((s) => s.id === kid.sectionId);
  return (
    <div className="stack">
      <div className="row between wrap noprint">
        <EzTabs value={range} options={["This month", "This term"]} onChange={setRange} />
        <button className="btn" onClick={() => window.print()}><S n="down" />Print / save as PDF</button>
      </div>
      <div className="card pad stack ezreport">
        <div className="row between wrap">
          <div>
            <div className="eyebrow">EzRoots learning report · {range}</div>
            <h1>{kid.name}</h1>
            <small>{z(db, kid.sectionId)} · {EzSchoolOfSection(db, kid.sectionId)?.name} · Academic year {kid.academicYear}</small>
          </div>
          <span className="mark" style={{ fontSize: 40 }}>{kid.avatar}</span>
        </div>
        <h3>Engagement</h3>
        <p>{EzFmtMin(e.activeSec)} of active learning over {e.sessions} sessions on {e.days} days; {e.activities} activities.</p>
        <h3>Curriculum</h3>
        <p>Concepts explored: {ms.map((m) => m.concept).join(", ") || "—"}.</p>
        <h3>Performance</h3>
        <p>Average activity score {EzPct(e.avgScore)}.</p>
        <div className="grid g2">
          <div><h3>Strengths</h3>{strong.length ? strong.map((m) => <p key={m.concept}>🟢 {m.concept} ({m.pct}%)</p>) : <p>—</p>}</div>
          <div><h3>Developing</h3>{dev.length ? dev.map((m) => <p key={m.concept}>{EzLevelDot(m.level)} {m.concept} ({m.pct ?? "—"}%)</p>) : <p>—</p>}</div>
        </div>
        <h3>Recommended practice</h3>
        {recs.length ? recs.map(({ m, r }) => (
          <p key={m.concept}><b>{m.concept}:</b> {r.activities.slice(0, 2).map((a) => a.title).join(", ") || "teacher-led activity"}{r.home[0] ? ` · At home: ${r.home[0]}` : ""}</p>
        )) : <p>Keep exploring!</p>}
        <h3>Teacher observation</h3>
        {notes.length ? notes.slice(0, 3).map((o) => <p key={o.id}>“{o.text}” <small>({CA(o.date)})</small></p>) : <p>—</p>}
        <small className="muted">This report complements, and does not replace, the school’s formal assessment and report card. Indicators describe learning progress, not ability.</small>
      </div>
    </div>
  );
}
function EzParentReport() {
  const { kid, first } = EzParentCtx();
  return (
    <>
      <W eyebrow="Report" title={`${first}’s learning report`} />
      <EzLearningReport kid={kid} />
    </>
  );
}

/* §42 notification preferences, §31 privacy rights, §4 child sign-in help. */
function EzParentSettings() {
  const { db, me, kid, first } = EzParentCtx();
  const { update, toast } = b();
  const u = EzUser(db, me.id);
  const n = u.notif ?? { channels: { inapp: true }, frequency: "daily" };
  const set = (fn) => update((d) => { const x = EzUser(d, me.id); x.notif = JSON.parse(JSON.stringify(x.notif ?? n)); fn(x.notif); });
  const kids = EzParentChildIds(me).map((id) => EzStudent(db, id));
  return (
    <>
      <W eyebrow="Settings" title="Notifications & privacy" />
      <div className="grid g2">
        <EzCard title="Notifications" eyebrow="Calm by design">
          {[["inapp", "In the app"], ["email", "Email"], ["whatsapp", "WhatsApp"], ["sms", "SMS"]].map(([k, l]) => (
            <label key={k} className="row between"><span>{l}</span><EzSwitch label={l} checked={!!n.channels[k]} onChange={(v2) => set((x) => (x.channels[k] = v2))} /></label>
          ))}
          <N label="How often">
            <select className="input" value={n.frequency} onChange={(e) => set((x) => (x.frequency = e.target.value))}>
              <option value="instant">As things happen</option>
              <option value="daily">One daily digest</option>
              <option value="weekly">Only the weekly summary</option>
            </select>
          </N>
          <N label="Quiet hours"><input className="input" value={n.quiet ?? ""} onChange={(e) => set((x) => (x.quiet = e.target.value))} /></N>
          <small>You’ll hear about: new home activities, the weekly summary, milestones, teacher suggestions and home ideas. We never send scores as alerts or compare children.</small>
        </EzCard>
        <EzCard title="Your children’s data" eyebrow="Privacy">
          <p>Consent given {u.consent ? `on ${CA(u.consent.at)} (${u.consent.version})` : "—"}.</p>
          {kids.map((k) => (
            <div key={k.id} className="row between wrap">
              <b>{k.name}</b>
              <span className="row">
                <button className="btn secondary sm" onClick={() => {
                  const data = { child: k, attempts: db.attempts.filter((a) => a.studentId === k.id), sessions: db.sessions.filter((s) => s.studentId === k.id), notes: db.observations.filter((o) => o.studentId === k.id && o.shared), assessments: db.assessments.filter((a) => a.studentId === k.id), portfolio: db.portfolio.filter((p) => p.studentId === k.id).map((p) => ({ ...p, image: p.image ? "[image]" : undefined })) };
                  EzDownload(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), `${k.username}-data.json`);
                  update((d) => EzAudit(d, me, "downloaded child data", k.name));
                }}>Download data</button>
                <button className="btn secondary sm" onClick={() => {
                  update((d) => { d.dataRequests.unshift({ id: O("dr"), kind: "Deletion", studentId: k.id, parentId: me.id, date: uA, status: "Open" }); EzAudit(d, me, "requested data deletion", k.name); EzNotify(d, "u-sa", `${me.name} asked EzRoots to delete ${k.name}’s data.`, "/sa/privacy"); });
                  toast("Request sent to EzRoots. The school will contact you.");
                }}>Ask to delete</button>
              </span>
            </div>
          ))}
          <button className="btn ghost sm" onClick={() => { update((d) => { const x = EzUser(d, me.id); x.consent = null; x.invite = { ...x.invite, status: "verified" }; EzAudit(d, me, "withdrew consent"); }); }}>Withdraw consent</button>
          <small>Withdrawing consent pauses the child app until you agree again.</small>
        </EzCard>
      </div>
      <EzCard className="section" title="Read-aloud in the child app" eyebrow="Sound">
        {kids.map((k) => (
          <label key={k.id} className="row between">
            <span><b>{EzFirst(k.name)}</b> · reads instructions, names and stories aloud</span>
            <EzSwitch label={`Read-aloud for ${EzFirst(k.name)}`} checked={EzAudioOnDb(db, k.id)} onChange={(v2) => update((d) => EzSetAudio(d, k.id, v2))} />
          </label>
        ))}
        <small>Off by default. Children can also switch it on with the 🔇 button in their app. The 🔊 buttons always read when tapped.</small>
      </EzCard>
      <EzCard className="section" title={`Signing ${first} in at home`} eyebrow="Child sign-in">
        <p>Use “Open {first}’s learning app” on your home page. It signs {first} in on this device without a password, and “Bye” brings you back here.</p>
        <p>Or sign in on the login page under <b>Child</b>: school code <b>{EzSchoolOfSection(db, kid.sectionId)?.code}</b> → class → {first}’s picture → picture PIN.</p>
        <div className="row">
          <span className="row" style={{ gap: 4, fontSize: 28 }}>{kid.pin.map((p, i) => <span key={i}>{p}</span>)}</span>
          <small>{first}’s picture PIN (keep it private)</small>
        </div>
      </EzCard>
    </>
  );
}
