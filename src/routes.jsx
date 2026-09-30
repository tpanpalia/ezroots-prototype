// v2 app shell: navigation per role and the route table (replaces v1's AB/Mu).

function EzNav() {
  const { db, me } = b();
  if (!me) return [];
  // item[4] = permission needed; item[5] = true when the item needs full ("yes") access
  return EzNavRaw(db, me).filter((it) => !it[4] || (it[5] ? EzPerm(db, me.role, it[4]) === "yes" : EzAllowed(db, me, it[4])));
}
function EzNavRaw(db, me) {
  const unread = db.notices.filter((s) => s.to === me.id && !s.read).length;
  switch (me.role) {
    case "superadmin":
      return [
        ["/sa", "Overview", "home"],
        ["/sa/schools", "Schools", "users"],
        ["/sa/seat-requests", "Seat requests", "seat", db.seatRequests.filter((s) => s.status === "pending").length],
        ["/sa/packages", "Packages & features", "layers"],
        ["/sa/files", "Files & folders", "folder"],
        ["/sa/analytics", "Learning analytics", "chart"],
        ["/sa/curriculum", "Curriculum analytics", "activity"],
        ["/sa/permissions", "Access & permissions", "lock"],
        ["/sa/privacy", "Privacy & data", "shield", db.dataRequests.filter((r) => r.status === "Open").length],
        ["/sa/team", "EzRoots team", "users"],
        ["/sa/settings", "Platform settings", "settings"],
        ["/sa/notifications", "Notifications", "bell", unread],
      ];
    case "contentadmin":
      return [
        ["/ca", "Overview", "home"],
        ["/ca/tracks", "Tracks", "layers"],
        ["/ca/planner", "Curriculum planner", "calendar"],
        ["/ca/import", "Import planner", "upload"],
        ["/ca/lesson-plans", "Lesson plans", "book"],
        ["/ca/media", "Files & folders", "folder"],
        ["/ca/activities", "Activities", "star", db.activities.filter((a) => a.status === "review").length],
        ["/ca/insights", "Curriculum analytics", "activity"],
        ["/ca/training", "Teacher training", "play"],
        ["/ca/issues", "Content issues", "flag", db.issues.filter((s) => s.status === "open").length],
        ["/ca/notifications", "Notifications", "bell", unread],
      ];
    case "principal":
      return [
        ["/principal", "Overview", "home"],
        ["/principal/sections", "Classes & sections", "grid"],
        ["/principal/teachers", "Teachers", "users"],
        ["/principal/students", "Students", "user"],
        ["/principal/parents", "Parents", "heart"],
        ["/principal/seats", "Seats & packages", "seat"],
        ["/principal/implementation", "Implementation", "check"],
        ["/principal/reports", "Reports", "chart"],
        ["/principal/network", "Network analytics", "activity", 0, "crossSchool"],
        ["/principal/curriculum", "Curriculum analytics", "activity", 0, "curriculum", true],
        ["/principal/coordinators", "Academic coordinators", "users"],
        ["/principal/folder", "School resources", "folder"],
        ["/principal/settings", "Settings", "settings"],
        ["/principal/notifications", "Notifications", "bell", unread],
      ];
    case "coordinator":
      return [
        ["/coordinator", "Overview", "home"],
        ["/coordinator/implementation", "Implementation", "check"],
        ["/coordinator/reports", "Reports", "chart"],
        ["/coordinator/network", "Network analytics", "activity", 0, "crossSchool"],
        ["/coordinator/curriculum", "Curriculum analytics", "activity", 0, "curriculum", true],
        ["/coordinator/teachers", "Teachers & training", "users"],
        ["/coordinator/folder", "School resources", "folder"],
        ["/coordinator/notifications", "Notifications", "bell", unread],
      ];
    case "teacher":
      return [
        ["/teacher", "Today", "home"],
        ["/teacher/planner", "Planner", "calendar"],
        ["/teacher/library", "Library", "folder"],
        ["/teacher/assignments", "Assignments", "star"],
        ["/teacher/students", "Students", "users"],
        ["/teacher/observations", "Observations", "eye"],
        ["/teacher/analytics", "Class analytics", "chart", 0, "classAnalytics"],
        ["/teacher/school", "School analytics", "chart", 0, "schoolAnalytics"],
        ["/teacher/network", "Network analytics", "activity", 0, "crossSchool"],
        ["/teacher/curriculum", "Curriculum analytics", "activity", 0, "curriculum", true],
        ["/teacher/assessments", "Assessments", "file"],
        ["/teacher/training", "Training", "play"],
        ["/teacher/offline", "Offline lessons", "down"],
        ["/teacher/notifications", "Notifications", "bell", unread],
      ];
    case "parent":
      return [
        ["/parent", "Home", "home"],
        ["/parent/weekly", "Weekly summary", "file", 0, "ownPerformance"],
        ["/parent/progress", "Progress", "chart", 0, "ownPerformance"],
        ["/parent/activities", "Activities", "star", 0, "ownActivity"],
        ["/parent/diary", "Class diary", "calendar", 0, "ownActivity"],
        ["/parent/notes", "Teacher notes", "message"],
        ["/parent/try", "Try at home", "heart"],
        ["/parent/portfolio", "Portfolio", "grid", 0, "childDetail"],
        ["/parent/report", "Learning report", "book", 0, "childDetail"],
        ["/parent/settings", "Settings & privacy", "settings"],
        ["/parent/notifications", "Notifications", "bell", unread],
      ];
    default:
      return [];
  }
}

/* When a student leaves, keep parents who still have other children (siblings). */
function EzLeaverUsers(d, studentId, deleteAll) {
  for (const u of [...d.users]) {
    if (u.role === "student" && u.childId === studentId) {
      if (deleteAll) d.users = d.users.filter((x) => x.id !== u.id);
      else u.active = false;
    }
    if (u.role === "parent" && EzParentChildIds(u).includes(studentId)) {
      const rest = EzParentChildIds(u).filter((x) => x !== studentId);
      if (rest.length) {
        u.childIds = rest;
        u.childId = rest[0];
      } else if (deleteAll) d.users = d.users.filter((x) => x.id !== u.id);
      else u.active = false;
    }
  }
}

function EzPrincipalFiles() {
  const { me } = b();
  return <EzSchoolFiles schoolId={me.schoolId} />;
}

const EzDirList = [
  ["Shared", "", [["/login", "Sign in (adult + child)"], ["/forgot", "Forgot password"]]],
  ["EzRoots Super Admin", "u-sa", [["/sa", "Overview · usage & alerts"], ["/sa/schools", "Schools"], ["/sa/files", "Files & folders"], ["/sa/analytics", "Learning analytics drill-down"], ["/sa/curriculum", "Curriculum analytics"], ["/sa/permissions", "Access & permissions"], ["/sa/privacy", "Privacy & data"], ["/sa/settings", "Platform settings"]]],
  ["EzRoots Content Admin", "u-ca", [["/ca", "Overview"], ["/ca/planner", "Curriculum planner"], ["/ca/media", "Files & folders"], ["/ca/activities", "Activities"], ["/ca/activities/new", "Activity builder"], ["/ca/insights", "Curriculum analytics"], ["/ca/issues", "Content issues"]]],
  ["Principal", "u-pr", [["/principal", "Overview & learning"], ["/principal/reports", "Reports"], ["/principal/parents", "Parents & consent"], ["/principal/folder", "School resources"], ["/principal/settings", "Settings & child sign-in"]]],
  ["Teacher", "u-t1", [["/teacher", "Today · welcome · early support"], ["/teacher/analytics", "Class analytics"], ["/teacher/students/st-1", "Child view (Aarav)"], ["/teacher/library", "Library & school resources"], ["/teacher/training", "Training"], ["/teacher/planner", "Planner"]]],
  ["Child", "u-st-1", [["/student", "My day (path)"], ["/student/garden", "My garden"], ["/student/days", "Memory lane"], ["/student/stories", "Story nook"], ["/student/story/st-sunmoon", "Read-along story"], ["/student/play/as-3", "Activity player"], ["/student/things", "My things"]]],
  ["Parent (2 children)", "pa-1", [["/parent", "Home"], ["/parent/weekly", "Weekly summary"], ["/parent/progress", "Progress"], ["/parent/try", "Try at home"], ["/parent/portfolio", "Portfolio"], ["/parent/report", "Learning report"], ["/parent/settings", "Settings & privacy"]]],
  ["Parent (new invite)", "pa-2", [["/parent", "Verify & consent flow"]]],
  ["Academic Coordinator", "u-co", [["/coordinator", "Overview"], ["/coordinator/reports", "Reports"], ["/coordinator/teachers", "Teachers & training"]]],
];
function EzDirectory() {
  const { update } = b();
  const nav = H();
  return (
    <div className="main">
      <W eyebrow="Prototype v2" title="Screen directory" sub="Clicking a link signs you in as that role." />
      <div className="dirgrid">
        {EzDirList.map(([title, uid, links]) => (
          <div key={title} className="card pad">
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            {links.map(([path, label]) => (
              <a key={path} href={`#${path}`} onClick={(e) => { e.preventDefault(); if (uid) update((d) => { d.userId = uid; }); nav(path); }}>{label}</a>
            ))}
          </div>
        ))}
      </div>
      <EzDemoNote>Planner, lesson plan and video titles are EzRoots’ real samples; the files are short stand-ins. Schools, people, scores and history are invented demo data. Child-level history exists for Sunrise Montessori; other schools are summaries.</EzDemoNote>
    </div>
  );
}

function EzApp() {
  const R = (path, Comp, props) => EzH(G, { key: path, path, element: EzH(Comp, props ?? null) });
  const I = (Comp) => EzH(G, { key: "index", index: true, element: EzH(Comp) });
  const guard = (role, el) => EzH(pE, { role }, el);
  const RG = (path, perm, Comp, props) => EzH(G, { key: path, path, element: EzH(EzGate, { perm }, EzH(Comp, props ?? null)) });
  const RY = (path, perm, Comp, props) => EzH(G, { key: path, path, element: EzH(EzGateFull, { perm }, EzH(Comp, props ?? null)) });
  return EzH(Iu, null,
    EzH(iu, { future: { v7_startTransition: true, v7_relativeSplatPath: true } },
      EzH(ju),
      EzH(EzSessionWatcher),
      EzH(EzAssistantRoot),
      EzH(Hd, null,
        R("/", Oo),
        R("/login", EzLogin),
        R("/forgot", yu),
        R("/directory", EzDirectory),
        R("/reviews", Uu),
        EzH(G, { key: "sb", path: "/teacher/smartboard/:day", element: guard("teacher", EzH(Ou)) }),
        EzH(G, { key: "sa", path: "/sa", element: guard("superadmin", EzH(fu)) },
          I(EzSAHome), R("schools", Zh), R("schools/new", Gh), R("schools/:id", yh), R("seat-requests", vh), R("packages", Rh), R("team", Yh),
          R("files", EzFileManager), R("analytics", EzSAAnalytics), R("curriculum", EzCurriculumAnalytics), R("permissions", EzPermissions), R("privacy", EzPrivacy), R("settings", EzPlatformSettings), ...Qn),
        EzH(G, { key: "ca", path: "/ca", element: guard("contentadmin", EzH(fu)) },
          I(Uh), R("tracks", Fh), R("planner", Th), R("planner/day/:day", Vh), R("import", Lh), R("lesson-plans", Ph), R("lesson-plans/:id", Oh),
          R("media", EzFileManager), R("school-folders", EzFileManager), R("activities", Xh), R("activities/new", EzActivityBuilder), R("insights", EzCurriculumAnalytics), R("training", $h), R("issues", _h), ...Qn),
        EzH(G, { key: "pr", path: "/principal", element: guard("principal", EzH(fu)) },
          I(EzPrincipalHome), R("sections", wh), R("teachers", Dh), R("students", Mh), R("parents", EzPrincipalParents), R("seats", Sh), R("implementation", kh),
          R("reports", EzPrincipalReports), R("folder", EzPrincipalFiles), R("settings", EzPrincipalSettings),
          RG("network", "crossSchool", EzSAAnalytics, { network: true }), RY("curriculum", "curriculum", EzCurriculumAnalytics), R("coordinators", EzCoordinators), ...Qn),
        EzH(G, { key: "co", path: "/coordinator", element: guard("coordinator", EzH(fu)) },
          I(EzPrincipalHome), R("implementation", kh), R("reports", EzPrincipalReports), R("teachers", EzCoordinatorTeachers), R("folder", EzPrincipalFiles),
          RG("network", "crossSchool", EzSAAnalytics, { network: true }), RY("curriculum", "curriculum", EzCurriculumAnalytics), ...Qn),
        EzH(G, { key: "te", path: "/teacher", element: guard("teacher", EzH(fu)) },
          I(EzTeacherHome), R("planner", Tu), R("library", EzTeacherLibrary), R("assignments", Xu), R("assignments/new", Hu), R("students", qu), RG("students/:id", "childDetail", EzTeacherStudent),
          R("observations", _u), RG("analytics", "classAnalytics", EzClassAnalytics), RG("school", "schoolAnalytics", EzSchoolAnalytics),
          RG("network", "crossSchool", EzSAAnalytics, { network: true }), RY("curriculum", "curriculum", EzCurriculumAnalytics), R("assessments", eh), R("training", EzTeacherTraining), R("offline", nh), ...Qn),
        EzH(G, { key: "st", path: "/student", element: guard("student", EzH(EzGardenShell)) },
          I(EzDayPath), R("garden", EzGardenPage), R("days", EzMemoryLane), R("things", EzMyThings), R("stories", EzStoryShelf), R("story/:id", EzStoryReader),
          R("play/:id", EzGardenPlay), R("creations", EzChildCreations), R("progress", EzMyThings), R("stars", EzMyThings), R("done", EzMyThings), R("explore", EzGardenPage)),
        EzH(G, { key: "pa", path: "/parent", element: guard("parent", EzH(EzParentGate, null, EzH(fu))) },
          I(EzParentHome), RG("weekly", "ownPerformance", EzParentWeekly), RG("diary", "ownActivity", Ih), RG("activities", "ownActivity", dh), RG("progress", "ownPerformance", EzParentProgress), R("notes", EzParentNotes), R("try", EzParentTry),
          RG("portfolio", "childDetail", EzParentPortfolio), RG("report", "childDetail", EzParentReport), R("settings", EzParentSettings), ...Qn),
        R("*", Oo),
      ),
    ),
  );
}
