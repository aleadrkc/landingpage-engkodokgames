import { assets, navItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src={assets.logo} alt="Engkodok Games" />
        <div>
          <p className="footer-title">Engkodok Games</p>
          <p>Where games is fun. Malaysian tabletop and trading card game products, retailers, and events.</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
    </footer>
  );
}
