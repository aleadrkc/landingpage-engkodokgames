#!/usr/bin/env python3
"""Upload exported HTML files to Azure Blob Static Website with gzip content encoding.

Run after `npm run build` and the normal `az storage blob sync`.
This keeps blob names unchanged (index.html, product/index.html, etc.) but stores
compressed bytes with Content-Encoding: gzip so browsers/SEO tools receive
compressed HTML from Azure Static Website.
"""

from __future__ import annotations

import gzip
import os
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "out"
ACCOUNT = os.environ.get("AZURE_STORAGE_ACCOUNT", "demolandingengkodoggames")
CONTAINER = os.environ.get("AZURE_STORAGE_CONTAINER", "$web")


def blob_name(path: Path) -> str:
    return path.relative_to(OUT_DIR).as_posix()


def gzip_file(src: Path, dst: Path) -> int:
    data = src.read_bytes()
    with dst.open("wb") as raw:
        with gzip.GzipFile(fileobj=raw, mode="wb", compresslevel=9, mtime=0) as f:
            f.write(data)
    return len(data)


def upload(src: Path, name: str) -> None:
    cmd = [
        "az",
        "storage",
        "blob",
        "upload",
        "--account-name",
        ACCOUNT,
        "--container-name",
        CONTAINER,
        "--name",
        name,
        "--file",
        str(src),
        "--content-type",
        "text/html; charset=utf-8",
        "--content-encoding",
        "gzip",
        "--overwrite",
        "true",
        "--only-show-errors",
        "--output",
        "none",
    ]
    subprocess.run(cmd, check=True)


def main() -> None:
    if not OUT_DIR.exists():
        raise SystemExit(f"Missing export directory: {OUT_DIR}")

    html_files = sorted(OUT_DIR.rglob("*.html"))
    if not html_files:
        raise SystemExit("No HTML files found in out/")

    total_raw = 0
    total_gzip = 0
    with tempfile.TemporaryDirectory() as td:
        tmpdir = Path(td)
        for html in html_files:
            gz = tmpdir / (blob_name(html).replace("/", "__") + ".gz")
            raw_size = gzip_file(html, gz)
            upload(gz, blob_name(html))
            gz_size = gz.stat().st_size
            total_raw += raw_size
            total_gzip += gz_size
            print(f"{blob_name(html)}: {raw_size} -> {gz_size} bytes")

    saved = total_raw - total_gzip
    pct = (saved / total_raw * 100) if total_raw else 0
    print(f"Uploaded {len(html_files)} gzip-encoded HTML files")
    print(f"HTML bytes: {total_raw} -> {total_gzip} ({pct:.1f}% smaller)")


if __name__ == "__main__":
    main()
