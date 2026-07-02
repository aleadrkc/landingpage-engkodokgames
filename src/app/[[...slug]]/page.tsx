import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CardGrid, PageHero } from '@/components/Sections';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { allSlugs, eventCards, newsCards, onSale, pageRecords } from '@/lib/site-data';

const HomePageClient = dynamic(() => import('@/components/HomePageClient'));
const ProductPageClient = dynamic(() => import('@/components/ProductPageClient'));

type Params = { slug?: string[] };

function normalize(slug?: string[]) {
  return (slug ?? []).join('/').replace(/^\/+|\/+$/g, '');
}

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug: slug ? slug.split('/') : undefined }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const key = normalize(slug);
  const record = pageRecords.find((page) => page.slug === key);
  const title = key === '' ? 'Home | Engkodok Games' : key === 'product' ? 'Product | Engkodok Games' : key === 'news-2' ? 'News | Engkodok Games' : key === 'events' ? 'Events | Engkodok Games' : record?.title ?? 'Engkodok Games';
  return {
    title,
    description: 'Engkodok Games static Next.js UI clone rebuilt with native components.',
    icons: { icon: '/cloned-assets/wp-content/uploads/2022/03/cropped-57-px-01-180x180.png' },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const key = normalize(slug);

  if (key === '') return <HomePageClient />;

  return (
    <>
      <SiteHeader />
      <main id="content" className={key === '' ? 'home-page' : undefined}>
        {renderRoute(key)}
      </main>
      {key === '' ? null : <SiteFooter />}
    </>
  );
}

function renderRoute(key: string) {
  if (key === 'product') return <ProductPageClient />;
  if (key === 'news-2') return <NewsPage />;
  if (key === 'events') return <EventsPage />;

  const record = pageRecords.find((page) => page.slug === key);
  if (!record) notFound();

  if (record.kind === 'productDetail') {
    return (
      <article className="detail-page product-detail">
        <PageHero title={record.heading ?? record.title} image={record.image}>
          <p>Product showcase</p>
        </PageHero>
        <div className="text-panel">{record.body?.map((para) => <p key={para}>{para}</p>)}</div>
        <CardGrid title="More Products" cards={onSale.filter((item) => item.title !== record.heading)} moreHref="/product/" variant="compact" />
      </article>
    );
  }

  if (record.kind === 'eventDetail') {
    return (
      <article className="detail-page event-detail">
        <PageHero title={record.heading ?? record.title} image={record.image}>
          <p>Details · Organizer · Venue</p>
        </PageHero>
        <div className="text-panel">{record.body?.map((para) => <p key={para}>{para}</p>)}</div>
        <CardGrid title="Latest Past Events" cards={eventCards} moreHref="/events/" variant="compact" />
      </article>
    );
  }

  return (
    <article className="detail-page simple-page">
      <PageHero title={record.heading ?? record.title} image={record.image} />
      {record.slug === 'retailer-2' ? <RetailerVisuals /> : null}
      {record.slug === 'engkodok-games-latest-news' ? <CardGrid title="Latest News" cards={newsCards} /> : null}
      <div className="text-panel">{record.body?.map((para) => <p key={para}>{para}</p>)}</div>
    </article>
  );
}

function NewsPage() {
  return (
    <>
      <PageHero title="Latest News">
        <p>Announcements, product releases, and community updates.</p>
      </PageHero>
      <CardGrid title="Engkodok Games - Latest News!" cards={newsCards} />
    </>
  );
}

function EventsPage() {
  return (
    <>
      <PageHero title="Events">
        <p>Events Search and Views Navigation · Latest Past Events</p>
      </PageHero>
      <CardGrid title="Latest Past Events" cards={eventCards} />
    </>
  );
}

function RetailerVisuals() {
  const items = [
    ['/cloned-assets/wp-content/uploads/2022/03/FormV2.png', 'Form'],
    ['/cloned-assets/wp-content/uploads/2022/03/ConfirmationV2.png', 'Confirmation'],
    ['/cloned-assets/wp-content/uploads/2022/03/RetailerV2.png', 'Retailer'],
    ['/cloned-assets/wp-content/uploads/2022/03/SellV2.png', 'Sell'],
    ['/cloned-assets/wp-content/uploads/2022/03/MarketingV2.png', 'Marketing'],
    ['/cloned-assets/wp-content/uploads/2022/03/PreOrderV2.png', 'Pre-Order'],
  ];
  return (
    <section className="retailer-visuals">
      {items.map(([src, alt]) => <img key={src} src={src} alt={alt} />)}
    </section>
  );
}
