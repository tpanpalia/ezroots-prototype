import puppeteer from "puppeteer-core";
const FILE = new URL("../dist/EzRoots-Prototype-v2.html", import.meta.url).href;
const OUT = new URL("./shots/", import.meta.url).pathname;
import fs from "fs";
fs.mkdirSync(OUT, { recursive: true });
const routes = {
  "u-sa": ["/sa", "/sa/schools", "/sa/schools/sch-sunrise", "/sa/seat-requests", "/sa/packages", "/sa/files", "/sa/analytics", "/sa/curriculum", "/sa/permissions", "/sa/privacy", "/sa/team", "/sa/settings", "/sa/notifications"],
  "u-ca": ["/ca", "/ca/tracks", "/ca/planner", "/ca/planner/day/61", "/ca/import", "/ca/lesson-plans", "/ca/media", "/ca/activities", "/ca/activities/new", "/ca/insights", "/ca/training", "/ca/issues"],
  "u-pr": ["/principal", "/principal/sections", "/principal/teachers", "/principal/students", "/principal/parents", "/principal/seats", "/principal/implementation", "/principal/reports", "/principal/folder", "/principal/settings", "/principal/coordinators", "/principal/network"],
  "u-t1": ["/teacher", "/teacher/planner", "/teacher/planner?day=61&slot=Session%202", "/teacher/library", "/teacher/assignments", "/teacher/assignments/new", "/teacher/students", "/teacher/students/st-1", "/teacher/observations", "/teacher/analytics", "/teacher/assessments", "/teacher/training", "/teacher/offline", "/teacher/smartboard/61"],
  "u-t5": ["/teacher", "/teacher/analytics", "/teacher/school", "/teacher/network"],
  "u-co": ["/coordinator", "/coordinator/implementation", "/coordinator/reports", "/coordinator/teachers", "/coordinator/folder", "/coordinator/network"],
  "u-st-1": ["/student", "/student/garden", "/student/days", "/student/days?d=61", "/student/things", "/student/stories", "/student/story/st-sunmoon", "/student/play/as-3", "/student/creations"],
  "u-st-51": ["/student", "/student/garden", "/student/days", "/student/stories"],
  "pa-1": ["/parent", "/parent/weekly", "/parent/progress", "/parent/activities", "/parent/diary", "/parent/notes", "/parent/try", "/parent/portfolio", "/parent/report", "/parent/settings", "/parent/notifications"],
  "pa-2": ["/parent"],
  "": ["/login", "/directory", "/forgot"],
};
const only = process.argv[2];
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new", args: ["--allow-file-access-from-files"] });
let failures = 0;
for (const [uid, paths] of Object.entries(routes)) {
  if (only && uid !== only) continue;
  for (const p of paths) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1360, height: 900 });
    const errs = [];
    page.on("pageerror", (e) => errs.push("pageerror: " + e.message));
    page.on("console", (m) => { if (m.type() === "error") errs.push("console: " + m.text().slice(0, 300)); });
    await page.evaluateOnNewDocument(() => localStorage.clear());
    const url = `${FILE}${uid ? `?as=${uid}` : ""}#${p}`;
    await page.goto(url, { waitUntil: "load" });
    await new Promise((r) => setTimeout(r, 900));
    const txt = await page.evaluate(() => document.querySelector("#root")?.innerText?.slice(0, 160).replace(/\s+/g, " ") ?? "");
    const bad = errs.filter((e) => !/Failed to load resource|favicon|fonts.g|net::ERR/.test(e));
    const name = `${uid || "anon"}${p}`.replace(/[\/?=&%]/g, "_");
    await page.screenshot({ path: `${OUT}${name}.png`, fullPage: true });
    if (bad.length || txt.length < 20) failures++;
    console.log(`${bad.length ? "✗" : "✓"} ${uid} ${p} :: ${txt.slice(0, 90)}`);
    for (const e of bad.slice(0, 4)) console.log("    " + e);
    await page.close();
  }
}
await browser.close();
console.log(failures ? `${failures} failing` : "all ok");
