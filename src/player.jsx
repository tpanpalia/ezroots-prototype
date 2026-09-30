// v2 child activity player: every activity format in PDF §8, structured result
// capture (§10) and learning events (§39).

function EzSpeak(text) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85;
    u.lang = "en-IN";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch {}
}
function EzShuffle(xs, seed) {
  const r = EzRng(seed);
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function EzFeedback({ fb }) {
  if (!fb) return null;
  return <div className={`notice ${fb.ok ? "good" : ""}`} role="status">{fb.text}</div>;
}
function EzMeter({ i, n }) {
  return (
    <div className="meter" style={{ height: 12 }}>
      <span style={{ width: `${(i / n) * 100}%` }} />
    </div>
  );
}

/* ----- multiple choice / image / listen / scenario ----- */
function EzChoiceGame({ act, onDone, onStep, startAt = 0 }) {
  const qs = act.content.questions;
  const [i, setI] = B.useState(Math.min(startAt, qs.length - 1));
  const [sel, setSel] = B.useState(null);
  const [fb, setFb] = B.useState(null);
  const [wrong, setWrong] = B.useState(0);
  const st = B.useRef({ points: 0, correct: 0, incorrect: 0, skipped: 0, tries: 0, hints: 0, responses: [] });
  const q = qs[i];
  const listen = act.content.kind === "listen";
  B.useEffect(() => {
    if (listen && q.say) EzSpeak(q.say);
  }, [i]);
  const next = () => {
    setSel(null);
    setFb(null);
    setWrong(0);
    if (i + 1 >= qs.length) {
      const s = st.current;
      onDone({ score: Math.round((s.points / qs.length) * 100), ...s, n: qs.length });
    } else {
      onStep(i + 1, qs.length);
      setI(i + 1);
    }
  };
  const check = () => {
    const ok = sel === q.correct;
    st.current.tries++;
    onStep(i, qs.length, { type: "question_answered", q: i, ok });
    if (ok) {
      st.current.points += wrong ? 0.5 : 1;
      st.current.correct++;
      st.current.responses.push({ q: i, answer: sel, ok: true, tries: wrong + 1 });
      setFb({ ok: true, text: q.feedbackRight ?? "Yes! That’s it! 🎉" });
    } else {
      setWrong(wrong + 1);
      st.current.incorrect++;
      setFb({ ok: false, text: q.feedbackWrong ?? "Good try! Look again. 💜" });
    }
  };
  const done = fb?.ok;
  return (
    <div className="game">
      <EzMeter i={i} n={qs.length} />
      <h1>{q.prompt}</h1>
      {q.show && <div className="ezbig">{q.show}</div>}
      {q.image && <img className="ezqimg" src={q.image} alt="" />}
      {listen && (
        <button className="btn secondary lg" style={{ justifySelf: "center" }} onClick={() => EzSpeak(q.say ?? q.prompt)}>
          🔊 Listen again
        </button>
      )}
      <div className="answers">
        {q.choices.map((c, k) => {
          const label = typeof c === "string" ? c : c.label;
          const img = typeof c === "string" ? null : c.image;
          return (
            <button key={k} disabled={done} className={`txt ${sel === k ? (fb ? (fb.ok ? "right" : "wrong") : "sel") : ""}`} onClick={() => { setSel(k); setFb(null); }}>
              {img && <img src={img} alt="" className="ezchoiceimg" />}
              {label}
            </button>
          );
        })}
      </div>
      <EzFeedback fb={fb} />
      <div className="row" style={{ justifyContent: "center" }}>
        {!done && q.hint && (
          <button className="btn ghost" onClick={() => { st.current.hints++; onStep(i, qs.length, { type: "hint_used", q: i }); setFb({ ok: false, text: `💡 ${q.hint}` }); }}>
            💡 Hint
          </button>
        )}
        {!done && (
          <button className="btn ghost" onClick={() => { st.current.skipped++; st.current.responses.push({ q: i, skipped: true }); onStep(i, qs.length, { type: "question_skipped", q: i }); next(); }}>
            Skip
          </button>
        )}
        {done ? (
          <button className="btn lg" onClick={next}>{i + 1 >= qs.length ? "Finish ✨" : "Next →"}</button>
        ) : (
          <button className="btn lg" disabled={sel == null} onClick={check}>Check</button>
        )}
      </div>
    </div>
  );
}

/* ----- tap & identify (multi-select) ----- */
function EzTapGame({ act, onDone, onStep }) {
  const items = act.content.items;
  const [on, setOn] = B.useState(new Set());
  const [fb, setFb] = B.useState(null);
  const tries = B.useRef(0);
  const nOk = items.filter((x) => x[1]).length;
  const check = () => {
    tries.current++;
    const hits = [...on].filter((k) => items[k][1]).length;
    const miss = [...on].filter((k) => !items[k][1]).length;
    onStep(1, 1, { type: "question_answered", q: 0, ok: hits === nOk && !miss });
    if (hits === nOk && !miss) {
      const score = Math.round(tries.current === 1 ? 100 : Math.max(50, 100 - (tries.current - 1) * 20));
      setFb({ ok: true, text: "You found them all! 🎉" });
      setTimeout(() => onDone({ score, correct: hits, incorrect: tries.current - 1, skipped: 0, tries: tries.current, hints: 0, n: nOk }), 900);
    } else setFb({ ok: false, text: miss ? "Some of those don’t fit. Look again. 💜" : `You found ${hits} of ${nOk}. Keep looking! 💜` });
  };
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <div className="answers">
        {items.map((it, k) => (
          <button key={k} className={`txt ${on.has(k) ? "sel" : ""}`} onClick={() => { const s = new Set(on); s.has(k) ? s.delete(k) : s.add(k); setOn(s); setFb(null); }}>
            {it[0]}
          </button>
        ))}
      </div>
      <EzFeedback fb={fb} />
      <button className="btn lg" style={{ justifySelf: "center" }} disabled={!on.size || fb?.ok} onClick={check}>Check</button>
    </div>
  );
}

/* ----- drag & drop into groups (also works by tapping) ----- */
function EzSortGame({ act, onDone, onStep }) {
  const { groups, items } = act.content;
  const [place, setPlace] = B.useState({});
  const [pick, setPick] = B.useState(null);
  const [fb, setFb] = B.useState(null);
  const tries = B.useRef(0);
  const put = (k, g) => { setPlace({ ...place, [k]: g }); setPick(null); setFb(null); };
  const left = items.map((_, k) => k).filter((k) => place[k] == null);
  const check = () => {
    tries.current++;
    const ok = items.filter((it, k) => place[k] === it[1]).length;
    onStep(1, 1, { type: "question_answered", q: 0, ok: ok === items.length });
    if (ok === items.length) {
      setFb({ ok: true, text: "All sorted! 🎉" });
      const score = tries.current === 1 ? 100 : Math.round(Math.max(40, 100 - (tries.current - 1) * 15));
      setTimeout(() => onDone({ score, correct: ok, incorrect: tries.current - 1, skipped: 0, tries: tries.current, hints: 0, n: items.length }), 900);
    } else {
      setFb({ ok: false, text: `${ok} of ${items.length} are right. The wrong ones jumped back. 💜` });
      const np = {};
      items.forEach((it, k) => place[k] === it[1] && (np[k] = place[k]));
      setPlace(np);
    }
  };
  return (
    <div className="game">
      <h1>{act.blurb}</h1>
      <div className="draggables">
        {left.map((k) => (
          <button key={k} draggable className={`ezchip ${pick === k ? "sel" : ""}`} onDragStart={(e) => e.dataTransfer.setData("text", String(k))} onClick={() => setPick(k)}>
            {items[k][0]}
          </button>
        ))}
        {!left.length && <small>Everything is placed. Press Check!</small>}
      </div>
      <div className="grid g2">
        {groups.map((g, gi) => (
          <div key={g} className="ezbin" onDragOver={(e) => e.preventDefault()} onDrop={(e) => put(Number(e.dataTransfer.getData("text")), gi)} onClick={() => pick != null && put(pick, gi)}>
            <strong>{g}</strong>
            <div className="row wrap">
              {items.map((it, k) => place[k] === gi && (
                <span key={k} className="ezchip" onClick={(e) => { e.stopPropagation(); const np = { ...place }; delete np[k]; setPlace(np); }}>{it[0]}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <small className="muted">Drag them, or tap one and then tap a box.</small>
      <EzFeedback fb={fb} />
      <button className="btn lg" style={{ justifySelf: "center" }} disabled={left.length > 0 || fb?.ok} onClick={check}>Check</button>
    </div>
  );
}

/* ----- match / connect ----- */
function EzMatchGame({ act, onDone, onStep }) {
  const pairs = act.content.pairs;
  const right = B.useMemo(() => EzShuffle(pairs.map((p, k) => k), act.id), [act.id]);
  const [l, setL] = B.useState(null);
  const [done, setDone] = B.useState({});
  const [fb, setFb] = B.useState(null);
  const st = B.useRef({ tries: 0, wrong: 0 });
  const box = B.useRef(null);
  const [lines, setLines] = B.useState([]);
  const connect = act.content.kind === "connect";
  const tapRight = (k) => {
    if (l == null) return setFb({ ok: false, text: "Tap one on the left first. 👈" });
    st.current.tries++;
    if (l === k) {
      const nd = { ...done, [k]: true };
      setDone(nd);
      setFb({ ok: true, text: "A match! 🎉" });
      onStep(Object.keys(nd).length, pairs.length, { type: "question_answered", q: k, ok: true });
      if (Object.keys(nd).length === pairs.length) {
        const score = Math.round((pairs.length / (pairs.length + st.current.wrong)) * 100);
        setTimeout(() => onDone({ score, correct: pairs.length, incorrect: st.current.wrong, skipped: 0, tries: st.current.tries, hints: 0, n: pairs.length }), 900);
      }
    } else {
      st.current.wrong++;
      onStep(Object.keys(done).length, pairs.length, { type: "question_answered", q: l, ok: false });
      setFb({ ok: false, text: "Not quite. Try another one. 💜" });
    }
    setL(null);
  };
  B.useLayoutEffect(() => {
    if (!connect || !box.current) return;
    const bb = box.current.getBoundingClientRect();
    const ls = Object.keys(done).map((k) => {
      const a = box.current.querySelector(`[data-l="${k}"]`)?.getBoundingClientRect();
      const c = box.current.querySelector(`[data-r="${k}"]`)?.getBoundingClientRect();
      return a && c ? [a.right - bb.left, a.top + a.height / 2 - bb.top, c.left - bb.left, c.top + c.height / 2 - bb.top] : null;
    }).filter(Boolean);
    setLines(ls);
  }, [done]);
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <div className="ezmatch" ref={box}>
        {connect && (
          <svg className="ezlines">
            {lines.map((p, k) => <line key={k} x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} />)}
          </svg>
        )}
        <div className="stack">
          {pairs.map((p, k) => (
            <button key={k} data-l={k} disabled={done[k]} className={`ezchip big ${l === k ? "sel" : ""} ${done[k] ? "ok" : ""}`} onClick={() => { setL(k); setFb(null); }}>{p[0]}</button>
          ))}
        </div>
        <div className="stack">
          {right.map((k) => (
            <button key={k} data-r={k} disabled={done[k]} className={`ezchip big ${done[k] ? "ok" : ""}`} onClick={() => tapRight(k)}>{pairs[k][1]}</button>
          ))}
        </div>
      </div>
      <EzFeedback fb={fb} />
    </div>
  );
}

/* ----- sequence ----- */
function EzSequenceGame({ act, onDone, onStep }) {
  const items = act.content.items;
  const shuffled = B.useMemo(() => EzShuffle(items.map((_, k) => k), act.id + "s"), [act.id]);
  const [order, setOrder] = B.useState([]);
  const [fb, setFb] = B.useState(null);
  const tries = B.useRef(0);
  const check = () => {
    tries.current++;
    const ok = order.filter((k, pos) => k === pos).length;
    onStep(1, 1, { type: "question_answered", q: 0, ok: ok === items.length });
    if (ok === items.length) {
      setFb({ ok: true, text: "Perfect order! 🎉" });
      setTimeout(() => onDone({ score: tries.current === 1 ? 100 : Math.max(40, 100 - (tries.current - 1) * 20), correct: ok, incorrect: tries.current - 1, skipped: 0, tries: tries.current, hints: 0, n: items.length }), 900);
    } else {
      setFb({ ok: false, text: `${ok} in the right place. Try again! 💜` });
      setOrder([]);
    }
  };
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <div className="ezslots">
        {items.map((_, pos) => (
          <span key={pos} className="ezslot">
            <small>{pos + 1}</small>
            {order[pos] != null ? items[order[pos]] : ""}
          </span>
        ))}
      </div>
      <div className="answers">
        {shuffled.map((k) => (
          <button key={k} className="txt" disabled={order.includes(k)} onClick={() => { setOrder([...order, k]); setFb(null); }}>{items[k]}</button>
        ))}
      </div>
      <EzFeedback fb={fb} />
      <div className="row" style={{ justifyContent: "center" }}>
        <button className="btn ghost" onClick={() => setOrder([])}>Start again</button>
        <button className="btn lg" disabled={order.length < items.length || fb?.ok} onClick={check}>Check</button>
      </div>
    </div>
  );
}

/* ----- canvas helpers: tracing and drawing ----- */
function EzCanvas({ glyph, onChange, colors }) {
  const ref = B.useRef(null);
  const drawing = B.useRef(false);
  const [color, setColor] = B.useState(colors?.[0] ?? "#6550a1");
  B.useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    if (glyph) {
      ctx.fillStyle = "#e6e0f3";
      ctx.font = "bold 300px Manrope, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(glyph, c.width / 2, c.height / 2 + 10);
    }
  }, [glyph]);
  const pos = (e) => {
    const r = ref.current.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return [((p.clientX - r.left) / r.width) * ref.current.width, ((p.clientY - r.top) / r.height) * ref.current.height];
  };
  const down = (e) => { drawing.current = true; const ctx = ref.current.getContext("2d"); ctx.beginPath(); ctx.moveTo(...pos(e)); };
  const move = (e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const ctx = ref.current.getContext("2d");
    ctx.lineWidth = glyph ? 26 : 8;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineTo(...pos(e));
    ctx.stroke();
  };
  const up = () => { if (drawing.current) { drawing.current = false; onChange?.(ref.current); } };
  return (
    <div className="stack" style={{ justifyItems: "center" }}>
      {colors && (
        <div className="row">
          {colors.map((c) => <button key={c} aria-label={`Colour ${c}`} className={`ezswatch ${c === color ? "on" : ""}`} style={{ background: c }} onClick={() => setColor(c)} />)}
        </div>
      )}
      <canvas ref={ref} width="420" height="320" className="ezcanvas" onMouseDown={down} onMouseMove={move} onMouseUp={up} onMouseLeave={up} onTouchStart={down} onTouchMove={move} onTouchEnd={up} />
    </div>
  );
}
function EzCoverage(canvas) {
  // share of the faint glyph pixels that the child has painted over
  const ctx = canvas.getContext("2d");
  const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let glyph = 0;
  let painted = 0;
  for (let i = 0; i < d.length; i += 16) {
    const [r, g, bb] = [d[i], d[i + 1], d[i + 2]];
    const isFaint = r === 230 && g === 224 && bb === 243;
    const isInk = !(r > 240 && g > 240 && bb > 240) && !isFaint;
    if (isFaint) glyph++;
    if (isInk) painted++;
  }
  return painted / Math.max(1, painted + glyph);
}
function EzTraceGame({ act, onDone }) {
  const [cov, setCov] = B.useState(0);
  const tries = B.useRef(0);
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <EzCanvas glyph={act.content.glyph} onChange={(c) => { tries.current++; setCov(EzCoverage(c)); }} />
      <TA v={cov * 100} tone="good" />
      <small className="muted">{cov < 0.55 ? "Keep tracing over the grey letter." : "Lovely tracing! You can finish now."}</small>
      <button className="btn lg" style={{ justifySelf: "center" }} disabled={cov < 0.55} onClick={() => onDone({ score: Math.round(EzClamp(cov * 110, 60, 100)), correct: 1, incorrect: 0, skipped: 0, tries: tries.current, hints: 0, n: 1 })}>Finish ✨</button>
    </div>
  );
}
function EzShrink(canvas, max = 360) {
  const s = Math.min(1, max / canvas.width);
  const c = document.createElement("canvas");
  c.width = canvas.width * s;
  c.height = canvas.height * s;
  c.getContext("2d").drawImage(canvas, 0, 0, c.width, c.height);
  return c.toDataURL("image/jpeg", 0.7);
}
function EzDrawGame({ act, onDone }) {
  const cv = B.useRef(null);
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <EzCanvas colors={["#6550a1", "#d46692", "#edbd50", "#3f8bac", "#43866f", "#292d3c"]} onChange={(c) => (cv.current = c)} />
      <button className="btn lg good" style={{ justifySelf: "center" }} disabled={false} onClick={() => onDone({ score: null, correct: 0, incorrect: 0, skipped: 0, tries: 1, hints: 0, n: 0, creation: { kind: "Drawing", title: act.content.prompt, image: cv.current ? EzShrink(cv.current) : null } })}>
        💾 Save to My Creations
      </button>
    </div>
  );
}
function EzWriteGame({ act, onDone }) {
  const [txt, setTxt] = B.useState("");
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <textarea className="input ezwrite" value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="Write here. A grown-up can help you type." />
      <button className="btn lg good" style={{ justifySelf: "center" }} disabled={txt.trim().length < 3} onClick={() => onDone({ score: null, correct: 0, incorrect: 0, skipped: 0, tries: 1, hints: 0, n: 0, creation: { kind: "Writing", title: act.title, text: txt.trim() } })}>
        💾 Save my writing
      </button>
    </div>
  );
}

/* ----- puzzle: swap tiles to rebuild a picture ----- */
const EzPuzzleImg = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#eaf4f8"/><circle cx="245" cy="55" r="32" fill="#edbd50"/><path d="M40 150 150 60l110 90Z" fill="#d46692"/><rect x="70" y="150" width="160" height="120" fill="#f4a261"/><rect x="130" y="200" width="40" height="70" fill="#6550a1"/><rect x="88" y="170" width="30" height="30" fill="#fff"/><rect x="182" y="170" width="30" height="30" fill="#fff"/><rect y="270" width="300" height="30" fill="#43866f"/></svg>');
function EzPuzzleGame({ act, onDone }) {
  const [tiles, setTiles] = B.useState(() => EzShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8], act.id + "p"));
  const [pick, setPick] = B.useState(null);
  const swaps = B.useRef(0);
  const solved = tiles.every((t2, k) => t2 === k);
  B.useEffect(() => {
    if (solved && swaps.current) setTimeout(() => onDone({ score: Math.round(EzClamp(100 - Math.max(0, swaps.current - 8) * 5, 50, 100)), correct: 9, incorrect: Math.max(0, swaps.current - 8), skipped: 0, tries: swaps.current, hints: 0, n: 9 }), 900);
  }, [solved]);
  const tap = (k) => {
    if (pick == null) return setPick(k);
    const nt = [...tiles];
    [nt[pick], nt[k]] = [nt[k], nt[pick]];
    swaps.current++;
    setTiles(nt);
    setPick(null);
  };
  return (
    <div className="game">
      <h1>{act.content.prompt}</h1>
      <div className="ezpuzzle">
        {tiles.map((t2, k) => (
          <button key={k} aria-label={`Piece ${t2 + 1}`} className={`${pick === k ? "sel" : ""} ${t2 === k ? "ok" : ""}`} onClick={() => tap(k)}
            style={{ backgroundImage: `url("${EzPuzzleImg}")`, backgroundPosition: `${(t2 % 3) * 50}% ${Math.floor(t2 / 3) * 50}%` }} />
        ))}
      </div>
      {solved ? <div className="notice good">You fixed the picture! 🎉</div> : <small className="muted">Tap one piece, then another, to swap them.</small>}
    </div>
  );
}

/* ----- virtual manipulative: ten frame ----- */
function EzManipGame({ act, onDone, onStep }) {
  const targets = act.content.targets;
  const [i, setI] = B.useState(0);
  const [cells, setCells] = B.useState(Array(10).fill(false));
  const [fb, setFb] = B.useState(null);
  const st = B.useRef({ correct: 0, incorrect: 0, tries: 0 });
  const count = cells.filter(Boolean).length;
  const check = () => {
    st.current.tries++;
    const ok = count === targets[i];
    onStep(i, targets.length, { type: "question_answered", q: i, ok });
    if (!ok) { st.current.incorrect++; return setFb({ ok: false, text: `You put ${count}. We need ${targets[i]}. 💜` }); }
    st.current.correct++;
    setFb({ ok: true, text: `Yes! ${targets[i]} counters! 🎉` });
    setTimeout(() => {
      if (i + 1 >= targets.length) onDone({ score: Math.round((targets.length / (targets.length + st.current.incorrect)) * 100), ...st.current, skipped: 0, hints: 0, n: targets.length });
      else { setI(i + 1); setCells(Array(10).fill(false)); setFb(null); }
    }, 800);
  };
  return (
    <div className="game">
      <EzMeter i={i} n={targets.length} />
      <h1>Put {targets[i]} {targets[i] === 1 ? "counter" : "counters"} in the frame</h1>
      <div className="eztenframe">
        {cells.map((c, k) => (
          <button key={k} aria-label={c ? "Remove counter" : "Add counter"} onClick={() => { const n = [...cells]; n[k] = !n[k]; setCells(n); setFb(null); }}>{c ? "🔴" : ""}</button>
        ))}
      </div>
      <strong style={{ fontSize: 22 }}>{count}</strong>
      <EzFeedback fb={fb} />
      <button className="btn lg" style={{ justifySelf: "center" }} disabled={fb?.ok} onClick={check}>Check</button>
    </div>
  );
}

/* ----- say it: pronunciation (AI preview, §56) ----- */
function EzSayGame({ act, onDone }) {
  const words = act.content.words;
  const [i, setI] = B.useState(0);
  const [msg, setMsg] = B.useState(null);
  const res = B.useRef([]);
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [w, emoji] = words[i];
  const next = (ok) => {
    res.current.push(ok);
    setMsg(null);
    if (i + 1 >= words.length) {
      const scored = res.current.filter((x) => x != null);
      onDone({ score: scored.length ? Math.round((scored.filter(Boolean).length / scored.length) * 100) : null, correct: scored.filter(Boolean).length, incorrect: scored.filter((x) => x === false).length, skipped: 0, tries: words.length, hints: 0, n: words.length });
    } else setI(i + 1);
  };
  const listen = () => {
    if (!Rec) return setMsg({ ok: false, text: "This device can’t listen. Say it to a grown-up, then tap “I said it”." });
    const r = new Rec();
    r.lang = "en-IN";
    r.onresult = (e) => {
      const heard = e.results[0][0].transcript.toLowerCase();
      const ok = heard.includes(w);
      setMsg({ ok, text: ok ? `I heard “${heard}”. Great speaking! 🎉` : `I heard “${heard}”. Listen and try once more. 💜` });
      if (ok) setTimeout(() => next(true), 1200);
    };
    r.onerror = () => setMsg({ ok: false, text: "I couldn’t hear you. Try again, a little louder." });
    r.start();
    setMsg({ ok: true, text: "🎤 Listening…" });
  };
  return (
    <div className="game">
      <EzMeter i={i} n={words.length} />
      <div style={{ fontSize: 90 }}>{emoji}</div>
      <h1>Say: “{w}”</h1>
      <div className="row" style={{ justifyContent: "center" }}>
        <button className="btn secondary lg" onClick={() => EzSpeak(w)}>🔊 Hear it</button>
        <button className="btn lg" onClick={listen}>🎤 Say it</button>
        <button className="btn ghost" onClick={() => next(null)}>I said it ✓</button>
      </div>
      <EzFeedback fb={msg} />
      <small className="muted">AI preview: speech is checked on this device only and no recording is stored.</small>
    </div>
  );
}

/* ----- which component renders which activity ----- */
function EzEngine({ act, onDone, onStep, startAt }) {
  const k = EzKindOf(act);
  const legacyDone = (score, tries, hints) => {
    const n = 3;
    const correct = Math.round((score / 100) * n);
    onDone({ score, tries, hints, correct, incorrect: Math.max(0, tries - correct), skipped: 0, n });
  };
  if (!act.content) {
    if (k === "pattern" || k === "count") return <EzLegacyChoice qs={Lo[act.id] ?? Lo["act-count-123"]} big={k === "pattern"} onDone={legacyDone} />;
    if (k === "sort") return <EzLegacySort cfg={Po[act.id] ?? Po["act-thick-thin"]} onDone={legacyDone} />;
    if (k === "balance") return <EzLegacyBalance onDone={legacyDone} />;
    if (k === "sound") return <EzLegacySound onDone={legacyDone} />;
    return <EzLegacyDone act={act} onDone={() => legacyDone(100, 1, 0)} />;
  }
  const P = { act, onDone, onStep, startAt };
  switch (k) {
    case "mcq": case "image": case "listen": case "scenario": return <EzChoiceGame {...P} />;
    case "tap": return <EzTapGame {...P} />;
    case "dragsort": case "sort": return <EzSortGame {...P} />;
    case "match": case "connect": return <EzMatchGame {...P} />;
    case "sequence": return <EzSequenceGame {...P} />;
    case "trace": return <EzTraceGame {...P} />;
    case "draw": return <EzDrawGame {...P} />;
    case "write": return <EzWriteGame {...P} />;
    case "puzzle": return <EzPuzzleGame {...P} />;
    case "manip": return <EzManipGame {...P} />;
    case "say": return <EzSayGame {...P} />;
    default: return <EzLegacyDone act={act} onDone={() => legacyDone(100, 1, 0)} />;
  }
}

/* ----- badges (§34, §35): linked to learning behaviour, never ranking ----- */
const EzBadges = [
  ["Number Explorer", "🔢", "Finish 2 number activities", (xs) => xs.filter((x) => /Number/.test(x.concept)).length >= 2],
  ["Shape Detective", "🔍", "Finish a shapes or lines activity", (xs) => xs.some((x) => ["Shapes", "Lines"].includes(x.concept))],
  ["Pattern Builder", "🧱", "Finish a pattern activity", (xs) => xs.some((x) => x.concept === "Patterns")],
  ["Puzzle Solver", "🧩", "Solve a puzzle", (xs) => xs.some((x) => x.kind === "puzzle")],
  ["Sorting Star", "⭐", "Sort things into groups", (xs) => xs.some((x) => ["sort", "dragsort"].includes(x.kind))],
  ["Sound Detective", "👂", "Finish a phonics activity", (xs) => xs.some((x) => /Phonics/.test(x.concept))],
  ["Little Scientist", "🔬", "Finish 2 science activities", (xs) => xs.filter((x) => x.subject === "Science").length >= 2],
  ["Creative Artist", "🎨", "Save a drawing or story", (xs) => xs.some((x) => ["draw", "write"].includes(x.kind))],
  ["Curious Explorer", "🌱", "Finish 5 activities", (xs) => xs.length >= 5],
];
function EzEarned(db, studentId) {
  const xs = db.attempts.filter((a) => a.studentId === studentId).map((a) => {
    const act = EzAct(db, a.activityId) ?? {};
    return { concept: act.concept ?? "", subject: act.subject, kind: EzKindOf(act) };
  });
  return EzBadges.filter((bd) => bd[3](xs)).map((bd) => bd[0]);
}

/* ----- the play screen ----- */
function EzPlay() {
  const { id } = on();
  const { db, update, me } = b();
  const nav = H();
  const [sp] = QE();
  const kid = db.students.find((s) => s.id === me?.childId);
  const assignment = db.assignments.find((a) => a.id === id);
  const act = EzAct(db, assignment?.activityId ?? sp.get("activity"));
  const selfPractice = !assignment;
  const key = assignment?.id ?? `self-${act?.id}`;
  const resume = db.inProgress?.find((p) => p.studentId === kid?.id && (p.assignmentId === key));
  const started = B.useRef(Date.now());
  const finished = B.useRef(false);
  const lastStep = B.useRef({ q: resume?.qIndex ?? 0, n: 1 });
  const [result, setResult] = B.useState(null);
  const [reflection, setReflection] = B.useState(null);
  const { minutesToday, limit } = Wi();
  const already = db.attempts.some((a) => a.studentId === kid?.id && a.assignmentId === assignment?.id);

  B.useEffect(() => {
    if (!act || !kid) return;
    update((d) => EzEvent(d, me, "activity_started", { activityId: act.id, assignmentId: assignment?.id, studentId: kid.id }));
    return () => {
      if (finished.current) return;
      update((d) => {
        EzEvent(d, me, "activity_paused", { activityId: act.id, studentId: kid.id, q: lastStep.current.q });
        d.inProgress = (d.inProgress ?? []).filter((p) => !(p.studentId === kid.id && p.assignmentId === key));
        d.inProgress.push({ id: O("ip"), studentId: kid.id, assignmentId: key, activityId: act.id, qIndex: lastStep.current.q, completion: Math.round((lastStep.current.q / Math.max(1, lastStep.current.n)) * 100), startedAt: new Date(started.current).toISOString(), pausedAt: EzNowISO() });
      });
    };
  }, []);

  if (!act || !kid)
    return (
      <div className="kidcard">
        <h2>Activity not found</h2>
        <K to="/student" className="btn">Back</K>
      </div>
    );
  if (minutesToday >= limit && !already && !result)
    return (
      <div className="game">
        <div style={{ fontSize: 70 }}>🌙</div>
        <h1>Time for a break!</h1>
        <p style={{ fontSize: 20 }}>You’ve used up today’s screen time. This activity will be here tomorrow.</p>
        <button className="btn lg" style={{ justifySelf: "center" }} onClick={() => nav("/student")}>Back to today</button>
      </div>
    );

  const onStep = (q, n, ev) => {
    lastStep.current = { q, n };
    if (ev) update((d) => EzEvent(d, me, ev.type, { activityId: act.id, studentId: kid.id, q: ev.q, ok: ev.ok }));
  };
  const onDone = (r) => {
    finished.current = true;
    const cfg = EzMasteryCfg(db);
    const before = EzEarned(db, kid.id);
    update((d) => {
      const prev = d.attempts.filter((a) => a.studentId === kid.id && a.activityId === act.id).length;
      const n = r.n || 1;
      const att = {
        id: O("at"), studentId: kid.id, activityId: act.id, assignmentId: assignment?.id ?? null,
        score: r.score, level: r.score == null ? null : r.score >= cfg.strong ? "Strong" : r.score >= cfg.developing ? "Developing" : "Needs support",
        timeSec: Math.max(20, Math.round((Date.now() - started.current) / 1000)), tries: r.tries ?? 1, hints: r.hints ?? 0,
        date: uA, startedAt: new Date(started.current).toISOString(), completedAt: EzNowISO(),
        correct: r.correct ?? 0, incorrect: r.incorrect ?? 0, skipped: r.skipped ?? 0, retries: prev,
        completion: r.n ? Math.round(((n - (r.skipped ?? 0)) / n) * 100) : 100, responses: r.responses, type: EzTypeOf(act), selfPractice,
      };
      d.attempts.push(att);
      d.inProgress = (d.inProgress ?? []).filter((p) => !(p.studentId === kid.id && p.assignmentId === key));
      EzEvent(d, me, "activity_completed", { activityId: act.id, studentId: kid.id, score: r.score });
      if (r.creation) d.portfolio.unshift({ id: O("pf"), studentId: kid.id, date: uA, by: EzFirst(kid.name), ...r.creation });
      if (assignment) EzNotify(d, assignment.createdBy, `${kid.name} finished “${act.title}”.`, `/teacher/students/${kid.id}`);
      const after = EzEarned(d, kid.id);
      for (const nb of after.filter((x) => !before.includes(x))) {
        d.portfolio.unshift({ id: O("pf"), studentId: kid.id, kind: "Achievement", title: `${nb} badge`, text: EzBadges.find((x) => x[0] === nb)[2], date: uA, by: "EzRoots" });
        for (const p of EzParentsOf(d, kid.id)) EzNotify(d, p.id, `${EzFirst(kid.name)} earned the “${nb}” badge. 🎉`, "/parent/portfolio");
      }
    });
    setResult({ ...r, newBadges: EzEarned({ ...db, attempts: [...db.attempts, { studentId: kid.id, activityId: act.id }] }, kid.id).filter((x) => !before.includes(x)) });
  };

  if (result && act.content?.reflection && reflection == null)
    return <EzReflect act={act} onSave={(val) => {
      setReflection(val);
      update((d) => {
        const a = [...d.attempts].reverse().find((x) => x.studentId === kid.id && x.activityId === act.id);
        if (a) a.reflection = val;
        d.portfolio.unshift({ id: O("pf"), studentId: kid.id, kind: "Reflection", title: act.title, text: act.content.reflection.prompt.replace("___", String(val)), date: uA, by: EzFirst(kid.name) });
      });
    }} />;

  if (result)
    return (
      <div className="game">
        <div style={{ fontSize: 80 }}>🌟</div>
        <h1>Well done, {EzFirst(kid.name)}!</h1>
        <p style={{ fontSize: 20 }}>You finished <b>{act.title}</b>. Every try helps you learn.</p>
        <div className="row" style={{ justifyContent: "center" }}>
          <span className="pill good">⭐ Star earned</span>
          {result.creation && <span className="pill primary">🎨 Saved to My Creations</span>}
          {(result.newBadges ?? []).map((nb) => <span key={nb} className="pill pink">🏅 New badge: {nb}</span>)}
        </div>
        <p className="muted" style={{ fontSize: 17 }}>Now look around you: can you find something like this at home?</p>
        <div className="row" style={{ justifyContent: "center" }}>
          <button className="btn lg" onClick={() => nav("/student")}>Back to today</button>
          <button className="btn lg secondary" onClick={() => nav("/student/progress")}>My progress</button>
        </div>
      </div>
    );

  return (
    <div className="stack" style={{ gap: 18 }}>
      <div className="row between">
        <K to="/student" className="btn secondary">← Back</K>
        <span className="row">
          {resume && <span className="pill blue">Continuing</span>}
          {selfPractice && <span className="pill">Practice</span>}
          <span className="pill primary">{act.title}</span>
        </span>
      </div>
      <EzEngine act={act} onDone={onDone} onStep={onStep} startAt={resume?.qIndex ?? 0} />
    </div>
  );
}
function EzReflect({ act, onSave }) {
  const r = act.content.reflection;
  const [val, setVal] = B.useState(r.type === "count" ? null : "");
  return (
    <div className="game">
      <div style={{ fontSize: 60 }}>🔎</div>
      <h1>Your turn to look around!</h1>
      <p style={{ fontSize: 20 }}>{r.prompt.replace("___", val == null || val === "" ? "___" : String(val))}</p>
      {r.type === "count" ? (
        <div className="answers">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <button key={n} className={`txt ${val === n ? "sel" : ""}`} onClick={() => setVal(n)}>{n}</button>)}
        </div>
      ) : (
        <input className="input" value={val} onChange={(e) => setVal(e.target.value)} />
      )}
      <button className="btn lg good" style={{ justifySelf: "center" }} disabled={val == null || val === ""} onClick={() => onSave(val)}>Save ✨</button>
    </div>
  );
}
