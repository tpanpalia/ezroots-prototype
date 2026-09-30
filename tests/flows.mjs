import puppeteer from "puppeteer-core";
const FILE = new URL("../dist/EzRoots-Prototype-v2.html", import.meta.url).href;
const b = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const db = (pg) => pg.evaluate(() => JSON.parse(localStorage.getItem("ezroots-prototype-v2")));
const pages = [];
async function open(u, path) {
  const pg = await b.newPage();
  pages.push(pg);
  await pg.setViewport({ width: 1300, height: 900 });
  pg.errs = [];
  pg.on("pageerror", (e) => pg.errs.push(e.message));
  await pg.goto(`${FILE}${u ? `?as=${u}` : ""}#${path}`);
  await sleep(700);
  return pg;
}
async function clickText(pg, sel, text) {
  const ok = await pg.evaluate((sel, text) => {
    const el = [...document.querySelectorAll(sel)].find((e) => e.textContent.trim().includes(text) && !e.disabled);
    if (el) el.click();
    return !!el;
  }, sel, text);
  if (!ok) throw new Error(`not found: ${sel} "${text}"`);
  await sleep(250);
}
async function typeIn(pg, sel, text) {
  await pg.focus(sel);
  await pg.keyboard.type(text);
  await sleep(100);
}
const results = [];
{ const p = await b.newPage(); await p.goto(FILE); await p.evaluate(() => localStorage.clear()); await p.close(); }
async function flow(name, fn) {
  try { await fn(); results.push(`✓ ${name}`); } catch (e) { results.push(`✗ ${name}: ${e.message}`); }
  while (pages.length) await pages.pop().close();
}

await flow("child plays drag-sort + reflection", async () => {
  const pg = await open("u-st-1", "/student/play/x?activity=act-lines");
  const items = [["Ruler", "Straight"], ["Rainbow", "Curved"], ["Pencil", "Straight"], ["Banana", "Curved"], ["Door", "Straight"], ["Ball", "Curved"]];
  for (const [it, g] of items) { await clickText(pg, ".draggables button", it); await clickText(pg, ".ezbin", g); }
  await clickText(pg, "button", "Check");
  await sleep(1300);
  await clickText(pg, ".answers button", "6");
  await clickText(pg, "button", "Save");
  await sleep(500);
  const d = await db(pg);
  const a = d.attempts.filter((x) => x.activityId === "act-lines" && x.studentId === "st-1" && x.selfPractice).pop();
  if (!a || a.score !== 100 || a.reflection !== 6) throw new Error(JSON.stringify(a));
  if (!d.portfolio.some((p) => p.kind === "Reflection" && p.text.includes("6 straight"))) throw new Error("no reflection in portfolio");
  if (!d.events.some((e) => e.type === "activity_completed")) throw new Error("no event");
  if (pg.errs.length) throw new Error(pg.errs[0]);
});

await flow("child mcq with skip + hint", async () => {
  const pg = await open("u-st-1", "/student/play/x?activity=act-kind-choice");
  await clickText(pg, ".answers button", "Wipe");
  await clickText(pg, "button", "Check");
  await clickText(pg, "button", "Next");
  await clickText(pg, "button", "Skip");
  await clickText(pg, ".answers button", "Push");
  await clickText(pg, "button", "Check");
  await clickText(pg, ".answers button", "Wait");
  await clickText(pg, "button", "Check");
  await clickText(pg, "button", "Finish");
  await sleep(400);
  const d = await db(pg);
  const a = d.attempts.filter((x) => x.activityId === "act-kind-choice").pop();
  if (!a || a.skipped !== 1 || a.correct !== 2 || a.incorrect !== 1 || a.score !== 50) throw new Error(JSON.stringify(a));
});

await flow("pause saves progress", async () => {
  const pg = await open("u-st-1", "/student/play/x?activity=g1-numbers-100");
  // Aarav plays a Grade 1 activity via direct link; answer one then leave
  await clickText(pg, ".answers button", "50");
  await clickText(pg, "button", "Check");
  await clickText(pg, "button", "Next");
  await clickText(pg, "a", "Back");
  await sleep(500);
  const d = await db(pg);
  if (!d.inProgress.some((p) => p.activityId === "g1-numbers-100" && p.qIndex === 1)) throw new Error(JSON.stringify(d.inProgress));
  if (!d.events.some((e) => e.type === "activity_paused")) throw new Error("no pause event");
});

await flow("parent verify + consent (pa-2)", async () => {
  const pg = await open("pa-2", "/parent");
  await typeIn(pg, "input[inputmode=numeric]", "123456");
  await clickText(pg, "button", "Verify");
  await pg.evaluate(() => document.querySelector(".box input[type=checkbox]").click());
  await clickText(pg, "button", "Agree and continue");
  await sleep(400);
  const txt = await pg.evaluate(() => document.body.innerText);
  if (!txt.includes("’s learning")) throw new Error("portal not shown");
  const d = await db(pg);
  const u = d.users.find((x) => x.id === "pa-2");
  if (u.invite.status !== "linked" || !u.consent) throw new Error(JSON.stringify(u));
});

await flow("child picture PIN sign-in", async () => {
  const pg = await open("", "/login");
  await clickText(pg, "button", "I’m a child");
  await typeIn(pg, ".ezcode", "SUN26");
  await clickText(pg, "button", "Next");
  await clickText(pg, ".ezbigbtn", "Nursery");
  await clickText(pg, ".ezbigbtn", "Aarav");
  const pin = await pg.evaluate(() => JSON.parse(localStorage.getItem("ezroots-prototype-v2")).students[0].pin);
  for (const p of pin) await clickText(pg, ".ezpinpad button", p);
  await sleep(500);
  if (!(await pg.evaluate(() => location.hash)).includes("/student")) throw new Error("not signed in");
  const d = await db(pg);
  if (!d.events.some((e) => e.type === "login" && e.userId === "u-st-1")) throw new Error("no login event");
});

await flow("file manager: new folder, copy folder with files", async () => {
  const pg = await open("u-sa", "/sa/files");
  await clickText(pg, "button", "New folder");
  await typeIn(pg, ".modal input", "School A Resources");
  await clickText(pg, ".modal button", "Save");
  await pg.evaluate(() => [...document.querySelectorAll(".folderrow")].find((e) => e.textContent.includes("Montessori")).click());
  await sleep(200);
  await clickText(pg, "button", "Copy to");
  await pg.select(".modal select", "School A Resources");
  await clickText(pg, ".modal button", "Copy");
  await sleep(300);
  const d = await db(pg);
  if (!d.folders.includes("School A Resources/Montessori")) throw new Error(d.folders.join());
  if (d.files.filter((f) => f.folder === "School A Resources/Montessori").length !== 2) throw new Error("files not copied");
  if (!d.audit.some((a) => a.action === "copied folder")) throw new Error("no audit");
});

await flow("access matrix hides folder from school", async () => {
  const pg = await open("u-sa", "/sa/files");
  await clickText(pg, ".segmented button", "School access");
  await pg.evaluate(() => { const row = [...document.querySelectorAll("tbody tr")].find((r) => r.textContent.startsWith("Montessori")); row.querySelectorAll(".ezperm")[0].click(); });
  await sleep(300);
  const pg2 = await open("u-t1", "/teacher/library");
  await clickText(pg2, ".segmented button", "School resources");
  const rows = await pg2.evaluate(() => [...document.querySelectorAll(".folderrow strong")].map((e) => e.textContent));
  if (rows.includes("Montessori")) throw new Error("still visible: " + rows.join(","));
  if (!rows.includes("Training Videos")) throw new Error("other folders missing");
});

await flow("builder: create mcq, send for review, approve, child sees it", async () => {
  const pg = await open("u-ca", "/ca/activities/new");
  await clickText(pg, ".ezkind", "Multiple choice");
  await clickText(pg, "button", "Continue");
  const inputs = await pg.$$(".form input.input");
  await inputs[0].type("Longer or Shorter?");
  await pg.select(".form select", "Nursery");
  await inputs[3].type("Measurement");
  const obj = await pg.$$(".form > label input.input");
  await obj[0].type("Compare lengths");
  await clickText(pg, "button", "Continue");
  await typeIn(pg, "input[placeholder='e.g. Which is longer?']", "Which is longer?");
  const ans = await pg.$$("input[placeholder^='Answer']");
  await ans[0].type("Snake");
  await ans[1].type("Worm");
  await clickText(pg, "button", "Preview as a child");
  await clickText(pg, ".answers button", "Snake");
  await clickText(pg, "button", "Check");
  await clickText(pg, "button", "Looks good");
  await clickText(pg, ".card.pad button.btn", "Send for review");
  await sleep(400);
  await pg.evaluate(() => [...document.querySelectorAll("tr")].find((r) => r.textContent.includes("Longer or Shorter?")).querySelector("button").click());
  await sleep(300);
  const d = await db(pg);
  const a = d.activities.find((x) => x.title === "Longer or Shorter?");
  if (!a || a.status !== "published" || a.content.questions[0].choices.length !== 2) throw new Error(JSON.stringify(a));
  if (pg.errs.length) throw new Error(pg.errs[0]);
});

await flow("permissions: principal child detail follows school policy", async () => {
  const pg = await open("u-pr", "/principal/reports");
  await clickText(pg, ".segmented button", "Children");
  let t = await pg.evaluate(() => document.body.innerText);
  if (!t.includes("stay with the class teacher")) throw new Error("should be locked");
  await pg.goto(`${FILE}#/principal/settings`); await sleep(500);
  await pg.evaluate(() => document.querySelector("[aria-label='Principal child access'] input").click());
  await sleep(300);
  await pg.goto(`${FILE}#/principal/reports`); await sleep(500);
  await clickText(pg, ".segmented button", "Children");
  await clickText(pg, "button", "View");
  const d = await db(pg);
  if (!d.audit.some((a) => a.action === "viewed child learning details")) throw new Error("no audit");
});

await flow("teacher recommendation assigns to children & notifies parents", async () => {
  const pg = await open("u-t1", "/teacher/analytics");
  await clickText(pg, "button", "View recommended activities");
  await clickText(pg, ".modal button", "Assign");
  const d = await db(pg);
  const as = d.assignments[d.assignments.length - 1];
  if (!Array.isArray(as.studentIds) || !as.note?.startsWith("Extra practice")) throw new Error(JSON.stringify(as));
  if (!d.notices.some((n) => n.text.startsWith("Teacher recommendation"))) throw new Error("no parent notice");
});

await flow("assistant answers admin question from data", async () => {
  const pg = await open("u-sa", "/sa");
  await clickText(pg, "button", "Ask EzRoots");
  await clickText(pg, ".pill", "Grade 1 activities");
  const t = await pg.evaluate(() => document.querySelector(".drawer").innerText);
  if (!/engagement \d+%/.test(t)) throw new Error(t.slice(0, 300));
});


await flow("sub-folder via row button, inherits access", async () => {
  const pg = await open("u-sa", "/sa/files");
  await pg.evaluate(() => [...document.querySelectorAll(".folderrow")].find((e) => e.textContent.includes("Montessori")).querySelector("button").click());
  await sleep(200);
  await typeIn(pg, ".modal input", "Sensorial");
  await clickText(pg, ".modal button", "Save");
  const d = await db(pg);
  if (!d.folders.includes("Montessori/Sensorial")) throw new Error(d.folders.join());
});

await flow("adaptive on → child sees next challenge / warm-up; teacher sees suggestions", async () => {
  const pg = await open("u-sa", "/sa/settings");
  await pg.evaluate(() => document.querySelector("[aria-label='Adaptive'] input").click());
  await clickText(pg, "button", "Save changes");
  const pg2 = await open("u-st-1", "/student");
  const t = await pg2.evaluate(() => document.body.innerText);
  if (!/Next challenge|Warm-up/.test(t)) throw new Error("no adaptive stone");
  const pg3 = await open("u-t1", "/teacher/students/st-1");
  const t3 = await pg3.evaluate(() => document.body.innerText);
  if (!t3.includes("Suggested next steps")) throw new Error("no teacher card");
});

await flow("permissions enforced: teacher class analytics off, parent performance off, principal export off", async () => {
  const pg = await open("u-sa", "/sa/permissions");
  const clickCell = async (row, col) => { await pg.evaluate((row, col) => { const tr = [...document.querySelectorAll("tbody tr")].find((r) => r.textContent.startsWith(row)); tr.querySelectorAll("td")[col].querySelector("button").click(); }, row, col); await sleep(200); };
  await clickCell("Class analytics", 3); // teacher yes → no
  await clickCell("Own performance", 2); // parent yes → no
  await clickCell("Export aggregated", 4); // principal yes → no
  await clickCell("Cross-school", 3); // teacher no → yes
  const t = await open("u-t1", "/teacher/analytics");
  const tt = await t.evaluate(() => document.body.innerText);
  if (!tt.includes("Not available with your access")) throw new Error("teacher analytics not locked");
  if (tt.includes("Class analytics\n")) {}
  const nav = await t.evaluate(() => [...document.querySelectorAll(".nav a")].map((a) => a.textContent));
  if (nav.includes("Class analytics") || !nav.includes("Network analytics")) throw new Error("nav: " + nav.join(","));
  const p = await open("pa-1", "/parent/progress");
  if (!(await p.evaluate(() => document.body.innerText)).includes("Not available")) throw new Error("parent progress not locked");
  const pr = await open("u-pr", "/principal/reports");
  if (await pr.evaluate(() => [...document.querySelectorAll("button")].some((b) => b.textContent.trim() === "CSV"))) throw new Error("export still shown");
  const tn = await open("u-t1", "/teacher/network");
  await tn.evaluate(() => document.querySelector("tbody tr.click").click()); await sleep(200);
  if (!(await tn.evaluate(() => document.body.innerText)).includes("never shown")) throw new Error("network note missing");
});

await flow("coordinator signs in and sees learning views", async () => {
  const pg = await open("u-co", "/coordinator");
  const t = await pg.evaluate(() => document.body.innerText);
  const tl = t.toLowerCase();
  if (!tl.includes("academic coordinator") || !tl.includes("school learning overview") || !tl.includes("thought for the day")) throw new Error(t.slice(0, 300));
  const pr = await open("u-pr", "/principal");
  if (!(await pr.evaluate(() => document.body.innerText)).toLowerCase().includes("welcome note from ezroots")) throw new Error("principal welcome strip missing");
});

await flow("v1 planner video logs events", async () => {
  const pg = await open("u-t1", "/teacher/planner?day=64&slot=Session%201");
  await pg.evaluate(() => { const v = document.querySelector("video"); v.muted = true; v.dispatchEvent(new Event("play")); });
  await sleep(300);
  const d = await db(pg);
  if (!d.events.some((e) => e.type === "video_watched")) throw new Error("no video event");
});

await flow("v1 weekly-use chart bars have height", async () => {
  const pg = await open("u-sa", "/sa");
  const h = await pg.evaluate(() => Math.max(...[...document.querySelectorAll(".bars .bar span")].map((s) => s.getBoundingClientRect().height)));
  if (!(h > 20)) throw new Error("bar height " + h);
});

await flow("garden: path stone hear-then-go → story → hold gate back to parent", async () => {
  const pg = await open("pa-1", "/parent");
  await clickText(pg, "button", "Open Aarav");
  await sleep(600);
  await pg.evaluate(() => document.querySelector(".ezgstone").click()); await sleep(200);
  if (!(await pg.evaluate(() => !!document.querySelector(".ezggo")))) throw new Error("no Go bubble after first tap");
  await clickText(pg, ".ezggo", "Go");
  await sleep(400);
  for (let i = 0; i < 4; i++) await clickText(pg, ".btn.lg", "▶");
  await sleep(400);
  const d = await db(pg);
  if (!Object.keys(d.storyReads ?? {}).some((k) => k.startsWith("st-1|"))) throw new Error("story not recorded");
  const box = await (await pg.$(".ezghold")).boundingBox();
  await pg.mouse.move(box.x + 20, box.y + 20); await pg.mouse.down(); await sleep(3300); await pg.mouse.up();
  await clickText(pg, "button", "Back to the parent portal");
  await sleep(400);
  if (!(await pg.evaluate(() => location.hash)).includes("/parent")) throw new Error("not back at parent");
});

await flow("garden: hands-on stone done → blooms; plant → seed packet → player with read-aloud", async () => {
  const pg = await open("u-st-1", "/student");
  const n = await pg.evaluate(() => document.querySelectorAll(".ezgstone").length);
  await pg.evaluate((n) => document.querySelectorAll(".ezgstone")[n - 1].click(), n); await sleep(200);
  await clickText(pg, ".ezggo", "Go");
  await clickText(pg, ".modal button", "I did it");
  await sleep(300);
  if (!(await pg.evaluate((n) => document.querySelectorAll(".ezgstone")[n - 1].classList.contains("done"), n))) throw new Error("stone did not bloom");
  await pg.goto(pg.url().replace(/#.*/, "#/student/garden")); await sleep(500);
  await pg.evaluate(() => document.querySelector(".ezgplantbtn").click()); await sleep(200);
  await pg.evaluate(() => document.querySelector(".ezgpacket").click()); await sleep(200);
  await clickText(pg, ".ezggo", "Go"); await sleep(500);
  if (!(await pg.evaluate(() => !!document.querySelector(".ezsay.fixed") && !!document.querySelector(".game")))) throw new Error("player/read-aloud missing");
});

await flow("garden: memory lane day shows class plan + games", async () => {
  const pg = await open("u-st-1", "/student/days?d=61");
  const t = await pg.evaluate(() => document.body.innerText);
  if (!t.includes("Food to know") || !t.includes("Thick or Thin")) throw new Error(t.slice(0, 200));
});

await flow("read-aloud off by default; child top-bar switch and parent setting turn it on", async () => {
  const pg = await b.newPage(); pages.push(pg);
  await pg.evaluateOnNewDocument(() => { window.__spoken = []; const orig = speechSynthesis.speak.bind(speechSynthesis); speechSynthesis.speak = (u) => { window.__spoken.push(u.text); try { orig(u); } catch {} }; });
  await pg.goto(`${FILE}?as=u-st-1#/student`); await sleep(1200);
  let spoken = await pg.evaluate(() => window.__spoken);
  if (spoken.length) throw new Error("spoke by default: " + spoken.join(" | "));
  await pg.evaluate(() => document.querySelector(".ezgaudio").click()); await sleep(300);
  let d = await db(pg);
  if (d.kidAudioBy?.["st-1"] !== true) throw new Error("toggle not saved");
  await pg.reload(); await sleep(1200);
  spoken = await pg.evaluate(() => window.__spoken);
  if (!spoken.some((x) => x.startsWith("Hello Aarav"))) throw new Error("greeting not spoken when on: " + spoken.join(" | "));
  const pp = await open("pa-1", "/parent/settings");
  await pp.evaluate(() => document.querySelector("[aria-label='Read-aloud for Ananya'] input").click()); await sleep(300);
  d = await db(pp);
  if (d.kidAudioBy?.["st-51"] !== true || d.kidAudioBy?.["st-1"] !== true) throw new Error(JSON.stringify(d.kidAudioBy));
});

console.log(results.join("\n"));
await b.close();
