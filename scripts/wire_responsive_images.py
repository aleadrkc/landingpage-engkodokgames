import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
COMPONENTS = ROOT / "src" / "components"
IMPORT = "import { imageSizes, imageSrcSet } from '@/lib/responsive-images'\n"

SRC_PATTERNS = [
    (r'(src="(/images/[^"]+)"(?![^>]*\bsrcSet=))', lambda m: f'{m.group(1)} srcSet={{imageSrcSet("{m.group(2)}")}} sizes={{imageSizes("{m.group(2)}")}}'),
    (r'(src=\{item\.src\}(?![^>]*\bsrcSet=))', lambda m: f'{m.group(1)} srcSet={{imageSrcSet(item.src)}} sizes={{imageSizes(item.src)}}'),
    (r'(src=\{main\.img\}(?![^>]*\bsrcSet=))', lambda m: f'{m.group(1)} srcSet={{imageSrcSet(main.img)}} sizes={{imageSizes(main.img)}}'),
    (r'(src=\{left\.img\}(?![^>]*\bsrcSet=))', lambda m: f'{m.group(1)} srcSet={{imageSrcSet(left.img)}} sizes={{imageSizes(left.img)}}'),
    (r'(src=\{right\.img\}(?![^>]*\bsrcSet=))', lambda m: f'{m.group(1)} srcSet={{imageSrcSet(right.img)}} sizes={{imageSizes(right.img)}}'),
]

changed = []
for path in sorted(COMPONENTS.glob("*.tsx")):
    text = path.read_text(encoding="utf-8")
    if "<img" not in text:
        continue
    new = text
    for pattern, repl in SRC_PATTERNS:
        new = re.sub(pattern, repl, new)
    if new != text:
        if "@/lib/responsive-images" not in new:
            lines = new.splitlines(True)
            insert_at = 0
            # Preserve 'use client' directive + blank line, then imports.
            if lines and lines[0].strip() in ("'use client'", '"use client"'):
                insert_at = 1
                if len(lines) > 1 and not lines[1].strip():
                    insert_at = 2
            # Add after existing import block when possible.
            last_import = None
            for i, line in enumerate(lines):
                if line.startswith("import "):
                    last_import = i
            if last_import is not None:
                insert_at = last_import + 1
            lines.insert(insert_at, IMPORT)
            new = "".join(lines)
        path.write_text(new, encoding="utf-8")
        changed.append(str(path.relative_to(ROOT)))

print("patched", len(changed), "files")
for item in changed:
    print(item)
