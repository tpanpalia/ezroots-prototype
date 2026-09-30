// Child-world building blocks shared by the garden design (garden.jsx):
// Sprout the mascot, read-aloud, stories & rhymes, and the data helpers.

/* ---------- the EzRoots mascot: Sprout the seedling ---------- */
function EzSprout({ size = 120, wave }) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={size * 140 / 120} className={`ezsprout ${wave ? "wave" : ""}`} aria-hidden="true">
      <path d="M60 38 C58 22 48 10 30 8 C32 26 44 36 60 38Z" fill="#5fb96b" stroke="#2f7a3c" strokeWidth="3" />
      <path d="M60 38 C62 20 74 8 94 8 C92 28 78 38 60 38Z" fill="#7ccf7a" stroke="#2f7a3c" strokeWidth="3" />
      <path d="M60 38 V52" stroke="#2f7a3c" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="60" cy="92" rx="40" ry="42" fill="#f6c453" stroke="#b9822a" strokeWidth="3" />
      <ellipse cx="44" cy="86" rx="7" ry="9" fill="#292d3c" /><circle cx="46" cy="83" r="2.5" fill="#fff" />
      <ellipse cx="76" cy="86" rx="7" ry="9" fill="#292d3c" /><circle cx="78" cy="83" r="2.5" fill="#fff" />
      <circle cx="36" cy="102" r="6" fill="#f29b7a" opacity=".7" /><circle cx="84" cy="102" r="6" fill="#f29b7a" opacity=".7" />
      <path d="M48 104 Q60 116 72 104" fill="none" stroke="#292d3c" strokeWidth="4" strokeLinecap="round" />
      <path className="arm" d="M22 96 Q8 84 12 70" fill="none" stroke="#b9822a" strokeWidth="6" strokeLinecap="round" />
      <path d="M98 96 Q110 104 106 116" fill="none" stroke="#b9822a" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
/* Read-aloud is off by default; switched on per child (child top bar, grown-ups corner,
   or the parent's Settings). Tapping a 🔊 button always reads, since the child asked. */
function EzAudioOnDb(db, kidId) {
  const id = kidId ?? db.users.find((u) => u.id === db.userId)?.childId;
  return db.kidAudioBy?.[id] === true;
}
function EzSetAudio(d, kidId, on) {
  d.kidAudioBy = { ...(d.kidAudioBy ?? {}), [kidId]: on };
}
function EzSay({ text, label = "Listen", big }) {
  return (
    <button type="button" className={`ezsay ${big ? "big" : ""}`} aria-label={`${label}: ${text}`} onClick={(e) => { e.stopPropagation(); EzSpeak(text); }}>🔊</button>
  );
}

const EzWeekOf = (day) => Ci(day);
function EzKidCtx() {
  const { db, me } = b();
  const kid = db.students.find((s) => s.id === me?.childId);
  const sec = db.sections.find((s) => s.id === kid?.sectionId);
  const school = EzSchoolOfSection(db, kid?.sectionId);
  const pos = db.classPosition[sec?.id] ?? 63;
  return { db, me, kid, sec, school, pos, curWeek: EzWeekOf(pos) };
}
function EzPlayItems(db, kid, week) {
  const mine = db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id)) && EzWeekOf(a.day ?? 63) === week && EzAct(db, a.activityId));
  const seen = new Set();
  return mine.filter((a) => (seen.has(a.activityId) ? false : seen.add(a.activityId))).map((a) => ({ a, act: EzAct(db, a.activityId), done: db.attempts.some((x) => x.studentId === kid.id && (x.assignmentId === a.id || (x.activityId === a.activityId && x.date >= (a.createdAt ?? "")))) }));
}
function EzDoItems(db, kid, sec, week) {
  const pos = db.classPosition[sec.id] ?? 63;
  const days = [0, 1, 2, 3, 4].map((i) => (week - 1) * 5 + 1 + i).filter((d) => d <= pos).map((d) => nn(d)).filter(Boolean);
  const out = [];
  for (const day of days)
    for (const s of day.sessions)
      for (const item of s.items)
        if (/EZP-|worksheet|book|tracing|activity|puppet|decorat|pluck|design/i.test(item) && !/^Recap|Celebration|Fun friday/i.test(item))
          out.push({ key: `${kid.id}|do|${day.day}|${s.slot}`, day: day.day, slot: s.slot, subject: jt[s.slot], text: item.replace(/\s+/g, " ").trim(), materials: s.materials });
  const concepts = EzUniq(EzPlayItems(db, kid, week).map((x) => x.act.concept));
  for (const c of concepts) for (const [i, t2] of (EzHomeIdeas[c] ?? []).slice(0, 1).entries()) out.push({ key: `${kid.id}|${c}|${i}`, home: true, concept: c, text: t2.replace(/your child/gi, "you") });
  return out;
}
function EzStoriesFor(db, kid, sec) {
  return EzStories.filter((s) => s.levels.includes(sec.level));
}
function EzTodayPlan(db, kid, sec, week) {
  const play = EzPlayItems(db, kid, week).filter((x) => x.a.due >= uA || x.done).slice(-3);
  const story = EzStoriesFor(db, kid, sec)[0];
  const doIt = EzDoItems(db, kid, sec, week).find((x) => x.day === (db.classPosition[sec.id] ?? 63)) ?? EzDoItems(db, kid, sec, week)[0];
  const items = [
    ...play.map((x) => ({ label: x.act.title, done: x.done })),
    ...(db.settings.childSee !== false && story ? [{ label: story.title, done: !!db.storyReads?.[`${kid.id}|${story.id}`] }] : []),
    ...(doIt ? [{ label: doIt.text, done: !!db.homeDone?.[doIt.key] }] : []),
  ];
  const done = items.filter((i) => i.done).length;
  return { items, pct: items.length ? Math.round((done / items.length) * 100) : 0 };
}

/* ---------- See: read-along stories and action rhymes ---------- */
const EzStories = [
  { id: "st-sunmoon", kind: "Story", title: "Sun and Moon Take Turns", art: "☀️🌙", subject: "Maths", concept: "Patterns", levels: ["Nursery", "LKG"],
    pages: [["☀️", "Every morning, Sun wakes up and says hello."], ["🌙", "Every night, Moon comes out to say goodnight."], ["☀️🌙☀️🌙", "Sun, Moon, Sun, Moon. They take turns every day!"], ["🤔", "After Moon, who comes next? The Sun! Good night, Moon."]] },
  { id: "st-thick", kind: "Story", title: "The Thick Book and the Thin Book", art: "📕📄", subject: "Maths", concept: "Thick & thin", levels: ["Nursery", "LKG"],
    pages: [["📕", "Big Book was very thick. It had lots and lots of pages."], ["📄", "Little Book was very thin. It had just a few pages."], ["📕📄", "“I can’t fit in the bag,” said Big Book. “I can!” said Little Book."], ["🎒", "So Little Book went in first, and Big Book was carried in two hands."]] },
  { id: "st-summer", kind: "Story", title: "Mia’s Summer Day", art: "🍉☀️", subject: "Science", concept: "Seasons", levels: ["Nursery", "LKG", "UKG"],
    pages: [["☀️", "It is summer. The sun is hot and bright."], ["🩳👒", "Mia wears shorts and a big sun hat."], ["🍉", "Mia and Grandma share a cold, juicy watermelon."], ["💧", "In summer, we drink lots of water. Glug, glug!"]] },
  { id: "st-snake", kind: "Story", title: "The Long Snake and the Short Worm", art: "🐍🐛", subject: "Maths", concept: "Measurement", levels: ["Grade 1", "Grade 2", "UKG"],
    pages: [["🐍", "Sam the snake was very long. He stretched from the tree to the pond."], ["🐛", "Wiggly the worm was short. He fitted on a leaf."], ["📏", "“Let’s measure!” said Owl. Sam was ten sticks long. Wiggly was one stick long."], ["🤝", "Long or short, they were the best of friends."]] },
  { id: "rh-stretch", kind: "Song & rhyme", title: "Stretch Up High", art: "🙆🎵", subject: "Activities", concept: "Movement", levels: ["Nursery", "LKG", "UKG", "Grade 1"],
    pages: [["🙆", "Stretch up high, touch the sky!"], ["🙇", "Bend down low, touch your toe!"], ["🔄", "Turn around, round and round!"], ["🪑", "Now sit down, without a sound. Shhh!"]] },
  { id: "rh-mangoes", kind: "Song & rhyme", title: "Five Little Mangoes", art: "🥭🌳", subject: "Maths", concept: "Numbers 1–3", levels: ["Nursery", "LKG", "UKG"],
    pages: [["🥭🥭🥭🥭🥭", "Five little mangoes hanging on a tree."], ["🥭🥭🥭", "The wind blew, whoosh! Now there are three."], ["🥭", "Along came a parrot, and one was left for me."], ["😋", "One little mango, as sweet as can be!"]] },
];
function EzStoryReader() {
  const { id } = on();
  const { db, me, kid, update } = { ...EzKidCtx(), update: b().update };
  const nav = H();
  const s = EzStories.find((x) => x.id === id);
  const [p, setP] = B.useState(0);
  const [word, setWord] = B.useState(-1);
  const [auto, setAuto] = B.useState(EzAudioOnDb(db));
  const done = p >= (s?.pages.length ?? 0);
  const read = (i) => {
    const txt = s.pages[i][1];
    try {
      const u = new SpeechSynthesisUtterance(txt);
      u.rate = 0.85; u.lang = "en-IN";
      u.onboundary = (e) => { if (e.name === "word" || e.charIndex != null) setWord(txt.slice(0, e.charIndex).split(" ").length - 1); };
      u.onend = () => { setWord(-1); if (auto) setTimeout(() => setP((x) => (x === i ? x + 1 : x)), 900); };
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch {}
  };
  B.useEffect(() => { if (s && !done && auto) read(p); if (done) speechSynthesis.cancel?.(); }, [p, auto]);
  B.useEffect(() => {
    if (!done || !s) return;
    update((d) => { d.storyReads = { ...(d.storyReads ?? {}), [`${kid.id}|${s.id}`]: uA }; EzEvent(d, me, "story_completed", { storyId: s.id, studentId: kid.id }); });
  }, [done]);
  B.useEffect(() => () => { try { speechSynthesis.cancel(); } catch {} }, []);
  if (!s) return <EzEmpty title="Story not found" />;
  if (done)
    return (
      <div className="game">
        <EzSprout size={110} wave />
        <h1>The end! ⭐</h1>
        <p style={{ fontSize: 20 }}>You {s.kind === "Story" ? "read" : "sang"} <b>{s.title}</b>.</p>
        <div className="row" style={{ justifyContent: "center" }}>
          <button className="btn lg secondary" onClick={() => setP(0)}>🔁 Again</button>
          <button className="btn lg" onClick={() => nav("/student/stories")}>More stories</button>
        </div>
      </div>
    );
  const [art, text] = s.pages[p];
  return (
    <div className="stack">
      <div className="row between">
        <K to="/student/stories" className="btn secondary">← Back</K>
        <span className="pill primary">{s.title}</span>
        <label className="row" style={{ gap: 6 }}><input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} /> Read to me</label>
      </div>
      <div className="ezstorypage">
        <div className="ezstoryart">{art}</div>
        <p className="ezstorytext">{text.split(" ").map((w, i) => <span key={i} className={i === word ? "on" : ""}>{w} </span>)}</p>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <button className="btn lg secondary" disabled={!p} onClick={() => setP(p - 1)}>◀</button>
        <button className="btn lg secondary" onClick={() => read(p)}>🔊</button>
        <span className="pill">{p + 1} / {s.pages.length}</span>
        <button className="btn lg" onClick={() => setP(p + 1)}>▶</button>
      </div>
    </div>
  );
}

function EzAutoRead({ children }) {
  const { db } = b();
  const ref = B.useRef(null);
  B.useEffect(() => {
    if (!EzAudioOnDb(db) || !ref.current) return;
    let last = "";
    const speak = () => {
      const h = ref.current?.querySelector(".game h1");
      const t2 = h?.textContent?.trim();
      if (t2 && t2 !== last) { last = t2; EzSpeak(t2); }
    };
    speak();
    const mo = new MutationObserver(speak);
    mo.observe(ref.current, { subtree: true, childList: true, characterData: true });
    return () => mo.disconnect();
  }, [EzAudioOnDb(db)]);
  const hear = () => EzSpeak(ref.current?.querySelector(".game h1")?.textContent ?? "");
  return (
    <div ref={ref} className="ezautoread">
      <button className="ezsay big fixed" aria-label="Hear the instructions again" onClick={hear}>🔊</button>
      {children}
    </div>
  );
}
function EzPlayWithVoice() {
  return <EzAutoRead><EzPlay /></EzAutoRead>;
}
