'use client'

const navItems = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Inventory', 'https://inventory.engkodokgames.com/'],
  ['Retailer', '/retailer/'],
  ['News', '/news/'],
  ['Events', '/events/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
]

export default function AboutPageClient() {
  return (
    <>
      <header className="header">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>
        <div className="hfg_header site-header relative shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
          <nav className="header--row header-main layout-full-contained nv-navbar max-md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex w-full items-center py-[14px]">
                <div className="site-logo shrink-0">
                  <a className="brand flex items-center" href="/" aria-label="Engkodok Games Where games is fun">
                    <img width="200" height="215" src="/images/cropped-Logo-EG.png" alt="" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                  </a>
                </div>
                <div className="ml-auto">
                  <ul className="flex items-center gap-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {navItems.map(([label, href]) => (
                      <li key={label} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        <a
                          href={href}
                          className="block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px]"
                          style={{ color: label === 'About' ? '#e11b22' : '#14171C' }}
                        >
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
                  <img width="200" height="215" src="/images/cropped-Logo-EG.png" alt="" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                </a>
                <button type="button" className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#14171C]" aria-label="Navigation Menu">
                  <span>Menu</span>
                  <span className="flex flex-col gap-[4px]">
                    <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                    <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                    <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="content" className="neve-main">
        <div className="container single-page-container mx-auto max-w-[1170px] px-[15px]">
          <div className="row">
            <div className="nv-single-page-wrap col">
              <div className="nv-content-wrap entry-content">
                <div
                  className="wp-block-cover alignfull relative flex items-center overflow-hidden"
                  style={{ minHeight: '600px', aspectRatio: 'unset', backgroundColor: '#fbfbfb' }}
                >
                  <span aria-hidden="true" className="wp-block-cover__background absolute inset-0 bg-[#fbfbfb] opacity-100" />
                  <div className="wp-block-cover__inner-container relative z-10 w-full">
                    <div className="wp-block-group">
                      <div className="wp-block-group__inner-container">
                        <div style={{ height: 10 }} aria-hidden="true" className="wp-block-spacer" />

                        <div
                          className="wp-block-columns are-vertically-aligned-center flex flex-col md:flex-row"
                          style={{ gap: '34px', margin: '0 0 29.75px', padding: 0 }}
                        >
                          <div className="wp-block-column is-vertically-aligned-center" style={{ flexBasis: '50%' }}>
                            <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                              <img
                                fetchPriority="high"
                                decoding="async"
                                width={1024}
                                height={682}
                                src="/images/AboutUsPic-1024x682.png"
                                alt=""
                                className="wp-image-130 h-auto w-full"
                                style={{ aspectRatio: '1024/682' }}
                              />
                            </figure>
                          </div>

                          <div className="wp-block-column is-vertically-aligned-center" style={{ flexBasis: '50%' }}>
                            <h2
                              className="has-neve-text-color-color has-text-color wp-block-heading"
                              style={{
                                fontSize: '50px',
                                fontWeight: 600,
                                color: '#14171C',
                                fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                lineHeight: '65px',
                                margin: '0 0 30px',
                              }}
                            >
                              Our Story
                            </h2>

                            <p
                              className="has-neve-text-color-color has-text-color has-medium-font-size wp-block-paragraph"
                              style={{
                                fontSize: '20px',
                                fontWeight: 400,
                                color: '#14171C',
                                fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                lineHeight: '28.9px',
                                margin: '0 0 30px',
                              }}
                            >
                              Are there any leftovers in the kitchen? What are the expectations but technologically savvy.
                            </p>

                            <p
                              className="has-neve-text-color-color has-text-color has-small-font-size wp-block-paragraph"
                              style={{
                                fontSize: '13px',
                                fontWeight: 400,
                                color: '#14171C',
                                fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                lineHeight: '28.9px',
                                margin: '0 0 30px',
                              }}
                            >
                              <strong>
                                Here at Engkodok Games continue to strive towards excellency in Bushiroad’s trading card game – Cardfight!! Vanguard &amp; Weiss Schwarz. Engkodok Games also aims to be the catalyst in game publishing regionally across Malaysia.
                                <br />
                                With our heavy focus on publishing &amp; distributing our international brands locally, Engkodok Games will deliver a massive impact to the trading card community in Malaysia.
                              </strong>
                            </p>
                          </div>
                        </div>

                        <div style={{ height: 10 }} aria-hidden="true" className="wp-block-spacer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 bg-[#14171C] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center">
          <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
          <p className="text-[13px] font-medium tracking-[0.02em] text-white/80">Engkodok Games © 2026</p>
        </div>
      </footer>
    </>
  )
}
