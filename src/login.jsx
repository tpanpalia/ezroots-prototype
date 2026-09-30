// v2 sign-in: child-friendly options (§4) on top of v1's adult sign-in.

function EzLogin() {
  const [mode, setMode] = B.useState("adult");
  if (mode === "child") return <EzChildLogin onBack={() => setMode("adult")} />;
  return (
    <>
      <Gu />
      <button className="btn lg ezkidswitch" onClick={() => setMode("child")}>🧒 I’m a child</button>
    </>
  );
}

function EzChildLogin({ onBack }) {
  const { db, update, toast } = b();
  const nav = H();
  const [code, setCode] = B.useState("");
  const [school, setSchool] = B.useState(null);
  const [sec, setSec] = B.useState(null);
  const [kid, setKid] = B.useState(null);
  const [pin, setPin] = B.useState([]);
  const [tries, setTries] = B.useState(0);
  const [scan, setScan] = B.useState(false);
  const [pw, setPw] = B.useState({ u: "", p: "" });
  const videoRef = B.useRef(null);
  const method = school && sec ? school.policy?.childSignIn?.[sec.level] ?? "picture" : null;
  const signIn = (s) => {
    const u = db.users.find((x) => x.role === "student" && x.childId === s.id);
    const parents = EzParentsOf(db, s.id);
    if (!parents.some((p) => p.consent)) return toast("Ask your grown-up to finish setting up your account first.");
    update((d) => { d.userId = u.id; d.parentAssist = null; });
    nav("/student");
  };
  B.useEffect(() => {
    if (!scan) return;
    let stream;
    navigator.mediaDevices?.getUserMedia?.({ video: { facingMode: "user" } }).then((s) => { stream = s; if (videoRef.current) videoRef.current.srcObject = s; }).catch(() => {});
    return () => stream?.getTracks().forEach((t2) => t2.stop());
  }, [scan]);
  const kids = sec ? Cr(db, sec.id) : [];
  const Big = ({ children, onClick, on: isOn }) => <button className={`ezbigbtn ${isOn ? "on" : ""}`} onClick={onClick}>{children}</button>;
  return (
    <div className="ezkidlogin">
      <div className="row between">
        <button className="btn ghost" onClick={() => (kid ? (setKid(null), setPin([])) : sec ? setSec(null) : school ? setSchool(null) : onBack())}>← Back</button>
        <span className="brand"><span className="mark">EZ</span><strong>EZ ROOTS</strong></span>
      </div>
      {!school && !scan && (
        <div className="stack ezcenter">
          <h1>Hello! 👋</h1>
          <p>Ask your teacher for the school code.</p>
          <input className="input ezcode" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="SUN26" aria-label="School code" />
          <button className="btn lg" disabled={!code} onClick={() => { const s = db.schools.find((x) => x.code === code.trim()); s ? setSchool(s) : toast("That code isn’t right. Ask your teacher."); }}>Next →</button>
          <div className="divider" />
          <button className="btn lg secondary" onClick={() => setScan(true)}>📷 Scan my card</button>
          <small className="muted">Demo school code: SUN26</small>
        </div>
      )}
      {scan && (
        <div className="stack ezcenter">
          <h1>Show your card 📇</h1>
          <video ref={videoRef} autoPlay playsInline muted className="ezcam" />
          <small className="muted">In this demo, pick the card instead:</small>
          <div className="ezavatars">
            {db.students.filter((s) => EzSchoolOfSection(db, s.sectionId)?.policy?.childSignIn?.[db.sections.find((x) => x.id === s.sectionId)?.level] === "qr").slice(0, 10).map((s) => (
              <Big key={s.id} onClick={() => signIn(s)}><span style={{ fontSize: 40 }}>{s.avatar}</span><small>{EzFirst(s.name)}’s card</small></Big>
            ))}
          </div>
          <button className="btn ghost" onClick={() => setScan(false)}>Use the school code instead</button>
        </div>
      )}
      {school && !sec && (
        <div className="stack ezcenter">
          <h1>Which class are you in?</h1>
          <div className="ezavatars">
            {EzSchoolSections(db, school.id).map((s) => <Big key={s.id} onClick={() => setSec(s)}><strong style={{ fontSize: 22 }}>{s.level}</strong><small>Section {s.name}</small></Big>)}
          </div>
        </div>
      )}
      {sec && method === "password" && (
        <form className="stack ezcenter" onSubmit={(e) => { e.preventDefault(); const s = kids.find((k) => k.username === pw.u.trim().toLowerCase()); s && pw.p ? signIn(s) : toast("Check your username and password."); }}>
          <h1>Sign in</h1>
          <input className="input" placeholder="Username" value={pw.u} onChange={(e) => setPw({ ...pw, u: e.target.value })} />
          <input className="input" type="password" placeholder="Password" value={pw.p} onChange={(e) => setPw({ ...pw, p: e.target.value })} />
          <button className="btn lg">Sign in</button>
          <small className="muted">Demo: any password works. Usernames are on the teacher’s Students page.</small>
        </form>
      )}
      {sec && method === "qr" && !kid && (
        <div className="stack ezcenter">
          <h1>Show your card 📇</h1>
          <p>Your class signs in with a card. Hold it up to the camera.</p>
          <button className="btn lg" onClick={() => setScan(true)}>📷 Open camera</button>
          <button className="btn ghost" onClick={() => setSchool({ ...school, policy: { ...school.policy, childSignIn: { ...school.policy.childSignIn, [sec.level]: "picture" } } })}>Forgot my card? Use my picture</button>
        </div>
      )}
      {sec && method === "picture" && !kid && (
        <div className="stack ezcenter">
          <h1>Find your picture</h1>
          <div className="ezavatars">
            {kids.map((s) => <Big key={s.id} onClick={() => setKid(s)}><span style={{ fontSize: 44 }}>{s.avatar}</span><small>{EzFirst(s.name)}</small></Big>)}
          </div>
        </div>
      )}
      {kid && (
        <div className="stack ezcenter">
          <span style={{ fontSize: 60 }}>{kid.avatar}</span>
          <h1>Hi {EzFirst(kid.name)}! Tap your secret pictures</h1>
          <div className="ezpin">{[0, 1, 2, 3].map((i) => <span key={i}>{pin[i] ?? "·"}</span>)}</div>
          <div className="ezpinpad">
            {EzPinPics.map((p) => (
              <button key={p} onClick={() => {
                const n = [...pin, p];
                if (n.length < 4) return setPin(n);
                if (n.join("") === kid.pin.join("")) signIn(kid);
                else { setPin([]); setTries(tries + 1); toast(tries >= 2 ? "Ask your teacher to help you." : "Oops! Try again. 💜"); }
              }}>{p}</button>
            ))}
          </div>
          <button className="btn ghost" onClick={() => setPin([])}>Start again</button>
          <small className="muted">Demo: {EzFirst(kid.name)}’s pictures are {kid.pin.join(" ")}</small>
        </div>
      )}
    </div>
  );
}

/* Records login / logout events whoever signs in, however they sign in (§39). */
function EzSessionWatcher() {
  const { db, update } = b();
  const prev = B.useRef(db.userId);
  B.useEffect(() => {
    const was = prev.current;
    prev.current = db.userId;
    if (was === db.userId) return;
    update((d) => {
      if (was) EzEvent(d, EzUser(d, was), "logout");
      if (d.userId) EzEvent(d, EzUser(d, d.userId), "login");
    });
  }, [db.userId]);
  // Demo/test hook: ?as=<userId> signs in as that user.
  B.useEffect(() => {
    const as = new URLSearchParams(location.search).get("as");
    if (as && db.users.some((u) => u.id === as) && db.userId !== as) update((d) => { d.userId = as; });
  }, []);
  return null;
}
