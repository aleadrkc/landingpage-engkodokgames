import type { Card } from '@/lib/site-data';

type SectionProps = { title: string; cards: Card[]; moreHref?: string; variant?: 'cards' | 'compact' };

export function Hero({ slides }: { slides: Card[] }) {
  const [main, ...rest] = slides;
  const left = rest[0] ?? main;
  const right = rest[1] ?? main;
  return (
    <section className="hero" aria-label="Featured releases">
      <button className="hero-arrow hero-arrow-left" type="button" aria-label="previous arrow">‹</button>
      <a className="hero-side hero-side-left" href={left.href} aria-label={left.title}>
        <img src={left.image} alt="Engkodok Games image" />
      </a>
      <a className="hero-main" href={main.href}>
        <img src={main.image} alt={main.title} />
      </a>
      <a className="hero-side hero-side-right" href={right.href} aria-label={right.title}>
        <img src={right.image} alt="Engkodok Games image" />
      </a>
      <button className="hero-arrow hero-arrow-right" type="button" aria-label="next arrow">›</button>
    </section>
  );
}

export function SectionHeading({ title, moreHref }: { title: string; moreHref?: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {moreHref ? <a href={moreHref}>View More</a> : null}
    </div>
  );
}

export function CardGrid({ title, cards, moreHref, variant = 'cards' }: SectionProps) {
  return (
    <section className="content-section">
      <SectionHeading title={title} moreHref={moreHref} />
      <div className={variant === 'compact' ? 'card-grid compact' : 'card-grid'}>
        {cards.map((card) => <ContentCard key={`${card.title}-${card.image}`} card={card} />)}
      </div>
    </section>
  );
}

export function ImageOnlySection({ title, cards, moreHref, columns = 3 }: SectionProps & { columns?: 2 | 3 }) {
  return (
    <section className="home-image-section">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      <div className={columns === 2 ? 'image-tile-grid two' : 'image-tile-grid three'}>
        {cards.map((card) => (
          <a key={`${card.title}-${card.image}`} className="image-tile" href={card.href} aria-label={card.title}>
            <img src={card.image} alt={card.title} />
          </a>
        ))}
      </div>
      {moreHref ? <a className="home-view-more" href={moreHref}>View More</a> : null}
    </section>
  );
}

export function ContentCard({ card }: { card: Card }) {
  return (
    <a className="content-card" href={card.href}>
      <span className="image-wrap"><img src={card.image} alt={card.title} /></span>
      <span className="card-copy">
        {card.meta ? <small>{card.meta}</small> : null}
        <strong>{card.title}</strong>
        {card.excerpt ? <em>{card.excerpt}</em> : null}
      </span>
    </a>
  );
}

export function PageHero({ title, image, children }: { title: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">Engkodok Games</p>
        <h1>{title}</h1>
        {children}
      </div>
      {image ? <img src={image} alt={title} /> : null}
    </section>
  );
}
