// v2 seed data. EzAugment() runs on the v1 seed (wE) and adds everything the
// requirements PDF asks for. All numbers are invented demo data.

/* Activity formats from PDF §8, mapped to the player "kind" that renders them. */
const EzKinds = {
  pattern: { label: "Complete the pattern", type: "Patterns", pdf: "H" },
  count: { label: "Count & choose", type: "Counting", pdf: "E" },
  sort: { label: "Sort into groups", type: "Sorting", pdf: "C" },
  balance: { label: "Drag & drop balance", type: "Virtual manipulatives", pdf: "A/J" },
  sound: { label: "Tap & identify (sound)", type: "Tap & identify", pdf: "F" },
  drawing: { label: "Drawing", type: "Drawing", pdf: "K" },
  mcq: { label: "Multiple choice", type: "Multiple choice", pdf: "E" },
  image: { label: "Look & select (image)", type: "Image-based", pdf: "M" },
  tap: { label: "Tap & identify", type: "Tap & identify", pdf: "F" },
  dragsort: { label: "Drag & drop into groups", type: "Drag & drop", pdf: "A" },
  match: { label: "Match", type: "Matching", pdf: "B" },
  connect: { label: "Connect", type: "Connect", pdf: "G" },
  sequence: { label: "Sequence", type: "Sequencing", pdf: "D" },
  listen: { label: "Listen & respond", type: "Listening", pdf: "L" },
  scenario: { label: "Scenario", type: "Scenarios", pdf: "N" },
  puzzle: { label: "Puzzle", type: "Puzzles", pdf: "I" },
  manip: { label: "Virtual manipulatives (ten frame)", type: "Virtual manipulatives", pdf: "J" },
  trace: { label: "Tracing", type: "Tracing", pdf: "K" },
  draw: { label: "Drawing", type: "Drawing", pdf: "K" },
  write: { label: "Creative writing", type: "Creative writing", pdf: "—" },
  say: { label: "Say it (pronunciation, AI preview)", type: "Speaking", pdf: "§56" },
};
const EzKindOf = (act) => act.content?.kind ?? act.template;
const EzTypeOf = (act) => EzKinds[EzKindOf(act)]?.type ?? "Other";

const EzQ = (prompt, choices, correct, extra) => ({ prompt, choices, correct, ...extra });

const EzNewActivities = [
  // ---- Nursery ----
  {
    id: "act-lines", title: "Straight or Curved?", level: "Nursery", subject: "Maths", topic: "Shapes & lines",
    concept: "Lines", objective: "Tell straight lines from curved lines in everyday objects.", minutes: 4, tier: "Silver",
    art: "📏 🌈", blurb: "Is the line straight or curved?",
    content: {
      kind: "dragsort", groups: ["Straight", "Curved"],
      items: [["📏 Ruler", 0], ["🌈 Rainbow", 1], ["✏️ Pencil", 0], ["🍌 Banana", 1], ["🚪 Door", 0], ["⚽ Ball", 1]],
      reflection: { prompt: "Look around your room. I found ___ straight lines.", type: "count" },
    },
  },
  {
    id: "act-animal-homes", title: "Who Lives Here?", level: "Nursery", subject: "Science", topic: "Living things",
    concept: "Animal homes", objective: "Match animals to the homes they live in.", minutes: 4, tier: "Silver",
    art: "🐦 🪺", blurb: "Match each animal to its home.",
    content: { kind: "match", prompt: "Match each animal to its home", pairs: [["🐦 Bird", "🪺 Nest"], ["🐝 Bee", "🍯 Hive"], ["🐶 Dog", "🏠 Kennel"], ["🐟 Fish", "🌊 Water"]] },
  },
  {
    id: "act-listen-m", title: "Listen and Pick", level: "Nursery", subject: "English", topic: "Phonics",
    concept: "Phonics: m", objective: "Hear the /m/ sound at the start of a word.", minutes: 3, tier: "Silver",
    art: "👂 🥭", blurb: "Listen, then tap the picture you heard.",
    content: {
      kind: "listen",
      questions: [
        EzQ("Tap the one you hear", ["🥭 mango", "🍎 apple", "🐱 cat"], 0, { say: "mango" }),
        EzQ("Tap the one you hear", ["🌙 moon", "☀️ sun", "⭐ star"], 0, { say: "moon" }),
        EzQ("Which one starts with mmm?", ["🐶 dog", "🐒 monkey", "🐟 fish"], 1, { say: "Which one starts with m? dog, monkey, fish" }),
      ],
    },
  },
  {
    id: "act-story-order", title: "What Happens Next?", level: "Nursery", subject: "English", topic: "Stories",
    concept: "Sequencing events", objective: "Put the steps of a familiar routine in order.", minutes: 4, tier: "Silver",
    art: "🌱 🌻", blurb: "Put the pictures in order.",
    content: { kind: "sequence", prompt: "How does a flower grow? Put it in order.", items: ["🌰 Seed", "🌱 Sprout", "🌿 Plant", "🌻 Flower"] },
  },
  {
    id: "act-trace-m", title: "Trace the Letter m", level: "Nursery", subject: "English", topic: "Writing readiness",
    concept: "Letter formation", objective: "Trace the letter m with a steady finger.", minutes: 3, tier: "Silver",
    art: "✍️ m", blurb: "Trace the letter with your finger.",
    content: { kind: "trace", glyph: "m", prompt: "Trace the letter m" },
  },
  {
    id: "act-ten-frame", title: "Fill the Frame", level: "Nursery", subject: "Maths", topic: "Numbers",
    concept: "Numbers 1–3", objective: "Show a number by placing that many counters.", minutes: 3, tier: "Silver",
    art: "🔴 🔴 ⚪", blurb: "Put the right number of counters in the frame.",
    content: { kind: "manip", targets: [2, 3, 1] },
  },
  {
    id: "act-shape-puzzle", title: "Shape Puzzle", level: "Nursery", subject: "Maths", topic: "Shapes & lines",
    concept: "Shapes", objective: "Rebuild a picture made of shapes.", minutes: 4, tier: "Silver",
    art: "🧩 🏠", blurb: "Swap the pieces to fix the picture.",
    content: { kind: "puzzle", prompt: "Swap two pieces at a time to fix the house" },
  },
  {
    id: "act-kind-choice", title: "What Should I Do?", level: "Nursery", subject: "Activities", topic: "Practical life",
    concept: "Practical life", objective: "Choose the kind, safe thing to do in simple situations.", minutes: 3, tier: "Silver",
    art: "🤝 💧", blurb: "Pick what you would do.",
    content: {
      kind: "scenario",
      questions: [
        EzQ("You spilled water on the floor. What do you do?", ["🧽 Wipe it up", "🏃 Run away", "🙈 Hide"], 0, { feedbackRight: "Yes! Wiping it up keeps everyone safe." }),
        EzQ("A friend drops their crayons. What do you do?", ["🙌 Help pick them up", "😂 Laugh", "🚶 Walk away"], 0),
        EzQ("You want a turn on the swing.", ["⏳ Wait for my turn", "✋ Push", "😭 Cry"], 0),
      ],
    },
  },
  {
    id: "act-say-words", title: "Say It! (AI preview)", level: "Nursery", subject: "English", topic: "Speaking",
    concept: "Speaking", objective: "Say simple m-words clearly.", minutes: 3, tier: "Platinum",
    art: "🗣️ 🥭", blurb: "Say the word out loud.",
    content: { kind: "say", words: [["mango", "🥭"], ["moon", "🌙"], ["milk", "🥛"]] },
  },
  {
    id: "act-my-drawing", title: "Draw My Family", level: "Nursery", subject: "Activities", topic: "Art",
    concept: "Fine motor", objective: "Draw freely and talk about the drawing.", minutes: 5, tier: "Platinum",
    art: "🎨 👨‍👩‍👧", blurb: "Draw your family. It goes into My Creations.",
    content: { kind: "draw", prompt: "Draw your family" },
  },
  {
    id: "act-pattern-2", title: "Sun Pattern: Level 2", level: "Nursery", subject: "Maths", topic: "Patterns",
    concept: "Patterns", objective: "Continue ABB patterns.", minutes: 4, tier: "Silver", difficulty: 2,
    art: "☀ ☀ 🌙", blurb: "A trickier pattern. What comes next?",
    content: { kind: "mcq", questions: [EzQ("☀️🌙🌙☀️🌙🌙☀️ … what comes next?", ["☀️", "🌙"], 1), EzQ("🔴🔴🔵🔴🔴🔵🔴 … what comes next?", ["🔴", "🔵"], 0), EzQ("⭐🌙🌙⭐🌙 … what comes next?", ["⭐", "🌙"], 1)] },
  },
  {
    id: "act-heavy-light-1", title: "Heavy or Light? (Level 1)", level: "Nursery", subject: "Science", topic: "Measurement",
    concept: "Heavy & light", objective: "Say which of two familiar things is heavier.", minutes: 3, tier: "Silver", difficulty: 1,
    art: "🧱 🪶", blurb: "Which one is heavier?",
    content: { kind: "image", questions: [EzQ("Which is heavier?", ["🧱 Brick", "🪶 Feather"], 0, { hint: "Which one would be hard to lift?" }), EzQ("Which is heavier?", ["🎈 Balloon", "🍉 Watermelon"], 1), EzQ("Which is lighter?", ["🍃 Leaf", "📚 Books"], 0)] },
  },
  // ---- LKG / UKG ----
  {
    id: "lkg-count-10", title: "Count to 10", level: "LKG", subject: "Maths", topic: "Numbers", concept: "Numbers 1–10",
    objective: "Count objects up to 10.", minutes: 3, tier: "Silver", art: "🔟", blurb: "Count and choose.",
    content: { kind: "mcq", questions: [EzQ("How many stars? ⭐⭐⭐⭐⭐⭐", ["5", "6", "7"], 1), EzQ("How many apples? 🍎🍎🍎🍎🍎🍎🍎🍎", ["8", "9", "10"], 0), EzQ("How many balls? ⚽⚽⚽⚽", ["3", "4", "5"], 1)] },
  },
  {
    id: "lkg-sounds", title: "Sounds s a t p", level: "LKG", subject: "English", topic: "Phonics", concept: "Phonics: s a t p",
    objective: "Match pictures to first sounds.", minutes: 3, tier: "Silver", art: "🐍 🍎", blurb: "Which sound does it start with?",
    content: { kind: "image", questions: [EzQ("🐍 snake starts with…", ["s", "t", "p"], 0), EzQ("🍎 apple starts with…", ["p", "a", "s"], 1), EzQ("🐯 tiger starts with…", ["t", "a", "s"], 0)] },
  },
  {
    id: "ukg-big-small", title: "Big and Small", level: "UKG", subject: "Maths", topic: "Measurement", concept: "Comparing size",
    objective: "Compare the size of two objects.", minutes: 3, tier: "Silver", art: "🐘 🐭", blurb: "Which one is bigger?",
    content: { kind: "mcq", questions: [EzQ("Which is bigger?", ["🐘 Elephant", "🐭 Mouse"], 0), EzQ("Which is smaller?", ["🏠 House", "🏠 Doll house"], 1), EzQ("Which is taller?", ["🌳 Tree", "🌷 Flower"], 0)] },
  },
  {
    id: "ukg-rhymes", title: "Rhyme Time", level: "UKG", subject: "English", topic: "Phonics", concept: "Rhyming words",
    objective: "Find words that rhyme.", minutes: 3, tier: "Silver", art: "🐱 🎩", blurb: "Find the rhyme.",
    content: { kind: "match", prompt: "Match the words that rhyme", pairs: [["cat", "hat"], ["sun", "bun"], ["dog", "log"]] },
  },
  // ---- Grade 1 (PDF §13 / §22 examples) ----
  {
    id: "g1-numbers-100", title: "Numbers to 100", level: "Grade 1", subject: "Maths", topic: "Numbers", concept: "Numbers 1–100",
    objective: "Say the number before and after, up to 100.", minutes: 4, tier: "Silver", art: "💯", blurb: "Which number comes next?",
    content: { kind: "mcq", questions: [EzQ("What comes after 49?", ["48", "50", "59"], 1), EzQ("What comes before 70?", ["69", "71", "60"], 0), EzQ("Which is bigger?", ["38", "83"], 1)] },
  },
  {
    id: "g1-shape-detective", title: "Shape Detective", level: "Grade 1", subject: "Maths", topic: "Shapes", concept: "Shapes",
    objective: "Identify circles in everyday objects.", minutes: 3, tier: "Silver", art: "🔍 ⭕", blurb: "Tap every round thing.",
    content: { kind: "tap", prompt: "Tap everything shaped like a circle", items: [["🕐 Clock", true], ["📘 Book", false], ["🍪 Cookie", true], ["📺 TV", false], ["🪙 Coin", true], ["🧀 Cheese", false]] },
  },
  {
    id: "g1-pattern-builder", title: "Pattern Builder", level: "Grade 1", subject: "Maths", topic: "Patterns", concept: "Patterns",
    objective: "Continue ABB and ABC patterns.", minutes: 4, tier: "Silver", art: "🔺 🔵", blurb: "Build the pattern.",
    content: { kind: "mcq", questions: [EzQ("🔺🔵🔵🔺🔵🔵🔺 … what comes next?", ["🔺", "🔵"], 1), EzQ("🍎🍌🍇🍎🍌 … what comes next?", ["🍇", "🍎", "🍌"], 0), EzQ("2, 4, 6, 8 … what comes next?", ["9", "10", "12"], 1)] },
  },
  {
    id: "g1-measure-match", title: "Measurement Match", level: "Grade 1", subject: "Maths", topic: "Measurement", concept: "Measurement",
    objective: "Compare lengths using longer and shorter.", minutes: 4, tier: "Silver", art: "📏 ✏️", blurb: "Which is longer?",
    content: {
      kind: "mcq",
      questions: [EzQ("Which is longer?", ["✏️ Pencil", "🖍️ Crayon"], 0, { hint: "Line them up at the start." }), EzQ("Which is shorter?", ["🐍 Snake", "🐛 Caterpillar"], 1), EzQ("How many paper clips long is the pencil? 📎📎📎📎📎", ["4", "5", "6"], 1)],
      reflection: { prompt: "Find things at home longer than your pencil. I found ___ things.", type: "count" },
    },
  },
  {
    id: "g1-word-match", title: "Picture–Word Match", level: "Grade 1", subject: "English", topic: "Vocabulary", concept: "Picture–word association",
    objective: "Read simple words and match them to pictures.", minutes: 3, tier: "Silver", art: "🖼️ 🔤", blurb: "Match the word to the picture.",
    content: { kind: "connect", prompt: "Connect each word to its picture", pairs: [["cat", "🐱"], ["bus", "🚌"], ["sun", "☀️"], ["cup", "☕"]] },
  },
  {
    id: "g1-nouns", title: "Naming Words", level: "Grade 1", subject: "English", topic: "Grammar", concept: "Grammar: nouns",
    objective: "Pick out naming words (nouns).", minutes: 3, tier: "Silver", art: "🏷️", blurb: "Tap the naming words.",
    content: { kind: "tap", prompt: "Tap the naming words", items: [["dog", true], ["run", false], ["school", true], ["happy", false], ["apple", true], ["jump", false]] },
  },
  {
    id: "g1-plant-needs", title: "What Does a Plant Need?", level: "Grade 1", subject: "Science", topic: "Plants", concept: "Plants",
    objective: "Explain cause and effect for plant growth.", minutes: 4, tier: "Silver", art: "🪴 💧", blurb: "Help the plant grow.",
    content: { kind: "scenario", questions: [EzQ("The plant's leaves are drooping. What should you do?", ["💧 Water it", "🔦 Put it in a cupboard", "✂️ Cut it"], 0), EzQ("Where should the plant live?", ["☀️ Near a sunny window", "🧊 In the freezer"], 0), EzQ("What happens with no water for many days?", ["🥀 It dries up", "🌳 It grows bigger"], 0)] },
  },
  {
    id: "g1-float-sink", title: "Float or Sink?", level: "Grade 1", subject: "Science", topic: "Materials", concept: "Float & sink",
    objective: "Predict whether objects float or sink.", minutes: 4, tier: "Silver", art: "🛁 🪨", blurb: "Science experiment: float or sink?",
    content: { kind: "dragsort", groups: ["Floats", "Sinks"], items: [["🍂 Leaf", 0], ["🪨 Stone", 1], ["🦆 Rubber duck", 0], ["🔑 Key", 1], ["🪵 Wood", 0], ["🥄 Spoon", 1]] },
  },
  {
    id: "g1-write", title: "My Weekend Story", level: "Grade 1", subject: "English", topic: "Writing", concept: "Creative writing",
    objective: "Write two sentences about a picture.", minutes: 6, tier: "Gold", art: "📝", blurb: "Write about your weekend.",
    content: { kind: "write", prompt: "Write two sentences about what you did at the weekend." },
  },
  // ---- Grade 2 ----
  {
    id: "g2-add-20", title: "Add Within 20", level: "Grade 2", subject: "Maths", topic: "Addition", concept: "Addition to 20",
    objective: "Add two numbers within 20.", minutes: 4, tier: "Silver", art: "➕", blurb: "Solve the sums.",
    content: { kind: "mcq", questions: [EzQ("8 + 5 =", ["12", "13", "14"], 1), EzQ("9 + 9 =", ["18", "19", "17"], 0), EzQ("7 + 6 =", ["13", "12", "11"], 0)] },
  },
  {
    id: "g2-adjectives", title: "Describing Words", level: "Grade 2", subject: "English", topic: "Grammar", concept: "Grammar: adjectives",
    objective: "Find describing words.", minutes: 3, tier: "Silver", art: "🎨", blurb: "Tap the describing words.",
    content: { kind: "tap", prompt: "Tap the describing words", items: [["tall", true], ["tree", false], ["red", true], ["sing", false], ["soft", true], ["book", false]] },
  },
].map((a) => ({ status: "published", source: "EzRoots", template: a.content.kind, ...a }));

/* Topics for v1 activities (for the Grade → Subject → Topic → Concept drill-down). */
const EzV1Topics = {
  "act-sun-pattern": "Patterns",
  "act-thick-thin": "Measurement",
  "act-balance": "Measurement",
  "act-sound-m": "Phonics",
  "act-count-123": "Numbers",
  "act-seasons": "Weather & seasons",
  "act-draw-umbrella": "Art",
};

/* Real-world "Try this at home" ideas per concept (§43). */
const EzHomeIdeas = {
  Patterns: ["Make a pattern with spoons and forks: spoon, fork, spoon, fork… ask what comes next.", "Clap-clap-stomp! Make sound patterns and take turns continuing them."],
  "Thick & thin": ["Find 3 thick things and 3 thin things at home and line them up."],
  "Heavy & light": ["Hold an apple in one hand and a cotton ball in the other. Which hand feels heavier?", "Pick up 4 things from the kitchen. Sort them into heavy and light."],
  "Phonics: m": ["Say words together that start with mmm: mango, moon, mat, milk."],
  "Numbers 1–3": ["Count 3 steps as you climb the stairs together.", "Put 1, 2 then 3 grapes on a plate and count them."],
  Seasons: ["Look out of the window: what is the weather today? Pick clothes for it."],
  Lines: ["Walk around your home and count straight lines: doors, tables, books."],
  Shapes: ["Find 5 circular objects at home.", "Find 3 objects shaped like rectangles."],
  "Animal homes": ["Look for a bird's nest or an ant hill on your next walk."],
  "Sequencing events": ["Talk through your morning: what did you do first, next and last?"],
  "Letter formation": ["Trace the letter m in a plate of flour or sand with one finger."],
  "Practical life": ["Let your child pour water from a small jug into a cup, using two hands."],
  Speaking: ["Read a picture book together and let your child name what they see."],
  "Fine motor": ["Tear paper into small pieces and make a collage together."],
  "Numbers 1–100": ["Count cars on the street together, up to 20, then keep going."],
  Measurement: ["Find three objects that are longer than your child's pencil.", "Measure the table in hand-spans. Who needs more hand-spans, you or your child?"],
  "Picture–word association": ["Stick paper labels on 5 things at home: door, cup, bed, chair, book."],
  "Grammar: nouns": ["Play 'I spy' with naming words: I spy a… spoon!"],
  Plants: ["Water a plant together every day for a week and look at how it changes."],
  "Float & sink": ["At bath time, guess first, then test: does the soap, sponge or spoon float?"],
  "Creative writing": ["Ask your child to tell you a story about a photo, then help write one line of it."],
  "Numbers 1–10": ["Count 10 buttons into a cup, then take them out one by one."],
  "Phonics: s a t p": ["Find things that start with s, a, t or p around the home."],
  "Comparing size": ["Line up shoes from smallest to biggest."],
  "Rhyming words": ["Say a word and find a rhyme: cat – hat – mat…"],
  "Addition to 20": ["Roll two dice and add the dots together."],
  "Grammar: adjectives": ["Describe a fruit with three words: yellow, soft, sweet."],
};
const EzTeacherTips = {
  Patterns: "Start with AB patterns using real objects (beads, blocks) before moving to ABB. Ask the child to say the pattern aloud.",
  Measurement: "Use non-standard units first (hand-spans, paper clips). Always line objects up from the same starting point.",
  "Heavy & light": "Let children hold objects in both hands before using the balance. Ask them to predict, then check.",
  Shapes: "Do a shape hunt in the classroom; let children trace shapes in the air and on sandpaper.",
  Lines: "Use string and sticks: bend the string for curved lines, keep the stick for straight lines.",
};

/* Picture passwords for child sign-in (§4). */
const EzAvatars = ["🦁", "🐯", "🐼", "🐨", "🦊", "🐸", "🐵", "🐰", "🐻", "🐧", "🦉", "🐢", "🐙", "🦋", "🐞", "🐬", "🦒", "🐘", "🦄", "🐝"];
const EzPinPics = ["🍎", "⭐", "🚗", "🌙", "🐟", "🎈", "🌸", "⚽", "🍌"];

const EzQuotes = [
  "“Play is the work of the child.” – Maria Montessori",
  "“The greatest sign of success for a teacher is to be able to say, ‘The children are now working as if I did not exist.’” – Maria Montessori",
  "“Never help a child with a task at which he feels he can succeed.” – Maria Montessori",
  "“Children learn as they play. Most importantly, in play children learn how to learn.” – O. Fred Donaldson",
  "“Tell me and I forget. Involve me and I learn.”",
];

const EzTraining = [
  { id: "tr-1", title: "Getting started with EzRoots", sub: "How the planner, sessions and videos fit together", video: null },
  { id: "tr-2", title: "Presenting Montessori materials", sub: "Three-period lesson with number rods", video: "snail-counting" },
  { id: "tr-3", title: "Observing children during sorting", sub: "What to notice and how to record it", video: "house-setup" },
  { id: "tr-4", title: "Using the smartboard in class", sub: "Smartboard mode and class activities", video: null },
];

/* Ability & difficulty for the generated history. */
const EzConceptDifficulty = {
  Patterns: 12, Measurement: 10, "Heavy & light": 14, "Phonics: m": 4, "Numbers 1–3": -8, Lines: 2, Shapes: -2,
  "Numbers 1–100": -6, "Grammar: nouns": 6, "Float & sink": 4, "Letter formation": 6, "Sequencing events": 3,
};

/* Bump when seed data or its shape changes, so old saved demo data is replaced. */
const EzBuild = "2.7";

function EzAugment(db) {
  db.ezBuild = EzBuild;
  const rng = EzRng("ezroots-v2");
  const today = uA;

  /* ---- settings, permissions, policy ---- */
  db.settings = {
    maxUploadMB: 600,
    downloadsDefault: false,
    watermark: true,
    mastery: { strong: 80, developing: 60, activityWeight: 70, assessmentWeight: 30, recencyDays: 90, minEvidence: 2 },
    lowUsageThreshold: 60,
    health: { implementation: 30, engagement: 30, performance: 20, training: 20 },
    welcomeNote: "Welcome to EzRoots! This month we explore summer, thick & thin, and the sounds m and u. Thank you for bringing hands-on learning to life.",
    quotes: EzQuotes,
    adaptive: false,
    childSee: true,
    aiPreview: true,
    retention: { activity: "While enrolled + 1 year", media: "1 year after leaving", audit: "3 years", backups: "30 days", sessions: "180 days" },
  };
  db.permissions = JSON.parse(JSON.stringify(EzPermDefaults));
  for (const s of db.schools) {
    s.policy = { principalChildAccess: false, childSignIn: { Toddler: "picture", Nursery: "picture", LKG: "picture", UKG: "picture", "Grade 1": "qr", "Grade 2": "password" }, childExplore: false };
    s.code = s.id === "sch-sunrise" ? "SUN26" : s.id.replace("sch-", "").slice(0, 3).toUpperCase() + "26";
    if (s.summary) {
      const r = EzRng(s.id);
      s.summary.completion = Math.round(s.summary.engagement * 0.9 + r() * 8);
      s.summary.performance = Math.round(62 + s.summary.engagement * 0.2 + r() * 6);
      s.summary.usage = {
        teachers: Math.round(EzClamp(s.summary.implementation + 10 + r() * 8, 20, 99)),
        children: Math.round(EzClamp(s.summary.engagement - 4 + r() * 6, 15, 98)),
        parents: Math.round(EzClamp(s.summary.engagement - 22 + r() * 10, 8, 90)),
      };
      s.summary.training = Math.round(EzClamp(s.summary.implementation + r() * 15, 20, 100));
    }
  }
  db.schoolSettings.childExplore = false;

  /* ---- academic coordinator (PDF §2) ---- */
  db.users.push({ id: "u-co", role: "coordinator", name: "Meera Pillai", username: "meera.coordinator", email: "academics@sunrise.edu.in", schoolId: "sch-sunrise", active: true });

  /* ---- activities ---- */
  for (const a of db.activities) a.topic = EzV1Topics[a.id] ?? a.concept;
  const v1Difficulty = { "act-balance": 2, "act-count-123": 1, "act-sound-m": 1, "act-sun-pattern": 1 };
  for (const a of db.activities) a.difficulty = v1Difficulty[a.id] ?? 1;
  db.activities.find((a) => a.id === "act-balance").concept = "Heavy & light";
  db.activities.push(...EzNewActivities.map((a) => ({ difficulty: 1, ...a })));
  for (const [id, dfc] of Object.entries({ "act-ten-frame": 2, "act-listen-m": 2, "act-say-words": 3 })) db.activities.find((a) => a.id === id).difficulty = dfc;

  /* ---- students: academic year, picture password, PIN ---- */
  db.students.forEach((s, i) => {
    s.academicYear = "2026–27";
    s.avatar = EzAvatars[i % EzAvatars.length];
    s.pin = [0, 1, 2, 3].map((k) => EzPinPics[(i * 7 + k * 3) % EzPinPics.length]);
    s.joined = "2026-06-15";
  });

  /* ---- parent: one login for all children (call summary §5/§9, PDF §3/§16) ---- */
  const aarav = db.students[0];
  const g1 = db.sections.find((s) => s.level === "Grade 1");
  const sib = db.students.find((s) => s.sectionId === g1.id);
  const oldParent = sib.parentId;
  sib.name = "Ananya Sharma";
  sib.username = "ananya.sharma";
  sib.parentId = aarav.parentId;
  db.users = db.users.filter((u) => u.id !== oldParent);
  const sibUser = db.users.find((u) => u.role === "student" && u.childId === sib.id);
  sibUser.name = sib.name;
  sibUser.username = sib.username;
  db.notices = db.notices.filter((n) => n.to !== oldParent);

  db.users.forEach((u, i) => {
    if (u.role !== "parent") return;
    u.childIds = [u.childId];
    u.phone = `+91 98${String(40000000 + ((i * 7919) % 9999999)).padStart(8, "0")}`;
    u.invite = { status: "linked", sentAt: "2026-06-16", verifiedAt: "2026-06-18", via: "OTP to mobile" };
    u.consent = { at: "2026-06-18", version: "v1.0", method: "In-app, after OTP verification" };
    u.notif = { channels: { inapp: true, email: true, whatsapp: false, sms: false }, frequency: "daily", quiet: "8 pm – 7 am" };
  });
  const lakshmi = db.users.find((u) => u.id === aarav.parentId);
  lakshmi.childIds = [aarav.id, sib.id];
  lakshmi.email = "lakshmi.sharma@example.com";
  // Three families in Nursery A have not finished linking yet (to show the §32 flow).
  const nurseryA = db.students.filter((s) => s.sectionId === "sec-nursery-a");
  for (const s of nurseryA.slice(1, 2).concat(nurseryA.slice(11, 13))) {
    const p = db.users.find((u) => u.id === s.parentId);
    p.invite = { status: "invited", sentAt: "2026-09-26", via: "SMS link" };
    delete p.consent;
  }
  db.parentContext = {};

  /* ---- generated learning history (Jul – Sep) ---- */
  const days = EzWeekdays("2026-07-01", today);
  const actsByLevel = EzGroup(
    db.activities.filter((a) => a.status === "published" && !["drawing", "draw", "write", "say"].includes(EzKindOf(a))),
    "level",
  );
  const ability = new Map();
  const engage = new Map();
  db.students.forEach((s, i) => {
    const r = EzRng(s.id);
    ability.set(s.id, Math.round((r() - 0.5) * 24));
    engage.set(s.id, 0.55 + r() * 0.4);
  });
  const kabir = nurseryA[4];
  const ishaan = nurseryA[6];
  ability.set(aarav.id, 8);
  engage.set(aarav.id, 0.9);
  ability.set(kabir.id, -14);
  ability.set(sib.id, 9);
  engage.set(sib.id, 0.92);
  // A class in Nursery B that barely uses the child app (for engagement alerts).
  const quiet = new Set(db.students.filter((s) => s.sectionId === "sec-nursery-b").slice(0, 4).map((s) => s.id));

  const target = {
    [`${aarav.id}|Patterns`]: { "2026-07": 52, "2026-08": 67, "2026-09": 81 },
    [`${aarav.id}|Heavy & light`]: { "2026-07": 48, "2026-08": 52, "2026-09": 55 },
    [`${sib.id}|Numbers 1–100`]: { "2026-07": 80, "2026-08": 87, "2026-09": 92 },
    [`${sib.id}|Shapes`]: { "2026-07": 70, "2026-08": 78, "2026-09": 84 },
    [`${sib.id}|Patterns`]: { "2026-07": 55, "2026-08": 61, "2026-09": 68 },
    [`${sib.id}|Measurement`]: { "2026-07": 58, "2026-08": 64, "2026-09": 76 },
  };

  const newAssignments = [];
  const newAttempts = [];
  const sessions = [];
  const events = [];
  for (const sec of db.sections) {
    const acts = actsByLevel.get(sec.level) ?? [];
    if (!acts.length) continue;
    const teacher = EzTeacherOf(db, sec.id);
    const kids = db.students.filter((s) => s.sectionId === sec.id);
    let k = 0;
    for (let di = 2; di < days.length; di += 1) {
      const act = acts[k++ % acts.length];
      const date = days[di];
      const as = {
        id: `as-h-${sec.id}-${di}`, sectionId: sec.id, subject: act.subject, activityId: act.id,
        mode: di % 2 ? "home" : "class", due: days[Math.min(days.length - 1, di + 2)], studentIds: "all",
        createdBy: teacher?.id ?? "u-t1", createdAt: date, day: Math.max(1, 63 - (days.length - 1 - di)),
      };
      newAssignments.push(as);
      for (const kid of kids) {
        const r = EzRng(`${as.id}|${kid.id}`);
        if (quiet.has(kid.id) && r() < 0.8) continue;
        if (kid.id === kabir.id && date >= "2026-09-17") continue; // stopped using
        if (r() > engage.get(kid.id)) continue;
        const month = EzMonthKey(date);
        const mIdx = ["2026-07", "2026-08", "2026-09"].indexOf(month);
        let score;
        const tk = target[`${kid.id}|${act.concept}`];
        if (tk) score = tk[month] + (r() - 0.5) * 8;
        else {
          score = 76 + ability.get(kid.id) - (EzConceptDifficulty[act.concept] ?? 0) + mIdx * 5 + (r() - 0.5) * 16;
          if (kid.id === ishaan.id && month === "2026-09") score -= 22; // declining
        }
        score = Math.round(EzClamp(score, 20, 100));
        const n = act.content?.questions?.length ?? act.content?.items?.length ?? act.content?.pairs?.length ?? 3;
        const correct = Math.round((score / 100) * n);
        const skipped = score < 55 && r() < 0.4 ? 1 : 0;
        const attDate = days[Math.min(days.length - 1, di + Math.floor(r() * 2))];
        const timeSec = Math.round(120 + r() * 200 + (100 - score));
        const start = as.mode === "home" ? 16 * 60 + Math.floor(r() * 200) : 10 * 60 + Math.floor(r() * 90);
        const hhmm = `${String(Math.floor(start / 60)).padStart(2, "0")}:${String(start % 60).padStart(2, "0")}`;
        newAttempts.push({
          id: `at-h-${as.id}-${kid.id}`, studentId: kid.id, activityId: act.id, assignmentId: as.id,
          score, level: score >= 80 ? "Strong" : score >= 60 ? "Developing" : "Needs support",
          timeSec, tries: 1 + Math.floor(r() * (score < 70 ? 3 : 1.6)), hints: score < 65 ? Math.floor(r() * 3) : 0,
          date: attDate, startedAt: `${attDate}T${hhmm}:00`, correct, incorrect: Math.max(0, n - correct - skipped), skipped,
          retries: score < 60 && r() < 0.5 ? 1 : 0, completion: skipped ? Math.round(((n - skipped) / n) * 100) : 100,
          type: EzTypeOf(act),
        });
      }
    }
  }
  // v1's three sample assignments: align their planner day with their dates.
  for (const [id, day] of [["as-1", 61], ["as-2", 62], ["as-3", 62]]) { const a = db.assignments.find((x) => x.id === id); if (a) a.day = day; }
  // Keep v1's hand-made attempts, enrich them with the new fields.
  for (const a of db.attempts) {
    const act = db.activities.find((x) => x.id === a.activityId);
    a.correct = Math.round((a.score / 100) * 3);
    a.incorrect = 3 - a.correct;
    a.skipped = 0;
    a.retries = 0;
    a.completion = 100;
    a.startedAt = `${a.date}T16:30:00`;
    a.type = EzTypeOf(act);
  }
  db.assignments.push(...newAssignments);
  db.attempts.push(...newAttempts);

  // Learning sessions: active vs idle time (§11).
  const attByKidDay = EzGroup(db.attempts, (a) => `${a.studentId}|${a.date}`);
  for (const kid of db.students) {
    for (const date of days) {
      const atts = attByKidDay.get(`${kid.id}|${date}`) ?? [];
      const r = EzRng(`${kid.id}|${date}|s`);
      if (!atts.length && (r() > 0.12 * engage.get(kid.id) || quiet.has(kid.id))) continue;
      if (kid.id === kabir.id && date >= "2026-09-17") continue;
      const active = atts.reduce((s, a) => s + a.timeSec, 0) + Math.round(40 + r() * 240);
      sessions.push({
        id: `se-${kid.id}-${date}`, studentId: kid.id, date,
        start: atts[0]?.startedAt?.slice(11, 16) ?? "17:10",
        activeSec: active, idleSec: Math.round(15 + r() * 200), activities: atts.length,
        device: r() < 0.55 ? "Phone" : r() < 0.8 ? "Tablet" : "Laptop",
      });
    }
  }
  // Adult logins (for "usage by teachers, children and parents", §26).
  for (const u of db.users) {
    if (!["teacher", "parent", "principal"].includes(u.role) || u.schoolId !== "sch-sunrise") continue;
    const p = u.role === "teacher" ? 0.82 : u.role === "principal" ? 0.6 : 0.28;
    for (const date of days) {
      const r = EzRng(`${u.id}|${date}|l`);
      const kidQuiet = u.role === "parent" && EzParentChildIds(u).every((c) => quiet.has(c));
      if (r() < (kidQuiet ? p * 0.2 : p)) events.push({ id: `ev-${u.id}-${date}`, at: `${date}T18:00:00`, date, userId: u.id, role: u.role, type: "login" });
    }
  }
  db.sessions = sessions;
  db.events = events;
  db.inProgress = [
    { id: "ip-1", studentId: aarav.id, assignmentId: "as-3", activityId: "act-sound-m", qIndex: 1, completion: 40, startedAt: `${today}T08:10:00`, pausedAt: `${today}T08:12:00` },
  ];

  /* ---- teacher training progress per teacher ---- */
  db.training = EzTraining;
  db.trainingProgress = {};
  for (const u of db.users.filter((x) => x.role === "teacher")) {
    const r = EzRng(`${u.id}|tr`);
    db.trainingProgress[u.id] = Object.fromEntries(
      EzTraining.map((m, i) => [m.id, i === 0 ? 100 : Math.round(EzClamp(r() * 140 - 30 * i, 0, 100))]),
    );
  }
  db.trainingProgress["u-t1"] = { "tr-1": 100, "tr-2": 40, "tr-3": 0, "tr-4": 0 };

  /* ---- teacher notes gain a type (§20) and parents can acknowledge ---- */
  const types = { "ob-1": "Learning milestone", "ob-3": "Area requiring practice" };
  for (const o of db.observations) o.type = types[o.id] ?? "Teacher note";
  db.observations.push(
    { id: "ob-4", sectionId: "sec-nursery-a", studentId: aarav.id, subject: "Maths", concept: "Heavy & light", type: "Suggested home activity", text: "Please practise comparing heavy and light things at home, like a book and a feather.", shared: true, date: "2026-09-28", teacherId: "u-t1" },
    { id: "ob-5", sectionId: sib.sectionId, studentId: sib.id, subject: "Maths", concept: "Measurement", type: "Area requiring practice", text: "Ananya participates confidently in hands-on activities. She needs more practice comparing lengths.", shared: true, date: "2026-09-26", teacherId: "u-t5" },
    { id: "ob-6", sectionId: sib.sectionId, studentId: sib.id, subject: "English", concept: "Reading", type: "Encouragement", text: "Wonderful reading aloud in circle time today. Keep it up!", shared: true, date: "2026-09-24", teacherId: "u-t6" },
  );

  /* ---- portfolio (§45) & home observations (§43) ---- */
  const houseSVG = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect width="200" height="150" fill="#fdf6e3"/><rect x="55" y="70" width="90" height="60" fill="#f4a261" stroke="#30234c" stroke-width="3"/><path d="M45 72 100 30l55 42Z" fill="#d46692" stroke="#30234c" stroke-width="3"/><rect x="90" y="95" width="22" height="35" fill="#6550a1"/><circle cx="165" cy="30" r="14" fill="#edbd50"/><path d="M10 140c30-8 60-8 90 0s60 8 90 0" stroke="#43866f" stroke-width="6" fill="none"/></svg>');
  db.portfolio = [
    { id: "pf-1", studentId: aarav.id, kind: "Drawing", title: "My house", image: houseSVG, date: "2026-09-19", by: "Aarav" },
    { id: "pf-2", studentId: aarav.id, kind: "Reflection", title: "Straight lines hunt", text: "I found 6 straight lines.", date: "2026-09-22", by: "Aarav" },
    { id: "pf-3", studentId: aarav.id, kind: "Achievement", title: "Pattern Builder badge", text: "Finished a pattern activity.", date: "2026-09-28", by: "EzRoots" },
    { id: "pf-4", studentId: sib.id, kind: "Writing", title: "My weekend", text: "I went to the park with my brother. We saw a big dog.", date: "2026-09-21", by: "Ananya" },
  ];
  db.homeObservations = [
    { id: "ho-1", studentId: aarav.id, concept: "Thick & thin", idea: "Find 3 thick things and 3 thin things at home and line them up.", text: "Aarav found a thick dictionary and a thin notebook, and explained which was which.", date: "2026-09-26", by: lakshmi.id, photo: null },
  ];
  db.homeDone = {};

  /* ---- files & folders (§54, §55) ---- */
  const folders = new Set(["Montessori", "Training Videos", "Arithmetic Videos", "Concept videos", "Language videos", "Planners", "Planners/Level 1", "Planners/Level 1/Platinum", "School folders", "School folders/Sunrise Montessori", "School folders/Little Oaks", "School folders/Green Valley", "Lesson plans"]);
  for (const lp of tn) {
    folders.add(`Lesson plans/${lp.folder}`);
  }
  const files = [];
  for (const v of yi) {
    files.push({ id: `f-${v.id}`, name: v.file, folder: v.folder, kind: "video", sizeMB: v.sizeMB, view: true, download: false, tier: null, level: v.level, ref: { type: "video", id: v.id }, addedAt: "2026-08-20", addedBy: "Diya Raman", versions: [], processing: v.sizeMB > 150 });
  }
  for (const lp of tn) {
    files.push({ id: `f-${lp.id}`, name: lp.file.split("/")[1] ?? lp.title, folder: `Lesson plans/${lp.folder}`, kind: "pdf", sizeMB: Math.round((lp.pages ?? 2) * 0.3 * 10) / 10, view: true, download: false, tier: null, level: lp.level ? `Level ${lp.level}` : null, ref: { type: "lp", id: lp.id }, addedAt: "2026-09-01", addedBy: "Diya Raman", versions: [] });
  }
  const extra = [
    ["Montessori", "Montessori sensorial materials guide.pdf", "pdf", 2.4, true],
    ["Montessori", "Practical life activity cards.docx", "doc", 0.8, true],
    ["Training Videos", "Getting started with EzRoots.mp4", "video", 64, false],
    ["Planners/Level 1/Platinum", "Month 4 planner- Level 1-platinum 2026 - 27.xlsx", "xls", 5.8, true, "Platinum"],
    ["Planners/Level 1/Platinum", "Month 5 planner- Level 1-platinum 2026 - 27.xlsx", "xls", 5.1, true, "Platinum"],
    ["School folders/Sunrise Montessori", "Sunrise annual day activity plan.pdf", "pdf", 1.2, true],
    ["School folders/Sunrise Montessori", "Sunrise parent orientation.docx", "doc", 0.4, true],
    ["School folders/Little Oaks", "Little Oaks toddler transition plan.pdf", "pdf", 0.9, false],
    ["School folders/Green Valley", "Green Valley offline teaching kit.xlsx", "xls", 0.3, true],
  ];
  extra.forEach(([folder, name, kind, sizeMB, download, tier], i) =>
    files.push({ id: `f-x${i}`, name, folder, kind, sizeMB, view: true, download, tier: tier ?? null, level: null, ref: null, addedAt: i > 4 ? "2026-09-27" : "2026-09-10", addedBy: "Diya Raman", versions: [] }),
  );
  db.folders = [...folders].sort();
  db.files = files;
  db.folderAccess = {
    Montessori: "all",
    "Training Videos": "all",
    "Arithmetic Videos": "all",
    "Concept videos": "all",
    "Language videos": "all",
    "Lesson plans": "all",
    Planners: "all",
    "School folders/Sunrise Montessori": ["sch-sunrise"],
    "School folders/Little Oaks": ["sch-littleoaks"],
    "School folders/Green Valley": ["sch-greenvalley"],
  };
  db.resourceViews = {};
  files.forEach((f, i) => (db.resourceViews[f.id] = Math.round(EzRng(f.id)() * (i % 5 === 0 ? 6 : 140))));

  /* ---- privacy (§31) ---- */
  db.dataRequests = [
    { id: "dr-1", kind: "Export", studentId: nurseryA[3].id, parentId: nurseryA[3].parentId, date: "2026-09-25", status: "Open" },
  ];
  db.audit = [
    { id: "au-s1", at: "2026-09-29T10:24:00", who: "Riya Thomas", role: "EzRoots Super Admin", action: "approved 30 student seats", detail: "Little Oaks" },
    { id: "au-s2", at: "2026-09-28T17:05:00", who: "Diya Raman", role: "EzRoots Content Admin", action: "published Month 4 planner", detail: "CBSE · Nursery" },
    { id: "au-s3", at: "2026-09-26T12:40:00", who: "Kavitha Rao", role: "Principal", action: "marked a leaver", detail: "Sunrise Montessori" },
    { id: "au-s4", at: "2026-09-18T09:02:00", who: "Lakshmi Sharma", role: "Parent", action: "gave consent v1.0", detail: "Aarav Sharma, Ananya Sharma" },
  ];

  /* ---- notifications for new v2 flows ---- */
  db.notices.push(
    { id: "n-v2-1", to: lakshmi.id, text: "Aarav earned the “Pattern Builder” badge. 🎉", link: "/parent/portfolio", date: "2026-09-28", read: false },
    { id: "n-v2-2", to: lakshmi.id, text: "This week with EzRoots: Aarav’s weekly summary is ready.", link: "/parent/weekly", date: "2026-09-27", read: false },
    { id: "n-v2-3", to: lakshmi.id, text: "Ms. Anita suggested a home activity: heavy and light.", link: "/parent/notes", date: "2026-09-28", read: true },
    { id: "n-v2-4", to: "u-sa", text: "Green Valley School is below the usage threshold this week (41%).", link: "/sa/analytics", date: "2026-09-29", read: false },
  );

  // v1 media list stays for v1 screens; v2 screens use db.files.
  return db;
}
