'use client'

import { useState, useEffect, useCallback } from 'react'
import { imageSizes, imageSrcSet } from '@/lib/responsive-images'

const slides = [
  { img: '/images/307033505_515019567300167_4558219091365422579_n.jpeg' },
  { img: '/images/SD01-05_Kini_Di_Pasaran.jpeg' },
  { img: '/images/Media-Kit-Template_-BT01_MY_v2_1980_JPG.jpg' },
  { img: '/images/bt11.jpg' },
  { img: '/images/dbt10.jpg' },
  { img: '/images/dss05.jpg' },
  { img: '/images/dpv01.jpg' },
  { img: '/images/wstd-PD.jpg' },
  { img: '/images/wsbp-pd.jpg' },
  { img: '/images/wstd-lycoris.png' },
  { img: '/images/wsbp-Lycoris.png' },
  { img: '/images/ws-uma-td01.jpg' },
  { img: '/images/ws-uma-td2.jpg' },
  { img: '/images/WSBP-Uma.jpg' },
]

const navItems = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Inventory', 'https://inventory.engkodokgames.com/'],
  ['Retailer', '/retailer/'],
  ['News', '/news/'],
  ['Events', '/events/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
  ['LOCATIONS', '/locations/petaling-jaya/'],
]

export default function HomePageClient() {
  const [current, setCurrent] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const main = slides[current]
  const left = slides[(current - 1 + slides.length) % slides.length]
  const right = slides[(current + 1) % slides.length]

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a href="#content" className="neve-skip-link sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>
        <div className="hfg_header site-header relative shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
          {/* DESKTOP NAV — hidden on mobile */}
          <nav className="header--row header-main layout-full-contained nv-navbar max-md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex items-center">
                <div className="flex w-full items-center py-[14px]">
                  <div className="site-logo shrink-0">
                    <a className="brand flex items-center" href="https://engkodokgames.com/" aria-label="Engkodok Games Where games is fun">
                      <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                    </a>
                  </div>
                  <div className="ml-auto">
                    <div className="nv-nav-wrap">
                      <div role="navigation" className="nav-menu-primary" aria-label="Primary Menu">
                        <ul className="flex items-center gap-0 max-md:hidden" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                          {navItems.map(([label, href]) => (
                            <li key={label} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                              <div className="wrap">
                                <a href={href}
                                  className="block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] tracking-normal max-md:px-4 max-md:py-3"
                                  style={{ color: '#14171C' }}>
                                  {label}
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* MOBILE NAV */}
          <nav className="header--row header-main layout-full-contained nv-navbar md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex items-center justify-between py-[14px]">
                <div className="site-logo">
                  <a className="brand flex items-center" href="https://engkodokgames.com/" aria-label="Engkodok Games Where games is fun">
                    <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                  </a>
                </div>
                <button onClick={() => setMobileOpen(!mobileOpen)}
                  className="navbar-toggle flex items-center gap-2 border-0 bg-transparent px-1 py-2 text-sm font-semibold uppercase"
                  style={{ color: '#14171C' }}>
                  <span>Menu</span>
                  <span className="flex flex-col gap-[4px]">
                    <span className="block h-[2px] w-[18px] bg-[#14171C]"></span>
                    <span className="block h-[2px] w-[18px] bg-[#14171C]"></span>
                    <span className="block h-[2px] w-[18px] bg-[#14171C]"></span>
                  </span>
                </button>
              </div>
            </div>
          </nav>

          {/* MOBILE SIDEBAR PANEL */}
          {mobileOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}></div>
              <div className="fixed right-0 top-0 z-50 h-full w-[300px] overflow-y-auto bg-white shadow-lg md:hidden">
                <div className="flex justify-end p-4">
                  <button onClick={() => setMobileOpen(false)} className="navbar-toggle flex items-center gap-2 border-0 bg-transparent px-1 py-2">
                    <span className="flex flex-col gap-[4px]">
                      <span className="block h-[2px] w-[18px] rotate-45 translate-y-[6px] bg-[#14171C]"></span>
                      <span className="block h-[2px] w-[18px] -rotate-45 bg-[#14171C]"></span>
                    </span>
                  </button>
                </div>
                <div className="px-4 pb-8">
                  <div className="mb-6">
                    <form role="search" className="search-form flex border border-gray-300">
                      <input type="search" placeholder="Search for..." className="flex-1 border-0 px-3 py-2 text-sm outline-none" />
                      <button type="submit" className="border-0 bg-transparent px-3 py-2 text-gray-500">
                        <svg width="15" height="15" viewBox="0 0 1792 1792" fill="#666" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {navItems.map(([label, href]) => (
                      <li key={label} className="border-b border-gray-100">
                        <a href={href}
                          className="block py-3 text-[13.6px] font-semibold uppercase leading-[21.76px]"
                          style={{ color: '#14171C' }}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* SLIDER */}
      <div className="n2_clear w-full">
        <div className="n2-section-smartslider fitviconsignore n2_clear w-full" style={{ transform: 'none' }}>
          <div className="relative w-full overflow-hidden bg-black">
            <div className="relative w-full" style={{ aspectRatio: '1920/450' }}>
              {/* Blurred backgrounds */}
              <div className="absolute inset-0 overflow-hidden">
                <img src={left.img} srcSet={imageSrcSet(left.img)} sizes="100vw" alt="Engkodok Games product promotional image" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-sm" />
              </div>
              <div className="relative z-10 mx-auto h-full" style={{ maxWidth: 'min(1200px, 85%)' }}>
                <img src={main.img} srcSet={imageSrcSet(main.img)} sizes="(max-width: 768px) 85vw, 1200px" alt="Engkodok Games product promotional image" className="h-full w-full object-contain" />
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <img src={right.img} srcSet={imageSrcSet(right.img)} sizes="100vw" alt="Engkodok Games product promotional image" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-sm" />
              </div>
              <button onClick={prev} className="absolute left-[15px] top-1/2 z-20 -translate-y-1/2 border-0 bg-transparent p-0 opacity-80 hover:opacity-100 max-sm:left-2" aria-label="previous arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-6 max-sm:h-6">
                  <path d="M18.9958 8.9907c0-.424-.204-.723-.61-.898-.409-.173-.772-.104-1.093.209l-7.006 6.975c-.201.199-.297.437-.286.716 0 .267.096.498.286.689l7.006 7.001c.321.321.684.389 1.093.209.406-.174.61-.482.61-.922V8.9907z" fill="white" opacity="0.8" />
                </svg>
              </button>
              <button onClick={next} className="absolute right-[15px] top-1/2 z-20 -translate-y-1/2 border-0 bg-transparent p-0 opacity-80 hover:opacity-100 max-sm:right-2" aria-label="next arrow">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-6 max-sm:h-6">
                  <path d="M12 8.99c0-.423.204-.722.61-.897.408-.173.772-.104 1.092.21l7.006 6.974c.202.2.298.437.287.716 0 .267-.096.498-.287.69l-7.006 7c-.32.32-.684.39-1.092.21-.406-.175-.61-.483-.61-.923V8.99z" fill="white" opacity="0.8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HOME CONTENT */}
      {/* HOME H1 — visually hidden for SEO */}
      <h1 className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
        Engkodok Games – Trading Card &amp; Hobby Store Malaysia
      </h1>

      <main id="content" className="mx-auto max-w-[1170px] px-[15px]">
        <div className="nv-single-page-wrap col w-full">
          <div className="nv-content-wrap entry-content max-sm:max-w-full" style={{ maxWidth: 1140, width: '100%' }}>

            <div style={{ height: 72 }} aria-hidden="true" className="wp-block-spacer max-sm:h-12"></div>

            {/* PRE-ORDER OPENED */}
            <h2 className="wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]" style={{ fontSize: 50, fontWeight: 600, color: '#14171C', lineHeight: '65px', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>Pre-Order Opened</h2>

            <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
              {[
                { src: '/images/VG-D-BT08-2-1024x576.webp', href: 'https://engkodokgames.com/?page_id=540' },
                { src: '/images/topheader_782_440_dtb06_01.jpeg', href: 'https://engkodokgames.com/about-publish-games/' },
              ].map((item, i) => (
                <figure key={i} className="wp-block-image max-sm:!basis-full" style={{ margin: 0, flex: '1 0 calc(50% - 4.25px)', minWidth: 0 }}>
                  <a href={item.href} className="block">
                    <img decoding="async" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image" className="w-full object-cover" style={{ aspectRatio: '636/324', height: 'auto' }} />
                  </a>
                </figure>
              ))}
            </figure>

            <div style={{ height: 30 }} aria-hidden="true" className="wp-block-spacer"></div>

            <div className="flex justify-end">
              <div className="wp-block-button">
                <a className="wp-block-button__link no-underline inline-block text-center" href="/product/"
                  style={{ backgroundColor: '#32373C', color: '#fff', padding: '16px 35px', fontSize: 16, fontWeight: 700, lineHeight: '25.6px', borderRadius: 0 }}>
                  View More
                </a>
              </div>
            </div>

            <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer max-sm:h-16"></div>

            {/* PRE-ORDER CLOSED */}
            <h2 className="wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]" style={{ fontSize: 50, fontWeight: 600, color: '#14171C', lineHeight: '65px', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>Pre-Order Closed</h2>

            <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
              {[
                { src: '/images/o0tosa_2000x.webp' },
                { src: '/images/saekanofine_1024x1024.webp' },
                { src: '/images/mv_5HY_bp_a.jpg' },
              ].map((item, i) => (
                <figure key={i} className="wp-block-image max-sm:!basis-full" style={{ margin: 0, flex: '1 0 calc(33.33% - 5.67px)', minWidth: 0 }}>
                  <img decoding="async" loading="lazy" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image" className="w-full object-cover" style={{ aspectRatio: '636/324', height: 'auto' }} />
                </figure>
              ))}
            </figure>

            <div style={{ height: 30 }} aria-hidden="true" className="wp-block-spacer"></div>

            <div className="flex justify-end">
              <div className="wp-block-button">
                <a className="wp-block-button__link no-underline inline-block text-center" href="/product/"
                  style={{ backgroundColor: '#32373C', color: '#fff', padding: '16px 35px', fontSize: 16, fontWeight: 700, lineHeight: '25.6px', borderRadius: 0 }}>
                  View More
                </a>
              </div>
            </div>

            <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer max-sm:h-16"></div>

            {/* PRODUCT ON SALE */}
            <h2 className="wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]" style={{ fontSize: 50, fontWeight: 600, color: '#14171C', lineHeight: '65px', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>Product On Sale</h2>

            <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
              {[
                { src: '/images/DTB02_mediakit_banner-1.jpg' },
                { src: '/images/mv_5HY_bp_a.jpg' },
                { src: '/images/topheader_782_440_dtb06_01.jpeg' },
              ].map((item, i) => (
                <figure key={i} className="wp-block-image max-sm:!basis-full" style={{ margin: 0, flex: '1 0 calc(33.33% - 5.67px)', minWidth: 0 }}>
                  <img decoding="async" loading="lazy" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image" className="w-full object-cover" style={{ aspectRatio: '636/324', height: 'auto' }} />
                </figure>
              ))}
            </figure>

            <div style={{ height: 30 }} aria-hidden="true" className="wp-block-spacer"></div>

            <div className="flex justify-end">
              <div className="wp-block-button">
                <a className="wp-block-button__link no-underline inline-block text-center" href="/product/"
                  style={{ backgroundColor: '#32373C', color: '#fff', padding: '16px 35px', fontSize: 16, fontWeight: 700, lineHeight: '25.6px', borderRadius: 0 }}>
                  View More
                </a>
              </div>
            </div>

            <div style={{ height: 100 }} aria-hidden="true" className="wp-block-spacer max-sm:h-16"></div>

            {/* SEO CONTENT — store info for search engines and visitors */}
            <section className="entry-content" style={{ maxWidth: 1140, width: '100%', margin: '0 0 40px' }}>
              <p style={{ fontSize: 17, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '28.9px', margin: '0 0 30px' }}>
                Engkodok Games is a trusted trading card and hobby store based in Petaling Jaya, Malaysia. We specialise in
                Weiss Schwarz, Cardfight!! Vanguard, and Bushiroad trading card game products — from booster packs and trial
                decks to premium collector editions and tournament-legal singles.
              </p>
              <p style={{ fontSize: 17, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '28.9px', margin: '0 0 30px' }}>
                As an authorised distributor for Bushiroad in Malaysia, Engkodok Games supplies retailers nationwide while
                maintaining a physical storefront at Wisma Academy, Seksyen 19, Petaling Jaya. Whether you are a
                competitive player preparing for the next Vanguard Masters Cup or a collector hunting rare Weiss Schwarz
                singles, our team is here to help you find exactly what you need.
              </p>
              <p style={{ fontSize: 17, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '28.9px', margin: '0 0 30px' }}>
                Beyond retail, we host learn-to-play sessions, tournament events, and product launch activations at
                venues across the Klang Valley and beyond. Our mission is to grow the Malaysian trading card community by
                making games accessible, fun, and easy to discover.
              </p>
              <p style={{ fontSize: 17, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '28.9px', margin: '0 0 30px' }}>
                Visit our store in Petaling Jaya, Selangor, or browse our latest pre-orders and on-sale products above.
                From new trial decks to advanced booster boxes, Engkodok Games is your Malaysian destination for
                everything trading card games.
              </p>
            </section>

          </div>
        </div>
      </main>

      <footer className="mt-20 bg-[#14171C] px-4 py-8 text-white">
        <div
          itemScope
          itemType="https://schema.org/Organization"
          className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center"
        >
          <img src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
          <span itemProp="name" className="text-[13px] font-semibold tracking-[0.02em] text-white/90">Engkodok Games</span>
          <div className="text-[12px] leading-relaxed text-white/70">
            <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">L3-09, Wisma Academy, No.4A, Jalan 19/1, Seksyen 19, 46300 Petaling Jaya, Selangor</span>
            </p>
            <p>
              <span itemProp="telephone">+603 2702 2023</span> &middot;{' '}
              <span itemProp="email">info@engkodokgames.com</span>
            </p>
          </div>
          <p className="text-[11px] font-medium tracking-[0.02em] text-white/50">Engkodok Games &copy; 2026</p>
        </div>
      </footer>
    </>
  )
}
