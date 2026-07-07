import { assets } from '@/lib/site-data';

const ADDRESS = 'L3-09, Wisma Academy, No.4A, Jalan 19/1, Seksyen 19, 46300 Petaling Jaya, Selangor';
const PHONE = '+603 2702 2023';
const EMAIL = 'info@engkodokgames.com';

export function SiteFooter() {
  return (
    <footer className="bg-[#14171C] px-4 py-8 text-white" aria-label="Site footer">
      <div
        itemScope
        itemType="https://schema.org/Organization"
        className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center"
      >
        <img src={assets.logo} width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
        <span itemProp="name" className="text-[13px] font-semibold tracking-[0.02em] text-white/90">Engkodok Games</span>
        <div className="text-[12px] leading-relaxed text-white/70">
          <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="streetAddress">{ADDRESS}</span>
          </p>
          <p>
            <span itemProp="telephone">{PHONE}</span> &middot;{' '}
            <span itemProp="email">{EMAIL}</span>
          </p>
        </div>
        <p className="text-[11px] font-medium tracking-[0.02em] text-white/50">
          Engkodok Games &copy; 2026
        </p>
      </div>
    </footer>
  );
}
