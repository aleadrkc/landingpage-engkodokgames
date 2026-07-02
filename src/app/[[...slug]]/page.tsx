import { notFound } from 'next/navigation';
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
  return (slug ?? []).join('/').replace(/^\/+|\/+$/g, '');
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
      <div className="eg-clone-root" dangerouslySetInnerHTML={{ __html: page.html }} />
    </>
  );
}
