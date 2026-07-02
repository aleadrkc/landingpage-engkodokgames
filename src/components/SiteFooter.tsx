import { assets } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-inner">
        <img src={assets.logo} alt="Engkodok Games" />
        <p className="footer-title">Engkodok Games © 2026</p>
      </div>
    </footer>
  );
}
