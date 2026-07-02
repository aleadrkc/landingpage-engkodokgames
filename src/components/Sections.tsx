import type { Card } from '@/lib/site-data';

type SectionProps = { title: string; cards: Card[]; moreHref?: string; variant?: 'cards' | 'compact' };

export function Hero({ slides }: { slides: Card[] }) {
  const [main, ...rest] = slides;
  return (
    <section className="hero" aria-label="Featured releases">
      <a className="hero-main" href={main.href}>
        <img src={main.image} alt={main.title} />
        <span className="hero-label">Featured</span>
      </a>
      <div className="hero-stack">
        {rest.map((slide) => (
          <a key={slide.title} href={slide.href} className="hero-tile">
            <img src={slide.image} alt={slide.title} />
          </a>
        ))}
      </div>
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
