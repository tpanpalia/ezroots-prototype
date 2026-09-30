// v2 child portal (§4–6, §34–35, §45). Designed for young learners: big targets,
// few words, no rankings.

/* Tracks active vs idle time while the child app is open (§11). */
function EzUseActiveTime(kid) {
  const { update } = b();
  const last = B.useRef(Date.now());
  const acc = B.useRef({ active: 0, idle: 0 });
  B.useEffect(() => {
    if (!kid) return;
    const bump = () => (last.current = Date.now());
    const evs = ["pointerdown", "keydown", "touchstart", "pointermove"];
    evs.forEach((e) => window.addEventListener(e, bump, { passive: true }));
    const tick = setInterval(() => {
      const visible = document.visibilityState === "visible";
      if (visible && Date.now() - last.current < 30000) acc.current.active += 5;
      else acc.current.idle += 5;
    }, 5000);
    const flush = setInterval(() => {
      const { active, idle } = acc.current;
      if (!active && !idle) return;
      acc.current = { active: 0, idle: 0 };
      update((d) => {
        const id = `se-live-${kid.id}-${uA}`;
        let s = d.sessions.find((x) => x.id === id);
        if (!s) {
          s = { id, studentId: kid.id, date: uA, start: new Date().toTimeString().slice(0, 5), activeSec: 0, idleSec: 0, activities: 0, device: /Mobi/.test(navigator.userAgent) ? "Phone" : "Laptop" };
          d.sessions.push(s);
        }
        s.activeSec += active;
        s.idleSec += idle;
      });
    }, 15000);
    return () => {
      evs.forEach((e) => window.removeEventListener(e, bump));
      clearInterval(tick);
      clearInterval(flush);
    };
  }, [kid?.id]);
}

function EzKidShell() {
  const { db, me, update } = b();
  const nav = H();
  const kid = db.students.find((s) => s.id === me?.childId);
  EzUseActiveTime(kid);
  if (!kid) return null;
  const explore = EzSchoolOfSection(db, kid.sectionId)?.policy?.childExplore;
  return (
    <div className="kid">
      <header className="kidtop">
        <span className="brand">
          <span className="mark" style={{ fontSize: 22 }}>{kid.avatar}</span>
          <span>
            <strong>Hi, {EzFirst(kid.name)}!</strong>
            <small>{z(db, kid.sectionId)}</small>
          </span>
        </span>
        <nav className="kidnav" aria-label="Child">
          <Ot to="/student" end>⭐ My learning</Ot>
          {explore && <Ot to="/student/explore">🧭 Explore</Ot>}
          <Ot to="/student/progress">🌱 My progress</Ot>
          <Ot to="/student/creations">🎨 My creations</Ot>
          <button className="btn ghost" onClick={() => update((d) => { EzEvent(d, me, "logout"); d.userId = d.parentAssist ?? null; d.parentAssist = null; })}>
            Bye 👋
          </button>
        </nav>
      </header>
      <main className="kidmain">
        <EzOutlet />
      </main>
    </div>
  );
}

function EzKidCard({ act, badge, onClick, sub, done }) {
  const tones = ["#fdf6e3", "#eaf4f8", "#fbeef3", "#e8f3ee", "#f0ecf8"];
  return (
    <button className="kidcard ezkidcard" style={{ background: tones[EzHash(act.id) % tones.length] }} onClick={onClick}>
      {badge}
      <div style={{ fontSize: 44 }}>{act.art}</div>
      <strong style={{ fontSize: 20 }}>{act.title}</strong>
      <small>{sub ?? act.blurb}</small>
      <span className={`btn ${done ? "secondary" : ""}`}>{done ? "Play again" : "▶ Let’s play"}</span>
    </button>
  );
}

function EzChildToday() {
  const { db, me } = b();
  const nav = H();
  const { student: kid, mine, attempts, minutesToday, limit } = Wi();
  const done = new Set(attempts.map((a) => a.assignmentId));
  const today = mine.filter((a) => !done.has(a.id) && a.due >= uA && EzAct(db, a.activityId));
  const cont = (db.inProgress ?? []).filter((p) => p.studentId === kid.id && EzAct(db, p.activityId));
  // "Practise again": teacher-enabled activities where the child is still developing.
  const again = mine
    .filter((a) => done.has(a.id))
    .map((a) => ({ a, last: [...attempts].reverse().find((x) => x.assignmentId === a.id) }))
    .filter((x) => x.last?.score != null && x.last.score < EzMasteryCfg(db).strong)
    .reduce((acc, x) => (acc.some((y) => y.a.activityId === x.a.activityId) ? acc : [...acc, x]), [])
    .slice(-3);
  const completed = [...attempts].reverse().slice(0, 6);
  const out = minutesToday >= limit;
  const adaptive = EzAdaptive(db, kid).filter((x) => x.forChild).slice(0, 3);
  return (
    <div className="stack" style={{ gap: 22 }}>
      <div>
        <h1 style={{ fontSize: 34 }}>Hello, {EzFirst(kid.name)}! 👋</h1>
        <p className="muted" style={{ fontSize: 18 }}>
          {today.length ? `Your teacher has ${today.length} fun thing${today.length > 1 ? "s" : ""} for you today.` : "All done! Go and play outside. 🌳"}
        </p>
      </div>
      <div className="card pad row between wrap" style={{ borderRadius: 18 }}>
        <span style={{ fontSize: 18 }}>⏱ Screen time today: <b>{minutesToday} of {limit} minutes</b></span>
        <div className="meter" style={{ width: 200 }}><span style={{ width: `${Math.min(100, (minutesToday / limit) * 100)}%` }} /></div>
      </div>
      {out && <div className="notice">🌙 That’s enough screen time for today. Your activities will wait for you tomorrow!</div>}

      {cont.length > 0 && (
        <section className="stack">
          <h2>▶ Continue learning</h2>
          <div className="ezkidgrid">
            {cont.map((p) => {
              const act = EzAct(db, p.activityId);
              return <EzKidCard key={p.id} act={act} sub={`You are ${p.completion}% of the way`} badge={<span className="pill blue">Continue</span>}
                onClick={() => nav(p.assignmentId.startsWith("self-") ? `/student/play/x?activity=${act.id}` : `/student/play/${p.assignmentId}`)} />;
            })}
          </div>
        </section>
      )}

      <section className="stack">
        <h2>⭐ Today’s activities</h2>
        {today.length ? (
          <div className="ezkidgrid">
            {today.filter((a) => !cont.some((p) => p.assignmentId === a.id)).map((a) => (
              <EzKidCard key={a.id} act={EzAct(db, a.activityId)} badge={<span className={`pill ${a.mode === "home" ? "pink" : "blue"}`}>{a.mode === "home" ? "🏠 Home activity" : "🏫 In class"}</span>} onClick={() => nav(`/student/play/${a.id}`)} />
            ))}
          </div>
        ) : (
          <div className="kidcard"><span style={{ fontSize: 40 }}>🌳</span><strong>Nothing new today.</strong></div>
        )}
      </section>

      {adaptive.length > 0 && (
        <section className="stack">
          <h2>🚀 Just right for you</h2>
          <div className="ezkidgrid">
            {adaptive.map((x) => (
              <EzKidCard key={x.act.id} act={x.act} badge={<span className={`pill ${x.dir === "up" ? "good" : "blue"}`}>{x.dir === "up" ? "⬆ Next challenge" : "🌱 Warm-up"}</span>} sub={x.dir === "up" ? "You’re ready for something trickier!" : "Let’s practise this one together."} onClick={() => nav(`/student/play/x?activity=${x.act.id}`)} />
            ))}
          </div>
        </section>
      )}

      {again.length > 0 && (
        <section className="stack">
          <h2>💪 Practise again</h2>
          <div className="ezkidgrid">
            {again.map(({ a }) => (
              <EzKidCard key={a.id} act={EzAct(db, a.activityId)} done sub="Try it once more. You’re getting better!" onClick={() => nav(`/student/play/x?activity=${a.activityId}`)} />
            ))}
          </div>
        </section>
      )}

      {EzAllowed(db, me, "ownActivity") && <section className="stack">
        <h2>✅ Completed</h2>
        <div className="row wrap">
          {completed.map((a) => {
            const act = EzAct(db, a.activityId);
            return act && <span key={a.id} className="pill good" style={{ fontSize: 15, padding: "8px 12px" }}>{act.art} {act.title}</span>;
          })}
          {!completed.length && <small>Nothing yet. Let’s play your first activity!</small>}
        </div>
      </section>}
      <small className="muted">Children only see activities their teacher has enabled.</small>
    </div>
  );
}

/* Explore: only when the school switches it on (EzRoots decision pending). */
function EzChildExplore() {
  const { db, me } = b();
  const nav = H();
  const kid = db.students.find((s) => s.id === me?.childId);
  const sec = db.sections.find((s) => s.id === kid.sectionId);
  const school = EzSchoolOfSection(db, kid.sectionId);
  const pkg = school.packages[sec.level];
  if (!school.policy?.childExplore) return <EzEmpty icon="lock" title="Explore is switched off by your school" />;
  const acts = db.activities.filter((a) => a.status === "published" && a.level === sec.level && _e(pkg, a.tier));
  return (
    <div className="stack" style={{ gap: 18 }}>
      <h1>🧭 Explore</h1>
      <p className="muted" style={{ fontSize: 18 }}>More things to try, picked by EzRoots for your class.</p>
      <div className="ezkidgrid">
        {acts.map((a) => <EzKidCard key={a.id} act={a} onClick={() => nav(`/student/play/x?activity=${a.id}`)} />)}
      </div>
    </div>
  );
}

function EzChildProgress() {
  const { db, me } = b();
  const kid = db.students.find((s) => s.id === me?.childId);
  const atts = db.attempts.filter((a) => a.studentId === kid.id);
  const earned = EzEarned(db, kid.id);
  const concepts = EzUniq(atts.map((a) => EzAct(db, a.activityId)?.concept).filter(Boolean));
  const week = EzEngagement(db, kid.id, EzAddDays(uA, -6), uA);
  return (
    <div className="stack" style={{ gap: 22 }}>
      <h1>Look how you’re growing! 🌱</h1>
      {EzAllowed(db, me, "ownActivity") && <div className="ezkidstats">
        <div className="kidcard"><span style={{ fontSize: 40 }}>✅</span><strong style={{ fontSize: 34 }}>{atts.length}</strong><small>activities done</small></div>
        <div className="kidcard"><span style={{ fontSize: 40 }}>🧠</span><strong style={{ fontSize: 34 }}>{concepts.length}</strong><small>things explored</small></div>
        <div className="kidcard"><span style={{ fontSize: 40 }}>🏅</span><strong style={{ fontSize: 34 }}>{earned.length}</strong><small>badges</small></div>
        <div className="kidcard"><span style={{ fontSize: 40 }}>📅</span><strong style={{ fontSize: 34 }}>{week.activities}</strong><small>this week</small></div>
      </div>}
      {EzAllowed(db, me, "ownPerformance") && <><section className="stack">
        <h2>Things I explored</h2>
        <div className="row wrap">
          {concepts.map((c) => <span key={c} className="pill primary" style={{ fontSize: 16, padding: "8px 14px" }}>⭐ {c}</span>)}
        </div>
      </section>
      <section className="stack">
        <h2>My badges</h2>
        <div className="ezkidgrid">
          {EzBadges.map(([name, icon, how]) => (
            <div key={name} className={`card badge ${earned.includes(name) ? "" : "locked"}`}>
              <span style={{ fontSize: 42 }}>{icon}</span>
              <strong>{name}</strong>
              <small>{earned.includes(name) ? "You earned this!" : how}</small>
            </div>
          ))}
        </div>
      </section></>}
      <small className="muted">There are no races here. Everyone learns at their own pace. 💜</small>
    </div>
  );
}

function EzPortfolioGrid({ items, empty }) {
  if (!items.length) return <EzEmpty icon="star" title={empty ?? "Nothing here yet"} />;
  return (
    <div className="ezportfolio">
      {items.map((p) => (
        <div key={p.id} className="card pad stack">
          <div className="row between">
            <EzPill tone={p.kind === "Achievement" ? "good" : p.kind === "Teacher comment" ? "primary" : "pink"}>{p.kind}</EzPill>
            <small>{CA(p.date)}</small>
          </div>
          {p.image && <img src={p.image} alt={p.title} className="ezpfimg" />}
          <strong>{p.title}</strong>
          {p.text && <p>{p.text}</p>}
          <small>By {p.by}{p.pending ? " · waiting for teacher" : ""}</small>
        </div>
      ))}
    </div>
  );
}
function EzChildCreations() {
  const { db, me, update, toast } = b();
  const kid = db.students.find((s) => s.id === me?.childId);
  const nav = H();
  const items = db.portfolio.filter((p) => p.studentId === kid.id && ["Drawing", "Writing", "Photo", "Reflection"].includes(p.kind));
  const drawAct = db.activities.find((a) => a.id === "act-my-drawing");
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
      update((d) => {
        d.portfolio.unshift({ id: O("pf"), studentId: kid.id, kind: "Photo", title: "Photo of my work", image: c.toDataURL("image/jpeg", 0.7), date: uA, by: EzFirst(kid.name), pending: true });
        const tch = EzTeacherOf(d, kid.sectionId);
        if (tch) EzNotify(d, tch.id, `${kid.name} shared a photo of their work.`, `/teacher/students/${kid.id}`);
      });
      toast("Sent to your teacher 📷");
    };
    img.src = URL.createObjectURL(f);
  };
  return (
    <div className="stack" style={{ gap: 18 }}>
      <h1>🎨 My creations</h1>
      <div className="row wrap">
        {drawAct && <button className="btn lg" onClick={() => nav(`/student/play/x?activity=${drawAct.id}`)}>✏️ Draw something</button>}
        <label className="btn lg secondary">
          📷 Share a photo of my work
          <input type="file" accept="image/*" capture="environment" hidden onChange={onPhoto} />
        </label>
      </div>
      <small className="muted">Only you, your teacher and your family can see these. Nothing here is public.</small>
      <EzPortfolioGrid items={items} empty="Draw or share your first creation!" />
    </div>
  );
}
