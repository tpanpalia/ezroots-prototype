# EzRoots prototype v2

Clickable prototype extending `EzRoots-Prototype-v1.html` to cover the requirements PDF
("LMS requirement details") and the 28 Sep discovery call summary. Sample data, no backend;
state lives in the browser (`localStorage` key `ezroots-prototype-v2`, "Reset demo" restores it).

Open `dist/EzRoots-Prototype-v2.html` in a browser. Use **Screen directory** in the top bar
to jump to any screen as any role.

## Build

```
python3 build.py        # needs node (npx esbuild)
```

- `base/` – the v1 bundle split into React/libs (`lib.js`), v1 app code (`app.js`), embedded sample files (`b64.json`) and HTML shell. Not edited by hand.
- `patches.json` – the small, exact edits made to v1 code (seed hook, nav, parent child id, leaver flow, sign-in list).
- `src/*.jsx` – all v2 code, compiled into the same module scope as v1. `routes.jsx` holds the route table and navigation for every role.
- `src/ez.css` – v2 styles, appended to the v1 stylesheet.

Saved demo data is replaced automatically when `EzBuild` (src/seed.jsx) changes; the build number shows in the top bar.

If the v1 source repository turns up, port `src/` and `patches.json` into it rather than keeping this split build.

## Tests

Headless Chrome checks every screen as every role (`smoke`) and runs the key end-to-end flows (`flows`).

```
python3 build.py
cd tests && npm install
npm run smoke      # set CHROME_PATH if Chrome isn't in the default macOS location
npm run flows
```

## Gap status (PDF section → where it is)

| § | Requirement | v2 |
|---|---|---|
| 2 | Roles incl. Principal / Academic Coordinator | Super Admin, Content Admin (academic teams), Principal, Academic Coordinator (added by the principal; learning views, no admin), Teacher, Child, Parent |
| 3, 16 | Child profile incl. academic year; one parent, several children | `childIds` on parent; sidebar child switcher; Lakshmi → Aarav (Nursery A) + Ananya (Grade 1 A) |
| 4 | Age-appropriate child login | Login → "I'm a child": school code → class → picture → picture PIN; QR card; username/password; parent-assisted ("Open Aarav's learning app"); SSO listed. Method set per class in Principal → Settings |
| 5 | Child dashboard | Garden design (EzRoots’ own): **My day** – a winding path of stepping stones in the order of the day (story/rhyme, teacher-enabled games, adaptive challenge, hands-on task); next stone glows, finished stones bloom. **My garden** – subject beds, one plant per concept growing with practice (seed → sprout → bud → flower), tap a plant for its seed packets. **Memory lane** – the classroom planner’s days; hear what the class did and play that day’s games. **My things** – badges and creations. Story nook (Platform settings switch). Hear-then-go on every item; read-aloud off by default, switched on per child (🔇 in the child top bar, grown-ups corner, or parent Settings); hold-to-open grown-ups corner |
| 6, 8 | Activity types A–N | Drag & drop, match, sort, sequence, multiple choice, tap & identify, connect, pattern, puzzle, virtual manipulative (ten frame), drawing, tracing, listening (read aloud), image-based, scenario, creative writing, say-it (speech, preview). Nursery → Grade 2 samples |
| 7 | Physical + digital reflection | Optional reflection step ("I found ___ straight lines") saved to attempt + portfolio, visible to teacher and parent |
| 9 | Activity builder without developers | CA → Activities → New: type → details (concept, objective, package) → questions/answers/correct/hints/feedback/images → child preview → review → approve |
| 10, 38, 39 | Structured results & events | Per attempt: start, completion, time, tries, score, correct/incorrect/skipped, hints, retries, completion %, responses. Events: login/logout, started/paused/completed, answered/skipped/hint, resource viewed/downloaded, video watched/completed (including v1 planner, library and smartboard videos and lesson plans). Pause → resume |
| 11 | Time analytics, active vs idle | Learning sessions with active/idle seconds (live tracker in child app); daily/weekly/monthly buckets |
| 12 | Activity preference | By activity type: plays, completion, average; labelled "engagement, not personality" |
| 13–15 | Concept understanding %, indicator, trend | Transparent, configurable method (Platform settings); mastery map; month-by-month trend |
| 17–19 | Parent dashboard, analytics, weekly summary | Home (last 7 days), Progress, Weekly summary (strengths, practising, favourite type, try at home), Gold+ |
| 20, 44 | Controlled parent–teacher notes | Typed notes (note, home activity, milestone, practice area, encouragement); parent can acknowledge; no chat |
| 21–23, 40 | Teacher class & child views, actionable insights | Class analytics: active N of M, completion, performance, "X needs reinforcement… view affected children → recommended activities → assign" |
| 24–25 | Principal dashboard & school analytics | Learning overview, class table, grade/subject/teacher/training/curriculum reports, exports |
| 26 | EzRoots drill-down, usage by role, low-usage alerts | All schools → school → grade → subject → topic → concept → activity → child; teachers/children/parents usage; threshold alerts + "alert principal" |
| 27–28 | Curriculum analytics, effectiveness | CA/SA Curriculum analytics: the 8 questions + engagement × mastery quadrant |
| 30 | Configurable role access | SA → Access & permissions: every applicable cell is enforced (pages, nav, tabs, sections, exports); “What each cell controls” lists the effect per role. Coordinators follow the principal column |
| 31–33 | Privacy, consent, media | Invite → OTP → consent (§32); consent records; export/deletion requests; retention; audit log; India law mapping (for counsel); media private by default |
| 34–35 | Gamification & achievements | Badges tied to learning behaviour; parent notified; no leaderboards |
| 36 | Recommendations | Concept → EzRoots-approved activities + home ideas + teacher-led lesson plan |
| 37 | Adaptive | Off by default. When on: two Strong results in a row → harder activity (or next class level); latest result needs support → easier warm-up. Children only get teacher-enabled activities; teachers see all suggestions with “Enable” |
| 41–43 | Early support, parent alerts, try at home | Teacher alerts (not using, concept support, dips, low engagement) auto-notified; parent notification preferences; concept-based Try at home with "share what we did" + photo |
| 45–46 | Portfolio, holistic report | Parent Portfolio; child My creations; printable learning report (parent + teacher) |
| 47–48 | Exports & visualisation | CSV / Excel (.xlsx) / PDF (print); progress bars, trend lines, mastery maps, quadrant |
| 52 | School Health Score | Weighted score, weights in Platform settings |
| 53 | Hosting | Platform health card (sample values); real set-up is a vendor deliverable |
| 54–55 | Admin file management, school access, download control | Files & folders: create folders and sub-folders (“New folder / sub-folder” with location, “+ Sub-folder” on each row and in folder details), rename/delete/copy/move folders and files, upload (size limit), replace with versions, details, search; School access matrix + package tier; per-file view/download; school users view-only; welcome note, quotes, recently added on teacher, principal and coordinator home |
| 56 | AI | "Ask EzRoots" preview (answers from curriculum + data, no generative AI); child say-it and photo-of-work sharing |

## Still open (need EzRoots)

1. Can children browse freely (Explore)? Built, switched off per school.
2. Screen learning below Grade 3 (call summary open item) vs home activities for KG.
3. Package names beyond Gold/Platinum; Bronze/Silver are placeholders.
4. Understanding % method and thresholds: v2 defaults (80/60, 70:30 activity:assessment, 90 days).
5. Principal access to child-level detail: default "Controlled" (school decides).
6. Parent notification channels (WhatsApp/SMS/email) and the grievance contact.
7. Legal review of the DPDP/CERT-In mapping; data residency in India.
8. Activity look-and-feel rules document and the 10–15 sample activities.
