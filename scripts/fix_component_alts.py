import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
COMPONENTS = ROOT / "src" / "components"

def alt_for(src: str) -> str:
    n = src.lower().rsplit('/', 1)[-1]
    mapping = {
        'cropped-logo-eg.png': 'Engkodok Games logo',
        'vg_new_logo.png': 'Cardfight Vanguard logo',
        'logo-ws.png': 'Weiss Schwarz logo',
        'logo_sp.png': 'Weiss Schwarz Schwarzside logo',
        'phoneicon.png': 'Phone number icon',
        'locationicon.png': 'Location map pin icon',
        'emailicon.png': 'Email address icon',
        'formv2.png': 'Retailer form step icon',
        'confirmationv2.png': 'Retailer confirmation step icon',
        'retailerv2.png': 'Retailer partnership step icon',
        'signupv2.png': 'Retailer sign-up step icon',
        'sellv2.png': 'Sell products support icon',
        'marketingv2.png': 'Marketing support icon',
        'preorderv2.png': 'Pre-order support icon',
        'fb-price-banner2.jpg': 'Cardfight Vanguard Bahasa starter deck price banner',
        'media-kit-template-bt01.jpg': 'Cardfight Vanguard BT01 media kit banner',
        'media-kit-template_-bt01_my_v2_1980_jpg.jpg': 'Cardfight Vanguard BT01 promotional banner',
        'vs05.png': 'Cardfight Vanguard product display VS05',
        'vs06.png': 'Cardfight Vanguard product display VS06',
        'vg-d-bt08-2-1024x576.webp': 'Cardfight Vanguard product banner VG-D-BT08',
        'topheader_782_440_dtb06_01.jpeg': 'Cardfight Vanguard product banner DTB06',
        'o0tosa_2000x.webp': 'Weiss Schwarz product banner',
        'saekanofine_1024x1024.webp': 'Weiss Schwarz Saekano Fine product banner',
        'mv_5hy_bp_a.jpg': 'Weiss Schwarz 5HY booster pack banner',
        'dtb02_mediakit_banner-1.jpg': 'Cardfight Vanguard DTB02 media kit banner',
        '307033505_515019567300167_4558219091365422579_n.jpeg': 'Cardfight Vanguard promotional slider banner',
        'sd01-05_kini_di_pasaran.jpeg': 'Cardfight Vanguard SD01 to SD05 promotional slider banner',
        'bt11.jpg': 'Cardfight Vanguard BT11 product image',
        'dbt10.jpg': 'Cardfight Vanguard DBT10 product image',
        'dss05.jpg': 'Cardfight Vanguard DSS05 product image',
        'dpv01.jpg': 'Cardfight Vanguard DPV01 product image',
        'wstd-pd.jpg': 'Weiss Schwarz trial deck product image',
        'wsbp-pd.jpg': 'Weiss Schwarz booster pack product image',
        'wstd-lycoris.png': 'Weiss Schwarz Lycoris Recoil trial deck product image',
        'wsbp-lycoris.png': 'Weiss Schwarz Lycoris Recoil booster pack product image',
        'ws-uma-td01.jpg': 'Weiss Schwarz Uma Musume trial deck image',
        'ws-uma-td2.jpg': 'Weiss Schwarz Uma Musume trial deck image',
        'wsbp-uma.jpg': 'Weiss Schwarz Uma Musume booster pack image',
        'aboutuspic-1024x682.png': 'Engkodok Games store and team photo',
        'poster_vmc22_johor-bahru_v7.png': 'Vanguard Masters Cup Johor Bahru event poster',
        'poster_vmc22_2-01-1.png': 'Vanguard Masters Cup 2022 Spring event poster',
        'cardfight-vg-japan.png': 'VMC Kuala Lumpur TAGCC Cardfight Vanguard event poster',
    }
    if n in mapping:
        return mapping[n]
    stem = re.sub(r'[-_]+', ' ', n.rsplit('.', 1)[0]).strip()
    return stem[:90] or 'Engkodok Games image'

def patch_img(match):
    tag = match.group(0)
    if 'alt=""' not in tag:
        return tag
    src = ''
    for pat in [r'src="([^"]+)"', r'src=\{([^}]+)\}']:
        m = re.search(pat, tag)
        if m:
            src = m.group(1)
            break
    if src.startswith('/images/'):
        alt = alt_for(src)
    elif src in ('item.src', 'main.img', 'left.img', 'right.img'):
        alt = 'Engkodok Games product promotional image'
    else:
        alt = 'Engkodok Games image'
    return tag.replace('alt=""', f'alt="{alt}"')

changed=[]
for path in sorted(COMPONENTS.glob('*.tsx')):
    text=path.read_text(encoding='utf-8')
    new=re.sub(r'<img\b[^>]*>', patch_img, text, flags=re.S)
    if new != text:
        path.write_text(new, encoding='utf-8')
        changed.append(str(path.relative_to(ROOT)))
print('patched', len(changed), 'files')
for c in changed:
    print(c)
