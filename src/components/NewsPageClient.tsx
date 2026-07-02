'use client'

const navItems = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Inventory', 'https://inventory.engkodokgames.com/'],
  ['Retailer', '/retailer/'],
  ['News', '/news/'],
  ['Events', 'https://engkodokgames.com/?post_type=tribe_events'],
  ['About', 'https://engkodokgames.com/about-publish-games/'],
  ['Contact', 'https://engkodokgames.com/contact-2/'],
]

const sharedStyles = {
  h1: { fontSize: 70, fontWeight: 600, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '91px', margin: '0 0 30px' },
  h2: { fontSize: 50, fontWeight: 600, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '65px', margin: '0 0 30px' },
  h3: { fontSize: 24, fontWeight: 600, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '31.2px', margin: '0 0 30px' },
  p: { fontSize: 17, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '28.9px', margin: '0 0 30px' },
  figcaption: { fontSize: 15.3, fontWeight: 400, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', margin: '7.65px 0 15.3px' },
  columnGap: '34px',
}

export default function NewsPageClient() {
  return (
    <>
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
                          className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === 'News' ? 'text-[#e11b22]' : ''}`}
                          style={{ color: label === 'News' ? '#e11b22' : '#14171C' }}>
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
        <div className="mx-auto max-w-[1170px] px-[15px]">
          <div className="w-full">
            <div className="entry-content" style={{ maxWidth: 1140, width: '100%' }}>

              {/* ===== H1: Latest News ===== */}
              <h1 className="wp-block-heading" style={sharedStyles.h1}>Latest News</h1>

              {/* ===== Intro paragraph ===== */}
              <p className="wp-block-paragraph" style={sharedStyles.p}>
                Catch up on all the latest news and find out more information on upcoming release product, out for sale this week items and events happenings around you here right on the news page. Updated every week with the latest news!
              </p>

              {/* ===== Cardfight!! Vanguard Bahasa ===== */}
              <h2 className="wp-block-heading" style={sharedStyles.h2}><em>Cardfight!! Vanguard Bahasa</em></h2>

              {/* --- Starter Deck --- */}
              <h3 className="wp-block-heading" style={sharedStyles.h3}>Starter Deck</h3>

              <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flexBasis: '66.66%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img fetchPriority="high" decoding="async" src="/images/FB-price-banner2.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/389' }} />
                    <figcaption style={sharedStyles.figcaption}>
                      Mark you date! As Cardfight!! Vanguard Bahasa Starter Deck 01 – 05 will be on sale on 23 September 2022!
                    </figcaption>
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flexBasis: '33.33%', minWidth: 0 }}>
                  <ul className="wp-block-list" style={{ ...sharedStyles.p, margin: 0, paddingLeft: 20, listStyle: 'disc' }}>
                    <li>Yu-Yu Kondo featuring Dragon Empire</li>
                    <li>Danji Momoyama featuring Dark States</li>
                    <li>Tohya Ebata featuring Keter Sanctuary</li>
                    <li>Megumi Okura featuring Stoicheia</li>
                    <li>Tomari Seto featuring Brandt Gate</li>
                  </ul>
                </div>
              </div>

              {/* --- Booster --- */}
              <h3 className="wp-block-heading" style={sharedStyles.h3}>Booster</h3>

              <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flexBasis: '66.66%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" src="/images/Media-Kit-Template-BT01.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/472' }} />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flexBasis: '33.33%', minWidth: 0 }}>
                  <p className="wp-block-paragraph" style={sharedStyles.p}>
                    Cardfight!! Vanguard Bahasa Booster 01 will be release on 7 October 2022! Stay tune for more updates regarding Cardfight!! Vanguard Bahasa Booster 01 from Engkodok Games!
                  </p>
                </div>
              </div>

              {/* ===== Cardfight!! Vanguard ===== */}
              <h2 className="wp-block-heading" style={sharedStyles.h2}><em>Cardfight!! Vanguard</em></h2>

              <p className="wp-block-paragraph" style={sharedStyles.p}>
                <strong>VGE-D-VS05 | VGE-D-VS06</strong> : Release Date: 19 August 2022
              </p>

              <div className="wp-block-columns alignwide are-vertically-aligned-center flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flexBasis: '25%', minWidth: 0 }}>
                  <figure className="wp-block-image" style={{ margin: 0, textAlign: 'center' }}>
                    <img decoding="async" src="/images/vs05.png" alt="1 display contains 12 packs 1 pack contains 7 cards [84 types of cards (38 new cards / 46 reissue cards) (RRR: 84) + Parallels: 15 types (VSR: 3 + SP: 12)] ※VSR = Vanguard Secret Rare ※Each box is guaranteed to have 1 SP!" className="w-full h-auto" style={{ maxWidth: 605, aspectRatio: '605/613' }} />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flexBasis: '75%', minWidth: 0 }}>
                  <figure className="wp-block-image size-full is-resized" style={{ margin: 0, textAlign: 'center' }}>
                    <img decoding="async" loading="lazy" src="/images/vs06.png" alt="" className="h-auto" width={263} height={268} style={{ aspectRatio: '263/268' }} />
                  </figure>
                </div>
              </div>

              {/* --- Trial Deck --- */}
              <h3 className="wp-block-heading" style={sharedStyles.h3}>Trial Deck</h3>

              <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/dtd01_main.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/576' }} />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/dtd02_main.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/576' }} />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/dtd03_main.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/576' }} />
                  </figure>
                </div>
              </div>

              <p className="wp-block-paragraph" style={sharedStyles.p}>
                More details on the product will be reviewing soon here at Engkodok Games, stay tuned!
              </p>

              <p className="wp-block-paragraph" style={sharedStyles.p}>
                Release date: 22 July 2022
              </p>

              {/* --- Booster --- */}
              <h3 className="wp-block-heading" style={sharedStyles.h3}>Booster</h3>

              <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flexBasis: '66.66%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/db06_hero.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/576' }} />
                    <figcaption style={sharedStyles.figcaption}>
                      VG-D-BT06 Cardfight!! Vanguard: will+Dress Booster Pack Vol. 6 – Horyu Enbu will be release on 5 August 2022!
                    </figcaption>
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flexBasis: '33.33%', minWidth: 0 }}>
                  <p className="wp-block-paragraph" style={sharedStyles.p}>Featuring Nations:</p>
                  <ul className="wp-block-list" style={{ ...sharedStyles.p, margin: 0, paddingLeft: 20, listStyle: 'disc' }}>
                    <li>Dragon Empire</li>
                    <li>Dark States</li>
                    <li>Brandt Gate</li>
                    <li>Keter Sanctuary</li>
                    <li>Stoicheia</li>
                  </ul>
                </div>
              </div>

              {/* ===== Weiss Schwarz ===== */}
              <h2 className="wp-block-heading" style={sharedStyles.h2}><em>Weiss Schwarz</em></h2>

              <h3 className="wp-block-heading" style={sharedStyles.h3}>Booster</h3>

              <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: sharedStyles.columnGap }}>
                <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/date_a_live_booster2.jpg" alt="" className="w-full h-auto" style={{ aspectRatio: '1024/543' }} />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flex: '1 1 0%', minWidth: 0 }}>
                  <p className="wp-block-paragraph" style={sharedStyles.p}>
                    Weiss Schwarz – Date A Live Vol.2! The booster includes characters from Date A Live Anime Season 2 and Season 3.
                  </p>
                  <p className="wp-block-paragraph" style={sharedStyles.p}>
                    Release date: 5 August 2022
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
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
