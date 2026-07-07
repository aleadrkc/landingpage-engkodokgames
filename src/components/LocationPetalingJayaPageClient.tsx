'use client'

/* eslint-disable @next/next/no-img-element */
import { SiteFooter } from './SiteFooter'
import { EventSchema } from './EventSchema'
import { imageSizes, imageSrcSet } from '@/lib/responsive-images'

const MAP_EMBED = 'https://www.google.com/maps?q=L3-09+Wisma+Academy+Jalan+19/1+Seksyen+19+46300+Petaling+Jaya+Selangor&output=embed'

export default function LocationPetalingJayaPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'Engkodok Games',
            image: 'https://demolandingengkodoggames.z48.web.core.windows.net/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png',
            telephone: '+603 2702 2023',
            email: 'info@engkodokgames.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'L3-09, Wisma Academy, No.4A, Jalan 19/1, Seksyen 19',
              addressLocality: 'Petaling Jaya',
              addressRegion: 'Selangor',
              postalCode: '46300',
              addressCountry: 'MY',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 3.116,
              longitude: 101.641,
            },
            url: 'https://demolandingengkodoggames.z48.web.core.windows.net/locations/petaling-jaya/',
            priceRange: '$$',
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '10:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '10:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '10:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '10:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '10:00', closes: '19:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '17:00' },
            ],
          }, null, 2),
        }}
      />

      {/* HEADER */}
      <header className="header">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>
        <div className="hfg_header site-header relative shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
          <nav className="header--row header-main layout-full-contained nv-navbar max-md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex w-full items-center py-[14px]">
                <div className="site-logo shrink-0">
                  <a className="brand flex items-center" href="/" aria-label="Engkodok Games Where games is fun">
                    <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                  </a>
                </div>
                <div className="ml-auto">
                  <ul className="flex items-center gap-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {navItems.map(([label, href]) => (
                      <li key={label} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        <a href={href}
                          className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === 'LOCATIONS' ? 'text-[#e11b22]' : ''}`}
                          style={{ color: label === 'LOCATIONS' ? '#e11b22' : '#14171C' }}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="header--row header-main layout-full-contained nv-navbar md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex items-center justify-between py-[14px]">
                <a className="brand flex items-center" href="/" aria-label="Engkodok Games Where games is fun">
                  <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="content" className="neve-main">
        <div className="mx-auto max-w-[1170px] px-[15px] py-12">
          <h1 className="mb-8 text-center" style={{ fontSize: 50, fontWeight: 600, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '65px', margin: '0 0 30px' }}>
            Engkodok Games — Petaling Jaya
          </h1>

          <div className="flex flex-col gap-12 md:flex-row">
            {/* LEFT: Store info */}
            <div className="md:w-1/2" style={{ fontFamily: 'Poppins, Arial, Helvetica, sans-serif', color: '#14171C' }}>
              <div style={{ fontSize: 17, lineHeight: '28.9px', marginBottom: 30 }}>
                <p>Visit our store at Wisma Academy in Seksyen 19, Petaling Jaya — the premier destination for trading card game enthusiasts in the Klang Valley.</p>
                <p>We stock the latest Weiss Schwarz, Cardfight!! Vanguard, and Bushiroad products. Whether you are a seasoned player looking for competitive singles or a newcomer wanting to learn, our friendly staff is ready to help.</p>
                <p>Engkodok Games is also Malaysia's authorised distributor for Bushiroad trading card games, supplying retailers across the country.</p>
              </div>

              <div className="mb-6 flex items-start gap-3" style={{ fontSize: 17, lineHeight: '28.9px' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>&#128205;</span>
                <div>
                  <strong>Address</strong><br />
                  L3-09, Wisma Academy<br />
                  No.4A, Jalan 19/1, Seksyen 19<br />
                  46300 Petaling Jaya, Selangor
                </div>
              </div>

              <div className="mb-6 flex items-start gap-3" style={{ fontSize: 17, lineHeight: '28.9px' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>&#128222;</span>
                <div>
                  <strong>Phone</strong><br />
                  <a href="tel:+60327022023" style={{ color: '#501c60', textDecoration: 'none' }}>+603 2702 2023</a>
                </div>
              </div>

              <div className="mb-6 flex items-start gap-3" style={{ fontSize: 17, lineHeight: '28.9px' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>&#128231;</span>
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:info@engkodokgames.com" style={{ color: '#501c60', textDecoration: 'none' }}>info@engkodokgames.com</a>
                </div>
              </div>

              <div className="mb-6 flex items-start gap-3" style={{ fontSize: 17, lineHeight: '28.9px' }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>&#128338;</span>
                <div>
                  <strong>Opening Hours</strong><br />
                  Mon–Fri: 10:00 AM – 7:00 PM<br />
                  Saturday: 10:00 AM – 6:00 PM<br />
                  Sunday: 11:00 AM – 5:00 PM
                </div>
              </div>
            </div>

            {/* RIGHT: Map */}
            <div className="md:w-1/2">
              <iframe
                title="Engkodok Games location on Google Maps"
                src={MAP_EMBED}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}

const navItems: [string, string][] = [
  ['HOME', '/'],
  ['PRODUCT', '/product/'],
  ['INVENTORY', 'https://inventory.engkodokgames.com/'],
  ['RETAILER', '/retailer/'],
  ['NEWS', '/news/'],
  ['EVENTS', '/events/'],
  ['ABOUT', '/about/'],
  ['CONTACT', '/contact/'],
  ['LOCATIONS', '/locations/petaling-jaya/'],
]
