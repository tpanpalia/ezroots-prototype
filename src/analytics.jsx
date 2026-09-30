// v2 analytics engine. One place for every number shown on a dashboard, so the
// method is transparent (§14) and driven by EzRoots' settings (db.settings.mastery).

const EzAssessScore = { Strong: 90, Developing: 70, "Needs support": 45 };

function EzMasteryCfg(db) {
  return db.settings?.mastery ?? { strong: 80, developing: 60, activityWeight: 70, assessmentWeight: 30, recencyDays: 90, minEvidence: 2 };
}
function EzLevel(db, pct, n) {
  const c = EzMasteryCfg(db);
  if (pct == null || n < c.minEvidence) return "Not enough evidence";
  return pct >= c.strong ? "Strong" : pct >= c.developing ? "Developing" : "Needs support";
}
const EzLevelTone = (l) => (l === "Strong" ? "good" : l === "Developing" ? "warn" : l === "Needs support" ? "bad" : "");
const EzLevelDot = (l) => (l === "Strong" ? "🟢" : l === "Developing" ? "🟡" : l === "Needs support" ? "🔴" : "⚪");
function EzLevelPill({ level }) {
  return <EzPill tone={EzLevelTone(level)}>{EzLevelDot(level)} {level}</EzPill>;
}

/* Per-state caches: the store replaces db on every update, so a WeakMap keyed
   on the db object is always fresh. */
const EzCache = new WeakMap();
function EzMemo(db, key, fn) {
  let m = EzCache.get(db);
  if (!m) EzCache.set(db, (m = new Map()));
  if (!m.has(key)) m.set(key, fn());
  return m.get(key);
}
const EzAct = (db, id) => EzMemo(db, "acts", () => new Map(db.activities.map((a) => [a.id, a]))).get(id);
function EzAttempts(db, studentIds, from, to) {
  const idx = EzMemo(db, "attIdx", () => EzGroup(db.attempts, "studentId"));
  const ids = Array.isArray(studentIds) ? studentIds : [studentIds];
  const out = [];
  for (const id of ids) for (const a of idx.get(id) ?? []) if ((!from || a.date >= from) && (!to || a.date <= to)) out.push(a);
  return out;
}

/* Concept understanding % for one child (§13) and indicator (§14). */
function EzMastery(db, studentId, concept, opts = {}) {
  return EzMemo(db, `m|${studentId}|${concept}|${JSON.stringify(opts)}`, () => EzMasteryRaw(db, studentId, concept, opts));
}
function EzMasteryRaw(db, studentId, concept, opts) {
  const c = EzMasteryCfg(db);
  const to = opts.to ?? uA;
  const from = opts.from ?? EzAddDays(to, -c.recencyDays);
  const atts = EzAttempts(db, studentId, from, to).filter((a) => EzAct(db, a.activityId)?.concept === concept);
  const actAvg = EzAvg(atts.map((a) => a.score));
  let pct = actAvg;
  let assess = null;
  if (!opts.activitiesOnly) {
    const subject = db.activities.find((a) => a.concept === concept)?.subject;
    const as = db.assessments.filter((a) => a.studentId === studentId && a.subject === subject).sort((x, y) => y.date.localeCompare(x.date))[0];
    if (as && actAvg != null) {
      assess = EzAssessScore[as.result];
      pct = (actAvg * c.activityWeight + assess * c.assessmentWeight) / (c.activityWeight + c.assessmentWeight);
    }
  }
  return { concept, pct: pct == null ? null : Math.round(pct), n: atts.length, level: EzLevel(db, pct, atts.length), actAvg, assess };
}
function EzChildConcepts(db, studentId, opts) {
  const concepts = EzUniq(EzAttempts(db, studentId).map((a) => EzAct(db, a.activityId)?.concept).filter(Boolean));
  return concepts.map((c) => EzMastery(db, studentId, c, opts)).sort((a, b) => (b.pct ?? -1) - (a.pct ?? -1));
}
/* Longitudinal progress per month (§15). */
function EzMonthly(db, studentIds, concept) {
  const atts = EzAttempts(db, studentIds).filter((a) => !concept || EzAct(db, a.activityId)?.concept === concept);
  const by = EzGroup(atts, (a) => EzMonthKey(a.date));
  return [...by.keys()].sort().map((m) => ({ month: m, label: EzMonthName(m), pct: Math.round(EzAvg(by.get(m).map((a) => a.score))), n: by.get(m).length }));
}

/* Engagement & time (§11). */
function EzSessions(db, studentIds, from, to) {
  const idx = EzMemo(db, "sesIdx", () => EzGroup(db.sessions ?? [], "studentId"));
  const ids = Array.isArray(studentIds) ? studentIds : [studentIds];
  const out = [];
  for (const id of ids) for (const s of idx.get(id) ?? []) if ((!from || s.date >= from) && (!to || s.date <= to)) out.push(s);
  return out;
}
function EzEngagement(db, studentIds, from, to) {
  const ss = EzSessions(db, studentIds, from, to);
  const active = ss.reduce((a, s) => a + s.activeSec, 0);
  const idle = ss.reduce((a, s) => a + s.idleSec, 0);
  const atts = EzAttempts(db, studentIds, from, to);
  return {
    sessions: ss.length,
    activeSec: active,
    idleSec: idle,
    avgSessionSec: ss.length ? active / ss.length : 0,
    activities: atts.length,
    concepts: EzUniq(atts.map((a) => EzAct(db, a.activityId)?.concept)).filter(Boolean).length,
    days: EzUniq(ss.map((s) => s.date)).length,
    avgScore: EzAvg(atts.map((a) => a.score)),
  };
}
function EzBuckets(db, studentIds, unit, count) {
  // unit: "day" | "week" | "month"; returns oldest → newest
  const out = [];
  let end = uA;
  for (let i = 0; i < count; i++) {
    let start;
    if (unit === "day") start = end;
    else if (unit === "week") start = EzWeekStart(end);
    else start = `${end.slice(0, 7)}-01`;
    const e = EzEngagement(db, studentIds, start, end);
    const label = unit === "day" ? CA(start, { weekday: "short" }) : unit === "week" ? CA(start) : EzMonthName(start.slice(0, 7)).slice(0, 3);
    out.unshift({ start, end, label, ...e });
    end = EzAddDays(start, -1);
  }
  return out;
}

/* Activity preferences as engagement, never personality (§12). */
function EzPreferences(db, studentIds) {
  const atts = EzAttempts(db, studentIds);
  const set = new Set(Array.isArray(studentIds) ? studentIds : [studentIds]);
  const assigned = db.assignments.filter((as) => {
    if (as.due > uA) return false;
    const sec = as.sectionId;
    return db.students.some((s) => set.has(s.id) && s.sectionId === sec && (as.studentIds === "all" || as.studentIds.includes(s.id)));
  });
  const byType = EzGroup(atts, (a) => a.type ?? EzTypeOf(EzAct(db, a.activityId) ?? {}));
  const assignedByType = EzGroup(assigned, (as) => EzTypeOf(EzAct(db, as.activityId) ?? {}));
  return [...byType.keys()]
    .map((type) => {
      const xs = byType.get(type);
      const scored = xs.filter((a) => a.score != null);
      const nAssigned = (assignedByType.get(type)?.length ?? 0) * (set.size || 1);
      return {
        type,
        activities: xs.length,
        completion: nAssigned ? Math.min(100, (xs.length / nAssigned) * 100) : null,
        avg: EzAvg(scored.map((a) => a.score)),
        replays: xs.filter((a) => a.retries).length,
      };
    })
    .sort((a, b) => b.activities - a.activities);
}

/* Class / section level (§21–23). */
function EzSectionStats(db, sectionId, days = 30) {
  return EzMemo(db, `sec|${sectionId}|${days}`, () => EzSectionStatsRaw(db, sectionId, days));
}
function EzSectionStatsRaw(db, sectionId, days) {
  const kids = Cr(db, sectionId);
  const ids = kids.map((k) => k.id);
  const from = EzAddDays(uA, -days);
  const assigns = db.assignments.filter((a) => a.sectionId === sectionId && a.createdAt >= from && a.createdAt <= uA);
  const atts = db.attempts.filter((a) => ids.includes(a.studentId) && a.date >= from);
  const expected = assigns.reduce((s, a) => s + (a.studentIds === "all" ? kids.length : a.studentIds.length), 0);
  const active7 = new Set(EzSessions(db, ids, EzAddDays(uA, -7), uA).map((s) => s.studentId));
  const concepts = EzUniq(atts.map((a) => EzAct(db, a.activityId)?.concept).filter(Boolean));
  const conceptRows = concepts.map((c) => {
    const ms = kids.map((k) => EzMastery(db, k.id, c)).filter((m) => m.n > 0);
    return {
      concept: c,
      children: ms.length,
      mastered: ms.length ? (ms.filter((m) => m.level === "Strong").length / ms.length) * 100 : null,
      below: ms.length ? (ms.filter((m) => m.level === "Needs support").length / ms.length) * 100 : null,
      avg: EzAvg(ms.map((m) => m.pct)),
      support: kids.filter((k) => {
        const m = EzMastery(db, k.id, c);
        return m.n > 0 && m.level === "Needs support";
      }),
      developing: kids.filter((k) => {
        const m = EzMastery(db, k.id, c);
        return m.n > 0 && m.level === "Developing";
      }),
    };
  }).sort((a, b) => (a.mastered ?? 0) - (b.mastered ?? 0));
  const actRows = EzUniq(assigns.map((a) => a.activityId)).map((id) => {
    const as = assigns.filter((a) => a.activityId === id);
    const xs = atts.filter((a) => as.some((x) => x.id === a.assignmentId));
    const exp = as.reduce((s, a) => s + (a.studentIds === "all" ? kids.length : a.studentIds.length), 0);
    return {
      act: EzAct(db, id),
      completion: exp ? (xs.length / exp) * 100 : null,
      avg: EzAvg(xs.map((a) => a.score)),
      fail: xs.length ? (xs.filter((a) => a.score < EzMasteryCfg(db).developing).length / xs.length) * 100 : null,
      avgTime: EzAvg(xs.map((a) => a.timeSec)),
      n: xs.length,
    };
  });
  const perKid = kids.map((k) => {
    const e = EzEngagement(db, k.id, from, uA);
    return { kid: k, ...e };
  });
  return {
    kids,
    students: kids.length,
    active7: active7.size,
    completion: expected ? Math.min(100, (atts.filter((a) => a.assignmentId).length / expected) * 100) : null,
    performance: EzAvg(atts.map((a) => a.score)),
    conceptRows,
    actRows,
    perKid: perKid.sort((a, b) => b.activeSec - a.activeSec),
    assigns,
  };
}

/* Early support (§41): kind, specific, never a label. */
function EzAlerts(db, sectionId) {
  const kids = Cr(db, sectionId);
  const out = [];
  const lastSession = (id) => (db.sessions ?? []).filter((s) => s.studentId === id).map((s) => s.date).sort().pop();
  const stopped = kids.filter((k) => {
    const l = lastSession(k.id);
    return l && EzDaysBetween(l, uA) >= 7;
  });
  if (stopped.length)
    out.push({ key: `${sectionId}|stopped|${stopped.map((k) => k.id).join(",")}`, kind: "Not using the platform", text: `${stopped.length} ${stopped.length > 1 ? "children have" : "child has"} not opened the child app for 7+ days.`, kids: stopped, tone: "warn" });
  const st = EzSectionStats(db, sectionId);
  for (const r of st.conceptRows) {
    if (r.support.length >= 3 || (r.below ?? 0) >= 25)
      out.push({ key: `${sectionId}|concept|${r.concept}`, kind: "May need support", concept: r.concept, text: `${r.support.length} children in ${z(db, sectionId)} may need support with ${r.concept}.`, kids: r.support, tone: "bad" });
  }
  const declining = kids.filter((k) => {
    const xs = db.attempts.filter((a) => a.studentId === k.id).sort((a, b) => a.date.localeCompare(b.date));
    if (xs.length < 6) return false;
    const last = EzAvg(xs.slice(-3).map((a) => a.score));
    const prev = EzAvg(xs.slice(-6, -3).map((a) => a.score));
    return prev - last >= 15;
  });
  if (declining.length)
    out.push({ key: `${sectionId}|declining|${declining.map((k) => k.id).join(",")}`, kind: "Recent results dipped", text: `${declining.length} ${declining.length > 1 ? "children's" : "child's"} recent results are lower than before. Worth a quiet check-in.`, kids: declining, tone: "warn" });
  const med = EzAvg(st.perKid.map((p) => p.activeSec)) ?? 0;
  const low = st.perKid.filter((p) => med > 0 && p.activeSec < med * 0.25 && !stopped.includes(p.kid)).map((p) => p.kid);
  if (low.length)
    out.push({ key: `${sectionId}|low|${low.map((k) => k.id).join(",")}`, kind: "Low engagement", text: `${low.length} ${low.length > 1 ? "children are" : "child is"} using the child app much less than classmates.`, kids: low, tone: "warn" });
  return out;
}

/* Recommendation engine (§36): EzRoots-approved content only. */
function EzRecommend(db, concept, level) {
  const acts = db.activities.filter((a) => a.status === "published" && a.concept === concept && (!level || a.level === level));
  const lessonPlans = [];
  for (const [key, link] of Object.entries(db.links ?? {})) {
    if ((link.activities ?? []).some((id) => acts.some((a) => a.id === id)))
      for (const lp of link.lessonPlans ?? []) lessonPlans.push({ id: lp, day: Number(key.split("|")[0]), slot: key.split("|")[1] });
  }
  return {
    activities: acts,
    home: EzHomeIdeas[concept] ?? [],
    lessonPlans: lessonPlans.map((x) => ({ ...x, lp: tn.find((l) => l.id === x.id) })).filter((x) => x.lp),
    tip: EzTeacherTips[concept] ?? "Revisit the concept with the physical EzRoots kit first, then use the digital activity to reinforce it.",
  };
}

/* School level (§24–25). Sunrise has child-level demo data; other schools are summaries. */
function EzSchoolSections(db, schoolId) {
  return db.sections.filter((s) => s.schoolId === schoolId);
}
function EzSchoolStats(db, school) {
  if (school.summary) {
    const s = school.summary;
    return { students: s.students, active: Math.round((s.students * s.engagement) / 100), engagement: s.engagement, completion: s.completion, performance: s.performance, implementation: s.implementation, usage: s.usage, training: s.training, summaryOnly: true };
  }
  const secs = EzSchoolSections(db, school.id);
  const ids = db.students.filter((s) => secs.some((x) => x.id === s.sectionId) && s.status === "active").map((s) => s.id);
  const active = new Set(EzSessions(db, ids, EzAddDays(uA, -7), uA).map((s) => s.studentId)).size;
  const stats = secs.map((s) => EzSectionStats(db, s.id));
  const w = (k) => {
    const xs = stats.filter((s) => s[k] != null);
    const tot = xs.reduce((a, s) => a + s.students, 0);
    return tot ? xs.reduce((a, s) => a + s[k] * s.students, 0) / tot : null;
  };
  const impl = secs.length ? EzAvg(secs.map((s) => Math.min(100, ((db.classPosition[s.id] ?? 63) - 1) / 62 * 100))) : 0;
  return {
    students: ids.length,
    active,
    engagement: ids.length ? (active / ids.length) * 100 : 0,
    completion: w("completion"),
    performance: w("performance"),
    implementation: impl,
    usage: EzUsage(db, school.id),
    training: EzTrainingPct(db, school.id),
  };
}
function EzUsage(db, schoolId) {
  const school = db.schools.find((s) => s.id === schoolId);
  if (school?.summary) return school.summary.usage;
  const from = EzAddDays(uA, -7);
  const users = db.users.filter((u) => u.schoolId === schoolId && u.active);
  const pctRole = (role) => {
    const us = users.filter((u) => u.role === role);
    const act = new Set((db.events ?? []).filter((e) => e.role === role && e.date >= from && e.type === "login").map((e) => e.userId));
    return us.length ? (us.filter((u) => act.has(u.id)).length / us.length) * 100 : 0;
  };
  const kids = db.students.filter((s) => EzSchoolSections(db, schoolId).some((x) => x.id === s.sectionId) && s.status === "active");
  const activeKids = new Set(EzSessions(db, kids.map((k) => k.id), from, uA).map((s) => s.studentId));
  return { teachers: Math.round(pctRole("teacher")), children: Math.round(kids.length ? (activeKids.size / kids.length) * 100 : 0), parents: Math.round(pctRole("parent")) };
}
function EzTrainingPct(db, schoolId) {
  const ts = db.users.filter((u) => u.role === "teacher" && u.schoolId === schoolId && u.active);
  const vals = ts.flatMap((tch) => Object.values(db.trainingProgress?.[tch.id] ?? {}));
  return vals.length ? EzAvg(vals) : 0;
}
/* School Health Score (§52): weighted, weights set by EzRoots. */
function EzHealth(db, school) {
  const s = EzSchoolStats(db, school);
  const w = db.settings.health;
  const tot = w.implementation + w.engagement + w.performance + w.training;
  const score = ((s.implementation ?? 0) * w.implementation + (s.engagement ?? 0) * w.engagement + (s.performance ?? 0) * w.performance + (s.training ?? 0) * w.training) / tot;
  return { score: Math.round(score), parts: s };
}

/* Synthetic, deterministic numbers for summary-only schools in the drill-down. */
function EzSynth(school, key) {
  const r = EzRng(`${school.id}|${key}`);
  const base = school.summary?.engagement ?? 70;
  return {
    engagement: Math.round(EzClamp(base + (r() - 0.5) * 16, 10, 99)),
    completion: Math.round(EzClamp(base * 0.9 + (r() - 0.5) * 16, 10, 99)),
    performance: Math.round(EzClamp(64 + base * 0.18 + (r() - 0.5) * 18, 30, 97)),
    students: Math.round(10 + r() * 30),
  };
}

/* Curriculum analytics (§27, §28) across schools. */
function EzActivityEffectiveness(db, filter) {
  const acts = db.activities.filter((a) => a.status === "published" && (!filter || filter(a)));
  return acts
    .map((act) => {
      const assigns = db.assignments.filter((x) => x.activityId === act.id && x.due <= uA);
      const atts = db.attempts.filter((x) => x.activityId === act.id);
      let expected = 0;
      for (const as of assigns) expected += as.studentIds === "all" ? Cr(db, as.sectionId).length : as.studentIds.length;
      const avg = EzAvg(atts.map((a) => a.score));
      return {
        act,
        uses: atts.length,
        engagement: expected ? Math.min(100, (atts.length / expected) * 100) : null,
        mastery: avg,
        fail: atts.length ? (atts.filter((a) => a.score < EzMasteryCfg(db).developing).length / atts.length) * 100 : null,
        repeats: atts.filter((a) => (a.retries ?? 0) > 0 || (a.tries ?? 1) > 2).length,
        schools: EzUniq(atts.map((a) => EzSchoolOfSection(db, EzStudent(db, a.studentId)?.sectionId)?.id)).length,
      };
    })
    .filter((r) => r.uses > 0);
}
function EzQuadrant(r) {
  if (r.engagement == null || r.mastery == null) return "Not enough data";
  const hiE = r.engagement >= 70;
  const hiM = r.mastery >= 70;
  if (hiE && hiM) return "Strong activity";
  if (hiE && !hiM) return "Enjoyable, needs instructional improvement";
  if (!hiE && hiM) return "Effective, needs better presentation";
  return "Review: low engagement and mastery";
}

/* Default concept for a trend chart: one still developing, with several months of results. */
function EzTrendDefault(db, studentId, ms) {
  const withHistory = ms.filter((m) => EzMonthly(db, studentId, m.concept).length >= 3);
  return (withHistory.find((m) => m.level === "Developing" || m.level === "Needs support") ?? withHistory[0] ?? ms[0])?.concept;
}

/* Adaptive difficulty (§37). Runs only when EzRoots switches it on.
   Up: the child's last two results on a concept were Strong → a harder activity on it.
   Down: the latest result needs support → an easier activity (or a replay with hints first).
   Children only get activities their teacher has enabled for the class; the teacher
   also sees suggestions outside that set, including the next class level. */
function EzAdaptive(db, kid) {
  if (!db.settings?.adaptive || !kid) return [];
  const c = EzMasteryCfg(db);
  const sec = db.sections.find((s) => s.id === kid.sectionId);
  const pool = new Set(db.assignments.filter((a) => a.sectionId === kid.sectionId && (a.studentIds === "all" || a.studentIds.includes(kid.id))).map((a) => a.activityId));
  const pub = db.activities.filter((a) => a.status === "published" && !["draw", "write", "say", "drawing"].includes(EzKindOf(a)));
  const byConcept = EzGroup(EzAttempts(db, kid.id).filter((a) => a.score != null).sort((x, y) => (x.startedAt ?? x.date).localeCompare(y.startedAt ?? y.date)), (a) => EzAct(db, a.activityId)?.concept);
  const next = Mt[Mt.indexOf(sec.level) + 1];
  const out = [];
  for (const [concept, atts] of byConcept) {
    if (!concept) continue;
    const last = atts[atts.length - 1];
    const lastAct = EzAct(db, last.activityId);
    const d = lastAct?.difficulty ?? 1;
    const same = pub.filter((a) => a.concept === concept && a.level === sec.level);
    if (atts.length >= 2 && atts.slice(-2).every((a) => a.score >= c.strong)) {
      const harder = same.filter((a) => (a.difficulty ?? 1) > d).sort((x, y) => x.difficulty - y.difficulty)[0];
      const nextLevel = next && pub.find((a) => a.concept === concept && a.level === next);
      const pick = harder ?? nextLevel;
      if (pick) out.push({ concept, dir: "up", act: pick, forChild: pool.has(pick.id), why: `Two strong results in a row on ${concept}` + (harder ? "" : ` · next class level (${next})`) });
    } else if (last.score < c.developing) {
      const easier = same.filter((a) => (a.difficulty ?? 1) < d).sort((x, y) => y.difficulty - x.difficulty)[0];
      const pick = easier ?? lastAct;
      out.push({ concept, dir: "down", act: pick, forChild: pool.has(pick.id), why: easier ? `Needs support on ${concept} · a simpler activity first` : `Needs support on ${concept} · replay with hints first` });
    }
  }
  return out;
}
