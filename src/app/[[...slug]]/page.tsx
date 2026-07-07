import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CardGrid, PageHero } from '@/components/Sections';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { allSlugs, eventCards, newsCards, onSale, pageRecords } from '@/lib/site-data';

const HomePageClient = dynamic(() => import('@/components/HomePageClient'));
const ProductPageClient = dynamic(() => import('@/components/ProductPageClient'));
const RetailerPageClient = dynamic(() => import('@/components/RetailerPageClient'));
const NewsPageClient = dynamic(() => import('@/components/NewsPageClient'));
const EventsPageClient = dynamic(() => import('@/components/EventsPageClient'));
const EventVmcKualaLumpurTagccPageClient = dynamic(() => import('@/components/EventVmcKualaLumpurTagccPageClient'));
const EventVanguardMastersCupJohorBahruPageClient = dynamic(() => import('@/components/EventVanguardMastersCupJohorBahruPageClient'));
const EventVanguardMastersCup2022SpringPageClient = dynamic(() => import('@/components/EventVanguardMastersCup2022SpringPageClient'));
const BushiroadSpringFestPageClient = dynamic(() => import('@/components/BushiroadSpringFestPageClient'));
const Lean2PlayCardfightVanguardPageClient = dynamic(() => import('@/components/Lean2PlayCardfightVanguardPageClient'));
const LocationPetalingJayaPageClient = dynamic(() => import('@/components/LocationPetalingJayaPageClient'));
const AboutPageClient = dynamic(() => import('@/components/AboutPageClient'));
const ContactPageClient = dynamic(() => import('@/components/ContactPageClient'));

type Params = { slug?: string[] };

function normalize(slug?: string[]) {
  return (slug ?? []).join('/').replace(/^\/+|\/+$/g, '');
}

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug: slug ? slug.split('/') : undefined }));
}

const pageMeta: Record<string, { title?: string; description: string; image?: string }> = {
  '': {
    description:
      "Malaysia's trusted trading card game store. Shop Weiss Schwarz, Cardfight!! Vanguard, pre-orders, and TCG products at our Petaling Jaya store.",
  },
  product: {
    title: 'Products',
    description:
      'Browse trading card game products at Engkodok Games. Weiss Schwarz, Cardfight!! Vanguard, trial decks, boosters, and pre-order exclusives. Malaysian TCG distributor.',
  },
  retailer: {
    title: 'Retailer',
    description:
      'Become an Engkodok Games retailer. TCG wholesale and retail partnership opportunities across Malaysia. Sign up to carry our products.',
  },
  news: {
    title: 'News',
    description:
      'Latest TCG news, product announcements, and community updates from Engkodok Games, Malaysia.',
  },
  'news-2': {
    title: 'News',
    description:
      'Latest TCG news, product announcements, and community updates from Engkodok Games, Malaysia.',
  },
  events: {
    title: 'Events',
    description:
      'Upcoming and past trading card game events from Engkodok Games — tournaments, learn-to-play sessions, and community meetups in Malaysia.',
  },
  'events/bushiroad-spring-fest': {
    title: 'Bushiroad Spring Fest',
    description:
      'Bushiroad Spring Fest tournament details: Regional Championship structure, team formation rules for VGE and WSE, and prize information in Malaysia.',
    image: '/images/bushiroad-spring-fest.svg',
  },
  'events/lean-2-play-cardfight-vanguard': {
    title: 'Learn 2 Play: Cardfight! Vanguard',
    description:
      'Free learn-to-play event for Cardfight!! Vanguard at GameOn Expo 2022, Pavilion Bukit Jalil. Join Engkodok Games for basic rules and deck demonstrations.',
    image: '/cloned-assets/wp-content/uploads/2022/06/FBJOMBELAJAR_July2022-01.png',
  },
  about: {
    title: 'About',
    description:
      'About Engkodok Games — a Malaysian tabletop and trading card game publisher and distributor making games accessible, fun, and easy to discover.',
  },
  contact: {
    title: 'Contact',
    description:
      'Contact Engkodok Games at our Petaling Jaya store. Call or email us for product, retailer, and community enquiries. Malaysian TCG distributor.',
  },
  'locations/petaling-jaya': {
    title: 'Petaling Jaya Store',
    description:
      'Visit Engkodok Games at Wisma Academy, Seksyen 19, Petaling Jaya. Malaysia\'s trusted trading card game store for Weiss Schwarz, Cardfight!! Vanguard and more.',
    image: '/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png',
  },
};

const BASE = 'https://demolandingengkodoggames.z48.web.core.windows.net';

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const key = normalize(slug);
  const record = pageRecords.find((page) => page.slug === key);
  const meta = pageMeta[key];

  function pageMetaReturn(title: string | undefined, description: string, image?: string) {
    const url = `${BASE}/${key}`.replace(/\/+$/, '') || BASE;
    const ogImageUrl = image
      ? `${BASE}${image.startsWith('/') ? '' : '/'}${image}`
      : `${BASE}/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png`;
    const out: any = { description, alternates: { canonical: url } };
    if (title) out.title = title;
    const ogImage = { url: ogImageUrl, width: 200, height: 215 };
    if (title) {
      out.openGraph = { title, description, url, type: 'article', images: [ogImage] };
      out.twitter = { card: 'summary_large_image', title, description, images: [ogImageUrl] };
    } else {
      out.openGraph = { description, url, images: [ogImage] };
      out.twitter = { card: 'summary_large_image', description, images: [ogImageUrl] };
    }
    return out;
  }

  if (meta) {
    if (meta.title) return pageMetaReturn(meta.title, meta.description, meta.image);
    return pageMetaReturn(undefined, meta.description, meta.image);
  }

  if (record) {
    const pageTitle = record.title.replace(/ \| Engkodok Games$/, '');
    const img = record.kind === 'eventDetail' || record.kind === 'productDetail' ? record.image : undefined;
    return pageMetaReturn(pageTitle, record.body?.[0] ?? '', img);
  }

  return {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const key = normalize(slug);

  if (key === '') return <HomePageClient />;
  if (key === 'product') return <ProductPageClient />;
  if (key === 'retailer') return <RetailerPageClient />;
  if (key === 'news') return <NewsPageClient />;
  if (key === 'events') return <EventsPageClient />;
  if (key === 'event/vmc-kuala-lumpur-tagcc') return <EventVmcKualaLumpurTagccPageClient />;
  if (key === 'event/vanguard-masters-cup-2022-south-malaysia-johor-bahru') return <EventVanguardMastersCupJohorBahruPageClient />;
  if (key === 'event/vanguard-masters-cup-2022-spring') return <EventVanguardMastersCup2022SpringPageClient />;
  if (key === 'events/bushiroad-spring-fest') return <BushiroadSpringFestPageClient />;
  if (key === 'events/lean-2-play-cardfight-vanguard') return <Lean2PlayCardfightVanguardPageClient />;
  if (key === 'about') return <AboutPageClient />;
  if (key === 'contact') return <ContactPageClient />;
  if (key === 'locations/petaling-jaya') return <LocationPetalingJayaPageClient />;

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
  if (key === 'retailer') return <RetailerPageClient />;
  if (key === 'news') return <NewsPageClient />;
  if (key === 'events') return <EventsPageClient />;
  if (key === 'event/vmc-kuala-lumpur-tagcc') return <EventVmcKualaLumpurTagccPageClient />;
  if (key === 'event/vanguard-masters-cup-2022-south-malaysia-johor-bahru') return <EventVanguardMastersCupJohorBahruPageClient />;
  if (key === 'event/vanguard-masters-cup-2022-spring') return <EventVanguardMastersCup2022SpringPageClient />;
  if (key === 'events/bushiroad-spring-fest') return <BushiroadSpringFestPageClient />;
  if (key === 'events/lean-2-play-cardfight-vanguard') return <Lean2PlayCardfightVanguardPageClient />;
  if (key === 'about') return <AboutPageClient />;
  if (key === 'contact') return <ContactPageClient />;
  if (key === 'locations/petaling-jaya') return <LocationPetalingJayaPageClient />;
  if (key === 'news-2') return <NewsPage />;

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

