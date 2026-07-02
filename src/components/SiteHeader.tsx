import Link from 'next/link';
import { assets, navItems } from '@/lib/site-data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Engkodok Games home">
          <img src={assets.logo} alt="Engkodok Games" />
          <span className="brand-text">Where games is fun</span>
        </Link>
        <nav className="main-nav" aria-label="Primary Menu">
          {navItems.map((item) => (
            item.href.startsWith('http')
              ? <a key={item.href} href={item.href}>{item.label}</a>
              : <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
