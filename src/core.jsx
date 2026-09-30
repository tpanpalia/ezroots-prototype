// v2 core helpers. Everything here shares the v1 module scope, so v1 helpers
// (B = React, b = store hook, H = navigate, z = section label, CA = date format,
// uA = demo "today", O = id maker, W/F/v/At/AA/N/DA/_n/_/S/pt/TA = UI primitives)
// are available by name.

const EzH = (type, props, ...children) => B.createElement(type, props, ...children);
const EzFrag = B.Fragment;

/* ---------- dates ---------- */
const EzISO = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const EzDate = (iso) => new Date(`${iso}T00:00:00`);
function EzAddDays(iso, n) {
  const d = EzDate(iso);
  d.setDate(d.getDate() + n);
  return EzISO(d);
}
function EzDaysBetween(a, b) {
  return Math.round((EzDate(b) - EzDate(a)) / 864e5);
}
function EzWeekdays(from, to) {
  const out = [];
  for (let d = EzDate(from); d <= EzDate(to); d.setDate(d.getDate() + 1))
    if (d.getDay() !== 0 && d.getDay() !== 6) out.push(EzISO(d));
  return out;
}
const EzMonthKey = (iso) => iso.slice(0, 7);
const EzMonthName = (key) =>
  EzDate(`${key}-01`).toLocaleDateString("en-IN", { month: "long" });
function EzWeekStart(iso) {
  const d = EzDate(iso);
  const dow = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - dow);
  return EzISO(d);
}
function EzFmtMin(sec) {
  const m = Math.round((sec || 0) / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)} hr ${m % 60} min`;
}
const EzNowISO = () => new Date().toISOString();

/* ---------- deterministic randomness for seed / synthetic data ---------- */
function EzHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function EzRng(seed) {
  let a = typeof seed === "number" ? seed : EzHash(String(seed));
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t2 = Math.imul(a ^ (a >>> 15), 1 | a);
    t2 = (t2 + Math.imul(t2 ^ (t2 >>> 7), 61 | t2)) ^ t2;
    return ((t2 ^ (t2 >>> 14)) >>> 0) / 4294967296;
  };
}
const EzClamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const EzAvg = (xs) => (xs.length ? xs.reduce((a, c) => a + c, 0) / xs.length : null);
const EzPct = (x) => (x == null ? "—" : `${Math.round(x)}%`);
const EzUniq = (xs) => [...new Set(xs)];
function EzGroup(xs, key) {
  const m = new Map();
  for (const x of xs) {
    const k = typeof key === "function" ? key(x) : x[key];
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(x);
  }
  return m;
}

/* ---------- people ---------- */
const EzStudent = (db, id) => db.students.find((s) => s.id === id);
const EzUser = (db, id) => db.users.find((u) => u.id === id);
const EzFirst = (name) => (name || "").split(" ")[0];
function EzParentChildIds(me) {
  if (!me) return [];
  return me.childIds ?? (me.childId ? [me.childId] : []);
}
function EzParentChildId(db, me) {
  const ids = EzParentChildIds(me);
  const chosen = db.parentContext?.[me?.id];
  return ids.includes(chosen) ? chosen : ids[0];
}
function EzParentsOf(db, studentId) {
  return db.users.filter(
    (u) => u.role === "parent" && EzParentChildIds(u).includes(studentId),
  );
}
function EzSchoolOfSection(db, sectionId) {
  const sec = db.sections.find((s) => s.id === sectionId);
  return db.schools.find((s) => s.id === sec?.schoolId);
}
function EzTeacherOf(db, sectionId) {
  return db.users.find(
    (u) => u.role === "teacher" && u.teaches?.some((x) => x.sectionId === sectionId),
  );
}

/* ---------- permissions (configurable by EzRoots, §30) ---------- */
const EzPermRoles = ["student", "parent", "teacher", "principal", "ezroots"];
const EzPermRows = [
  ["ownActivity", "Own activity"],
  ["ownPerformance", "Own performance"],
  ["childDetail", "Child detailed data"],
  ["classAnalytics", "Class analytics"],
  ["schoolAnalytics", "School analytics"],
  ["crossSchool", "Cross-school analytics"],
  ["curriculum", "Curriculum analytics"],
  ["exportAggregated", "Export aggregated analytics"],
];
const EzPermDefaults = {
  ownActivity: { student: "yes", parent: "yes", teacher: "yes", principal: "no", ezroots: "yes" },
  ownPerformance: { student: "yes", parent: "yes", teacher: "yes", principal: "no", ezroots: "yes" },
  childDetail: { student: "no", parent: "yes", teacher: "yes", principal: "controlled", ezroots: "yes" },
  classAnalytics: { student: "no", parent: "no", teacher: "yes", principal: "yes", ezroots: "yes" },
  schoolAnalytics: { student: "no", parent: "no", teacher: "no", principal: "yes", ezroots: "yes" },
  crossSchool: { student: "no", parent: "no", teacher: "no", principal: "no", ezroots: "yes" },
  curriculum: { student: "no", parent: "no", teacher: "limited", principal: "limited", ezroots: "yes" },
  exportAggregated: { student: "no", parent: "no", teacher: "no", principal: "yes", ezroots: "yes" },
};
const EzRoleKey = (role) =>
  role === "superadmin" || role === "contentadmin" ? "ezroots" : role === "coordinator" ? "principal" : role;
/* Which cells mean something. Others show "n/a" and can't be edited. */
const EzPermApplies = {
  ownActivity: ["student", "parent", "teacher"],
  ownPerformance: ["student", "parent", "teacher"],
  childDetail: ["parent", "teacher", "principal"],
  classAnalytics: ["teacher", "principal"],
  schoolAnalytics: ["teacher", "principal"],
  crossSchool: ["teacher", "principal"],
  curriculum: ["teacher", "principal"],
  exportAggregated: ["teacher", "principal"],
};
/* What each row switches on or off, per role (shown on the permissions page). */
const EzPermHelp = {
  ownActivity: { student: "“Completed” list and activity counts in the child app", parent: "Activities page, class diary and learning-time figures", teacher: "Activity tab on each child’s page" },
  ownPerformance: { student: "“Things I explored” and badges in My progress", parent: "Progress page, performance figures and the weekly summary", teacher: "Learning tab (concept mastery, trend) on each child’s page" },
  childDetail: { parent: "Portfolio and learning report", teacher: "Opening an individual child’s page", principal: "Children tab in Reports (Controlled = school policy decides)" },
  classAnalytics: { teacher: "Class analytics page", principal: "Class tables on the overview and in Reports" },
  schoolAnalytics: { teacher: "School analytics page (all classes)", principal: "Reports: grades, subjects, teachers" },
  crossSchool: { teacher: "Network analytics (all schools, aggregated only)", principal: "Network analytics (all schools, aggregated only)" },
  curriculum: { teacher: "Limited = activity table for own class; ✓ = full curriculum analytics", principal: "Limited = own school; ✓ = full curriculum analytics" },
  exportAggregated: { teacher: "CSV / Excel / PDF export buttons", principal: "CSV / Excel / PDF export buttons" },
};
function EzPerm(db, role, key) {
  const r = EzRoleKey(role);
  if (r === "ezroots") return "yes";
  if (!EzPermApplies[key]?.includes(r)) return "yes";
  return (db.permissions ?? EzPermDefaults)[key]?.[r] ?? "no";
}
const EzAllowed = (db, me, key) => EzPerm(db, me?.role, key) !== "no";
/* Page that needs full access ("yes", not "limited"). */
function EzGateFull({ perm, children }) {
  const { db, me } = b();
  if (EzPerm(db, me?.role, perm) === "yes") return children;
  return <EzEmpty icon="lock" title="Not available with your access" />;
}
/* Wraps a page or section that a permission can switch off. */
function EzGate({ perm, children, inline }) {
  const { db, me } = b();
  if (EzAllowed(db, me, perm)) return children;
  if (inline) return null;
  return (
    <EzEmpty icon="lock" title="Not available with your access">
      <p>EzRoots has switched off “{EzPermRows.find((r) => r[0] === perm)?.[1]}” for your role.</p>
    </EzEmpty>
  );
}
// Principal "controlled" access follows the school's own policy toggle.
function EzPrincipalSeesChild(db, school) {
  const p = EzPerm(db, "principal", "childDetail");
  if (p === "yes") return true;
  if (p === "controlled") return !!school?.policy?.principalChildAccess;
  return false;
}

/* ---------- audit & events (§31, §39) ---------- */
function EzAudit(d, who, action, detail) {
  (d.audit ??= []).unshift({
    id: O("au"),
    at: EzNowISO(),
    who: who?.name ?? "System",
    role: who ? qe[who.role] : "",
    action,
    detail: detail ?? "",
  });
  if (d.audit.length > 400) d.audit.length = 400;
}
function EzEvent(d, me, type, extra) {
  (d.events ??= []).push({
    id: O("ev"),
    at: EzNowISO(),
    date: uA,
    userId: me?.id,
    role: me?.role,
    type,
    ...extra,
  });
  if (d.events.length > 6000) d.events.splice(0, d.events.length - 6000);
}
function EzNotify(d, to, text, link, extra) {
  d.notices.unshift({ id: O("n"), to, text, link, date: uA, read: false, ...extra });
}

/* ---------- exports: CSV, Excel (.xlsx) and PDF (print view) (§47) ---------- */
function EzDownload(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
function EzCSV(rows) {
  const q = (x) => `"${String(x ?? "").replace(/"/g, '""')}"`;
  return rows.map((r) => r.map(q).join(",")).join("\n");
}
const EzCrcTable = (() => {
  const tbl = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    tbl[n] = c >>> 0;
  }
  return tbl;
})();
function EzCrc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = EzCrcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
// Minimal "stored" (uncompressed) zip writer, enough for a valid .xlsx.
function EzZip(files) {
  const enc = new TextEncoder();
  const chunks = [];
  const central = [];
  let offset = 0;
  for (const [name, text] of files) {
    const nameB = enc.encode(name);
    const data = enc.encode(text);
    const crc = EzCrc32(data);
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, nameB.length, true);
    chunks.push(new Uint8Array(local.buffer), nameB, data);
    const cen = new DataView(new ArrayBuffer(46));
    cen.setUint32(0, 0x02014b50, true);
    cen.setUint16(4, 20, true);
    cen.setUint16(6, 20, true);
    cen.setUint32(16, crc, true);
    cen.setUint32(20, data.length, true);
    cen.setUint32(24, data.length, true);
    cen.setUint16(28, nameB.length, true);
    cen.setUint32(42, offset, true);
    central.push(new Uint8Array(cen.buffer), nameB);
    offset += 30 + nameB.length + data.length;
  }
  const cenSize = central.reduce((a, c) => a + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, cenSize, true);
  end.setUint32(16, offset, true);
  return new Blob([...chunks, ...central, new Uint8Array(end.buffer)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}
function EzXlsx(rows, sheetName = "Report") {
  const esc = (s) =>
    String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const col = (i) => {
    let s = "";
    for (i += 1; i > 0; i = Math.floor((i - 1) / 26)) s = String.fromCharCode(65 + ((i - 1) % 26)) + s;
    return s;
  };
  const sheetRows = rows
    .map(
      (r, ri) =>
        `<row r="${ri + 1}">${r
          .map((c, ci) =>
            typeof c === "number"
              ? `<c r="${col(ci)}${ri + 1}"><v>${c}</v></c>`
              : `<c r="${col(ci)}${ri + 1}" t="inlineStr"><is><t>${esc(c)}</t></is></c>`,
          )
          .join("")}</row>`,
    )
    .join("");
  return EzZip([
    [
      "[Content_Types].xml",
      '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
    ],
    [
      "_rels/.rels",
      '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
    ],
    [
      "xl/workbook.xml",
      `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${esc(sheetName).slice(0, 31)}" sheetId="1" r:id="rId1"/></sheets></workbook>`,
    ],
    [
      "xl/_rels/workbook.xml.rels",
      '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',
    ],
    [
      "xl/worksheets/sheet1.xml",
      `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${sheetRows}</sheetData></worksheet>`,
    ],
  ]);
}
function EzPrintTable(title, rows, note) {
  const w = window.open("", "_blank");
  if (!w) return false;
  const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
  w.document.write(`<!doctype html><title>${esc(title)}</title>
<style>body{font:13px system-ui;margin:32px;color:#292d3c}h1{font-size:20px;color:#30234c}
table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:6px 8px;text-align:left}
th{background:#f0ecf8}small{color:#6b6f80}</style>
<h1>${esc(title)}</h1><small>EzRoots · exported ${new Date().toLocaleString("en-IN")}${note ? " · " + esc(note) : ""}</small>
<table>${rows.map((r, i) => `<tr>${r.map((c) => (i ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`)).join("")}</tr>`).join("")}</table>
<script>setTimeout(()=>print(),300)<\/script>`);
  w.document.close();
  return true;
}
function EzExportButtons({ rows, name, title }) {
  const { update: u, me, toast, db } = b();
  if (!EzAllowed(db, me, "exportAggregated")) return null;
  const go = (fmt) => {
    const base = `${name}-${uA}`;
    if (fmt === "CSV") EzDownload(new Blob([EzCSV(rows)], { type: "text/csv" }), `${base}.csv`);
    if (fmt === "Excel") EzDownload(EzXlsx(rows, title), `${base}.xlsx`);
    if (fmt === "PDF" && !EzPrintTable(title, rows, "Aggregated data"))
      toast("Allow pop-ups to print or save as PDF");
    u((d) => EzAudit(d, me, `exported ${title}`, fmt));
  };
  return (
    <span className="row" style={{ gap: 6 }}>
      {["CSV", "Excel", "PDF"].map((f) => (
        <button key={f} className="btn secondary sm" onClick={() => go(f)}>
          <S n="down" />
          {f}
        </button>
      ))}
    </span>
  );
}

/* ---------- small shared UI ---------- */
function EzTabs({ value, options, onChange }) {
  return <DA value={value} options={options} onChange={onChange} />;
}
function EzInfo({ children, tone }) {
  return (
    <div className={`notice ${tone ?? "info"}`}>
      <S n="help" />
      <span>{children}</span>
    </div>
  );
}
function EzDemoNote({ children }) {
  return (
    <div className="demo-note section" style={{ marginTop: 16 }}>
      {children}
    </div>
  );
}
function EzTable({ head, rows, empty }) {
  return (
    <div className="card tablewrap">
      <table className="table">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? (
            rows
          ) : (
            <tr>
              <td colSpan={head.length}>
                <small>{empty ?? "Nothing here yet."}</small>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
function EzCard({ title, eyebrow, children, actions, className }) {
  return (
    <div className={`card pad stack ${className ?? ""}`}>
      {(title || eyebrow || actions) && (
        <div className="row between wrap">
          <div>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && <h2>{title}</h2>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}

/* Capitalised aliases for v1 components whose minified names are lowercase
   (JSX would otherwise treat them as HTML tags). */
const EzPill = v;
const EzEmpty = _;
const EzLegacyChoice = lh;
const EzLegacySort = rh;
const EzLegacyBalance = ah;
const EzLegacySound = oh;
const EzLegacyDone = gh;
const EzOutlet = hE;
const EzSwitch = _n;
const EzAvatar = pt;
const EzObsModal = fE;
const EzV1Library = zu;
const EzV1Impl = kh;
const EzV1SchoolSettings = xh;
const EzV1LessonPlan = da;
const EzDrawer = mu;

/* Logs resource/video events from v1 viewers (planner, library, smartboard). */
function EzUseResourceLog() {
  const { update, me } = b();
  return (type, extra) =>
    update((d) => {
      EzEvent(d, me, type, extra);
      const key = extra.videoId ? `f-${extra.videoId}` : extra.lessonPlanId ? `f-${extra.lessonPlanId}` : null;
      if (key && type !== "video_completed") d.resourceViews[key] = (d.resourceViews[key] ?? 0) + 1;
    });
}
