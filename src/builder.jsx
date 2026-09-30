// v2 activity builder (§9): select type → upload images → questions → answers →
// correct response → feedback → preview → send for review → publish.

function EzImgInput({ value, onChange, label = "Image" }) {
  const pick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      const s = Math.min(1, 240 / Math.max(img.width, img.height));
      c.width = img.width * s;
      c.height = img.height * s;
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      onChange(c.toDataURL("image/png"));
    };
    img.src = URL.createObjectURL(f);
  };
  return (
    <span className="row" style={{ gap: 6 }}>
      {value && <img src={value} alt="" style={{ width: 40, height: 40, objectFit: "contain", borderRadius: 6, border: "1px solid var(--line)" }} />}
      <label className="btn ghost sm"><S n="upload" />{value ? "Change" : label}<input type="file" accept="image/*" hidden onChange={pick} /></label>
      {value && <button className="btn ghost sm" onClick={() => onChange(null)}>✕</button>}
    </span>
  );
}

const EzBuilderKinds = ["mcq", "image", "listen", "scenario", "tap", "dragsort", "match", "connect", "sequence", "manip", "puzzle", "trace", "draw", "write", "say"];
function EzBlankContent(kind) {
  const q = () => ({ prompt: "", choices: ["", "", ""], correct: 0, hint: "", feedbackRight: "", feedbackWrong: "", image: null, say: "" });
  switch (kind) {
    case "mcq": case "image": case "listen": case "scenario": return { kind, questions: [q()] };
    case "tap": return { kind, prompt: "Tap every…", items: [["", true], ["", false], ["", true], ["", false]] };
    case "dragsort": return { kind, groups: ["Group A", "Group B"], items: [["", 0], ["", 1], ["", 0], ["", 1]] };
    case "match": case "connect": return { kind, prompt: "Match each pair", pairs: [["", ""], ["", ""], ["", ""]] };
    case "sequence": return { kind, prompt: "Put these in order", items: ["", "", ""] };
    case "manip": return { kind, targets: [2, 4, 3] };
    case "puzzle": return { kind, prompt: "Swap two pieces at a time to fix the picture" };
    case "trace": return { kind, prompt: "Trace the letter", glyph: "a" };
    case "draw": return { kind, prompt: "Draw…" };
    case "write": return { kind, prompt: "Write about…" };
    case "say": return { kind, words: [["", "🙂"]] };
    default: return { kind };
  }
}

function EzContentEditor({ c, set }) {
  const up = (fn) => { const n = JSON.parse(JSON.stringify(c)); fn(n); set(n); };
  const listRows = (key, render, blank) => (
    <div className="stack">
      {c[key].map((row, i) => (
        <div key={i} className="row wrap ezbrow">
          {render(row, i)}
          <button className="btn ghost sm" aria-label="Remove" onClick={() => up((n) => n[key].splice(i, 1))}>✕</button>
        </div>
      ))}
      <button className="btn secondary sm" style={{ justifySelf: "start" }} onClick={() => up((n) => n[key].push(blank))}><S n="plus" />Add</button>
    </div>
  );
  switch (c.kind) {
    case "mcq": case "image": case "listen": case "scenario":
      return (
        <div className="stack">
          {c.questions.map((q, i) => (
            <div key={i} className="card pad stack">
              <div className="row between"><b>Question {i + 1}</b><button className="btn ghost sm" disabled={c.questions.length < 2} onClick={() => up((n) => n.questions.splice(i, 1))}>Remove</button></div>
              <N label="Question"><input className="input" value={q.prompt} onChange={(e) => up((n) => (n.questions[i].prompt = e.target.value))} placeholder="e.g. Which is longer?" /></N>
              {c.kind === "listen" && <N label="What the child hears" hint="read aloud by the device"><input className="input" value={q.say} onChange={(e) => up((n) => (n.questions[i].say = e.target.value))} /></N>}
              <div className="row"><span className="muted">Picture for the question</span><EzImgInput value={q.image} onChange={(v2) => up((n) => (n.questions[i].image = v2))} /></div>
              <div className="stack">
                <small>Answers · tick the correct one</small>
                {q.choices.map((ch, k) => {
                  const label = typeof ch === "string" ? ch : ch.label;
                  const img = typeof ch === "string" ? null : ch.image;
                  return (
                    <div key={k} className="row wrap ezbrow">
                      <input type="radio" name={`c-${i}`} checked={q.correct === k} onChange={() => up((n) => (n.questions[i].correct = k))} aria-label="Correct answer" />
                      <input className="input" style={{ maxWidth: 260 }} value={label} onChange={(e) => up((n) => (n.questions[i].choices[k] = img ? { label: e.target.value, image: img } : e.target.value))} placeholder={`Answer ${k + 1}`} />
                      <EzImgInput value={img} label="Picture" onChange={(v2) => up((n) => (n.questions[i].choices[k] = v2 ? { label, image: v2 } : label))} />
                      <button className="btn ghost sm" disabled={q.choices.length < 3} onClick={() => up((n) => { n.questions[i].choices.splice(k, 1); if (n.questions[i].correct >= n.questions[i].choices.length) n.questions[i].correct = 0; })}>✕</button>
                    </div>
                  );
                })}
                <button className="btn secondary sm" style={{ justifySelf: "start" }} disabled={q.choices.length >= 5} onClick={() => up((n) => n.questions[i].choices.push(""))}><S n="plus" />Answer</button>
              </div>
              <div className="grid g3">
                <N label="Hint"><input className="input" value={q.hint} onChange={(e) => up((n) => (n.questions[i].hint = e.target.value))} /></N>
                <N label="Feedback when right"><input className="input" value={q.feedbackRight} onChange={(e) => up((n) => (n.questions[i].feedbackRight = e.target.value))} placeholder="Yes! That’s it! 🎉" /></N>
                <N label="Feedback when wrong"><input className="input" value={q.feedbackWrong} onChange={(e) => up((n) => (n.questions[i].feedbackWrong = e.target.value))} placeholder="Good try! Look again. 💜" /></N>
              </div>
            </div>
          ))}
          <button className="btn secondary" style={{ justifySelf: "start" }} onClick={() => up((n) => n.questions.push(EzBlankContent(c.kind).questions[0]))}><S n="plus" />Add question</button>
        </div>
      );
    case "tap":
      return (
        <div className="stack">
          <N label="Instruction"><input className="input" value={c.prompt} onChange={(e) => up((n) => (n.prompt = e.target.value))} /></N>
          {listRows("items", (row, i) => (<><input className="input" style={{ maxWidth: 260 }} value={row[0]} onChange={(e) => up((n) => (n.items[i][0] = e.target.value))} placeholder="🍪 Cookie" /><label className="row"><input type="checkbox" checked={row[1]} onChange={(e) => up((n) => (n.items[i][1] = e.target.checked))} /> correct</label></>), ["", false])}
        </div>
      );
    case "dragsort":
      return (
        <div className="stack">
          <div className="grid g2">
            {[0, 1].map((g) => <N key={g} label={`Group ${g + 1}`}><input className="input" value={c.groups[g]} onChange={(e) => up((n) => (n.groups[g] = e.target.value))} /></N>)}
          </div>
          {listRows("items", (row, i) => (<><input className="input" style={{ maxWidth: 260 }} value={row[0]} onChange={(e) => up((n) => (n.items[i][0] = e.target.value))} placeholder="🪨 Stone" /><select className="input" style={{ width: 160 }} value={row[1]} onChange={(e) => up((n) => (n.items[i][1] = Number(e.target.value)))}>{c.groups.map((g, k) => <option key={k} value={k}>{g}</option>)}</select></>), ["", 0])}
        </div>
      );
    case "match": case "connect":
      return (
        <div className="stack">
          <N label="Instruction"><input className="input" value={c.prompt} onChange={(e) => up((n) => (n.prompt = e.target.value))} /></N>
          {listRows("pairs", (row, i) => (<><input className="input" style={{ maxWidth: 200 }} value={row[0]} onChange={(e) => up((n) => (n.pairs[i][0] = e.target.value))} placeholder="Left" /><span>↔</span><input className="input" style={{ maxWidth: 200 }} value={row[1]} onChange={(e) => up((n) => (n.pairs[i][1] = e.target.value))} placeholder="Right" /></>), ["", ""])}
        </div>
      );
    case "sequence":
      return (
        <div className="stack">
          <N label="Instruction"><input className="input" value={c.prompt} onChange={(e) => up((n) => (n.prompt = e.target.value))} /></N>
          <small>Enter the steps in the correct order; the child sees them shuffled.</small>
          {listRows("items", (row, i) => (<><b>{i + 1}.</b><input className="input" style={{ maxWidth: 300 }} value={row} onChange={(e) => up((n) => (n.items[i] = e.target.value))} /></>), "")}
        </div>
      );
    case "manip":
      return <N label="Numbers to show" hint="comma-separated, 1–10"><input className="input" value={c.targets.join(", ")} onChange={(e) => up((n) => (n.targets = e.target.value.split(",").map((x) => EzClamp(parseInt(x) || 1, 1, 10))))} /></N>;
    case "trace":
      return (<div className="grid g2"><N label="Instruction"><input className="input" value={c.prompt} onChange={(e) => up((n) => (n.prompt = e.target.value))} /></N><N label="Letter or number"><input className="input" maxLength={2} value={c.glyph} onChange={(e) => up((n) => (n.glyph = e.target.value))} /></N></div>);
    case "say":
      return listRows("words", (row, i) => (<><input className="input" style={{ maxWidth: 200 }} value={row[0]} onChange={(e) => up((n) => (n.words[i][0] = e.target.value.toLowerCase()))} placeholder="word" /><input className="input" style={{ maxWidth: 80 }} value={row[1]} onChange={(e) => up((n) => (n.words[i][1] = e.target.value))} placeholder="🙂" /></>), ["", "🙂"]);
    default:
      return <N label="Instruction"><input className="input" value={c.prompt} onChange={(e) => up((n) => (n.prompt = e.target.value))} /></N>;
  }
}
function EzContentReady(c) {
  switch (c.kind) {
    case "mcq": case "image": case "listen": case "scenario": return c.questions.length && c.questions.every((q) => q.prompt.trim() && q.choices.filter((x) => (typeof x === "string" ? x : x.label || x.image)).length >= 2);
    case "tap": return c.items.filter((x) => x[0].trim()).length >= 2 && c.items.some((x) => x[1] && x[0].trim());
    case "dragsort": return c.items.filter((x) => x[0].trim()).length >= 2;
    case "match": case "connect": return c.pairs.filter((p) => p[0].trim() && p[1].trim()).length >= 2;
    case "sequence": return c.items.filter((x) => x.trim()).length >= 2;
    case "say": return c.words.some((w) => w[0].trim());
    default: return true;
  }
}
function EzCleanContent(c) {
  const n = JSON.parse(JSON.stringify(c));
  if (n.questions) n.questions = n.questions.map((q) => {
    const choices = q.choices.filter((x) => (typeof x === "string" ? x.trim() : x.label || x.image));
    return { ...q, choices, correct: Math.min(q.correct, choices.length - 1), hint: q.hint || undefined, feedbackRight: q.feedbackRight || undefined, feedbackWrong: q.feedbackWrong || undefined, say: q.say || q.prompt };
  });
  if (n.items && typeof n.items[0] !== "string") n.items = n.items.filter((x) => x[0].trim());
  else if (n.items) n.items = n.items.filter((x) => x.trim());
  if (n.pairs) n.pairs = n.pairs.filter((p) => p[0].trim() && p[1].trim());
  if (n.words) n.words = n.words.filter((w) => w[0].trim());
  return n;
}

function EzActivityBuilder() {
  const { db, me, update, toast } = b();
  const nav = H();
  const [step, setStep] = B.useState(0);
  const [kind, setKind] = B.useState("mcq");
  const [d, setD] = B.useState({ title: "", level: "Grade 1", subject: "Maths", topic: "", concept: "", objective: "", tier: "Silver", minutes: 4, art: "⭐", blurb: "" });
  const [content, setContent] = B.useState(EzBlankContent("mcq"));
  const [refl, setRefl] = B.useState({ on: false, prompt: "I found ___ things.", type: "count" });
  const [previewKey, setPreviewKey] = B.useState(0);
  const concepts = EzUniq(db.activities.filter((a) => a.level === d.level).map((a) => a.concept));
  const draft = { id: "draft", ...d, template: kind, status: "draft", content: { ...EzCleanContent(content), ...(refl.on ? { reflection: { prompt: refl.prompt, type: refl.type } } : {}) } };
  const steps = ["1. Type", "2. Details", "3. Content", "4. Preview", "5. Send for review"];
  const okDetails = d.title.trim() && d.concept.trim() && d.objective.trim();
  const okContent = EzContentReady(content);
  return (
    <>
      <W eyebrow="Activity builder" title="Create an interactive activity" sub="Pick a template, add pictures and answers, check it as a child would, then send it for academic review. No developer needed." />
      <div className="steps" style={{ marginBottom: 16 }}>
        {steps.map((s, i) => <button key={s} className={`pill ${i === step ? "primary" : ""}`} disabled={(i >= 2 && !okDetails) || (i >= 3 && !okContent)} onClick={() => setStep(i)}>{s}</button>)}
      </div>
      {step === 0 && (
        <div className="ezkindgrid">
          {EzBuilderKinds.map((k) => (
            <button key={k} className={`card pad ezkind ${k === kind ? "on" : ""}`} onClick={() => { setKind(k); setContent(EzBlankContent(k)); }}>
              <strong>{EzKinds[k].label}</strong>
              <small>{EzKinds[k].type} · PDF {EzKinds[k].pdf}</small>
            </button>
          ))}
          <div style={{ gridColumn: "1 / -1" }}><button className="btn" onClick={() => setStep(1)}>Continue <S n="arrow" /></button></div>
        </div>
      )}
      {step === 1 && (
        <div className="card pad form">
          <div className="grid g2">
            <N label="Title"><input className="input" value={d.title} onChange={(e) => setD({ ...d, title: e.target.value })} placeholder="e.g. Longer or Shorter?" /></N>
            <N label="Card picture" hint="emoji"><input className="input" value={d.art} onChange={(e) => setD({ ...d, art: e.target.value })} /></N>
            <N label="Class"><select className="input" value={d.level} onChange={(e) => setD({ ...d, level: e.target.value })}>{Mt.map((l) => <option key={l}>{l}</option>)}</select></N>
            <N label="Subject"><select className="input" value={d.subject} onChange={(e) => setD({ ...d, subject: e.target.value })}>{Ct.map((l) => <option key={l}>{l}</option>)}</select></N>
            <N label="Topic"><input className="input" value={d.topic} onChange={(e) => setD({ ...d, topic: e.target.value })} placeholder="e.g. Measurement" /></N>
            <N label="Concept" hint="links results to the concept mastery reports"><input className="input" list="ez-concepts" value={d.concept} onChange={(e) => setD({ ...d, concept: e.target.value })} /><datalist id="ez-concepts">{concepts.map((c) => <option key={c} value={c} />)}</datalist></N>
            <N label="Package"><select className="input" value={d.tier} onChange={(e) => setD({ ...d, tier: e.target.value })}>{je.map((t2) => <option key={t2}>{t2}</option>)}</select></N>
            <N label="Minutes"><input className="input" type="number" value={d.minutes} onChange={(e) => setD({ ...d, minutes: Number(e.target.value) })} /></N>
          </div>
          <N label="Learning objective"><input className="input" value={d.objective} onChange={(e) => setD({ ...d, objective: e.target.value })} placeholder="Children will…" /></N>
          <N label="One line for the child"><input className="input" value={d.blurb} onChange={(e) => setD({ ...d, blurb: e.target.value })} placeholder="Which one is longer?" /></N>
          <button className="btn" disabled={!okDetails} onClick={() => setStep(2)}>Continue <S n="arrow" /></button>
        </div>
      )}
      {step === 2 && (
        <div className="stack">
          <EzInfo>Pictures must match the physical EzRoots kit (EzRoots rules document). Use emoji for quick drafts, or upload images.</EzInfo>
          <EzContentEditor c={content} set={setContent} />
          <EzCard eyebrow="Optional" title="Reflection after the activity (§7)">
            <label className="row"><input type="checkbox" checked={refl.on} onChange={(e) => setRefl({ ...refl, on: e.target.checked })} /> Ask the child to look for this in the real world</label>
            {refl.on && (
              <div className="grid g2">
                <N label="Prompt" hint="use ___ for the child’s answer"><input className="input" value={refl.prompt} onChange={(e) => setRefl({ ...refl, prompt: e.target.value })} /></N>
                <N label="Answer type"><select className="input" value={refl.type} onChange={(e) => setRefl({ ...refl, type: e.target.value })}><option value="count">Number 0–10</option><option value="text">A few words</option></select></N>
              </div>
            )}
          </EzCard>
          <button className="btn" style={{ justifySelf: "start" }} disabled={!okContent} onClick={() => setStep(3)}>Preview as a child <S n="arrow" /></button>
          {!okContent && <small>Fill in at least two answers or items to continue.</small>}
        </div>
      )}
      {step === 3 && (
        <div className="stack">
          <div className="row between"><small>This is exactly what the child will see. Results in preview aren’t saved.</small><button className="btn secondary sm" onClick={() => setPreviewKey(previewKey + 1)}>Restart preview</button></div>
          <div className="ezpreview kid">
            <main className="kidmain">
              <EzEngine key={previewKey} act={draft} onStep={() => {}} onDone={(r) => toast(r.score == null ? "Preview finished · creation would be saved" : `Preview finished · score ${r.score}%`)} />
            </main>
          </div>
          <button className="btn" style={{ justifySelf: "start" }} onClick={() => setStep(4)}>Looks good <S n="arrow" /></button>
        </div>
      )}
      {step === 4 && (
        <div className="card pad stack">
          <h2>{d.art} {d.title}</h2>
          <p>{d.level} · {d.subject} · {d.topic || d.concept} · <b>{d.concept}</b> · {EzKinds[kind].label} · {d.tier}+</p>
          <p className="muted">{d.objective}</p>
          <EzInfo>Every activity is reviewed and approved by the EzRoots academic team before any child sees it.</EzInfo>
          <button className="btn" onClick={() => {
            const id = O("act");
            update((x) => {
              x.activities.push({ ...draft, id, status: "review", source: "EzRoots", createdBy: me.name, createdAt: uA, topic: d.topic || d.concept });
              EzAudit(x, me, "sent activity for review", d.title);
              for (const u of x.users.filter((u2) => u2.role === "contentadmin" && u2.id !== me.id)) EzNotify(x, u.id, `${me.name} sent “${d.title}” for review.`, "/ca/activities");
            });
            toast("Sent for academic review");
            nav("/ca/activities");
          }}>Send for review</button>
        </div>
      )}
    </>
  );
}
