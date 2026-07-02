import json
import pathlib

root = pathlib.Path(__file__).resolve().parents[1]
missing = [
    '/cloned-assets/wp-content/uploads/2022/07/KGL_636-324a-1-300x153.jpg',
    '/cloned-assets/wp-content/uploads/2022/07/KGL_636-324a-1.jpg',
    '/cloned-assets/wp-content/uploads/2022/07/KGL_636-324a-300x153.jpg',
    '/cloned-assets/wp-content/uploads/2022/07/KGL_636-324a.jpg',
    '/cloned-assets/wp-content/uploads/2022/07/prd2_636-324_a-300x153.jpg',
    '/cloned-assets/wp-content/uploads/2022/07/prd2_636-324_a.jpg',
]
ph_dir = root / 'public/cloned-assets/placeholders'
ph_dir.mkdir(parents=True, exist_ok=True)
svg_636 = '<svg xmlns="http://www.w3.org/2000/svg" width="636" height="324" viewBox="0 0 636 324"><rect width="636" height="324" fill="#f5f5f5"/><rect x="1" y="1" width="634" height="322" fill="none" stroke="#d0d0d0" stroke-width="2"/><text x="318" y="150" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#666">Source image unavailable</text><text x="318" y="182" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#888">404 at origin</text></svg>'
svg_300 = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="153" viewBox="0 0 300 153"><rect width="300" height="153" fill="#f5f5f5"/><rect x="1" y="1" width="298" height="151" fill="none" stroke="#d0d0d0" stroke-width="2"/><text x="150" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#666">Source image unavailable</text><text x="150" y="91" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#888">404 at origin</text></svg>'
(ph_dir / 'source-image-404-636x324.svg').write_text(svg_636, encoding='utf-8')
(ph_dir / 'source-image-404-300x153.svg').write_text(svg_300, encoding='utf-8')

data_path = root / 'src/lib/cloned-pages.json'
data = json.loads(data_path.read_text(encoding='utf-8'))
for page in data['pages']:
    html = page['html']
    for ref in missing:
        replacement = '/cloned-assets/placeholders/source-image-404-300x153.svg' if '300x153' in ref else '/cloned-assets/placeholders/source-image-404-636x324.svg'
        html = html.replace(ref, replacement)
    page['html'] = html
data_path.write_text(json.dumps(data, ensure_ascii=False), encoding='utf-8')

manifest = root / 'docs/research/ASSET_MANIFEST.md'
manifest.write_text(
    manifest.read_text(encoding='utf-8')
    + '\n## Source 404 placeholders\n\nThe origin returned 404 for six referenced product images containing `KGL_636` / `prd2_636`; local SVG placeholders were added and references were rewired to avoid broken image icons while preserving layout dimensions.\n',
    encoding='utf-8',
)
print('rewired missing source 404 assets to placeholders')
