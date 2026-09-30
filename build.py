#!/usr/bin/env python3
"""Builds dist/EzRoots-Prototype-v2.html.

base/lib.js   React, router etc. from the v1 bundle (untouched)
base/app.js   v1 app code (prettified), with small patches applied below
src/*.jsx     v2 additions, compiled with esbuild (JSX -> EzH/EzFrag)
src/ez.css    v2 styles, appended to the v1 stylesheet
"""
import json, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).parent
SRC_ORDER = ["core", "seed", "analytics", "ui", "player", "child", "world", "garden", "parent",
             "teacher", "principal", "admin", "files", "builder", "login", "assistant", "routes"]


def patch(app, old, new, count=1):
    n = app.count(old)
    if n != count:
        sys.exit(f"patch expected {count} match(es), found {n}:\n{old[:200]}")
    return app.replace(old, new)


def patched_app():
    app = (ROOT / "base/app.js").read_text()
    for p in json.loads((ROOT / "patches.json").read_text()):
        app = patch(app, p["old"], p["new"], p.get("count", 1))
    b64 = json.loads((ROOT / "base/b64.json").read_text())
    for k, v in b64.items():
        app = app.replace(f'"{k}"', f'"{v}"')
    return app


def compile_ext():
    parts = []
    for name in SRC_ORDER:
        f = ROOT / "src" / f"{name}.jsx"
        out = subprocess.run(
            ["npx", "--yes", "esbuild@0.28.2", str(f), "--loader:.jsx=jsx",
             "--jsx-factory=EzH", "--jsx-fragment=EzFrag", "--target=es2020"],
            capture_output=True, text=True)
        if out.returncode:
            sys.exit(out.stderr)
        parts.append(f"/* ---- src/{name}.jsx ---- */\n" + out.stdout)
    return "\n".join(parts)


def main():
    lib = (ROOT / "base/lib.js").read_text()
    app = patched_app()
    ext = compile_ext()
    marker = 'lE(document.getElementById("root")).render('
    if app.count(marker) != 1:
        sys.exit("render marker not found")
    app = app.replace(marker, ext + "\n" + marker)
    js = lib + "\n" + app
    (ROOT / "dist/app.check.mjs").write_text(js)
    chk = subprocess.run(["node", "--check", str(ROOT / "dist/app.check.mjs")], capture_output=True, text=True)
    if chk.returncode:
        sys.exit(chk.stderr[:3000])
    (ROOT / "dist/app.check.mjs").unlink()
    head = (ROOT / "base/head.html").read_text()
    tail = (ROOT / "base/tail.html").read_text()
    css = (ROOT / "src/ez.css").read_text()
    tail = tail.replace("</style>", css + "</style>", 1)
    head = head.replace("<title>EZ Roots · Learning Platform Prototype</title>",
                        "<title>EZ Roots · Learning Platform Prototype v2</title>")
    html = head + '<script type="module" crossorigin>' + js + "</script>" + tail
    out = ROOT / "dist/EzRoots-Prototype-v2.html"
    out.write_text(html)
    print(f"built {out} ({len(html)/1e6:.2f} MB)")


if __name__ == "__main__":
    main()
