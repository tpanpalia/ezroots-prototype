// v2 teacher views (§21–23, §40–41, §54 school dashboard, §20 notes).

/* §54 school dashboard strip: quote, welcome note, recently added resources. */
function EzWelcomeStrip({ schoolId }) {
  const { db } = b();
  const nav = H();
  const q = db.settings.quotes[EzDaysBetween("2026-01-01", uA) % db.settings.quotes.length];
  const school = db.schools.find((s) => s.id === schoolId);
  const recent = EzVisibleFiles(db, school).filter((f) => f.addedAt >= EzAddDays(uA, -21)).sort((a, c) => c.addedAt.localeCompare(a.addedAt)).slice(0, 4);
  return (
    <div className="grid g3 section ezwelcome">
      <div className="card pad stack">
        <div className="eyebrow">Thought for the day</div>
        <p className="ezquote">{q}</p>
      </div>
      <div className="card pad stack">
        <div className="eyebrow">Welcome note from EzRoots</div>
        <p>{db.settings.welcomeNote}</p>
      </div>
      <div className="card pad stack">
        <div className="eyebrow">Recently added</div>
        {recent.map((f) => (
          <div key={f.id} className="row between"><span className="row"><span className={`fileicon ${f.kind}`}><S n={f.kind === "video" ? "play" : "file"} /></span><small><b>{f.name}</b></small></span><small>{CA(f.addedAt)}</small></div>
        ))}
        {!recent.length && <small>Nothing new in the last three weeks.</small>}
      </div>
    </div>
  );
}

/* Turns early-support alerts into teacher notifications, once each (§41). */
function EzAlertSync({ sectionIds, to }) {
  const { db, update } = b();
  B.useEffect(() => {
    const fresh = sectionIds.flatMap((id) => EzAlerts(db, id)).filter((a) => !(db.alertKeys ?? []).includes(a.key));
    if (!fresh.length) return;
    update((d) => {
      d.alertKeys = [...(d.alertKeys ?? []), ...fresh.map((a) => a.key)];
      for (const a of fresh) EzNotify(d, to, a.text, "/teacher/analytics");
    });
  }, [sectionIds.join(",")]);
  return null;
}

function EzEarlySupport({ sectionId }) {
  const { db } = b();
  const alerts = EzAlerts(db, sectionId);
  const [open, setOpen] = B.useState(null);
  return (
    <EzCard className="section" eyebrow="Early support" title="Children who may need a little help">
      {alerts.map((a) => (
        <div key={a.key} className={`ezinsight ${a.tone}`}>
          <strong>{a.kind}</strong>
          <p>{a.text}</p>
          <div className="row wrap">
            <button className="btn secondary sm" onClick={() => setOpen(a)}>View children</button>
            {a.concept && <EzRecButton concept={a.concept} sectionId={sectionId} kids={a.kids} />}
          </div>
        </div>
      ))}
      {!alerts.length && <small>No one right now. 🌱</small>}
      <small>Shown as support needs, never as labels. Only you (and EzRoots) see these.</small>
      {open && (
        <AA title={open.kind} onClose={() => setOpen(null)}>
          {open.kids.map((k) => (
            <K key={k.id} to={`/teacher/students/${k.id}`} className="row between folderrow"><span className="row"><EzAvatar name={k.name} />{k.name}</span><S n="arrow" /></K>
          ))}
        </AA>
      )}
    </EzCard>
  );
}

function EzTeacherHome() {
  const { db, me, sectionId, school } = MA();
  return (
    <>
      <EzAlertSync sectionIds={EzUniq(me.teaches.map((x) => x.sectionId))} to={me.id} />
      <Fu />
      <EzWelcomeStrip schoolId={school.id} />
      <EzEarlySupport sectionId={sectionId} />
    </>
  );
}

/* Recommended activities for a concept, with one-click assignment to children (§36, §40). */
function EzRecButton({ concept, sectionId, kids, label }) {
  const [open, setOpen] = B.useState(false);
  return (
    <>
      <button className="btn sm" onClick={() => setOpen(true)}>{label ?? "View recommended activities"}</button>
      {open && <EzRecModal concept={concept} sectionId={sectionId} kids={kids} onClose={() => setOpen(false)} />}
    </>
  );
}
function EzRecModal({ concept, sectionId, kids, onClose }) {
  const { db, me, update, toast } = b();
  const nav = H();
  const sec = db.sections.find((s) => s.id === sectionId);
  const pkg = EzSchoolOfSection(db, sectionId)?.packages[sec.level];
  const r = EzRecommend(db, concept, sec.level);
  const [chosen, setChosen] = B.useState(new Set((kids ?? []).map((k) => k.id)));
  const assign = (act) => {
    update((d) => {
      const ids = [...chosen];
      d.assignments.push({ id: O("as"), sectionId, subject: act.subject, activityId: act.id, mode: "home", due: EzAddDays(uA, 3), studentIds: ids.length ? ids : "all", createdBy: me.id, createdAt: uA, day: d.classPosition[sectionId] ?? 63, note: `Extra practice: ${concept}` });
      for (const id of ids) {
        const su = d.users.find((u) => u.role === "student" && u.childId === id);
        if (su) EzNotify(d, su.id, `New activity from your teacher: ${act.title}`, "/student");
        for (const p of EzParentsOf(d, id)) EzNotify(d, p.id, `Teacher recommendation for ${EzFirst(EzStudent(d, id).name)}: ${act.title} (${concept}).`, "/parent/activities");
      }
    });
    toast(`${act.title} assigned to ${chosen.size || "all"} children · families notified`);
    onClose();
  };
  return (
    <AA wide title={`Support for ${concept}`} onClose={onClose}>
      <EzInfo>{r.tip}</EzInfo>
      {kids?.length > 0 && (
        <N label="Children">
          <div className="row wrap">
            {kids.map((k) => (
              <label key={k.id} className="pill"><input type="checkbox" checked={chosen.has(k.id)} onChange={(e) => { const s = new Set(chosen); e.target.checked ? s.add(k.id) : s.delete(k.id); setChosen(s); }} /> {k.name}</label>
            ))}
          </div>
        </N>
      )}
      <div className="eyebrow">1. EzRoots-approved activities</div>
      {r.activities.map((a) => (
        <div key={a.id} className="row between folderrow">
          <span><b>{a.art} {a.title}</b> <small>· {EzKinds[EzKindOf(a)]?.label} · {a.minutes} min</small></span>
          {_e(pkg, a.tier) ? <button className="btn sm" onClick={() => assign(a)}>Assign</button> : <EzPill tone="lock">Needs {a.tier}</EzPill>}
        </div>
      ))}
      {!r.activities.length && <small>No digital activity for this concept yet. EzRoots has been told.</small>}
      <div className="eyebrow">2. Real-world practice</div>
      {r.home.map((h) => <p key={h}>🏠 {h}</p>)}
      <div className="eyebrow">3. Teacher-led reinforcement</div>
      {r.lessonPlans.map((x) => (
        <button key={x.id + x.day} className="row between folderrow" onClick={() => nav(`/teacher/planner?day=${x.day}&slot=${encodeURIComponent(x.slot)}`)}>
          <span><b>{x.lp.title}</b> <small>· Day {x.day} · {x.slot}</small></span><S n="arrow" />
        </button>
      ))}
      {!r.lessonPlans.length && <small>Revisit the concept with the physical kit during circle time.</small>}
    </AA>
  );
}

/* §21, §23, §40 Class analytics with actionable insights. */
function EzClassAnalytics() {
  const { db, me, sectionId, subject } = MA();
  const [days, setDays] = B.useState("Last 30 days");
  const n = days === "Last 7 days" ? 7 : days === "Last 30 days" ? 30 : 120;
  const st = EzSectionStats(db, sectionId, n);
  const mm = EzMasteryCfg(db);
  const ids = st.kids.map((k) => k.id);
  const conceptRows = st.conceptRows.filter((r) => subject === "All" || db.activities.find((a) => a.concept === r.concept)?.subject === subject);
  const actRows = st.actRows.filter((r) => subject === "All" || r.act?.subject === subject);
  const need = conceptRows.filter((r) => (r.below ?? 0) >= 20 || (r.avg ?? 100) < mm.developing + 5);
  const weekly = EzBuckets(db, ids, "week", 8);
  const prefs = EzPreferences(db, ids);
  return (
    <>
      <W eyebrow={`${z(db, sectionId)} · ${subject === "All" ? "All subjects" : subject}`} title="Class analytics" sub="How children are doing on the activities you enabled.">
        <EzTabs value={days} options={["Last 7 days", "Last 30 days", "This term"]} onChange={setDays} />
      </W>
      <div className="grid g4">
        <F label="Engagement" value={`${st.active7} of ${st.students}`} icon="users" sub="children active in the last 7 days" meter={gA(st.active7, st.students)} />
        <F label="Activities" value={EzPct(st.completion)} icon="check" sub="average completion" />
        <F label="Performance" value={EzPct(st.performance)} icon="chart" sub="average score (kept separate from completion)" />
        <F label="Areas requiring attention" value={need.length} icon="flag" tone={need.length ? "bad" : undefined} sub={need.map((r) => r.concept).join(", ") || "none"} />
      </div>

      <EzCard className="section" eyebrow="Class learning insight" title="What to do next">
        {conceptRows.filter((r) => r.mastered != null).slice().sort((a, c) => (c.mastered ?? 0) - (a.mastered ?? 0)).slice(0, 2).map((r) => (
          <EzInsight key={r.concept} tone="good" title={`${Math.round(r.mastered)}% of children have mastered ${r.concept}.`} />
        ))}
        {need.map((r) => (
          <EzInsight key={r.concept} tone="bad" title={`${r.concept} needs reinforcement in ${z(db, sectionId)}.`} text={`${Math.round(r.below ?? 0)}% of children are currently below the expected mastery level (under ${mm.developing}%). Class average ${EzPct(r.avg)}.`}>
            <EzKidsButton kids={r.support} title={`Children who need support with ${r.concept}`} />
            <EzRecButton concept={r.concept} sectionId={sectionId} kids={r.support} />
          </EzInsight>
        ))}
        {!conceptRows.length && <small>No activity results in this period yet.</small>}
      </EzCard>

      <div className="split section">
        <EzCard eyebrow="Concepts" title="Mastery by concept">
          {conceptRows.map((r) => <EzProgress key={r.concept} label={r.concept} pct={r.mastered} sub={`${r.children} children with results · average ${EzPct(r.avg)}`} />)}
          <small>Bar = share of children at “Strong”.</small>
          <EzMethod />
        </EzCard>
        <EzCard eyebrow="Trend" title="Class average score by week">
          <EzLine points={weekly.map((w) => ({ label: w.label, v: w.avgScore == null ? null : Math.round(w.avgScore) })).filter((p) => p.v != null)} />
          <EzBars items={weekly.map((w) => ({ label: w.label, v: Math.round(w.activeSec / 60 / Math.max(1, st.students)), text: `${Math.round(w.activeSec / 60 / Math.max(1, st.students))}m` }))} height={120} />
          <small>Bars: average active minutes per child each week.</small>
        </EzCard>
      </div>

      {EzAllowed(db, me, "curriculum") && <div className="section">
        <EzTable
          head={["Activity", "Completion", "Avg score", "Needs support rate", "Avg time", ""]}
          rows={actRows.sort((a, c) => (c.fail ?? 0) - (a.fail ?? 0)).map((r) => (
            <tr key={r.act.id}>
              <td><strong>{r.act.title}</strong><small>{r.act.concept} · {EzTypeOf(r.act)}</small></td>
              <td>{EzPct(r.completion)}{(r.completion ?? 0) >= 85 && <EzPill tone="good">high</EzPill>}</td>
              <td>{EzPct(r.avg)}</td>
              <td>{EzPct(r.fail)}{(r.fail ?? 0) >= 35 && <EzPill tone="bad">high</EzPill>}</td>
              <td>{r.avgTime ? `${Math.round(r.avgTime / 60 * 10) / 10} min` : "—"}</td>
              <td><small>{EzQuadrant({ engagement: r.completion, mastery: r.avg })}</small></td>
            </tr>
          ))}
          empty="No activities enabled in this period."
        />
      </div>}

      <div className="split section">
        <EzCard eyebrow="Engagement" title="Highest and lowest engagement">
          <div className="grid g2">
            <div className="stack">
              <small>Most active</small>
              {st.perKid.slice(0, 5).map((p) => <K key={p.kid.id} to={`/teacher/students/${p.kid.id}`} className="row between"><span>{p.kid.name}</span><small>{EzFmtMin(p.activeSec)}</small></K>)}
            </div>
            <div className="stack">
              <small>Least active</small>
              {st.perKid.slice(-5).reverse().map((p) => <K key={p.kid.id} to={`/teacher/students/${p.kid.id}`} className="row between"><span>{p.kid.name}</span><small>{EzFmtMin(p.activeSec)}</small></K>)}
            </div>
          </div>
        </EzCard>
        <EzCard eyebrow="Activity preferences" title="What the class engages with">
          {prefs.slice(0, 6).map((p) => <EzProgress key={p.type} label={`${p.type} · ${p.activities} plays`} pct={p.avg} sub={p.completion != null ? `${Math.round(p.completion)}% completion` : undefined} />)}
          <small>Engagement patterns, not personality.</small>
        </EzCard>
      </div>
      <EzEarlySupport sectionId={sectionId} />
    </>
  );
}
function EzKidsButton({ kids, title }) {
  const [open, setOpen] = B.useState(false);
  return (
    <>
      <button className="btn secondary sm" onClick={() => setOpen(true)}>View affected children ({kids.length})</button>
      {open && (
        <AA title={title} onClose={() => setOpen(false)}>
          {kids.map((k) => <K key={k.id} to={`/teacher/students/${k.id}`} className="row between folderrow"><span className="row"><EzAvatar name={k.name} />{k.name}</span><S n="arrow" /></K>)}
        </AA>
      )}
    </>
  );
}

/* §20 share a typed note with the family. */
const EzNoteTypes = ["Teacher note", "Suggested home activity", "Learning milestone", "Area requiring practice", "Encouragement"];
function EzShareNote({ kid, onClose }) {
  const { db, me, update, toast } = b();
  const [type, setType] = B.useState("Teacher note");
  const [concept, setConcept] = B.useState("");
  const [txt, setTxt] = B.useState("");
  const [subject, setSubject] = B.useState("Activities");
  return (
    <AA title={`Share with ${EzFirst(kid.name)}’s family`} onClose={onClose} foot={<button className="btn" disabled={!txt.trim()} onClick={() => {
      update((d) => {
        d.observations.unshift({ id: O("ob"), sectionId: kid.sectionId, studentId: kid.id, subject, concept: concept || "General", type, text: txt.trim(), shared: true, date: uA, teacherId: me.id });
        for (const p of EzParentsOf(d, kid.id)) EzNotify(d, p.id, `${me.name} shared a ${type.toLowerCase()} about ${EzFirst(kid.name)}.`, type === "Suggested home activity" ? "/parent/try" : "/parent/notes");
      });
      toast("Shared with the family");
      onClose();
    }}>Share</button>}>
      <N label="Type"><select className="input" value={type} onChange={(e) => setType(e.target.value)}>{EzNoteTypes.map((x) => <option key={x}>{x}</option>)}</select></N>
      <div className="grid g2">
        <N label="Subject"><select className="input" value={subject} onChange={(e) => setSubject(e.target.value)}>{Ct.map((x) => <option key={x}>{x}</option>)}</select></N>
        <N label="Concept"><input className="input" value={concept} onChange={(e) => setConcept(e.target.value)} placeholder="e.g. Patterns" /></N>
      </div>
      <N label="Message"><textarea className="input" value={txt} onChange={(e) => setTxt(e.target.value)} /></N>
      <small>Families can read and acknowledge notes. There is no open chat.</small>
    </AA>
  );
}

/* Printable child sign-in card with QR (§4). */
function EzQR({ text, size = 120 }) {
  // Visual stand-in: a deterministic 21×21 pattern with finder squares. The real
  // app encodes a short-lived sign-in token; this demo scanner accepts the card.
  const n = 21;
  const r = EzRng(text);
  const cells = [];
  const finder = (x, y) => [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  const inFinder = (x, y) => [[0, 0], [n - 7, 0], [0, n - 7]].find(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) {
      let on2;
      const f = inFinder(x, y);
      if (f) {
        const dx = x - f[0];
        const dy = y - f[1];
        on2 = dx === 0 || dy === 0 || dx === 6 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4);
      } else on2 = r() < 0.48;
      if (on2) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  return <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} width={size} height={size} className="ezqr" role="img" aria-label="Sign-in QR code">{cells}</svg>;
}
function EzSignInCard({ kid, onClose }) {
  const { db } = b();
  const school = EzSchoolOfSection(db, kid.sectionId);
  return (
    <AA title="Child sign-in card" onClose={onClose} foot={<button className="btn" onClick={() => window.print()}>Print</button>}>
      <div className="ezsignincard">
        <div className="stack">
          <span style={{ fontSize: 48 }}>{kid.avatar}</span>
          <strong style={{ fontSize: 20 }}>{kid.name}</strong>
          <small>{z(db, kid.sectionId)} · {school.name}</small>
          <small>School code <b>{school.code}</b></small>
          <span style={{ fontSize: 26 }}>{kid.pin.join(" ")}</span>
          <small>Picture PIN</small>
        </div>
        <EzQR text={`${kid.id}|${school.code}`} />
      </div>
      <small>Hold the card up to the camera on the sign-in page, or tap the child’s picture and enter the picture PIN. Keep cards in class; reprinting a card makes the old one stop working.</small>
    </AA>
  );
}

/* §22 Individual child view for the teacher. */
function EzTeacherStudent() {
  const { id } = on();
  const { db, me, update, toast } = b();
  const kid = EzStudent(db, id);
  const [tab, setTab] = B.useState("Learning");
  const [modal, setModal] = B.useState(null);
  const [pw, setPw] = B.useState(null);
  const [concept, setConcept] = B.useState(null);
  if (!kid) return <EzEmpty title="Student not found" />;
  const parents = EzParentsOf(db, kid.id);
  const atts = EzAttempts(db, kid.id).sort((a, c) => c.date.localeCompare(a.date));
  const e30 = EzEngagement(db, kid.id, EzAddDays(uA, -30), uA);
  const ms = EzChildConcepts(db, kid.id);
  const prefs = EzPreferences(db, kid.id);
  const trendC = concept ?? EzTrendDefault(db, kid.id, ms);
  const monthly = EzMonthly(db, kid.id, trendC);
  const assigns = db.assignments.filter((a) => a.sectionId === kid.sectionId && a.due <= uA && (a.studentIds === "all" || a.studentIds.includes(kid.id)));
  const obs = db.observations.filter((o) => o.studentId === kid.id).sort((a, c) => c.date.localeCompare(a.date));
  const home = db.homeObservations.filter((h) => h.studentId === kid.id);
  const pf = db.portfolio.filter((p) => p.studentId === kid.id);
  const assess = db.assessments.filter((a) => a.studentId === kid.id);
  const tabs = [EzAllowed(db, me, "ownPerformance") && "Learning", EzAllowed(db, me, "ownActivity") && "Activity", "Portfolio & home", "Notes & assessments", "Report"].filter(Boolean);
  const cur = tabs.includes(tab) ? tab : tabs[0];
  const reset = (who, isPin) => setPw({ who, code: isPin ? null : `sun-${Math.floor(1000 + Math.random() * 9000)}`, isPin });
  return (
    <>
      <W eyebrow={`${z(db, kid.sectionId)} · ${kid.academicYear}`} title={<span className="row"><span style={{ fontSize: 34 }}>{kid.avatar}</span>{kid.name}</span>} sub={`Username ${kid.username} · Family: ${parents.map((p) => p.name).join(", ") || "not linked yet"}`}>
        <button className="btn secondary" onClick={() => setModal("card")}><S n="grid" />Sign-in card</button>
        <button className="btn secondary" onClick={() => reset(`${kid.name} (picture PIN)`, true)}>Reset PIN</button>
        <button className="btn secondary" onClick={() => reset(`${parents[0]?.name} (parent)`)} disabled={!parents.length}>Reset parent password</button>
        <button className="btn secondary" onClick={() => setModal("obs")}><S n="eye" />Add observation</button>
        <button className="btn" onClick={() => setModal("share")}><S n="message" />Share with family</button>
      </W>
      <div className="grid g4">
        <F label="Engagement (30 days)" value={`${e30.sessions} sessions`} icon="clock" sub={`${EzFmtMin(e30.activeSec)} active · ${EzFmtMin(e30.idleSec)} idle`} />
        <F label="Activities" value={`${atts.length} completed`} icon="star" sub={`${atts.reduce((s, a) => s + (a.tries ?? 1), 0)} attempts · ${EzPct(assigns.length ? (EzUniq(atts.map((a) => a.assignmentId).filter(Boolean)).length / assigns.length) * 100 : null)} of enabled`} />
        <F label="Performance" value={EzPct(EzAvg(atts.map((a) => a.score).filter((x) => x != null)))} icon="chart" sub="average score · completion shown separately" />
        <F label="Home & portfolio" value={pf.length} icon="heart" sub={`${home.length} home observations from family`} />
      </div>
      <div className="section"><EzTabs value={tabs.includes(tab) ? tab : tabs[0]} options={tabs} onChange={setTab} /></div>
      {cur === "Learning" && (
        <div className="split section">
          <EzCard eyebrow="Concept areas" title="Mastery by concept">
            <EzMasteryMap rows={ms} onPick={setConcept} />
            {ms.filter((m) => m.level === "Needs support" || m.level === "Developing").slice(0, 2).map((m) => (
              <EzRecButton key={m.concept} concept={m.concept} sectionId={kid.sectionId} kids={[kid]} label={`Support ideas: ${m.concept}`} />
            ))}
            <EzMethod />
          </EzCard>
          <div className="stack">
            <EzAdaptiveCard kid={kid} />
            <EzCard eyebrow="Progress over time" title={trendC ?? "—"}>
              <EzLine points={monthly.map((m) => ({ label: m.label, v: m.pct }))} />
            </EzCard>
            <EzCard eyebrow="Activity preference" title="Engagement by activity type">
              {prefs.slice(0, 5).map((p) => <EzProgress key={p.type} label={`${p.type} · ${p.activities}`} pct={p.avg} sub={p.completion != null ? `${Math.round(p.completion)}% completion` : undefined} />)}
            </EzCard>
          </div>
        </div>
      )}
      {cur === "Activity" && (
        <div className="section">
          <EzTable head={["Activity", "Date", "Score", "Level", "Time", "Tries", "Hints", "Skipped", "Completion"]}
            rows={atts.slice(0, 40).map((a) => {
              const act = EzAct(db, a.activityId);
              return (
                <tr key={a.id}>
                  <td><strong>{act?.title}</strong><small>{act?.concept}{a.selfPractice ? " · practice" : ""}{a.reflection != null ? ` · reflection: ${a.reflection}` : ""}</small></td>
                  <td>{CA(a.date)}</td>
                  <td>{a.score == null ? "—" : `${a.score}%`}</td>
                  <td>{a.level ? <At level={a.level} /> : "—"}</td>
                  <td>{Math.round((a.timeSec / 60) * 10) / 10} min</td>
                  <td>{a.tries}</td>
                  <td>{a.hints}</td>
                  <td>{a.skipped ?? 0}</td>
                  <td>{a.completion ?? 100}%</td>
                </tr>
              );
            })} />
        </div>
      )}
      {cur === "Portfolio & home" && (
        <div className="stack section">
          <EzCard eyebrow="From home" title="Home observations shared by the family">
            {home.map((h) => (
              <div key={h.id} className="ezinsight">
                <strong>{h.concept} · {CA(h.date)}</strong>
                <p>“{h.text}”</p>
                {h.photo && <img src={h.photo} alt="" className="ezpfimg" />}
                <small>Idea: {h.idea}</small>
              </div>
            ))}
            {!home.length && <small>Nothing shared yet.</small>}
          </EzCard>
          <EzPortfolioGrid items={pf} empty="No creations yet" />
          {pf.some((p) => p.pending) && (
            <button className="btn secondary" onClick={() => update((d) => d.portfolio.forEach((p) => p.studentId === kid.id && (p.pending = false)))}>Mark shared work as seen</button>
          )}
        </div>
      )}
      {cur === "Notes & assessments" && (
        <div className="split section">
          <EzCard eyebrow="Observations & notes">
            {obs.map((o) => (
              <div key={o.id} className="stack" style={{ borderBottom: "1px solid var(--line)", paddingBottom: 8 }}>
                <span className="row wrap"><EzPill tone="primary">{o.type ?? "Teacher note"}</EzPill>{o.shared ? <EzPill tone="good">Shared with family{o.ack ? " · read ✓" : ""}</EzPill> : <EzPill>Private</EzPill>}<small>{CA(o.date)} · {o.concept}</small></span>
                <p>{o.text}</p>
              </div>
            ))}
            {!obs.length && <small>No observations yet.</small>}
          </EzCard>
          <EzCard eyebrow="Term assessments">
            {assess.map((a) => <div key={a.id} className="row between"><span><b>{a.subject}</b> · {a.term}</span><At level={a.result} /></div>)}
            {!assess.length && <small>No sheets uploaded yet.</small>}
          </EzCard>
        </div>
      )}
      {cur === "Report" && <div className="section"><EzLearningReport kid={kid} /></div>}
      {modal === "obs" && (
        <EzObsModal studentId={kid.id} onClose={() => setModal(null)} onSave={(o) => { update((d) => d.observations.unshift({ id: O("ob"), sectionId: kid.sectionId, date: uA, teacherId: me.id, type: "Teacher note", ...o })); toast("Observation saved"); }} />
      )}
      {modal === "share" && <EzShareNote kid={kid} onClose={() => setModal(null)} />}
      {modal === "card" && <EzSignInCard kid={kid} onClose={() => setModal(null)} />}
      {pw && (
        <AA title={pw.isPin ? "New picture PIN" : "Password reset"} onClose={() => setPw(null)} foot={<button className="btn" onClick={() => {
          if (pw.isPin) update((d) => { const s = EzStudent(d, kid.id); s.pin = EzShuffle(EzPinPics, Date.now()).slice(0, 4); EzAudit(d, me, "reset picture PIN", kid.name); });
          else update((d) => EzAudit(d, me, "reset parent password", pw.who));
          setPw(null);
        }}>Done</button>}>
          {pw.isPin ? <p>A new picture PIN will be created for {kid.name}. Print a new sign-in card afterwards.</p> : <p>Temporary password for <b>{pw.who}</b>: <code style={{ fontSize: 20 }}>{pw.code}</code></p>}
          <small>They will be asked to choose a new one after signing in.</small>
        </AA>
      )}
    </>
  );
}

/* Training with per-teacher completion (§25 "training completion"). */
function EzTeacherTraining() {
  const { db, me, update } = b();
  const [open, setOpen] = B.useState(null);
  const prog = db.trainingProgress?.[me.id] ?? {};
  const save = (id, pct) => update((d) => { d.trainingProgress[me.id] = { ...(d.trainingProgress[me.id] ?? {}), [id]: Math.max(pct, d.trainingProgress[me.id]?.[id] ?? 0) }; });
  return (
    <>
      <W eyebrow="Teacher training" title="Keep growing as a teacher" sub="Short modules from the EzRoots academic team. Your progress is shared with your principal." />
      <div className="grid g2">
        {db.training.map((m) => {
          const p = prog[m.id] ?? 0;
          return (
            <div key={m.id} className="card pad stack">
              <div className="row between"><strong>{m.title}</strong>{p >= 100 ? <EzPill tone="good">Completed</EzPill> : p > 0 ? <EzPill tone="warn">{p}% watched</EzPill> : <EzPill>Not started</EzPill>}</div>
              <small>{m.sub}</small>
              <TA v={p} tone="good" />
              <button className="btn secondary sm" onClick={() => setOpen(m)}><S n="play" />{p >= 100 ? "Watch again" : "Watch"}</button>
            </div>
          );
        })}
      </div>
      {open && (
        <AA wide title={open.title} onClose={() => setOpen(null)} foot={<button className="btn good" onClick={() => { save(open.id, 100); setOpen(null); }}>Mark as complete</button>}>
          {open.video && JA(open.video) ? (
            <video className="player" controls controlsList="nodownload" src={Ea(JA(open.video).folder, JA(open.video).file)}
              onTimeUpdate={(e) => { const v2 = e.currentTarget; if (v2.duration) { const pct = Math.round((v2.currentTime / v2.duration) * 100); if (pct % 10 === 0) save(open.id, pct); } }}
              onEnded={() => save(open.id, 100)} />
          ) : <EzEmpty icon="play" title="Video coming from EzRoots" />}
        </AA>
      )}
    </>
  );
}

/* Library: curriculum (v1) + school files assigned by EzRoots (§54). */
function EzTeacherLibrary() {
  const [tab, setTab] = B.useState("Curriculum");
  const { school } = MA();
  return (
    <>
      <div className="row between wrap" style={{ marginBottom: 12 }}>
        <EzTabs value={tab} options={["Curriculum", "School resources"]} onChange={setTab} />
      </div>
      {tab === "Curriculum" ? <EzV1Library /> : <EzSchoolFiles schoolId={school.id} />}
    </>
  );
}

function EzAdaptiveCard({ kid }) {
  const { db, me, update, toast } = b();
  if (!db.settings.adaptive) return <EzCard eyebrow="Adaptive difficulty"><small>Switched off by EzRoots. When on, this shows the next challenge or a simpler warm-up for each concept.</small></EzCard>;
  const xs = EzAdaptive(db, kid);
  const assign = (act) => {
    update((d) => {
      d.assignments.push({ id: O("as"), sectionId: kid.sectionId, subject: act.subject, activityId: act.id, mode: "home", due: EzAddDays(uA, 3), studentIds: [kid.id], createdBy: me.id, createdAt: uA, day: d.classPosition[kid.sectionId] ?? 63, note: "Adaptive suggestion" });
      const su = d.users.find((u) => u.role === "student" && u.childId === kid.id);
      if (su) EzNotify(d, su.id, `New activity from your teacher: ${act.title}`, "/student");
    });
    toast(`${act.title} enabled for ${EzFirst(kid.name)}`);
  };
  return (
    <EzCard eyebrow="Adaptive difficulty" title="Suggested next steps">
      {xs.map((x) => (
        <div key={x.concept} className={`ezinsight ${x.dir === "up" ? "good" : "warn"}`}>
          <strong>{x.dir === "up" ? "⬆" : "🌱"} {x.act.title} <small>· {x.act.level} · level {x.act.difficulty ?? 1}</small></strong>
          <p>{x.why}.</p>
          <div className="row">{x.forChild ? <EzPill tone="good">Already enabled · child sees it</EzPill> : <button className="btn sm" onClick={() => assign(x.act)}>Enable for {EzFirst(kid.name)}</button>}</div>
        </div>
      ))}
      {!xs.length && <small>No change suggested: results are steady.</small>}
    </EzCard>
  );
}
