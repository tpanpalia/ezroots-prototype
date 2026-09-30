// EzRoots child world, "garden" design language.
//   My day      – one winding path of stepping stones in the order of the child's day;
//                 the next stone glows, finished stones bloom.
//   My garden   – each subject is a bed, each concept a plant that grows with practice
//                 (practice, never scores).
//   Memory lane – the classroom planner's days; pick a day to hear what the class did
//                 and play that day's games.
//   My things   – creations and badges.
// Interaction rules: hear-then-go (first tap speaks, then a big Go), one clear next step,
// hold-to-open grown-ups corner, everything read aloud.

const EzGTone = { Maths: "#3f8bac", English: "#d46692", Science: "#43866f", Activities: "#e0a526" };
const EzGIcon = { Maths: "🔢", English: "🔤", Science: "🌿", Activities: "🤸" };
const EzGBed = { Maths: "Number patch", English: "Word patch", Science: "Nature patch", Activities: "Busy-hands patch" };

/* First emoji of an activity's art: one clear symbol per stone or packet. */
function EzOneIcon(art) {
  try {
    const seg = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(art ?? "")].map((x) => x.segment).filter((x) => x.trim());
    return seg[0] ?? "⭐";
  } catch {
    return Array.from(art ?? "⭐")[0];
  }
}

/* ---------- scene ---------- */
function EzGardenScene({ children }) {
  return (
    <div className="ezg">
      <svg className="ezgbg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <linearGradient id="ezgsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff6df" /><stop offset="1" stopColor="#f3f7e4" /></linearGradient>
        </defs>
        <rect width="1400" height="800" fill="url(#ezgsky)" />
        <circle cx="1230" cy="110" r="60" fill="#ffe08a" opacity=".8" />
        <path d="M0 610 Q300 570 700 600 T1400 590 V800 H0Z" fill="#b9dc8f" />
        <path d="M0 660 H1400 V800 H0Z" fill="#9c6b45" />
        <path d="M0 660 Q700 640 1400 660" stroke="#7a5233" strokeWidth="6" fill="none" />
        {[120, 330, 560, 820, 1060, 1290].map((x, i) => (
          <path key={i} d={`M${x} 662 q-10 40 -30 60 M${x} 662 q12 45 34 58 M${x} 662 q0 50 -4 110`} stroke="#6b4429" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".55" />
        ))}
      </svg>
      <div className="ezgin">{children}</div>
    </div>
  );
}

/* ---------- hear-then-go ---------- */
function useEzHearGo() {
  const { db } = b();
  const [sel, setSel] = B.useState(null);
  const tap = (id, label, go) => {
    if (sel === id) return go();
    setSel(id);
    if (EzAudioOnDb(db)) EzSpeak(label);
  };
  return { sel, tap, clear: () => setSel(null) };
}
function EzGoBubble({ onGo }) {
  return <button className="ezggo" onClick={(e) => { e.stopPropagation(); onGo(); }}>Go ▶</button>;
}

/* ---------- plants ---------- */
function EzPlant({ stage, color, size = 84 }) {
  // stage 0 seed · 1 sprout · 2 bud · 3 flower
  return (
    <svg viewBox="0 0 80 100" width={size} height={size * 1.25} aria-hidden="true" className="ezgplant">
      <ellipse cx="40" cy="92" rx="30" ry="7" fill="#8a5a38" />
      {stage === 0 && <ellipse cx="40" cy="86" rx="7" ry="5" fill="#b07a4f" stroke="#6b4429" strokeWidth="2" />}
      {stage >= 1 && <path d={`M40 90 V${stage === 1 ? 64 : 40}`} stroke="#3f8f45" strokeWidth="5" strokeLinecap="round" />}
      {stage >= 1 && <path d="M40 74 q-18 -4 -20 -18 q16 0 20 16Z" fill="#6cc070" />}
      {stage >= 1 && <path d="M40 70 q18 -4 20 -18 q-16 0 -20 16Z" fill="#7fd07f" />}
      {stage === 2 && <ellipse cx="40" cy="36" rx="9" ry="12" fill={color} stroke="#3f8f45" strokeWidth="3" />}
      {stage === 3 && (
        <g>
          {[0, 60, 120, 180, 240, 300].map((a) => <ellipse key={a} cx="40" cy="22" rx="8" ry="14" fill={color} transform={`rotate(${a} 40 36)`} opacity=".92" />)}
          <circle cx="40" cy="36" r="8" fill="#ffd166" stroke="#e0a526" strokeWidth="2" />
        </g>
      )}
    </svg>
  );
}
function EzConceptStage(db, kidId, concept) {
  const n = db.attempts.filter((a) => a.studentId === kidId && EzAct(db, a.activityId)?.concept === concept).length;
  return n === 0 ? 0 : n <= 2 ? 1 : n <= 5 ? 2 : 3;
}

/* ---------- grown-ups: press and hold ---------- */
function EzHoldGate({ onOpen }) {
  const [p, setP] = B.useState(0);
  const t = B.useRef(null);
  const start = () => {
    const t0 = Date.now();
    t.current = setInterval(() => {
      const v = Math.min(1, (Date.now() - t0) / 3000);
      setP(v);
      if (v >= 1) { clearInterval(t.current); setP(0); onOpen(); }
    }, 50);
  };
  const stop = () => { clearInterval(t.current); setP(0); };
  return (
    <button className="ezghold" onPointerDown={start} onPointerUp={stop} onPointerLeave={stop} onContextMenu={(e) => e.preventDefault()} aria-label="Grown-ups: press and hold for 3 seconds">
      <svg viewBox="0 0 44 44" width="44" height="44"><circle cx="22" cy="22" r="19" fill="#fff" stroke="#e8e0cf" strokeWidth="4" /><circle cx="22" cy="22" r="19" fill="none" stroke="#6550a1" strokeWidth="4" strokeDasharray={`${p * 119.4} 200`} transform="rotate(-90 22 22)" /></svg>
      <span>🔒</span>
      <small>{p > 0 ? "Keep holding…" : "Grown-ups: hold"}</small>
    </button>
  );
}
function EzGrownModal({ onClose }) {
  const { db, me, update } = b();
  const nav = H();
  return (
    <AA title="Grown-ups corner" onClose={onClose}>
      <div className="stack">
        {db.parentAssist ? (
          <button className="btn lg" onClick={() => { update((d) => { EzEvent(d, me, "logout"); d.userId = d.parentAssist; d.parentAssist = null; }); nav("/parent"); }}>Back to the parent portal</button>
        ) : <p>Progress, notes and settings are in the parent’s own login.</p>}
        <button className="btn secondary" onClick={() => update((d) => EzSetAudio(d, me.childId, !EzAudioOnDb(db)))}>{EzAudioOnDb(db) ? "🔇 Turn read-aloud off" : "🔊 Turn read-aloud on"}</button>
        <button className="btn ghost" onClick={() => { update((d) => { EzEvent(d, me, "logout"); d.userId = null; d.parentAssist = null; }); nav("/login"); }}>Sign out</button>
      </div>
    </AA>
  );
}

/* Speaker switch in the child's top bar. */
function EzAudioToggle() {
  const { db, me, update } = b();
  const on = EzAudioOnDb(db);
  return (
    <button className={`ezgaudio ${on ? "on" : ""}`} aria-pressed={on} aria-label={on ? "Read-aloud is on. Tap to turn off" : "Read-aloud is off. Tap to turn on"}
      onClick={() => { update((d) => EzSetAudio(d, me.childId, !on)); if (!on) EzSpeak("Read-aloud is on"); else try { speechSynthesis.cancel(); } catch {} }}>
      <span>{on ? "🔊" : "🔇"}</span><small>{on ? "Sound on" : "Sound off"}</small>
    </button>
  );
}

/* ---------- shell ---------- */
function EzGardenShell() {
  const { db, kid, sec, pos } = EzKidCtx();
  const [grown, setGrown] = B.useState(false);
  EzUseActiveTime(kid);
  if (!kid) return null;
  const nav = [["/student", "🪜", "My day", true], ["/student/garden", "🌻", "My garden"], ["/student/days", "👣", "Memory lane"], ["/student/things", "🎒", "My things"]];
  return (
    <EzGardenScene>
      <header className="ezgtop">
        <span className="ezgme"><span className="ezgavatar">{kid.avatar}</span><span><b>{EzFirst(kid.name)}</b><small>{CA(Qt(pos), { weekday: "long", day: "numeric", month: "short" })} · Day {pos}</small></span></span>
        <span className="spacer" />
        <EzAudioToggle />
        <EzHoldGate onOpen={() => setGrown(true)} />
      </header>
      <main className="ezgmain"><EzOutlet /></main>
      <nav className="ezgdock" aria-label="Child">
        {nav.map(([to, icon, label, end]) => (
          <Ot key={to} to={to} end={end} className="ezgdockbtn" onClick={() => EzAudioOnDb(db) && EzSpeak(label)}>
            <span>{icon}</span><b>{label}</b>
          </Ot>
        ))}
      </nav>
      {grown && <EzGrownModal onClose={() => setGrown(false)} />}
    </EzGardenScene>
  );
}

/* ---------- My day: the path ---------- */
function EzDayStones(db, kid, sec, pos) {
  const stones = [];
  const see = db.settings.childSee !== false;
  const stories = EzStoriesFor(db, kid, sec);
  if (see && stories.length) {
    const st = stories[pos % stories.length];
    stones.push({ key: `story-${st.id}`, icon: st.art, label: st.title, say: `${st.kind === "Story" ? "Story" : "Song"}: ${st.title}`, tone: EzGTone[st.subject], done: db.storyReads?.[`${kid.id}|${st.id}`] === uA, to: `/student/story/${st.id}` });
  }
  const mine = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)) && EzAct(db, a.activityId));
  const doneFor = (a) => db.attempts.some((x) => x.studentId === kid.id && x.assignmentId === a.id);
  const open = mine.filter((a) => a.due >= uA && !doneFor(a)).sort((x, y) => (x.day ?? 0) - (y.day ?? 0));
  const today = mine.filter((a) => db.attempts.some((x) => x.studentId === kid.id && x.assignmentId === a.id && x.date === uA));
  for (const a of [...today, ...open].slice(0, 4)) {
    const act = EzAct(db, a.activityId);
    stones.push({ key: a.id, icon: act.art, label: act.title, say: act.title, tone: EzGTone[act.subject], done: doneFor(a), to: `/student/play/${a.id}` });
  }
  const ad = EzAdaptive(db, kid).find((x) => x.forChild);
  if (ad) stones.push({ key: `ad-${ad.act.id}`, icon: ad.dir === "up" ? "🚀" : "🌱", label: `${ad.dir === "up" ? "Next challenge" : "Warm-up"}: ${ad.act.title}`, say: `${ad.dir === "up" ? "A new challenge" : "A warm-up"}: ${ad.act.title}`, tone: "#6550a1", done: db.attempts.some((x) => x.studentId === kid.id && x.activityId === ad.act.id && x.date === uA), to: `/student/play/x?activity=${ad.act.id}`, adaptive: true });
  const hands = EzDoItems(db, kid, sec, EzWeekOf(pos));
  const h = hands.find((x) => x.day === pos) ?? hands.find((x) => !db.homeDone?.[x.key]) ?? hands[0];
  if (h) stones.push({ key: h.key, icon: "🖐️", label: "Try with your hands", say: `Try with your hands. ${h.text}`, tone: "#9c6b45", done: !!db.homeDone?.[h.key], hands: h });
  return stones;
}
function EzPathLayout(n) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = n === 1 ? 500 : 90 + (i * 820) / (n - 1);
    const y = 250 + Math.sin(i * 1.25 + 0.6) * 120;
    pts.push([x, y]);
  }
  let d = pts.length ? `M${pts[0][0]} ${pts[0][1]}` : "";
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const mx = (x0 + x1) / 2;
    d += ` C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`;
  }
  return { pts, d };
}
function EzDayPath() {
  const { db, kid, sec, pos } = EzKidCtx();
  const nav = H();
  const hg = useEzHearGo();
  const [hands, setHands] = B.useState(null);
  const { minutesToday, limit } = Wi();
  const stones = EzDayStones(db, kid, sec, pos);
  const next = stones.findIndex((s) => !s.done);
  const { pts, d } = EzPathLayout(stones.length);
  const allDone = stones.length && next === -1;
  const hello = allDone ? `Well done ${EzFirst(kid.name)}! Your path is all flowers today.` : `Hello ${EzFirst(kid.name)}! Let’s walk today’s path.`;
  B.useEffect(() => { if (EzAudioOnDb(db)) setTimeout(() => EzSpeak(hello), 350); }, []);
  const go = (s) => (s.hands ? setHands(s.hands) : nav(s.to));
  return (
    <div className="ezgday">
      <div className="ezghello">
        <EzSprout size={78} wave />
        <button className="ezgsay" onClick={() => EzSpeak(hello)}>{hello} <span>🔊</span></button>
      </div>
      {minutesToday >= limit && <div className="notice">🌙 That’s enough screen time for today. Your path will wait for you tomorrow!</div>}
      <div className="ezgpath" onClick={hg.clear}>
        <svg viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
          <path d={d} fill="none" stroke="#e7d7b3" strokeWidth="46" strokeLinecap="round" />
          <path d={d} fill="none" stroke="#f6ecd4" strokeWidth="30" strokeLinecap="round" strokeDasharray="2 26" />
        </svg>
        {stones.map((s, i) => (
          <div key={s.key} className="ezgstonewrap" style={{ left: `${(pts[i][0] / 1000) * 100}%`, top: `${(pts[i][1] / 440) * 100}%` }}>
            {hg.sel === s.key && <EzGoBubble onGo={() => go(s)} />}
            <button className={`ezgstone ${s.done ? "done" : ""} ${i === next ? "next" : ""} ${s.adaptive ? "adaptive" : ""}`} style={{ "--tone": s.tone }} aria-label={s.label}
              onClick={(e) => { e.stopPropagation(); hg.tap(s.key, s.say, () => go(s)); }}>
              <span className="ezgicon">{EzOneIcon(s.icon)}</span>
              {s.done && <span className="ezgbloom">🌼</span>}
              <span className="ezgstep">{i + 1}</span>
            </button>
            <small className="ezglabel">{s.label}</small>
          </div>
        ))}
      </div>
      {!stones.length && <div className="ezgempty"><EzSprout size={80} /><p>Your teacher hasn’t planted anything yet today. Visit your garden!</p></div>}
      <p className="ezghint">Tap a stone to hear it. Tap <b>Go</b> to start.</p>
      {hands && <EzHandsSheet item={hands} onClose={() => setHands(null)} />}
    </div>
  );
}

/* ---------- hands-on sheet ---------- */
function EzHandsSheet({ item, onClose }) {
  const { db, kid } = EzKidCtx();
  const { update, toast } = b();
  const done = !!db.homeDone?.[item.key];
  const onPhoto = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      const s2 = Math.min(1, 360 / img.width);
      c.width = img.width * s2; c.height = img.height * s2;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      update((d) => {
        d.portfolio.unshift({ id: O("pf"), studentId: kid.id, kind: "Photo", title: item.text.slice(0, 60), image: c.toDataURL("image/jpeg", 0.7), date: uA, by: EzFirst(kid.name), pending: true });
        d.homeDone = { ...(d.homeDone ?? {}), [item.key]: uA };
        const tch = EzTeacherOf(d, kid.sectionId);
        if (tch) EzNotify(d, tch.id, `${kid.name} shared a photo of their work.`, `/teacher/students/${kid.id}`);
      });
      toast("Sent to your teacher 📷");
      onClose();
    };
    img.src = URL.createObjectURL(f);
  };
  B.useEffect(() => { if (EzAudioOnDb(db)) EzSpeak(item.text); }, []);
  return (
    <AA title="🖐️ Try with your hands" onClose={onClose}>
      <div className="ezghands">
        <p className="ezgbig">{item.text} <EzSay text={item.text} /></p>
        {item.materials && <p>🧺 You need: <b>{item.materials}</b></p>}
        <p className="muted">Do this with a grown-up, away from the screen.</p>
        <div className="row wrap">
          <button className={`btn lg ${done ? "good" : ""}`} onClick={() => { update((d) => { d.homeDone = { ...(d.homeDone ?? {}), [item.key]: done ? undefined : uA }; }); if (!done) toast("🌼 A flower on your path!"); onClose(); }}>{done ? "✔ Done" : "🌼 I did it!"}</button>
          <label className="btn lg secondary">📷 Show my teacher<input type="file" accept="image/*" hidden onChange={onPhoto} /></label>
        </div>
      </div>
    </AA>
  );
}

/* ---------- My garden ---------- */
function EzGardenPage() {
  const { db, kid, sec, school } = EzKidCtx();
  const [open, setOpen] = B.useState(null);
  const pool = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)));
  const acts = EzUniq(pool.map((a) => a.activityId)).map((id) => EzAct(db, id)).filter(Boolean);
  const bySubject = EzGroup(acts, "subject");
  const see = db.settings.childSee !== false;
  return (
    <div className="stack ezgpage">
      <h1 className="ezgh">🌻 My garden <EzSay text="My garden. Every time you practise, your plants grow." /></h1>
      <p className="ezgsub">Every time you practise, your plants grow: seed → sprout (1–2) → bud (3–5) → flower (6+). It’s about practice, not getting everything right.</p>
      <div className="ezgbeds">
        {[...bySubject.keys()].map((subj) => {
          const concepts = EzUniq(bySubject.get(subj).map((a) => a.concept));
          return (
            <section key={subj} className="ezgbed" style={{ "--tone": EzGTone[subj] }}>
              <div className="ezgsign">{EzGIcon[subj]} {EzGBed[subj] ?? subj}</div>
              <div className="ezgplants">
                {concepts.map((c) => {
                  const st = EzConceptStage(db, kid.id, c);
                  return (
                    <button key={c} className="ezgplantbtn" onClick={() => { if (EzAudioOnDb(db)) EzSpeak(c); setOpen(c); }}>
                      <EzPlant stage={st} color={EzGTone[subj]} />
                      <small>{c}</small>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
        {see && (
          <section className="ezgbed story" style={{ "--tone": "#8a5cc2" }}>
            <div className="ezgsign">📚 Story nook</div>
            <K to="/student/stories" className="ezgnook"><span>📖🎵</span><b>Stories & songs</b></K>
          </section>
        )}
      </div>
      {open && <EzConceptSheet concept={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
function EzConceptSheet({ concept, onClose }) {
  const { db, kid, sec, school } = EzKidCtx();
  const nav = H();
  const hg = useEzHearGo();
  const pool = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)));
  const acts = EzUniq(pool.map((a) => a.activityId)).map((id) => EzAct(db, id)).filter((a) => a?.concept === concept);
  const explore = school.policy?.childExplore
    ? db.activities.filter((a) => a.status === "published" && a.concept === concept && a.level === sec.level && _e(school.packages[sec.level], a.tier) && !acts.includes(a))
    : [];
  const stage = EzConceptStage(db, kid.id, concept);
  const adapt = new Map(EzAdaptive(db, kid).filter((x) => x.forChild && x.concept === concept).map((x) => [x.act.id, x.dir]));
  const packet = (a, extra) => (
    <div key={a.id} className="ezgpacketwrap">
      {hg.sel === a.id && <EzGoBubble onGo={() => nav(`/student/play/x?activity=${a.id}`)} />}
      <button className={`ezgpacket ${extra ? "explore" : ""}`} style={{ "--tone": EzGTone[a.subject] }} onClick={() => hg.tap(a.id, a.title, () => nav(`/student/play/x?activity=${a.id}`))}>
        <span className="ezgicon">{EzOneIcon(a.art)}</span>
        <b>{a.title}</b>
        {extra && <small>new to explore</small>}
        {adapt.get(a.id) && <small>{adapt.get(a.id) === "up" ? "🚀 next challenge" : "🌱 warm-up"}</small>}
      </button>
    </div>
  );
  return (
    <AA title={`🌱 ${concept}`} onClose={onClose}>
      <div className="row" style={{ gap: 12 }}>
        <EzPlant stage={stage} color={EzGTone[acts[0]?.subject] ?? "#6550a1"} size={70} />
        <p className="ezgbig" style={{ margin: 0 }}>{["Plant a seed: play one!", "A sprout! Keep going.", "Nearly a flower!", "Your flower is blooming! 🌼"][stage]}</p>
      </div>
      <div className="ezgpackets">
        {acts.map((a) => packet(a))}
        {explore.map((a) => packet(a, true))}
      </div>
      <small className="muted">Tap a seed packet to hear it, then tap Go.</small>
    </AA>
  );
}

/* ---------- Memory lane: the classroom's days ---------- */
function EzMemoryLane() {
  const { db, kid, sec, pos } = EzKidCtx();
  const nav = H();
  const hg = useEzHearGo();
  const [sp, setSp] = QE();
  const day = Number(sp.get("d") ?? pos);
  const [hands, setHands] = B.useState(null);
  const days = [...Array(12)].map((_, i) => pos - 11 + i).filter((x) => x >= 1);
  const plan = nn(day);
  const games = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)) && a.day === day && EzAct(db, a.activityId));
  const handsItems = EzDoItems(db, kid, sec, EzWeekOf(day)).filter((x) => x.day === day);
  const classSaid = plan ? plan.sessions.map((s) => s.items[0]).filter(Boolean) : [];
  return (
    <div className="stack ezgpage">
      <h1 className="ezgh">👣 Memory lane <EzSay text="Memory lane. What did your class do?" /></h1>
      <div className="ezglane">
        {days.map((dd) => {
          const played = db.attempts.some((x) => x.studentId === kid.id && db.assignments.find((a) => a.id === x.assignmentId)?.day === dd);
          return (
            <button key={dd} className={`ezgfoot ${dd === day ? "on" : ""} ${played ? "played" : ""}`} onClick={() => { setSp({ d: String(dd) }); if (EzAudioOnDb(db)) EzSpeak(dd === pos ? "Today" : CA(Qt(dd), { weekday: "long" })); }}>
              <span>{played ? "🌼" : "👣"}</span>
              <b>{dd === pos ? "Today" : CA(Qt(dd), { weekday: "short" })}</b>
              <small>Day {dd}</small>
            </button>
          );
        })}
      </div>
      <div className="ezgmemory">
        <section className="ezgcard">
          <h2>🏫 In class{day === pos ? " today" : ""}</h2>
          {classSaid.length ? classSaid.map((t2, i) => <p key={i} className="ezgline">{t2} <EzSay text={t2} /></p>) : <p className="muted">Your teacher’s plan for this day isn’t in the demo.</p>}
        </section>
        <section className="ezgcard">
          <h2>🎲 Games from this day</h2>
          <div className="ezgpackets">
            {games.map((a) => {
              const act = EzAct(db, a.activityId);
              const done = db.attempts.some((x) => x.studentId === kid.id && x.assignmentId === a.id);
              return (
                <div key={a.id} className="ezgpacketwrap">
                  {hg.sel === a.id && <EzGoBubble onGo={() => nav(`/student/play/${a.id}`)} />}
                  <button className="ezgpacket" style={{ "--tone": EzGTone[act.subject] }} onClick={() => hg.tap(a.id, act.title, () => nav(`/student/play/${a.id}`))}>
                    <span className="ezgicon">{EzOneIcon(act.art)}</span><b>{act.title}</b>{done && <small>🌼 done</small>}
                  </button>
                </div>
              );
            })}
            {!games.length && <p className="muted">No games that day.</p>}
          </div>
          {handsItems.length > 0 && (
            <>
              <h2>🖐️ Try with your hands</h2>
              {handsItems.map((h) => <button key={h.key} className="ezgline btnish" onClick={() => setHands(h)}>{db.homeDone?.[h.key] ? "🌼" : "🖐️"} {h.text}</button>)}
            </>
          )}
        </section>
      </div>
      {hands && <EzHandsSheet item={hands} onClose={() => setHands(null)} />}
    </div>
  );
}

/* ---------- Stories & songs shelf ---------- */
function EzStoryShelf() {
  const { db, kid, sec } = EzKidCtx();
  const nav = H();
  const hg = useEzHearGo();
  if (db.settings.childSee === false) return <EzEmpty icon="lock" title="Stories and songs are switched off" />;
  const list = EzStoriesFor(db, kid, sec);
  return (
    <div className="stack ezgpage">
      <h1 className="ezgh">📚 Story nook <EzSay text="Story nook. Stories and songs." /></h1>
      <div className="ezgshelf">
        {list.map((s) => (
          <div key={s.id} className="ezgpacketwrap">
            {hg.sel === s.id && <EzGoBubble onGo={() => nav(`/student/story/${s.id}`)} />}
            <button className="ezgbook" style={{ "--tone": EzGTone[s.subject] }} onClick={() => hg.tap(s.id, s.title, () => nav(`/student/story/${s.id}`))}>
              <span className="ezgicon">{EzOneIcon(s.art)}</span>
              <b>{s.title}</b>
              <small>{s.kind === "Story" ? "📖 read with me" : "🎵 sing and move"}{db.storyReads?.[`${kid.id}|${s.id}`] ? " · 🌼" : ""}</small>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- My things: treasure box ---------- */
function EzMyThings() {
  const { db, kid } = EzKidCtx();
  const earned = EzEarned(db, kid.id);
  return (
    <div className="stack ezgpage">
      <h1 className="ezgh">🎒 My things <EzSay text="My things. Your badges and your creations." /></h1>
      <section className="ezgcard">
        <h2>🏅 My badges</h2>
        <div className="ezgbadges">
          {EzBadges.map(([name, icon, how]) => (
            <button key={name} className={`ezgbadge ${earned.includes(name) ? "" : "locked"}`} onClick={() => EzSpeak(earned.includes(name) ? `${name}. You earned this!` : `${name}. ${how}`)}>
              <span>{earned.includes(name) ? icon : "🔒"}</span><small>{name}</small>
            </button>
          ))}
        </div>
        <small className="muted">No races here. Everyone grows at their own pace. 💜</small>
      </section>
      <EzChildCreations />
    </div>
  );
}

function EzGardenPlay() {
  return <EzAutoRead><EzPlay /></EzAutoRead>;
}
