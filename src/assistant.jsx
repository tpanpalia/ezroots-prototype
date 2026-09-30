// v2 EzRoots Assistant preview (§56). Answers are assembled from EzRoots-approved
// content and platform data only. There is no generative AI in this prototype.

const EzAllConcepts = (db) => EzUniq(db.activities.map((a) => a.concept)).sort((a, c) => c.length - a.length);
function EzFindConcept(db, text) {
  const t2 = text.toLowerCase();
  return EzAllConcepts(db).find((c) => t2.includes(c.toLowerCase()) || t2.includes(c.toLowerCase().replace(/s$/, "")));
}

function EzAnswer(db, me, text) {
  const t2 = text.toLowerCase();
  const concept = EzFindConcept(db, text);
  if (me.role === "teacher") {
    const sec = db.teacherContext.sectionId;
    if (/support|struggl|help/.test(t2) && !/which children|who/.test(t2)) {
      const c = concept ?? EzSectionStats(db, sec).conceptRows[0]?.concept;
      if (!c) return { text: "I don’t have results for your class yet." };
      const r = EzRecommend(db, c, db.sections.find((s) => s.id === sec)?.level);
      return {
        text: `Supporting a child with ${c}:`,
        items: [
          `In class: ${r.tip}`,
          ...r.activities.slice(0, 3).map((a) => `Assign “${a.title}” (${EzKinds[EzKindOf(a)]?.label}, ${a.minutes} min).`),
          ...r.lessonPlans.slice(0, 2).map((x) => `Revisit lesson plan “${x.lp.title}” (Day ${x.day}).`),
          ...r.home.slice(0, 1).map((h) => `Suggest at home: ${h}`),
        ],
      };
    }
    if (/which children|who needs|alerts?/.test(t2)) {
      const al = EzAlerts(db, sec);
      return { text: al.length ? "Children who may need a little help:" : "No one right now.", items: al.map((a) => `${a.text} (${a.kids.map((k) => EzFirst(k.name)).join(", ")})`) };
    }
  }
  if (me.role === "parent") {
    const kid = EzStudent(db, EzParentChildId(db, me));
    const ms = EzChildConcepts(db, kid.id);
    if (/activity|practi|home|game/.test(t2)) {
      const c = concept ?? ms.find((m) => m.level !== "Strong")?.concept ?? ms[0]?.concept;
      const ideas = EzHomeIdeas[c] ?? [];
      return { text: `Simple ideas to practise ${c} with ${EzFirst(kid.name)}:`, items: ideas.length ? ideas.map((i) => i.replace(/your child/gi, EzFirst(kid.name))) : ["Talk about what they did in class today and ask them to show you."] };
    }
    if (/how|doing|progress/.test(t2)) {
      const w = EzWeekSummary(db, kid, EzAddDays(uA, -6));
      return { text: `${EzFirst(kid.name)} this week:`, items: [`${w.attempts.length} activities, ${EzFmtMin(w.activeSec)} of learning time.`, `Going well: ${w.strong.join(", ") || "exploring"}.`, `Practising: ${w.practising.join(", ") || "nothing extra"}.`] };
    }
  }
  if (["superadmin", "contentadmin", "principal"].includes(me.role)) {
    const level = Mt.find((l) => t2.includes(l.toLowerCase()));
    if (/activit/.test(t2) && /engag|master|best|highest|work/.test(t2)) {
      const rows = EzActivityEffectiveness(db, (a) => !level || a.level === level).filter((r) => r.engagement != null && r.mastery != null)
        .sort((a, c) => c.engagement + c.mastery - (a.engagement + a.mastery)).slice(0, 5);
      return { text: `${level ?? "All"} activities with the highest engagement and mastery:`, items: rows.map((r) => `${r.act.title} · engagement ${EzPct(r.engagement)}, mastery ${EzPct(r.mastery)} (${r.uses} results)`) };
    }
    if (/school/.test(t2) && /support|low|help|need/.test(t2)) {
      const rows = db.schools.map((s) => ({ s, h: EzHealth(db, s) })).sort((a, c) => a.h.score - c.h.score).slice(0, 3);
      return { text: "Schools that may need support:", items: rows.map(({ s, h }) => `${s.name} · health score ${h.score} (engagement ${EzPct(h.parts.engagement)}, implementation ${EzPct(h.parts.implementation)})`) };
    }
    if (/concept|difficult|hard|low mastery/.test(t2)) {
      const rows = EzActivityEffectiveness(db, (a) => !level || a.level === level).sort((a, c) => (c.fail ?? 0) - (a.fail ?? 0)).slice(0, 5);
      return { text: "Hardest activities right now:", items: rows.map((r) => `${r.act.title} (${r.act.concept}) · ${EzPct(r.fail)} below Developing`) };
    }
  }
  return { text: "I can answer questions like the ones below, using EzRoots curriculum content and your data.", items: [] };
}
const EzAskExamples = {
  teacher: ["How can I support a child struggling with patterns?", "Which children need support?"],
  parent: ["Give me a simple activity to practise patterns at home.", "How is my child doing this week?"],
  superadmin: ["Which Grade 1 activities have the highest engagement and mastery?", "Which schools need support?", "Which concepts are difficult in Nursery?"],
  contentadmin: ["Which Grade 1 activities have the highest engagement and mastery?", "Which concepts are difficult in Nursery?"],
  principal: ["Which Nursery activities have the highest engagement and mastery?"],
};

function EzAssistantRoot() {
  const { db, me } = b();
  const loc = fe();
  const [open, setOpen] = B.useState(false);
  const [q, setQ] = B.useState("");
  const [log, setLog] = B.useState([]);
  if (!me || !db.settings?.aiPreview || me.role === "student" || !EzAskExamples[me.role] || loc.pathname.startsWith("/login") || loc.pathname.includes("smartboard")) return null;
  const ask = (text) => {
    if (!text.trim()) return;
    setLog([...log, { q: text, a: EzAnswer(db, me, text) }]);
    setQ("");
  };
  return (
    <>
      <button className="btn ezaskfab" onClick={() => setOpen(true)}>✨ Ask EzRoots</button>
      {open && (
        <EzDrawer title="EzRoots Assistant · preview" onClose={() => setOpen(false)}>
          <EzInfo>Answers come only from EzRoots-approved curriculum content and platform data. No generative AI in this preview; the AI layer is Phase 5.</EzInfo>
          <div className="stack">
            {log.map((m, i) => (
              <div key={i} className="stack">
                <div className="ezmsg me">{m.q}</div>
                <div className="ezmsg">
                  <p>{m.a.text}</p>
                  {m.a.items?.length > 0 && <ul>{m.a.items.map((x, k) => <li key={k}>{x}</li>)}</ul>}
                </div>
              </div>
            ))}
          </div>
          <div className="row wrap">{EzAskExamples[me.role].map((x) => <button key={x} className="pill" onClick={() => ask(x)}>{x}</button>)}</div>
          <form className="row" onSubmit={(e) => { e.preventDefault(); ask(q); }}>
            <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask a question" />
            <button className="btn">Ask</button>
          </form>
        </EzDrawer>
      )}
    </>
  );
}
