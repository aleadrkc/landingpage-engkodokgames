'use client'

import EngkodokHeader from './EngkodokHeader'

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
      <EngkodokHeader active="News" />

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
      <footer className="mt-20 bg-[#14171C] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center">
          <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
          <p className="text-[13px] font-medium tracking-[0.02em] text-white/80">Engkodok Games © 2026</p>
        </div>
      </footer>
    </>
  )
}
