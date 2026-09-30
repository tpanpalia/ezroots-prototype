  n == null && iA(!1);
  let { basename: s } = au(Er.useViewTransitionState),
    i = Gi(A, { relative: e.relative });
  if (!n.isTransitioning) return !1;
  let l = en(n.currentLocation.pathname, s) || n.currentLocation.pathname,
    r = en(n.nextLocation.pathname, s) || n.nextLocation.pathname;
  return or(i.pathname, r) != null || or(i.pathname, l) != null;
}
const Ae = "sch-sunrise",
  yi = [
    {
      id: "decimal-system",
      folder: "Arithmetic Videos",
      file: "Decimal system.mp4",
      title: "Decimal system",
      duration: "7:34",
      sizeMB: 548,
      level: "Grade 1",
    },
    {
      id: "addends-of-10",
      folder: "Arithmetic Videos",
      file: "Finding the addends of 10.mp4",
      title: "Finding the addends of 10",
      duration: "2:44",
      sizeMB: 190,
      level: "Grade 1",
    },
    {
      id: "more-or-less",
      folder: "Arithmetic Videos",
      file: "more or less lkg.mp4",
      title: "More or less",
      duration: "1:37",
      sizeMB: 112,
      level: "LKG",
    },
    {
      id: "shapes",
      folder: "Arithmetic Videos",
      file: "shapes.mp4",
      title: "Shapes",
      duration: "0:51",
      sizeMB: 61,
      level: "Nursery",
    },
    {
      id: "snail-counting",
      folder: "Arithmetic Videos",
      file: "snail counting.mp4",
      title: "Snail counting",
      duration: "1:41",
      sizeMB: 118,
      level: "Nursery",
    },
    {
      id: "dog-house",
      folder: "Concept videos",
      file: "Dog house.mp4",
      title: "Dog house",
      duration: "1:14",
      sizeMB: 87,
      level: "Nursery",
    },
    {
      id: "house-setup",
      folder: "Concept videos",
      file: "house setup.mp4",
      title: "House setup",
      duration: "1:08",
      sizeMB: 79,
      level: "Nursery",
    },
    {
      id: "parts-of-the-body",
      folder: "Concept videos",
      file: "parts of the body.mp4",
      title: "Parts of the body",
      duration: "1:24",
      sizeMB: 98,
      level: "Nursery",
    },
    {
      id: "senses-pin-wheel",
      folder: "Concept videos",
      file: "Senses pin wheel.mp4",
      title: "Senses pin wheel",
      duration: "1:06",
      sizeMB: 77,
      level: "Nursery",
    },
    {
      id: "ai-picture-card",
      folder: "Language videos",
      file: "ai picture card.mp4",
      title: '"ai" picture cards',
      duration: "1:33",
      sizeMB: 108,
      level: "Nursery",
    },
    {
      id: "ai-cards-61-62",
      folder: "Language videos",
      file: "Day 61 and 62 Ai CARDS.mp4",
      title: 'Day 61 & 62 "ai" cards',
      duration: "3:14",
      sizeMB: 237,
      level: "LKG",
    },
    {
      id: "i-spy-game",
      folder: "Language videos",
      file: "i spy game.mp4",
      title: "I spy game",
      duration: "7:58",
      sizeMB: 197,
      level: "Nursery",
    },
    {
      id: "sand-paper-x-m",
      folder: "Language videos",
      file: "sand paper x,m.mp4",
      title: "Sandpaper letters x, m",
      duration: "1:17",
      sizeMB: 90,
      level: "Nursery",
    },
    {
      id: "th-sounds",
      folder: "Language videos",
      file: "th sounds.mp4",
      title: '"th" sounds',
      duration: "0:54",
      sizeMB: 62,
      level: "LKG",
    },
  ],
  cu = {
    "61|Session 2": {
      lessonPlans: ["day-70-sorting-thick-vs-thin-real-objects-l1-lesson-plan"],
      activities: ["act-thick-thin"],
    },
    "61|Session 3": { activities: ["act-sun-pattern"] },
    "62|Circle Time": { videos: ["parts-of-the-body"] },
    "63|Session 1": {
      lessonPlans: ["simple-line-tracing-and-story-session-d-101"],
    },
    "63|Session 2": { activities: ["act-balance"] },
    "64|Session 1": {
      lessonPlans: ["day-42-sand-paper-tracing-m-x-l2-lesson-plan"],
      videos: ["sand-paper-x-m"],
      activities: ["act-sound-m"],
    },
    "64|Session 2": { activities: ["act-count-123"] },
    "65|Session 2": {
      lessonPlans: ["number-rods"],
      videos: ["snail-counting"],
      activities: ["act-count-123"],
    },
    "65|Session 3": { lessonPlans: ["month-3-level-3-concept-fun-friday"] },
    "66|Circle Time": { activities: ["act-seasons"], tier: "Gold" },
    "67|Session 3": {
      lessonPlans: ["evs-book-page-4"],
      videos: ["house-setup"],
    },
    "69|Session 2": { activities: ["act-thick-thin"] },
    "70|Session 1": {
      lessonPlans: [
        "day-53-recap-of-phonic-sounds-with-sample-words-l1-lesson-plan",
      ],
      videos: ["ai-picture-card"],
    },
    "72|Session 3": { activities: ["act-draw-umbrella"], tier: "Platinum" },
    "75|Session 3": { lessonPlans: ["month-3-level-3-concept-show-and-tell"] },
    "76|Circle Time": { lessonPlans: ["how-to-sneeze"] },
    "78|Session 2": { activities: ["act-balance"] },
    "79|Session 1": {
      lessonPlans: ["day-41-thematic-conversation-l2-lesson-plan"],
    },
    "80|Session 1": { videos: ["i-spy-game"] },
    "80|Session 2": { lessonPlans: ["number-rods"] },
  },
  Eu = [
    {
      id: "act-sun-pattern",
      title: "Sun Pattern",
      template: "pattern",
      level: "Nursery",
      subject: "Maths",
      concept: "Patterns",
      minutes: 4,
      tier: "Silver",
      status: "published",
      art: "☀ 🟠 ☀",
      blurb: "What comes next in the sunny pattern?",
      source: "EzRoots",
    },
    {
      id: "act-thick-thin",
      title: "Thick or Thin?",
      template: "sort",
      level: "Nursery",
      subject: "Maths",
      concept: "Thick & thin",
      minutes: 4,
      tier: "Silver",
      status: "published",
      art: "📕 📄",
      blurb: "Look at each object. Is it thick or thin?",
      source: "EzRoots",
    },
    {
      id: "act-balance",
      title: "Heavy or Light Balance",
      template: "balance",
      level: "Nursery",
      subject: "Science",
      concept: "Heavy & light",
      minutes: 5,
      tier: "Silver",
      status: "published",
      art: "🍎 ⚖ ☁",
      blurb: "Drag the apple and the cotton onto the balance.",
      source: "EzRoots",
    },
    {
      id: "act-sound-m",
      title: 'Sound Hunt: "m"',
      template: "sound",
      level: "Nursery",
      subject: "English",
      concept: "Phonics: m",
      minutes: 3,
      tier: "Silver",
      status: "published",
      art: "🐒 🌙 🥭",
      blurb: 'Tap every picture that starts with "m".',
      source: "EzRoots",
    },
    {
      id: "act-count-123",
      title: "Count 1, 2, 3",
      template: "count",
      level: "Nursery",
      subject: "Maths",
      concept: "Numbers 1–3",
      minutes: 3,
      tier: "Silver",
      status: "published",
      art: "1 2 3",
      blurb: "Count the objects and choose the number.",
      source: "EzRoots",
    },
    {
      id: "act-seasons",
      title: "Summer or Winter?",
      template: "sort",
      level: "Nursery",
      subject: "Science",
      concept: "Seasons",
      minutes: 4,
      tier: "Gold",
      status: "published",
      art: "🩳 🧣",
      blurb: "Which season do these clothes belong to?",
      source: "EzRoots",
    },
    {
      id: "act-draw-umbrella",
      title: "Draw an Umbrella",
      template: "drawing",
      level: "Nursery",
      subject: "Activities",
      concept: "Fine motor",
      minutes: 5,
      tier: "Platinum",
      status: "review",
      art: "☂ ✏",
      blurb: "Trace and colour an umbrella.",
      source: "EzRoots",
    },
  ],
  Ro = [
    "Aarav",
    "Diya",
    "Vihaan",
    "Anika",
    "Kabir",
    "Saanvi",
    "Ishaan",
    "Myra",
    "Arjun",
    "Kiara",
    "Reyansh",
    "Aadhya",
    "Vivaan",
    "Ira",
    "Advik",
    "Tara",
    "Rudra",
    "Meera",
    "Dhruv",
    "Anaya",
    "Krish",
    "Navya",
    "Aryan",
    "Pari",
    "Yash",
    "Riya",
    "Shaurya",
    "Zara",
    "Om",
    "Siya",
    "Neel",
    "Avni",
  ],
  Yo = [
    "Sharma",
    "Iyer",
    "Reddy",
    "Nair",
    "Menon",
    "Patel",
    "Khan",
    "Das",
    "Pillai",
    "Rao",
    "Gupta",
    "Joseph",
    "Singh",
    "Kumar",
    "Bose",
    "Varma",
  ],
  bo = [
    "Lakshmi",
    "Suresh",
    "Fatima",
    "Ramesh",
    "Deepa",
    "Arun",
    "Sneha",
    "Vikram",
    "Kavya",
    "Rahul",
    "Anjali",
    "Manoj",
    "Pooja",
    "Sanjay",
    "Nisha",
    "Imran",
  ],
  Wo = [
    ["Nursery", "A", 14],
    ["Nursery", "B", 12],
    ["LKG", "A", 12],
    ["UKG", "A", 12],
    ["Grade 1", "A", 10],
    ["Grade 2", "A", 8],
  ];
function Ss(A) {
  return A.toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.|\.$/g, "");
}
function wE() {
  const A = Wo.map(([h, d]) => ({
      id: `sec-${Ss(h)}-${d.toLowerCase()}`,
      schoolId: Ae,
      level: h,
      name: d,
    })),
    e = [
      {
        id: "u-sa",
        role: "superadmin",
        name: "Riya Thomas",
        username: "riya.admin",
        email: "riya@ezroots.in",
        active: !0,
      },
      {
        id: "u-sa2",
        role: "superadmin",
        name: "Karthik S",
        username: "karthik.admin",
        email: "karthik@ezroots.in",
        active: !0,
      },
      {
        id: "u-ca",
        role: "contentadmin",
        name: "Diya Raman",
        username: "diya.academics",
        email: "diya@ezroots.in",
        active: !0,
        team: "Kindergarten",
      },
      {
        id: "u-ca2",
        role: "contentadmin",
        name: "Arvind P",
        username: "arvind.maths",
        email: "arvind@ezroots.in",
        active: !0,
        team: "Maths",
      },
      {
        id: "u-ca3",
        role: "contentadmin",
        name: "Shreya M",
        username: "shreya.language",
        email: "shreya@ezroots.in",
        active: !0,
        team: "Language",
      },
      {
        id: "u-pr",
        role: "principal",
        name: "Kavitha Rao",
        username: "sunrise.principal",
        email: "principal@sunrise.edu.in",
        schoolId: Ae,
        active: !0,
      },
      {
        id: "u-t1",
        role: "teacher",
        name: "Anita Menon",
        username: "anita.menon",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-nursery-a", subject: "Activities" },
          { sectionId: "sec-nursery-a", subject: "English" },
          { sectionId: "sec-nursery-a", subject: "Maths" },
          { sectionId: "sec-nursery-a", subject: "Science" },
          { sectionId: "sec-nursery-b", subject: "English" },
        ],
      },
      {
        id: "u-t2",
        role: "teacher",
        name: "Farah Khan",
        username: "farah.khan",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-nursery-b", subject: "Activities" },
          { sectionId: "sec-nursery-b", subject: "Maths" },
          { sectionId: "sec-nursery-b", subject: "Science" },
        ],
      },
      {
        id: "u-t3",
        role: "teacher",
        name: "Meena Iyer",
        username: "meena.iyer",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-lkg-a", subject: "Activities" },
          { sectionId: "sec-lkg-a", subject: "English" },
          { sectionId: "sec-lkg-a", subject: "Maths" },
          { sectionId: "sec-lkg-a", subject: "Science" },
        ],
      },
      {
        id: "u-t4",
        role: "teacher",
        name: "Joseph D'Souza",
        username: "joseph.dsouza",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-ukg-a", subject: "Activities" },
          { sectionId: "sec-ukg-a", subject: "English" },
          { sectionId: "sec-ukg-a", subject: "Maths" },
          { sectionId: "sec-ukg-a", subject: "Science" },
        ],
      },
      {
        id: "u-t5",
        role: "teacher",
        name: "Ravi Kumar",
        username: "ravi.kumar",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-grade.1-a", subject: "Maths" },
          { sectionId: "sec-grade.2-a", subject: "Maths" },
        ],
      },
      {
        id: "u-t6",
        role: "teacher",
        name: "Priya Nair",
        username: "priya.nair",
        schoolId: Ae,
        active: !0,
        teaches: [
          { sectionId: "sec-grade.1-a", subject: "English" },
          { sectionId: "sec-grade.1-a", subject: "Science" },
          { sectionId: "sec-grade.2-a", subject: "English" },
          { sectionId: "sec-grade.2-a", subject: "Science" },
        ],
      },
    ],
    n = [];
  let s = 0;
  for (const h of A) {
    const d = Wo.find(([I, w]) => h.level === I && h.name === w)[2];
    for (let I = 0; I < d; I++, s++) {
      const w = Ro[s % Ro.length],
        D = Yo[(s * 7) % Yo.length],
        j = `${w} ${D}`,
        J = `st-${s + 1}`,
        M = `pa-${s + 1}`;
      (n.push({
        id: J,
        name: j,
        sectionId: h.id,
        parentId: M,
        status: "active",
        username: `${Ss(w)}.${Ss(D)}${s + 1}`,
      }),
        e.push({
          id: M,
          role: "parent",
          name: `${bo[s % bo.length]} ${D}`,
          username: `parent.${Ss(w)}${s + 1}`,
          schoolId: Ae,
          active: !0,
          childId: J,
        }));
    }
  }
  n[0] = { ...n[0], name: "Aarav Sharma", username: "aarav.sharma" };
  const i = e.find((h) => h.id === n[0].parentId);
  ((i.name = "Lakshmi Sharma"), (i.username = "lakshmi.sharma"));
  for (const h of n)
    e.push({
      id: `u-${h.id}`,
      role: "student",
      name: h.name,
      username: h.username,
      schoolId: Ae,
      active: !0,
      childId: h.id,
    });
  const l = [
      {
        id: Ae,
        name: "Sunrise Montessori School",
        city: "Chennai",
        track: "CBSE",
        status: "active",
        principalId: "u-pr",
        studentSeats: 70,
        teacherSeats: 8,
        lastActive: "Today",
        packages: {
          Toddler: "Silver",
          Nursery: "Gold",
          LKG: "Gold",
          UKG: "Platinum",
          "Grade 1": "Platinum",
          "Grade 2": "Silver",
        },
      },
      {
        id: "sch-greenvalley",
        name: "Green Valley School",
        city: "Ooty",
        track: "CBSE",
        status: "active",
        lowNetwork: !0,
        studentSeats: 140,
        teacherSeats: 12,
        lastActive: "3 days ago",
        packages: { Nursery: "Gold", LKG: "Gold", UKG: "Gold" },
        summary: {
          students: 131,
          teachers: 10,
          engagement: 41,
          implementation: 38,
        },
      },
      {
        id: "sch-littleoaks",
        name: "Little Oaks Pre-School",
        city: "Bengaluru",
        track: "CBSE",
        status: "active",
        studentSeats: 220,
        teacherSeats: 18,
        lastActive: "Today",
        packages: {
          Toddler: "Platinum",
          Nursery: "Platinum",
          LKG: "Platinum",
          UKG: "Platinum",
        },
        summary: {
          students: 214,
          teachers: 17,
          engagement: 86,
          implementation: 82,
        },
      },
      {
        id: "sch-coorg",
        name: "Coorg Public School",
        city: "Madikeri",
        track: "CBSE",
        status: "active",
        lowNetwork: !0,
        studentSeats: 90,
        teacherSeats: 9,
        lastActive: "Yesterday",
        packages: { LKG: "Bronze", UKG: "Bronze", "Grade 1": "Silver" },
        summary: {
          students: 88,
          teachers: 8,
          engagement: 57,
          implementation: 61,
        },
      },
      {
        id: "sch-riverside",
        name: "Riverside International",
        city: "Hyderabad",
        track: "IB (custom)",
        status: "active",
        studentSeats: 160,
        teacherSeats: 14,
        lastActive: "Today",
        packages: {
          Nursery: "Platinum",
          "Grade 1": "Platinum",
          "Grade 2": "Platinum",
        },
        summary: {
          students: 149,
          teachers: 13,
          engagement: 79,
          implementation: 74,
        },
      },
    ],
    r = n.filter((h) => h.sectionId === "sec-nursery-a"),
    o = [
      {
        id: "as-1",
        sectionId: "sec-nursery-a",
        subject: "Maths",
        activityId: "act-thick-thin",
        mode: "class",
        due: "2026-09-25",
        studentIds: "all",
        createdBy: "u-t1",
        createdAt: "2026-09-25",
        day: 59,
      },
      {
        id: "as-2",
        sectionId: "sec-nursery-a",
        subject: "Maths",
        activityId: "act-sun-pattern",
        mode: "home",
        due: "2026-09-30",
        studentIds: "all",
        createdBy: "u-t1",
        createdAt: "2026-09-28",
        day: 60,
        note: "Try this with a family member after dinner.",
      },
      {
        id: "as-3",
        sectionId: "sec-nursery-a",
        subject: "English",
        activityId: "act-sound-m",
        mode: "home",
        due: "2026-10-02",
        studentIds: "all",
        createdBy: "u-t1",
        createdAt: "2026-09-28",
        day: 60,
      },
    ],
    a = [
      "Strong",
      "Strong",
      "Developing",
      "Strong",
      "Needs support",
      "Developing",
    ],
    g = [];
  r.forEach((h, d) => {
    (g.push({
      id: `at-a${d}`,
      studentId: h.id,
      activityId: "act-thick-thin",
      assignmentId: "as-1",
      score: [95, 88, 72, 90, 55, 68][d % 6],
      level: a[d % 6],
      timeSec: 150 + d * 13,
      tries: 1 + (d % 3),
      hints: d % 4 === 0 ? 1 : 0,
      date: "2026-09-25",
    }),
      d % 3 !== 2 &&
        d !== 0 &&
        g.push({
          id: `at-b${d}`,
          studentId: h.id,
          activityId: "act-sun-pattern",
          assignmentId: "as-2",
          score: [100, 84, 67, 92][d % 4],
          level: a[(d + 1) % 6],
          timeSec: 120 + d * 9,
          tries: 1 + (d % 2),
          hints: d % 5 === 0 ? 2 : 0,
          date: "2026-09-28",
        }));
  });
  const C = [
      {
        id: "ob-1",
        sectionId: "sec-nursery-a",
        studentId: r[0].id,
        subject: "Maths",
        concept: "Thick & thin",
        text: 'Aarav sorted the books and candles confidently and explained "this one is fat, so thick". Ready to try the tyres next.',
        shared: !0,
        date: "2026-09-25",
        teacherId: "u-t1",
      },
      {
        id: "ob-2",
        sectionId: "sec-nursery-a",
        subject: "Activities",
        concept: "Practical life",
        text: "Whole class practised carrying a heavy jug with two hands. Most children now wait for their turn without reminders.",
        shared: !1,
        date: "2026-09-24",
        teacherId: "u-t1",
      },
      {
        id: "ob-3",
        sectionId: "sec-nursery-a",
        studentId: r[4].id,
        subject: "English",
        concept: "Phonics: s, t",
        text: "Needs more practice hearing the /t/ sound at the start of words. Will pair with a buddy during picture-card sorting.",
        shared: !0,
        date: "2026-09-23",
        teacherId: "u-t1",
      },
    ],
    E = r.slice(0, 6).flatMap((h, d) => [
      {
        id: `sh-${h.id}-e`,
        studentId: h.id,
        term: "Term 1",
        subject: "English",
        result: a[d % 6],
        note: "Recognises s, a, t, p sounds.",
        date: "2026-09-18",
      },
      {
        id: `sh-${h.id}-m`,
        studentId: h.id,
        term: "Term 1",
        subject: "Maths",
        result: a[(d + 2) % 6],
        note: "Counts objects to 5.",
        date: "2026-09-18",
      },
    ]),
    c = {},
    m = ["Bronze", "Silver", "Gold", "Platinum"],
    u = [
      ["Planner, lesson plans & classroom videos", "Bronze"],
      ["Teacher training library", "Bronze"],
      ["Child interactive activities", "Silver"],
      ["Parent portal & class diary", "Silver"],
      ["Offline downloads for teachers", "Gold"],
      ["Parent weekly summary", "Gold"],
      ["Drawing & art content", "Platinum"],
      ["Advanced learning analytics", "Platinum"],
    ];
  for (const [h, d] of u)
    c[h] = Object.fromEntries(m.map((I) => [I, m.indexOf(I) >= m.indexOf(d)]));
  const Q = [
    ...yi.map((h) => ({
      id: `m-${h.id}`,
      folder: h.folder,
      name: h.file,
      kind: "video",
      sizeMB: h.sizeMB,
      download: !1,
      ref: h.id,
      processing: h.sizeMB > 150,
    })),
    {
      id: "m-planner-m4",
      folder: "Planners / Level 1 / Platinum",
      name: "Month 4 planner- Level 1-platinum 2026 - 27.xlsx",
      kind: "xls",
      sizeMB: 5.8,
      download: !1,
    },
    {
      id: "m-train-1",
      folder: "Teacher training",
      name: "Getting started with EzRoots.mp4",
      kind: "video",
      sizeMB: 64,
      download: !1,
    },
    {
      id: "m-school-1",
      folder: "School folders / Sunrise Montessori",
      name: "Sunrise annual day activity plan.pdf",
      kind: "pdf",
      sizeMB: 1.2,
      download: !0,
    },
  ];
  return {
    userId: null,
    offline: !1,
    users: e,
    schools: l,
    sections: A,
    students: n,
    seatRequests: [
      {
        id: "sr-1",
        schoolId: "sch-littleoaks",
        kind: "student",
        extra: 30,
        note: "New Toddler batch starting in October.",
        status: "pending",
        date: "2026-09-27",
      },
      {
        id: "sr-2",
        schoolId: "sch-coorg",
        kind: "teacher",
        extra: 2,
        note: "Two new LKG teachers joined.",
        status: "pending",
        date: "2026-09-26",
      },
    ],
    activities: Eu,
    assignments: o,
    attempts: g,
    observations: C,
    assessments: E,
    notices: [
      {
        id: "n-1",
        to: "u-t1",
        text: 'Content updated for Day 64: "Sound m" lesson plan replaced by EzRoots.',
        link: "/teacher/planner?day=64",
        date: "2026-09-28",
        read: !1,
      },
      {
        id: "n-2",
        to: "u-t1",
        text: '9 of 14 children finished "Sun Pattern" at home.',
        link: "/teacher/analytics",
        date: "2026-09-28",
        read: !1,
      },
      {
        id: "n-3",
        to: "u-t1",
        text: "New training module: Observing children during sorting activities.",
        link: "/teacher/training",
        date: "2026-09-26",
        read: !0,
      },
      {
        id: "n-4",
        to: "u-st-1",
        text: 'New home activity from Ms. Anita: Sound Hunt "m".',
        link: "/student",
        date: "2026-09-28",
        read: !1,
      },
      {
        id: "n-5",
        to: "pa-1",
        text: "Ms. Anita shared a note about Aarav.",
        link: "/parent/notes",
        date: "2026-09-25",
        read: !1,
      },
      {
        id: "n-6",
        to: "pa-1",
        text: 'New home activity for Aarav: Sound Hunt "m".',
        link: "/parent/activities",
        date: "2026-09-28",
        read: !1,
      },
      {
        id: "n-7",
        to: "u-pr",
        text: "Student seats: 68 of 70 used. Request more seats before admissions.",
        link: "/principal/seats",
        date: "2026-09-28",
        read: !1,
      },
      {
        id: "n-8",
        to: "u-sa",
        text: "Little Oaks Pre-School requested 30 more student seats.",
        link: "/sa/seat-requests",
        date: "2026-09-27",
        read: !1,
      },
      {
        id: "n-9",
        to: "u-ca",
        text: "Anita Menon reported an issue on Day 61 · Session 3.",
        link: "/ca/issues",
        date: "2026-09-28",
        read: !1,
      },
    ],
    issues: [
      {
        id: "is-1",
        day: 61,
        slot: "Session 3",
        text: "Sun pattern activity: planner says orange and yellow stickers but the kit has red and yellow.",
        by: "Anita Menon · Sunrise Montessori",
        date: "2026-09-28",
        status: "open",
      },
      {
        id: "is-2",
        day: 73,
        slot: "Circle Time",
        text: 'Day 73 row in the planner is labelled "Gr" instead of the day number.',
        by: "Import check",
        date: "2026-09-20",
        status: "fixed",
      },
    ],
    sessionState: {
      "sec-nursery-a": { "62|Session 3": "rescheduled" },
      "sec-nursery-b": { "61|Session 2": "skipped" },
    },
    reschedules: { "sec-nursery-a|62|Session 3": 65 },
    classPosition: {
      "sec-nursery-a": 63,
      "sec-nursery-b": 62,
      "sec-lkg-a": 58,
      "sec-ukg-a": 63,
      "sec-grade.1-a": 60,
      "sec-grade.2-a": 61,
    },
    notes: {},
    offlineSaved: [],
    features: c,
    tracks: ["CBSE", "IB (custom)", "IGCSE (custom)"],
    media: Q,
    links: cu,
    published: !0,
    feedback: [],
    schoolSettings: { minutesPerDay: 20, homeWindow: "4 pm – 7 pm" },
    teacherContext: { sectionId: "sec-nursery-a", subject: "All" },
  };
}
const mE = "ezroots-prototype-v1";
function Cu() {
  try {
    const A = localStorage.getItem(mE);
    if (A) return JSON.parse(A);
  } catch {}
  return wE();
}
const DE = B.createContext(null);
function Iu({ children: A }) {
  const [e, n] = B.useState(Cu),
    [s, i] = B.useState(null);
  (B.useEffect(() => {
    try {
      localStorage.setItem(mE, JSON.stringify(e));
    } catch {}
  }, [e]),
    B.useEffect(() => {
      if (!s) return;
      const g = setTimeout(() => i(null), 3200);
      return () => clearTimeout(g);
    }, [s]));
  const l = B.useCallback((g) => {
      n((C) => {
        const E = structuredClone(C);
        return (g(E), E);
      });
    }, []),
    r = B.useCallback(() => {
      const g = e.userId,
        C = wE();
      ((C.userId = g), (C.feedback = e.feedback), n(C), i("Demo data reset"));
    }, [e.userId, e.feedback]),
    o = B.useMemo(
      () => e.users.find((g) => g.id === e.userId) ?? null,
      [e.users, e.userId],
    ),
    a = B.useMemo(
      () => ({ db: e, me: o, update: l, reset: r, toast: i }),
      [e, o, l, r],
    );
  return t.jsxs(DE.Provider, {
    value: a,
    children: [
      A,
      s && t.jsx("div", { className: "toast", role: "status", children: s }),
    ],
  });
}
function b() {
  const A = B.useContext(DE);
  if (!A) throw new Error("useStore outside provider");
  return A;
}
const O = (A) => `${A}-${Math.random().toString(36).slice(2, 8)}`,
  du = "Level - 1 - Monthly Planner - Month 4 - Platinum",
  uu = [
    {
      week: 13,
      days: [
        {
          day: 61,
          sourceLabel: "Day 61",
          sessions: [
            {
              slot: "Circle Time",
              items: ["Food to know - Melon", "Introduce weather - Summer"],
              materials: "",
            },
            {
              slot: "Session 1",
              items: [
                "Rhymes + Individual conversation -How are you ? I am fine Thank you . What is your name? How to say excuse me? How to call the teachers - all recap.",
              ],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Recap thick/thin using real objects"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Sun pattern - Kinesthetic activity"],
              materials: "orange and yellow colour stickers",
            },
          ],
        },
        {
          day: 62,
          sourceLabel: "Day 62",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "How to takecare of themselves",
                "Talk about summer clothes",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Tracing activity using material"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number 1,2,3 tracing using sand paper."],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Design your dress EZP-W155"],
              materials: "",
            },
          ],
        },
        {
          day: 63,
          sourceLabel: "Day 63",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Food to know - Melon",
                "Talk about summer food and drinks",
              ],
              materials: "",
            },
            { slot: "Session 1", items: ["Story session"], materials: "" },
            {
              slot: "Session 2",
              items: ["Heavy /light worksheet from book EZ20M."],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Watermelon pluck card -Kinesthetic activity"],
              materials: "ice cream stick - 1",
            },
          ],
        },
        {
          day: 64,
          sourceLabel: "Day 64",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Recap- how to carry a heavy jug",
                "Talk about places to visit during summer",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ['Introducing sound "m" with alphabet card.'],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Practice number names 1,2,3"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Celebration - Teachers day"],
              materials: "",
            },
          ],
        },
        {
          day: 65,
          sourceLabel: "Day 65",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "An extra day to practice once again",
                "Talk about do's and dont's during summer + watermelon splash EZP-W157",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Story + Recap of sound s,t using picture cards"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number rods and number cards"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Fun friday - Melon kabab"],
              materials: "",
            },
          ],
        },
      ],
    },
    {
      week: 14,
      days: [
        {
          day: 66,
          sourceLabel: "Day 66",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "To learn about - flower festival",
                "Introduce weather - Winter",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ['Rhymes +Introducing sound "u" with alphabet card.'],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number 4,5,6 tracing using sand paper."],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Circle all the picture related to winter EZP-W160"],
              materials: "",
            },
          ],
        },
        {
          day: 67,
          sourceLabel: "Day 67",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "One to one pouring water + materials",
                "Talk about winter clothes",
              ],
              materials: "provide 2 cups",
            },
            {
              slot: "Session 1",
              items: ["Tracing activity using material"],
              materials: "",
            },
            { slot: "Session 2", items: ["Numbers oral 1-20"], materials: "" },
            {
              slot: "Session 3",
              items: [
                "EVS book page 7 + Decorating the skull cap (Kinaesthetic activity)",
              ],
              materials: "cotton balls, colour cut papers",
            },
          ],
        },
        {
          day: 68,
          sourceLabel: "Day 68",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "To learn about - flower festival",
                "Talk about winter food and drinks + Corny college EZP-W161",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Recap of sound using p,n picture cards"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number rods and number cards"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Celebration International literacy day"],
              materials: "",
            },
          ],
        },
        {
          day: 69,
          sourceLabel: "Day 69",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Recap-how to hold and lift a small sized glass",
                "Talk about places to visit during winter",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Practice tracing material"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Group activity to recap thick/thin"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Polar bear puppet experiential activity"],
              materials: "",
            },
          ],
        },
        {
          day: 70,
          sourceLabel: "Day 70",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "An extra day to practice once again",
                "Recap - week 1 and week 2",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Worksheet activity a,i"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Practice sand paper number Tracing 1,2,3,4,5,6"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: [
                "Physical activity…1.penguin walk or 2. Rain drop dance - drizzle (finger jump), heavy rain (jump tall)",
              ],
              materials: "",
            },
          ],
        },
      ],
    },
    {
      week: 15,
      days: [
        {
          day: 71,
          sourceLabel: "Day 71",
          sessions: [
            {
              slot: "Circle Time",
              items: ["Talk about flowers", "Introduce weather - Spring"],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ['Introducing sound "r" with alphabet cards'],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number 7,8,9,0 tracing using sand paper."],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Trace the rain EZP-W156"],
              materials: "",
            },
          ],
        },
        {
          day: 72,
          sourceLabel: "Day 72",
          sessions: [
            {
              slot: "Circle Time",
              items: ["How to offer a pencil", "Talk about spring clothing"],
              materials: "",
            },
            {
              slot: "Session 1",
              items: [
                "Rhymes + Individual conversation -how to walk,jump, hop..(intrdocuing action words walk, jump,hop)",
              ],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Practice sand paper number tracing 7,8,9,0"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Umbrella experiential activity"],
              materials:
                "(14 cms) designed paper plate - 1, pipe cleaner - 1/2",
            },
          ],
        },
        {
          day: 73,
          sourceLabel: "Gr",
          sessions: [
            {
              slot: "Circle Time",
              items: ["Talk about flowers", "Introduce - Weather Autumn"],
              materials: "",
            },
            {
              slot: "Session 1",
              items: [
                'Recap of sound "a","e","i","o" "s","t","p","n" by asking sample words and by giving words',
              ],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Introduction to counting cards set 1"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Flight of the dragon EZP-W159"],
              materials: "",
            },
          ],
        },
        {
          day: 74,
          sourceLabel: "Day 74",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Recap-how to observe a teacher",
                "Talk about autumn clothing",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Introduction to action words using material"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Number rods and number cards practice session"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Leaf rice experiential activity"],
              materials: "green colour rice",
            },
          ],
        },
        {
          day: 75,
          sourceLabel: "Day 75",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "An extra day to practice once again",
                "Talk about places to visit during Spring and autumn",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Worksheet activity e,o"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Trace the worksheet from book EZL06M"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Show and tell - Flowers or season"],
              materials: "",
            },
          ],
        },
      ],
    },
    {
      week: 16,
      days: [
        {
          day: 76,
          sourceLabel: "Day 76",
          sessions: [
            {
              slot: "Circle Time",
              items: ["How to cough", "Recap - All the weather"],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ['Introducing sound "d" with alphabet cards'],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Practice counting cards set 1"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Weather thoranam - experiential activity"],
              materials: "thick thread ( 30 cms) for thoranam",
            },
          ],
        },
        {
          day: 77,
          sourceLabel: "Day 77",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Recap-How to say thank you",
                "Recap - All weather clothing",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Story+Practice action words using material"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Trace the worksheet from book EZL7M"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["EVS book page - 8,9 + Four seasons EZP-W154"],
              materials: "",
            },
          ],
        },
        {
          day: 78,
          sourceLabel: "Day 78",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "How to use ink filer using material",
                "Recap - All weather foods and drinks + pineapple experiential activity",
              ],
              materials: "brown paper, ink filler",
            },
            {
              slot: "Session 1",
              items: ['Recap of Sound "m","u","r","d" with alphabet cards'],
              materials: "",
            },
            {
              slot: "Session 2",
              items: ["Heavy /light worksheet from book EZP21M"],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["The great seasonal sort EZP-W162"],
              materials: "",
            },
          ],
        },
        {
          day: 79,
          sourceLabel: "Day 79",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "Recap-how to yawn",
                "Classroom discussion - What is your favourite kinesthetic activity of the month",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: ["Scenic picture conversation ( any scenary from book)"],
              materials: "",
            },
            {
              slot: "Session 2",
              items: [
                "Practice counting cards+Trace the worksheet from book EZL08M",
              ],
              materials: "",
            },
            {
              slot: "Session 3",
              items: ["Sandals - experiential activity activity"],
              materials: "",
            },
          ],
        },
        {
          day: 80,
          sourceLabel: "Day 80",
          sessions: [
            {
              slot: "Circle Time",
              items: [
                "An extra day to practice once again",
                "Recap week 3 and week 4",
              ],
              materials: "",
            },
            {
              slot: "Session 1",
              items: [
                'Recap of sound "a","e","I","o" "s","t","p","n" by using picture cards',
              ],
              materials: "",
            },
            { slot: "Session 2", items: ["Recap number rods"], materials: "" },
            { slot: "Session 3", items: ["Movie"], materials: "" },
          ],
        },
      ],
    },
  ],
  hu = { title: du, weeks: uu },
  Bu = [
    {
      id: "day-50-revision-on-primary-colours-black-and-white-s2-lesson-plan",
      file: "Arithmetic/Day 50-Revision on Primary Colours black and white-s2 lesson plan.pdf",
      folder: "Arithmetic",
      title:
        "Discussion on finding realtime objects of red, blue ,yellow, black and white.",
      subject: "Arithmetic",
      level: 1,
      dayOrMonth: "Day 50",
      pages: 3,
      objectives:
        "Students will identify and discuss primary colors - red, blue, yellow, black and white - and find real-time objects that match these colors.",
    },
    {
      id: "day-70-sorting-thick-vs-thin-real-objects-l1-lesson-plan",
      file: "Arithmetic/Day 70-sorting Thick vs thin real objects-L1 lesson plan.pdf",
      folder: "Arithmetic",
      title: "Sorting thick and thin objects (real objects)",
      subject: "Arithmetic",
      level: 1,
      dayOrMonth: "Day 70",
      pages: 3,
      objectives:
        " Children will understand the concept of “thick” and “thin.”  Children will identify thickness differences in real objects.  Children will practice sorting objects into categories.  Children will develop observation and comparison skills.",
    },
    {
      id: "number-rods",
      file: "Arithmetic/Number Rods.pdf",
      folder: "Arithmetic",
      title: "Number Rods Introduction 1-4",
      subject: "Arithmetic",
      level: 1,
      dayOrMonth: "Day 21",
      pages: 3,
      objectives:
        "To recognize quantity and learn their names To remember the sequence of numbers from 1 to 10 To prepare himself for the metric system or Decimal system of Numeration",
    },
    {
      id: "teen-board-tens-l2-lesson-plan-1",
      file: "Arithmetic/Teen board- Tens-L2-Lesson plan (1).pdf",
      folder: "Arithmetic",
      title: "Teen board - Ten's Presentation",
      subject: "Arithmetic",
      level: 2,
      dayOrMonth: "Day 65",
      pages: 3,
      objectives:
        " To recognize and name the multiples of ten (10, 20, 30 … 90).  To understand that each ten is made of 10 units.  To reinforce the concept of place value (tens vs ones).  To prepare for addition, subtraction, and later decimal hierarchy.",
    },
    {
      id: "white-and-black-colour-tablets-l1-arithemtic-lesson-plan",
      file: "Arithmetic/White and black colour tablets-L1 arithemtic lesson plan.pdf",
      folder: "Arithmetic",
      title: "Introduction to black and white colours using colour Tablet.",
      subject: "Arithmetic",
      level: 1,
      dayOrMonth: "Month 1",
      pages: 2,
      objectives:
        " Recognize and name basic colours  Match and sort objects by colour  Begin identifying colour patterns  Expand vocabulary with colour names  Understand that colour is a property of objects.  Begin to relate colours to real-world items.",
    },
    {
      id: "month-3-level-2-friendship-day-celebration",
      file: "Celebration/month 3 - level 2 - Friendship Day Celebration.pdf",
      folder: "Celebration",
      title: "Friendship Day Celebration",
      subject: "Evs",
      level: 2,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        "● To introduce children to Friendship Day and why it is celebrated. ● To help children understand the qualities of a good friend and simple ways to celebrate friendship.",
    },
    {
      id: "month-3-level-2-independence-day-celebration-1",
      file: "Celebration/month 3 - level 2 - Independence day celebration (1).pdf",
      folder: "Celebration",
      title: "Independence Day Celebration",
      subject: "Evs",
      level: 2,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        "● To introduce children to Independence Day and why it is celebrated. ● To help children learn about the Indian flag and simple ways we celebrate this special day.",
    },
    {
      id: "evs-book-page-4",
      file: "Concept/EVS book page 4.pdf",
      folder: "Concept",
      title: "Explore the world of vehicles",
      subject: "Evs Book",
      level: 1,
      dayOrMonth: "Day 67",
      pages: 3,
      objectives:
        "Children will understand and apply traffic signal rules and colours to promote road safety and responsible behaviour.",
    },
    {
      id: "level-2-week-2-c-t-talk-about-which-room-each-child-uses",
      file: "Concept/LEVEL 2 WEEK 2 C.T(TALK ABOUT WHICH ROOM EACH CHILD USES).pdf",
      folder: "Concept",
      title: "Talk about which school room each child uses",
      subject: "Evs",
      level: 2,
      dayOrMonth: "Day 47",
      pages: 2,
      objectives: "Talk about which school room each child uses",
    },
    {
      id: "level-2-week-9-c-t-recap-of-all-week",
      file: "Concept/LEVEL 2 WEEK 9 C.T(RECAP OF ALL WEEK ).pdf",
      folder: "Concept",
      title: "Recap of the week Revisit the whole week lessons",
      subject: "Evs",
      level: 2,
      dayOrMonth: "Day 45",
      pages: 2,
      objectives: "Recap of the week Revisit the whole week lessons",
    },
    {
      id: "lp-level-1-circle-time-concept-squirrel-wrist-band-experiential-activity",
      file: "Concept/LP level 1 - circle time concept - Squirrel wrist band experiential activity.pdf",
      folder: "Concept",
      title: "Squirrel wrist band experiential activity",
      subject: "Circle Time",
      level: 1,
      dayOrMonth: "Month ANIMALS",
      pages: 2,
      objectives:
        "Children will develop fine motor control and tactile awareness by applying glue and spreading sand onto the squirrel wristband template.",
    },
    {
      id: "month-3-level-1-c-t-family-tree-kinesthetics-activity-week-10",
      file: "Concept/Month 3 - level 1 C.T - Family tree kinesthetics activity (week 10).pdf",
      folder: "Concept",
      title: "Family tree kinesthetics activity",
      subject: "Evs",
      level: 1,
      dayOrMonth: "Day 49",
      pages: 2,
      objectives: "Family tree kinesthetics activity",
    },
    {
      id: "month-3-0-level-1-c-t-parts-of-the-house-week-9",
      file: "Concept/Month 3 0- level - 1 - C.T - Parts of the house(week 9).pdf",
      folder: "Concept",
      title: "Talk about parts of the house",
      subject: "Evs",
      level: 1,
      dayOrMonth: "Day 43",
      pages: 2,
      objectives: "Talk about parts of the house",
    },
    {
      id: "month-3-level-3-concept-show-and-tell",
      file: "Friday activity/month 3 - level 3 - concept - show and tell.pdf",
      folder: "Friday activity",
      title: "Show and tell",
      subject: "Evs",
      level: 3,
      dayOrMonth: "Month 3",
      pages: 2,
      objectives:
        " Children will express ideas clearly and build confidence by presenting a topic-related item to peers.  Children will practice active listening and turn-taking by asking polite questions during presentations.",
    },
    {
      id: "month-3-level-3-physical-activity1",
      file: "Friday activity/Month 3 - level 3 - physical activity1.pdf",
      folder: "Friday activity",
      title: "Physical activity",
      subject: "Evs",
      level: 3,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        " Children will identify and locate different parts of their body in response to verbal prompts.  Children will develop body awareness, listening skills, and impulse control by freezing immediately when auditory cues stop",
    },
    {
      id: "colours-group-activity",
      file: "Group activity/Colours group activity.pdf",
      folder: "Group activity",
      title: "Colours- group activity.",
      subject: "Arithmetic",
      level: 1,
      dayOrMonth: "",
      pages: 2,
      objectives:
        " Children will identify the primary colours: red, blue, and yellow.  Children will improve listening and motor skills.  Children will respond correctly to colour-based instructions.",
    },
    {
      id: "month-3-level-1-group-activity-dress-up-freeze",
      file: "Group activity/month 3 - level 1 - Group activity - Dress-Up Freeze.pdf",
      folder: "Group activity",
      title: "Group activity - Dress-Up Freeze",
      subject: "Evs",
      level: 1,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        "● To develop gross motor skills and body awareness through pretend dressing actions. ● To practice listening skills and quick response to instructions, including stopping on cue.",
    },
    {
      id: "month-3-level-1-group-activity-room-to-room-walk",
      file: "Group activity/month 3 - level 1 - Group activity - Room to Room Walk.pdf",
      folder: "Group activity",
      title: "Group activity - Room to Room Walk",
      subject: "Evs",
      level: 1,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        "● To introduce children to different rooms in a house and their functions, through an active game. ● To develop listening skills, quick response, and imaginative role play.",
    },
    {
      id: "month-3-level-3-group-activity-morning-and-evening-in-my-house",
      file: "Group activity/month 3 - level 3 -  Group Activity - Morning and Evening in My House.pdf",
      folder: "Group activity",
      title: 'Group Activity - "Morning and Evening in My House"',
      subject: "Evs",
      level: 3,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        "● To develop imaginative group role-play and cooperation by acting out daily routines. ● To build vocabulary related to morning and evening activities at home.",
    },
    {
      id: "more-or-less-group-activity",
      file: "Group activity/More_or_Less_Group_Activity.pdf",
      folder: "Group activity",
      title: "More or Less — Group Activity: Team Hoop Sorting Game",
      subject: "Arithmetic",
      level: 2,
      dayOrMonth: "",
      pages: 2,
      objectives:
        "Group Activity: To identify and compare which group of objects has more or less quantity by working collaboratively in teams, using counting, comparison, and the vocabulary 'more', 'less', and 'same' during a hands-on game.",
    },
    {
      id: "alphabet-pinwheel-s-t-l2-lesson-plan-copy-1",
      file: "Language/Alphabet pinwheel s t-L2- Lesson plan(copy) (1).pdf",
      folder: "Language",
      title: 'Sorting activity of "s,t" sound Pin wheel material',
      subject: "Language",
      level: 2,
      dayOrMonth: "Day 52",
      pages: 4,
      objectives:
        " Recognize and identify alphabet letters S and T.  Associate letters with their initial sounds.  Develop phonemic awareness through sound analysis.  Improve fine motor skills by manipulating materials.",
    },
    {
      id: "day-41-thematic-conversation-l2-lesson-plan",
      file: "Language/Day 41-Thematic conversation-L2 Lesson plan.pdf",
      folder: "Language",
      title: "Thematic conversation.",
      subject: "Language",
      level: 2,
      dayOrMonth: "Day 41",
      pages: 3,
      objectives:
        "By the end of this lesson, students will be able to introduce themselves confidently by stating their name, father's name, mother's name, and their residence.",
    },
    {
      id: "day-42-sand-paper-tracing-m-x-l2-lesson-plan",
      file: "Language/Day 42-Sand paper tracing m x-L2 Lesson plan.pdf",
      folder: "Language",
      title: "Sand paper tracing and sound identification of “m” and “x”",
      subject: "Language",
      level: 2,
      dayOrMonth: "Day 42",
      pages: 3,
      objectives:
        " The direct purpose of the sandpaper letters is to teach the child letter sounds by means of muscular and visual memory.  To begin forming and reading three-letter short vowel phonetic words. Preparation for writing, reading, and spelling.",
    },
    {
      id: "day-53-recap-of-phonic-sounds-with-sample-words-l1-lesson-plan",
      file: "Language/Day 53- Recap  of phonic sounds with sample words-L1 Lesson plan.pdf",
      folder: "Language",
      title:
        'Recap of sound "a","e","i","O" by asking sample words and by giving words.',
      subject: "Language",
      level: 1,
      dayOrMonth: "Day 53",
      pages: 4,
      objectives:
        "Students will be able to identify and articulate the initial sounds of the letters A, E, I, and O, and recognize words that start with each of these sounds.",
    },
    {
      id: "day-154-sound-analysis-activity-using-find-the-last-sound-material-1",
      file: "Language/Day-154- Sound Analysis Activity using find the last sound Material (1).pdf",
      folder: "Language",
      title: "Find the last sound Material",
      subject: "Language",
      level: 2,
      dayOrMonth: "Day 154",
      pages: 2,
      objectives:
        "• Develop phonemic awareness by identifying the last sound in a spoken word. • Strengthen sound–symbol association by matching the ending sound to the correct alphabet. • Improve auditory discrimination through careful listening to word sounds. • Recognize and differentiate between various ending consonant sounds.",
    },
    {
      id: "simple-line-tracing-and-story-session-d-101",
      file: "Language/simple line tracing and story session D-101.pdf",
      folder: "Language",
      title:
        "Story session and Introducing simple tracing using finger material",
      subject: "English",
      level: 1,
      dayOrMonth: "Day 101",
      pages: 2,
      objectives:
        "*To develop listening and comprehension skills through storytelling. * To encourage students to respond to questions related to the story. * To develop fine motor skills and hand eye coordination. *To help children follow directions while tracing lines with fingers. * To enable children to recognize and trace different types of lines (straight, curved, zigzag).",
    },
    {
      id: "food-to-know",
      file: "Life skills/Food to know.pdf",
      folder: "Life skills",
      title: "Food to know-Quinoa",
      subject: "Evs",
      level: 3,
      dayOrMonth: "Day 41",
      pages: 3,
      objectives:
        "Food to know-Quinoa Introduce- Parts of the body using Kinesthetics material",
    },
    {
      id: "how-to-sneeze",
      file: "Life skills/How to sneeze.pdf",
      folder: "Life skills",
      title: "How to sneeze Talk about the things found in the school",
      subject: "Evs",
      level: 2,
      dayOrMonth: "Day 42",
      pages: 3,
      objectives: "How to sneeze Talk about the things found in the school",
    },
    {
      id: "level-2-circle-time-lifeskills-how-to-greet-an-adult",
      file: "Life skills/Level 2 - circle time lifeskills - How to greet an adult.pdf",
      folder: "Life skills",
      title: "How to greet an adult",
      subject: "Circle Time - Lifeskills",
      level: 2,
      dayOrMonth: "Month 3",
      pages: 2,
      objectives:
        " Learn how to greet visiting adults politely using respectful words and gestures.  Practice physical coordination and composure by performing the step-by-step Namaste gesture.",
    },
    {
      id: "month-3-level-3-concept-fun-friday",
      file: "Life skills/month 3 - level 3 - concept - Fun friday.pdf",
      folder: "Life skills",
      title: "Fun friday",
      subject: "Evs",
      level: 3,
      dayOrMonth: "Month 3",
      pages: 3,
      objectives:
        " Children will develop fine motor skills, hand strength, and sensory awareness by mixing, scooping, and assembling raw ingredients.  Children will build social skills, teamwork, and healthy eating habits by preparing and sharing a meal with peers and teachers.",
    },
  ],
  ks = {
    "Arithmetic/Day 50-Revision on Primary Colours black and white-s2 lesson plan.pdf":
      "__B64_0__",
    "Arithmetic/Day 70-sorting Thick vs thin real objects-L1 lesson plan.pdf":
      "__B64_1__",
    "Arithmetic/Number Rods.pdf":
      "__B64_2__",
    "Arithmetic/Teen board- Tens-L2-Lesson plan (1).pdf":
      "__B64_3__",
    "Arithmetic/White and black colour tablets-L1 arithemtic lesson plan.pdf":
      "__B64_4__",
    "Arithmetic Videos/Decimal system.mp4":
      "__B64_5__",
    "Arithmetic Videos/Finding the addends of 10.mp4":
      "__B64_6__",
    "Arithmetic Videos/more or less lkg.mp4":
      "__B64_7__",
    "Arithmetic Videos/shapes.mp4":
      "__B64_8__",
    "Arithmetic Videos/snail counting.mp4":
      "__B64_9__",
    "Celebration/month 3 - level 2 - Friendship Day Celebration.pdf":
      "__B64_10__",
    "Celebration/month 3 - level 2 - Independence day celebration (1).pdf":
      "__B64_11__",
    "Concept/EVS book page 4.pdf":
      "__B64_12__",
    "Concept/LEVEL 2 WEEK 2 C.T(TALK ABOUT WHICH ROOM EACH CHILD USES).pdf":
      "__B64_13__",
    "Concept/LEVEL 2 WEEK 9 C.T(RECAP OF ALL WEEK ).pdf":
      "__B64_14__",
    "Concept/LP level 1 - circle time concept - Squirrel wrist band experiential activity.pdf":
      "__B64_15__",
    "Concept/Month 3 - level 1 C.T - Family tree kinesthetics activity (week 10).pdf":
      "__B64_16__",
    "Concept/Month 3 0- level - 1 - C.T - Parts of the house(week 9).pdf":
      "__B64_17__",
    "Concept videos/Dog house.mp4":
      "__B64_18__",
    "Concept videos/house setup.mp4":
      "__B64_19__",
    "Concept videos/parts of the body.mp4":
      "__B64_20__",
    "Concept videos/Senses pin wheel.mp4":
      "__B64_21__",
    "Friday activity/month 3 - level 3 - concept - show and tell.pdf":
      "__B64_22__",
    "Friday activity/Month 3 - level 3 - physical activity1.pdf":
      "__B64_23__",
    "Group activity/Colours group activity.pdf":
      "__B64_24__",
    "Group activity/month 3 - level 1 - Group activity - Dress-Up Freeze.pdf":
      "__B64_25__",
    "Group activity/month 3 - level 1 - Group activity - Room to Room Walk.pdf":
      "__B64_26__",
    "Group activity/month 3 - level 3 -  Group Activity - Morning and Evening in My House.pdf":
      "__B64_27__",
    "Group activity/More_or_Less_Group_Activity.pdf":
      "__B64_28__",
    "Language/Alphabet pinwheel s t-L2- Lesson plan(copy) (1).pdf":
      "__B64_29__",
    "Language/Day 41-Thematic conversation-L2 Lesson plan.pdf":
      "__B64_30__",
    "Language/Day 42-Sand paper tracing m x-L2 Lesson plan.pdf":
      "__B64_31__",
    "Language/Day 53- Recap  of phonic sounds with sample words-L1 Lesson plan.pdf":
      "__B64_32__",
    "Language/Day-154- Sound Analysis Activity using find the last sound Material (1).pdf":
      "__B64_33__",
    "Language/simple line tracing and story session D-101.pdf":
      "__B64_34__",
    "Language videos/ai picture card.mp4":
      "__B64_35__",
    "Language videos/Day 61 and 62 Ai CARDS.mp4":
      "__B64_36__",
    "Language videos/i spy game.mp4":
      "__B64_37__",
    "Language videos/sand paper x,m.mp4":
      "__B64_38__",
    "Language videos/th sounds.mp4":
      "__B64_39__",
    "Life skills/Food to know.pdf":
      "__B64_40__",
    "Life skills/How to sneeze.pdf":
      "__B64_41__",
    "Life skills/Level 2 - circle time lifeskills - How to greet an adult.pdf":
      "__B64_42__",
    "Life skills/month 3 - level 3 - concept - Fun friday.pdf":
      "__B64_43__",
  },
  Mt = ["Toddler", "Nursery", "LKG", "UKG", "Grade 1", "Grade 2"],
  je = ["Bronze", "Silver", "Gold", "Platinum"],
  Ct = ["Activities", "English", "Maths", "Science"],
  Uo = ["Circle Time", "Session 1", "Session 2", "Session 3"],
  Ei = hu,
  tn = Bu,
  pe = Ei.weeks.flatMap((A) => A.days),
  uA = "2026-09-29",
  is = 63,
  ls = {
    superadmin: "/sa",
    contentadmin: "/ca",
    principal: "/principal",
    teacher: "/teacher",
    student: "/student",
    parent: "/parent",
  },
  qe = {
    superadmin: "EzRoots Super Admin",
    contentadmin: "EzRoots Content Admin",
    principal: "Principal",
    teacher: "Teacher",
    student: "Student",
    parent: "Parent",
  },
  Fo = (A) => encodeURIComponent(A).replace(/%2C/g, ","),
  Il = new Map();
function Qu(A) {
  if (ks != null && ks[A]) {
    if (!Il.has(A)) {
      const e = Uint8Array.from(atob(ks[A]), (n) => n.charCodeAt(0));
      Il.set(
        A,
        URL.createObjectURL(
          new Blob([e], {
            type: A.endsWith(".pdf") ? "application/pdf" : "video/mp4",
          }),
        ),
      );
    }
    return Il.get(A);
  }
}
const Ea = (A, e) => Qu(`${A}/${e}`) ?? `samples/${Fo(A)}/${Fo(e)}`,
  ze = (A) => tn.find((e) => e.id === A),
  JA = (A) => yi.find((e) => e.id === A),
  jt = {
    "Circle Time": "Activities",
    "Session 1": "English",
    "Session 2": "Maths",
    "Session 3": "Science",
  },
  Ca = {
    "Circle Time": "slot-ct",
    "Session 1": "slot-s1",
    "Session 2": "slot-s2",
    "Session 3": "slot-s3",
  },
  vi = {
    "Circle Time": "Circle",
    "Session 1": "S1",
    "Session 2": "S2",
    "Session 3": "S3",
  };
function ft(A) {
  return Math.ceil(A / 20);
}
function Ci(A) {
  return Math.ceil(A / 5);
}
function Qt(A) {
  const e = new Date(`${uA}T00:00:00`);
  let n = A - is;
  const s = n >= 0 ? 1 : -1;
  for (; n !== 0;)
    (e.setDate(e.getDate() + s),
      e.getDay() !== 0 && e.getDay() !== 6 && (n -= s));
  return e;
}
const CA = (A, e = { day: "numeric", month: "short" }) =>
    (typeof A == "string" ? new Date(`${A}T00:00:00`) : A).toLocaleDateString(
      "en-IN",
      e,
    ),
  $e = (A, e) => `${A}|${e}`;
function Be(A, e, n, s) {
  var r;
  const i = A.classPosition[e] ?? is,
    l = (r = A.sessionState[e]) == null ? void 0 : r[$e(n, s)];
  return l || (n < i ? "done" : "pending");
}
function Ii(A, e) {
  return (A.classPosition[e] ?? is) - 1;
}
function _e(A, e) {
  return e ? (A ? je.indexOf(A) >= je.indexOf(e) : !1) : !0;
}
function z(A, e) {
  const n = A.sections.find((s) => s.id === e);
  return n ? `${n.level} – ${n.name}` : e;
}
function wu(A) {
  return A.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((e) => e[0])
    .join("")
    .toUpperCase();
}
function Cr(A, e) {
  return A.students.filter((n) => n.sectionId === e && n.status === "active");
}
function Ri(A, e) {
  const n = A.schools.find((i) => i.id === e);
  if (n != null && n.summary)
    return { students: n.summary.students, teachers: n.summary.teachers };
  const s = new Set(
    A.sections.filter((i) => i.schoolId === e).map((i) => i.id),
  );
  return {
    students: A.students.filter(
      (i) => s.has(i.sectionId) && i.status === "active",
    ).length,
    teachers: A.users.filter(
      (i) => i.role === "teacher" && i.schoolId === e && i.active,
    ).length,
  };
}
function gA(A, e) {
  return e ? Math.round((A / e) * 100) : 0;
}
const To = {
  home: "M3 10 12 3l9 7v10H3Z M9 20v-7h6v7",
  calendar: "M4 5h16v16H4Z M4 10h16 M9 3v4 M15 3v4",
  folder: "M3 7h7l2 2h9v11H3Z",
  book: "M12 5v16 M12 5C8 2 3 4 3 4v15s5-2 9 2c4-4 9-2 9-2V4s-5-2-9 1",
  play: "M8 5v14l12-7Z",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
  chart: "M4 20V10 M10 20V4 M16 20v-8 M22 20H2",
  check: "M4 12l5 5L20 6",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  bell: "M6 8a6 6 0 0 1 12 0v6l3 3H3l3-3Z M9 21h6",
  search: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14 M15 15l6 6",
  plus: "M12 5v14 M5 12h14",
  file: "M5 3h9l5 5v13H5Z M14 3v6h5",
  down: "M12 3v12 M7 10l5 5 5-5 M4 17v4h16v-4",
  up: "M12 21V9 M7 14l5-5 5 5 M4 7V3h16v4",
  shield: "M12 2 3 6v6c0 6 9 10 9 10s9-4 9-10V6Z",
  settings:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2",
  message: "M3 3h18v14H8l-5 4Z",
  star: "m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z",
  heart: "M12 20 3 11C-1 4 8 0 12 7c4-7 13-3 9 4Z",
  flag: "M5 22V3h13l-3 4 3 4H5",
  menu: "M3 6h18 M3 12h18 M3 18h18",
  x: "M6 6l12 12 M18 6 6 18",
  arrow: "M4 12h16 M14 6l6 6-6 6",
  back: "M20 12H4 M10 6l-6 6 6 6",
  logout: "M9 3H3v18h6 M8 12h13 M17 8l4 4-4 4",
  layers: "m12 2 10 5-10 5L2 7Z M2 12l10 5 10-5 M2 17l10 5 10-5",
  wifi: "M2 8a15 15 0 0 1 20 0 M5 12a10 10 0 0 1 14 0 M8.5 15.5a5 5 0 0 1 7 0 M12 19h.01",
  lock: "M5 11h14v10H5Z M8 11V7a4 4 0 0 1 8 0v4",
  tv: "M3 5h18v12H3Z M8 21h8 M12 17v4",
  edit: "M4 20h4L20 8l-4-4L4 16Z",
  trash: "M4 7h16 M9 7V4h6v3 M6 7l1 14h10l1-14",
  upload: "M12 16V4 M7 9l5-5 5 5 M4 20h16",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 7v5l3 2",
  seat: "M6 20v-6h12v6 M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",
  grid: "M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z",
  help: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 1-1 1.7 M12 17h.01",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
};
function S({ n: A, size: e }) {
  return t.jsx("span", {
    className: "icon",
    "aria-hidden": "true",
    style: e ? { width: e, height: e } : void 0,
    children: t.jsx("svg", {
      viewBox: "0 0 24 24",
      children: t.jsx("path", { d: To[A] ?? To.file }),
    }),
  });
}
function W({ eyebrow: A, title: e, sub: n, children: s }) {
  return t.jsxs("div", {
    className: "pagehead",
    children: [
      t.jsxs("div", {
        children: [
          A && t.jsx("div", { className: "eyebrow", children: A }),
          t.jsx("h1", { children: e }),
          n && t.jsx("p", { children: n }),
        ],
      }),
      s && t.jsx("div", { className: "actions", children: s }),
    ],
  });
}
function F({ label: A, value: e, sub: n, icon: s, tone: i, meter: l }) {
  return t.jsxs("div", {
    className: "card stat",
    children: [
      t.jsxs("div", {
        className: "label",
        children: [t.jsx("span", { children: A }), s && t.jsx(S, { n: s })],
      }),
      t.jsx("strong", { children: e }),
      n && t.jsx("small", { className: i, children: n }),
      l !== void 0 && t.jsx(TA, { v: l }),
    ],
  });
}
function TA({ v: A, tone: e }) {
  const n = e ?? (A >= 95 ? "bad" : A >= 85 ? "warn" : void 0);
  return t.jsx("div", {
    className: `meter ${n ?? ""}`,
    children: t.jsx("span", { style: { width: `${Math.min(100, A)}%` } }),
  });
}
function v({ children: A, tone: e }) {
  return t.jsx("span", { className: `pill ${e ?? ""}`, children: A });
}
function At({ level: A }) {
  const e =
    A === "Strong"
      ? "good"
      : A === "Developing"
        ? "warn"
        : A === "Needs support"
          ? "bad"
          : "";
  return t.jsx(v, { tone: e, children: A });
}
function pt({ name: A, tone: e, lg: n }) {
  return t.jsx("span", {
    className: `avatar ${e ?? ""} ${n ? "lg" : ""}`,
    children: wu(A),
  });
}
function _({ icon: A = "folder", title: e, children: n }) {
  return t.jsxs("div", {
    className: "empty",
    children: [t.jsx(S, { n: A, size: 30 }), t.jsx("h3", { children: e }), n],
  });
}
function ME(A) {
  B.useEffect(() => {
    const e = (n) => {
      n.key === "Escape" && A();
    };
    return (
      window.addEventListener("keydown", e),
      () => window.removeEventListener("keydown", e)
    );
  }, [A]);
}
function mu({ title: A, onClose: e, children: n }) {
  return (
    ME(e),
    t.jsx("div", {
      className: "overlay",
      onMouseDown: (s) => {
        s.target === s.currentTarget && e();
      },
      children: t.jsxs("aside", {
        className: "drawer",
        role: "dialog",
        "aria-modal": "true",
        children: [
          t.jsxs("div", {
            className: "head",
            children: [
              t.jsxs("button", {
                className: "btn ghost sm",
                onClick: e,
                children: [t.jsx(S, { n: "back" }), "Back"],
              }),
              t.jsx("strong", { children: A }),
              t.jsx("span", { style: { width: 70 } }),
            ],
          }),
          t.jsx("div", { className: "body", children: n }),
        ],
      }),
    })
  );
}
function AA({ title: A, onClose: e, children: n, foot: s, wide: i }) {
  return (
    ME(e),
    t.jsx("div", {
      className: "overlay center",
      onMouseDown: (l) => {
        l.target === l.currentTarget && e();
      },
      children: t.jsxs("div", {
        className: `modal ${i ? "wide" : ""}`,
        role: "dialog",
        "aria-modal": "true",
        children: [
          t.jsxs("div", {
            className: "head",
            children: [
              t.jsx("h2", { children: A }),
              t.jsx("button", {
                className: "iconbtn",
                "aria-label": "Close",
                onClick: e,
                children: t.jsx(S, { n: "x" }),
              }),
            ],
          }),
          t.jsx("div", { className: "body", children: n }),
          s && t.jsx("div", { className: "foot", children: s }),
        ],
      }),
    })
  );
}
function DA({ value: A, options: e, onChange: n }) {
  return t.jsx("div", {
    className: "segmented",
    role: "tablist",
    children: e.map((s) =>
      t.jsx(
        "button",
        {
          role: "tab",
          "aria-selected": s === A,
          className: s === A ? "on" : "",
          onClick: () => n(s),
          children: s,
        },
        s,
      ),
    ),
  });
}
function _n({ checked: A, onChange: e, label: n }) {
  return t.jsxs("label", {
    className: "switch",
    "aria-label": n,
    children: [
      t.jsx("input", {
        type: "checkbox",
        checked: A,
        onChange: (s) => e(s.target.checked),
      }),
      t.jsx("span", {}),
    ],
  });
}
function N({ label: A, hint: e, children: n }) {
  return t.jsxs("label", {
    className: "field",
    children: [
      t.jsxs("span", {
        children: [A, " ", e && t.jsxs("small", { children: ["· ", e] })],
      }),
      n,
    ],
  });
}
function Ia({ data: A }) {
  return t.jsx("div", {
    className: "bars",
    role: "img",
    "aria-label": A.map(([e, n]) => `${e} ${n}%`).join(", "),
    children: A.map(([e, n]) =>
      t.jsxs(
        "div",
        {
          className: "bar",
          children: [
            t.jsxs("small", { children: [n, "%"] }),
            t.jsx("span", { style: { height: `${Math.max(4, n)}%` } }),
            t.jsx("small", { children: e }),
          ],
        },
        e,
      ),
    ),
  });
}
function Du({ value: A, total: e, label: n }) {
  return t.jsx("div", {
    className: "ring",
    style: { "--v": Math.round((A / e) * 100) },
    children: t.jsxs("div", {
      children: [
        t.jsx("strong", { children: A }),
        t.jsx("small", { children: n }),
      ],
    }),
  });
}
function da({ lp: A, school: e }) {
  return t.jsxs("div", {
    className: "stack",
    children: [
      t.jsxs("div", {
        className: "row wrap",
        children: [
          t.jsx(v, { tone: "primary", children: A.folder }),
          A.level && t.jsxs(v, { children: ["Level ", A.level] }),
          A.dayOrMonth && t.jsx(v, { children: A.dayOrMonth }),
          t.jsxs(v, {
            tone: "lock",
            children: [t.jsx(S, { n: "lock" }), "View only"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "pdfview",
        children: [
          t.jsx("iframe", {
            title: A.title,
            src: `${Ea(A.folder, A.file.split("/")[1])}#toolbar=0&navpanes=0`,
          }),
          t.jsxs("div", {
            className: "watermark",
            children: [e, t.jsx("br", {}), "EzRoots · view only"],
          }),
        ],
      }),
      t.jsxs("small", {
        children: [
          "Original EzRoots lesson plan (",
          A.pages,
          " pages). Download is off for this file.",
        ],
      }),
    ],
  });
}
function Yi({ v: A }) {
  return t.jsxs("div", {
    className: "stack",
    children: [
      t.jsx("video", {
        className: "player",
        controls: !0,
        preload: "metadata",
        controlsList: "nodownload",
        src: Ea(A.folder, A.file),
      }),
      t.jsxs("div", {
        className: "row between wrap",
        children: [
          t.jsx("strong", { children: A.title }),
          t.jsxs("span", {
            className: "row",
            children: [
              t.jsx(v, { children: A.duration }),
              t.jsxs(v, { children: [A.sizeMB, " MB original"] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ir = [
  ["superadmin", "u-sa", "Riya · EzRoots"],
  ["contentadmin", "u-ca", "Diya · Academics"],
  ["principal", "u-pr", "Kavitha · Sunrise"],
  ["teacher", "u-t1", "Anita · Nursery A"],
  ["student", "u-st-1", "Aarav · Nursery A"],
  ["parent", "pa-1", "Lakshmi · Aarav’s parent"],
];
function Mu() {
  const { db: A, me: e } = b();
  if (!e) return [];
  const n = A.notices.filter((s) => s.to === e.id && !s.read).length;
  switch (e.role) {
    case "superadmin":
      return [
        ["/sa", "Overview", "home"],
        ["/sa/schools", "Schools", "users"],
        [
          "/sa/seat-requests",
          "Seat requests",
          "seat",
          A.seatRequests.filter((s) => s.status === "pending").length,
        ],
        ["/sa/packages", "Packages & features", "layers"],
        ["/sa/team", "EzRoots team", "shield"],
        ["/sa/analytics", "Analytics", "chart"],
        ["/sa/settings", "Platform settings", "settings"],
        ["/sa/notifications", "Notifications", "bell", n],
      ];
    case "contentadmin":
      return [
        ["/ca", "Overview", "home"],
        ["/ca/tracks", "Tracks", "layers"],
        ["/ca/planner", "Curriculum planner", "calendar"],
        ["/ca/import", "Import planner", "upload"],
        ["/ca/lesson-plans", "Lesson plans", "book"],
        ["/ca/media", "Media library", "folder"],
        ["/ca/activities", "Activities", "star"],
        ["/ca/school-folders", "School folders", "shield"],
        ["/ca/training", "Teacher training", "play"],
        [
          "/ca/issues",
          "Content issues",
          "flag",
          A.issues.filter((s) => s.status === "open").length,
        ],
        ["/ca/notifications", "Notifications", "bell", n],
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
        ["/principal/folder", "School folder", "folder"],
        ["/principal/settings", "Settings", "settings"],
        ["/principal/notifications", "Notifications", "bell", n],
      ];
    case "teacher":
      return [
        ["/teacher", "Today", "home"],
        ["/teacher/planner", "Planner", "calendar"],
        ["/teacher/library", "Library", "folder"],
        ["/teacher/assignments", "Assignments", "star"],
        ["/teacher/students", "Students", "users"],
        ["/teacher/observations", "Observations", "eye"],
        ["/teacher/analytics", "Class analytics", "chart"],
        ["/teacher/assessments", "Assessments", "file"],
        ["/teacher/training", "Training", "play"],
        ["/teacher/offline", "Offline lessons", "down"],
        ["/teacher/notifications", "Notifications", "bell", n],
      ];
    case "parent":
      return [
        ["/parent", "Home", "home"],
        ["/parent/diary", "Class diary", "calendar"],
        ["/parent/activities", "Activities", "star"],
        ["/parent/progress", "Progress", "chart"],
        ["/parent/notes", "Teacher notes", "message"],
        ["/parent/try", "Try at home", "heart"],
        ["/parent/notifications", "Notifications", "bell", n],
      ];
    default:
      return [];
  }
}
function ju() {
  var a;
  const { db: A, update: e, reset: n } = b(),
    s = H(),
    [i, l] = B.useState(!1),
    r = fe(),
    o = (g) => {
      const C = A.users.find((E) => E.id === g);
      C &&
        (e((E) => {
          E.userId = g;
        }),
        s(ls[C.role]));
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs("div", {
        className: "demobar",
        children: [
          t.jsx("b", { children: "EZ ROOTS · CLICKABLE PROTOTYPE" }),
          t.jsx("span", {
            className: "hide-sm",
            children: "Sample data · no backend",
          }),
          t.jsx("span", { className: "spacer" }),
          t.jsxs("label", {
            className: "row",
            style: { gap: 6 },
            children: [
              t.jsx("span", { className: "hide-sm", children: "View as" }),
              t.jsxs("select", {
                "aria-label": "Switch demo role",
                value:
                  ((a = Ir.find(([, g]) => g === A.userId)) == null
                    ? void 0
                    : a[1]) ?? "",
                onChange: (g) =>
                  g.target.value ? o(g.target.value) : s("/login"),
                children: [
                  t.jsx("option", { value: "", children: "Signed out" }),
                  Ir.map(([g, C, E]) =>
                    t.jsxs(
                      "option",
                      { value: C, children: [qe[g], " · ", E] },
                      C,
                    ),
                  ),
                ],
              }),
            ],
          }),
          t.jsx(K, { to: "/directory", children: "Screen directory" }),
          t.jsx("button", {
            className: "link hide-sm",
            onClick: n,
            children: "Reset demo",
          }),
        ],
      }),
      t.jsxs("button", {
        className: "btn feedbackfab",
        onClick: () => l(!0),
        children: [t.jsx(S, { n: "message" }), "Design feedback"],
      }),
      i && t.jsx(Su, { screen: r.pathname, onClose: () => l(!1) }),
    ],
  });
}
const jE = "ezroots-reviewer-name",
  pu = () => {
    try {
      return localStorage.getItem(jE) ?? "";
    } catch {
      return "";
    }
  };
function Su({ screen: A, onClose: e }) {
  const { db: n, me: s, update: i, toast: l } = b(),
    [r, o] = B.useState(pu),
    [a, g] = B.useState("Layout & look"),
    [C, E] = B.useState(""),
    [c, m] = B.useState(!1),
    u = () => {
      const h = n.feedback.map(
          (w) => `${w.date} · ${w.screen} · ${w.area} · ${w.name}
${w.text}`,
        ).join(`

---

`),
        d = URL.createObjectURL(
          new Blob([h || "No comments yet"], { type: "text/plain" }),
        ),
        I = document.createElement("a");
      ((I.href = d),
        (I.download = "ezroots-prototype-feedback.txt"),
        I.click(),
        URL.revokeObjectURL(d));
    },
    Q = async () => {
      m(!0);
      try {
        localStorage.setItem(jE, r);
      } catch {}
      const h = { screen: A, name: r || "Reviewer", area: a, text: C };
      i((d) => {
        d.feedback.push({
          id: O("fb"),
          ...h,
          date: new Date().toLocaleString("en-IN"),
        });
      });
      try {
        const d = await fetch(
          "https://ezroots-prototype.vercel.app/api/feedback",
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              ...h,
              role: s ? qe[s.role] : "",
              viewer: (s == null ? void 0 : s.name) ?? "",
            }),
          },
        );
        if (!d.ok) throw new Error(String(d.status));
        l("Thank you. Your comment was sent to the team.");
      } catch {
        l(
          "Could not reach the server. Saved on this device; use Export to send it.",
        );
      }
      (m(!1), e());
    };
  return t.jsxs(AA, {
    title: "Design feedback",
    onClose: e,
    foot: t.jsxs(t.Fragment, {
      children: [
        n.feedback.length > 0 &&
          t.jsxs("button", {
            className: "btn secondary",
            onClick: u,
            children: ["Export my comments (", n.feedback.length, ")"],
          }),
        t.jsx("button", {
          className: "btn",
          disabled: !C.trim() || c,
          onClick: Q,
          children: c ? "Sending…" : "Send comment",
        }),
      ],
    }),
    children: [
      t.jsxs("p", {
        className: "muted",
        children: [
          "Screen: ",
          t.jsx("b", { children: A }),
          ". Comments go to the Oraxis team, with your name and this screen.",
        ],
      }),
      t.jsx(N, {
        label: "Your name",
        children: t.jsx("input", {
          className: "input",
          value: r,
          onChange: (h) => o(h.target.value),
        }),
      }),
      t.jsx(N, {
        label: "About",
        children: t.jsx("select", {
          className: "input",
          value: a,
          onChange: (h) => g(h.target.value),
          children: [
            "Layout & look",
            "Flow & navigation",
            "Wording",
            "Missing feature",
            "Wrong assumption",
          ].map((h) => t.jsx("option", { children: h }, h)),
        }),
      }),
      t.jsx(N, {
        label: "What should change, and why?",
        children: t.jsx("textarea", {
          className: "input",
          value: C,
          onChange: (h) => E(h.target.value),
        }),
      }),
    ],
  });
}
function ku() {
  const { db: A, me: e, update: n } = b();
  if (!(e != null && e.teaches)) return null;
  const s = [...new Set(e.teaches.map((r) => r.sectionId))],
    i = A.teacherContext,
    l = e.teaches
      .filter((r) => r.sectionId === i.sectionId)
      .map((r) => r.subject);
  return t.jsxs("div", {
    className: "ctx",
    children: [
      t.jsx("label", { htmlFor: "ctx-section", children: "Class-section" }),
      t.jsx("select", {
        id: "ctx-section",
        className: "input",
        value: i.sectionId,
        onChange: (r) =>
          n((o) => {
            o.teacherContext = { sectionId: r.target.value, subject: "All" };
          }),
        children: s.map((r) =>
          t.jsx("option", { value: r, children: z(A, r) }, r),
        ),
      }),
      t.jsx("label", { htmlFor: "ctx-subject", children: "Subject" }),
      t.jsxs("select", {
        id: "ctx-subject",
        className: "input",
        value: i.subject,
        onChange: (r) =>
          n((o) => {
            o.teacherContext.subject = r.target.value;
          }),
        children: [
          l.length > 1 &&
            t.jsx("option", { value: "All", children: "All my subjects" }),
          l.map((r) => t.jsx("option", { value: r, children: r }, r)),
        ],
      }),
    ],
  });
}
function fu() {
  const { db: A, me: e, update: n, toast: s } = b(),
    i = Mu(),
    [l, r] = B.useState(!1),
    o = H();
  if (!e) return null;
  const a = ls[e.role],
    g = A.schools.find((c) => c.id === e.schoolId),
    C = A.notices.filter((c) => c.to === e.id && !c.read).length,
    E =
      e.role === "superadmin" || e.role === "contentadmin"
        ? `EzRoots${e.team ? ` · ${e.team} team` : ""}`
        : g == null
          ? void 0
          : g.name;
  return t.jsxs("div", {
    className: "shell",
    children: [
      t.jsxs("aside", {
        className: `sidebar ${l ? "open" : ""}`,
        onClick: (c) => {
          c.target.closest("a") && r(!1);
        },
        children: [
          t.jsxs(K, {
            to: a,
            className: "brand",
            children: [
              t.jsx("span", { className: "mark", children: "EZ" }),
              t.jsxs("span", {
                children: [
                  t.jsx("strong", { children: "EZ ROOTS" }),
                  t.jsx("small", {
                    children:
                      e.role === "superadmin" || e.role === "contentadmin"
                        ? "ADMIN WORKSPACE"
                        : "LEARNING PLATFORM",
                  }),
                ],
              }),
            ],
          }),
          e.role === "teacher" && t.jsx(ku, {}),
          e.role === "parent" && t.jsx(Ju, {}),
          t.jsx("nav", {
            className: "nav",
            "aria-label": "Main",
            children: i.map(([c, m, u, Q]) =>
              t.jsxs(
                Ot,
                {
                  to: c,
                  end: c === a,
                  children: [
                    t.jsx(S, { n: u }),
                    m,
                    Q
                      ? t.jsx("span", { className: "count", children: Q })
                      : null,
                  ],
                },
                c,
              ),
            ),
          }),
          t.jsxs("div", {
            className: "sidefoot",
            children: [
              t.jsxs(Ot, {
                to: `${a}/help`,
                className: "btn ghost sm",
                style: { justifyContent: "flex-start" },
                children: [t.jsx(S, { n: "help" }), "Help"],
              }),
              t.jsxs(K, {
                to: `${a}/profile`,
                className: "userchip",
                children: [
                  t.jsx("span", {
                    className: "avatar",
                    children: e.name
                      .split(" ")
                      .map((c) => c[0])
                      .slice(0, 2)
                      .join(""),
                  }),
                  t.jsxs("span", {
                    style: { minWidth: 0 },
                    children: [
                      t.jsx("strong", {
                        style: { display: "block", color: "var(--ink)" },
                        children: e.name,
                      }),
                      t.jsx("small", { children: qe[e.role] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "content",
        children: [
          t.jsxs("header", {
            className: "topbar",
            children: [
              t.jsx("button", {
                className: "iconbtn menubtn",
                "aria-label": "Open menu",
                onClick: () => r(!l),
                children: t.jsx(S, { n: "menu" }),
              }),
              t.jsxs("div", {
                className: "search",
                children: [
                  t.jsx(S, { n: "search" }),
                  t.jsx("input", {
                    "aria-label": "Search",
                    placeholder:
                      e.role === "teacher"
                        ? "Search lessons, codes and materials"
                        : "Search",
                    onKeyDown: (c) => {
                      c.key === "Enter" &&
                        e.role === "teacher" &&
                        o(
                          `/teacher/library?q=${encodeURIComponent(c.target.value)}`,
                        );
                    },
                  }),
                ],
              }),
              t.jsx("span", { className: "spacer" }),
              t.jsx("small", { className: "hide-sm", children: E }),
              e.role === "teacher" &&
                t.jsxs("button", {
                  className: `netbadge ${A.offline ? "off" : ""}`,
                  onClick: () => {
                    (n((c) => {
                      c.offline = !c.offline;
                    }),
                      s(
                        A.offline
                          ? "Back online · changes synced"
                          : "Offline mode: saved lessons still open",
                      ));
                  },
                  children: [t.jsx("i", {}), A.offline ? "Offline" : "Online"],
                }),
              t.jsxs(K, {
                to: `${a}/notifications`,
                className: "iconbtn",
                "aria-label": "Notifications",
                children: [
                  t.jsx(S, { n: "bell" }),
                  C > 0 && t.jsx("span", { className: "dot", children: C }),
                ],
              }),
              t.jsx("button", {
                className: "iconbtn",
                "aria-label": "Sign out",
                onClick: () => {
                  (n((c) => {
                    c.userId = null;
                  }),
                    o("/login"));
                },
                children: t.jsx(S, { n: "logout" }),
              }),
            ],
          }),
          A.offline &&
            e.role === "teacher" &&
            t.jsxs("div", {
              className: "notice",
              style: {
                borderRadius: 0,
                border: 0,
                borderBottom: "1px solid #f1d98f",
              },
              children: [
                t.jsx(S, { n: "wifi" }),
                "You are offline. Lessons you saved offline still open; anything you mark is synced when you reconnect.",
              ],
            }),
          t.jsx("main", { className: "main", children: t.jsx(hE, {}) }),
        ],
      }),
      t.jsxs("nav", {
        className: "mobiletabs",
        "aria-label": "Quick",
        children: [
          i
            .slice(0, 4)
            .map(([c, m, u]) =>
              t.jsxs(
                Ot,
                { to: c, end: c === a, children: [t.jsx(S, { n: u }), m] },
                c,
              ),
            ),
          t.jsxs("a", {
            href: "#menu",
            onClick: (c) => {
              (c.preventDefault(), r(!0));
            },
            children: [t.jsx(S, { n: "menu" }), "More"],
          }),
        ],
      }),
    ],
  });
}
function Ju() {
  const { db: A, me: e } = b(),
    n = A.students.find((s) => s.id === (e == null ? void 0 : e.childId));
  return n
    ? t.jsxs("div", {
        className: "ctx",
        children: [
          t.jsx("label", { children: "Your child" }),
          t.jsx("strong", { children: n.name }),
          t.jsxs("small", {
            children: [z(A, n.sectionId), " · Sunrise Montessori"],
          }),
        ],
      })
    : null;
}
function xu() {
  const { db: A, me: e, update: n } = b(),
    s = H();
  if (!e) return null;
  const i = A.students.find((l) => l.id === e.childId);
  return t.jsxs("div", {
    className: "kid",
    children: [
      t.jsxs("header", {
        className: "kidtop",
        children: [
          t.jsxs("span", {
            className: "brand",
            children: [
              t.jsx("span", { className: "mark", children: "EZ" }),
              t.jsxs("span", {
                children: [
                  t.jsxs("strong", {
                    children: [
                      "Hi, ",
                      i == null ? void 0 : i.name.split(" ")[0],
                      "!",
                    ],
                  }),
                  t.jsx("small", { children: i ? z(A, i.sectionId) : "" }),
                ],
              }),
            ],
          }),
          t.jsxs("nav", {
            className: "kidnav",
            "aria-label": "Child",
            children: [
              t.jsx(Ot, { to: "/student", end: !0, children: "⭐ Today" }),
              t.jsx(Ot, { to: "/student/stars", children: "🏅 My stars" }),
              t.jsx(Ot, { to: "/student/done", children: "✅ Done" }),
              t.jsx("button", {
                className: "btn ghost",
                onClick: () => {
                  (n((l) => {
                    l.userId = null;
                  }),
                    s("/login"));
                },
                children: "Bye 👋",
              }),
            ],
          }),
        ],
      }),
      t.jsx("main", { className: "kidmain", children: t.jsx(hE, {}) }),
    ],
  });
}
function pE({ role: A, children: e }) {
  const { me: n } = b(),
    s = fe();
  return n
    ? n.role !== A
      ? t.jsx(Zu, { role: A })
      : t.jsx(t.Fragment, { children: e })
    : t.jsx(Nu, { from: s.pathname });
}
function Nu({ from: A }) {
  const e = H();
  return t.jsx("div", {
    className: "main",
    children: t.jsxs("div", {
      className: "card pad empty",
      children: [
        t.jsx("h3", { children: "Please sign in" }),
        t.jsxs("p", { children: [A, " needs a signed-in user."] }),
        t.jsx("button", {
          className: "btn",
          onClick: () => e("/login"),
          children: "Go to sign in",
        }),
      ],
    }),
  });
}
function Zu({ role: A }) {
  const { me: e } = b(),
    n = H();
  return t.jsx("div", {
    className: "main",
    children: t.jsxs("div", {
      className: "card pad empty",
      children: [
        t.jsx(S, { n: "lock", size: 28 }),
        t.jsx("h3", { children: "Not available for your role" }),
        t.jsxs("p", {
          children: [
            "This page is for ",
            qe[A],
            ". You are signed in as ",
            e ? qe[e.role] : "nobody",
            ".",
          ],
        }),
        e &&
          t.jsx("button", {
            className: "btn",
            onClick: () => n(ls[e.role]),
            children: "Go to my home",
          }),
      ],
    }),
  });
}
function Gu() {
  const { db: A, update: e, toast: n } = b(),
    s = H(),
    [i, l] = B.useState(""),
    [r, o] = B.useState(""),
    [a, g] = B.useState(""),
    C = (c) => {
      const m = A.users.find((u) => u.id === c);
      (e((u) => {
        u.userId = c;
      }),
        s(ls[m.role]));
    },
    E = () => {
      const c = A.users.find((m) => {
        var u;
        return (
          m.username.toLowerCase() === i.trim().toLowerCase() ||
          ((u = m.email) == null ? void 0 : u.toLowerCase()) ===
            i.trim().toLowerCase()
        );
      });
      if (!c)
        return g(
          "We could not find that username or email. For the demo, use a quick sign-in button below.",
        );
      if (!c.active)
        return g("This account is deactivated. Please contact your school.");
      if (!r)
        return g("Enter your password (any password works in this demo).");
      (n(`Signed in as ${c.name}`), C(c.id));
    };
  return t.jsxs("div", {
    className: "login",
    children: [
      t.jsxs("section", {
        className: "left",
        children: [
          t.jsxs("span", {
            className: "brand",
            children: [
              t.jsx("span", { className: "mark", children: "EZ" }),
              t.jsxs("span", {
                children: [
                  t.jsx("strong", {
                    style: { color: "#fff" },
                    children: "EZ ROOTS",
                  }),
                  t.jsx("small", {
                    style: { color: "#cfc6e8" },
                    children: "IGNITING CURIOSITY, FOSTERING BRILLIANCE",
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            children: [
              t.jsx("h1", {
                children:
                  "One place for schools, teachers, children and families.",
              }),
              t.jsx("p", {
                children:
                  "The day’s plan, videos and lesson plans for teachers. Hands-on activities for children. A clear window into class for parents.",
              }),
            ],
          }),
          t.jsx("small", {
            style: { color: "#cfc6e8" },
            children: "Physical experience + digital reinforcement",
          }),
        ],
      }),
      t.jsx("section", {
        className: "right",
        children: t.jsxs("form", {
          className: "box",
          onSubmit: (c) => {
            (c.preventDefault(), E());
          },
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("div", {
                  className: "eyebrow",
                  children: "Welcome back",
                }),
                t.jsx("h1", { children: "Sign in" }),
                t.jsx("p", {
                  className: "muted",
                  children:
                    "One sign-in for every role. Your account decides what you see.",
                }),
              ],
            }),
            t.jsx(N, {
              label: "Email or username",
              children: t.jsx("input", {
                className: "input",
                value: i,
                onChange: (c) => {
                  (l(c.target.value), g(""));
                },
                placeholder: "e.g. anita.menon",
                autoComplete: "username",
              }),
            }),
            t.jsx(N, {
              label: "Password",
              children: t.jsx("input", {
                className: "input",
                type: "password",
                value: r,
                onChange: (c) => {
                  (o(c.target.value), g(""));
                },
                autoComplete: "current-password",
              }),
            }),
            a &&
              t.jsx("div", {
                className: "notice bad",
                role: "alert",
                children: a,
              }),
            t.jsxs("button", {
              className: "btn lg",
              type: "submit",
              children: ["Sign in ", t.jsx(S, { n: "arrow" })],
            }),
            t.jsx(K, {
              to: "/forgot",
              className: "textlink",
              style: { justifySelf: "center" },
              children: "Forgot password?",
            }),
            t.jsx("div", { className: "divider" }),
            t.jsxs("div", {
              children: [
                t.jsx("div", {
                  className: "eyebrow",
                  children: "Demo · quick sign-in",
                }),
                t.jsx("div", {
                  className: "rolebtns",
                  children: Ir.map(([c, m, u]) =>
                    t.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => C(m),
                        children: [
                          t.jsx("b", { children: qe[c] }),
                          t.jsx("span", { children: u }),
                        ],
                      },
                      m,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function yu() {
  const [A, e] = B.useState("student"),
    n = {
      student:
        "Ask your class teacher. Teachers can reset a student’s password from the Students page.",
      parent:
        "Ask your child’s class teacher. They can reset parent passwords from the student’s profile.",
      teacher:
        "Ask your principal. Principals reset teacher passwords from the Teachers page.",
      principal:
        "Contact EzRoots support. A Super Admin can reset the principal account from the school’s page.",
    }[A];
  return t.jsxs("div", {
    className: "login",
    children: [
      t.jsxs("section", {
        className: "left",
        children: [
          t.jsxs("span", {
            className: "brand",
            children: [
              t.jsx("span", { className: "mark", children: "EZ" }),
              t.jsx("strong", {
                style: { color: "#fff" },
                children: "EZ ROOTS",
              }),
            ],
          }),
          t.jsxs("div", {
            children: [
              t.jsx("h1", { children: "Forgot your password?" }),
              t.jsx("p", {
                children:
                  "No email needed. Someone at your school resets it for you.",
              }),
            ],
          }),
          t.jsx("span", {}),
        ],
      }),
      t.jsx("section", {
        className: "right",
        children: t.jsxs("div", {
          className: "box",
          children: [
            t.jsx("h1", { children: "Who are you?" }),
            t.jsx("div", {
              className: "rolebtns",
              children: ["student", "parent", "teacher", "principal"].map((s) =>
                t.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => e(s),
                    style:
                      A === s
                        ? {
                            borderColor: "var(--primary)",
                            background: "var(--primary-50)",
                          }
                        : {},
                    children: t.jsx("b", {
                      style: { textTransform: "capitalize" },
                      children: s,
                    }),
                  },
                  s,
                ),
              ),
            }),
            t.jsxs("div", {
              className: "notice info",
              children: [t.jsx(S, { n: "help" }), n],
            }),
            t.jsx("small", {
              children:
                "Reset rules come from the decisions so far: the teacher resets student and parent passwords; principal → teachers and Super Admin → principals are assumptions to confirm.",
            }),
            t.jsx(K, {
              to: "/login",
              className: "btn secondary",
              children: "Back to sign in",
            }),
          ],
        }),
      }),
    ],
  });
}
function vu() {
  const { me: A, db: e, toast: n } = b();
  if (!A) return null;
  const s = e.schools.find((i) => i.id === A.schoolId);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, { eyebrow: "Your account", title: "Profile & settings" }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("h2", { children: A.name }),
              t.jsxs("dl", {
                className: "kv",
                children: [
                  t.jsx("dt", { children: "Role" }),
                  t.jsx("dd", { children: qe[A.role] }),
                  t.jsx("dt", { children: "Username" }),
                  t.jsx("dd", { children: A.username }),
                  A.email &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("dt", { children: "Email" }),
                        t.jsx("dd", { children: A.email }),
                      ],
                    }),
                  s &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("dt", { children: "School" }),
                        t.jsxs("dd", { children: [s.name, ", ", s.city] }),
                      ],
                    }),
                  A.team &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("dt", { children: "Team" }),
                        t.jsx("dd", { children: A.team }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (i) => {
              (i.preventDefault(), n("Password changed (demo)"));
            },
            children: [
              t.jsx("h2", { children: "Change password" }),
              t.jsx(N, {
                label: "Current password",
                children: t.jsx("input", {
                  className: "input",
                  type: "password",
                }),
              }),
              t.jsx(N, {
                label: "New password",
                children: t.jsx("input", {
                  className: "input",
                  type: "password",
                }),
              }),
              t.jsx("button", {
                className: "btn",
                children: "Update password",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ru() {
  const { db: A, me: e, update: n } = b(),
    s = H();
  if (!e) return null;
  const i = A.notices
    .filter((l) => l.to === e.id)
    .sort((l, r) => r.date.localeCompare(l.date));
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Updates",
        title: "Notifications",
        children: t.jsx("button", {
          className: "btn secondary",
          onClick: () =>
            n((l) => {
              l.notices.forEach((r) => {
                r.to === e.id && (r.read = !0);
              });
            }),
          children: "Mark all read",
        }),
      }),
      t.jsxs("div", {
        className: "card",
        children: [
          i.length === 0 &&
            t.jsx(_, { icon: "bell", title: "You’re all caught up" }),
          i.map((l) =>
            t.jsxs(
              "button",
              {
                className: "folderrow",
                style: {
                  width: "100%",
                  background: l.read ? "#fff" : "#faf8ff",
                  border: 0,
                  borderBottom: "1px solid var(--line)",
                  textAlign: "left",
                },
                onClick: () => {
                  (n((r) => {
                    r.notices.find((o) => o.id === l.id).read = !0;
                  }),
                    s(l.link));
                },
                children: [
                  t.jsx("span", {
                    className: "fileicon",
                    children: t.jsx(S, { n: "bell" }),
                  }),
                  t.jsxs("span", {
                    style: { flex: 1 },
                    children: [
                      t.jsx("strong", {
                        style: { fontWeight: l.read ? 500 : 700 },
                        children: l.text,
                      }),
                      t.jsx("small", {
                        style: { display: "block" },
                        children: CA(l.date, {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        }),
                      }),
                    ],
                  }),
                  !l.read && t.jsx(v, { tone: "pink", children: "New" }),
                ],
              },
              l.id,
            ),
          ),
        ],
      }),
    ],
  });
}
function Yu() {
  const { me: A } = b(),
    e = [
      [
        "I forgot my password",
        "Students and parents: ask the class teacher. Teachers: ask the principal. Principals: contact EzRoots.",
      ],
      [
        "I can’t see a lesson or activity",
        "Content depends on your school’s package for that class. Some items are locked to higher packages.",
      ],
      [
        "The video is slow",
        "Save the day’s lessons offline when you have good network, then teach without internet.",
      ],
      [
        "Something in the lesson plan looks wrong",
        "Open the session and use “Report a content issue”. The EzRoots academic team will fix it.",
      ],
    ];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Help",
        title: "How can we help?",
        sub: A ? `Signed in as ${qe[A.role]}` : void 0,
      }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsx("div", {
            className: "card pad stack",
            children: e.map(([n, s]) =>
              t.jsxs(
                "details",
                {
                  children: [
                    t.jsx("summary", { children: t.jsx("b", { children: n }) }),
                    t.jsx("p", {
                      className: "muted",
                      style: { marginTop: 6 },
                      children: s,
                    }),
                  ],
                },
                n,
              ),
            ),
          }),
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("h2", { children: "Contact EzRoots" }),
              t.jsx("p", { children: "info@ezroots.in · +91 91500 10551" }),
              t.jsx("small", {
                children:
                  "Chennai & Bengaluru. Contact details from ezroots.in.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const bu = [
  [
    "Shared",
    "",
    [
      ["/login", "Sign in"],
      ["/forgot", "Forgot password"],
    ],
  ],
  [
    "EzRoots Super Admin",
    "u-sa",
    [
      ["/sa", "Overview"],
      ["/sa/schools", "Schools"],
      ["/sa/schools/new", "Add school wizard"],
      ["/sa/schools/sch-sunrise", "School detail"],
      ["/sa/seat-requests", "Seat requests"],
      ["/sa/packages", "Packages & features"],
      ["/sa/team", "EzRoots team"],
      ["/sa/analytics", "Analytics"],
      ["/sa/settings", "Platform settings"],
    ],
  ],
  [
    "EzRoots Content Admin",
    "u-ca",
    [
      ["/ca", "Overview"],
      ["/ca/tracks", "Tracks"],
      ["/ca/planner", "Curriculum planner"],
      ["/ca/planner/day/61", "Day editor"],
      ["/ca/import", "Import planner"],
      ["/ca/lesson-plans", "Lesson plans"],
      [
        "/ca/lesson-plans/day-70-sorting-thick-vs-thin-real-objects-l1-lesson-plan",
        "Lesson plan editor",
      ],
      ["/ca/media", "Media library"],
      ["/ca/activities", "Activities"],
      ["/ca/activities/new", "Activity builder"],
      ["/ca/school-folders", "School folders"],
      ["/ca/training", "Teacher training"],
      ["/ca/issues", "Content issues"],
    ],
  ],
  [
    "Principal",
    "u-pr",
    [
      ["/principal", "Overview"],
      ["/principal/sections", "Classes & sections"],
      ["/principal/teachers", "Teachers"],
      ["/principal/students", "Students"],
      ["/principal/parents", "Parents"],
      ["/principal/seats", "Seats & packages"],
      ["/principal/implementation", "Implementation"],
      ["/principal/reports", "Reports"],
      ["/principal/folder", "School folder"],
      ["/principal/settings", "Settings"],
    ],
  ],
  [
    "Teacher",
    "u-t1",
    [
      ["/teacher", "Today"],
      ["/teacher/planner", "Planner"],
      ["/teacher/planner?day=61&slot=Session%202", "Session drawer"],
      ["/teacher/smartboard/61", "Smartboard mode"],
      ["/teacher/library", "Library"],
      ["/teacher/assignments", "Assignments"],
      ["/teacher/assignments/new", "New assignment"],
      ["/teacher/students", "Students"],
      ["/teacher/students/st-1", "Student profile"],
      ["/teacher/observations", "Observations"],
      ["/teacher/analytics", "Class analytics"],
      ["/teacher/assessments", "Assessments"],
      ["/teacher/training", "Training"],
      ["/teacher/offline", "Offline lessons"],
    ],
  ],
  [
    "Student",
    "u-st-1",
    [
      ["/student", "Today"],
      ["/student/play/as-3", "Activity player"],
      ["/student/stars", "My stars"],
      ["/student/done", "Done"],
    ],
  ],
  [
    "Parent",
    "pa-1",
    [
      ["/parent", "Home"],
      ["/parent/diary", "Class diary"],
      ["/parent/activities", "Activities"],
      ["/parent/progress", "Progress"],
      ["/parent/notes", "Teacher notes"],
      ["/parent/try", "Try at home"],
    ],
  ],
];
function Wu() {
  const { update: A } = b(),
    e = H(),
    n = (s, i) => {
      (s &&
        A((l) => {
          l.userId = s;
        }),
        e(i));
    };
  return t.jsxs("div", {
    className: "main",
    children: [
      t.jsx(W, {
        eyebrow: "Prototype",
        title: "Screen directory",
        sub: "Every screen for every role. Clicking a link signs you in as that role.",
      }),
      t.jsx("div", {
        className: "dirgrid",
        children: bu.map(([s, i, l]) =>
          t.jsxs(
            "div",
            {
              className: "card pad",
              children: [
                t.jsx("h3", { style: { marginBottom: 8 }, children: s }),
                l.map(([r, o]) =>
                  t.jsx(
                    "a",
                    {
                      href: `#${r}`,
                      onClick: (a) => {
                        (a.preventDefault(), n(i, r));
                      },
                      children: o,
                    },
                    r,
                  ),
                ),
              ],
            },
            s,
          ),
        ),
      }),
      t.jsx("div", {
        className: "demo-note",
        style: { marginTop: 20 },
        children:
          "The planner and the lesson plan and video titles are EzRoots’ real samples; the videos and PDFs themselves are short stand-ins. Schools, people, scores and links between sessions and resources are invented for the demo.",
      }),
    ],
  });
}
const Vo = "ezroots-review-key";
function Uu() {
  const [A, e] = B.useState(() => {
      try {
        return localStorage.getItem(Vo) ?? "";
      } catch {
        return "";
      }
    }),
    [n, s] = B.useState(null),
    [i, l] = B.useState(""),
    [r, o] = B.useState(""),
    [a, g] = B.useState("All"),
    C = async (u = A) => {
      l("");
      try {
        const Q = await fetch(
            `https://ezroots-prototype.vercel.app/api/feedback?key=${encodeURIComponent(u)}`,
          ),
          h = await Q.json().catch(() => ({
            error:
              "No review API here. It runs only on Vercel (or under `vercel dev`).",
          }));
        if (!Q.ok || !Array.isArray(h)) {
          (s(null), l(h.error ?? `Error ${Q.status}`));
          return;
        }
        try {
          localStorage.setItem(Vo, u);
        } catch {}
        s(h);
      } catch {
        l(
          "Could not reach /api/feedback. It only runs on Vercel (or under `vercel dev`).",
        );
      }
    },
    E = ["All", ...new Set((n ?? []).map((u) => u.area))],
    c = (n ?? []).filter(
      (u) =>
        (a === "All" || u.area === a) &&
        (!r ||
          `${u.name} ${u.screen} ${u.text}`
            .toLowerCase()
            .includes(r.toLowerCase())),
    ),
    m = () => {
      const u = (I) => `"${(I ?? "").replace(/"/g, '""')}"`,
        Q = [
          "When,Name,About,Screen,Role,Signed in as,Comment",
          ...c.map((I) =>
            [I.at, I.name, I.area, I.screen, I.role, I.viewer, I.text]
              .map(u)
              .join(","),
          ),
        ].join(`
`),
        h = URL.createObjectURL(new Blob([Q], { type: "text/csv" })),
        d = document.createElement("a");
      ((d.href = h),
        (d.download = "ezroots-prototype-reviews.csv"),
        d.click(),
        URL.revokeObjectURL(h));
    };
  return t.jsxs("div", {
    className: "main",
    children: [
      t.jsx(W, {
        eyebrow: "Prototype",
        title: "Visitor reviews",
        sub: "Every comment sent through “Design feedback”, newest first.",
        children:
          n &&
          t.jsxs("button", {
            className: "btn secondary",
            onClick: m,
            disabled: !c.length,
            children: [t.jsx(S, { n: "down" }), "Download CSV"],
          }),
      }),
      !n &&
        t.jsxs("div", {
          className: "card pad",
          style: { maxWidth: 420 },
          children: [
            t.jsx(N, {
              label: "Review key",
              children: t.jsx("input", {
                className: "input",
                type: "password",
                value: A,
                onChange: (u) => e(u.target.value),
                onKeyDown: (u) => u.key === "Enter" && C(),
              }),
            }),
            t.jsx("button", {
              className: "btn",
              disabled: !A,
              onClick: () => C(),
              children: "Show reviews",
            }),
            i &&
              t.jsx("p", {
                className: "muted",
                style: { marginTop: 10, color: "var(--pink)" },
                children: i,
              }),
          ],
        }),
      n &&
        t.jsxs(t.Fragment, {
          children: [
            t.jsxs("div", {
              className: "toolbar",
              style: {
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 12,
              },
              children: [
                t.jsx("input", {
                  className: "input",
                  placeholder: "Search name, screen or text",
                  value: r,
                  onChange: (u) => o(u.target.value),
                  style: { maxWidth: 280 },
                }),
                t.jsx("select", {
                  className: "input",
                  value: a,
                  onChange: (u) => g(u.target.value),
                  style: { maxWidth: 200 },
                  children: E.map((u) => t.jsx("option", { children: u }, u)),
                }),
                t.jsx("button", {
                  className: "btn secondary",
                  onClick: () => C(),
                  children: "Refresh",
                }),
                t.jsxs("span", {
                  className: "muted",
                  style: { alignSelf: "center" },
                  children: [c.length, " of ", n.length],
                }),
              ],
            }),
            c.length
              ? t.jsx("div", {
                  className: "list",
                  children: c.map((u) =>
                    t.jsxs(
                      "div",
                      {
                        className: "card pad",
                        style: { marginBottom: 10 },
                        children: [
                          t.jsxs("div", {
                            style: {
                              display: "flex",
                              gap: 8,
                              flexWrap: "wrap",
                              alignItems: "center",
                              marginBottom: 6,
                            },
                            children: [
                              t.jsx("b", { children: u.name }),
                              t.jsx(v, { children: u.area }),
                              t.jsx("a", {
                                href: `#${u.screen}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: u.screen,
                              }),
                              u.role &&
                                t.jsxs("span", {
                                  className: "muted",
                                  children: [
                                    "as ",
                                    u.role,
                                    u.viewer ? ` (${u.viewer})` : "",
                                  ],
                                }),
                              t.jsx("span", {
                                className: "muted",
                                style: { marginLeft: "auto" },
                                children: new Date(u.at).toLocaleString(
                                  "en-IN",
                                ),
                              }),
                            ],
                          }),
                          t.jsx("div", {
                            style: { whiteSpace: "pre-wrap" },
                            children: u.text,
                          }),
                        ],
                      },
                      u.id,
                    ),
                  ),
                })
              : t.jsx(_, {
                  icon: "message",
                  title: "No comments yet",
                  children:
                    "Comments appear here as soon as a visitor sends one.",
                }),
          ],
        }),
    ],
  });
}
function MA() {
  const { db: A, me: e } = b(),
    { sectionId: n, subject: s } = A.teacherContext,
    i = A.sections.find((g) => g.id === n),
    l = A.schools.find((g) => g.id === i.schoolId),
    r = l.packages[i.level],
    o = s === "All" ? Uo : Uo.filter((g) => jt[g] === s),
    a = A.classPosition[n] ?? is;
  return {
    db: A,
    me: e,
    sectionId: n,
    subject: s,
    section: i,
    school: l,
    pkg: r,
    slots: o,
    position: a,
    students: Cr(A, n),
  };
}
const nn = (A) => pe.find((e) => e.day === A);
function bi(A, e, n) {
  return A.links[$e(e, n)] ?? {};
}
function Fu() {
  const {
      db: A,
      me: e,
      sectionId: n,
      subject: s,
      section: i,
      school: l,
      pkg: r,
      slots: o,
      position: a,
      students: g,
    } = MA(),
    C = H(),
    E = nn(a),
    c = Ii(A, n),
    m = A.assignments.filter(
      (Q) =>
        Q.sectionId === n &&
        (s === "All" || Q.subject === s) &&
        Q.mode === "home" &&
        Q.due >= uA,
    ),
    u = A.notices.filter((Q) => Q.to === e.id && !Q.read);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `Day ${a} · ${CA(Qt(a), { weekday: "long", day: "numeric", month: "long" })}`,
        title: `Good morning, ${e.name.split(" ")[0]}`,
        sub: `${z(A, n)} · ${s === "All" ? "All my subjects" : s} · ${l.name}`,
        children: t.jsxs(v, {
          tone: "primary",
          children: [r, " package · ", l.track],
        }),
      }),
      t.jsxs("div", {
        className: "hero",
        children: [
          t.jsxs("div", {
            children: [
              t.jsxs("span", {
                className: "tag",
                children: [i.level, " – ", i.name],
              }),
              t.jsxs("h1", { children: ["Ready for Day ", a, "?"] }),
              t.jsxs("p", {
                children: [
                  "Month ",
                  ft(a),
                  " · Week ",
                  Ci(a),
                  ". Pick up where this class left off.",
                ],
              }),
              t.jsxs("div", {
                className: "actions",
                style: { marginTop: 16 },
                children: [
                  t.jsxs("button", {
                    className: "btn",
                    style: { background: "#fff", color: "var(--primary)" },
                    onClick: () => C(`/teacher/planner?day=${a}`),
                    children: ["Open today’s plan ", t.jsx(S, { n: "arrow" })],
                  }),
                  t.jsxs("button", {
                    className: "btn secondary",
                    style: {
                      background: "transparent",
                      color: "#fff",
                      borderColor: "#8e7fc0",
                    },
                    onClick: () => C(`/teacher/smartboard/${a}`),
                    children: [t.jsx(S, { n: "tv" }), "Smartboard mode"],
                  }),
                ],
              }),
            ],
          }),
          t.jsx(Du, { value: c, total: 180, label: "of 180 days" }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsxs("div", {
            className: "card pad",
            children: [
              t.jsxs("div", {
                className: "sectionhead",
                children: [
                  t.jsxs("div", {
                    children: [
                      t.jsx("div", {
                        className: "eyebrow",
                        children: "Next up",
                      }),
                      t.jsxs("h2", { children: ["Day ", a, " sessions"] }),
                    ],
                  }),
                  t.jsxs(K, {
                    className: "textlink",
                    to: `/teacher/planner?day=${a}`,
                    children: ["Full day ", t.jsx(S, { n: "arrow" })],
                  }),
                ],
              }),
              !E &&
                t.jsx(_, {
                  icon: "calendar",
                  title: "No planner content for this day yet",
                }),
              t.jsx("div", {
                className: "stack",
                children:
                  E &&
                  E.sessions
                    .filter((Q) => o.includes(Q.slot))
                    .map((Q) => {
                      var I, w, D;
                      const h = Be(A, n, a, Q.slot),
                        d = bi(A, a, Q.slot);
                      return t.jsxs(
                        "button",
                        {
                          className: "sessioncard",
                          onClick: () =>
                            C(
                              `/teacher/planner?day=${a}&slot=${encodeURIComponent(Q.slot)}`,
                            ),
                          children: [
                            t.jsx("span", {
                              className: `slotbadge ${Ca[Q.slot]}`,
                              children: vi[Q.slot],
                            }),
                            t.jsxs("span", {
                              children: [
                                t.jsxs("small", {
                                  children: [Q.slot, " · ", jt[Q.slot]],
                                }),
                                t.jsx("strong", {
                                  style: { display: "block" },
                                  children: Q.items.join(" · "),
                                }),
                                t.jsxs("span", {
                                  className: "chips",
                                  children: [
                                    (I = d.videos) != null && I.length
                                      ? t.jsxs(v, {
                                          tone: "blue",
                                          children: [
                                            t.jsx(S, { n: "play" }),
                                            "Video",
                                          ],
                                        })
                                      : null,
                                    (w = d.lessonPlans) != null && w.length
                                      ? t.jsxs(v, {
                                          tone: "pink",
                                          children: [
                                            t.jsx(S, { n: "book" }),
                                            "Lesson plan",
                                          ],
                                        })
                                      : null,
                                    (D = d.activities) != null && D.length
                                      ? t.jsxs(v, {
                                          tone: "warn",
                                          children: [
                                            t.jsx(S, { n: "star" }),
                                            "Activity",
                                          ],
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }),
                            t.jsx(SE, { s: h }),
                          ],
                        },
                        Q.slot,
                      );
                    }),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "stack",
            children: [
              t.jsxs("div", {
                className: "card pad",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Plan progress",
                  }),
                  t.jsxs("h2", { children: ["Day ", a, " of 180"] }),
                  t.jsx(TA, { v: gA(c, 180), tone: "good" }),
                  t.jsxs("small", {
                    children: [c, " days done · ", 180 - c, " remaining"],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "card pad stack",
                children: [
                  t.jsx("div", { className: "eyebrow", children: "To do" }),
                  t.jsxs(K, {
                    to: "/teacher/assignments",
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        children: [
                          t.jsx(S, { n: "star" }),
                          " Home activities running",
                        ],
                      }),
                      t.jsx(v, { children: m.length }),
                    ],
                  }),
                  t.jsxs(K, {
                    to: "/teacher/observations",
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        children: [
                          t.jsx(S, { n: "eye" }),
                          " Record today’s observations",
                        ],
                      }),
                      t.jsxs(v, {
                        tone: "primary",
                        children: [g.length, " children"],
                      }),
                    ],
                  }),
                  t.jsxs(K, {
                    to: "/teacher/notifications",
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        children: [t.jsx(S, { n: "bell" }), " Unread updates"],
                      }),
                      t.jsx(v, {
                        tone: u.length ? "pink" : "",
                        children: u.length,
                      }),
                    ],
                  }),
                ],
              }),
              u[0] &&
                t.jsxs("div", {
                  className: "notice info",
                  children: [
                    t.jsx(S, { n: "bell" }),
                    t.jsx("span", { children: u[0].text }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function SE({ s: A }) {
  const e = {
    pending: ["Pending", ""],
    done: ["Done", "good"],
    skipped: ["Skipped", "warn"],
    rescheduled: ["Moved", "blue"],
  };
  return t.jsx(v, { tone: e[A][1], children: e[A][0] });
}
function Tu() {
  const { db: A, sectionId: e, slots: n, position: s } = MA(),
    { update: i, toast: l } = b(),
    [r, o] = QE(),
    a = H(),
    g = Number(r.get("day") ?? s),
    C = r.get("slot"),
    [E, c] = B.useState(ft(g)),
    m = Ci(g),
    u = [0, 1, 2, 3, 4].map((D) => (m - 1) * 5 + 1 + D),
    Q = nn(g),
    h = Q ? Q.sessions.filter((D) => n.includes(D.slot)) : [],
    d = h.filter((D) => Be(A, e, g, D.slot) !== "pending").length,
    I = (D, j) => {
      const J = { day: String(D) };
      (j && (J.slot = j), o(J));
    },
    w = () => {
      let D = !1;
      (i((j) => {
        var J;
        (J = j.sessionState)[e] ?? (J[e] = {});
        for (const M of h)
          Be(j, e, g, M.slot) === "pending" &&
            (j.sessionState[e][$e(g, M.slot)] = "done");
        ((D = Q.sessions.every((M) => Be(j, e, g, M.slot) !== "pending")),
          D &&
            (j.classPosition[e] ?? is) === g &&
            (j.classPosition[e] = g + 1));
      }),
        l(
          D
            ? `Day ${g} marked as done`
            : `Your sessions for Day ${g} marked as done · waiting on other subjects`,
        ));
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "180-day curriculum",
        title: "My planner",
        sub: `${z(A, e)} · Month ${ft(g)} · Week ${m}`,
        children: [
          t.jsxs("button", {
            className: "btn secondary",
            onClick: () => a(`/teacher/smartboard/${g}`),
            children: [t.jsx(S, { n: "tv" }), "Smartboard mode"],
          }),
          t.jsxs("label", {
            className: "row",
            children: [
              t.jsx("span", { className: "muted", children: "Go to day" }),
              t.jsx("select", {
                className: "input",
                style: { width: 110 },
                value: g,
                onChange: (D) => {
                  const j = Number(D.target.value);
                  (c(ft(j)), I(j));
                },
                children: Array.from({ length: 180 }, (D, j) => j + 1).map(
                  (D) =>
                    t.jsxs("option", { value: D, children: ["Day ", D] }, D),
                ),
              }),
            ],
          }),
        ],
      }),
      t.jsx("div", {
        className: "monthgrid",
        role: "tablist",
        "aria-label": "Months",
        children: Array.from({ length: 9 }, (D, j) => j + 1).map((D) =>
          t.jsxs(
            "button",
            {
              className: `${D === E ? "on" : ""} ${D !== 4 ? "empty" : ""}`,
              onClick: () => {
                (c(D), I((D - 1) * 20 + 1));
              },
              children: ["Month ", D],
            },
            D,
          ),
        ),
      }),
      t.jsxs("div", {
        className: "weekstrip section",
        style: { marginTop: 16 },
        children: [
          t.jsx("button", {
            className: "iconbtn edge",
            "aria-label": "Previous week",
            disabled: m <= 1,
            onClick: () => I(Math.max(1, g - 5)),
            children: t.jsx(S, { n: "back" }),
          }),
          u.map((D) => {
            const j = nn(D),
              J = j ? j.sessions.filter((p) => n.includes(p.slot)).length : 0,
              M = j
                ? j.sessions.filter(
                    (p) =>
                      n.includes(p.slot) && Be(A, e, D, p.slot) !== "pending",
                  ).length
                : 0;
            return t.jsxs(
              "button",
              {
                className: `daytile ${D === g ? "on" : ""} ${J && M === J ? "done" : ""}`,
                onClick: () => I(D),
                children: [
                  t.jsx("small", {
                    children: CA(Qt(D), {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    }),
                  }),
                  t.jsxs("strong", { children: ["Day ", D] }),
                  D === s &&
                    t.jsx("span", {
                      className: "today",
                      children: "Class is here",
                    }),
                  t.jsx("small", {
                    children: j ? `${M}/${J} resolved` : "No content yet",
                  }),
                ],
              },
              D,
            );
          }),
          t.jsx("button", {
            className: "iconbtn edge",
            "aria-label": "Next week",
            disabled: m >= 36,
            onClick: () => I(Math.min(180, g + 5)),
            children: t.jsx(S, { n: "arrow" }),
          }),
        ],
      }),
      t.jsxs("div", {
        className: "row between wrap section",
        style: { marginTop: 20 },
        children: [
          t.jsxs("div", {
            children: [
              t.jsxs("div", {
                className: "eyebrow",
                children: ["Month ", ft(g), " · Week ", m],
              }),
              t.jsxs("h2", { children: ["Day ", g] }),
              t.jsxs("small", {
                children: [
                  "Planned for ",
                  CA(Qt(g), {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }),
                ],
              }),
            ],
          }),
          g !== s &&
            t.jsx("button", {
              className: "btn secondary",
              onClick: () => {
                (i((D) => {
                  D.classPosition[e] = g;
                }),
                  l(`Class position set to Day ${g}`));
              },
              children: "Set class position to this day",
            }),
        ],
      }),
      Q
        ? t.jsxs(t.Fragment, {
            children: [
              t.jsxs("div", {
                className: "stack section",
                style: { marginTop: 14 },
                children: [
                  h.map((D) =>
                    t.jsx(
                      Vu,
                      { day: g, slot: D.slot, onOpen: () => I(g, D.slot) },
                      D.slot,
                    ),
                  ),
                  h.length === 0 &&
                    t.jsx("div", {
                      className: "card",
                      children: t.jsx(_, {
                        title: "No sessions for this subject today",
                      }),
                    }),
                ],
              }),
              t.jsxs("div", {
                className: "daybar",
                children: [
                  t.jsxs("span", {
                    children: [
                      t.jsxs("b", { children: [d, " of ", h.length] }),
                      " sessions resolved",
                    ],
                  }),
                  t.jsxs("button", {
                    className: "btn good",
                    disabled: d === h.length,
                    onClick: w,
                    children: [t.jsx(S, { n: "check" }), "Mark day as done"],
                  }),
                ],
              }),
            ],
          })
        : t.jsx("div", {
            className: "card section",
            children: t.jsxs(_, {
              icon: "calendar",
              title: `Planner for Month ${ft(g)} not uploaded yet`,
              children: [
                t.jsx("p", {
                  children:
                    "Only the Month 4 sample planner (Days 61–80) is in this prototype. EzRoots uploads the other months.",
                }),
                t.jsx("button", {
                  className: "btn secondary",
                  onClick: () => {
                    (c(4), I(61));
                  },
                  children: "Go to Day 61",
                }),
              ],
            }),
          }),
      Q && C && t.jsx(Ku, { day: g, slot: C, onClose: () => I(g) }, C),
    ],
  });
}
function Vu({ day: A, slot: e, onOpen: n }) {
  var C, E, c;
  const { db: s, sectionId: i, pkg: l } = MA(),
    r = nn(A).sessions.find((m) => m.slot === e),
    o = bi(s, A, e),
    a = Be(s, i, A, e),
    g = s.offlineSaved.includes(`${A}|${e}`);
  return t.jsxs("button", {
    className: "sessioncard",
    onClick: n,
    children: [
      t.jsx("span", { className: `slotbadge ${Ca[e]}`, children: vi[e] }),
      t.jsxs("span", {
        children: [
          t.jsxs("small", { children: [e, " · ", jt[e]] }),
          r.items.map((m) =>
            t.jsx("strong", { style: { display: "block" }, children: m }, m),
          ),
          t.jsxs("small", {
            children: ["Materials: ", r.materials || "none listed"],
          }),
          t.jsxs("span", {
            className: "chips",
            children: [
              (C = o.videos) == null
                ? void 0
                : C.map((m) => {
                    var u;
                    return t.jsxs(
                      v,
                      {
                        tone: "blue",
                        children: [
                          t.jsx(S, { n: "play" }),
                          (u = JA(m)) == null ? void 0 : u.title,
                        ],
                      },
                      m,
                    );
                  }),
              (E = o.lessonPlans) == null
                ? void 0
                : E.map((m) =>
                    t.jsxs(
                      v,
                      {
                        tone: "pink",
                        children: [t.jsx(S, { n: "book" }), "Lesson plan"],
                      },
                      m,
                    ),
                  ),
              (c = o.activities) == null
                ? void 0
                : c.map((m) => {
                    const u = s.activities.find((h) => h.id === m),
                      Q = !_e(l, u == null ? void 0 : u.tier) || !_e(l, o.tier);
                    return t.jsxs(
                      v,
                      {
                        tone: Q ? "lock" : "warn",
                        children: [
                          Q ? t.jsx(S, { n: "lock" }) : t.jsx(S, { n: "star" }),
                          u == null ? void 0 : u.title,
                        ],
                      },
                      m,
                    );
                  }),
              g &&
                t.jsxs(v, {
                  tone: "good",
                  children: [t.jsx(S, { n: "down" }), "Offline"],
                }),
            ],
          }),
        ],
      }),
      t.jsx(SE, { s: a }),
    ],
  });
}
function Ku({ day: A, slot: e, onClose: n }) {
  var aA, U, $A, re, xe, LA, y;
  const { db: s, sectionId: i, school: l, pkg: r } = MA(),
    { update: o, toast: a } = b(),
    g = nn(A).sessions.find((Z) => Z.slot === e),
    C = bi(s, A, e),
    E = $e(A, e),
    c = Be(s, i, A, e),
    m = `${i}|${E}`,
    [u, Q] = B.useState(null),
    [h, d] = B.useState(((aA = C.videos) == null ? void 0 : aA[0]) ?? null),
    [I, w] = B.useState(null),
    [D, j] = B.useState(!1),
    [J, M] = B.useState(!1),
    p = s.offlineSaved.includes(E),
    k = (Z) =>
      o((Y) => {
        var L;
        ((L = Y.sessionState)[i] ?? (L[i] = {}), (Y.sessionState[i][E] = Z));
      }),
    x = {
      pending: "Pending",
      done: "Done",
      skipped: "Skipped",
      rescheduled: "Rescheduled",
    },
    eA =
      ((U = C.videos) == null ? void 0 : U.length) ||
      (($A = C.lessonPlans) == null ? void 0 : $A.length) ||
      ((re = C.activities) == null ? void 0 : re.length);
  return t.jsxs(mu, {
    title: `Day ${A} · ${e}`,
    onClose: n,
    children: [
      t.jsxs("div", {
        className: "row wrap",
        children: [
          t.jsx(v, { tone: "primary", children: jt[e] }),
          t.jsx(v, {
            children: CA(Qt(A), {
              weekday: "short",
              day: "numeric",
              month: "short",
            }),
          }),
          p && t.jsx(v, { tone: "good", children: "Saved offline" }),
        ],
      }),
      t.jsx("div", {
        children: g.items.map((Z) => t.jsx("h2", { children: Z }, Z)),
      }),
      t.jsxs("div", {
        className: "card pad",
        children: [
          t.jsx("div", {
            className: "eyebrow",
            children: "Materials required",
          }),
          t.jsx("p", {
            children: g.materials || "None listed in the planner.",
          }),
        ],
      }),
      s.offline &&
        !p &&
        t.jsxs("div", {
          className: "notice",
          children: [
            t.jsx(S, { n: "wifi" }),
            "You are offline and this session isn’t saved. Videos and lesson plans can’t open until you reconnect.",
          ],
        }),
      h && (!s.offline || p) && JA(h) && t.jsx(Yi, { v: JA(h) }),
      t.jsxs("div", {
        className: "card pad stack",
        children: [
          t.jsxs("div", {
            className: "row between",
            children: [
              t.jsx("div", {
                className: "eyebrow",
                children: "Linked resources",
              }),
              eA
                ? t.jsx(v, {
                    tone: "warn",
                    children: "Sample link · not confirmed by EzRoots",
                  })
                : null,
            ],
          }),
          !eA &&
            t.jsx("small", {
              children:
                "No video or lesson plan linked yet. EzRoots links them from the Content Admin day editor.",
            }),
          (xe = C.videos) == null
            ? void 0
            : xe.map((Z) => {
                var Y, L;
                return t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        className: "row",
                        children: [
                          t.jsx("span", {
                            className: "fileicon video",
                            children: t.jsx(S, { n: "play" }),
                          }),
                          t.jsxs("span", {
                            children: [
                              t.jsx("b", {
                                children:
                                  (Y = JA(Z)) == null ? void 0 : Y.title,
                              }),
                              t.jsxs("small", {
                                style: { display: "block" },
                                children: [
                                  "Video · ",
                                  (L = JA(Z)) == null ? void 0 : L.duration,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("button", {
                        className: "btn sm secondary",
                        onClick: () => d(Z),
                        children: "Play",
                      }),
                    ],
                  },
                  Z,
                );
              }),
          (LA = C.lessonPlans) == null
            ? void 0
            : LA.map((Z) => {
                const Y = ze(Z);
                return t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        className: "row",
                        children: [
                          t.jsx("span", {
                            className: "fileicon pdf",
                            children: t.jsx(S, { n: "book" }),
                          }),
                          t.jsxs("span", {
                            children: [
                              t.jsx("b", { children: Y.title }),
                              t.jsxs("small", {
                                style: { display: "block" },
                                children: [
                                  "Lesson plan · Level ",
                                  Y.level,
                                  " · ",
                                  Y.dayOrMonth,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("button", {
                        className: "btn sm secondary",
                        disabled: s.offline && !p,
                        onClick: () => Q(Z),
                        children: "Open",
                      }),
                    ],
                  },
                  Z,
                );
              }),
          (y = C.activities) == null
            ? void 0
            : y.map((Z) => {
                const Y = s.activities.find((cA) => cA.id === Z),
                  L = _e(r, Y.tier) && _e(r, C.tier);
                return t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        className: "row",
                        children: [
                          t.jsx("span", {
                            className: "fileicon activity",
                            children: t.jsx(S, { n: "star" }),
                          }),
                          t.jsxs("span", {
                            children: [
                              t.jsx("b", { children: Y.title }),
                              t.jsxs("small", {
                                style: { display: "block" },
                                children: [
                                  "Interactive activity · ",
                                  Y.minutes,
                                  " min · ",
                                  Y.concept,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      L
                        ? t.jsx("button", {
                            className: "btn sm",
                            onClick: () => w(Z),
                            children: "Assign",
                          })
                        : t.jsxs(v, {
                            tone: "lock",
                            children: [
                              t.jsx(S, { n: "lock" }),
                              "Needs ",
                              Y.tier,
                            ],
                          }),
                    ],
                  },
                  Z,
                );
              }),
        ],
      }),
      t.jsxs("div", {
        className: "row wrap",
        children: [
          t.jsxs("button", {
            className: "btn secondary",
            onClick: () => {
              (o((Z) => {
                Z.offlineSaved = p
                  ? Z.offlineSaved.filter((Y) => Y !== E)
                  : [...Z.offlineSaved, E];
              }),
                a(p ? "Removed from offline" : "Saved for offline use"));
            },
            children: [
              t.jsx(S, { n: "down" }),
              p ? "Remove offline copy" : "Save offline",
            ],
          }),
          t.jsxs("button", {
            className: "btn ghost",
            onClick: () => j(!0),
            children: [t.jsx(S, { n: "flag" }), "Report a content issue"],
          }),
        ],
      }),
      t.jsx(N, {
        label: "Private teaching note",
        hint: "only you see this",
        children: t.jsx("textarea", {
          className: "input",
          value: s.notes[m] ?? "",
          placeholder: "e.g. Use the red stickers; the orange ones ran out.",
          onChange: (Z) =>
            o((Y) => {
              Y.notes[m] = Z.target.value;
            }),
        }),
      }),
      t.jsxs("div", {
        children: [
          t.jsx("div", { className: "eyebrow", children: "Session status" }),
          t.jsx(DA, {
            value: x[c],
            options: ["Pending", "Done", "Skipped", "Rescheduled"],
            onChange: (Z) => {
              if (Z === "Rescheduled") return M(!0);
              (k(Object.keys(x).find((Y) => x[Y] === Z)),
                a(`Marked ${Z.toLowerCase()}`));
            },
          }),
          c === "rescheduled" &&
            t.jsxs("p", {
              className: "muted",
              style: { marginTop: 6 },
              children: ["Moved to Day ", s.reschedules[`${i}|${E}`], "."],
            }),
        ],
      }),
      u &&
        t.jsx(AA, {
          wide: !0,
          title: ze(u).title,
          onClose: () => Q(null),
          children: t.jsx(da, { lp: ze(u), school: l.name }),
        }),
      I && t.jsx(ua, { activityId: I, day: A, onClose: () => w(null) }),
      D && t.jsx(Pu, { day: A, slot: e, onClose: () => j(!1) }),
      J &&
        t.jsx(Lu, {
          day: A,
          onClose: () => M(!1),
          onPick: (Z) => {
            (o((Y) => {
              var L;
              ((L = Y.sessionState)[i] ?? (L[i] = {}),
                (Y.sessionState[i][E] = "rescheduled"),
                (Y.reschedules[`${i}|${E}`] = Z));
            }),
              a(`Moved to Day ${Z}`),
              M(!1));
          },
        }),
    ],
  });
}
function Lu({ day: A, onClose: e, onPick: n }) {
  const s = pe.filter((r) => r.day > A).map((r) => r.day),
    [i, l] = B.useState(s[0]);
  return t.jsxs(AA, {
    title: "Reschedule this session",
    onClose: e,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: e,
          children: "Cancel",
        }),
        t.jsx("button", {
          className: "btn",
          disabled: !i,
          onClick: () => n(i),
          children: "Move session",
        }),
      ],
    }),
    children: [
      s.length === 0
        ? t.jsx("p", {
            children: "No later days with content in this planner.",
          })
        : t.jsx(N, {
            label: "Move to",
            children: t.jsx("select", {
              className: "input",
              value: i,
              onChange: (r) => l(Number(r.target.value)),
              children: s.map((r) =>
                t.jsxs(
                  "option",
                  {
                    value: r,
                    children: [
                      "Day ",
                      r,
                      " · ",
                      CA(Qt(r), {
                        weekday: "short",
                        day: "numeric",
                        month: "short",
                      }),
                    ],
                  },
                  r,
                ),
              ),
            }),
          }),
      t.jsx("small", {
        children:
          "Useful when a sports day, event or holiday changes the pace.",
      }),
    ],
  });
}
function Pu({ day: A, slot: e, onClose: n }) {
  const { update: s, toast: i } = b(),
    { me: l, school: r } = MA(),
    [o, a] = B.useState("");
  return t.jsx(AA, {
    title: `Report an issue · Day ${A} ${e}`,
    onClose: n,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: n,
          children: "Cancel",
        }),
        t.jsx("button", {
          className: "btn",
          disabled: !o.trim(),
          onClick: () => {
            (s((g) => {
              (g.issues.unshift({
                id: O("is"),
                day: A,
                slot: e,
                text: o,
                by: `${l.name} · ${r.name}`,
                date: uA,
                status: "open",
              }),
                g.notices.unshift({
                  id: O("n"),
                  to: "u-ca",
                  text: `${l.name} reported an issue on Day ${A} · ${e}.`,
                  link: "/ca/issues",
                  date: uA,
                  read: !1,
                }));
            }),
              i("Sent to the EzRoots academic team"),
              n());
          },
          children: "Send to EzRoots",
        }),
      ],
    }),
    children: t.jsx(N, {
      label: "What’s wrong?",
      children: t.jsx("textarea", {
        className: "input",
        value: o,
        onChange: (g) => a(g.target.value),
        placeholder: "Wrong material, broken video, typo in the lesson plan…",
      }),
    }),
  });
}
function ua({ activityId: A, day: e, onClose: n }) {
  var aA;
  const {
      db: s,
      me: i,
      sectionId: l,
      section: r,
      pkg: o,
      students: a,
      subject: g,
    } = MA(),
    { update: C, toast: E } = b(),
    c = H(),
    m = s.activities.filter(
      (U) => U.level === r.level && U.status === "published" && _e(o, U.tier),
    ),
    [u, Q] = B.useState(A ?? ((aA = m[0]) == null ? void 0 : aA.id)),
    [h, d] = B.useState("Home activity"),
    [I, w] = B.useState("Whole class"),
    [D, j] = B.useState([]),
    [J, M] = B.useState("2026-10-02"),
    [p, k] = B.useState(""),
    x = s.activities.find((U) => U.id === u),
    eA = () => {
      const U = O("as");
      (C(($A) => {
        const re = {
          id: U,
          sectionId: l,
          subject:
            (x == null ? void 0 : x.subject) ??
            (g === "All" ? "Activities" : g),
          activityId: u,
          mode: h === "In class now" ? "class" : "home",
          due: J,
          studentIds: I === "Whole class" ? "all" : D,
          createdBy: i.id,
          createdAt: uA,
          day: e,
          note: p,
        };
        $A.assignments.unshift(re);
        const xe =
          I === "Whole class" ? a : a.filter((LA) => D.includes(LA.id));
        for (const LA of xe)
          ($A.notices.unshift({
            id: O("n"),
            to: `u-${LA.id}`,
            text: `New ${re.mode === "home" ? "home activity" : "class activity"}: ${x == null ? void 0 : x.title}`,
            link: "/student",
            date: uA,
            read: !1,
          }),
            $A.notices.unshift({
              id: O("n"),
              to: LA.parentId,
              text: `New ${re.mode === "home" ? "home activity" : "class activity"} for ${LA.name.split(" ")[0]}: ${x == null ? void 0 : x.title}`,
              link: "/parent/activities",
              date: uA,
              read: !1,
            }));
      }),
        E(
          `${x == null ? void 0 : x.title} assigned · children and parents notified`,
        ),
        n(),
        c("/teacher/assignments"));
    };
  return t.jsxs(AA, {
    title: "Assign an activity",
    onClose: n,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: n,
          children: "Cancel",
        }),
        t.jsx("button", {
          className: "btn",
          disabled: !u || (I === "Selected children" && !D.length),
          onClick: eA,
          children: "Assign & notify",
        }),
      ],
    }),
    children: [
      t.jsx(N, {
        label: "Activity",
        children: t.jsx("select", {
          className: "input",
          value: u,
          onChange: (U) => Q(U.target.value),
          children: m.map((U) =>
            t.jsxs(
              "option",
              { value: U.id, children: [U.title, " · ", U.concept] },
              U.id,
            ),
          ),
        }),
      }),
      x &&
        t.jsxs("div", {
          className: "demo-note",
          children: [
            x.art,
            " ",
            x.blurb,
            " · ",
            x.minutes,
            " min · ",
            x.template,
            " template",
          ],
        }),
      t.jsxs("div", {
        children: [
          t.jsx("div", { className: "eyebrow", children: "When" }),
          t.jsx(DA, {
            value: h,
            options: ["In class now", "Home activity"],
            onChange: d,
          }),
        ],
      }),
      h === "Home activity" &&
        t.jsx(N, {
          label: "Due by",
          children: t.jsx("input", {
            className: "input",
            type: "date",
            value: J,
            onChange: (U) => M(U.target.value),
          }),
        }),
      t.jsxs("div", {
        children: [
          t.jsx("div", { className: "eyebrow", children: "Who" }),
          t.jsx(DA, {
            value: I,
            options: ["Whole class", "Selected children"],
            onChange: w,
          }),
        ],
      }),
      I === "Selected children" &&
        t.jsx("div", {
          className: "grid g2",
          children: a.map((U) =>
            t.jsxs(
              "label",
              {
                className: "check",
                children: [
                  t.jsx("input", {
                    type: "checkbox",
                    checked: D.includes(U.id),
                    onChange: ($A) =>
                      j(
                        $A.target.checked
                          ? [...D, U.id]
                          : D.filter((re) => re !== U.id),
                      ),
                  }),
                  U.name,
                ],
              },
              U.id,
            ),
          ),
        }),
      t.jsx(N, {
        label: "Note for families",
        hint: "optional",
        children: t.jsx("input", {
          className: "input",
          value: p,
          onChange: (U) => k(U.target.value),
        }),
      }),
    ],
  });
}
function Ou() {
  var m, u, Q;
  const { day: A } = on(),
    e = Number(A),
    { db: n, slots: s, school: i } = MA(),
    l = H(),
    r = nn(e),
    o = r ? r.sessions.filter((h) => s.includes(h.slot)) : [],
    [a, g] = B.useState(0),
    C = o[a],
    E = C ? bi(n, e, C.slot) : {},
    c = (m = E.lessonPlans) != null && m[0] ? ze(E.lessonPlans[0]) : void 0;
  return t.jsxs("div", {
    className: "smartboard",
    children: [
      t.jsxs("div", {
        className: "top",
        children: [
          t.jsxs("div", {
            children: [
              t.jsxs("div", {
                className: "eyebrow",
                style: { color: "#cbbdf0" },
                children: ["Smartboard · Day ", e],
              }),
              t.jsx("h2", {
                children: C ? `${C.slot} · ${jt[C.slot]}` : "No content",
              }),
            ],
          }),
          t.jsxs("div", {
            className: "actions",
            children: [
              t.jsxs("button", {
                className: "btn secondary",
                disabled: a === 0,
                onClick: () => g(a - 1),
                children: [t.jsx(S, { n: "back" }), "Previous"],
              }),
              t.jsxs("span", { children: [a + 1, " / ", o.length] }),
              t.jsxs("button", {
                className: "btn secondary",
                disabled: a >= o.length - 1,
                onClick: () => g(a + 1),
                children: ["Next", t.jsx(S, { n: "arrow" })],
              }),
              t.jsxs("button", {
                className: "btn",
                onClick: () => l(`/teacher/planner?day=${e}`),
                children: [t.jsx(S, { n: "x" }), "Exit"],
              }),
            ],
          }),
        ],
      }),
      C &&
        t.jsxs("div", {
          className: "stage",
          children: [
            t.jsxs("div", {
              className: "panel stack",
              children: [
                t.jsx("div", {
                  className: "bigtext",
                  children: C.items.join(" · "),
                }),
                (u = E.videos) != null && u[0] && JA(E.videos[0])
                  ? t.jsx("video", {
                      className: "player",
                      controls: !0,
                      src: Ea(JA(E.videos[0]).folder, JA(E.videos[0]).file),
                    })
                  : t.jsxs("div", {
                      className: "empty",
                      style: { color: "#cbbdf0" },
                      children: [
                        t.jsx(S, { n: "play", size: 40 }),
                        t.jsx("h3", {
                          style: { color: "#fff" },
                          children: "No video for this session",
                        }),
                      ],
                    }),
              ],
            }),
            t.jsxs("div", {
              className: "panel stack",
              children: [
                t.jsx("h3", { children: "Materials" }),
                t.jsx("p", {
                  style: { fontSize: 20 },
                  children: C.materials || "None listed",
                }),
                c &&
                  t.jsxs(t.Fragment, {
                    children: [
                      t.jsx("h3", { children: "Lesson plan" }),
                      t.jsx("p", {
                        style: { fontSize: 18 },
                        children: c.title,
                      }),
                      t.jsxs("small", {
                        style: { color: "#cbbdf0" },
                        children: [c.objectives.slice(0, 220), "…"],
                      }),
                    ],
                  }),
                (Q = E.activities) == null
                  ? void 0
                  : Q.map((h) => {
                      var d;
                      return t.jsxs(
                        "div",
                        {
                          className: "card pad",
                          style: {
                            background: "rgba(255,255,255,.1)",
                            border: 0,
                            color: "#fff",
                          },
                          children: [
                            t.jsxs("b", {
                              children: [
                                "Class activity: ",
                                (d = n.activities.find((I) => I.id === h)) ==
                                null
                                  ? void 0
                                  : d.title,
                              ],
                            }),
                            t.jsx("p", {
                              children:
                                "Play together on the board, one child at a time.",
                            }),
                          ],
                        },
                        h,
                      );
                    }),
                t.jsxs("small", {
                  style: { color: "#cbbdf0" },
                  children: [i.name, " · large text, one session at a time"],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function zu() {
  const { db: A, section: e, pkg: n, school: s, subject: i } = MA(),
    [l] = QE(),
    [r, o] = B.useState(l.get("q") ?? ""),
    [a, g] = B.useState("Lesson plans"),
    [C, E] = B.useState("All folders"),
    [c, m] = B.useState(null),
    [u, Q] = B.useState(null),
    [h, d] = B.useState(null),
    I = (M) => M.toLowerCase().includes(r.toLowerCase()),
    w = tn.filter(
      (M) =>
        (C === "All folders" || M.folder === C) &&
        (I(M.title) || I(M.folder) || I(M.objectives)),
    ),
    D = yi.filter((M) => I(M.title) || I(M.folder)),
    j = A.activities.filter(
      (M) =>
        M.status === "published" &&
        (i === "All" || M.subject === i) &&
        (I(M.title) || I(M.concept)),
    ),
    J = ["All folders", ...new Set(tn.map((M) => M.folder))];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `${s.track} track · ${n} package`,
        title: "Library",
        sub: "Everything EzRoots has shared with your school. View-only unless marked otherwise.",
        children: t.jsx(DA, {
          value: a,
          options: ["Lesson plans", "Videos", "Activities"],
          onChange: g,
        }),
      }),
      t.jsxs("div", {
        className: "row wrap",
        style: { marginBottom: 16 },
        children: [
          t.jsxs("div", {
            className: "search",
            style: { maxWidth: 520 },
            children: [
              t.jsx(S, { n: "search" }),
              t.jsx("input", {
                "aria-label": "Search library",
                value: r,
                onChange: (M) => o(M.target.value),
                placeholder: "Search by topic, code or material",
              }),
            ],
          }),
          a === "Lesson plans" &&
            t.jsx("select", {
              className: "input",
              style: { width: 200 },
              value: C,
              onChange: (M) => E(M.target.value),
              children: J.map((M) => t.jsx("option", { children: M }, M)),
            }),
        ],
      }),
      t.jsxs("div", {
        className: "card tablewrap",
        children: [
          a === "Lesson plans" &&
            t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Lesson plan" }),
                      t.jsx("th", { children: "Folder" }),
                      t.jsx("th", { children: "Level" }),
                      t.jsx("th", { children: "Day / month" }),
                      t.jsx("th", {}),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: w.map((M) =>
                    t.jsxs(
                      "tr",
                      {
                        className: "click",
                        onClick: () => m(M.id),
                        children: [
                          t.jsx("td", {
                            children: t.jsxs("div", {
                              className: "row",
                              children: [
                                t.jsx("span", {
                                  className: "fileicon pdf",
                                  children: t.jsx(S, { n: "book" }),
                                }),
                                t.jsxs("span", {
                                  children: [
                                    t.jsx("strong", { children: M.title }),
                                    t.jsxs("small", {
                                      children: [M.pages, " pages · view only"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          t.jsx("td", { children: M.folder }),
                          t.jsx("td", {
                            children: M.level ? `Level ${M.level}` : "—",
                          }),
                          t.jsx("td", { children: M.dayOrMonth || "—" }),
                          t.jsx("td", {
                            children: t.jsx("button", {
                              className: "btn sm secondary",
                              children: "Open",
                            }),
                          }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                }),
              ],
            }),
          a === "Videos" &&
            t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Video" }),
                      t.jsx("th", { children: "Folder" }),
                      t.jsx("th", { children: "Length" }),
                      t.jsx("th", { children: "Size" }),
                      t.jsx("th", {}),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: D.map((M) =>
                    t.jsxs(
                      "tr",
                      {
                        className: "click",
                        onClick: () => Q(M.id),
                        children: [
                          t.jsx("td", {
                            children: t.jsxs("div", {
                              className: "row",
                              children: [
                                t.jsx("span", {
                                  className: "fileicon video",
                                  children: t.jsx(S, { n: "play" }),
                                }),
                                t.jsx("strong", { children: M.title }),
                              ],
                            }),
                          }),
                          t.jsx("td", { children: M.folder }),
                          t.jsx("td", { children: M.duration }),
                          t.jsxs("td", { children: [M.sizeMB, " MB"] }),
                          t.jsx("td", {
                            children: t.jsx("button", {
                              className: "btn sm secondary",
                              children: "Play",
                            }),
                          }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                }),
              ],
            }),
          a === "Activities" &&
            t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Activity" }),
                      t.jsx("th", { children: "Class" }),
                      t.jsx("th", { children: "Concept" }),
                      t.jsx("th", { children: "Package" }),
                      t.jsx("th", {}),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: j.map((M) => {
                    const p = M.level === e.level && _e(n, M.tier);
                    return t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsx("td", {
                            children: t.jsxs("div", {
                              className: "row",
                              children: [
                                t.jsx("span", {
                                  className: "fileicon activity",
                                  children: t.jsx(S, { n: "star" }),
                                }),
                                t.jsxs("span", {
                                  children: [
                                    t.jsx("strong", { children: M.title }),
                                    t.jsx("small", { children: M.blurb }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          t.jsx("td", { children: M.level }),
                          t.jsx("td", { children: M.concept }),
                          t.jsx("td", {
                            children: _e(n, M.tier)
                              ? t.jsxs(v, {
                                  tone: "good",
                                  children: [M.tier, "+"],
                                })
                              : t.jsxs(v, {
                                  tone: "lock",
                                  children: [
                                    t.jsx(S, { n: "lock" }),
                                    "Needs ",
                                    M.tier,
                                  ],
                                }),
                          }),
                          t.jsx("td", {
                            children:
                              p &&
                              t.jsx("button", {
                                className: "btn sm",
                                onClick: () => d(M.id),
                                children: "Assign",
                              }),
                          }),
                        ],
                      },
                      M.id,
                    );
                  }),
                }),
              ],
            }),
          ((a === "Lesson plans" && !w.length) ||
            (a === "Videos" && !D.length) ||
            (a === "Activities" && !j.length)) &&
            t.jsx(_, {
              icon: "search",
              title: "Nothing matches",
              children: "Try another word.",
            }),
        ],
      }),
      c &&
        t.jsx(AA, {
          wide: !0,
          title: ze(c).title,
          onClose: () => m(null),
          children: t.jsx(da, { lp: ze(c), school: s.name }),
        }),
      u &&
        t.jsx(AA, {
          wide: !0,
          title: JA(u).title,
          onClose: () => Q(null),
          children: t.jsx(Yi, { v: JA(u) }),
        }),
      h && t.jsx(ua, { activityId: h, onClose: () => d(null) }),
    ],
  });
}
function kE(A, e) {
  const n =
      e.studentIds === "all"
        ? Cr(A, e.sectionId)
        : Cr(A, e.sectionId).filter((l) => e.studentIds.includes(l.id)),
    s = A.attempts.filter((l) => l.assignmentId === e.id),
    i = s.length
      ? Math.round(s.reduce((l, r) => l + r.score, 0) / s.length)
      : 0;
  return {
    total: n.length,
    done: new Set(s.map((l) => l.studentId)).size,
    avg: i,
    att: s,
  };
}
function Xu() {
  const { db: A, sectionId: e, subject: n } = MA(),
    [s, i] = B.useState(!1),
    l = H(),
    r = A.assignments.filter(
      (o) => o.sectionId === e && (n === "All" || o.subject === n),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: z(A, e),
        title: "Assignments",
        sub: "Activities you enable for the class, in school or at home. Children only see what you enable.",
        children: [
          t.jsxs("button", {
            className: "btn secondary",
            onClick: () => l("/teacher/assignments/new"),
            children: [t.jsx(S, { n: "plus" }), "Add my own work"],
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => i(!0),
            children: [t.jsx(S, { n: "star" }), "Assign an activity"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "card tablewrap",
        children: [
          t.jsxs("table", {
            className: "table",
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", { children: "Activity" }),
                    t.jsx("th", { children: "Mode" }),
                    t.jsx("th", { children: "Due" }),
                    t.jsx("th", { children: "Completed" }),
                    t.jsx("th", { children: "Avg score" }),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: r.map((o) => {
                  const a = A.activities.find((C) => C.id === o.activityId),
                    g = kE(A, o);
                  return t.jsxs(
                    "tr",
                    {
                      className: "click",
                      onClick: () => l("/teacher/analytics"),
                      children: [
                        t.jsx("td", {
                          children: t.jsxs("div", {
                            className: "row",
                            children: [
                              t.jsx("span", {
                                className: "fileicon activity",
                                children: t.jsx(S, { n: "star" }),
                              }),
                              t.jsxs("span", {
                                children: [
                                  t.jsx("strong", {
                                    children: a == null ? void 0 : a.title,
                                  }),
                                  t.jsxs("small", {
                                    children: [
                                      o.subject,
                                      o.day ? ` · from Day ${o.day}` : "",
                                      (a == null ? void 0 : a.source) ===
                                      "Teacher"
                                        ? " · your own"
                                        : "",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        t.jsx("td", {
                          children:
                            o.mode === "home"
                              ? t.jsx(v, { tone: "pink", children: "Home" })
                              : t.jsx(v, {
                                  tone: "blue",
                                  children: "In class",
                                }),
                        }),
                        t.jsx("td", {
                          children: o.mode === "home" ? CA(o.due) : "—",
                        }),
                        t.jsxs("td", {
                          style: { minWidth: 150 },
                          children: [
                            g.done,
                            " / ",
                            g.total,
                            t.jsx(TA, { v: gA(g.done, g.total), tone: "good" }),
                          ],
                        }),
                        t.jsx("td", {
                          children: g.att.length ? `${g.avg}%` : "—",
                        }),
                      ],
                    },
                    o.id,
                  );
                }),
              }),
            ],
          }),
          !r.length &&
            t.jsx(_, {
              icon: "star",
              title: "No assignments yet",
              children: "Assign an activity from a planner session or here.",
            }),
        ],
      }),
      s && t.jsx(ua, { onClose: () => i(!1) }),
    ],
  });
}
function Hu() {
  const { db: A, me: e, sectionId: n, section: s, subject: i } = MA(),
    { update: l, toast: r } = b(),
    o = H(),
    [a, g] = B.useState(""),
    [C, E] = B.useState(i === "All" ? "Maths" : i),
    [c, m] = B.useState(""),
    [u, Q] = B.useState("Home activity");
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: z(A, n),
        title: "Add my own work",
        sub: "Extra practice for your class: instructions and an optional worksheet or photo.",
      }),
      t.jsxs("div", {
        className: "split",
        children: [
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (h) => {
              h.preventDefault();
              const d = O("act");
              (l((I) => {
                const w = {
                  id: d,
                  title: a,
                  template: "task",
                  level: s.level,
                  subject: C,
                  concept: "Teacher task",
                  minutes: 10,
                  tier: "Bronze",
                  status: "published",
                  art: "📝",
                  blurb: c,
                  source: "Teacher",
                };
                (I.activities.push(w),
                  I.assignments.unshift({
                    id: O("as"),
                    sectionId: n,
                    subject: C,
                    activityId: d,
                    mode: u === "Home activity" ? "home" : "class",
                    due: "2026-10-02",
                    studentIds: "all",
                    createdBy: e.id,
                    createdAt: uA,
                  }));
              }),
                r("Added and shared with the class"),
                o("/teacher/assignments"));
            },
            children: [
              t.jsx(N, {
                label: "Title",
                children: t.jsx("input", {
                  className: "input",
                  required: !0,
                  value: a,
                  onChange: (h) => g(h.target.value),
                  placeholder: "e.g. Find 3 thick things at home",
                }),
              }),
              t.jsx(N, {
                label: "Subject",
                children: t.jsx("select", {
                  className: "input",
                  value: C,
                  onChange: (h) => E(h.target.value),
                  children: Ct.map((h) => t.jsx("option", { children: h }, h)),
                }),
              }),
              t.jsx(N, {
                label: "Instructions",
                children: t.jsx("textarea", {
                  className: "input",
                  required: !0,
                  value: c,
                  onChange: (h) => m(h.target.value),
                }),
              }),
              t.jsx(N, {
                label: "Attach a worksheet or photo",
                hint: "optional",
                children: t.jsx("input", { className: "input", type: "file" }),
              }),
              t.jsxs("div", {
                children: [
                  t.jsx("div", { className: "eyebrow", children: "When" }),
                  t.jsx(DA, {
                    value: u,
                    options: ["In class now", "Home activity"],
                    onChange: Q,
                  }),
                ],
              }),
              t.jsx("button", {
                className: "btn",
                children: "Share with class",
              }),
            ],
          }),
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("div", { className: "eyebrow", children: "Coming later" }),
              t.jsx("h2", { children: "Build your own interactive activity" }),
              t.jsx("p", {
                className: "muted",
                children:
                  "Teachers will be able to build drag-and-drop, matching and sorting activities with the same builder EzRoots uses.",
              }),
              t.jsx("button", {
                className: "btn secondary",
                disabled: !0,
                children: "Open activity builder",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qu() {
  const { db: A, sectionId: e, students: n } = MA(),
    s = H();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: z(A, e),
        title: "Students",
        sub: `${n.length} children · open a child for results, observations and password reset`,
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Child" }),
                  t.jsx("th", { children: "Activities done" }),
                  t.jsx("th", { children: "Latest result" }),
                  t.jsx("th", { children: "Observations" }),
                  t.jsx("th", {}),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: n.map((i) => {
                const l = A.attempts.filter((a) => a.studentId === i.id),
                  r = A.assignments.filter(
                    (a) =>
                      a.sectionId === e &&
                      (a.studentIds === "all" || a.studentIds.includes(i.id)),
                  ).length,
                  o = l.at(-1);
                return t.jsxs(
                  "tr",
                  {
                    className: "click",
                    onClick: () => s(`/teacher/students/${i.id}`),
                    children: [
                      t.jsx("td", {
                        children: t.jsxs("div", {
                          className: "row",
                          children: [
                            t.jsx(pt, { name: i.name }),
                            t.jsx("strong", { children: i.name }),
                          ],
                        }),
                      }),
                      t.jsxs("td", {
                        style: { minWidth: 140 },
                        children: [
                          l.length,
                          " / ",
                          r,
                          t.jsx(TA, { v: gA(l.length, r), tone: "good" }),
                        ],
                      }),
                      t.jsx("td", {
                        children: o ? t.jsx(At, { level: o.level }) : "—",
                      }),
                      t.jsx("td", {
                        children: A.observations.filter(
                          (a) => a.studentId === i.id,
                        ).length,
                      }),
                      t.jsx("td", { children: t.jsx(S, { n: "arrow" }) }),
                    ],
                  },
                  i.id,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function $u() {
  const { id: A } = on(),
    { db: e, me: n, sectionId: s } = MA(),
    { update: i, toast: l } = b(),
    r = e.students.find((h) => h.id === A),
    [o, a] = B.useState(null),
    [g, C] = B.useState(""),
    [E, c] = B.useState(!1);
  if (!r) return t.jsx(_, { title: "Student not found" });
  const m = e.users.find((h) => h.id === r.parentId),
    u = e.attempts.filter((h) => h.studentId === r.id),
    Q = u.length
      ? Math.round(
          (u.reduce((h, d) => h + d.timeSec, 0) / u.length / 60) * 10,
        ) / 10
      : 0;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: z(e, r.sectionId),
        title: t.jsxs("span", {
          className: "row",
          children: [t.jsx(pt, { name: r.name, lg: !0 }), r.name],
        }),
        sub: `Username ${r.username} · Parent: ${m == null ? void 0 : m.name}`,
        children: [
          t.jsx("button", {
            className: "btn secondary",
            onClick: () => {
              (a(`${r.name} (student)`),
                C(`sun-${Math.floor(1e3 + Math.random() * 9e3)}`));
            },
            children: "Reset student password",
          }),
          t.jsx("button", {
            className: "btn secondary",
            onClick: () => {
              (a(`${m == null ? void 0 : m.name} (parent)`),
                C(`sun-${Math.floor(1e3 + Math.random() * 9e3)}`));
            },
            children: "Reset parent password",
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => c(!0),
            children: [t.jsx(S, { n: "eye" }), "Add observation"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, { label: "Activities done", value: u.length, icon: "star" }),
          t.jsx(F, {
            label: "Average score",
            value: u.length
              ? `${Math.round(u.reduce((h, d) => h + d.score, 0) / u.length)}%`
              : "—",
            icon: "chart",
            sub: "Completion is shown separately from mastery",
          }),
          t.jsx(F, {
            label: "Avg time per activity",
            value: `${Q} min`,
            icon: "clock",
          }),
          t.jsx(F, {
            label: "Observations",
            value: e.observations.filter((h) => h.studentId === r.id).length,
            icon: "eye",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsxs("div", {
            className: "card tablewrap",
            children: [
              t.jsxs("table", {
                className: "table",
                children: [
                  t.jsx("thead", {
                    children: t.jsxs("tr", {
                      children: [
                        t.jsx("th", { children: "Activity" }),
                        t.jsx("th", { children: "Level reached" }),
                        t.jsx("th", { children: "Score" }),
                        t.jsx("th", { children: "Time" }),
                        t.jsx("th", { children: "Tries" }),
                      ],
                    }),
                  }),
                  t.jsx("tbody", {
                    children: u.map((h) => {
                      var d;
                      return t.jsxs(
                        "tr",
                        {
                          children: [
                            t.jsxs("td", {
                              children: [
                                (d = e.activities.find(
                                  (I) => I.id === h.activityId,
                                )) == null
                                  ? void 0
                                  : d.title,
                                t.jsx("small", { children: CA(h.date) }),
                              ],
                            }),
                            t.jsx("td", {
                              children: t.jsx(At, { level: h.level }),
                            }),
                            t.jsxs("td", { children: [h.score, "%"] }),
                            t.jsxs("td", {
                              children: [Math.round(h.timeSec / 60), " min"],
                            }),
                            t.jsx("td", { children: h.tries }),
                          ],
                        },
                        h.id,
                      );
                    }),
                  }),
                ],
              }),
              !u.length &&
                t.jsx(_, { icon: "star", title: "No activity results yet" }),
            ],
          }),
          t.jsxs("div", {
            className: "stack",
            children: [
              t.jsxs("div", {
                className: "card pad stack",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Observations",
                  }),
                  e.observations
                    .filter((h) => h.studentId === r.id)
                    .map((h) =>
                      t.jsxs(
                        "div",
                        {
                          children: [
                            t.jsx("p", { children: h.text }),
                            t.jsxs("small", {
                              children: [
                                CA(h.date),
                                " · ",
                                h.concept,
                                " · ",
                                h.shared ? "shared with parent" : "private",
                              ],
                            }),
                          ],
                        },
                        h.id,
                      ),
                    ),
                ],
              }),
              t.jsxs("div", {
                className: "card pad stack",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Term assessments",
                  }),
                  e.assessments
                    .filter((h) => h.studentId === r.id)
                    .map((h) =>
                      t.jsxs(
                        "div",
                        {
                          className: "row between",
                          children: [
                            t.jsxs("span", {
                              children: [h.term, " · ", h.subject],
                            }),
                            t.jsx(At, { level: h.result }),
                          ],
                        },
                        h.id,
                      ),
                    ),
                  !e.assessments.some((h) => h.studentId === r.id) &&
                    t.jsx("small", { children: "No sheets uploaded yet." }),
                ],
              }),
            ],
          }),
        ],
      }),
      o &&
        t.jsxs(AA, {
          title: "Password reset",
          onClose: () => a(null),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => {
              (a(null), l("Temporary password shared"));
            },
            children: "Done",
          }),
          children: [
            t.jsxs("p", {
              children: [
                "New temporary password for ",
                t.jsx("b", { children: o }),
                ":",
              ],
            }),
            t.jsx("div", {
              className: "card pad",
              style: {
                fontFamily: "monospace",
                fontSize: 22,
                textAlign: "center",
              },
              children: g,
            }),
            t.jsx("small", {
              children:
                "They will be asked to choose a new password after signing in.",
            }),
          ],
        }),
      E &&
        t.jsx(fE, {
          studentId: r.id,
          onClose: () => c(!1),
          onSave: (h) => {
            (i((d) => {
              d.observations.unshift({
                ...h,
                id: O("ob"),
                sectionId: s,
                teacherId: n.id,
                date: uA,
              });
            }),
              l("Observation saved"));
          },
        }),
    ],
  });
}
function fE({ studentId: A, onClose: e, onSave: n }) {
  var d;
  const { students: s, subject: i } = MA(),
    [l, r] = B.useState(A ? "One child" : "Whole class"),
    [o, a] = B.useState(A ?? ((d = s[0]) == null ? void 0 : d.id)),
    [g, C] = B.useState(i === "All" ? "Activities" : i),
    [E, c] = B.useState(""),
    [m, u] = B.useState(""),
    [Q, h] = B.useState(l === "One child");
  return t.jsxs(AA, {
    title: "Record an observation",
    onClose: e,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: e,
          children: "Cancel",
        }),
        t.jsx("button", {
          className: "btn",
          disabled: !m.trim(),
          onClick: () => {
            (n({
              studentId: l === "One child" ? o : void 0,
              subject: g,
              concept: E || "General",
              text: m,
              shared: l === "One child" && Q,
            }),
              e());
          },
          children: "Save",
        }),
      ],
    }),
    children: [
      t.jsx(DA, {
        value: l,
        options: ["Whole class", "One child"],
        onChange: r,
      }),
      l === "One child" &&
        t.jsx(N, {
          label: "Child",
          children: t.jsx("select", {
            className: "input",
            value: o,
            onChange: (I) => a(I.target.value),
            children: s.map((I) =>
              t.jsx("option", { value: I.id, children: I.name }, I.id),
            ),
          }),
        }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsx(N, {
            label: "Subject",
            children: t.jsx("select", {
              className: "input",
              value: g,
              onChange: (I) => C(I.target.value),
              children: Ct.map((I) => t.jsx("option", { children: I }, I)),
            }),
          }),
          t.jsx(N, {
            label: "Concept",
            children: t.jsx("input", {
              className: "input",
              value: E,
              onChange: (I) => c(I.target.value),
              placeholder: "e.g. Thick & thin",
            }),
          }),
        ],
      }),
      t.jsx(N, {
        label: "What did you notice?",
        children: t.jsx("textarea", {
          className: "input",
          value: m,
          onChange: (I) => u(I.target.value),
        }),
      }),
      l === "One child" &&
        t.jsxs("label", {
          className: "check",
          children: [
            t.jsx(_n, { checked: Q, onChange: h, label: "Share with parent" }),
            "Share with the parent",
          ],
        }),
    ],
  });
}
function _u() {
  const { db: A, me: e, sectionId: n, subject: s } = MA(),
    { update: i, toast: l } = b(),
    [r, o] = B.useState(!1),
    [a, g] = B.useState("All"),
    C = A.observations.filter(
      (E) =>
        E.sectionId === n &&
        (s === "All" || E.subject === s) &&
        (a === "All" || (a === "Class" ? !E.studentId : !!E.studentId)),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: z(A, n),
        title: "Observations",
        sub: "Record what you notice, for the whole class or one child. Child notes can be shared with parents.",
        children: [
          t.jsx(DA, {
            value: a,
            options: ["All", "Class", "Child"],
            onChange: g,
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => o(!0),
            children: [t.jsx(S, { n: "plus" }), "New observation"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "stack",
        children: [
          C.map((E) => {
            const c = A.students.find((m) => m.id === E.studentId);
            return t.jsxs(
              "div",
              {
                className: "card pad",
                children: [
                  t.jsxs("div", {
                    className: "row between wrap",
                    children: [
                      t.jsxs("span", {
                        className: "row",
                        children: [
                          c
                            ? t.jsx(pt, { name: c.name, tone: "pink" })
                            : t.jsx("span", {
                                className: "avatar",
                                children: t.jsx(S, { n: "users" }),
                              }),
                          t.jsx("b", { children: c ? c.name : "Whole class" }),
                          t.jsx(v, { children: E.subject }),
                          t.jsx(v, { tone: "primary", children: E.concept }),
                        ],
                      }),
                      t.jsxs("small", {
                        children: [
                          CA(E.date),
                          " · ",
                          E.shared ? "Shared with parent" : "Private",
                        ],
                      }),
                    ],
                  }),
                  t.jsx("p", { style: { marginTop: 8 }, children: E.text }),
                ],
              },
              E.id,
            );
          }),
          !C.length &&
            t.jsx("div", {
              className: "card",
              children: t.jsx(_, { icon: "eye", title: "No observations yet" }),
            }),
        ],
      }),
      r &&
        t.jsx(fE, {
          onClose: () => o(!1),
          onSave: (E) => {
            (i((c) => {
              c.observations.unshift({
                ...E,
                id: O("ob"),
                sectionId: n,
                teacherId: e.id,
                date: uA,
              });
            }),
              l("Observation saved"));
          },
        }),
    ],
  });
}
function Ah() {
  const { db: A, sectionId: e, subject: n, students: s } = MA(),
    i = A.assignments.filter(
      (a) => a.sectionId === e && (n === "All" || a.subject === n),
    ),
    l = A.attempts.filter((a) => i.some((g) => g.id === a.assignmentId)),
    r = s.filter((a) =>
      l.some((g) => g.studentId === a.id && g.level === "Needs support"),
    ),
    o = (a) => l.filter((g) => g.level === a).length;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `${z(A, e)} · ${n === "All" ? "All subjects" : n}`,
        title: "Class analytics",
        sub: "How children are doing on the activities you enabled.",
      }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, {
            label: "Activities enabled",
            value: i.length,
            icon: "star",
          }),
          t.jsx(F, {
            label: "Completions",
            value: l.length,
            icon: "check",
            sub: `${s.length} children in class`,
          }),
          t.jsx(F, {
            label: "Average score",
            value: l.length
              ? `${Math.round(l.reduce((a, g) => a + g.score, 0) / l.length)}%`
              : "—",
            icon: "chart",
          }),
          t.jsx(F, {
            label: "Need support",
            value: r.length,
            icon: "flag",
            tone: r.length ? "bad" : void 0,
            sub: "children on at least one activity",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Activity" }),
                      t.jsx("th", { children: "Completed" }),
                      t.jsx("th", { children: "Avg score" }),
                      t.jsx("th", { children: "Avg time" }),
                      t.jsx("th", { children: "Level reached" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: i.map((a) => {
                    const g = kE(A, a),
                      C = A.activities.find((c) => c.id === a.activityId),
                      E = g.att.length
                        ? Math.round(
                            (g.att.reduce((c, m) => c + m.timeSec, 0) /
                              g.att.length /
                              60) *
                              10,
                          ) / 10
                        : 0;
                    return t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsxs("td", {
                            children: [
                              t.jsx("strong", {
                                children: C == null ? void 0 : C.title,
                              }),
                              t.jsxs("small", {
                                children: [
                                  a.mode === "home" ? "Home" : "In class",
                                  " · ",
                                  C == null ? void 0 : C.concept,
                                ],
                              }),
                            ],
                          }),
                          t.jsxs("td", {
                            style: { minWidth: 130 },
                            children: [
                              g.done,
                              "/",
                              g.total,
                              t.jsx(TA, {
                                v: gA(g.done, g.total),
                                tone: "good",
                              }),
                            ],
                          }),
                          t.jsx("td", {
                            children: g.att.length ? `${g.avg}%` : "—",
                          }),
                          t.jsx("td", {
                            children: g.att.length ? `${E} min` : "—",
                          }),
                          t.jsx("td", {
                            children: t.jsx("span", {
                              className: "row wrap",
                              children: [
                                "Strong",
                                "Developing",
                                "Needs support",
                              ].map((c) => {
                                const m = g.att.filter(
                                  (u) => u.level === c,
                                ).length;
                                return m
                                  ? t.jsxs(
                                      v,
                                      {
                                        tone:
                                          c === "Strong"
                                            ? "good"
                                            : c === "Developing"
                                              ? "warn"
                                              : "bad",
                                        children: [c, " · ", m],
                                      },
                                      c,
                                    )
                                  : null;
                              }),
                            }),
                          }),
                        ],
                      },
                      a.id,
                    );
                  }),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "stack",
            children: [
              t.jsxs("div", {
                className: "card pad",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Level reached (all results)",
                  }),
                  t.jsx(Ia, {
                    data: [
                      ["Strong", gA(o("Strong"), l.length)],
                      ["Developing", gA(o("Developing"), l.length)],
                      ["Support", gA(o("Needs support"), l.length)],
                    ],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "card pad stack",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Children who may need support",
                  }),
                  r.map((a) =>
                    t.jsxs(
                      K,
                      {
                        to: `/teacher/students/${a.id}`,
                        className: "row between",
                        children: [
                          t.jsxs("span", {
                            className: "row",
                            children: [
                              t.jsx(pt, { name: a.name, tone: "pink" }),
                              a.name,
                            ],
                          }),
                          t.jsx(S, { n: "arrow" }),
                        ],
                      },
                      a.id,
                    ),
                  ),
                  !r.length &&
                    t.jsx("small", { children: "No one right now." }),
                  t.jsx("small", {
                    children:
                      "Shown as support needs, never as labels. Completion and mastery are kept separate.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function eh() {
  var h;
  const { db: A, sectionId: e, students: n } = MA(),
    { update: s, toast: i } = b(),
    [l, r] = B.useState("Term 1"),
    [o, a] = B.useState(!1),
    [g, C] = B.useState((h = n[0]) == null ? void 0 : h.id),
    [E, c] = B.useState("English"),
    [m, u] = B.useState("Strong"),
    Q = ["English", "Maths", "Science"];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: z(A, e),
        title: "Term assessments",
        sub: "End-of-term sheets per child. Parents see their child’s results.",
        children: [
          t.jsx(DA, {
            value: l,
            options: ["Term 1", "Term 2", "Term 3"],
            onChange: r,
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => a(!0),
            children: [t.jsx(S, { n: "upload" }), "Upload a sheet"],
          }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note",
        style: { marginBottom: 12 },
        children:
          "Assessment format is still to be agreed with EzRoots. This view uses a simple result per subject plus the scanned sheet.",
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Child" }),
                  Q.map((d) => t.jsx("th", { children: d }, d)),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: n.map((d) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: d.name }),
                      }),
                      Q.map((I) => {
                        const w = A.assessments.find(
                          (D) =>
                            D.studentId === d.id &&
                            D.term === l &&
                            D.subject === I,
                        );
                        return t.jsx(
                          "td",
                          {
                            children: w
                              ? t.jsx(At, { level: w.result })
                              : t.jsx("small", { children: "—" }),
                          },
                          I,
                        );
                      }),
                    ],
                  },
                  d.id,
                ),
              ),
            }),
          ],
        }),
      }),
      o &&
        t.jsxs(AA, {
          title: "Upload assessment sheet",
          onClose: () => a(!1),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => {
              (s((d) => {
                ((d.assessments = d.assessments.filter(
                  (I) =>
                    !(I.studentId === g && I.term === l && I.subject === E),
                )),
                  d.assessments.push({
                    id: O("sh"),
                    studentId: g,
                    term: l,
                    subject: E,
                    result: m,
                    note: "",
                    date: uA,
                  }));
              }),
                i("Sheet uploaded · parent can now see it"),
                a(!1));
            },
            children: "Upload",
          }),
          children: [
            t.jsx(N, {
              label: "Child",
              children: t.jsx("select", {
                className: "input",
                value: g,
                onChange: (d) => C(d.target.value),
                children: n.map((d) =>
                  t.jsx("option", { value: d.id, children: d.name }, d.id),
                ),
              }),
            }),
            t.jsxs("div", {
              className: "grid g2",
              children: [
                t.jsx(N, {
                  label: "Subject",
                  children: t.jsx("select", {
                    className: "input",
                    value: E,
                    onChange: (d) => c(d.target.value),
                    children: Q.map((d) => t.jsx("option", { children: d }, d)),
                  }),
                }),
                t.jsx(N, {
                  label: "Overall",
                  children: t.jsx("select", {
                    className: "input",
                    value: m,
                    onChange: (d) => u(d.target.value),
                    children: ["Strong", "Developing", "Needs support"].map(
                      (d) => t.jsx("option", { children: d }, d),
                    ),
                  }),
                }),
              ],
            }),
            t.jsx(N, {
              label: "Scanned sheet",
              hint: "PDF or photo",
              children: t.jsx("input", { className: "input", type: "file" }),
            }),
          ],
        }),
    ],
  });
}
function th() {
  const [A, e] = B.useState(null),
    n = [
      [
        "Getting started with EzRoots",
        "How the planner, sessions and videos fit together",
        100,
      ],
      [
        "Presenting Montessori materials",
        "Three-period lesson with number rods (sample video)",
        40,
        "snail-counting",
      ],
      [
        "Observing children during sorting",
        "What to notice and how to record it",
        0,
        "house-setup",
      ],
      [
        "Using the smartboard in class",
        "Smartboard mode and class activities",
        0,
      ],
    ];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Teacher training",
        title: "Keep growing as a teacher",
        sub: "Short modules from the EzRoots academic team.",
      }),
      t.jsx("div", {
        className: "grid g2",
        children: n.map(([s, i, l, r]) =>
          t.jsxs(
            "div",
            {
              className: "card pad stack",
              children: [
                t.jsxs("div", {
                  className: "row",
                  children: [
                    t.jsx("span", {
                      className: "fileicon video",
                      children: t.jsx(S, { n: "play" }),
                    }),
                    t.jsxs("div", {
                      children: [
                        t.jsx("h3", { children: s }),
                        t.jsx("small", { children: i }),
                      ],
                    }),
                  ],
                }),
                t.jsx(TA, { v: l, tone: "good" }),
                t.jsx("small", {
                  children:
                    l === 100
                      ? "Completed"
                      : l
                        ? `${l}% watched`
                        : "Not started",
                }),
                t.jsx("button", {
                  className: "btn secondary",
                  disabled: !r,
                  onClick: () => e(r),
                  children: r ? "Watch" : "Video coming from EzRoots",
                }),
              ],
            },
            s,
          ),
        ),
      }),
      A &&
        t.jsx(AA, {
          wide: !0,
          title: "Training video",
          onClose: () => e(null),
          children: t.jsx(Yi, { v: JA(A) }),
        }),
    ],
  });
}
function nh() {
  const { db: A, position: e, slots: n } = MA(),
    { update: s, toast: i } = b(),
    l = (Ci(e) - 1) * 5 + 1,
    r = pe
      .filter((C) => C.day >= l && C.day < l + 5)
      .flatMap((C) =>
        C.sessions
          .filter((E) => n.includes(E.slot))
          .map((E) => $e(C.day, E.slot)),
      ),
    o = (C) => {
      var c;
      const E = A.links[C] ?? {};
      return (
        (E.videos ?? []).reduce((m, u) => {
          var Q;
          return m + (((Q = JA(u)) == null ? void 0 : Q.sizeMB) ?? 0);
        }, 0) +
        (((c = E.lessonPlans) == null ? void 0 : c.length) ?? 0) * 0.6 +
        0.05
      );
    },
    a = A.offlineSaved,
    g = Math.round(a.reduce((C, E) => C + o(E), 0));
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Weak network?",
        title: "Offline lessons",
        sub: "Save lessons while you have good network; teach from them without internet.",
        children: t.jsxs("button", {
          className: "btn",
          onClick: () => {
            (s((C) => {
              C.offlineSaved = [...new Set([...C.offlineSaved, ...r])];
            }),
              i(`Week ${Ci(e)} saved offline`));
          },
          children: [
            t.jsx(S, { n: "down" }),
            "Save this week (Days ",
            l,
            "–",
            l + 4,
            ")",
          ],
        }),
      }),
      t.jsxs("div", {
        className: "grid g3",
        children: [
          t.jsx(F, { label: "Sessions saved", value: a.length, icon: "down" }),
          t.jsx(F, {
            label: "Space used on this device",
            value: `${g} MB`,
            icon: "folder",
            sub: "Videos will be compressed for offline use",
          }),
          t.jsx(F, {
            label: "Connection",
            value: A.offline ? "Offline" : "Online",
            icon: "wifi",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "card section tablewrap",
        children: [
          t.jsxs("table", {
            className: "table",
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", { children: "Session" }),
                    t.jsx("th", { children: "Contents" }),
                    t.jsx("th", { children: "Size" }),
                    t.jsx("th", {}),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: a.map((C) => {
                  var u, Q;
                  const [E, c] = C.split("|"),
                    m = A.links[C] ?? {};
                  return t.jsxs(
                    "tr",
                    {
                      children: [
                        t.jsx("td", {
                          children: t.jsxs("strong", {
                            children: ["Day ", E, " · ", c],
                          }),
                        }),
                        t.jsx("td", {
                          children: [
                            (u = m.videos) != null && u.length
                              ? `${m.videos.length} video`
                              : "",
                            (Q = m.lessonPlans) != null && Q.length
                              ? `${m.lessonPlans.length} lesson plan`
                              : "",
                            "planner text",
                          ]
                            .filter(Boolean)
                            .join(", "),
                        }),
                        t.jsxs("td", { children: [Math.round(o(C)), " MB"] }),
                        t.jsx("td", {
                          children: t.jsx("button", {
                            className: "btn sm ghost",
                            onClick: () =>
                              s((h) => {
                                h.offlineSaved = h.offlineSaved.filter(
                                  (d) => d !== C,
                                );
                              }),
                            children: "Remove",
                          }),
                        }),
                      ],
                    },
                    C,
                  );
                }),
              }),
            ],
          }),
          !a.length &&
            t.jsx(_, {
              icon: "down",
              title: "Nothing saved yet",
              children: "Save this week, or use “Save offline” on any session.",
            }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "In the real app, saved lessons live in the browser’s offline storage and anything you mark while offline syncs when the connection returns. How offline works is still being designed (open item E2).",
      }),
    ],
  });
}
function Wi() {
  const { db: A, me: e } = b(),
    n = A.students.find((r) => r.id === (e == null ? void 0 : e.childId)),
    s = A.assignments.filter(
      (r) =>
        r.sectionId === n.sectionId &&
        (r.studentIds === "all" || r.studentIds.includes(n.id)),
    ),
    i = A.attempts.filter((r) => r.studentId === n.id),
    l = Math.round(
      i.filter((r) => r.date === uA).reduce((r, o) => r + o.timeSec, 0) / 60,
    );
  return {
    db: A,
    student: n,
    mine: s,
    attempts: i,
    minutesToday: l,
    limit: A.schoolSettings.minutesPerDay,
  };
}
const Ko = ["#fdf6e3", "#eaf4f8", "#fbeef3", "#e8f3ee", "#f0ecf8"];
function sh() {
  const {
      db: A,
      student: e,
      mine: n,
      attempts: s,
      minutesToday: i,
      limit: l,
    } = Wi(),
    r = H(),
    o = n.filter(
      (g) =>
        !s.some((C) => C.assignmentId === g.id) &&
        A.activities.some((C) => C.id === g.activityId),
    ),
    a = i >= l;
  return t.jsxs("div", {
    className: "stack",
    style: { gap: 22 },
    children: [
      t.jsxs("div", {
        children: [
          t.jsxs("h1", {
            style: { fontSize: 34 },
            children: ["Hello, ", e.name.split(" ")[0], "! 👋"],
          }),
          t.jsx("p", {
            style: { fontSize: 18 },
            className: "muted",
            children: o.length
              ? `Your teacher has ${o.length} fun thing${o.length > 1 ? "s" : ""} for you.`
              : "All done! Go and play outside. 🌳",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "card pad row between wrap",
        style: { borderRadius: 18 },
        children: [
          t.jsxs("span", {
            style: { fontSize: 18 },
            children: [
              "⏱ Screen time today: ",
              t.jsxs("b", { children: [i, " of ", l, " minutes"] }),
            ],
          }),
          t.jsx("div", {
            className: "meter",
            style: { width: 220, height: 12 },
            children: t.jsx("span", {
              style: { width: `${Math.min(100, (i / l) * 100)}%` },
            }),
          }),
        ],
      }),
      a &&
        t.jsx("div", {
          className: "notice",
          style: { fontSize: 18 },
          children:
            "🌙 That’s enough screen time for today. Your activities will wait for you tomorrow!",
        }),
      t.jsx("div", {
        className: "grid g3",
        children: o.map((g, C) => {
          const E = A.activities.find((c) => c.id === g.activityId);
          return t.jsxs(
            "div",
            {
              className: "kidcard",
              style: {
                borderColor: g.mode === "home" ? "#f2c9d9" : "var(--line)",
              },
              children: [
                t.jsx("div", {
                  className: "art",
                  style: { background: Ko[C % Ko.length] },
                  children: E.art,
                }),
                t.jsx("span", {
                  className: `pill ${g.mode === "home" ? "pink" : "blue"}`,
                  style: { justifySelf: "start" },
                  children:
                    g.mode === "home" ? "🏠 Home activity" : "🏫 In class",
                }),
                t.jsx("h2", { children: E.title }),
                t.jsx("p", { style: { fontSize: 16 }, children: E.blurb }),
                t.jsx("button", {
                  className: "btn lg",
                  disabled: a,
                  onClick: () => r(`/student/play/${g.id}`),
                  children: "▶ Let’s play",
                }),
              ],
            },
            g.id,
          );
        }),
      }),
      !o.length &&
        t.jsxs("div", {
          className: "kidcard",
          style: { textAlign: "center" },
          children: [
            t.jsx("div", { style: { fontSize: 60 }, children: "🎉" }),
            t.jsx("h2", { children: "Nothing left today" }),
            t.jsx(K, {
              className: "btn lg",
              to: "/student/stars",
              children: "See my stars",
            }),
          ],
        }),
      t.jsx("div", {
        className: "demo-note",
        children:
          "Children only see activities their teacher has enabled (call summary §8). There is no self-study library for children.",
      }),
    ],
  });
}
const Lo = {
    "act-sun-pattern": [
      {
        prompt: "What comes next?",
        show: ["☀️", "🟠", "☀️", "🟠", "?"],
        choices: ["🟠", "☀️", "🌙"],
        correct: 1,
        hint: "Sun, dot, sun, dot… what comes after a dot?",
      },
      {
        prompt: "Finish the pattern",
        show: ["🟡", "🟡", "🟠", "🟡", "🟡", "?"],
        choices: ["🟡", "🟠", "☀️"],
        correct: 1,
        hint: "Two yellow, then one orange.",
      },
      {
        prompt: "What is missing?",
        show: ["☀️", "?", "☀️", "🌙"],
        choices: ["🌙", "☀️", "⭐"],
        correct: 0,
        hint: "Sun and moon take turns.",
      },
    ],
    "act-count-123": [
      {
        prompt: "How many apples?",
        show: ["🍎", "🍎"],
        choices: ["1", "2", "3"],
        correct: 1,
        hint: "Touch each apple and count.",
      },
      {
        prompt: "How many ducks?",
        show: ["🦆", "🦆", "🦆"],
        choices: ["1", "2", "3"],
        correct: 2,
        hint: "Count slowly: one, two…",
      },
      {
        prompt: "How many balls?",
        show: ["⚽"],
        choices: ["1", "2", "3"],
        correct: 0,
        hint: "Just one!",
      },
    ],
  },
  Po = {
    "act-thick-thin": {
      cats: ["Thick", "Thin"],
      items: [
        ["📚", "Big book", 0],
        ["📄", "Paper", 1],
        ["🕯️", "Fat candle", 0],
        ["✏️", "Pencil", 1],
        ["🪵", "Tree trunk", 0],
        ["🥢", "Stick", 1],
      ],
    },
    "act-seasons": {
      cats: ["Summer", "Winter"],
      items: [
        ["🩳", "Shorts", 0],
        ["🧣", "Scarf", 1],
        ["🕶️", "Sunglasses", 0],
        ["🧤", "Gloves", 1],
        ["🍉", "Watermelon", 0],
        ["☕", "Hot drink", 1],
      ],
    },
  },
  dl = [
    ["🥭", "mango", !0],
    ["☀️", "sun", !1],
    ["🌙", "moon", !0],
    ["⚽", "ball", !1],
    ["🐒", "monkey", !0],
    ["🐱", "cat", !1],
  ];
function ih() {
  const { id: A } = on(),
    { db: e, student: n, attempts: s, minutesToday: i, limit: l } = Wi(),
    { update: r } = b(),
    o = H(),
    a = e.assignments.find((h) => h.id === A),
    g = e.activities.find((h) => h.id === (a == null ? void 0 : a.activityId)),
    C = B.useRef(Date.now()),
    E = B.useRef(!1),
    [c, m] = B.useState(null);
  if (!a || !g)
    return t.jsxs("div", {
      className: "kidcard",
      children: [
        t.jsx("h2", { children: "Activity not found" }),
        t.jsx(K, { to: "/student", className: "btn", children: "Back" }),
      ],
    });
  const u = s.some((h) => h.assignmentId === a.id);
  if (i >= l && !u)
    return t.jsxs("div", {
      className: "game",
      children: [
        t.jsx("div", { style: { fontSize: 70 }, children: "🌙" }),
        t.jsx("h1", { children: "Time for a break!" }),
        t.jsx("p", {
          style: { fontSize: 20 },
          children:
            "You’ve used up today’s screen time. This activity will be here tomorrow.",
        }),
        t.jsx("button", {
          className: "btn lg",
          style: { justifySelf: "center" },
          onClick: () => o("/student"),
          children: "Back to today",
        }),
      ],
    });
  const Q = (h, d, I) => {
    if (E.current) return;
    E.current = !0;
    const w = h >= 80 ? "Strong" : h >= 60 ? "Developing" : "Needs support";
    (r((D) => {
      (D.attempts.push({
        id: O("at"),
        studentId: n.id,
        activityId: g.id,
        assignmentId: a.id,
        score: h,
        level: w,
        timeSec: Math.max(30, Math.round((Date.now() - C.current) / 1e3)),
        tries: d,
        hints: I,
        date: uA,
      }),
        D.notices.unshift({
          id: O("n"),
          to: a.createdBy,
          text: `${n.name} finished “${g.title}”.`,
          link: "/teacher/analytics",
          date: uA,
          read: !1,
        }));
    }),
      m({ score: h, tries: d, hints: I }));
  };
  return c
    ? t.jsxs("div", {
        className: "game",
        children: [
          t.jsx("div", { style: { fontSize: 80 }, children: "🌟" }),
          t.jsxs("h1", {
            children: ["Well done, ", n.name.split(" ")[0], "!"],
          }),
          t.jsxs("p", {
            style: { fontSize: 20 },
            children: [
              "You finished ",
              t.jsx("b", { children: g.title }),
              ". Every try helps you learn.",
            ],
          }),
          t.jsxs("div", {
            className: "row",
            style: { justifyContent: "center" },
            children: [
              t.jsx("span", {
                className: "pill good",
                children: "⭐ Star earned",
              }),
              t.jsxs("span", {
                className: "pill",
                children: [c.tries, " tries"],
              }),
              t.jsxs("span", {
                className: "pill",
                children: [c.hints, " hints"],
              }),
            ],
          }),
          t.jsx("p", {
            className: "muted",
            style: { fontSize: 17 },
            children:
              "Now look around you: can you find something like this at home?",
          }),
          t.jsxs("div", {
            className: "row",
            style: { justifyContent: "center" },
            children: [
              t.jsx("button", {
                className: "btn lg",
                onClick: () => o("/student"),
                children: "Back to today",
              }),
              t.jsx("button", {
                className: "btn lg secondary",
                onClick: () => o("/student/stars"),
                children: "My stars",
              }),
            ],
          }),
        ],
      })
    : t.jsxs("div", {
        className: "stack",
        style: { gap: 18 },
        children: [
          t.jsxs("div", {
            className: "row between",
            children: [
              t.jsx(K, {
                to: "/student",
                className: "btn secondary",
                children: "← Back",
              }),
              t.jsx("span", { className: "pill primary", children: g.title }),
            ],
          }),
          g.template === "pattern" || g.template === "count"
            ? t.jsx(lh, {
                qs: Lo[g.id] ?? Lo["act-count-123"],
                big: g.template === "pattern",
                onDone: Q,
              })
            : g.template === "sort"
              ? t.jsx(rh, { cfg: Po[g.id] ?? Po["act-thick-thin"], onDone: Q })
              : g.template === "balance"
                ? t.jsx(ah, { onDone: Q })
                : g.template === "sound"
                  ? t.jsx(oh, { onDone: Q })
                  : t.jsx(gh, { act: g, onDone: () => Q(100, 1, 0) }),
        ],
      });
}
function ha() {
  const [A, e] = B.useState(null);
  return {
    msg: A,
    cheer: (n, s) =>
      e({
        ok: n,
        text: s ?? (n ? "Yes! That’s it! 🎉" : "Good try! Look again. 💜"),
      }),
    clear: () => e(null),
  };
}
function lh({ qs: A, onDone: e, big: n }) {
  const [s, i] = B.useState(0),
    [l, r] = B.useState(null),
    [o, a] = B.useState(0),
    [g, C] = B.useState(0),
    [E, c] = B.useState(0),
    [m, u] = B.useState(!0),
    { msg: Q, cheer: h, clear: d } = ha(),
    I = A[s],
    w = l === I.correct && (Q == null ? void 0 : Q.ok);
  return t.jsxs("div", {
    className: "game",
    children: [
      t.jsx("div", {
        className: "meter",
        style: { height: 12 },
        children: t.jsx("span", {
          style: { width: `${(s / A.length) * 100}%` },
        }),
      }),
      t.jsx("h1", { children: I.prompt }),
      t.jsx("div", {
        className: "seq",
        children: I.show.map((D, j) =>
          t.jsx("span", { className: D === "?" ? "q" : "", children: D }, j),
        ),
      }),
      t.jsx("div", {
        className: "answers",
        children: I.choices.map((D, j) =>
          t.jsx(
            "button",
            {
              className: `${n ? "" : "txt"} ${l === j ? (Q ? (Q.ok ? "right" : "wrong") : "sel") : ""}`,
              disabled: !!w,
              onClick: () => {
                (r(j), d());
              },
              children: D,
            },
            j,
          ),
        ),
      }),
      Q &&
        t.jsx("div", {
          className: `notice ${Q.ok ? "good" : ""}`,
          style: { justifyContent: "center", fontSize: 20 },
          role: "status",
          children: Q.text,
        }),
      t.jsxs("div", {
        className: "row",
        style: { justifyContent: "center" },
        children: [
          t.jsx("button", {
            className: "btn lg secondary",
            disabled: !!w,
            onClick: () => {
              (c(E + 1), h(!1, `💡 ${I.hint}`));
            },
            children: "Hint",
          }),
          w
            ? t.jsx("button", {
                className: "btn lg good",
                onClick: () => {
                  s === A.length - 1
                    ? e(Math.round((o / A.length) * 100), g, E)
                    : (i(s + 1), r(null), u(!0), d());
                },
                children: s === A.length - 1 ? "Finish ✨" : "Next →",
              })
            : t.jsx("button", {
                className: "btn lg",
                disabled: l === null,
                onClick: () => {
                  C(g + 1);
                  const D = l === I.correct;
                  (D && m && a(o + 1), D || u(!1), h(D));
                },
                children: "Check",
              }),
        ],
      }),
    ],
  });
}
function rh({ cfg: A, onDone: e }) {
  const [n, s] = B.useState(0),
    [i, l] = B.useState(0),
    [r, o] = B.useState(0),
    { msg: a, cheer: g, clear: C } = ha(),
    [E, c] = B.useState(!1),
    m = B.useRef(!1),
    u = A.items[n],
    Q = (h) => {
      m.current ||
        E ||
        ((m.current = !0),
        o(r + 1),
        h === u[2]
          ? (l(i + 1),
            g(!0),
            c(!0),
            setTimeout(() => {
              (C(),
                c(!1),
                (m.current = !1),
                n === A.items.length - 1
                  ? e(Math.round(((i + 1) / A.items.length) * 100), r + 1, 0)
                  : s(n + 1));
            }, 900))
          : (g(!1), (m.current = !1)));
    };
  return t.jsxs("div", {
    className: "game",
    children: [
      t.jsx("div", {
        className: "meter",
        style: { height: 12 },
        children: t.jsx("span", {
          style: { width: `${(n / A.items.length) * 100}%` },
        }),
      }),
      t.jsxs("h1", {
        children: [
          "Is it ",
          A.cats[0].toLowerCase(),
          " or ",
          A.cats[1].toLowerCase(),
          "?",
        ],
      }),
      t.jsx("div", {
        className: "seq",
        children: t.jsx("span", {
          style: { width: 150, height: 150, fontSize: 80 },
          children: u[0],
        }),
      }),
      t.jsx("p", { style: { fontSize: 22, fontWeight: 700 }, children: u[1] }),
      t.jsx("div", {
        className: "answers",
        children: A.cats.map((h, d) =>
          t.jsx(
            "button",
            { className: "txt", disabled: E, onClick: () => Q(d), children: h },
            h,
          ),
        ),
      }),
      a &&
        t.jsx("div", {
          className: `notice ${a.ok ? "good" : ""}`,
          style: { justifyContent: "center", fontSize: 20 },
          role: "status",
          children: a.text,
        }),
    ],
  });
}
function ah({ onDone: A }) {
  const [e, n] = B.useState(null),
    [s, i] = B.useState(null),
    [l, r] = B.useState(null),
    [o, a] = B.useState(null),
    [g, C] = B.useState(0),
    { msg: E, cheer: c } = ha(),
    m = { apple: "🍎", cotton: "☁️" },
    u = (I, w) => {
      (I === "l" ? (n(w), s === w && i(null)) : (i(w), e === w && n(null)),
        r(null));
    },
    Q = e && s,
    h = Q ? (e === "apple" ? 1 : -1) : 0,
    d = (I, w) =>
      t.jsx("div", {
        className: `pan ${l ? "over" : ""}`,
        style: { transform: `translateY(${I === "l" ? h * 28 : -h * 28}px)` },
        onDragOver: (D) => D.preventDefault(),
        onDrop: (D) => u(I, D.dataTransfer.getData("text")),
        onClick: () => l && u(I, l),
        children: w ? m[w] : t.jsx("small", { children: "drop here" }),
      });
  return t.jsxs("div", {
    className: "game",
    children: [
      t.jsx("h1", { children: "Put the apple and the cotton on the balance" }),
      t.jsx("p", {
        className: "muted",
        style: { fontSize: 17 },
        children: "Drag them, or tap one and then tap a side.",
      }),
      t.jsxs("div", {
        className: "balance",
        children: [
          d("l", e),
          t.jsx("div", { style: { fontSize: 60 }, children: "⚖️" }),
          d("r", s),
        ],
      }),
      t.jsx("div", {
        className: "draggables",
        children: Object.entries(m)
          .filter(([I]) => I !== e && I !== s)
          .map(([I, w]) =>
            t.jsx(
              "span",
              {
                draggable: !0,
                onDragStart: (D) => D.dataTransfer.setData("text", I),
                onClick: () => r(I),
                style:
                  l === I
                    ? {
                        borderColor: "var(--primary)",
                        background: "var(--primary-50)",
                      }
                    : {},
                children: w,
              },
              I,
            ),
          ),
      }),
      Q &&
        t.jsxs(t.Fragment, {
          children: [
            t.jsx("h2", { children: "Which one is heavier?" }),
            t.jsx("div", {
              className: "answers",
              children: ["apple", "cotton"].map((I) =>
                t.jsx(
                  "button",
                  {
                    className:
                      o === I ? (E != null && E.ok ? "right" : "wrong") : "",
                    onClick: () => {
                      (a(I),
                        C(g + 1),
                        c(
                          I === "apple",
                          I === "apple"
                            ? "Yes! The apple is heavier, so its side goes down. 🍎"
                            : "Look which side went down. 💜",
                        ));
                    },
                    children: m[I],
                  },
                  I,
                ),
              ),
            }),
          ],
        }),
      E &&
        t.jsx("div", {
          className: `notice ${E.ok ? "good" : ""}`,
          style: { justifyContent: "center", fontSize: 20 },
          role: "status",
          children: E.text,
        }),
      (E == null ? void 0 : E.ok) &&
        t.jsx("button", {
          className: "btn lg good",
          style: { justifySelf: "center" },
          onClick: () => A(g === 1 ? 100 : 70, g, 0),
          children: "Finish ✨",
        }),
    ],
  });
}
function oh({ onDone: A }) {
  const [e, n] = B.useState([]),
    [s, i] = B.useState(!1),
    [l, r] = B.useState(0),
    o = dl.map((g, C) => (g[2] ? C : -1)).filter((g) => g >= 0),
    a = s && e.length === o.length && o.every((g) => e.includes(g));
  return t.jsxs("div", {
    className: "game",
    children: [
      t.jsx("h1", { children: "Tap everything that starts with “m”" }),
      t.jsxs("p", {
        className: "muted",
        style: { fontSize: 18 },
        children: ["mmm… like ", t.jsx("b", { children: "m" }), "ango!"],
      }),
      t.jsx("div", {
        className: "answers",
        children: dl.map(([g, C], E) =>
          t.jsxs(
            "button",
            {
              className: e.includes(E)
                ? s
                  ? dl[E][2]
                    ? "right"
                    : "wrong"
                  : "sel"
                : "",
              onClick: () => {
                (i(!1),
                  n(e.includes(E) ? e.filter((c) => c !== E) : [...e, E]));
              },
              children: [
                g,
                t.jsx("div", {
                  style: { fontSize: 16, fontWeight: 700 },
                  children: C,
                }),
              ],
            },
            C,
          ),
        ),
      }),
      s &&
        t.jsx("div", {
          className: `notice ${a ? "good" : ""}`,
          style: { justifyContent: "center", fontSize: 20 },
          children: a
            ? "You found all the “m” words! 🎉"
            : "Almost! Say each word slowly: does it start with mmm?",
        }),
      t.jsx("div", {
        className: "row",
        style: { justifyContent: "center" },
        children: a
          ? t.jsx("button", {
              className: "btn lg good",
              onClick: () => A(l === 1 ? 100 : l === 2 ? 75 : 55, l, 0),
              children: "Finish ✨",
            })
          : t.jsx("button", {
              className: "btn lg",
              disabled: !e.length,
              onClick: () => {
                (i(!0), r(l + 1));
              },
              children: "Check",
            }),
      }),
    ],
  });
}
function gh({ act: A, onDone: e }) {
  return t.jsxs("div", {
    className: "game",
    children: [
      t.jsx("div", { style: { fontSize: 70 }, children: A.art }),
      t.jsx("h1", { children: A.title }),
      t.jsx("p", { style: { fontSize: 20 }, children: A.blurb }),
      t.jsx("p", {
        className: "muted",
        children: "Ask a grown-up to help you.",
      }),
      t.jsx("button", {
        className: "btn lg good",
        style: { justifySelf: "center" },
        onClick: e,
        children: "✅ I did it!",
      }),
    ],
  });
}
function ch() {
  const { db: A, attempts: e } = Wi(),
    n = (i) =>
      e.some((l) => {
        var r;
        return (
          ((r = A.activities.find((o) => o.id === l.activityId)) == null
            ? void 0
            : r.template) === i
        );
      }),
    s = [
      ["🔢", "Number Explorer", n("count"), "Finish a counting activity"],
      ["🌀", "Pattern Builder", n("pattern"), "Finish a pattern activity"],
      ["📏", "Sorting Star", n("sort"), "Sort thick and thin things"],
      ["🔤", "Sound Detective", n("sound"), "Find the sound “m”"],
      ["⚖️", "Balance Scientist", n("balance"), "Weigh things on the balance"],
      ["🌟", "Curious Explorer", e.length >= 3, "Finish 3 activities"],
    ];
  return t.jsxs("div", {
    className: "stack",
    style: { gap: 20 },
    children: [
      t.jsx("h1", {
        style: { fontSize: 32 },
        children: "Look how you’re growing! 🌱",
      }),
      t.jsx("div", {
        className: "grid g3",
        children: s.map(([i, l, r, o]) =>
          t.jsxs(
            "div",
            {
              className: `card badge ${r ? "" : "locked"}`,
              children: [
                t.jsx("div", { className: "medal", children: i }),
                t.jsx("h2", { children: l }),
                t.jsx("p", {
                  className: "muted",
                  children: r ? "You earned this!" : o,
                }),
              ],
            },
            l,
          ),
        ),
      }),
      t.jsx("div", {
        className: "notice info",
        style: { fontSize: 17 },
        children:
          "There are no races here. Everyone learns at their own pace. 💜",
      }),
    ],
  });
}
function Eh() {
  const { db: A, attempts: e } = Wi(),
    n = B.useMemo(() => [...e].reverse(), [e]);
  return (
    B.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    t.jsxs("div", {
      className: "stack",
      style: { gap: 16 },
      children: [
        t.jsx("h1", {
          style: { fontSize: 32 },
          children: "Things I finished ✅",
        }),
        n.map((s) => {
          const i = A.activities.find((l) => l.id === s.activityId);
          return t.jsxs(
            "div",
            {
              className: "kidcard row between",
              style: { display: "flex" },
              children: [
                t.jsxs("span", {
                  className: "row",
                  style: { fontSize: 20 },
                  children: [
                    t.jsx("span", {
                      style: { fontSize: 40 },
                      children: i == null ? void 0 : i.art,
                    }),
                    t.jsx("b", { children: i == null ? void 0 : i.title }),
                  ],
                }),
                t.jsx("span", {
                  style: { fontSize: 26 },
                  children: "⭐".repeat(
                    s.score >= 80 ? 3 : s.score >= 60 ? 2 : 1,
                  ),
                }),
                t.jsx("small", { children: CA(s.date) }),
              ],
            },
            s.id,
          );
        }),
        !n.length &&
          t.jsxs("div", {
            className: "kidcard",
            children: [
              t.jsx("h2", {
                children: "Nothing yet. Let’s play your first activity!",
              }),
              t.jsx(K, { className: "btn lg", to: "/student", children: "Go" }),
            ],
          }),
      ],
    })
  );
}
function gn() {
  const { db: A, me: e } = b(),
    n = A.students.find((c) => c.id === (e == null ? void 0 : e.childId)),
    s = A.sections.find((c) => c.id === n.sectionId),
    i = A.schools.find((c) => c.id === s.schoolId),
    l = A.classPosition[s.id] ?? 63,
    r = A.assignments.filter(
      (c) =>
        c.sectionId === s.id &&
        (c.studentIds === "all" || c.studentIds.includes(n.id)),
    ),
    o = A.attempts.filter((c) => c.studentId === n.id),
    a = A.observations.filter((c) => c.studentId === n.id && c.shared),
    g = pe.filter((c) => c.day < l),
    C = A.users.find((c) => {
      var m;
      return (
        c.role === "teacher" &&
        ((m = c.teaches) == null ? void 0 : m.some((u) => u.sectionId === s.id))
      );
    }),
    E = _e(i.packages[s.level], "Gold");
  return {
    db: A,
    child: n,
    section: s,
    school: i,
    position: l,
    assignments: r,
    attempts: o,
    notes: a,
    taughtDays: g,
    teacher: C,
    first: n.name.split(" ")[0],
    weekly: E,
  };
}
function Ch() {
  var m;
  const {
      db: A,
      child: e,
      section: n,
      school: s,
      position: i,
      assignments: l,
      attempts: r,
      notes: o,
      taughtDays: a,
      teacher: g,
      first: C,
      weekly: E,
    } = gn(),
    c = l.filter(
      (u) =>
        u.mode === "home" &&
        !r.some((Q) => Q.assignmentId === u.id) &&
        A.activities.some((Q) => Q.id === u.activityId),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `${z(A, n.id)} · ${s.name}`,
        title: `${C}’s week`,
        sub: g ? `Class teacher: ${g.name}` : void 0,
      }),
      t.jsxs("div", {
        className: "card pad row wrap",
        style: { gap: 16 },
        children: [
          t.jsx(pt, { name: e.name, tone: "pink", lg: !0 }),
          t.jsxs("div", {
            style: { flex: 1 },
            children: [
              t.jsx("h2", { children: e.name }),
              t.jsxs("small", {
                children: [
                  n.level,
                  " – ",
                  n.name,
                  " · Class is on Day ",
                  i,
                  " of 180",
                ],
              }),
            ],
          }),
          t.jsx(K, {
            to: "/parent/diary",
            className: "btn secondary",
            children: "See the class diary",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "grid g4 section",
        children: [
          t.jsx(F, {
            label: "Days taught this term",
            value: i - 1,
            icon: "calendar",
          }),
          t.jsx(F, {
            label: "Activities finished",
            value: r.length,
            icon: "star",
          }),
          t.jsx(F, {
            label: "Waiting at home",
            value: c.length,
            icon: "heart",
            tone: c.length ? "bad" : void 0,
          }),
          t.jsx(F, {
            label: "Teacher notes",
            value: o.length,
            icon: "message",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("div", {
                className: "eyebrow",
                children: "This week in class",
              }),
              a
                .slice(-3)
                .reverse()
                .map((u) =>
                  t.jsxs(
                    "div",
                    {
                      children: [
                        t.jsxs("b", {
                          children: [
                            "Day ",
                            u.day,
                            " · ",
                            CA(Qt(u.day), {
                              weekday: "long",
                              day: "numeric",
                              month: "short",
                            }),
                          ],
                        }),
                        t.jsx("ul", {
                          style: { margin: "6px 0 0", paddingLeft: 18 },
                          children: u.sessions.map((Q) =>
                            t.jsx("li", { children: Q.items[0] }, Q.slot),
                          ),
                        }),
                      ],
                    },
                    u.day,
                  ),
                ),
              !a.length &&
                t.jsx("small", {
                  children:
                    "The class diary fills in as the teacher marks days done.",
                }),
            ],
          }),
          t.jsxs("div", {
            className: "stack",
            children: [
              t.jsxs("div", {
                className: "card pad stack",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Home activities",
                  }),
                  c.map((u) => {
                    const Q = A.activities.find((h) => h.id === u.activityId);
                    return t.jsxs(
                      "div",
                      {
                        className: "row between",
                        children: [
                          t.jsxs("span", {
                            className: "row",
                            children: [
                              t.jsx("span", {
                                style: { fontSize: 26 },
                                children: Q.art,
                              }),
                              t.jsx("b", { children: Q.title }),
                            ],
                          }),
                          t.jsxs(v, {
                            tone: "pink",
                            children: ["Due ", CA(u.due)],
                          }),
                        ],
                      },
                      u.id,
                    );
                  }),
                  !c.length &&
                    t.jsx("small", { children: "All caught up. 🎉" }),
                  t.jsxs("small", {
                    children: [
                      C,
                      " signs in on the child app to play. Screen time is limited by the school.",
                    ],
                  }),
                ],
              }),
              o[0] &&
                t.jsxs("div", {
                  className: "card pad stack",
                  children: [
                    t.jsxs("div", {
                      className: "eyebrow",
                      children: [
                        "Latest note from ",
                        g == null ? void 0 : g.name.split(" ")[0],
                      ],
                    }),
                    t.jsxs("p", { children: ["“", o[0].text, "”"] }),
                    t.jsxs("small", {
                      children: [CA(o[0].date), " · ", o[0].concept],
                    }),
                  ],
                }),
              E
                ? t.jsxs("div", {
                    className: "notice good",
                    children: [
                      t.jsx(S, { n: "file" }),
                      "Weekly summary is ready: ",
                      r.length,
                      " activities, strongest in ",
                      ((m = A.activities.find((u) => {
                        var Q;
                        return (
                          u.id ===
                          ((Q = r.find((h) => h.level === "Strong")) == null
                            ? void 0
                            : Q.activityId)
                        );
                      })) == null
                        ? void 0
                        : m.concept) ?? "exploring",
                      ".",
                    ],
                  })
                : t.jsxs("div", {
                    className: "notice",
                    children: [
                      t.jsx(S, { n: "lock" }),
                      "Weekly summary is part of the Gold package.",
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ih() {
  const { db: A, section: e, position: n, taughtDays: s, first: i } = gn(),
    l = pe.find((r) => r.day === n);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: z(A, e.id),
        title: "Class diary",
        sub: `What ${i}’s class did each day, as the teacher marks it.`,
      }),
      t.jsxs("div", {
        className: "stack",
        children: [
          l &&
            t.jsxs("div", {
              className: "card pad",
              style: { borderColor: "#d9d1ee" },
              children: [
                t.jsxs("div", {
                  className: "row between",
                  children: [
                    t.jsxs("b", { children: ["Day ", l.day, " · Today"] }),
                    t.jsx(v, { tone: "primary", children: "In progress" }),
                  ],
                }),
                t.jsx("ul", {
                  style: { paddingLeft: 18 },
                  children: l.sessions.map((r) =>
                    t.jsxs(
                      "li",
                      { children: [r.slot, ": ", r.items.join(" · ")] },
                      r.slot,
                    ),
                  ),
                }),
              ],
            }),
          [...s].reverse().map((r) =>
            t.jsxs(
              "div",
              {
                className: "card pad",
                children: [
                  t.jsxs("div", {
                    className: "row between wrap",
                    children: [
                      t.jsxs("b", {
                        children: [
                          "Day ",
                          r.day,
                          " · ",
                          CA(Qt(r.day), {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          }),
                        ],
                      }),
                      t.jsx(v, { tone: "good", children: "Done" }),
                    ],
                  }),
                  t.jsx("div", {
                    className: "grid g2",
                    style: { marginTop: 10 },
                    children: r.sessions.map((o) => {
                      const a = Be(A, e.id, r.day, o.slot);
                      return t.jsxs(
                        "div",
                        {
                          className: "card pad",
                          style: { boxShadow: "none" },
                          children: [
                            t.jsxs("small", {
                              children: [o.slot, " · ", jt[o.slot]],
                            }),
                            t.jsx("p", {
                              children: t.jsx("b", {
                                children: o.items.join(" · "),
                              }),
                            }),
                            a === "rescheduled" &&
                              t.jsxs(v, {
                                tone: "blue",
                                children: [
                                  "Moved to Day ",
                                  A.reschedules[`${e.id}|${r.day}|${o.slot}`],
                                ],
                              }),
                            a === "skipped" &&
                              t.jsx(v, { tone: "warn", children: "Skipped" }),
                            o.materials &&
                              t.jsxs("small", {
                                children: ["Used: ", o.materials],
                              }),
                          ],
                        },
                        o.slot,
                      );
                    }),
                  }),
                ],
              },
              r.day,
            ),
          ),
          !s.length &&
            t.jsx("div", {
              className: "card",
              children: t.jsx(_, {
                icon: "calendar",
                title: "No days marked yet",
              }),
            }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "The diary comes from the real Month 4 planner. It answers the call’s request that parents “see what is happening in class” (call summary §9).",
      }),
    ],
  });
}
function dh() {
  const { db: A, assignments: e, attempts: n, first: s } = gn();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Activities",
        title: `${s}’s activities`,
        sub: "Enabled by the teacher, in class or at home.",
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Activity" }),
                  t.jsx("th", { children: "Where" }),
                  t.jsx("th", { children: "Due" }),
                  t.jsx("th", { children: "Status" }),
                  t.jsx("th", { children: "Result" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: e.map((i) => {
                const l = A.activities.find((o) => o.id === i.activityId),
                  r = n.find((o) => o.assignmentId === i.id);
                return t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsxs("div", {
                          className: "row",
                          children: [
                            t.jsx("span", {
                              style: { fontSize: 26 },
                              children: (l == null ? void 0 : l.art) ?? "📄",
                            }),
                            t.jsxs("span", {
                              children: [
                                t.jsx("strong", {
                                  children:
                                    (l == null ? void 0 : l.title) ??
                                    "Activity removed",
                                }),
                                t.jsx("small", {
                                  children:
                                    (l == null ? void 0 : l.concept) ?? "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      t.jsx("td", {
                        children: i.mode === "home" ? "Home" : "Class",
                      }),
                      t.jsx("td", { children: CA(i.due) }),
                      t.jsx("td", {
                        children: r
                          ? t.jsx(v, { tone: "good", children: "Done" })
                          : i.due < uA
                            ? t.jsx(v, { children: "Not done" })
                            : t.jsx(v, { tone: "pink", children: "Waiting" }),
                      }),
                      t.jsx("td", {
                        children: r ? t.jsx(At, { level: r.level }) : "—",
                      }),
                    ],
                  },
                  i.id,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function uh() {
  const { db: A, child: e, attempts: n, first: s } = gn(),
    [i, l] = B.useState("Term 1"),
    r = [
      ...new Set(
        n
          .map((a) => {
            var g;
            return (g = A.activities.find((C) => C.id === a.activityId)) == null
              ? void 0
              : g.concept;
          })
          .filter((a) => !!a),
      ),
    ],
    o = A.assessments.filter((a) => a.studentId === e.id && a.term === i);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Progress",
        title: `How ${s} is growing`,
        sub: "Based on activities and the teacher’s term assessments. Not a report card.",
      }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("div", {
                className: "eyebrow",
                children: "From activities",
              }),
              r.map((a) => {
                const g = [...n].reverse().find((C) => {
                  var E;
                  return (
                    ((E = A.activities.find((c) => c.id === C.activityId)) ==
                    null
                      ? void 0
                      : E.concept) === a
                  );
                });
                return t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsx("span", { children: a }),
                      t.jsx(At, { level: g.level }),
                    ],
                  },
                  a,
                );
              }),
              !r.length &&
                t.jsx("small", { children: "No activities finished yet." }),
              t.jsx("small", {
                children:
                  "“Developing” and “Needs support” mean more practice will help, never a label.",
              }),
            ],
          }),
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsxs("div", {
                className: "row between",
                children: [
                  t.jsx("div", {
                    className: "eyebrow",
                    children: "Term assessments",
                  }),
                  t.jsx(DA, {
                    value: i,
                    options: ["Term 1", "Term 2", "Term 3"],
                    onChange: l,
                  }),
                ],
              }),
              o.map((a) =>
                t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsxs("span", {
                        children: [
                          t.jsx("b", { children: a.subject }),
                          t.jsx("small", {
                            style: { display: "block" },
                            children: a.note,
                          }),
                        ],
                      }),
                      t.jsx(At, { level: a.result }),
                    ],
                  },
                  a.id,
                ),
              ),
              !o.length &&
                t.jsxs("small", {
                  children: ["No sheet uploaded for ", i, " yet."],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function hh() {
  const { notes: A, teacher: e, first: n } = gn();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "From school",
        title: "Teacher notes",
        sub: `Observations ${e == null ? void 0 : e.name} chose to share about ${n}.`,
      }),
      t.jsxs("div", {
        className: "stack",
        children: [
          A.map((s) =>
            t.jsxs(
              "div",
              {
                className: "card pad",
                children: [
                  t.jsxs("div", {
                    className: "row between",
                    children: [
                      t.jsx(v, { tone: "primary", children: s.concept }),
                      t.jsx("small", {
                        children: CA(s.date, {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                        }),
                      }),
                    ],
                  }),
                  t.jsxs("p", {
                    style: { marginTop: 8, fontSize: 17 },
                    children: ["“", s.text, "”"],
                  }),
                  t.jsx("small", { children: e == null ? void 0 : e.name }),
                ],
              },
              s.id,
            ),
          ),
          !A.length &&
            t.jsx("div", {
              className: "card",
              children: t.jsx(_, {
                icon: "message",
                title: "No shared notes yet",
              }),
            }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Notes only, no open chat, as the requirements ask for the first version (requirements PDF §20).",
      }),
    ],
  });
}
function Bh() {
  var l;
  const { update: A } = b(),
    { db: e, first: n } = gn(),
    s = [
      [
        "thick",
        "Thick & thin hunt",
        `Find 3 thick things and 3 thin things at home. Ask ${n} to line them up.`,
      ],
      [
        "heavy",
        "Heavy or light?",
        "Hold an apple in one hand and a cotton ball in the other. Which hand feels heavier?",
      ],
      [
        "melon",
        "Summer fruit chat",
        "Cut a melon or watermelon together. Talk about its colour, smell and seeds.",
      ],
      [
        "m",
        "The “m” sound",
        "Say words together that start with mmm: mango, moon, mat, milk.",
      ],
    ],
    i = new Set(
      ((l = e.notes["parent-try"]) == null ? void 0 : l.split(",")) ?? [],
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Screen-free",
        title: "Try at home",
        sub: "Small ideas linked to what the class did this week.",
      }),
      t.jsx("div", {
        className: "grid g2",
        children: s.map(([r, o, a]) =>
          t.jsxs(
            "div",
            {
              className: "card pad stack",
              children: [
                t.jsx("h2", { children: o }),
                t.jsx("p", { children: a }),
                t.jsx("small", { children: "5–10 minutes · everyday things" }),
                t.jsx("button", {
                  className: `btn ${i.has(r) ? "good" : "secondary"}`,
                  onClick: () =>
                    A((g) => {
                      var E;
                      const C = new Set(
                        ((E = g.notes["parent-try"]) == null
                          ? void 0
                          : E.split(",").filter(Boolean)) ?? [],
                      );
                      (C.has(r) ? C.delete(r) : C.add(r),
                        (g.notes["parent-try"] = [...C].join(",")));
                    }),
                  children: i.has(r) ? "✓ We did it" : "Mark as done",
                }),
              ],
            },
            r,
          ),
        ),
      }),
    ],
  });
}
function Je() {
  const { db: A, me: e } = b(),
    n = A.schools.find((r) => r.id === e.schoolId),
    s = A.sections.filter((r) => r.schoolId === n.id),
    i = Ri(A, n.id),
    l = A.users.filter((r) => r.role === "teacher" && r.schoolId === n.id);
  return { db: A, me: e, school: n, sections: s, used: i, teachers: l };
}
function JE({ kind: A, onClose: e }) {
  return t.jsxs(AA, {
    title: "Seat limit reached",
    onClose: e,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: e,
          children: "Close",
        }),
        t.jsx(K, {
          className: "btn",
          to: "/principal/seats",
          onClick: e,
          children: "Request more seats",
        }),
      ],
    }),
    children: [
      t.jsxs("div", {
        className: "notice bad",
        children: [
          t.jsx(S, { n: "seat" }),
          "All ",
          A,
          " seats your school bought are in use. Free a seat by marking a leaver, or request more seats from EzRoots.",
        ],
      }),
      t.jsx("small", {
        children:
          "Seats follow the number of kits bought (call summary §5; first recording 11:21: “once they reach the cap, it should get freezed”).",
      }),
    ],
  });
}
function Qh() {
  const { db: A, school: e, sections: n, used: s, teachers: i } = Je(),
    l = new Set(
      A.students
        .filter((a) => n.some((g) => g.id === a.sectionId))
        .map((a) => a.id),
    ),
    r = A.attempts.filter((a) => l.has(a.studentId)),
    o = [
      s.students / e.studentSeats >= 0.95 &&
        `Student seats almost full: ${s.students} of ${e.studentSeats}.`,
      ...n
        .filter((a) => (A.classPosition[a.id] ?? 63) < 60)
        .map(
          (a) =>
            `${z(A, a.id)} is behind the plan (Day ${A.classPosition[a.id]}).`,
        ),
    ].filter(Boolean);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `${e.name} · ${e.city}`,
        title: "School overview",
        sub: `${e.track} track · Academic year 2026–27`,
      }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, {
            label: "Student seats",
            value: `${s.students} / ${e.studentSeats}`,
            icon: "seat",
            meter: gA(s.students, e.studentSeats),
          }),
          t.jsx(F, {
            label: "Teacher seats",
            value: `${s.teachers} / ${e.teacherSeats}`,
            icon: "users",
            meter: gA(s.teachers, e.teacherSeats),
          }),
          t.jsx(F, {
            label: "Class-sections",
            value: n.length,
            icon: "grid",
            sub: `${i.length} teachers assigned`,
          }),
          t.jsx(F, {
            label: "Activities finished this week",
            value: r.length,
            icon: "star",
            sub: "across all sections",
          }),
        ],
      }),
      o.map((a) =>
        t.jsxs(
          "div",
          {
            className: "notice section",
            style: { marginTop: 12 },
            children: [t.jsx(S, { n: "flag" }), a],
          },
          a,
        ),
      ),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Section" }),
                      t.jsx("th", { children: "Package" }),
                      t.jsx("th", { children: "Curriculum progress" }),
                      t.jsx("th", { children: "Children" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: n.map((a) => {
                    const g = Ii(A, a.id);
                    return t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsxs("td", {
                            children: [
                              t.jsx("strong", { children: z(A, a.id) }),
                              t.jsx("small", {
                                children: A.users
                                  .filter((C) => {
                                    var E;
                                    return (E = C.teaches) == null
                                      ? void 0
                                      : E.some((c) => c.sectionId === a.id);
                                  })
                                  .map((C) => C.name)
                                  .join(", "),
                              }),
                            ],
                          }),
                          t.jsx("td", {
                            children: t.jsx(v, {
                              tone: "primary",
                              children: e.packages[a.level] ?? "—",
                            }),
                          }),
                          t.jsxs("td", {
                            style: { minWidth: 170 },
                            children: [
                              "Day ",
                              g + 1,
                              " · ",
                              g,
                              "/180 done",
                              t.jsx(TA, { v: gA(g, 180), tone: "good" }),
                            ],
                          }),
                          t.jsx("td", {
                            children: A.students.filter(
                              (C) =>
                                C.sectionId === a.id && C.status === "active",
                            ).length,
                          }),
                        ],
                      },
                      a.id,
                    );
                  }),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "card pad",
            children: [
              t.jsx("div", {
                className: "eyebrow",
                children: "Implementation this week",
              }),
              t.jsx(Ia, {
                data: n.map((a) => [
                  a.level.replace("Grade ", "G") + "-" + a.name,
                  gA(Math.min(5, Ii(A, a.id) - 55), 5),
                ]),
              }),
              t.jsx("small", {
                children: "Share of this week’s planned days marked done.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function wh() {
  const { db: A, school: e, sections: n, teachers: s } = Je(),
    { update: i, toast: l } = b(),
    [r, o] = B.useState(!1),
    [a, g] = B.useState(null),
    [C, E] = B.useState("LKG"),
    [c, m] = B.useState("B");
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: e.name,
        title: "Classes & sections",
        sub: "Create sections and choose which teacher teaches each subject.",
        children: t.jsxs("button", {
          className: "btn",
          onClick: () => o(!0),
          children: [t.jsx(S, { n: "plus" }), "New section"],
        }),
      }),
      t.jsx("div", {
        className: "grid g3",
        children: n.map((u) => {
          const Q = A.users.filter((h) => {
            var d;
            return (d = h.teaches) == null
              ? void 0
              : d.some((I) => I.sectionId === u.id);
          });
          return t.jsxs(
            "div",
            {
              className: "card pad stack",
              children: [
                t.jsxs("div", {
                  className: "row between",
                  children: [
                    t.jsx("h2", { children: z(A, u.id) }),
                    t.jsx(v, {
                      tone: "primary",
                      children: e.packages[u.level] ?? "No package",
                    }),
                  ],
                }),
                t.jsxs("small", {
                  children: [
                    A.students.filter(
                      (h) => h.sectionId === u.id && h.status === "active",
                    ).length,
                    " children",
                  ],
                }),
                Ct.map((h) => {
                  const d = Q.find((I) =>
                    I.teaches.some(
                      (w) => w.sectionId === u.id && w.subject === h,
                    ),
                  );
                  return t.jsxs(
                    "div",
                    {
                      className: "row between",
                      children: [
                        t.jsx("span", { children: h }),
                        d
                          ? t.jsx("b", { children: d.name })
                          : t.jsx(v, { tone: "warn", children: "Unassigned" }),
                      ],
                    },
                    h,
                  );
                }),
                t.jsx("button", {
                  className: "btn secondary sm",
                  onClick: () => g(u.id),
                  children: "Assign teachers",
                }),
              ],
            },
            u.id,
          );
        }),
      }),
      !n.length && t.jsx(_, { icon: "grid", title: "No class-sections yet" }),
      r &&
        t.jsxs(AA, {
          title: "New class-section",
          onClose: () => o(!1),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => {
              (i((u) => {
                u.sections.push({
                  id: O("sec"),
                  schoolId: e.id,
                  level: C,
                  name: c,
                });
              }),
                l(`${C} – ${c} created`),
                o(!1));
            },
            children: "Create",
          }),
          children: [
            t.jsxs("div", {
              className: "grid g2",
              children: [
                t.jsx(N, {
                  label: "Class",
                  children: t.jsx("select", {
                    className: "input",
                    value: C,
                    onChange: (u) => E(u.target.value),
                    children: Mt.map((u) =>
                      t.jsx("option", { children: u }, u),
                    ),
                  }),
                }),
                t.jsx(N, {
                  label: "Section name",
                  children: t.jsx("input", {
                    className: "input",
                    value: c,
                    onChange: (u) => m(u.target.value),
                  }),
                }),
              ],
            }),
            !e.packages[C] &&
              t.jsxs("div", {
                className: "notice",
                children: [
                  t.jsx(S, { n: "lock" }),
                  "Your school has no package for ",
                  C,
                  ". EzRoots must add one before content appears.",
                ],
              }),
          ],
        }),
      a && t.jsx(mh, { sectionId: a, teachers: s, onClose: () => g(null) }, a),
    ],
  });
}
function mh({ sectionId: A, teachers: e, onClose: n }) {
  const { db: s, update: i, toast: l } = b(),
    r = (g) => {
      var C;
      return (
        ((C = e.find((E) => {
          var c;
          return (c = E.teaches) == null
            ? void 0
            : c.some((m) => m.sectionId === A && m.subject === g);
        })) == null
          ? void 0
          : C.id) ?? ""
      );
    },
    [o, a] = B.useState(() => Object.fromEntries(Ct.map((g) => [g, r(g)])));
  return t.jsxs(AA, {
    title: `Teachers for ${z(s, A)}`,
    onClose: n,
    foot: t.jsx("button", {
      className: "btn",
      onClick: () => {
        (i((g) => {
          for (const C of g.users)
            C.teaches &&
              (C.teaches = C.teaches.filter((E) => E.sectionId !== A));
          for (const C of Ct) {
            const E = g.users.find((c) => c.id === o[C]);
            E &&
              (E.teaches = [
                ...(E.teaches ?? []),
                { sectionId: A, subject: C },
              ]);
          }
        }),
          l("Teachers updated"),
          n());
      },
      children: "Save",
    }),
    children: [
      Ct.map((g) =>
        t.jsx(
          N,
          {
            label: g,
            children: t.jsxs("select", {
              className: "input",
              value: o[g],
              onChange: (C) => a({ ...o, [g]: C.target.value }),
              children: [
                t.jsx("option", { value: "", children: "— Unassigned —" }),
                e.map((C) =>
                  t.jsx("option", { value: C.id, children: C.name }, C.id),
                ),
              ],
            }),
          },
          g,
        ),
      ),
      t.jsx("small", {
        children:
          "One teacher can teach several subjects and several sections.",
      }),
    ],
  });
}
function Dh() {
  const { db: A, school: e, used: n, teachers: s } = Je(),
    { update: i, toast: l } = b(),
    [r, o] = B.useState(!1),
    [a, g] = B.useState(!1),
    [C, E] = B.useState(""),
    [c, m] = B.useState(""),
    [u, Q] = B.useState(null);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: `${n.teachers} of ${e.teacherSeats} teacher seats used`,
        title: "Teachers",
        children: t.jsxs("button", {
          className: "btn",
          onClick: () => (n.teachers >= e.teacherSeats ? g(!0) : o(!0)),
          children: [t.jsx(S, { n: "plus" }), "Add teacher"],
        }),
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Teacher" }),
                  t.jsx("th", { children: "Teaches" }),
                  t.jsx("th", { children: "Status" }),
                  t.jsx("th", {}),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: s.map((h) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsxs("div", {
                          className: "row",
                          children: [
                            t.jsx(pt, { name: h.name }),
                            t.jsxs("span", {
                              children: [
                                t.jsx("strong", { children: h.name }),
                                t.jsx("small", { children: h.username }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      t.jsx("td", {
                        children: (h.teaches ?? []).length
                          ? [
                              ...new Set(
                                h.teaches.map((d) => z(A, d.sectionId)),
                              ),
                            ].map((d) =>
                              t.jsxs(
                                "div",
                                {
                                  children: [
                                    t.jsx("b", { children: d }),
                                    " ",
                                    t.jsx("small", {
                                      style: { display: "inline" },
                                      children: h.teaches
                                        .filter((I) => z(A, I.sectionId) === d)
                                        .map((I) => I.subject)
                                        .join(", "),
                                    }),
                                  ],
                                },
                                d,
                              ),
                            )
                          : t.jsx(v, {
                              tone: "warn",
                              children: "No classes yet",
                            }),
                      }),
                      t.jsx("td", {
                        children: h.active
                          ? t.jsx(v, { tone: "good", children: "Active" })
                          : t.jsx(v, { children: "Deactivated" }),
                      }),
                      t.jsx("td", {
                        children: t.jsxs("div", {
                          className: "actions",
                          children: [
                            t.jsx("button", {
                              className: "btn sm secondary",
                              onClick: () => Q(h.name),
                              children: "Reset password",
                            }),
                            t.jsx("button", {
                              className: "btn sm ghost",
                              onClick: () => {
                                (i((d) => {
                                  const I = d.users.find((w) => w.id === h.id);
                                  I.active = !I.active;
                                }),
                                  l(
                                    h.active
                                      ? "Deactivated · seat freed"
                                      : "Reactivated",
                                  ));
                              },
                              children: h.active ? "Deactivate" : "Reactivate",
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  h.id,
                ),
              ),
            }),
          ],
        }),
      }),
      r &&
        t.jsxs(AA, {
          title: "Add teacher",
          onClose: () => o(!1),
          foot: t.jsx("button", {
            className: "btn",
            disabled: !C,
            onClick: () => {
              (i((h) => {
                h.users.push({
                  id: O("u-t"),
                  role: "teacher",
                  name: C,
                  username: C.toLowerCase().replace(/\s+/g, "."),
                  email: c,
                  schoolId: e.id,
                  active: !0,
                  teaches: [],
                });
              }),
                l(`${C} added · assign classes in Classes & sections`),
                o(!1),
                E(""),
                m(""));
            },
            children: "Add & send sign-in details",
          }),
          children: [
            t.jsx(N, {
              label: "Full name",
              children: t.jsx("input", {
                className: "input",
                value: C,
                onChange: (h) => E(h.target.value),
              }),
            }),
            t.jsx(N, {
              label: "Email",
              hint: "for sign-in details",
              children: t.jsx("input", {
                className: "input",
                type: "email",
                value: c,
                onChange: (h) => m(h.target.value),
              }),
            }),
            t.jsx("small", {
              children:
                "Uses 1 teacher seat. Assign classes and subjects afterwards.",
            }),
          ],
        }),
      a && t.jsx(JE, { kind: "teacher", onClose: () => g(!1) }),
      u &&
        t.jsxs(AA, {
          title: "Password reset",
          onClose: () => Q(null),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => Q(null),
            children: "Done",
          }),
          children: [
            t.jsxs("p", {
              children: [
                "Temporary password for ",
                t.jsx("b", { children: u }),
                ":",
              ],
            }),
            t.jsx("div", {
              className: "card pad",
              style: {
                fontFamily: "monospace",
                fontSize: 22,
                textAlign: "center",
              },
              children: "sun-4821",
            }),
          ],
        }),
    ],
  });
}
function Mh() {
  var p;
  const { db: A, school: e, sections: n, used: s } = Je(),
    { update: i, toast: l } = b(),
    [r, o] = B.useState((p = n[0]) == null ? void 0 : p.id),
    [a, g] = B.useState("Active"),
    [C, E] = B.useState(!1),
    [c, m] = B.useState(!1),
    [u, Q] = B.useState(null),
    [h, d] = B.useState(""),
    [I, w] = B.useState(""),
    [D, j] = B.useState(null),
    J = A.students.filter(
      (k) =>
        k.sectionId === r &&
        (a === "Active" ? k.status === "active" : k.status === "archived"),
    ),
    M = s.students >= e.studentSeats;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: `${s.students} of ${e.studentSeats} student seats used`,
        title: "Students",
        sub: "Adding a student also creates their parent’s login.",
        children: [
          t.jsxs("button", {
            className: "btn secondary",
            onClick: () =>
              l(
                "CSV upload: shows a preview, then creates students and parents (demo)",
              ),
            children: [t.jsx(S, { n: "upload" }), "Upload CSV"],
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () =>
              n.length
                ? M
                  ? m(!0)
                  : E(!0)
                : l("Create a class-section first, in Classes & sections"),
            children: [t.jsx(S, { n: "plus" }), "Add student"],
          }),
        ],
      }),
      t.jsx(TA, { v: gA(s.students, e.studentSeats) }),
      t.jsxs("div", {
        className: "row wrap section",
        style: { marginTop: 14 },
        children: [
          t.jsx("select", {
            className: "input",
            style: { width: 200 },
            value: r,
            onChange: (k) => o(k.target.value),
            children: n.map((k) =>
              t.jsx("option", { value: k.id, children: z(A, k.id) }, k.id),
            ),
          }),
          t.jsx(DA, { value: a, options: ["Active", "Archived"], onChange: g }),
        ],
      }),
      t.jsxs("div", {
        className: "card tablewrap section",
        style: { marginTop: 14 },
        children: [
          t.jsxs("table", {
            className: "table",
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", { children: "Student" }),
                    t.jsx("th", { children: "Username" }),
                    t.jsx("th", { children: "Parent login" }),
                    t.jsx("th", {}),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: J.map((k) => {
                  const x = A.users.find((eA) => eA.id === k.parentId);
                  return t.jsxs(
                    "tr",
                    {
                      children: [
                        t.jsx("td", {
                          children: t.jsxs("div", {
                            className: "row",
                            children: [
                              t.jsx(pt, { name: k.name, tone: "pink" }),
                              t.jsx("strong", { children: k.name }),
                            ],
                          }),
                        }),
                        t.jsx("td", { children: k.username }),
                        t.jsxs("td", {
                          children: [
                            x == null ? void 0 : x.name,
                            t.jsx("small", {
                              children: x == null ? void 0 : x.username,
                            }),
                          ],
                        }),
                        t.jsx("td", {
                          children:
                            k.status === "active"
                              ? t.jsx("button", {
                                  className: "btn sm ghost",
                                  onClick: () => Q(k.id),
                                  children: "Mark as leaver",
                                })
                              : t.jsx(v, {
                                  children: "Archived · history kept",
                                }),
                        }),
                      ],
                    },
                    k.id,
                  );
                }),
              }),
            ],
          }),
          !J.length &&
            t.jsx(_, {
              icon: "user",
              title: `No ${a.toLowerCase()} students here`,
            }),
        ],
      }),
      C &&
        t.jsxs(AA, {
          title: "Add student",
          onClose: () => E(!1),
          foot: t.jsx("button", {
            className: "btn",
            disabled: !h || !I,
            onClick: () => {
              const k = O("st"),
                x = O("pa"),
                eA = O("u-st"),
                aA =
                  h.toLowerCase().split(" ")[0] +
                  "." +
                  (A.students.filter((U) => U.sectionId === r).length + 1);
              (i((U) => {
                (U.students.push({
                  id: k,
                  name: h,
                  sectionId: r,
                  parentId: x,
                  status: "active",
                  username: aA,
                }),
                  U.users.push({
                    id: x,
                    role: "parent",
                    name: I,
                    username: `parent.${aA}`,
                    schoolId: e.id,
                    active: !0,
                    childId: k,
                  }),
                  U.users.push({
                    id: eA,
                    role: "student",
                    name: h,
                    username: aA,
                    schoolId: e.id,
                    active: !0,
                    childId: k,
                  }));
              }),
                j({ child: aA, parent: `parent.${aA}` }),
                E(!1),
                d(""),
                w(""));
            },
            children: "Create student + parent",
          }),
          children: [
            t.jsx(N, {
              label: "Section",
              children: t.jsx("select", {
                className: "input",
                value: r,
                onChange: (k) => o(k.target.value),
                children: n.map((k) =>
                  t.jsx("option", { value: k.id, children: z(A, k.id) }, k.id),
                ),
              }),
            }),
            t.jsx(N, {
              label: "Child’s full name",
              children: t.jsx("input", {
                className: "input",
                value: h,
                onChange: (k) => d(k.target.value),
              }),
            }),
            t.jsx(N, {
              label: "Parent’s name",
              children: t.jsx("input", {
                className: "input",
                value: I,
                onChange: (k) => w(k.target.value),
              }),
            }),
            t.jsxs("small", {
              children: [
                "Uses 1 student seat (",
                e.studentSeats - s.students,
                " left). The parent login doesn’t use a seat.",
              ],
            }),
          ],
        }),
      D &&
        t.jsx(AA, {
          title: "Accounts created",
          onClose: () => j(null),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => {
              (j(null), l("Sign-in slips ready to print"));
            },
            children: "Print sign-in slips",
          }),
          children: t.jsxs("dl", {
            className: "kv",
            children: [
              t.jsx("dt", { children: "Child username" }),
              t.jsx("dd", { children: D.child }),
              t.jsx("dt", { children: "Parent username" }),
              t.jsx("dd", { children: D.parent }),
              t.jsx("dt", { children: "Temporary passwords" }),
              t.jsx("dd", { children: "sun-3317 / sun-9042" }),
            ],
          }),
        }),
      u && t.jsx(jh, { studentId: u, onClose: () => Q(null) }),
      c && t.jsx(JE, { kind: "student", onClose: () => m(!1) }),
    ],
  });
}
function jh({ studentId: A, onClose: e }) {
  const { db: n, update: s, toast: i } = b(),
    l = n.students.find((a) => a.id === A),
    [r, o] = B.useState("Archive history");
  return t.jsxs(AA, {
    title: `${l.name} is leaving`,
    onClose: e,
    foot: t.jsxs(t.Fragment, {
      children: [
        t.jsx("button", {
          className: "btn secondary",
          onClick: e,
          children: "Cancel",
        }),
        t.jsx("button", {
          className: `btn ${r === "Delete history" ? "danger" : ""}`,
          onClick: () => {
            (s((a) => {
              r === "Delete history"
                ? ((a.students = a.students.filter((g) => g.id !== A)),
                  (a.attempts = a.attempts.filter((g) => g.studentId !== A)),
                  (a.observations = a.observations.filter(
                    (g) => g.studentId !== A,
                  )),
                  (a.users = a.users.filter((g) => g.childId !== A)))
                : ((a.students.find((g) => g.id === A).status = "archived"),
                  a.users.forEach((g) => {
                    g.childId === A && (g.active = !1);
                  }));
            }),
              i("Seat freed"),
              e());
          },
          children: "Confirm · free the seat",
        }),
      ],
    }),
    children: [
      t.jsx("p", {
        children:
          "The child and parent logins stop working and the seat is freed for a new admission.",
      }),
      t.jsx(DA, {
        value: r,
        options: ["Archive history", "Delete history"],
        onChange: o,
      }),
      t.jsx("small", {
        children:
          r === "Archive history"
            ? "Results, observations and assessments are kept, read-only, in Archived."
            : "All of this child’s records are permanently removed.",
      }),
    ],
  });
}
function ph() {
  const { db: A, school: e } = Je(),
    { toast: n } = b(),
    [s, i] = B.useState(""),
    l = A.users.filter(
      (r) =>
        r.role === "parent" &&
        r.schoolId === e.id &&
        r.name.toLowerCase().includes(s.toLowerCase()),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: e.name,
        title: "Parents",
        sub: "Each student has one parent login. Siblings at the same school currently have separate logins (to be decided).",
      }),
      t.jsxs("div", {
        className: "search",
        style: { maxWidth: 420, marginBottom: 14 },
        children: [
          t.jsx(S, { n: "search" }),
          t.jsx("input", {
            "aria-label": "Search parents",
            value: s,
            onChange: (r) => i(r.target.value),
            placeholder: "Search parents",
          }),
        ],
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Parent" }),
                  t.jsx("th", { children: "Child" }),
                  t.jsx("th", { children: "Status" }),
                  t.jsx("th", {}),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: l.slice(0, 40).map((r) => {
                const o = A.students.find((a) => a.id === r.childId);
                return t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsxs("td", {
                        children: [
                          t.jsx("strong", { children: r.name }),
                          t.jsx("small", { children: r.username }),
                        ],
                      }),
                      t.jsxs("td", {
                        children: [
                          o == null ? void 0 : o.name,
                          t.jsx("small", {
                            children: o ? z(A, o.sectionId) : "",
                          }),
                        ],
                      }),
                      t.jsx("td", {
                        children: r.active
                          ? t.jsx(v, { tone: "good", children: "Active" })
                          : t.jsx(v, { children: "Inactive" }),
                      }),
                      t.jsx("td", {
                        children: t.jsx("button", {
                          className: "btn sm secondary",
                          onClick: () =>
                            n(`Sign-in details re-sent to ${r.name}`),
                          children: "Resend sign-in",
                        }),
                      }),
                    ],
                  },
                  r.id,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Sh() {
  const { db: A, school: e, used: n } = Je(),
    { update: s, toast: i } = b(),
    [l, r] = B.useState("Student seats"),
    [o, a] = B.useState(10),
    [g, C] = B.useState(""),
    E = A.seatRequests.filter((c) => c.schoolId === e.id);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: e.name,
        title: "Seats & packages",
        sub: "Your package and seats are set by EzRoots when you buy kits.",
      }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsx(F, {
            label: "Student seats",
            value: `${n.students} / ${e.studentSeats}`,
            icon: "seat",
            meter: gA(n.students, e.studentSeats),
            sub: `${e.studentSeats - n.students} left`,
          }),
          t.jsx(F, {
            label: "Teacher seats",
            value: `${n.teachers} / ${e.teacherSeats}`,
            icon: "users",
            meter: gA(n.teachers, e.teacherSeats),
            sub: `${e.teacherSeats - n.teachers} left`,
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Class" }),
                      t.jsx("th", { children: "Package" }),
                      t.jsx("th", { children: "Track" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: Mt.map((c) =>
                    t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsx("td", {
                            children: t.jsx("strong", { children: c }),
                          }),
                          t.jsx("td", {
                            children: e.packages[c]
                              ? t.jsx(v, {
                                  tone: "primary",
                                  children: e.packages[c],
                                })
                              : t.jsx("small", { children: "Not purchased" }),
                          }),
                          t.jsx("td", { children: e.track }),
                        ],
                      },
                      c,
                    ),
                  ),
                }),
              ],
            }),
          }),
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (c) => {
              (c.preventDefault(),
                s((m) => {
                  (m.seatRequests.unshift({
                    id: O("sr"),
                    schoolId: e.id,
                    kind: l === "Student seats" ? "student" : "teacher",
                    extra: o,
                    note: g,
                    status: "pending",
                    date: uA,
                  }),
                    m.notices.unshift({
                      id: O("n"),
                      to: "u-sa",
                      text: `${e.name} requested ${o} more ${l.toLowerCase()}.`,
                      link: "/sa/seat-requests",
                      date: uA,
                      read: !1,
                    }));
                }),
                i("Request sent to EzRoots"),
                C(""));
            },
            children: [
              t.jsx("h2", { children: "Request more seats" }),
              t.jsx(DA, {
                value: l,
                options: ["Student seats", "Teacher seats"],
                onChange: r,
              }),
              t.jsx(N, {
                label: "How many more?",
                children: t.jsx("input", {
                  className: "input",
                  type: "number",
                  min: 1,
                  value: o,
                  onChange: (c) => a(Number(c.target.value)),
                }),
              }),
              t.jsx(N, {
                label: "Note for EzRoots",
                hint: "optional",
                children: t.jsx("textarea", {
                  className: "input",
                  value: g,
                  onChange: (c) => C(c.target.value),
                  placeholder: "e.g. 8 new admissions in LKG",
                }),
              }),
              t.jsx("button", { className: "btn", children: "Send request" }),
              t.jsx("small", {
                children:
                  "EzRoots raises the limit when the extra kits are billed.",
              }),
            ],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "card section tablewrap",
        children: [
          t.jsxs("table", {
            className: "table",
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", { children: "Requested" }),
                    t.jsx("th", { children: "Seats" }),
                    t.jsx("th", { children: "Note" }),
                    t.jsx("th", { children: "Status" }),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: E.map((c) =>
                  t.jsxs(
                    "tr",
                    {
                      children: [
                        t.jsx("td", { children: CA(c.date) }),
                        t.jsxs("td", { children: ["+", c.extra, " ", c.kind] }),
                        t.jsx("td", { children: c.note || "—" }),
                        t.jsx("td", {
                          children: t.jsx(v, {
                            tone:
                              c.status === "approved"
                                ? "good"
                                : c.status === "declined"
                                  ? "bad"
                                  : "warn",
                            children: c.status,
                          }),
                        }),
                      ],
                    },
                    c.id,
                  ),
                ),
              }),
            ],
          }),
          !E.length && t.jsx(_, { icon: "seat", title: "No requests yet" }),
        ],
      }),
    ],
  });
}
function kh() {
  const { db: A, sections: e } = Je(),
    n = pe.slice(0, 10),
    s = (i, l) => {
      const r = pe
        .find((a) => a.day === l)
        .sessions.map((a) => Be(A, i, l, a.slot));
      if (r.every((a) => a === "pending"))
        return t.jsx("span", { style: { color: "#c8cad3" }, children: "·" });
      const o = r.filter((a) => a === "done").length;
      return t.jsx("span", {
        title: r.join(", "),
        children: r.some((a) => a === "skipped" || a === "rescheduled")
          ? "◐"
          : o === 4
            ? "●"
            : "◔",
      });
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Curriculum delivery",
        title: "Implementation",
        sub: "Which planned days each section has taught. ● all done · ◐ some skipped or moved · · not yet.",
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table matrix",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Section" }),
                  n.map((i) =>
                    t.jsxs("th", { children: ["Day ", i.day] }, i.day),
                  ),
                  t.jsx("th", { children: "Position" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: e.map((i) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: z(A, i.id) }),
                      }),
                      n.map((l) =>
                        t.jsx(
                          "td",
                          {
                            style: { fontSize: 20, color: "var(--primary)" },
                            children: s(i.id, l.day),
                          },
                          l.day,
                        ),
                      ),
                      t.jsx("td", {
                        children: t.jsxs(v, {
                          children: ["Day ", A.classPosition[i.id]],
                        }),
                      }),
                    ],
                  },
                  i.id,
                ),
              ),
            }),
          ],
        }),
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Real planner days 61–70 are shown. Sections behind Day 61 show as not started in this window.",
      }),
    ],
  });
}
function fh() {
  const { db: A, sections: e } = Je(),
    [n, s] = B.useState("By section"),
    i =
      n === "By section"
        ? e.map((l) => {
            const r = new Set(
                A.students.filter((a) => a.sectionId === l.id).map((a) => a.id),
              ),
              o = A.attempts.filter((a) => r.has(a.studentId));
            return [
              z(A, l.id),
              o.length,
              o.length
                ? Math.round(o.reduce((a, g) => a + g.score, 0) / o.length)
                : 0,
              A.observations.filter((a) => a.sectionId === l.id).length,
            ];
          })
        : Ct.map((l) => {
            const r = new Set(
                A.activities.filter((a) => a.subject === l).map((a) => a.id),
              ),
              o = A.attempts.filter((a) => r.has(a.activityId));
            return [
              l,
              o.length,
              o.length
                ? Math.round(o.reduce((a, g) => a + g.score, 0) / o.length)
                : 0,
              A.observations.filter((a) => a.subject === l).length,
            ];
          });
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Aggregated",
        title: "Reports",
        sub: "School-level summaries. Individual child details stay with the teacher by default.",
        children: [
          t.jsx(DA, {
            value: n,
            options: ["By section", "By subject"],
            onChange: s,
          }),
          t.jsxs("button", {
            className: "btn secondary",
            children: [t.jsx(S, { n: "down" }), "Export CSV"],
          }),
        ],
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", {
                    children: n === "By section" ? "Section" : "Subject",
                  }),
                  t.jsx("th", { children: "Activities finished" }),
                  t.jsx("th", { children: "Average score" }),
                  t.jsx("th", { children: "Observations" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: i.map(([l, r, o, a]) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: l }),
                      }),
                      t.jsx("td", { children: r }),
                      t.jsx("td", {
                        children: r
                          ? t.jsxs("span", {
                              className: "row",
                              children: [
                                o,
                                "%",
                                t.jsx(At, {
                                  level:
                                    o >= 80
                                      ? "Strong"
                                      : o >= 60
                                        ? "Developing"
                                        : "Needs support",
                                }),
                              ],
                            })
                          : "—",
                      }),
                      t.jsx("td", { children: a }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Jh() {
  const { db: A, school: e } = Je(),
    n = A.media.filter(
      (s) =>
        s.folder ===
        `School folders / ${e.name.split(" ").slice(0, 2).join(" ")}`,
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Private to your school",
        title: "School folder",
        sub: "Files EzRoots has placed only for your school. Other schools can’t see them.",
      }),
      t.jsxs("div", {
        className: "card",
        children: [
          n.map((s) =>
            t.jsxs(
              "div",
              {
                className: "folderrow",
                children: [
                  t.jsx("span", {
                    className: "fileicon pdf",
                    children: t.jsx(S, { n: "file" }),
                  }),
                  t.jsxs("span", {
                    style: { flex: 1 },
                    children: [
                      t.jsx("b", { children: s.name }),
                      t.jsxs("small", {
                        style: { display: "block" },
                        children: [
                          s.sizeMB,
                          " MB · ",
                          s.download ? "Download allowed" : "View only",
                        ],
                      }),
                    ],
                  }),
                  t.jsx("button", {
                    className: "btn sm secondary",
                    children: "Open",
                  }),
                ],
              },
              s.id,
            ),
          ),
          !n.length && t.jsx(_, { title: "No school-specific files" }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Who can upload here (only EzRoots, or the principal too) is still an open question (J4).",
      }),
    ],
  });
}
function xh() {
  const { db: A, update: e, toast: n } = b(),
    s = A.schoolSettings;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "School settings",
        title: "Child screen time",
        sub: "Limits for the child app. Teachers can set stricter limits for their class.",
      }),
      t.jsxs("form", {
        className: "card pad form",
        style: { maxWidth: 520 },
        onSubmit: (i) => {
          (i.preventDefault(), n("Settings saved"));
        },
        children: [
          t.jsx(N, {
            label: "Maximum minutes per child per day",
            children: t.jsx("input", {
              className: "input",
              type: "number",
              value: s.minutesPerDay,
              onChange: (i) =>
                e((l) => {
                  l.schoolSettings.minutesPerDay = Number(i.target.value);
                }),
            }),
          }),
          t.jsx(N, {
            label: "Home activities open between",
            children: t.jsx("input", {
              className: "input",
              value: s.homeWindow,
              onChange: (i) =>
                e((l) => {
                  l.schoolSettings.homeWindow = i.target.value;
                }),
            }),
          }),
          t.jsx("button", { className: "btn", children: "Save" }),
          t.jsx("small", {
            children:
              "How exactly limits work is still to be designed with EzRoots (open item C2).",
          }),
        ],
      }),
    ],
  });
}
function Gn(A, e) {
  const n = Ri(A, e.id);
  if (e.summary)
    return {
      ...n,
      engagement: e.summary.engagement,
      implementation: e.summary.implementation,
    };
  const s = A.sections.filter((l) => l.schoolId === e.id),
    i = s.length
      ? Math.round(s.reduce((l, r) => l + gA(Ii(A, r.id), 62), 0) / s.length)
      : 0;
  return { ...n, engagement: 88, implementation: Math.min(100, i) };
}
function Nh() {
  const { db: A } = b(),
    e = A.schools.reduce(
      (i, l) => {
        const r = Ri(A, l.id);
        return {
          st: i.st + r.students,
          cap: i.cap + l.studentSeats,
          t: i.t + r.teachers,
        };
      },
      { st: 0, cap: 0, t: 0 },
    ),
    n = A.schools.filter((i) => Gn(A, i).engagement < 60),
    s = A.seatRequests.filter((i) => i.status === "pending");
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "EzRoots",
        title: "Platform overview",
        sub: "All partner schools at a glance.",
        children: t.jsxs(K, {
          className: "btn",
          to: "/sa/schools/new",
          children: [t.jsx(S, { n: "plus" }), "Add school"],
        }),
      }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, {
            label: "Partner schools",
            value: A.schools.length,
            icon: "users",
            sub: "62 today in reality · 5 in this demo",
          }),
          t.jsx(F, {
            label: "Students",
            value: `${e.st} / ${e.cap}`,
            icon: "seat",
            meter: gA(e.st, e.cap),
            sub: "seats used across schools",
          }),
          t.jsx(F, { label: "Teachers", value: e.t, icon: "user" }),
          t.jsx(F, {
            label: "Seat requests waiting",
            value: s.length,
            icon: "flag",
            tone: s.length ? "bad" : void 0,
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsxs("div", {
            children: [
              t.jsxs("div", {
                className: "sectionhead",
                children: [
                  t.jsx("h2", { children: "Schools needing attention" }),
                  t.jsxs(K, {
                    className: "textlink",
                    to: "/sa/analytics",
                    children: ["Analytics ", t.jsx(S, { n: "arrow" })],
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "stack",
                children: [
                  n.map((i) =>
                    t.jsxs(
                      "div",
                      {
                        className: "notice",
                        children: [
                          t.jsx(S, { n: "flag" }),
                          t.jsxs("span", {
                            children: [
                              t.jsxs("b", { children: [i.name, ", ", i.city] }),
                              ": engagement ",
                              Gn(A, i).engagement,
                              "% this week",
                              i.lowNetwork ? " · low-network area" : "",
                              ". Consider a support call or offline training.",
                            ],
                          }),
                        ],
                      },
                      i.id,
                    ),
                  ),
                  s.map((i) => {
                    var l;
                    return t.jsxs(
                      "div",
                      {
                        className: "notice info",
                        children: [
                          t.jsx(S, { n: "seat" }),
                          t.jsxs("span", {
                            children: [
                              t.jsx("b", {
                                children:
                                  (l = A.schools.find(
                                    (r) => r.id === i.schoolId,
                                  )) == null
                                    ? void 0
                                    : l.name,
                              }),
                              " wants ",
                              i.extra,
                              " more ",
                              i.kind,
                              " seats. ",
                              t.jsx(K, {
                                to: "/sa/seat-requests",
                                children: "Review",
                              }),
                            ],
                          }),
                        ],
                      },
                      i.id,
                    );
                  }),
                ],
              }),
            ],
          }),
          t.jsxs("div", {
            className: "card pad",
            children: [
              t.jsx("div", {
                className: "eyebrow",
                children: "Weekly active use",
              }),
              t.jsx(Ia, {
                data: A.schools.map((i) => [
                  i.name.split(" ")[0],
                  Gn(A, i).engagement,
                ]),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Zh() {
  const { db: A } = b(),
    e = H(),
    [n, s] = B.useState(""),
    i = A.schools.filter((l) =>
      (l.name + l.city).toLowerCase().includes(n.toLowerCase()),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "EzRoots",
        title: "Schools",
        sub: "Create schools, set packages per class, seats and track.",
        children: t.jsxs(K, {
          className: "btn",
          to: "/sa/schools/new",
          children: [t.jsx(S, { n: "plus" }), "Add school"],
        }),
      }),
      t.jsxs("div", {
        className: "search",
        style: { maxWidth: 420, marginBottom: 14 },
        children: [
          t.jsx(S, { n: "search" }),
          t.jsx("input", {
            "aria-label": "Search schools",
            value: n,
            onChange: (l) => s(l.target.value),
            placeholder: "Search by name or city",
          }),
        ],
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "School" }),
                  t.jsx("th", { children: "Track" }),
                  t.jsx("th", { children: "Packages by class" }),
                  t.jsx("th", { children: "Student seats" }),
                  t.jsx("th", { children: "Teacher seats" }),
                  t.jsx("th", { children: "Last active" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: i.map((l) => {
                const r = Ri(A, l.id);
                return t.jsxs(
                  "tr",
                  {
                    className: "click",
                    onClick: () => e(`/sa/schools/${l.id}`),
                    children: [
                      t.jsxs("td", {
                        children: [
                          t.jsx("strong", { children: l.name }),
                          t.jsxs("small", {
                            children: [
                              l.city,
                              l.lowNetwork ? " · low network" : "",
                            ],
                          }),
                        ],
                      }),
                      t.jsx("td", { children: l.track }),
                      t.jsx("td", {
                        children: t.jsx("span", {
                          className: "row wrap",
                          children: Object.entries(l.packages).map(([o, a]) =>
                            t.jsxs(
                              v,
                              { tone: "primary", children: [o, ": ", a] },
                              o,
                            ),
                          ),
                        }),
                      }),
                      t.jsxs("td", {
                        style: { minWidth: 120 },
                        children: [
                          r.students,
                          " / ",
                          l.studentSeats,
                          t.jsx(TA, { v: gA(r.students, l.studentSeats) }),
                        ],
                      }),
                      t.jsxs("td", {
                        children: [r.teachers, " / ", l.teacherSeats],
                      }),
                      t.jsx("td", { children: l.lastActive }),
                    ],
                  },
                  l.id,
                );
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Gh() {
  const { db: A, update: e, toast: n } = b(),
    s = H(),
    [i, l] = B.useState(0),
    [r, o] = B.useState("Lotus Kids Academy"),
    [a, g] = B.useState("Coimbatore"),
    [C, E] = B.useState(A.tracks[0]),
    [c, m] = B.useState({ Nursery: "Gold", LKG: "Gold", UKG: "Silver" }),
    [u, Q] = B.useState(120),
    [h, d] = B.useState(10),
    [I, w] = B.useState("Dr. Sunita Krishnan"),
    [D, j] = B.useState("principal@lotuskids.in"),
    J = ["School", "Track", "Packages", "Seats", "Principal", "Review"],
    M = () => l(Math.min(J.length - 1, i + 1)),
    p = () => {
      const k = O("sch");
      (e((x) => {
        (x.schools.push({
          id: k,
          name: r,
          city: a,
          track: C,
          packages: c,
          studentSeats: u,
          teacherSeats: h,
          status: "active",
          lastActive: "Never",
          principalId: `u-${k}`,
        }),
          x.users.push({
            id: `u-${k}`,
            role: "principal",
            name: I,
            username: `${r.split(" ")[0].toLowerCase()}.principal`,
            email: D,
            schoolId: k,
            active: !0,
          }));
      }),
        n("School created · principal sign-in sent"),
        s(`/sa/schools/${k}`));
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, { eyebrow: "Add school", title: "New partner school" }),
      t.jsx("div", {
        className: "steps",
        children: J.map((k, x) =>
          t.jsxs(
            "span",
            {
              className: x === i ? "on" : x < i ? "done" : "",
              children: [x + 1, ". ", k],
            },
            k,
          ),
        ),
      }),
      t.jsxs("div", {
        className: "card pad form",
        style: { maxWidth: 720 },
        children: [
          i === 0 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx(N, {
                  label: "School name",
                  children: t.jsx("input", {
                    className: "input",
                    value: r,
                    onChange: (k) => o(k.target.value),
                  }),
                }),
                t.jsx(N, {
                  label: "City",
                  children: t.jsx("input", {
                    className: "input",
                    value: a,
                    onChange: (k) => g(k.target.value),
                  }),
                }),
              ],
            }),
          i === 1 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx(N, {
                  label: "Curriculum track",
                  hint: "tracks are created by the Content Admin",
                  children: t.jsx("select", {
                    className: "input",
                    value: C,
                    onChange: (k) => E(k.target.value),
                    children: A.tracks.map((k) =>
                      t.jsx("option", { children: k }, k),
                    ),
                  }),
                }),
                t.jsx("small", {
                  children:
                    "The track decides which curriculum content the school receives (e.g. CBSE, or a custom IB/IGCSE track).",
                }),
              ],
            }),
          i === 2 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx("p", {
                  className: "muted",
                  children:
                    "Choose a package for each class the school bought kits for. Leave blank for classes they don’t run.",
                }),
                t.jsxs("table", {
                  className: "table",
                  children: [
                    t.jsx("thead", {
                      children: t.jsxs("tr", {
                        children: [
                          t.jsx("th", { children: "Class" }),
                          ["None", ...je].map((k) =>
                            t.jsx("th", { children: k }, k),
                          ),
                        ],
                      }),
                    }),
                    t.jsx("tbody", {
                      children: Mt.map((k) =>
                        t.jsxs(
                          "tr",
                          {
                            children: [
                              t.jsx("td", {
                                children: t.jsx("b", { children: k }),
                              }),
                              ["None", ...je].map((x) =>
                                t.jsx(
                                  "td",
                                  {
                                    children: t.jsx("input", {
                                      type: "radio",
                                      name: k,
                                      "aria-label": `${k} ${x}`,
                                      checked: (c[k] ?? "None") === x,
                                      onChange: () =>
                                        m((eA) => {
                                          const aA = { ...eA };
                                          return (
                                            x === "None"
                                              ? delete aA[k]
                                              : (aA[k] = x),
                                            aA
                                          );
                                        }),
                                    }),
                                  },
                                  x,
                                ),
                              ),
                            ],
                          },
                          k,
                        ),
                      ),
                    }),
                  ],
                }),
                t.jsxs(K, {
                  to: "/sa/packages",
                  className: "textlink",
                  children: [
                    "What does each package include? ",
                    t.jsx(S, { n: "arrow" }),
                  ],
                }),
              ],
            }),
          i === 3 &&
            t.jsxs("div", {
              className: "grid g2",
              children: [
                t.jsx(N, {
                  label: "Student seats",
                  hint: "= kits bought",
                  children: t.jsx("input", {
                    className: "input",
                    type: "number",
                    value: u,
                    onChange: (k) => Q(Number(k.target.value)),
                  }),
                }),
                t.jsx(N, {
                  label: "Teacher seats",
                  children: t.jsx("input", {
                    className: "input",
                    type: "number",
                    value: h,
                    onChange: (k) => d(Number(k.target.value)),
                  }),
                }),
                t.jsx("small", {
                  children:
                    "Parent logins come with each student and don’t use seats.",
                }),
              ],
            }),
          i === 4 &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx(N, {
                  label: "Principal name",
                  children: t.jsx("input", {
                    className: "input",
                    value: I,
                    onChange: (k) => w(k.target.value),
                  }),
                }),
                t.jsx(N, {
                  label: "Principal email",
                  children: t.jsx("input", {
                    className: "input",
                    value: D,
                    onChange: (k) => j(k.target.value),
                  }),
                }),
                t.jsx("small", {
                  children:
                    "The principal account is the school’s main account. It creates sections, teachers, students and parents.",
                }),
              ],
            }),
          i === 5 &&
            t.jsxs("dl", {
              className: "kv",
              children: [
                t.jsx("dt", { children: "School" }),
                t.jsxs("dd", { children: [r, ", ", a] }),
                t.jsx("dt", { children: "Track" }),
                t.jsx("dd", { children: C }),
                t.jsx("dt", { children: "Packages" }),
                t.jsx("dd", {
                  children:
                    Object.entries(c)
                      .map(([k, x]) => `${k}: ${x}`)
                      .join(" · ") || "None",
                }),
                t.jsx("dt", { children: "Seats" }),
                t.jsxs("dd", { children: [u, " students · ", h, " teachers"] }),
                t.jsx("dt", { children: "Principal" }),
                t.jsxs("dd", { children: [I, " (", D, ")"] }),
              ],
            }),
          t.jsxs("div", {
            className: "row between",
            children: [
              t.jsx("button", {
                className: "btn secondary",
                disabled: i === 0,
                onClick: () => l(i - 1),
                children: "Back",
              }),
              i < J.length - 1
                ? t.jsxs("button", {
                    className: "btn",
                    onClick: M,
                    children: ["Continue ", t.jsx(S, { n: "arrow" })],
                  })
                : t.jsx("button", {
                    className: "btn good",
                    onClick: p,
                    children: "Create school",
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function yh() {
  const { id: A } = on(),
    { db: e, update: n, toast: s } = b(),
    i = e.schools.find((u) => u.id === A),
    [l, r] = B.useState(!1),
    [o, a] = B.useState((i == null ? void 0 : i.studentSeats) ?? 0),
    [g, C] = B.useState(!1);
  if (!i) return t.jsx(_, { title: "School not found" });
  const E = Gn(e, i),
    c = e.users.find((u) => u.id === i.principalId),
    m = e.sections.filter((u) => u.schoolId === i.id);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: `${i.city} · ${i.track}`,
        title: i.name,
        sub: `Principal: ${(c == null ? void 0 : c.name) ?? "—"} · last active ${i.lastActive}`,
        children: [
          t.jsx("button", {
            className: "btn secondary",
            onClick: () => C(!0),
            children: "Reset principal password",
          }),
          t.jsx("button", {
            className: "btn secondary",
            onClick: () => {
              (n((u) => {
                const Q = u.schools.find((h) => h.id === i.id);
                Q.status = Q.status === "active" ? "suspended" : "active";
              }),
                s(
                  i.status === "active"
                    ? "School suspended"
                    : "School reactivated",
                ));
            },
            children: i.status === "active" ? "Suspend" : "Reactivate",
          }),
          t.jsx("button", {
            className: "btn",
            onClick: () => {
              (a(i.studentSeats), r(!0));
            },
            children: "Edit seats",
          }),
        ],
      }),
      i.status === "suspended" &&
        t.jsxs("div", {
          className: "notice bad",
          style: { marginBottom: 14 },
          children: [
            t.jsx(S, { n: "lock" }),
            "Suspended: nobody at this school can sign in.",
          ],
        }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, {
            label: "Student seats",
            value: `${E.students} / ${i.studentSeats}`,
            meter: gA(E.students, i.studentSeats),
            icon: "seat",
          }),
          t.jsx(F, {
            label: "Teacher seats",
            value: `${E.teachers} / ${i.teacherSeats}`,
            meter: gA(E.teachers, i.teacherSeats),
            icon: "users",
          }),
          t.jsx(F, {
            label: "Engagement",
            value: `${E.engagement}%`,
            icon: "chart",
            tone: E.engagement < 60 ? "bad" : void 0,
            sub: "weekly active users",
          }),
          t.jsx(F, {
            label: "Curriculum delivered",
            value: `${E.implementation}%`,
            icon: "check",
            sub: "of planned days so far",
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Class" }),
                      t.jsx("th", { children: "Package" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: Mt.map((u) =>
                    t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsx("td", { children: u }),
                          t.jsx("td", {
                            children: t.jsxs("select", {
                              className: "input",
                              style: { width: 160 },
                              value: i.packages[u] ?? "",
                              onChange: (Q) => {
                                (n((h) => {
                                  const d = h.schools.find(
                                    (I) => I.id === i.id,
                                  );
                                  Q.target.value
                                    ? (d.packages[u] = Q.target.value)
                                    : delete d.packages[u];
                                }),
                                  s(
                                    `${u} package updated · features change immediately`,
                                  ));
                              },
                              children: [
                                t.jsx("option", {
                                  value: "",
                                  children: "Not purchased",
                                }),
                                je.map((Q) =>
                                  t.jsx("option", { children: Q }, Q),
                                ),
                              ],
                            }),
                          }),
                        ],
                      },
                      u,
                    ),
                  ),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("div", { className: "eyebrow", children: "Sections" }),
              m.map((u) =>
                t.jsxs(
                  "div",
                  {
                    className: "row between",
                    children: [
                      t.jsx("span", { children: z(e, u.id) }),
                      t.jsxs(v, { children: ["Day ", e.classPosition[u.id]] }),
                    ],
                  },
                  u.id,
                ),
              ),
              !m.length &&
                t.jsx("small", {
                  children: "The principal hasn’t created sections yet.",
                }),
              t.jsx("div", { className: "divider" }),
              t.jsxs("div", {
                className: "notice info",
                children: [
                  t.jsx(S, { n: "shield" }),
                  "EzRoots can’t enter a school’s workspace. For support, the school shares its screen or sign-in.",
                ],
              }),
            ],
          }),
        ],
      }),
      l &&
        t.jsxs(AA, {
          title: "Edit student seats",
          onClose: () => r(!1),
          foot: t.jsx("button", {
            className: "btn",
            disabled: o < E.students,
            onClick: () => {
              (n((u) => {
                u.schools.find((Q) => Q.id === i.id).studentSeats = o;
              }),
                s("Seat limit updated"),
                r(!1));
            },
            children: "Save",
          }),
          children: [
            t.jsx(N, {
              label: "Student seats",
              children: t.jsx("input", {
                className: "input",
                type: "number",
                min: E.students,
                value: o,
                onChange: (u) => a(Number(u.target.value)),
              }),
            }),
            t.jsxs("small", {
              children: [E.students, " in use. The limit can’t go below that."],
            }),
          ],
        }),
      g &&
        t.jsxs(AA, {
          title: "Principal password reset",
          onClose: () => C(!1),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => C(!1),
            children: "Done",
          }),
          children: [
            t.jsxs("p", {
              children: [
                "Temporary password for ",
                t.jsx("b", { children: c == null ? void 0 : c.name }),
                ":",
              ],
            }),
            t.jsx("div", {
              className: "card pad",
              style: {
                fontFamily: "monospace",
                fontSize: 22,
                textAlign: "center",
              },
              children: "ez-7730",
            }),
          ],
        }),
    ],
  });
}
function vh() {
  const { db: A, update: e, toast: n } = b(),
    [s, i] = B.useState("Waiting"),
    l = A.seatRequests.filter((o) =>
      s === "Waiting" ? o.status === "pending" : o.status !== "pending",
    ),
    r = (o, a) => {
      (e((g) => {
        const C = g.seatRequests.find((c) => c.id === o);
        C.status = a ? "approved" : "declined";
        const E = g.schools.find((c) => c.id === C.schoolId);
        (a &&
          (C.kind === "student"
            ? (E.studentSeats += C.extra)
            : (E.teacherSeats += C.extra)),
          E.principalId &&
            g.notices.unshift({
              id: O("n"),
              to: E.principalId,
              text: `EzRoots ${a ? "approved" : "declined"} your request for ${C.extra} more ${C.kind} seats.`,
              link: "/principal/seats",
              date: uA,
              read: !1,
            }));
      }),
        n(
          a ? "Approved · seat limit raised" : "Declined · principal notified",
        ));
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "EzRoots",
        title: "Seat requests",
        sub: "Approve when the extra kits are billed.",
        children: t.jsx(DA, {
          value: s,
          options: ["Waiting", "Done"],
          onChange: i,
        }),
      }),
      t.jsxs("div", {
        className: "card tablewrap",
        children: [
          t.jsxs("table", {
            className: "table",
            children: [
              t.jsx("thead", {
                children: t.jsxs("tr", {
                  children: [
                    t.jsx("th", { children: "School" }),
                    t.jsx("th", { children: "Request" }),
                    t.jsx("th", { children: "Current limit" }),
                    t.jsx("th", { children: "Note" }),
                    t.jsx("th", { children: "Date" }),
                    t.jsx("th", {}),
                  ],
                }),
              }),
              t.jsx("tbody", {
                children: l.map((o) => {
                  const a = A.schools.find((g) => g.id === o.schoolId);
                  return t.jsxs(
                    "tr",
                    {
                      children: [
                        t.jsxs("td", {
                          children: [
                            t.jsx("strong", { children: a.name }),
                            t.jsx("small", { children: a.city }),
                          ],
                        }),
                        t.jsxs("td", { children: ["+", o.extra, " ", o.kind] }),
                        t.jsx("td", {
                          children:
                            o.kind === "student"
                              ? a.studentSeats
                              : a.teacherSeats,
                        }),
                        t.jsx("td", { children: o.note || "—" }),
                        t.jsx("td", { children: CA(o.date) }),
                        t.jsx("td", {
                          children:
                            o.status === "pending"
                              ? t.jsxs("div", {
                                  className: "actions",
                                  children: [
                                    t.jsx("button", {
                                      className: "btn sm good",
                                      onClick: () => r(o.id, !0),
                                      children: "Approve",
                                    }),
                                    t.jsx("button", {
                                      className: "btn sm ghost",
                                      onClick: () => r(o.id, !1),
                                      children: "Decline",
                                    }),
                                  ],
                                })
                              : t.jsx(v, {
                                  tone:
                                    o.status === "approved" ? "good" : "bad",
                                  children: o.status,
                                }),
                        }),
                      ],
                    },
                    o.id,
                  );
                }),
              }),
            ],
          }),
          !l.length && t.jsx(_, { icon: "seat", title: "Nothing here" }),
        ],
      }),
    ],
  });
}
function Rh() {
  const { db: A, update: e } = b();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Sales packages",
        title: "Packages & features",
        sub: "A package is a tag on each class of a school. Tick what each tag unlocks. Content can also be locked to a tier by the Content Admin.",
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table matrix",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Feature" }),
                  je.map((n) => t.jsx("th", { children: n }, n)),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: Object.entries(A.features).map(([n, s]) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: n }),
                      }),
                      je.map((i) =>
                        t.jsx(
                          "td",
                          {
                            children: t.jsx(_n, {
                              label: `${n} in ${i}`,
                              checked: s[i],
                              onChange: (l) =>
                                e((r) => {
                                  r.features[n][i] = l;
                                }),
                            }),
                          },
                          i,
                        ),
                      ),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Package names Bronze, Silver, Gold and Platinum are from the decisions; the feature list is a starting suggestion for EzRoots to adjust.",
      }),
    ],
  });
}
function Yh() {
  const { db: A, update: e, toast: n } = b(),
    [s, i] = B.useState(!1),
    [l, r] = B.useState(""),
    [o, a] = B.useState("Content Admin"),
    [g, C] = B.useState("Science"),
    E = A.users.filter(
      (c) => c.role === "superadmin" || c.role === "contentadmin",
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "EzRoots",
        title: "EzRoots team",
        sub: "Several Super Admins and Content Admins are allowed.",
        children: t.jsxs("button", {
          className: "btn",
          onClick: () => i(!0),
          children: [t.jsx(S, { n: "plus" }), "Add team member"],
        }),
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Name" }),
                  t.jsx("th", { children: "Role" }),
                  t.jsx("th", { children: "Team" }),
                  t.jsx("th", { children: "Email" }),
                  t.jsx("th", { children: "Status" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: E.map((c) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: c.name }),
                      }),
                      t.jsx("td", {
                        children:
                          c.role === "superadmin"
                            ? "Super Admin"
                            : "Content Admin",
                      }),
                      t.jsx("td", { children: c.team ?? "—" }),
                      t.jsx("td", { children: c.email }),
                      t.jsx("td", {
                        children: t.jsx(v, {
                          tone: "good",
                          children: "Active",
                        }),
                      }),
                    ],
                  },
                  c.id,
                ),
              ),
            }),
          ],
        }),
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Whether Content Admins are limited to their own subject team is still open (I9). Right now every Content Admin can edit everything.",
      }),
      s &&
        t.jsxs(AA, {
          title: "Add team member",
          onClose: () => i(!1),
          foot: t.jsx("button", {
            className: "btn",
            disabled: !l,
            onClick: () => {
              (e((c) => {
                c.users.push({
                  id: O("u-ez"),
                  role: o === "Super Admin" ? "superadmin" : "contentadmin",
                  name: l,
                  username: l.toLowerCase().replace(/\s+/g, "."),
                  email: `${l.split(" ")[0].toLowerCase()}@ezroots.in`,
                  active: !0,
                  team: o === "Content Admin" ? g : void 0,
                });
              }),
                n(`${l} added`),
                i(!1),
                r(""));
            },
            children: "Add",
          }),
          children: [
            t.jsx(N, {
              label: "Name",
              children: t.jsx("input", {
                className: "input",
                value: l,
                onChange: (c) => r(c.target.value),
              }),
            }),
            t.jsx(DA, {
              value: o,
              options: ["Super Admin", "Content Admin"],
              onChange: a,
            }),
            o === "Content Admin" &&
              t.jsx(N, {
                label: "Academic team",
                children: t.jsx("select", {
                  className: "input",
                  value: g,
                  onChange: (c) => C(c.target.value),
                  children: [
                    "Kindergarten",
                    "Language",
                    "Maths",
                    "Science",
                  ].map((c) => t.jsx("option", { children: c }, c)),
                }),
              }),
          ],
        }),
    ],
  });
}
function bh() {
  const { db: A } = b(),
    [e, n] = B.useState([]),
    s = A.schools.find((l) => l.id === e[0]),
    i = s ? A.sections.filter((l) => l.schoolId === s.id) : [];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Learning analytics",
        title: "Across all schools",
        sub: "Drill down: all schools → school → section.",
        children: t.jsxs("button", {
          className: "btn secondary",
          children: [t.jsx(S, { n: "down" }), "Export CSV"],
        }),
      }),
      t.jsxs("div", {
        className: "steps",
        children: [
          t.jsx("button", {
            className: "pill primary",
            onClick: () => n([]),
            children: "All schools",
          }),
          s && t.jsx("span", { className: "pill", children: s.name }),
        ],
      }),
      s
        ? t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Section" }),
                      t.jsx("th", { children: "Day" }),
                      t.jsx("th", { children: "Activities finished" }),
                      t.jsx("th", { children: "Average score" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: i.map((l) => {
                    const r = new Set(
                        A.students
                          .filter((a) => a.sectionId === l.id)
                          .map((a) => a.id),
                      ),
                      o = A.attempts.filter((a) => r.has(a.studentId));
                    return t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsx("td", {
                            children: t.jsx("strong", { children: z(A, l.id) }),
                          }),
                          t.jsxs("td", {
                            children: ["Day ", A.classPosition[l.id]],
                          }),
                          t.jsx("td", { children: o.length }),
                          t.jsx("td", {
                            children: o.length
                              ? `${Math.round(o.reduce((a, g) => a + g.score, 0) / o.length)}%`
                              : "—",
                          }),
                        ],
                      },
                      l.id,
                    );
                  }),
                }),
              ],
            }),
          })
        : t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "School" }),
                      t.jsx("th", { children: "Students" }),
                      t.jsx("th", { children: "Engagement" }),
                      t.jsx("th", { children: "Curriculum delivered" }),
                      t.jsx("th", {}),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: A.schools.map((l) => {
                    const r = Gn(A, l);
                    return t.jsxs(
                      "tr",
                      {
                        className: "click",
                        onClick: () => (l.summary ? null : n([l.id])),
                        children: [
                          t.jsxs("td", {
                            children: [
                              t.jsx("strong", { children: l.name }),
                              t.jsx("small", { children: l.city }),
                            ],
                          }),
                          t.jsx("td", { children: r.students }),
                          t.jsxs("td", {
                            style: { minWidth: 140 },
                            children: [
                              r.engagement,
                              "%",
                              t.jsx(TA, {
                                v: r.engagement,
                                tone: r.engagement < 60 ? "bad" : "good",
                              }),
                            ],
                          }),
                          t.jsxs("td", {
                            style: { minWidth: 140 },
                            children: [
                              r.implementation,
                              "%",
                              t.jsx(TA, { v: r.implementation, tone: "good" }),
                            ],
                          }),
                          t.jsx("td", {
                            children: l.summary
                              ? t.jsx("small", {
                                  children: "summary only in demo",
                                })
                              : t.jsx(S, { n: "arrow" }),
                          }),
                        ],
                      },
                      l.id,
                    );
                  }),
                }),
              ],
            }),
          }),
    ],
  });
}
function Wh() {
  const { toast: A } = b(),
    [e, n] = B.useState(600),
    [s, i] = B.useState(!1),
    [l, r] = B.useState(80),
    [o, a] = B.useState(60);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, { eyebrow: "Platform", title: "Platform settings" }),
      t.jsxs("div", {
        className: "grid g2",
        children: [
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (g) => {
              (g.preventDefault(), A("Settings saved"));
            },
            children: [
              t.jsx("h2", { children: "Content" }),
              t.jsx(N, {
                label: "Maximum upload size (MB)",
                hint: "real sample videos are up to 548 MB",
                children: t.jsx("input", {
                  className: "input",
                  type: "number",
                  value: e,
                  onChange: (g) => n(Number(g.target.value)),
                }),
              }),
              t.jsxs("label", {
                className: "row between",
                children: [
                  t.jsx("span", { children: "Allow downloads by default" }),
                  t.jsx(_n, {
                    label: "Downloads by default",
                    checked: s,
                    onChange: i,
                  }),
                ],
              }),
              t.jsxs("label", {
                className: "row between",
                children: [
                  t.jsx("span", {
                    children: "Watermark lesson plans with school name",
                  }),
                  t.jsx(_n, {
                    label: "Watermark",
                    checked: !0,
                    onChange: () => A("Watermark stays on in the demo"),
                  }),
                ],
              }),
              t.jsx("h2", { children: "Learning levels" }),
              t.jsxs("div", {
                className: "grid g2",
                children: [
                  t.jsx(N, {
                    label: "“Strong” from (%)",
                    children: t.jsx("input", {
                      className: "input",
                      type: "number",
                      value: l,
                      onChange: (g) => r(Number(g.target.value)),
                    }),
                  }),
                  t.jsx(N, {
                    label: "“Developing” from (%)",
                    children: t.jsx("input", {
                      className: "input",
                      type: "number",
                      value: o,
                      onChange: (g) => a(Number(g.target.value)),
                    }),
                  }),
                ],
              }),
              t.jsx("button", { className: "btn", children: "Save" }),
            ],
          }),
          t.jsxs("div", {
            className: "card pad stack",
            children: [
              t.jsx("h2", { children: "Audit log" }),
              [
                [
                  "Riya Thomas",
                  "approved 30 student seats · Little Oaks",
                  "Today 10:24",
                ],
                [
                  "Diya Raman",
                  "published Month 4 planner · Level 1",
                  "Yesterday",
                ],
                [
                  "Kavitha Rao",
                  "marked a leaver · Sunrise Montessori",
                  "26 Sep",
                ],
              ].map(([g, C, E]) =>
                t.jsxs(
                  "div",
                  {
                    children: [
                      t.jsx("b", { children: g }),
                      " ",
                      C,
                      t.jsx("small", {
                        style: { display: "block" },
                        children: E,
                      }),
                    ],
                  },
                  C,
                ),
              ),
              t.jsxs("div", {
                className: "notice info",
                children: [
                  t.jsx(S, { n: "shield" }),
                  "Screenshots can’t be fully blocked in a browser. Production uses view-only files, watermarks and no downloads (open item E4).",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Uh() {
  const { db: A } = b(),
    e = Object.keys(A.links).length,
    n = A.issues.filter((s) => s.status === "open");
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "EzRoots academics",
        title: "Curriculum overview",
        sub: "Coverage of the 180-day plan, content waiting for review and reports from teachers.",
      }),
      t.jsxs("div", {
        className: "grid g4",
        children: [
          t.jsx(F, {
            label: "Planner days with content",
            value: "20 / 180",
            icon: "calendar",
            sub: "Level 1 · Month 4 sample",
            meter: gA(20, 180),
          }),
          t.jsx(F, {
            label: "Sessions with linked resources",
            value: `${e} / 80`,
            icon: "book",
            meter: gA(e, 80),
          }),
          t.jsx(F, {
            label: "Activities",
            value: A.activities.filter((s) => s.source === "EzRoots").length,
            icon: "star",
            sub: `${A.activities.filter((s) => s.status !== "published").length} awaiting review`,
          }),
          t.jsx(F, {
            label: "Open content issues",
            value: n.length,
            icon: "flag",
            tone: n.length ? "bad" : void 0,
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split section",
        children: [
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "Track · class" }),
                      t.jsx("th", { children: "Planner months uploaded" }),
                      t.jsx("th", { children: "Coverage" }),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: A.tracks
                    .flatMap((s) => Mt.map((i) => [s, i]))
                    .slice(0, 8)
                    .map(([s, i]) => {
                      const l = s === "CBSE" && i === "Nursery";
                      return t.jsxs(
                        "tr",
                        {
                          children: [
                            t.jsxs("td", {
                              children: [
                                t.jsx("strong", { children: s }),
                                t.jsx("small", { children: i }),
                              ],
                            }),
                            t.jsx("td", { children: l ? "Month 4" : "—" }),
                            t.jsxs("td", {
                              style: { minWidth: 140 },
                              children: [
                                l ? "11%" : "0%",
                                t.jsx(TA, { v: l ? 11 : 0, tone: "good" }),
                              ],
                            }),
                          ],
                        },
                        s + i,
                      );
                    }),
                }),
              ],
            }),
          }),
          t.jsxs("div", {
            className: "stack",
            children: [
              t.jsx(K, {
                to: "/ca/import",
                className: "card pad link",
                children: t.jsxs("div", {
                  className: "row",
                  children: [
                    t.jsx("span", {
                      className: "fileicon xls",
                      children: t.jsx(S, { n: "upload" }),
                    }),
                    t.jsxs("div", {
                      children: [
                        t.jsx("h3", { children: "Import a planner" }),
                        t.jsx("small", {
                          children:
                            "Upload the Excel planner for a class and month",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              t.jsx(K, {
                to: "/ca/activities/new",
                className: "card pad link",
                children: t.jsxs("div", {
                  className: "row",
                  children: [
                    t.jsx("span", {
                      className: "fileicon activity",
                      children: t.jsx(S, { n: "star" }),
                    }),
                    t.jsxs("div", {
                      children: [
                        t.jsx("h3", { children: "Build an activity" }),
                        t.jsx("small", {
                          children:
                            "Pick a template, add content, preview as a child",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              n.map((s) =>
                t.jsxs(
                  K,
                  {
                    to: "/ca/issues",
                    className: "notice",
                    children: [
                      t.jsx(S, { n: "flag" }),
                      t.jsxs("span", {
                        children: [
                          t.jsxs("b", {
                            children: ["Day ", s.day, " · ", s.slot],
                          }),
                          ": ",
                          s.text,
                        ],
                      }),
                    ],
                  },
                  s.id,
                ),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fh() {
  const { db: A, update: e, toast: n } = b(),
    [s, i] = B.useState("");
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Curriculum",
        title: "Tracks",
        sub: "A track is a version of the curriculum, e.g. by board. The Super Admin assigns one to each school.",
      }),
      t.jsxs("div", {
        className: "grid g3",
        children: [
          A.tracks.map((l) =>
            t.jsxs(
              "div",
              {
                className: "card pad stack",
                children: [
                  t.jsx("h2", { children: l }),
                  t.jsxs("small", {
                    children: [
                      A.schools.filter((r) => r.track === l).length,
                      " schools",
                    ],
                  }),
                  t.jsx("small", {
                    children:
                      l === "CBSE"
                        ? "Standard EzRoots curriculum"
                        : "Aligned to the school’s international textbooks",
                  }),
                ],
              },
              l,
            ),
          ),
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (l) => {
              (l.preventDefault(),
                s &&
                  (e((r) => {
                    r.tracks.push(s);
                  }),
                  n(`Track “${s}” created`),
                  i("")));
            },
            children: [
              t.jsx("h3", { children: "New track" }),
              t.jsx(N, {
                label: "Name",
                children: t.jsx("input", {
                  className: "input",
                  value: s,
                  onChange: (l) => i(l.target.value),
                  placeholder: "e.g. State board (Tamil Nadu)",
                }),
              }),
              t.jsx("button", { className: "btn", children: "Create track" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Th() {
  const { db: A } = b(),
    e = H(),
    [n, s] = B.useState("CBSE"),
    [i, l] = B.useState("Nursery"),
    [r, o] = B.useState(4),
    a = n === "CBSE" && i === "Nursery" && r === 4;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Curriculum",
        title: "Curriculum planner",
        sub: "Month → week → day for each track and class. Click a day to edit its sessions.",
        children: [
          t.jsx("select", {
            className: "input",
            style: { width: 170 },
            value: n,
            onChange: (g) => s(g.target.value),
            children: A.tracks.map((g) => t.jsx("option", { children: g }, g)),
          }),
          t.jsx("select", {
            className: "input",
            style: { width: 150 },
            value: i,
            onChange: (g) => l(g.target.value),
            children: Mt.map((g) => t.jsx("option", { children: g }, g)),
          }),
          t.jsxs(K, {
            className: "btn",
            to: "/ca/import",
            children: [t.jsx(S, { n: "upload" }), "Import planner"],
          }),
        ],
      }),
      t.jsx("div", {
        className: "monthgrid",
        children: Array.from({ length: 9 }, (g, C) => C + 1).map((g) =>
          t.jsxs(
            "button",
            {
              className: `${g === r ? "on" : ""} ${n === "CBSE" && i === "Nursery" && g === 4 ? "" : "empty"}`,
              onClick: () => o(g),
              children: ["Month ", g],
            },
            g,
          ),
        ),
      }),
      a
        ? t.jsxs("div", {
            className: "stack section",
            children: [
              t.jsxs("div", {
                className: "demo-note",
                children: [
                  "Source: “",
                  Ei.title,
                  "” (EzRoots sample). Shown for Nursery because the Level ↔ class mapping is still open (D2).",
                ],
              }),
              Ei.weeks.map((g) =>
                t.jsxs(
                  "div",
                  {
                    className: "card pad",
                    children: [
                      t.jsxs("h3", {
                        style: { marginBottom: 10 },
                        children: ["Week ", g.week],
                      }),
                      t.jsx("div", {
                        className: "grid",
                        style: {
                          gridTemplateColumns: "repeat(5, minmax(0,1fr))",
                        },
                        children: g.days.map((C) =>
                          t.jsxs(
                            "button",
                            {
                              className: "daytile",
                              onClick: () => e(`/ca/planner/day/${C.day}`),
                              children: [
                                t.jsxs("strong", { children: ["Day ", C.day] }),
                                C.sessions.map((E) => {
                                  var m;
                                  const c = A.links[$e(C.day, E.slot)];
                                  return t.jsxs(
                                    "small",
                                    {
                                      children: [
                                        vi[E.slot],
                                        ": ",
                                        (m = E.items[0]) == null
                                          ? void 0
                                          : m.slice(0, 26),
                                        c ? " · 🔗" : "",
                                        c != null && c.tier ? " · 🔒" : "",
                                      ],
                                    },
                                    E.slot,
                                  );
                                }),
                              ],
                            },
                            C.day,
                          ),
                        ),
                      }),
                    ],
                  },
                  g.week,
                ),
              ),
            ],
          })
        : t.jsx("div", {
            className: "card section",
            children: t.jsx(_, {
              icon: "calendar",
              title: `No planner for ${n} · ${i} · Month ${r}`,
              children: t.jsx(K, {
                className: "btn secondary",
                to: "/ca/import",
                children: "Import it",
              }),
            }),
          }),
    ],
  });
}
function Vh() {
  const { day: A } = on(),
    e = Number(A),
    { db: n, update: s, toast: i } = b(),
    l = pe.find((g) => g.day === e),
    [r, o] = B.useState(null);
  if (!l) return t.jsx(_, { title: "Day not found" });
  const a = {
    lessonPlans: "lesson plan",
    videos: "video",
    activities: "activity",
  };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Day editor · Nursery · CBSE",
        title: `Day ${e}`,
        sub: "Link videos, lesson plans and activities to each session. Lock items to a package tier if needed.",
        children: [
          t.jsxs(K, {
            className: "btn secondary",
            to: `/ca/planner/day/${Math.max(61, e - 1)}`,
            children: [t.jsx(S, { n: "back" }), "Day ", Math.max(61, e - 1)],
          }),
          t.jsxs(K, {
            className: "btn secondary",
            to: `/ca/planner/day/${Math.min(80, e + 1)}`,
            children: ["Day ", Math.min(80, e + 1), t.jsx(S, { n: "arrow" })],
          }),
          t.jsx("button", {
            className: "btn",
            onClick: () => i(`Day ${e} published · teachers notified`),
            children: "Publish changes",
          }),
        ],
      }),
      t.jsx("div", {
        className: "stack",
        children: l.sessions.map((g) => {
          var c, m, u;
          const C = $e(e, g.slot),
            E = n.links[C] ?? {};
          return t.jsxs(
            "div",
            {
              className: "card pad stack",
              children: [
                t.jsxs("div", {
                  className: "row between wrap",
                  children: [
                    t.jsxs("span", {
                      className: "row",
                      children: [
                        t.jsx("span", {
                          className: `slotbadge ${Ca[g.slot]}`,
                          children: vi[g.slot],
                        }),
                        t.jsxs("span", {
                          children: [
                            t.jsxs("small", {
                              children: [g.slot, " · ", jt[g.slot]],
                            }),
                            t.jsx("h3", { children: g.items.join(" · ") }),
                            t.jsxs("small", {
                              children: ["Materials: ", g.materials || "none"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.jsxs("label", {
                      className: "row",
                      children: [
                        t.jsx("span", {
                          className: "muted",
                          children: "Lock to package",
                        }),
                        t.jsxs("select", {
                          className: "input",
                          style: { width: 150 },
                          value: E.tier ?? "",
                          onChange: (Q) =>
                            s((h) => {
                              h.links[C] = {
                                ...(h.links[C] ?? {}),
                                tier: Q.target.value || void 0,
                              };
                            }),
                          children: [
                            t.jsx("option", {
                              value: "",
                              children: "All packages",
                            }),
                            je.map((Q) =>
                              t.jsxs(
                                "option",
                                { value: Q, children: [Q, " and above"] },
                                Q,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  className: "row wrap",
                  children: [
                    (c = E.videos) == null
                      ? void 0
                      : c.map((Q) => {
                          var h;
                          return t.jsxs(
                            v,
                            {
                              tone: "blue",
                              children: [
                                t.jsx(S, { n: "play" }),
                                (h = JA(Q)) == null ? void 0 : h.title,
                                " ",
                                t.jsx("button", {
                                  className: "textlink",
                                  "aria-label": "Remove",
                                  onClick: () =>
                                    s((d) => {
                                      d.links[C].videos = d.links[
                                        C
                                      ].videos.filter((I) => I !== Q);
                                    }),
                                  children: "×",
                                }),
                              ],
                            },
                            Q,
                          );
                        }),
                    (m = E.lessonPlans) == null
                      ? void 0
                      : m.map((Q) => {
                          var h;
                          return t.jsxs(
                            v,
                            {
                              tone: "pink",
                              children: [
                                t.jsx(S, { n: "book" }),
                                (h = ze(Q)) == null
                                  ? void 0
                                  : h.title.slice(0, 40),
                                " ",
                                t.jsx("button", {
                                  className: "textlink",
                                  "aria-label": "Remove",
                                  onClick: () =>
                                    s((d) => {
                                      d.links[C].lessonPlans = d.links[
                                        C
                                      ].lessonPlans.filter((I) => I !== Q);
                                    }),
                                  children: "×",
                                }),
                              ],
                            },
                            Q,
                          );
                        }),
                    (u = E.activities) == null
                      ? void 0
                      : u.map((Q) => {
                          var h;
                          return t.jsxs(
                            v,
                            {
                              tone: "warn",
                              children: [
                                t.jsx(S, { n: "star" }),
                                (h = n.activities.find((d) => d.id === Q)) ==
                                null
                                  ? void 0
                                  : h.title,
                                " ",
                                t.jsx("button", {
                                  className: "textlink",
                                  "aria-label": "Remove",
                                  onClick: () =>
                                    s((d) => {
                                      d.links[C].activities = d.links[
                                        C
                                      ].activities.filter((I) => I !== Q);
                                    }),
                                  children: "×",
                                }),
                              ],
                            },
                            Q,
                          );
                        }),
                  ],
                }),
                t.jsx("div", {
                  className: "actions",
                  children: ["videos", "lessonPlans", "activities"].map((Q) =>
                    t.jsxs(
                      "button",
                      {
                        className: "btn sm secondary",
                        onClick: () => o({ slot: g.slot, kind: Q }),
                        children: [t.jsx(S, { n: "plus" }), "Link ", a[Q]],
                      },
                      Q,
                    ),
                  ),
                }),
              ],
            },
            g.slot,
          );
        }),
      }),
      r &&
        t.jsx(Kh, {
          kind: r.kind,
          onClose: () => o(null),
          onPick: (g) => {
            const C = $e(e, r.slot);
            (s((E) => {
              const c = E.links[C] ?? {},
                m = c[r.kind] ?? [];
              E.links[C] = { ...c, [r.kind]: [...new Set([...m, g])] };
            }),
              i("Linked"),
              o(null));
          },
        }),
    ],
  });
}
function Kh({ kind: A, onClose: e, onPick: n }) {
  const { db: s } = b(),
    [i, l] = B.useState(""),
    r =
      A === "videos"
        ? yi.map((o) => [o.id, o.title, `${o.folder} · ${o.duration}`])
        : A === "lessonPlans"
          ? tn.map((o) => [
              o.id,
              o.title,
              `${o.folder} · Level ${o.level ?? "?"} · ${o.dayOrMonth}`,
            ])
          : s.activities.map((o) => [
              o.id,
              o.title,
              `${o.level} · ${o.concept} · ${o.tier}+`,
            ]);
  return t.jsxs(AA, {
    title: "Choose what to link",
    onClose: e,
    children: [
      t.jsx("input", {
        className: "input",
        autoFocus: !0,
        placeholder: "Search",
        value: i,
        onChange: (o) => l(o.target.value),
      }),
      t.jsx("div", {
        style: { maxHeight: 380, overflowY: "auto" },
        children: r
          .filter(([, o, a]) => (o + a).toLowerCase().includes(i.toLowerCase()))
          .map(([o, a, g]) =>
            t.jsxs(
              "button",
              {
                className: "folderrow",
                style: {
                  width: "100%",
                  border: 0,
                  background: "#fff",
                  textAlign: "left",
                },
                onClick: () => n(o),
                children: [
                  t.jsxs("span", {
                    style: { flex: 1 },
                    children: [
                      t.jsx("b", { children: a }),
                      t.jsx("small", {
                        style: { display: "block" },
                        children: g,
                      }),
                    ],
                  }),
                  t.jsx(S, { n: "plus" }),
                ],
              },
              o,
            ),
          ),
      }),
    ],
  });
}
function Lh() {
  const { update: A, toast: e } = b(),
    [n, s] = B.useState("upload"),
    [i, l] = B.useState(!1),
    r = pe;
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Curriculum",
        title: "Import planner",
        sub: "Upload EzRoots’ Excel planner. We read weeks, days, circle time and sessions, then flag anything odd before publishing.",
      }),
      t.jsxs("div", {
        className: "steps",
        children: [
          t.jsx("span", {
            className: n === "upload" ? "on" : "done",
            children: "1. Upload",
          }),
          t.jsx("span", {
            className: n === "review" ? "on" : n === "done" ? "done" : "",
            children: "2. Check",
          }),
          t.jsx("span", {
            className: n === "done" ? "on" : "",
            children: "3. Publish",
          }),
        ],
      }),
      n === "upload" &&
        t.jsxs("div", {
          className: "card pad form",
          style: { maxWidth: 640 },
          children: [
            t.jsxs("div", {
              className: "grid g2",
              children: [
                t.jsx(N, {
                  label: "Track",
                  children: t.jsx("select", {
                    className: "input",
                    children: t.jsx("option", { children: "CBSE" }),
                  }),
                }),
                t.jsx(N, {
                  label: "Class",
                  children: t.jsx("select", {
                    className: "input",
                    children: t.jsx("option", { children: "Nursery" }),
                  }),
                }),
              ],
            }),
            t.jsx(N, {
              label: "Planner file (.xlsx)",
              children: t.jsx("input", {
                className: "input",
                type: "file",
                accept: ".xlsx",
              }),
            }),
            t.jsx("div", {
              className: "demo-note",
              children:
                "For the demo, use EzRoots’ real sample: “Month 4 planner- Level 1-platinum 2026 - 27.xlsx”.",
            }),
            t.jsxs("button", {
              className: "btn",
              onClick: () => s("review"),
              children: [t.jsx(S, { n: "upload" }), "Use the Month 4 sample"],
            }),
          ],
        }),
      n === "review" &&
        t.jsxs(t.Fragment, {
          children: [
            t.jsxs("div", {
              className: "grid g4",
              children: [
                t.jsx(F, {
                  label: "Weeks found",
                  value: Ei.weeks.length,
                  icon: "calendar",
                }),
                t.jsx(F, {
                  label: "Days found",
                  value: r.length,
                  icon: "calendar",
                  sub: "Days 61–80",
                }),
                t.jsx(F, {
                  label: "Sessions",
                  value: r.length * 4,
                  icon: "book",
                }),
                t.jsx(F, {
                  label: "Problems",
                  value: i ? 0 : 1,
                  icon: "flag",
                  tone: i ? void 0 : "bad",
                }),
              ],
            }),
            !i &&
              t.jsxs("div", {
                className: "notice bad section",
                style: { marginTop: 14 },
                children: [
                  t.jsx(S, { n: "flag" }),
                  t.jsxs("span", {
                    children: [
                      "Row 19 is labelled ",
                      t.jsx("b", { children: "“Gr”" }),
                      " instead of a day number. It sits between Day 72 and Day 74, so it is probably ",
                      t.jsx("b", { children: "Day 73" }),
                      ". ",
                      t.jsx("button", {
                        className: "btn sm",
                        style: { marginLeft: 8 },
                        onClick: () => l(!0),
                        children: "Use Day 73",
                      }),
                    ],
                  }),
                ],
              }),
            t.jsx("div", {
              className: "card tablewrap section",
              style: { marginTop: 14 },
              children: t.jsxs("table", {
                className: "table",
                children: [
                  t.jsx("thead", {
                    children: t.jsxs("tr", {
                      children: [
                        t.jsx("th", { children: "Day" }),
                        t.jsx("th", { children: "Circle time" }),
                        t.jsx("th", { children: "Session 1" }),
                        t.jsx("th", { children: "Session 2" }),
                        t.jsx("th", { children: "Session 3" }),
                      ],
                    }),
                  }),
                  t.jsx("tbody", {
                    children: r.map((o) =>
                      t.jsxs(
                        "tr",
                        {
                          style:
                            o.sourceLabel === "Gr" && !i
                              ? { background: "var(--red-50)" }
                              : void 0,
                          children: [
                            t.jsx("td", {
                              children: t.jsx("strong", {
                                children:
                                  o.sourceLabel === "Gr" && !i
                                    ? "“Gr” ⚠"
                                    : `Day ${o.day}`,
                              }),
                            }),
                            o.sessions.map((a) =>
                              t.jsxs(
                                "td",
                                {
                                  children: [
                                    t.jsx("small", {
                                      style: { color: "var(--ink)" },
                                      children: a.items
                                        .join(" · ")
                                        .slice(0, 60),
                                    }),
                                    a.materials &&
                                      t.jsxs("small", {
                                        children: [
                                          "🧺 ",
                                          a.materials.slice(0, 40),
                                        ],
                                      }),
                                  ],
                                },
                                a.slot,
                              ),
                            ),
                          ],
                        },
                        o.day,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            t.jsxs("div", {
              className: "daybar",
              children: [
                t.jsx("span", {
                  children:
                    "Images in the sheet are imported as session pictures (the file is ~6 MB because of them).",
                }),
                t.jsx("button", {
                  className: "btn good",
                  disabled: !i,
                  onClick: () => {
                    (A((o) => {
                      o.published = !0;
                    }),
                      s("done"),
                      e("Month 4 planner published to CBSE · Nursery"));
                  },
                  children: "Publish planner",
                }),
              ],
            }),
          ],
        }),
      n === "done" &&
        t.jsxs("div", {
          className: "card pad empty",
          children: [
            t.jsx(S, { n: "check", size: 34 }),
            t.jsx("h3", { children: "Published" }),
            t.jsx("p", {
              children:
                "Teachers of CBSE · Nursery now see Month 4. Next: link videos and lesson plans per session.",
            }),
            t.jsx(K, {
              className: "btn",
              to: "/ca/planner/day/61",
              children: "Open Day 61 editor",
            }),
          ],
        }),
    ],
  });
}
function Ph() {
  const A = H(),
    [e, n] = B.useState(""),
    [s, i] = B.useState("All"),
    l = ["All", ...new Set(tn.map((o) => o.folder))],
    r = tn.filter(
      (o) =>
        (s === "All" || o.folder === s) &&
        (o.title + o.objectives).toLowerCase().includes(e.toLowerCase()),
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Content",
        title: "Lesson plans",
        sub: "EzRoots’ sample titles (the PDFs here are stand-ins). Plans will become structured content; the original PDF stays attached.",
        children: [
          t.jsx("button", {
            className: "btn secondary",
            disabled: !0,
            title: "EzRoots’ lesson-plan generator will post here",
            children: "Generate with EzRoots generator",
          }),
          t.jsxs("button", {
            className: "btn",
            children: [t.jsx(S, { n: "plus" }), "New lesson plan"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "row wrap",
        style: { marginBottom: 14 },
        children: [
          t.jsxs("div", {
            className: "search",
            style: { maxWidth: 420 },
            children: [
              t.jsx(S, { n: "search" }),
              t.jsx("input", {
                "aria-label": "Search lesson plans",
                value: e,
                onChange: (o) => n(o.target.value),
                placeholder: "Search",
              }),
            ],
          }),
          t.jsx("select", {
            className: "input",
            style: { width: 200 },
            value: s,
            onChange: (o) => i(o.target.value),
            children: l.map((o) => t.jsx("option", { children: o }, o)),
          }),
        ],
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Title" }),
                  t.jsx("th", { children: "Folder" }),
                  t.jsx("th", { children: "Level" }),
                  t.jsx("th", { children: "Day / month" }),
                  t.jsx("th", { children: "Template" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: r.map((o) =>
                t.jsxs(
                  "tr",
                  {
                    className: "click",
                    onClick: () => A(`/ca/lesson-plans/${o.id}`),
                    children: [
                      t.jsxs("td", {
                        children: [
                          t.jsx("strong", { children: o.title }),
                          t.jsxs("small", { children: [o.pages, " pages"] }),
                        ],
                      }),
                      t.jsx("td", { children: o.folder }),
                      t.jsx("td", { children: o.level ?? "—" }),
                      t.jsx("td", { children: o.dayOrMonth || "—" }),
                      t.jsx("td", {
                        children: o.dayOrMonth.startsWith("Day")
                          ? t.jsx(v, { children: "Day-based (A)" })
                          : t.jsx(v, {
                              tone: "primary",
                              children: "Month-based (B)",
                            }),
                      }),
                    ],
                  },
                  o.id,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Oh() {
  const { id: A } = on(),
    { db: e, toast: n } = b(),
    s = ze(A ?? ""),
    [i, l] = B.useState("Structured");
  return s
    ? t.jsxs(t.Fragment, {
        children: [
          t.jsxs(W, {
            eyebrow: `${s.folder} · Level ${s.level ?? "?"} · ${s.dayOrMonth}`,
            title: s.title,
            children: [
              t.jsx(DA, {
                value: i,
                options: ["Structured", "Original PDF"],
                onChange: l,
              }),
              t.jsx("button", {
                className: "btn",
                onClick: () => n("Sent for review by the Kindergarten team"),
                children: "Submit for review",
              }),
            ],
          }),
          i === "Original PDF"
            ? t.jsx(da, { lp: s, school: "EzRoots academics" })
            : t.jsxs("div", {
                className: "split",
                children: [
                  t.jsxs("form", {
                    className: "card pad form",
                    onSubmit: (r) => r.preventDefault(),
                    children: [
                      t.jsxs("div", {
                        className: "grid g2",
                        children: [
                          t.jsx(N, {
                            label: "Subject",
                            children: t.jsx("input", {
                              className: "input",
                              defaultValue: s.subject,
                            }),
                          }),
                          t.jsx(N, {
                            label: "Day / month",
                            children: t.jsx("input", {
                              className: "input",
                              defaultValue: s.dayOrMonth,
                            }),
                          }),
                        ],
                      }),
                      t.jsx(N, {
                        label: "Topic",
                        children: t.jsx("input", {
                          className: "input",
                          defaultValue: s.title,
                        }),
                      }),
                      t.jsx(N, {
                        label: "Learning objectives",
                        children: t.jsx("textarea", {
                          className: "input",
                          defaultValue: s.objectives,
                        }),
                      }),
                      t.jsx(N, {
                        label: "Materials required",
                        children: t.jsx("textarea", {
                          className: "input",
                          placeholder: "One per line",
                        }),
                      }),
                      t.jsx(N, {
                        label: "Teacher steps",
                        children: t.jsx("textarea", {
                          className: "input",
                          placeholder: "1. …",
                        }),
                      }),
                      t.jsx(N, {
                        label: "What students do",
                        children: t.jsx("textarea", { className: "input" }),
                      }),
                      t.jsxs("div", {
                        className: "grid g2",
                        children: [
                          t.jsx(N, {
                            label: "Classwork",
                            children: t.jsx("input", { className: "input" }),
                          }),
                          t.jsx(N, {
                            label: "Homework (for parents)",
                            children: t.jsx("input", { className: "input" }),
                          }),
                        ],
                      }),
                      t.jsx(N, {
                        label: "Formative assessment checklist",
                        children: t.jsx("textarea", {
                          className: "input",
                          placeholder: "☐ Can the child…",
                        }),
                      }),
                      t.jsx(N, {
                        label: "Words / sounds / actions used",
                        children: t.jsx("input", { className: "input" }),
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "stack",
                    children: [
                      t.jsxs("div", {
                        className: "card pad stack",
                        children: [
                          t.jsx("div", {
                            className: "eyebrow",
                            children: "Why structured?",
                          }),
                          t.jsx("p", {
                            className: "muted",
                            children:
                              "EzRoots’ generator can post straight into a package, and teachers get a readable, searchable plan on any screen. Fields follow both sample templates (see 03-lesson-plan-format).",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "card pad stack",
                        children: [
                          t.jsx("div", {
                            className: "eyebrow",
                            children: "Used in the planner",
                          }),
                          (() => {
                            const r = Object.entries(e.links).filter(
                              ([, o]) => {
                                var a;
                                return (a = o.lessonPlans) == null
                                  ? void 0
                                  : a.includes(s.id);
                              },
                            );
                            return r.length
                              ? r.map(([o]) =>
                                  t.jsxs(
                                    K,
                                    {
                                      to: `/ca/planner/day/${o.split("|")[0]}`,
                                      children: [
                                        "Day ",
                                        o.split("|")[0],
                                        " · ",
                                        o.split("|")[1],
                                      ],
                                    },
                                    o,
                                  ),
                                )
                              : t.jsx("small", {
                                  className: "muted",
                                  children: "Not linked to any day yet.",
                                });
                          })(),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        ],
      })
    : t.jsx(_, { title: "Lesson plan not found" });
}
function zh() {
  const { db: A, update: e, toast: n } = b(),
    s = [...new Set(A.media.map((E) => E.folder))],
    [i, l] = B.useState(s[0]),
    [r, o] = B.useState(null),
    [a, g] = B.useState(!1),
    C = A.media.filter((E) => E.folder === i);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Content",
        title: "Media library",
        sub: "Folders of videos, PDFs and sheets. Set download permission per file.",
        children: [
          t.jsxs("button", {
            className: "btn secondary",
            onClick: () => n("New folder created (demo)"),
            children: [t.jsx(S, { n: "folder" }), "New folder"],
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => g(!0),
            children: [t.jsx(S, { n: "upload" }), "Upload"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "split",
        style: { gridTemplateColumns: "260px 1fr" },
        children: [
          t.jsx("div", {
            className: "card",
            children: s.map((E) =>
              t.jsxs(
                "button",
                {
                  className: "folderrow",
                  style: {
                    width: "100%",
                    border: 0,
                    background: E === i ? "var(--primary-50)" : "#fff",
                    textAlign: "left",
                  },
                  onClick: () => l(E),
                  children: [
                    t.jsx(S, { n: "folder" }),
                    t.jsx("span", { style: { flex: 1 }, children: E }),
                    t.jsx("small", {
                      children: A.media.filter((c) => c.folder === E).length,
                    }),
                  ],
                },
                E,
              ),
            ),
          }),
          t.jsx("div", {
            className: "card tablewrap",
            children: t.jsxs("table", {
              className: "table",
              children: [
                t.jsx("thead", {
                  children: t.jsxs("tr", {
                    children: [
                      t.jsx("th", { children: "File" }),
                      t.jsx("th", { children: "Size" }),
                      t.jsx("th", { children: "Download" }),
                      t.jsx("th", {}),
                    ],
                  }),
                }),
                t.jsx("tbody", {
                  children: C.map((E) =>
                    t.jsxs(
                      "tr",
                      {
                        children: [
                          t.jsx("td", {
                            children: t.jsxs("div", {
                              className: "row",
                              children: [
                                t.jsx("span", {
                                  className: `fileicon ${E.kind}`,
                                  children: t.jsx(S, {
                                    n: E.kind === "video" ? "play" : "file",
                                  }),
                                }),
                                t.jsxs("span", {
                                  children: [
                                    t.jsx("strong", { children: E.name }),
                                    E.processing &&
                                      t.jsx("small", {
                                        children:
                                          "⏳ Making a low-bandwidth version…",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          t.jsxs("td", { children: [E.sizeMB, " MB"] }),
                          t.jsx("td", {
                            children: t.jsx(_n, {
                              label: `Download ${E.name}`,
                              checked: E.download,
                              onChange: (c) =>
                                e((m) => {
                                  m.media.find((u) => u.id === E.id).download =
                                    c;
                                }),
                            }),
                          }),
                          t.jsx("td", {
                            children: t.jsxs("div", {
                              className: "actions",
                              children: [
                                E.ref &&
                                  t.jsx("button", {
                                    className: "btn sm secondary",
                                    onClick: () => o(E.ref),
                                    children: "Play",
                                  }),
                                t.jsx("button", {
                                  className: "btn sm ghost",
                                  onClick: () =>
                                    n("Copy / move / rename / replace (demo)"),
                                  children: "•••",
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      E.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Real sample videos are 61–548 MB each. Uploads over the size limit are converted to smaller streaming copies for weak networks (open item E1).",
      }),
      r &&
        t.jsx(AA, {
          wide: !0,
          title: JA(r).title,
          onClose: () => o(null),
          children: t.jsx(Yi, { v: JA(r) }),
        }),
      a &&
        t.jsxs(AA, {
          title: "Upload files",
          onClose: () => g(!1),
          foot: t.jsx("button", {
            className: "btn",
            onClick: () => {
              (e((E) => {
                E.media.push({
                  id: O("m"),
                  folder: i,
                  name: "New upload.pdf",
                  kind: "pdf",
                  sizeMB: 2.1,
                  download: !1,
                });
              }),
                n("Uploaded"),
                g(!1));
            },
            children: "Upload",
          }),
          children: [
            t.jsx(N, {
              label: "Folder",
              children: t.jsx("select", {
                className: "input",
                value: i,
                onChange: (E) => l(E.target.value),
                children: s.map((E) => t.jsx("option", { children: E }, E)),
              }),
            }),
            t.jsx(N, {
              label: "Files",
              hint: "PDF, Excel, Word, video",
              children: t.jsx("input", {
                className: "input",
                type: "file",
                multiple: !0,
              }),
            }),
          ],
        }),
    ],
  });
}
function Xh() {
  const { db: A, update: e, toast: n } = b(),
    s = H();
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Content",
        title: "Interactive activities",
        sub: "Built from reusable templates. Every activity is reviewed by the academic team before children see it.",
        children: [
          t.jsx("button", {
            className: "btn secondary",
            disabled: !0,
            children: "Generate with AI (later)",
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => s("/ca/activities/new"),
            children: [t.jsx(S, { n: "plus" }), "New activity"],
          }),
        ],
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Activity" }),
                  t.jsx("th", { children: "Template" }),
                  t.jsx("th", { children: "Class" }),
                  t.jsx("th", { children: "Package" }),
                  t.jsx("th", { children: "Status" }),
                  t.jsx("th", {}),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: A.activities
                .filter((i) => i.source === "EzRoots")
                .map((i) =>
                  t.jsxs(
                    "tr",
                    {
                      children: [
                        t.jsx("td", {
                          children: t.jsxs("div", {
                            className: "row",
                            children: [
                              t.jsx("span", {
                                style: { fontSize: 24 },
                                children: i.art,
                              }),
                              t.jsxs("span", {
                                children: [
                                  t.jsx("strong", { children: i.title }),
                                  t.jsxs("small", {
                                    children: [i.concept, " · ", i.subject],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        t.jsx("td", { children: i.template }),
                        t.jsx("td", { children: i.level }),
                        t.jsx("td", {
                          children: t.jsxs(v, {
                            tone: "primary",
                            children: [i.tier, "+"],
                          }),
                        }),
                        t.jsx("td", {
                          children: t.jsx(v, {
                            tone:
                              i.status === "published"
                                ? "good"
                                : i.status === "review"
                                  ? "warn"
                                  : "",
                            children: i.status,
                          }),
                        }),
                        t.jsx("td", {
                          children:
                            i.status !== "published" &&
                            t.jsx("button", {
                              className: "btn sm good",
                              onClick: () => {
                                (e((l) => {
                                  l.activities.find(
                                    (r) => r.id === i.id,
                                  ).status = "published";
                                }),
                                  n("Approved and published"));
                              },
                              children: "Approve",
                            }),
                        }),
                      ],
                    },
                    i.id,
                  ),
                ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Hh() {
  const { update: A, toast: e } = b(),
    n = H(),
    s = [
      ["pattern", "Complete the pattern", "☀ 🟠 ?"],
      ["sort", "Sort into two groups", "📚 | 📄"],
      ["balance", "Drag & drop balance", "🍎 ⚖ ☁"],
      ["sound", "Tap & identify", "🐒 🌙"],
      ["count", "Count & choose", "1 2 3"],
    ],
    [i, l] = B.useState("sort"),
    [r, o] = B.useState("Hot or Cold?"),
    [a, g] = B.useState("Nursery"),
    [C, E] = B.useState("Science"),
    [c, m] = B.useState("Silver"),
    [u, Q] = B.useState("Hot"),
    [h, d] = B.useState("Cold"),
    [I, w] = B.useState(`☕ Tea = Hot
🧊 Ice = Cold
☀️ Sun = Hot
🍦 Ice cream = Cold`),
    [D, j] = B.useState(0),
    J = I.split(
      `
`,
    )
      .map((p) => p.split("=").map((k) => k.trim()))
      .filter((p) => p.length === 2),
    M = J[D % Math.max(1, J.length)];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Activity builder",
        title: "Create an activity",
        sub: "Choose a template, add content, check it as a child would, then send for review.",
      }),
      t.jsx("div", {
        className: "steps",
        children: s.map(([p, k, x]) =>
          t.jsxs(
            "button",
            {
              className: `pill ${i === p ? "primary" : ""}`,
              onClick: () => l(p),
              children: [x, " ", k],
            },
            p,
          ),
        ),
      }),
      t.jsxs("div", {
        className: "split",
        children: [
          t.jsxs("form", {
            className: "card pad form",
            onSubmit: (p) => {
              (p.preventDefault(),
                A((k) => {
                  k.activities.push({
                    id: O("act"),
                    title: r,
                    template: i,
                    level: a,
                    subject: C,
                    concept: `${u} & ${h}`,
                    minutes: 4,
                    tier: c,
                    status: "review",
                    art: J.map((x) => x[0].split(" ")[0])
                      .slice(0, 2)
                      .join(" "),
                    blurb: `Is it ${u.toLowerCase()} or ${h.toLowerCase()}?`,
                    source: "EzRoots",
                  });
                }),
                e("Sent for academic review"),
                n("/ca/activities"));
            },
            children: [
              t.jsx(N, {
                label: "Title",
                children: t.jsx("input", {
                  className: "input",
                  value: r,
                  onChange: (p) => o(p.target.value),
                }),
              }),
              t.jsxs("div", {
                className: "grid g3",
                children: [
                  t.jsx(N, {
                    label: "Class",
                    children: t.jsx("select", {
                      className: "input",
                      value: a,
                      onChange: (p) => g(p.target.value),
                      children: Mt.map((p) =>
                        t.jsx("option", { children: p }, p),
                      ),
                    }),
                  }),
                  t.jsx(N, {
                    label: "Subject",
                    children: t.jsx("select", {
                      className: "input",
                      value: C,
                      onChange: (p) => E(p.target.value),
                      children: [
                        "English",
                        "Maths",
                        "Science",
                        "Activities",
                      ].map((p) => t.jsx("option", { children: p }, p)),
                    }),
                  }),
                  t.jsx(N, {
                    label: "Package",
                    children: t.jsx("select", {
                      className: "input",
                      value: c,
                      onChange: (p) => m(p.target.value),
                      children: je.map((p) =>
                        t.jsx("option", { children: p }, p),
                      ),
                    }),
                  }),
                ],
              }),
              i === "sort"
                ? t.jsxs(t.Fragment, {
                    children: [
                      t.jsxs("div", {
                        className: "grid g2",
                        children: [
                          t.jsx(N, {
                            label: "Group A",
                            children: t.jsx("input", {
                              className: "input",
                              value: u,
                              onChange: (p) => Q(p.target.value),
                            }),
                          }),
                          t.jsx(N, {
                            label: "Group B",
                            children: t.jsx("input", {
                              className: "input",
                              value: h,
                              onChange: (p) => d(p.target.value),
                            }),
                          }),
                        ],
                      }),
                      t.jsx(N, {
                        label: "Items",
                        hint: "one per line: picture name = group",
                        children: t.jsx("textarea", {
                          className: "input",
                          style: { minHeight: 140 },
                          value: I,
                          onChange: (p) => w(p.target.value),
                        }),
                      }),
                    ],
                  })
                : t.jsx("div", {
                    className: "demo-note",
                    children:
                      "This template is shown in the prototype with sample content. The builder form for it follows the same pattern.",
                  }),
              t.jsx(N, {
                label: "Picture assets",
                hint: "must match the physical kit (EzRoots rules document)",
                children: t.jsx("input", {
                  className: "input",
                  type: "file",
                  multiple: !0,
                  accept: "image/*",
                }),
              }),
              t.jsx("button", {
                className: "btn",
                children: "Send for review",
              }),
            ],
          }),
          t.jsxs("div", {
            className: "card pad stack",
            style: { background: "#fbf7ff" },
            children: [
              t.jsx("div", { className: "eyebrow", children: "Child preview" }),
              i === "sort" && M
                ? t.jsxs("div", {
                    className: "game",
                    style: { gap: 12 },
                    children: [
                      t.jsxs("h2", {
                        children: [
                          "Is it ",
                          u.toLowerCase(),
                          " or ",
                          h.toLowerCase(),
                          "?",
                        ],
                      }),
                      t.jsx("div", {
                        className: "seq",
                        children: t.jsx("span", {
                          style: { width: 120, height: 120, fontSize: 60 },
                          children: M[0].split(" ")[0],
                        }),
                      }),
                      t.jsx("b", {
                        children: M[0].split(" ").slice(1).join(" "),
                      }),
                      t.jsx("div", {
                        className: "answers",
                        children: [u, h].map((p) =>
                          t.jsx(
                            "button",
                            {
                              className: `txt ${(p === M[1], "")}`,
                              onClick: () => {
                                (e(p === M[1] ? "Correct! 🎉" : "Try again 💜"),
                                  p === M[1] && j(D + 1));
                              },
                              children: p,
                            },
                            p,
                          ),
                        ),
                      }),
                    ],
                  })
                : t.jsx(_, {
                    icon: "star",
                    title: "Preview uses sample content",
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qh() {
  const { db: A, update: e, toast: n } = b(),
    [s, i] = B.useState(A.schools[0].id),
    l = A.schools.find((a) => a.id === s),
    r = `School folders / ${l.name.split(" ").slice(0, 2).join(" ")}`,
    o = A.media.filter((a) => a.folder === r);
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(W, {
        eyebrow: "Private per school",
        title: "School folders",
        sub: "Each school’s folder is separate. Only that school sees it.",
        children: [
          t.jsx("select", {
            className: "input",
            style: { width: 260 },
            value: s,
            onChange: (a) => i(a.target.value),
            children: A.schools.map((a) =>
              t.jsx("option", { value: a.id, children: a.name }, a.id),
            ),
          }),
          t.jsxs("button", {
            className: "btn",
            onClick: () => {
              (e((a) => {
                a.media.push({
                  id: O("m"),
                  folder: r,
                  name: `${l.name.split(" ")[0]} custom worksheet.pdf`,
                  kind: "pdf",
                  sizeMB: 0.8,
                  download: !0,
                });
              }),
                n(`Uploaded to ${l.name}`));
            },
            children: [t.jsx(S, { n: "upload" }), "Upload to this school"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "card",
        children: [
          o.map((a) =>
            t.jsxs(
              "div",
              {
                className: "folderrow",
                children: [
                  t.jsx("span", {
                    className: "fileicon pdf",
                    children: t.jsx(S, { n: "file" }),
                  }),
                  t.jsxs("span", {
                    style: { flex: 1 },
                    children: [
                      t.jsx("b", { children: a.name }),
                      t.jsxs("small", {
                        style: { display: "block" },
                        children: [a.sizeMB, " MB"],
                      }),
                    ],
                  }),
                  t.jsx(v, {
                    tone: a.download ? "good" : "",
                    children: a.download ? "Download allowed" : "View only",
                  }),
                ],
              },
              a.id,
            ),
          ),
          !o.length && t.jsx(_, { title: `Nothing in ${l.name}’s folder yet` }),
        ],
      }),
      t.jsx("div", {
        className: "demo-note section",
        children:
          "Owner assumed to be the Content Admin; who else can upload is open (J4).",
      }),
    ],
  });
}
function $h() {
  const { toast: A } = b(),
    e = [
      "Getting started with EzRoots",
      "Presenting Montessori materials",
      "Observing children during sorting",
      "Using the smartboard in class",
    ];
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "Teachers",
        title: "Teacher training",
        sub: "Modules every partner school’s teachers can watch.",
        children: t.jsxs("button", {
          className: "btn",
          onClick: () => A("Module created (demo)"),
          children: [t.jsx(S, { n: "plus" }), "New module"],
        }),
      }),
      t.jsx("div", {
        className: "card tablewrap",
        children: t.jsxs("table", {
          className: "table",
          children: [
            t.jsx("thead", {
              children: t.jsxs("tr", {
                children: [
                  t.jsx("th", { children: "Module" }),
                  t.jsx("th", { children: "Audience" }),
                  t.jsx("th", { children: "Completion" }),
                ],
              }),
            }),
            t.jsx("tbody", {
              children: e.map((n, s) =>
                t.jsxs(
                  "tr",
                  {
                    children: [
                      t.jsx("td", {
                        children: t.jsx("strong", { children: n }),
                      }),
                      t.jsx("td", { children: "All teachers" }),
                      t.jsxs("td", {
                        style: { minWidth: 140 },
                        children: [
                          [82, 46, 21, 9][s],
                          "%",
                          t.jsx(TA, { v: [82, 46, 21, 9][s], tone: "good" }),
                        ],
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function _h() {
  const { db: A, update: e, toast: n } = b(),
    [s, i] = B.useState("Open"),
    l = A.issues.filter((r) =>
      s === "Open" ? r.status === "open" : r.status === "fixed",
    );
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(W, {
        eyebrow: "From teachers",
        title: "Content issues",
        sub: "Reported from the session screen. Fixing one notifies the teacher.",
        children: t.jsx(DA, {
          value: s,
          options: ["Open", "Fixed"],
          onChange: i,
        }),
      }),
      t.jsxs("div", {
        className: "stack",
        children: [
          l.map((r) =>
            t.jsxs(
              "div",
              {
                className: "card pad row between wrap",
                children: [
                  t.jsxs("span", {
                    children: [
                      t.jsxs(v, {
                        tone: "primary",
                        children: ["Day ", r.day, " · ", r.slot],
                      }),
                      t.jsx("p", { style: { marginTop: 8 }, children: r.text }),
                      t.jsxs("small", { children: [r.by, " · ", CA(r.date)] }),
                    ],
                  }),
                  t.jsxs("span", {
                    className: "actions",
                    children: [
                      t.jsx(K, {
                        className: "btn sm secondary",
                        to: `/ca/planner/day/${r.day}`,
                        children: "Open day",
                      }),
                      r.status === "open" &&
                        t.jsx("button", {
                          className: "btn sm good",
                          onClick: () => {
                            (e((o) => {
                              ((o.issues.find((a) => a.id === r.id).status =
                                "fixed"),
                                o.notices.unshift({
                                  id: O("n"),
                                  to: "u-t1",
                                  text: `Content updated for Day ${r.day}: your report was fixed.`,
                                  link: `/teacher/planner?day=${r.day}`,
                                  date: uA,
                                  read: !1,
                                }));
                            }),
                              n("Marked fixed · teacher notified"));
                          },
                          children: "Mark fixed",
                        }),
                    ],
                  }),
                ],
              },
              r.id,
            ),
          ),
          !l.length &&
            t.jsx("div", {
              className: "card",
              children: t.jsx(_, {
                icon: "flag",
                title: `No ${s.toLowerCase()} issues`,
              }),
            }),
        ],
      }),
    ],
  });
}
function Oo() {
  const { me: A } = b();
  return t.jsx(zd, { to: A ? ls[A.role] : "/login", replace: !0 });
}
const Qn = [
  t.jsx(G, { path: "notifications", element: t.jsx(Ru, {}) }, "n"),
  t.jsx(G, { path: "profile", element: t.jsx(vu, {}) }, "p"),
  t.jsx(G, { path: "help", element: t.jsx(Yu, {}) }, "h"),
];
function kt(A, e = !1) {
  return t.jsx(pE, { role: A, children: e ? t.jsx(xu, {}) : t.jsx(fu, {}) });
}
function AB() {
  return t.jsx(Iu, {
    children: t.jsxs(iu, {
      future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
      children: [
        t.jsx(ju, {}),
        t.jsxs(Hd, {
          children: [
            t.jsx(G, { path: "/", element: t.jsx(Oo, {}) }),
            t.jsx(G, { path: "/login", element: t.jsx(Gu, {}) }),
            t.jsx(G, { path: "/forgot", element: t.jsx(yu, {}) }),
            t.jsx(G, { path: "/directory", element: t.jsx(Wu, {}) }),
            t.jsx(G, { path: "/reviews", element: t.jsx(Uu, {}) }),
            t.jsx(G, {
              path: "/teacher/smartboard/:day",
              element: t.jsx(pE, { role: "teacher", children: t.jsx(Ou, {}) }),
            }),
            t.jsxs(G, {
              path: "/sa",
              element: kt("superadmin"),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(Nh, {}) }),
                t.jsx(G, { path: "schools", element: t.jsx(Zh, {}) }),
                t.jsx(G, { path: "schools/new", element: t.jsx(Gh, {}) }),
                t.jsx(G, { path: "schools/:id", element: t.jsx(yh, {}) }),
                t.jsx(G, { path: "seat-requests", element: t.jsx(vh, {}) }),
                t.jsx(G, { path: "packages", element: t.jsx(Rh, {}) }),
                t.jsx(G, { path: "team", element: t.jsx(Yh, {}) }),
                t.jsx(G, { path: "analytics", element: t.jsx(bh, {}) }),
                t.jsx(G, { path: "settings", element: t.jsx(Wh, {}) }),
                Qn,
              ],
            }),
            t.jsxs(G, {
              path: "/ca",
              element: kt("contentadmin"),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(Uh, {}) }),
                t.jsx(G, { path: "tracks", element: t.jsx(Fh, {}) }),
                t.jsx(G, { path: "planner", element: t.jsx(Th, {}) }),
                t.jsx(G, { path: "planner/day/:day", element: t.jsx(Vh, {}) }),
                t.jsx(G, { path: "import", element: t.jsx(Lh, {}) }),
                t.jsx(G, { path: "lesson-plans", element: t.jsx(Ph, {}) }),
                t.jsx(G, { path: "lesson-plans/:id", element: t.jsx(Oh, {}) }),
                t.jsx(G, { path: "media", element: t.jsx(zh, {}) }),
                t.jsx(G, { path: "activities", element: t.jsx(Xh, {}) }),
                t.jsx(G, { path: "activities/new", element: t.jsx(Hh, {}) }),
                t.jsx(G, { path: "school-folders", element: t.jsx(qh, {}) }),
                t.jsx(G, { path: "training", element: t.jsx($h, {}) }),
                t.jsx(G, { path: "issues", element: t.jsx(_h, {}) }),
                Qn,
              ],
            }),
            t.jsxs(G, {
              path: "/principal",
              element: kt("principal"),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(Qh, {}) }),
                t.jsx(G, { path: "sections", element: t.jsx(wh, {}) }),
                t.jsx(G, { path: "teachers", element: t.jsx(Dh, {}) }),
                t.jsx(G, { path: "students", element: t.jsx(Mh, {}) }),
                t.jsx(G, { path: "parents", element: t.jsx(ph, {}) }),
                t.jsx(G, { path: "seats", element: t.jsx(Sh, {}) }),
                t.jsx(G, { path: "implementation", element: t.jsx(kh, {}) }),
                t.jsx(G, { path: "reports", element: t.jsx(fh, {}) }),
                t.jsx(G, { path: "folder", element: t.jsx(Jh, {}) }),
                t.jsx(G, { path: "settings", element: t.jsx(xh, {}) }),
                Qn,
              ],
            }),
            t.jsxs(G, {
              path: "/teacher",
              element: kt("teacher"),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(Fu, {}) }),
                t.jsx(G, { path: "planner", element: t.jsx(Tu, {}) }),
                t.jsx(G, { path: "library", element: t.jsx(zu, {}) }),
                t.jsx(G, { path: "assignments", element: t.jsx(Xu, {}) }),
                t.jsx(G, { path: "assignments/new", element: t.jsx(Hu, {}) }),
                t.jsx(G, { path: "students", element: t.jsx(qu, {}) }),
                t.jsx(G, { path: "students/:id", element: t.jsx($u, {}) }),
                t.jsx(G, { path: "observations", element: t.jsx(_u, {}) }),
                t.jsx(G, { path: "analytics", element: t.jsx(Ah, {}) }),
                t.jsx(G, { path: "assessments", element: t.jsx(eh, {}) }),
                t.jsx(G, { path: "training", element: t.jsx(th, {}) }),
                t.jsx(G, { path: "offline", element: t.jsx(nh, {}) }),
                Qn,
              ],
            }),
            t.jsxs(G, {
              path: "/student",
              element: kt("student", !0),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(sh, {}) }),
                t.jsx(G, { path: "play/:id", element: t.jsx(ih, {}) }),
                t.jsx(G, { path: "stars", element: t.jsx(ch, {}) }),
                t.jsx(G, { path: "done", element: t.jsx(Eh, {}) }),
              ],
            }),
            t.jsxs(G, {
              path: "/parent",
              element: kt("parent"),
              children: [
                t.jsx(G, { index: !0, element: t.jsx(Ch, {}) }),
                t.jsx(G, { path: "diary", element: t.jsx(Ih, {}) }),
                t.jsx(G, { path: "activities", element: t.jsx(dh, {}) }),
                t.jsx(G, { path: "progress", element: t.jsx(uh, {}) }),
                t.jsx(G, { path: "notes", element: t.jsx(hh, {}) }),
                t.jsx(G, { path: "try", element: t.jsx(Bh, {}) }),
                Qn,
              ],
            }),
            t.jsx(G, { path: "*", element: t.jsx(Oo, {}) }),
          ],
        }),
      ],
    }),
  });
}
lE(document.getElementById("root")).render(
  t.jsx(B.StrictMode, { children: t.jsx(AB, {}) }),
);
