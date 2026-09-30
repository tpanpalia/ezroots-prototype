// v2 shared visual components (§48): progress bars, trend lines, distributions,
// concept mastery maps, effectiveness quadrant.

function EzLine({ points, height = 150, suffix = "%", max = 100, label }) {
  const w = 520;
  const h = height;
  const pad = 28;
  if (!points.length) return <small>No data yet.</small>;
  const xs = (i) => pad + (points.length === 1 ? (w - 2 * pad) / 2 : (i * (w - 2 * pad)) / (points.length - 1));
  const ys = (v) => h - pad - ((v ?? 0) / max) * (h - 2 * pad);
  const d = points.map((p, i) => `${i ? "L" : "M"}${xs(i)},${ys(p.v)}`).join(" ");
  return (
    <svg className="ezchart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label ?? points.map((p) => `${p.label} ${p.v}${suffix}`).join(", ")}>
      {[0, 0.5, 1].map((f) => (
        <line key={f} x1={pad} x2={w - pad} y1={ys(max * f)} y2={ys(max * f)} className="grid" />
      ))}
      <path d={d} className="line" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={xs(i)} cy={ys(p.v)} r="4.5" className="pt" />
          <text x={xs(i)} y={ys(p.v) - 10} textAnchor="middle" className="val">
            {p.v == null ? "" : `${Math.round(p.v)}${suffix}`}
          </text>
          <text x={xs(i)} y={h - 8} textAnchor="middle" className="lab">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
function EzBars({ items, suffix = "", max, height = 150, tone }) {
  const w = 520;
  const h = height;
  const pad = 22;
  const m = max ?? Math.max(1, ...items.map((i) => i.v ?? 0));
  const bw = (w - 2 * pad) / Math.max(1, items.length);
  return (
    <svg className="ezchart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={items.map((i) => `${i.label} ${i.v}${suffix}`).join(", ")}>
      <line x1={pad} x2={w - pad} y1={h - pad} y2={h - pad} className="grid" />
      {items.map((it, i) => {
        const bh = ((it.v ?? 0) / m) * (h - 2 * pad - 12);
        return (
          <g key={i}>
            <rect x={pad + i * bw + bw * 0.18} y={h - pad - bh} width={bw * 0.64} height={Math.max(1, bh)} rx="4" className={`bar ${it.tone ?? tone ?? ""}`} />
            <text x={pad + i * bw + bw / 2} y={h - pad - bh - 5} textAnchor="middle" className="val">
              {it.text ?? `${Math.round(it.v ?? 0)}${suffix}`}
            </text>
            <text x={pad + i * bw + bw / 2} y={h - 6} textAnchor="middle" className="lab">
              {it.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
function EzProgress({ label, pct, level, sub }) {
  return (
    <div className="ezprog">
      <div className="row between">
        <strong>{label}</strong>
        <span className="row" style={{ gap: 6 }}>
          {pct != null && <b>{Math.round(pct)}%</b>}
          {level && <EzLevelPill level={level} />}
        </span>
      </div>
      <TA v={pct ?? 0} tone={EzLevelTone(level) || "good"} />
      {sub && <small>{sub}</small>}
    </div>
  );
}
/* Concept mastery map: one tile per concept, coloured by indicator. */
function EzMasteryMap({ rows, onPick }) {
  if (!rows.length) return <small>No activity results yet.</small>;
  return (
    <div className="ezmap">
      {rows.map((r) => (
        <button key={r.concept} className={`ezmaptile ${EzLevelTone(r.level)}`} onClick={() => onPick?.(r.concept)}>
          <strong>{r.concept}</strong>
          <span>{r.pct == null ? "—" : `${r.pct}%`}</span>
          <small>{r.level}</small>
        </button>
      ))}
    </div>
  );
}
function EzMethod() {
  const { db } = b();
  const c = EzMasteryCfg(db);
  return (
    <details className="ezmethod">
      <summary>How is this calculated?</summary>
      <p>
        <b>Understanding %</b> = average score of the child’s activity results on the concept in the last {c.recencyDays} days
        {c.assessmentWeight > 0 && (
          <>
            , blended {c.activityWeight}:{c.assessmentWeight} with the latest term assessment for that subject (Strong = 90, Developing = 70, Needs support = 45)
          </>
        )}
        .
      </p>
      <p>
        🟢 Strong from {c.strong}% · 🟡 Developing from {c.developing}% · 🔴 Needs support below {c.developing}%. At least {c.minEvidence} results are needed; otherwise it shows “Not enough evidence”.
      </p>
      <p>Completion (did the child finish?) is kept separate from performance (how well?). These are learning indicators, never a diagnosis or a label. EzRoots can change these rules in Platform settings.</p>
    </details>
  );
}
function EzQuadrantChart({ rows }) {
  const w = 520;
  const h = 330;
  const pad = 40;
  const x = (v) => pad + (v / 100) * (w - 2 * pad);
  const y = (v) => h - pad - (v / 100) * (h - 2 * pad);
  const pts = rows.filter((r) => r.engagement != null && r.mastery != null);
  const byM = [...pts].sort((a, c) => a.mastery - c.mastery);
  const labelled = new Set([...byM.slice(0, 3), ...byM.slice(-2), ...pts.filter((r) => EzQuadrant(r) !== "Strong activity" && EzQuadrant(r) !== "Effective, needs better presentation")].map((r) => r.act.id));
  return (
    <svg className="ezchart" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Activity engagement against mastery">
      <rect x={x(70)} y={y(100)} width={x(100) - x(70)} height={y(70) - y(100)} className="q good" />
      <rect x={x(70)} y={y(70)} width={x(100) - x(70)} height={y(0) - y(70)} className="q warn" />
      <rect x={x(0)} y={y(100)} width={x(70) - x(0)} height={y(70) - y(100)} className="q blue" />
      <line x1={pad} x2={w - pad} y1={h - pad} y2={h - pad} className="grid" />
      <line x1={pad} x2={pad} y1={pad} y2={h - pad} className="grid" />
      <text x={w / 2} y={h - 6} textAnchor="middle" className="lab">Engagement (completion %) →</text>
      <text x={12} y={h / 2} transform={`rotate(-90 12 ${h / 2})`} textAnchor="middle" className="lab">Mastery (avg score) →</text>
      <text x={x(85)} y={y(96)} textAnchor="middle" className="lab">Strong</text>
      <text x={x(85)} y={y(8)} textAnchor="middle" className="lab">Fun, improve teaching</text>
      <text x={x(35)} y={y(96)} textAnchor="middle" className="lab">Effective, improve look</text>
      {pts.map((r) => (
          <g key={r.act.id}>
            <circle cx={x(r.engagement)} cy={y(r.mastery)} r={5 + Math.min(8, r.uses / 40)} className="pt" />
            <title>{`${r.act.title}: engagement ${Math.round(r.engagement)}%, mastery ${Math.round(r.mastery)}%`}</title>
            {labelled.has(r.act.id) && (
              <text x={x(r.engagement) + 9} y={y(r.mastery) + 4} className="val small">
                {r.act.title}
              </text>
            )}
          </g>
        ))}
    </svg>
  );
}
function EzInsight({ tone, title, text, children }) {
  return (
    <div className={`ezinsight ${tone ?? ""}`}>
      <strong>{title}</strong>
      {text && <p>{text}</p>}
      {children && <div className="row wrap">{children}</div>}
    </div>
  );
}
