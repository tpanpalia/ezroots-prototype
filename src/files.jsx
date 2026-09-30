// v2 file & folder management (§54–55). Access = folder assigned to the school
// by EzRoots AND the school's package meets the file's package tier.

const EzBlobs = new Map(); // uploaded files, for previews during this browser session
const EzParent = (path) => (path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "");
const EzBase = (path) => path.split("/").pop();
function EzFolderAccess(db, path) {
  for (let p = path; p; p = EzParent(p)) if (db.folderAccess[p] != null) return { value: db.folderAccess[p], from: p };
  return { value: null, from: null };
}
function EzSchoolCanSee(db, school, file) {
  const acc = EzFolderAccess(db, file.folder).value;
  const assigned = acc === "all" || (Array.isArray(acc) && acc.includes(school.id));
  if (!assigned) return false;
  if (!file.tier) return true;
  return Object.values(school.packages).some((p) => _e(p, file.tier));
}
function EzVisibleFiles(db, school) {
  if (!school) return [];
  return db.files.filter((f) => EzSchoolCanSee(db, school, f));
}
const EzKindOfName = (name) => {
  const ext = name.split(".").pop().toLowerCase();
  if (["mp4", "mov", "m4v", "webm", "avi", "mkv"].includes(ext)) return "video";
  if (["xls", "xlsx", "csv"].includes(ext)) return "xls";
  if (["doc", "docx"].includes(ext)) return "doc";
  if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) return "img";
  return "pdf";
};
const EzKindLabel = { video: "Video", xls: "Excel", doc: "Word", pdf: "PDF", img: "Image" };

function EzFileViewer({ file, school, onClose }) {
  const { db, me, update, toast } = b();
  B.useEffect(() => {
    update((d) => { d.resourceViews[file.id] = (d.resourceViews[file.id] ?? 0) + 1; EzEvent(d, me, "resource_viewed", { fileId: file.id }); });
  }, [file.id]);
  const blob = EzBlobs.get(file.id);
  const video = file.ref?.type === "video" ? JA(file.ref.id) : null;
  const lp = file.ref?.type === "lp" ? tn.find((l) => l.id === file.ref.id) : null;
  const download = () => {
    const content = blob ?? new Blob([`EzRoots demo stand-in for “${file.name}”.`], { type: "text/plain" });
    EzDownload(content, blob ? file.name : `${file.name}.txt`);
    update((d) => { EzEvent(d, me, "resource_downloaded", { fileId: file.id }); EzAudit(d, me, "downloaded file", file.name); });
  };
  return (
    <AA wide title={file.name} onClose={onClose} foot={file.download ? <button className="btn" onClick={download}><S n="down" />Download</button> : <EzPill tone="lock"><S n="lock" />View only · download off</EzPill>}>
      {!file.view ? <EzEmpty icon="lock" title="Viewing is switched off for this file" /> : video ? (
        <video className="player" controls controlsList={file.download ? undefined : "nodownload"} onContextMenu={(e) => e.preventDefault()} src={Ea(video.folder, video.file)}
          onPlay={() => update((d) => EzEvent(d, me, "video_watched", { fileId: file.id }))} onEnded={() => update((d) => EzEvent(d, me, "video_completed", { fileId: file.id }))} />
      ) : lp ? <EzV1LessonPlan lp={lp} school={school?.name ?? "EzRoots"} /> : blob && file.kind === "video" ? (
        <video className="player" controls src={URL.createObjectURL(blob)} />
      ) : blob && (file.kind === "pdf" || file.kind === "img") ? (
        <div className="pdfview"><iframe title={file.name} src={URL.createObjectURL(blob)} /></div>
      ) : (
        <div className="pdfview ezstandin" onContextMenu={(e) => e.preventDefault()}>
          <div>
            <span className={`fileicon ${file.kind}`} style={{ width: 56, height: 56 }}><S n="file" size={28} /></span>
            <h3>{file.name}</h3>
            <p className="muted">{EzKindLabel[file.kind]} · {file.sizeMB} MB. In the product this opens in a view-only {file.kind === "xls" ? "spreadsheet" : "document"} viewer.</p>
          </div>
          {db.settings.watermark && <div className="watermark">{school?.name ?? "EzRoots"}<br />EzRoots · view only</div>}
        </div>
      )}
    </AA>
  );
}

/* School users: view assigned folders and files only (§54 "School users should be able to"). */
function EzSchoolFiles({ schoolId }) {
  const { db } = b();
  const school = db.schools.find((s) => s.id === schoolId);
  const files = EzVisibleFiles(db, school);
  const [folder, setFolder] = B.useState("");
  const [q, setQ] = B.useState("");
  const [kind, setKind] = B.useState("All");
  const [open, setOpen] = B.useState(null);
  const folders = EzUniq(files.map((f) => f.folder).flatMap((f) => f.split("/").map((_, i, arr) => arr.slice(0, i + 1).join("/"))));
  const children = folders.filter((f) => EzParent(f) === folder);
  const shown = files.filter((f) => (q ? `${f.name} ${f.folder}`.toLowerCase().includes(q.toLowerCase()) : f.folder === folder) && (kind === "All" || EzKindLabel[f.kind] === kind));
  return (
    <>
      <W eyebrow={`${school.name} · assigned by EzRoots`} title="School resources" sub="Only folders EzRoots has shared with your school, within your package.">
        <EzTabs value={kind} options={["All", "Video", "PDF", "Excel", "Word"]} onChange={setKind} />
      </W>
      <div className="row wrap" style={{ marginBottom: 12 }}>
        <div className="search" style={{ maxWidth: 420 }}><S n="search" /><input aria-label="Search resources" placeholder="Search files and folders" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      </div>
      {!q && (
        <div className="steps" style={{ marginBottom: 10 }}>
          <button className={`pill ${folder === "" ? "primary" : ""}`} onClick={() => setFolder("")}>All folders</button>
          {folder.split("/").filter(Boolean).map((p, i, arr) => <button key={i} className="pill" onClick={() => setFolder(arr.slice(0, i + 1).join("/"))}>{p}</button>)}
        </div>
      )}
      <div className="card">
        {!q && children.map((f) => (
          <button key={f} className="folderrow" onClick={() => setFolder(f)}><span className="fileicon"><S n="folder" /></span><span style={{ flex: 1 }}><strong>{EzBase(f)}</strong><small style={{ display: "block" }}>{files.filter((x) => x.folder.startsWith(f)).length} files</small></span><S n="arrow" /></button>
        ))}
        {shown.map((f) => (
          <button key={f.id} className="folderrow" onClick={() => setOpen(f)}>
            <span className={`fileicon ${f.kind}`}><S n={f.kind === "video" ? "play" : "file"} /></span>
            <span style={{ flex: 1 }}><strong>{f.name}</strong><small style={{ display: "block" }}>{q ? `${f.folder} · ` : ""}{EzKindLabel[f.kind]} · {f.sizeMB} MB</small></span>
            {f.download ? <EzPill tone="good">Download allowed</EzPill> : <EzPill tone="lock">View only</EzPill>}
          </button>
        ))}
        {!children.length && !shown.length && <EzEmpty icon="folder" title="Nothing here" />}
      </div>
      {open && <EzFileViewer file={open} school={school} onClose={() => setOpen(null)} />}
    </>
  );
}

/* EzRoots admin file manager. */
function EzFileManager() {
  const { db, me, update, toast } = b();
  const [folder, setFolder] = B.useState("");
  const [q, setQ] = B.useState("");
  const [sel, setSel] = B.useState(null); // {type:'file'|'folder', id}
  const [modal, setModal] = B.useState(null);
  const [val, setVal] = B.useState("");
  const [dest, setDest] = B.useState("");
  const [tab, setTab] = B.useState("Files");
  const children = db.folders.filter((f) => EzParent(f) === folder);
  const inFolder = db.files.filter((f) => f.folder === folder);
  const ql = q.toLowerCase();
  const hitsFolders = q ? db.folders.filter((f) => f.toLowerCase().includes(ql)) : [];
  const hitsFiles = q ? db.files.filter((f) => f.name.toLowerCase().includes(ql)) : [];
  const file = sel?.type === "file" ? db.files.find((f) => f.id === sel.id) : null;
  const log = (d, action, detail) => EzAudit(d, me, action, detail);

  const fileOps = {
    rename: (f, name) => update((d) => { d.files.find((x) => x.id === f.id).name = name; log(d, "renamed file", `${f.name} → ${name}`); }),
    del: (f) => update((d) => { d.files = d.files.filter((x) => x.id !== f.id); log(d, "deleted file", f.name); }),
    copy: (f, to) => update((d) => { d.files.push({ ...JSON.parse(JSON.stringify(f)), id: O("f"), folder: to, addedAt: uA, addedBy: me.name, copiedFrom: f.id }); log(d, "copied file", `${f.name} → ${to}`); }),
    move: (f, to) => update((d) => { d.files.find((x) => x.id === f.id).folder = to; log(d, "moved file", `${f.name} → ${to}`); }),
  };
  const folderOps = {
    create: (name, parent) => update((d) => {
      const p = parent ? `${parent}/${name}` : name;
      for (let q = p; q; q = EzParent(q)) if (!d.folders.includes(q)) d.folders.push(q);
      d.folders.sort();
      log(d, parent ? "created sub-folder" : "created folder", p);
    }),
    rename: (path, name) => update((d) => {
      const np = EzParent(path) ? `${EzParent(path)}/${name}` : name;
      const re = (p) => (p === path ? np : p.startsWith(path + "/") ? np + p.slice(path.length) : p);
      d.folders = d.folders.map(re).sort();
      d.files.forEach((f) => (f.folder = re(f.folder)));
      d.folderAccess = Object.fromEntries(Object.entries(d.folderAccess).map(([k, v2]) => [re(k), v2]));
      log(d, "renamed folder", `${path} → ${np}`);
    }),
    del: (path) => update((d) => {
      const under = (p) => p === path || p.startsWith(path + "/");
      d.folders = d.folders.filter((p) => !under(p));
      d.files = d.files.filter((f) => !under(f.folder));
      for (const k of Object.keys(d.folderAccess)) if (under(k)) delete d.folderAccess[k];
      log(d, "deleted folder", path);
    }),
    copy: (path, to) => update((d) => {
      const np = to ? `${to}/${EzBase(path)}` : EzBase(path);
      const target = d.folders.includes(np) ? `${np} (copy)` : np;
      const re = (p) => (p === path ? target : target + p.slice(path.length));
      const under = (p) => p === path || p.startsWith(path + "/");
      d.folders.push(...d.folders.filter(under).map(re));
      d.folders = EzUniq(d.folders).sort();
      d.files.push(...d.files.filter((f) => under(f.folder)).map((f) => ({ ...JSON.parse(JSON.stringify(f)), id: O("f"), folder: re(f.folder), addedAt: uA, addedBy: me.name, copiedFrom: f.id })));
      log(d, "copied folder", `${path} → ${target} (no re-upload)`);
    }),
    move: (path, to) => update((d) => {
      const np = to ? `${to}/${EzBase(path)}` : EzBase(path);
      const re = (p) => (p === path ? np : p.startsWith(path + "/") ? np + p.slice(path.length) : p);
      d.folders = EzUniq(d.folders.map(re)).sort();
      d.files.forEach((f) => (f.folder = re(f.folder)));
      d.folderAccess = Object.fromEntries(Object.entries(d.folderAccess).map(([k, v2]) => [re(k), v2]));
      log(d, "moved folder", `${path} → ${np}`);
    }),
  };
  const onUpload = (e, replace) => {
    const list = [...(e.target.files ?? [])];
    e.target.value = "";
    const max = db.settings.maxUploadMB;
    const accepted = [];
    for (const f of list) {
      const mb = Math.round((f.size / 1048576) * 10) / 10;
      const kind = EzKindOfName(f.name);
      if (mb > max && kind !== "video") { toast(`${f.name} is ${mb} MB. The limit is ${max} MB.`); continue; }
      accepted.push({ f, mb, kind });
    }
    if (!accepted.length) return;
    update((d) => {
      for (const { f, mb, kind } of accepted) {
        if (replace) {
          const x = d.files.find((y) => y.id === replace.id);
          x.versions = [...(x.versions ?? []), { name: x.name, sizeMB: x.sizeMB, at: x.addedAt, by: x.addedBy }];
          Object.assign(x, { name: f.name, sizeMB: mb, kind, addedAt: uA, addedBy: me.name, ref: null });
          EzBlobs.set(x.id, f);
          log(d, "replaced file", f.name);
          for (const s of d.schools) if (EzSchoolCanSee(d, s, x) && s.principalId) EzNotify(d, s.principalId, `EzRoots updated “${f.name}”.`, "/principal/folder");
        } else {
          const id = O("f");
          EzBlobs.set(id, f);
          d.files.push({ id, name: f.name, folder, kind, sizeMB: mb, view: true, download: d.settings.downloadsDefault, tier: null, level: null, ref: null, addedAt: uA, addedBy: me.name, versions: [], processing: kind === "video" && mb > 150 });
          log(d, "uploaded file", `${folder || "(top)"}/${f.name}`);
        }
      }
    });
    toast(replace ? "File replaced · schools notified" : `${accepted.length} file${accepted.length > 1 ? "s" : ""} uploaded${accepted.some((a) => a.kind === "video" && a.mb > 150) ? " · making low-bandwidth copies" : ""}`);
  };
  const setFile = (f, patch) => update((d) => { Object.assign(d.files.find((x) => x.id === f.id), patch); log(d, "changed file permissions", `${f.name}: ${JSON.stringify(patch)}`); });
  const acc = EzFolderAccess(db, folder);
  const destOptions = ["", ...db.folders];

  const FileRow = ({ f, showPath }) => (
    <div className={`folderrow ${sel?.id === f.id ? "on" : ""}`} onClick={() => setSel({ type: "file", id: f.id })} style={{ cursor: "pointer" }}>
      <span className={`fileicon ${f.kind}`}><S n={f.kind === "video" ? "play" : "file"} /></span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <strong>{f.name}</strong>
        <small style={{ display: "block" }}>{showPath ? `${f.folder} · ` : ""}{EzKindLabel[f.kind]} · {f.sizeMB} MB{f.tier ? ` · ${f.tier}+ only` : ""}{f.processing ? " · ⏳ streaming copy" : ""}</small>
      </span>
      <span className="row hide-sm">{f.view ? <EzPill>View</EzPill> : <EzPill tone="lock">No view</EzPill>}{f.download ? <EzPill tone="good">Download</EzPill> : <EzPill tone="lock">No download</EzPill>}</span>
    </div>
  );
  return (
    <>
      <W eyebrow="Content" title="Files & folders" sub="Upload, organise and decide which schools see what. Package tiers still apply on top.">
        <EzTabs value={tab} options={["Files", "School access"]} onChange={setTab} />
      </W>
      {tab === "School access" ? <EzAccessMatrix /> : (
        <>
          <div className="row wrap" style={{ marginBottom: 12 }}>
            <div className="search" style={{ maxWidth: 380 }}><S n="search" /><input aria-label="Search files and folders" placeholder="Search files and folders" value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <span className="spacer" />
            <button className="btn secondary" onClick={() => { setVal(""); setDest(sel?.type === "folder" ? sel.id : folder); setModal("newFolder"); }}><S n="folder" />New folder / sub-folder</button>
            <label className="btn"><S n="upload" />Upload<input type="file" multiple hidden accept=".pdf,.xls,.xlsx,.csv,.doc,.docx,.mp4,.mov,.m4v,.webm,.png,.jpg,.jpeg" onChange={(e) => onUpload(e)} /></label>
          </div>
          {!q && (
            <div className="row between wrap" style={{ marginBottom: 10 }}>
              <div className="steps">
                <button className={`pill ${folder === "" ? "primary" : ""}`} onClick={() => { setFolder(""); setSel(null); }}>All folders</button>
                {folder.split("/").filter(Boolean).map((p, i, arr) => <button key={i} className="pill" onClick={() => setFolder(arr.slice(0, i + 1).join("/"))}>{p}</button>)}
              </div>
              {folder && (
                <span className="row">
                  <small>Access: {acc.value === "all" ? "all schools" : Array.isArray(acc.value) ? acc.value.map((id) => db.schools.find((s) => s.id === id)?.name).join(", ") : "no schools"}{acc.from && acc.from !== folder ? ` (from “${acc.from}”)` : ""}</small>
                  <button className="btn ghost sm" onClick={() => setSel({ type: "folder", id: folder })}>Folder actions</button>
                </span>
              )}
            </div>
          )}
          <div className="split">
            <div className="card">
              {!q && children.map((f) => (
                <div key={f} className={`folderrow ${sel?.id === f ? "on" : ""}`} style={{ cursor: "pointer" }} onClick={() => setSel({ type: "folder", id: f })} onDoubleClick={() => { setFolder(f); setSel(null); }}>
                  <span className="fileicon"><S n="folder" /></span>
                  <span style={{ flex: 1 }}><strong>{EzBase(f)}</strong><small style={{ display: "block" }}>{db.files.filter((x) => x.folder === f || x.folder.startsWith(f + "/")).length} files</small></span>
                  <button className="btn ghost sm" onClick={(e) => { e.stopPropagation(); setVal(""); setDest(f); setModal("newFolder"); }}><S n="plus" />Sub-folder</button>
                  <button className="btn ghost sm" onClick={(e) => { e.stopPropagation(); setFolder(f); setSel(null); }}>Open</button>
                </div>
              ))}
              {q && hitsFolders.map((f) => (
                <div key={f} className="folderrow" style={{ cursor: "pointer" }} onClick={() => { setFolder(f); setQ(""); }}><span className="fileicon"><S n="folder" /></span><span style={{ flex: 1 }}><strong>{f}</strong></span><S n="arrow" /></div>
              ))}
              {(q ? hitsFiles : inFolder).map((f) => <FileRow key={f.id} f={f} showPath={!!q} />)}
              {!q && !children.length && !inFolder.length && <EzEmpty icon="folder" title="Empty folder">Upload files or create a sub-folder.</EzEmpty>}
              {q && !hitsFiles.length && !hitsFolders.length && <EzEmpty icon="search" title="Nothing matches" />}
            </div>
            <div className="card pad stack">
              {!sel && <small>Select a file or folder to see its details and actions. Double-click a folder to open it.</small>}
              {sel?.type === "folder" && (
                <>
                  <div className="eyebrow">Folder</div>
                  <h2>{EzBase(sel.id)}</h2>
                  <small>{sel.id}</small>
                  <small>Access: {(() => { const a = EzFolderAccess(db, sel.id); return a.value === "all" ? "all schools" : Array.isArray(a.value) ? `${a.value.length} school(s)` : "no schools"; })()} · change under School access</small>
                  <div className="row wrap">
                    <button className="btn secondary sm" onClick={() => { setVal(""); setDest(sel.id); setModal("newFolder"); }}><S n="plus" />New sub-folder</button>
                    <button className="btn secondary sm" onClick={() => { setFolder(sel.id); setSel(null); }}><S n="folder" />Open</button>
                    <button className="btn secondary sm" onClick={() => { setVal(EzBase(sel.id)); setModal("renameFolder"); }}><S n="edit" />Rename</button>
                    <button className="btn secondary sm" onClick={() => { setDest(""); setModal("copyFolder"); }}>Copy to…</button>
                    <button className="btn secondary sm" onClick={() => { setDest(""); setModal("moveFolder"); }}>Move to…</button>
                    <button className="btn danger sm" onClick={() => setModal("delFolder")}><S n="trash" />Delete</button>
                  </div>
                </>
              )}
              {file && (
                <>
                  <div className="eyebrow">File details</div>
                  <h2 style={{ wordBreak: "break-word" }}>{file.name}</h2>
                  <dl className="kv">
                    <dt>Type</dt><dd>{EzKindLabel[file.kind]}</dd>
                    <dt>Size</dt><dd>{file.sizeMB} MB</dd>
                    <dt>Folder</dt><dd>{file.folder || "(top)"}</dd>
                    <dt>Added</dt><dd>{CA(file.addedAt)} · {file.addedBy}</dd>
                    <dt>Views</dt><dd>{db.resourceViews[file.id] ?? 0}</dd>
                    <dt>Schools</dt><dd>{db.schools.filter((s) => EzSchoolCanSee(db, s, file)).map((s) => s.name).join(", ") || "none"}</dd>
                    {file.versions?.length > 0 && <><dt>Versions</dt><dd>{file.versions.length} earlier · last {CA(file.versions[file.versions.length - 1].at)}</dd></>}
                  </dl>
                  <label className="row between"><span>View online</span><EzSwitch label="View online" checked={file.view} onChange={(v2) => setFile(file, { view: v2 })} /></label>
                  <label className="row between"><span>Download allowed</span><EzSwitch label="Download allowed" checked={file.download} onChange={(v2) => setFile(file, { download: v2 })} /></label>
                  <N label="Package tier">
                    <select className="input" value={file.tier ?? ""} onChange={(e) => setFile(file, { tier: e.target.value || null })}>
                      <option value="">All packages</option>{je.map((t2) => <option key={t2} value={t2}>{t2} and above</option>)}
                    </select>
                  </N>
                  <div className="row wrap">
                    <button className="btn secondary sm" onClick={() => setModal("view")}><S n="eye" />Open</button>
                    <button className="btn secondary sm" onClick={() => { setVal(file.name); setModal("renameFile"); }}><S n="edit" />Rename</button>
                    <button className="btn secondary sm" onClick={() => { setDest(file.folder); setModal("copyFile"); }}>Copy to…</button>
                    <button className="btn secondary sm" onClick={() => { setDest(file.folder); setModal("moveFile"); }}>Move to…</button>
                    <label className="btn secondary sm"><S n="upload" />Replace<input type="file" hidden onChange={(e) => onUpload(e, file)} /></label>
                    <button className="btn danger sm" onClick={() => setModal("delFile")}><S n="trash" />Delete</button>
                  </div>
                </>
              )}
            </div>
          </div>
          <EzDemoNote>Uploads are kept for this browser session only (no server in the prototype). Videos over the size limit are accepted and turned into a smaller streaming copy for weak networks.</EzDemoNote>
        </>
      )}
      {modal === "view" && file && <EzFileViewer file={file} onClose={() => setModal(null)} />}
      {["newFolder", "renameFolder", "renameFile"].includes(modal) && (
        <AA title={modal === "newFolder" ? (dest ? "New sub-folder" : "New folder") : "Rename"} onClose={() => setModal(null)} foot={<button className="btn" disabled={!val.trim() || val.includes("/")} onClick={() => {
          if (modal === "newFolder") folderOps.create(val.trim(), dest);
          if (modal === "renameFolder") { folderOps.rename(sel.id, val.trim()); setSel(null); }
          if (modal === "renameFile") fileOps.rename(file, val.trim());
          setModal(null);
          toast("Done");
        }}>Save</button>}>
          <N label="Name"><input className="input" autoFocus value={val} onChange={(e) => setVal(e.target.value)} /></N>
          {modal === "newFolder" && (
            <N label="Create inside" hint="choose (top level) for a new main folder">
              <select className="input" value={dest} onChange={(e) => setDest(e.target.value)}>{destOptions.map((f) => <option key={f} value={f}>{f || "(top level)"}</option>)}</select>
            </N>
          )}
          {modal === "newFolder" && <small>Will be created as: <b>{dest ? `${dest}/` : ""}{val || "…"}</b>. New sub-folders inherit the parent folder’s school access.</small>}
        </AA>
      )}
      {["copyFolder", "moveFolder", "copyFile", "moveFile"].includes(modal) && (
        <AA title={`${modal.startsWith("copy") ? "Copy" : "Move"} “${sel.type === "file" ? file.name : EzBase(sel.id)}” to…`} onClose={() => setModal(null)} foot={<button className="btn" onClick={() => {
          if (modal === "copyFolder") folderOps.copy(sel.id, dest);
          if (modal === "moveFolder") { if (dest === sel.id || dest.startsWith(sel.id + "/")) return toast("A folder can’t go inside itself"); folderOps.move(sel.id, dest); setSel(null); }
          if (modal === "copyFile") fileOps.copy(file, dest);
          if (modal === "moveFile") fileOps.move(file, dest);
          setModal(null);
          toast(modal.startsWith("copy") ? "Copied (no re-upload needed)" : "Moved");
        }}>{modal.startsWith("copy") ? "Copy" : "Move"}</button>}>
          <N label="Destination folder"><select className="input" value={dest} onChange={(e) => setDest(e.target.value)}>{destOptions.map((f) => <option key={f} value={f}>{f || "(top level)"}</option>)}</select></N>
          {modal === "copyFolder" && <small>Everything inside is copied, e.g. “School A Resources” → “School B Resources”, without uploading again. School access is not copied; set it for the new folder.</small>}
        </AA>
      )}
      {(modal === "delFolder" || modal === "delFile") && (
        <AA title="Delete?" onClose={() => setModal(null)} foot={<><button className="btn secondary" onClick={() => setModal(null)}>Cancel</button><button className="btn danger" onClick={() => {
          modal === "delFolder" ? folderOps.del(sel.id) : fileOps.del(file);
          setSel(null);
          setModal(null);
          toast("Deleted");
        }}>Delete</button></>}>
          <p>{modal === "delFolder" ? `“${sel.id}” and the ${db.files.filter((f) => f.folder === sel.id || f.folder.startsWith(sel.id + "/")).length} files inside it will be removed for every school.` : `“${file.name}” will be removed for every school.`}</p>
        </AA>
      )}
    </>
  );
}

/* Resource × school access table (PDF §54 example). */
function EzAccessMatrix() {
  const { db, me, update } = b();
  const rows = db.folders.filter((f) => !f.startsWith("Lesson plans/") && (!EzParent(f) || db.folderAccess[f] != null || EzParent(f) === "School folders"));
  const toggle = (path, sid) => update((d) => {
    const cur = EzFolderAccess(d, path).value;
    let list = cur === "all" ? d.schools.map((s) => s.id) : Array.isArray(cur) ? [...cur] : [];
    list = list.includes(sid) ? list.filter((x) => x !== sid) : [...list, sid];
    d.folderAccess[path] = list.length === d.schools.length ? "all" : list;
    EzAudit(d, me, "changed school access", `${path} · ${d.schools.find((s) => s.id === sid)?.name}`);
  });
  const all = (path, on2) => update((d) => { d.folderAccess[path] = on2 ? "all" : []; EzAudit(d, me, "changed school access", `${path} · ${on2 ? "all schools" : "no schools"}`); });
  return (
    <>
      <div className="card tablewrap">
        <table className="table matrix">
          <thead><tr><th>Resource folder</th><th>All</th>{db.schools.map((s) => <th key={s.id}>{s.name.split(" ").slice(0, 2).join(" ")}</th>)}</tr></thead>
          <tbody>
            {rows.map((f) => {
              const a = EzFolderAccess(db, f);
              const has = (sid) => a.value === "all" || (Array.isArray(a.value) && a.value.includes(sid));
              return (
                <tr key={f}>
                  <td><strong>{f}</strong>{a.from && a.from !== f && <small>inherits from “{a.from}”</small>}</td>
                  <td><input type="checkbox" aria-label={`${f} all schools`} checked={a.value === "all"} onChange={(e) => all(f, e.target.checked)} /></td>
                  {db.schools.map((s) => <td key={s.id}><button className={`ezperm ${has(s.id) ? "yes" : "no"}`} onClick={() => toggle(f, s.id)}>{has(s.id) ? "✓" : "✗"}</button></td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <EzInfo>A school sees a file only if its folder is ticked for that school <b>and</b> the school’s package meets the file’s package tier. Sub-folders inherit access unless set separately. Schools can view, play, search and (where allowed) download; they can’t upload, rename, delete or copy.</EzInfo>
    </>
  );
}
