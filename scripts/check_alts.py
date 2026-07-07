import json, re, pathlib

ROOT = pathlib.Path("/home/azureuser/GitHub/landingpage-engkodokgames")
DATA = json.loads((ROOT / "src/lib/cloned-pages.json").read_text(encoding="utf-8"))
pages = DATA["pages"]

total_imgs = 0
missing_or_empty = 0
for p in pages:
    imgs = re.findall(r'<img[^>]+>', p["html"])
    total_imgs += len(imgs)
    for img in imgs:
        alt_m = re.search(r'alt=("[^"]*"|\'[^\']*\')', img)
        if alt_m:
            alt_val = alt_m.group(1).strip('"\'')
            if not alt_val:
                missing_or_empty += 1
                src_m = re.search(r'src="([^"]*)"', img)
                src = src_m.group(1) if src_m else "(no src)"
                print(f"  [{p['path']}] src={src[:70]} alt=EMPTY")
        else:
            missing_or_empty += 1
            src_m = re.search(r'src="([^"]*)"', img)
            src = src_m.group(1) if src_m else "(no src)"
            print(f"  [{p['path']}] src={src[:70]} alt=MISSING")

print(f"\nTotal: {total_imgs} images, {missing_or_empty} missing/empty alt")
