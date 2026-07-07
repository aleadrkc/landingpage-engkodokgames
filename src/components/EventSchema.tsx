const BASE = 'https://demolandingengkodoggames.z48.web.core.windows.net';

export type EventSchemaProps = {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  locationName: string;
  addressLocality?: string;
  addressRegion?: string;
  image?: string;
  url: string;
  organizerName?: string;
};

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  locationName,
  addressLocality,
  addressRegion,
  image,
  url,
  organizerName = 'Engkodok Games',
}: EventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate ? { endDate } : {}),
    location: {
      '@type': 'Place',
      name: locationName,
      address: {
        '@type': 'PostalAddress',
        ...(addressLocality ? { addressLocality } : {}),
        ...(addressRegion ? { addressRegion } : {}),
        addressCountry: 'MY',
      },
    },
    image: image ? `${BASE}${image.startsWith('/') ? '' : '/'}${image}` : undefined,
    url: `${BASE}${url.startsWith('/') ? '' : '/'}${url}`,
    organizer: {
      '@type': 'Organization',
      name: organizerName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
