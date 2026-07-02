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

export default function RetailerPageClient() {
  return (
    <>
      {/* HEADER (same as homepage) */}
      <header className="header">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>
        <div className="hfg_header site-header relative shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
          <nav className="header--row header-main layout-full-contained nv-navbar max-md:hidden">
            <div className="mx-auto max-w-[1170px] px-[15px]">
              <div className="flex w-full items-center py-[14px]">
                <div className="site-logo shrink-0">
                  <a className="brand flex items-center" href="https://engkodokgames.com/" aria-label="Engkodok Games Where games is fun">
                    <img width="200" height="215" src="/images/cropped-Logo-EG.png" alt="" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                  </a>
                </div>
                <div className="ml-auto">
                  <ul className="flex items-center gap-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {navItems.map(([label, href]) => (
                      <li key={label} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                        <a href={href}
                          className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === 'Retailer' ? 'text-[#e11b22]' : ''}`}
                          style={{ color: label === 'Retailer' ? '#e11b22' : '#14171C' }}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="content" className="neve-main min-h-[70vh]">
        <div className="container mx-auto max-w-[1170px] px-[15px]">
          <div className="row w-full">
            <div className="nv-single-page-wrap col w-full">
              <div className="nv-content-wrap entry-content" style={{ maxWidth: 1140, width: '100%' }}>

                {/* ---- 30px spacer ---- */}
                <div style={{ height: 30 }} aria-hidden="true"></div>

                {/* ---- SIGNUP PROCESS heading ---- */}
                <h3 className="wp-block-heading has-text-align-center"
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#14171C',
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    textAlign: 'center',
                    margin: '0 0 30px',
                    lineHeight: '31.2px',
                  }}>
                  SIGNUP PROCESS
                </h3>

                {/* ---- Steps grid: 2 rows x 2 columns ---- */}
                <div className="wp-block-columns flex flex-wrap" style={{ gap: '34px' }}>
                  {/* Left column */}
                  <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: '34px' }}>
                      {/* Step 1 */}
                      <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                        <figure className="wp-block-image size-full is-style-default" style={{ margin: 0, textAlign: 'center' }}>
                          <img
                            fetchPriority="high"
                            decoding="async"
                            src="/images/FormV2.png"
                            alt=""
                            className="wp-image-272"
                            style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                          />
                          <figcaption style={{
                            fontSize: 15.3,
                            fontWeight: 400,
                            color: '#14171C',
                            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                            textAlign: 'start',
                            margin: '7.65px 0 15.3px',
                            padding: 0,
                          }}>
                            STEP 1
                          </figcaption>
                        </figure>
                      </div>
                      {/* Step 2 */}
                      <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                        <figure className="wp-block-image size-full" style={{ margin: 0, textAlign: 'center' }}>
                          <img
                            decoding="async"
                            src="/images/ConfirmationV2.png"
                            alt=""
                            className="wp-image-268"
                            style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                          />
                          <figcaption style={{
                            fontSize: 15.3,
                            fontWeight: 400,
                            color: '#14171C',
                            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                            textAlign: 'start',
                            margin: '7.65px 0 15.3px',
                            padding: 0,
                          }}>
                            STEP 2
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* Right column */}
                  <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: '34px' }}>
                      {/* Step 3 */}
                      <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                        <figure className="wp-block-image size-full" style={{ margin: 0, textAlign: 'center' }}>
                          <img
                            decoding="async"
                            src="/images/RetailerV2.png"
                            alt=""
                            className="wp-image-269"
                            style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                          />
                          <figcaption style={{
                            fontSize: 15.3,
                            fontWeight: 400,
                            color: '#14171C',
                            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                            textAlign: 'start',
                            margin: '7.65px 0 15.3px',
                            padding: 0,
                          }}>
                            STEP 3
                          </figcaption>
                        </figure>
                      </div>
                      {/* Registration Link */}
                      <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                        <figure className="wp-block-image size-full is-resized" style={{ margin: 0, textAlign: 'center' }}>
                          <a href="https://betobee.co/" target="_blank" rel="noopener noreferrer">
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/images/SignUpV2.png"
                              alt=""
                              className="wp-image-271"
                              style={{ width: 179, height: 203, aspectRatio: '179/203' }}
                            />
                          </a>
                          <figcaption style={{
                            fontSize: 15.3,
                            fontWeight: 400,
                            color: '#14171C',
                            fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                            textAlign: 'start',
                            margin: '7.65px 0 15.3px',
                            padding: 0,
                          }}>
                            Registration Link
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---- PERKS heading ---- */}
                <h3 className="wp-block-heading has-text-align-center"
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#14171C',
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    textAlign: 'center',
                    margin: '0 0 30px',
                    lineHeight: '31.2px',
                  }}>
                  PERKS
                </h3>

                {/* ---- Perks: 5 columns (empty sides, 3 content) ---- */}
                <div className="wp-block-columns flex flex-wrap justify-center" style={{ gap: '34px' }}>
                  {/* Left spacer */}
                  <div className="wp-block-column" style={{ flexBasis: 75, minWidth: 0 }}></div>

                  {/* Sell */}
                  <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <figure className="wp-block-image size-full" style={{ margin: 0, textAlign: 'center' }}>
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/SellV2.png"
                        alt=""
                        className="wp-image-275"
                        style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                      />
                    </figure>
                  </div>

                  {/* Marketing */}
                  <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <figure className="wp-block-image size-full" style={{ margin: 0, textAlign: 'center' }}>
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/MarketingV2.png"
                        alt=""
                        className="wp-image-274"
                        style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                      />
                    </figure>
                  </div>

                  {/* Pre-Order */}
                  <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                    <figure className="wp-block-image size-full" style={{ margin: 0, textAlign: 'center' }}>
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/PreOrderV2.png"
                        alt=""
                        className="wp-image-273"
                        style={{ width: '100%', maxWidth: 372, height: 'auto', aspectRatio: '372/422' }}
                      />
                    </figure>
                  </div>

                  {/* Right spacer */}
                  <div className="wp-block-column" style={{ flexBasis: 75, minWidth: 0 }}></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER (same as product page) */}
      <footer className="bg-[#14171C] text-white py-10 px-4">
        <div className="mx-auto max-w-[1170px] px-[15px]">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-3">
              <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[55px]" />
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="text-sm text-gray-400 hover:text-white">{label}</a>
              ))}
            </nav>
            <p className="text-xs text-gray-500">© 2024 Engkodok Games</p>
          </div>
        </div>
      </footer>
    </>
  )
}
