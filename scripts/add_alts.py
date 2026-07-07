import json, re, pathlib
from html import unescape

ROOT = pathlib.Path("/home/azureuser/GitHub/landingpage-engkodokgames")
DATA = json.loads((ROOT / "src/lib/cloned-pages.json").read_text(encoding="utf-8"))
pages = DATA["pages"]

# Alt text mapping based on filename patterns
def alt_for_filename(src: str, page_path: str, page_title: str) -> str:
    """Derive a meaningful alt text from the image filename and page context."""
    name = src.rsplit("/", 1)[-1].lower() if "/" in src else src.lower()

    # Logo images
    if "logo" in name:
        if "cropped-logo-eg" in name or "logo-eg" in name:
            return "Engkodok Games logo"
        if "vg_new_logo" in name:
            return "Cardfight Vanguard logo"
        if "logo-ws" in name:
            return "Weiss Schwarz logo"
        if "logo_sp" in name or "logo-sp" in name:
            return "Weiss Schwarz Schwarz logo"
        return "Game company logo"

    # Icon images
    if "phoneicon" in name:
        return "Phone number icon"
    if "locationicon" in name:
        return "Location map pin icon"
    if "emailicon" in name:
        return "Email address icon"

    # Retailer page icons
    if "formv2" in name:
        return "Retailer form icon"
    if "confirmationv2" in name:
        return "Order confirmation icon"
    if "retailerv2" in name:
        return "Retail partnership icon"
    if "signupv2" in name:
        return "Sign up icon"
    if "sellv2" in name:
        return "Sell products icon"
    if "marketingv2" in name:
        return "Marketing support icon"
    if "preorderv2" in name:
        return "Pre-order service icon"

    # Placeholder
    if "placeholder" in name or "source-image-404" in name:
        return "Product image placeholder"

    # Slider / hero banner images
    if "slider" in src or "topheader" in name:
        # Try to extract a readable description from the filename
        clean = re.sub(r'[_-]+', ' ', name.split(".")[0])
        clean = re.sub(r'\s+', ' ', clean).strip()
        if len(clean) > 4:
            return f"Promotional banner - {clean[:60]}"
        return "Promotional banner image"

    # Event poster images
    if "poster" in name:
        clean = re.sub(r'[_-]+', ' ', name.split(".")[0])
        clean = re.sub(r'\s+', ' ', clean).strip()
        return f"Event poster - {clean[:60]}"
    if "cardfight" in name or "carfight" in name.lower():
        clean = re.sub(r'[_-]+', ' ', name.split(".")[0])
        return f"Cardfight Vanguard event poster - {clean[:60]}"

    # Product images - extract product code/name
    product_patterns = [
        (r'(bt\d+)', r'Cardfight Vanguard Booster \1'),
        (r'(dbt\d+)', r'Cardfight Vanguard D Booster \1'),
        (r'(dss\d+)', r'Cardfight Vanguard D Start Deck \1'),
        (r'(dpv\d+)', r'Cardfight Vanguard D Promo \1'),
        (r'(dtb\d+)', r'Cardfight Vanguard D Trial Deck \1'),
        (r'(vs\d+)', r'Cardfight Vanguard \1 product'),
        (r'(td\d+)', r'Cardfight Vanguard Trial Deck \1'),
        (r'(dlbt\d+)', r'Cardfight Vanguard D Lyrical Booster \1'),
        (r'(dvs\d+)', r'Cardfight Vanguard D Trial Deck \1'),
        (r'(wstd)', r'Weiss Schwarz Trial Deck'),
        (r'(wsbp)', r'Weiss Schwarz Booster Pack'),
        (r'uma', r'Weiss Schwarz Uma Musume'),
        (r'lycoris', r'Weiss Schwarz Lycoris Recoil'),
    ]
    for pattern, template in product_patterns:
        m = re.search(pattern, name)
        if m:
            clean = re.sub(r'[_-]+', ' ', name.split(".")[0])
            return f"{template} - {clean[:40]}"

    # About page image
    if "aboutuspic" in name:
        return "Engkodok Games office and team photo"

    # "Learn 2 Play" event flyer
    if "belajar" in name or "fbjom" in name:
        return "Learn to Play Cardfight Vanguard event flyer"

    # News/product images with recognizable names
    known = {
        "fb-price-banner2": "Product price announcement banner",
        "media-kit-template": "Product media kit banner",
        "1920-x-1080-px": "Product background image",
        "1920-x-1080px": "Product background image",
        "1920-x-1080-px-2": "Product background image",
        "playset_date_a_live_booster": "Date A Live booster pack playset",
        "saekanofine": "Saekano Weiss Schwarz product image",
        "o0tosa": "Otonose product image",
        "mv_5hy_bp": "5HY Booster Pack promotional image",
        "bt11": "Cardfight Vanguard BT11 product image",
        "dbt10": "Cardfight Vanguard DBT10 product image",
        "dbt05_main": "Cardfight Vanguard DBT05 product image",
        "product24273-large": "Weiss Schwarz product image",
        "dlbt02_main": "Cardfight Vanguard DLBT02 product image",
        "vs06": "Cardfight Vanguard VS06 product image",
        "dtd01_main": "Cardfight Vanguard DTD01 product image",
        "dtd02_main": "Cardfight Vanguard DTD02 product image",
        "dtd03_main": "Cardfight Vanguard DTD03 product image",
        "dvs05_main": "Cardfight Vanguard DVS05 product image",
        "dvs06_main": "Cardfight Vanguard DVS06 product image",
        "sd01-05_kini_di_pasaran": "Slider - SD01-05 available now promotion",
        "307033505_515019567300167": "Slider - Cardfight Vanguard promotion",
        "mediakit-template_bt01": "BT01 media kit banner",
    }
    stem = name.rsplit(".", 1)[0] if "." in name else name
    for key, alt in known.items():
        if key in name:
            return alt

    # Fallback: use filename as descriptive text
    clean = re.sub(r'[_-]+', ' ', stem)
    clean = re.sub(r'\s+', ' ', clean).strip()
    clean = clean[:80]
    if len(clean) > 5:
        return f"{clean}"
    # Last resort: page context
    return f"{page_title} - image"


def fix_alt_in_html(html: str, page_path: str, page_title: str) -> tuple[str, int]:
    """Fix alt attributes in all img tags within HTML string. Returns (fixed_html, count)."""
    count = 0

    def repl(m):
        nonlocal count
        tag = m.group(0)
        alt_m = re.search(r'alt=("[^"]*"|\'[^\']*\')', tag)
        src_m = re.search(r'src="([^"]*)"', tag)
        src = src_m.group(1) if src_m else ""

        if alt_m:
            # Has alt attribute - check if empty
            alt_val = alt_m.group(1).strip('"\'')
            if not alt_val:
                # Empty alt - fill it in
                new_alt = alt_for_filename(src, page_path, page_title)
                # Replace the empty alt with our value
                if alt_m.group(1).startswith('"'):
                    tag = tag.replace(alt_m.group(0), f'alt="{new_alt}"')
                else:
                    tag = tag.replace(alt_m.group(0), f"alt='{new_alt}'")
                count += 1
        else:
            # No alt attribute - add one
            new_alt = alt_for_filename(src, page_path, page_title)
            tag = tag.replace("<img", f'<img alt="{new_alt}"')
            count += 1
        return tag

    fixed = re.sub(r'<img\s+[^>]*/?>', repl, html, flags=re.I)
    return fixed, count


total_fixed = 0
for p in pages:
    fixed_html, fixed = fix_alt_in_html(p["html"], p["path"], p["title"])
    if fixed:
        p["html"] = fixed_html
        total_fixed += fixed
        print(f"  [{p['path']}] fixed {fixed} images")

print(f"\nTotal images fixed: {total_fixed}")

# Save updated JSON
(DATA_path := ROOT / "src/lib/cloned-pages.json").write_text(json.dumps(DATA, ensure_ascii=False), encoding="utf-8")
print(f"Updated {DATA_path}")
