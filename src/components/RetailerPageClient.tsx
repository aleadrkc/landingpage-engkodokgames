'use client'

import EngkodokHeader from './EngkodokHeader'

export default function RetailerPageClient() {
  return (
    <>
      {/* HEADER (same as homepage) */}
      <EngkodokHeader active="Retailer" />

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
      <footer className="mt-20 bg-[#14171C] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center">
          <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
          <p className="text-[13px] font-medium tracking-[0.02em] text-white/80">Engkodok Games © 2026</p>
        </div>
      </footer>
    </>
  )
}
