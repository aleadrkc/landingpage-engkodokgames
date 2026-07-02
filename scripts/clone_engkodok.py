import json
import os
import pathlib
import re
from html import unescape
from html.parser import HTMLParser
from urllib.parse import parse_qs, unquote, urljoin, urlparse

import requests

BASE = 'https://engkodokgames.com/'
ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
ASSET_ROOT = PUBLIC / 'cloned-assets'
SRCHTML = ROOT / 'references' / 'source-html'
DOCS = ROOT / 'docs' / 'research'
for p in [ASSET_ROOT, SRCHTML, DOCS, ROOT / 'src' / 'lib', ROOT / 'src' / 'components', ROOT / 'src' / 'app' / '[[...slug]]']:
    p.mkdir(parents=True, exist_ok=True)

SITEMAPS = ['https://engkodokgames.com/page-sitemap.xml', 'https://engkodokgames.com/tribe_events-sitemap.xml']

urls = []
for sm in SITEMAPS:
    txt = requests.get(sm, timeout=30).text
    for loc in re.findall(r'<loc>(.*?)</loc>', txt):
        loc = unescape(loc.strip())
        if loc.startswith(BASE) and loc not in urls and 'inventory.engkodokgames.com' not in loc:
            urls.append(loc)
print('URLs', len(urls))
for u in urls:
    print(u)


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.styles = []
        self.icons = []
        self.imgs = []
        self.hrefs = []
        self.title = ''
        self._title = False

    def handle_starttag(self, tag, attrs):
        d = {k.lower(): v for k, v in attrs}
        if tag == 'link' and d.get('href'):
            rel = (d.get('rel') or '').lower()
            if 'stylesheet' in rel:
                self.styles.append(d['href'])
            if 'icon' in rel or 'manifest' in rel:
                self.icons.append((rel, d['href']))
        if tag == 'img':
            if d.get('src'):
                self.imgs.append(d['src'])
            if d.get('srcset'):
                for part in d['srcset'].split(','):
                    self.imgs.append(part.strip().split()[0])
        if tag == 'a' and d.get('href'):
            self.hrefs.append(d['href'])
        if tag == 'title':
            self._title = True

    def handle_data(self, data):
        if self._title:
            self.title += data

    def handle_endtag(self, tag):
        if tag == 'title':
            self._title = False


def slug_for_url(u: str) -> str:
    return urlparse(u).path.strip('/')


def local_asset_url(url: str) -> str:
    if not url or url.startswith(('data:', '#', 'mailto:', 'tel:')):
        return url
    full = urljoin(BASE, url)
    p = urlparse(full)
    if p.netloc not in ('engkodokgames.com', 'www.engkodokgames.com'):
        return url
    raw = unquote(p.path.lstrip('/')) or 'index'
    safe = '/'.join(re.sub(r'[^A-Za-z0-9._-]+', '-', part) for part in raw.split('/'))
    return '/cloned-assets/' + safe


def download(url: str):
    if not url or url.startswith(('data:', '#', 'mailto:', 'tel:')):
        return None
    full = urljoin(BASE, url)
    p = urlparse(full)
    if p.netloc not in ('engkodokgames.com', 'www.engkodokgames.com'):
        return None
    rel = local_asset_url(full).replace('/cloned-assets/', '')
    dest = ASSET_ROOT / rel
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        r = requests.get(full, timeout=30)
        if r.status_code != 200:
            print('asset status', r.status_code, full)
            return None
        dest.write_bytes(r.content)
        return dest
    except Exception as e:
        print('asset fail', full, e)
        return None


def rewrite_internal_href(href: str) -> str:
    if not href or href.startswith(('#', 'mailto:', 'tel:')):
        return href
    full = urljoin(BASE, href)
    p = urlparse(full)
    if p.netloc == 'inventory.engkodokgames.com':
        return full
    if p.netloc not in ('engkodokgames.com', 'www.engkodokgames.com'):
        return href
    qs = parse_qs(p.query)
    if qs.get('page_id') == ['540']:
        return '/product/'
    if qs.get('pagename') == ['contact']:
        return '/contact-2/'
    if qs.get('post_type') == ['tribe_events']:
        return '/events/'
    path = p.path or '/'
    return path if path.endswith('/') or '.' in path.split('/')[-1] else path + '/'


def rewrite_html(html: str) -> str:
    html = re.sub(r'<script\b[^>]*>.*?</script>', '', html, flags=re.I | re.S)
    html = re.sub(r'<noscript\b[^>]*>.*?</noscript>', '', html, flags=re.I | re.S)

    def attr_repl(m):
        attr, q, val = m.group(1), m.group(2), m.group(3)
        low = attr.lower()
        if low in ('src', 'data-src'):
            new = local_asset_url(val)
        elif low == 'srcset':
            out = []
            for part in val.split(','):
                bits = part.strip().split()
                if bits:
                    bits[0] = local_asset_url(bits[0])
                out.append(' '.join(bits))
            new = ', '.join(out)
        elif low == 'href':
            if re.search(r'\.(png|jpe?g|gif|webp|svg|ico|css|js|pdf)(\?|$)', val, re.I):
                new = local_asset_url(val)
            else:
                new = rewrite_internal_href(val)
        else:
            new = val
        return f'{attr}={q}{new}{q}'

    html = re.sub(r'\b(src|srcset|href|data-src)=("|\')([^"\']+)(?:\2)', attr_repl, html, flags=re.I)

    def style_url(m):
        quote = m.group(1) or ''
        url = m.group(2).strip()
        return f'url({quote}{local_asset_url(url)}{quote})'

    html = re.sub(r'url\((?:(["\'])?)([^)"\']+)(?:\1)?\)', style_url, html, flags=re.I)
    return html


pages = []
all_styles = []
all_assets = []
for url in urls:
    r = requests.get(url, timeout=30)
    print('page', r.status_code, url, len(r.text))
    raw = r.text
    slug = slug_for_url(url)
    (SRCHTML / (slug.replace('/', '__') or 'home')).with_suffix('.html').write_text(raw, encoding='utf-8')
    parser = LinkParser()
    parser.feed(raw)
    for s in parser.styles:
        full = urljoin(url, s)
        if full not in all_styles:
            all_styles.append(full)
    for _, ico in parser.icons:
        all_assets.append(ico)
    for img in parser.imgs:
        all_assets.append(img)
    body_match = re.search(r'<body\b([^>]*)>(.*?)</body>', raw, flags=re.I | re.S)
    attrs = body_match.group(1) if body_match else ''
    body = body_match.group(2) if body_match else raw
    cls = ''
    m = re.search(r'class=("|\')([^"\']*)\1', attrs, flags=re.I)
    if m:
        cls = m.group(2)
    body = rewrite_html(body)
    title = unescape(parser.title.strip() or 'Engkodok Games')
    pages.append({'path': '/' + slug + '/' if slug else '/', 'slug': slug, 'title': title, 'bodyClass': cls, 'html': body})
    for u in re.findall(r'url\((?:["\']?)([^)"\']+)', raw):
        all_assets.append(u)

local_styles = []
for style_url in all_styles:
    dest = download(style_url)
    if not dest:
        continue
    css = dest.read_text(encoding='utf-8', errors='ignore')

    def css_url_repl(m):
        q = m.group(1) or ''
        u = m.group(2).strip()
        if u.startswith('data:'):
            return m.group(0)
        full = urljoin(style_url, u)
        download(full)
        return f'url({q}{local_asset_url(full)}{q})'

    css2 = re.sub(r'url\((?:(["\'])?)([^)"\']+)(?:\1)?\)', css_url_repl, css, flags=re.I)
    if css2 != css:
        dest.write_text(css2, encoding='utf-8')
    local_styles.append('/cloned-assets/' + str(dest.relative_to(ASSET_ROOT)).replace(os.sep, '/'))

for sm in SITEMAPS:
    txt = requests.get(sm, timeout=30).text
    all_assets += re.findall(r'<image:loc>(.*?)</image:loc>', txt)
for a in sorted(set(all_assets)):
    download(a)

icons = []
for ico in sorted(set([a for a in all_assets if re.search(r'(favicon|cropped-57-px|32x32|192x192|180x180|apple)', a, re.I)])):
    loc = local_asset_url(ico)
    if loc.startswith('/cloned-assets/'):
        icons.append(loc)

(ROOT / 'src' / 'lib' / 'cloned-pages.json').write_text(json.dumps({'pages': pages, 'styles': local_styles, 'icons': icons}, ensure_ascii=False), encoding='utf-8')
(DOCS / 'SOURCE_URLS.md').write_text('# Source URLs\n\n' + '\n'.join(f'- {u}' for u in urls) + '\n\nInventory skipped as requested: https://inventory.engkodokgames.com/ remains an external anchor.\n', encoding='utf-8')
(DOCS / 'ASSET_MANIFEST.md').write_text('# Asset Manifest\n\nStylesheets:\n' + '\n'.join(f'- {s}' for s in local_styles) + '\n\nAssets under `public/cloned-assets/` mirror Engkodok public media, CSS, icons, and favicon assets.\n', encoding='utf-8')
(ROOT / 'src' / 'components' / 'BodyClass.tsx').write_text("""'use client';

import { useEffect } from 'react';

export function BodyClass({ className }: { className: string }) {
  useEffect(() => {
    const previous = document.body.className;
    document.body.className = className;
    return () => { document.body.className = previous; };
  }, [className]);
  return null;
}
""", encoding='utf-8')

page_tsx = """import { notFound } from 'next/navigation';
import data from '@/lib/cloned-pages.json';
import { BodyClass } from '@/components/BodyClass';

type ClonedPage = {
  path: string;
  slug: string;
  title: string;
  bodyClass: string;
  html: string;
};

const pages = data.pages as ClonedPage[];

function normalize(slug?: string[]) {
  return (slug ?? []).join('/').replace(/^\\/+|\\/+$/g, '');
}

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug ? page.slug.split('/') : undefined }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const key = normalize(slug);
  const page = pages.find((item) => item.slug === key) ?? pages.find((item) => item.slug === '');
  return {
    title: page?.title ?? 'Engkodok Games',
    description: 'Static UI clone of Engkodok Games.',
    icons: data.icons.length ? { icon: data.icons[0], apple: data.icons.find((icon) => icon.includes('180x180')) ?? data.icons[0] } : undefined,
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const key = normalize(slug);
  const page = pages.find((item) => item.slug === key);

  if (!page) {
    notFound();
  }

  return (
    <>
      <BodyClass className={page.bodyClass} />
      <div className=\"eg-clone-root\" dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
"""
(ROOT / 'src' / 'app' / '[[...slug]]' / 'page.tsx').write_text(page_tsx, encoding='utf-8')

styles_links = '\n'.join([f'        <link rel="stylesheet" href="{s}" />' for s in local_styles])
icon_links = '\n'.join([f'        <link rel="icon" href="{icons[0]}" />' if icons else ''])
layout = f'''import type {{ Metadata }} from "next";
import "./globals.css";

export const metadata: Metadata = {{
  title: "Engkodok Games",
  description: "Static UI clone of Engkodok Games.",
}};

export default function RootLayout({{ children }}: Readonly<{{ children: React.ReactNode }}>) {{
  return (
    <html lang="en-US">
      <head>
{icon_links}
{styles_links}
      </head>
      <body>{{children}}</body>
    </html>
  );
}}
'''
(ROOT / 'src' / 'app' / 'layout.tsx').write_text(layout, encoding='utf-8')
(ROOT / 'src' / 'app' / 'globals.css').write_text('''@import "tailwindcss";

html, body {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
}

.eg-clone-root {
  min-height: 100vh;
}

.eg-clone-root img {
  max-width: 100%;
}
''', encoding='utf-8')
try:
    (ROOT / 'src' / 'app' / 'page.tsx').unlink()
except FileNotFoundError:
    pass
(ROOT / 'README.md').write_text('''# landingpage-engkodokgames

Next.js UI-only clone of https://engkodokgames.com/.

## Scope

- Clones Engkodok Games public pages from the sitemap into native Next.js App Router routes.
- Downloads public visible assets, CSS, and favicon assets into `public/cloned-assets/`.
- Keeps `https://inventory.engkodokgames.com/` as an external anchor, per instruction.
- Backend, WordPress admin, WooCommerce data operations, form submissions, and inventory subdomain are out of scope.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

Do not run local production builds unless explicitly instructed; this repo was prepared with the no-build/RAM-safe rule.
''', encoding='utf-8')
(ROOT / 'AGENTS.md').write_text('''<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules

- NEKO website cloner repo for https://engkodokgames.com/.
- Preserve 1:1 UI clone intent; do not redesign unless instructed.
- Keep `https://inventory.engkodokgames.com/` as an external anchor.
- Do not implement backend/WordPress/WooCommerce behavior unless explicitly requested.
- Do not run local production builds unless explicitly instructed; mind RAM.
- Public cloned assets live under `public/cloned-assets/`.
''', encoding='utf-8')
print('pages written', len(pages))
print('styles', len(local_styles))
print('icons', icons[:5])
print('asset files', sum(1 for item in ASSET_ROOT.rglob('*') if item.is_file()))
