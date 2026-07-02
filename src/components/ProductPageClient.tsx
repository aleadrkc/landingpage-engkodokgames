'use client'

const navItems = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Inventory', 'https://inventory.engkodokgames.com/'],
  ['Retailer', '/retailer/'],
  ['News', '/news/'],
  ['Events', '/events/'],
  ['About', 'https://engkodokgames.com/about-publish-games/'],
  ['Contact', 'https://engkodokgames.com/contact-2/'],
]

export default function ProductPageClient() {
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
                          className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === 'Product' ? 'text-[#e11b22]' : ''}`}
                          style={{ color: label === 'Product' ? '#e11b22' : '#14171C' }}>
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

      <main className="min-h-[70vh]">
        <div className="mx-auto max-w-[1170px] px-[15px]">
          <div className="w-full">
            <div className="entry-content max-sm:max-w-full" style={{ maxWidth: 1140, width: '100%' }}>

              {/* ===== PRODUCTS HEADING ===== */}
              <h2 className="wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]"
                style={{ fontSize: 50, fontWeight: 600, color: '#14171C', textAlign: 'center', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>
                PRODUCTS
              </h2>

              {/* ===== SEPARATOR (centered via 3-column layout) ===== */}
              <div className="wp-block-columns flex justify-center" style={{ gap: 0 }}>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
                <div className="wp-block-column" style={{ flex: '0 1 auto' }}>
                  <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px', width: 300 }} />
                </div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
              </div>

              {/* ===== VG LOGO (centered via columns + aligncenter) ===== */}
              <div className="wp-block-columns flex justify-center my-10">
                <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                  <div className="wp-block-image is-style-default">
                    <figure className="aligncenter" style={{ textAlign: 'center', margin: '0 auto', display: 'table' }}>
                      <img decoding="async" src="/images/Vg_new_logo.png" alt="" width={300} height={129} className="h-auto" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ===== VG GALLERY — 4 columns ===== */}
              <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
                {[
                  { src: '/cloned-assets/wp-content/uploads/2022/06/289707958_10210060953157837_2514460781407167568_n.jpg', caption: 'VG D-BT06', w: 1920, h: 1080 },
                  { src: '/cloned-assets/wp-content/uploads/2022/06/dtd01_main_865w219d86252.jpg', caption: 'VG D-TD01', w: 1920, h: 1080 },
                  { src: '/cloned-assets/wp-content/uploads/2022/06/dtd02_main_865w219d86252.jpg', caption: 'VG D-TD02', w: 1920, h: 1080 },
                  { src: '/cloned-assets/wp-content/uploads/2022/06/dtd03_main_865w219d86252.jpg', caption: 'VG D-TD03', w: 1920, h: 1080 },
                  { src: '/cloned-assets/wp-content/uploads/2022/06/dvs06_main_66v2771cl78240-4-1024x576.jpg', caption: 'V Clan Collection Vol.6', w: 1024, h: 576 },
                  { src: '/cloned-assets/wp-content/uploads/2022/06/dvs05_main_66v2771cl78240-4-1024x576.jpg', caption: 'V Clan Collection Vol.5', w: 1024, h: 576 },
                  { src: '/cloned-assets/wp-content/uploads/2022/08/product24273-large-1.jpeg', caption: 'VG D-BT05', w: 1000, h: 563, link: '/product/vg-d-bt05/' },
                  { src: '/cloned-assets/wp-content/uploads/2022/08/dlbt02_main_fj574l8m634580.jpeg', caption: 'VG D-BT04', w: 1920, h: 1080 },
                ].map((item, i) => (
                  <figure key={i} className="wp-block-image size-full" style={{
                    margin: 0,
                    flex: `1 0 calc(25% - ${8.5 * 3 / 4}px)`,
                    minWidth: 200,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {item.link ? (
                      <a href={item.link}>
                        <img decoding="async" src={item.src} alt=""
                          className="w-full"
                          style={{ aspectRatio: `${item.w}/${item.h}`, height: 'auto', objectFit: 'fill' }}
                          loading={i === 0 ? 'eager' : 'lazy'} />
                      </a>
                    ) : (
                      <img decoding="async" src={item.src} alt=""
                        className="w-full"
                        style={{ aspectRatio: `${item.w}/${item.h}`, height: 'auto', objectFit: 'fill' }}
                        loading={i === 0 ? 'eager' : 'lazy'} />
                    )}
                    <figcaption style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,.7))',
                      color: '#fff', fontSize: 13, textAlign: 'center',
                      padding: '20px 6px 6px', lineHeight: 1.4
                    }}>{item.caption}</figcaption>
                  </figure>
                ))}
              </figure>

              {/* ===== SEPARATOR ===== */}
              <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px' }} />

              {/* ===== WS LOGO ===== */}
              <div className="wp-block-columns flex justify-center my-10">
                <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                  <div className="wp-block-image">
                    <figure className="aligncenter" style={{ textAlign: 'center', margin: '0 auto', display: 'table' }}>
                      <img decoding="async" loading="lazy" src="/images/logo-ws.png" alt="" width={321} height={158} className="h-auto" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ===== WS GALLERY — default columns ===== */}
              <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
                {[
                  { src: '/cloned-assets/wp-content/uploads/2022/06/playset_date_a_live_booster_2__1652937484_b27c64da_progressive.jpg', caption: 'Weiss Schwarz Date A Live Vol.2', w: 1078, h: 572 },
                  { src: '/images/mv_5HY_bp_a.jpg', caption: 'Weiss Schwarz Kaguya-sama: Love is War', w: 636, h: 324 },
                  { src: '/images/saekanofine_1024x1024.webp', caption: 'Weiss Schwarz Saekano Fine', w: 1024, h: 577 },
                ].map((item, i) => (
                  <figure key={i} className="wp-block-image size-large" style={{
                    margin: 0,
                    flex: `1 0 calc(33.33% - ${8.5 * 2 / 3}px)`,
                    minWidth: 200,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img decoding="async" loading="lazy" src={item.src} alt=""
                      className="w-full object-cover"
                      style={{ aspectRatio: `${item.w}/${item.h}`, height: 'auto', objectFit: 'cover' }} />
                    <figcaption style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,.7))',
                      color: '#fff', fontSize: 13, textAlign: 'center',
                      padding: '20px 6px 6px', lineHeight: 1.4
                    }}>{item.caption}</figcaption>
                  </figure>
                ))}
              </figure>

              {/* ===== SEPARATOR ===== */}
              <div className="wp-block-columns flex justify-center">
                <div className="wp-block-column" style={{ flex: 1 }}></div>
                <div className="wp-block-column" style={{ flex: '0 1 auto' }}>
                  <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px', width: 300 }} />
                </div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
              </div>

              {/* ===== SP LOGO ===== */}
              <div className="wp-block-columns flex justify-center my-10">
                <div className="wp-block-column" style={{ flexBasis: '100%' }}>
                  <div className="wp-block-image">
                    <figure className="aligncenter" style={{ textAlign: 'center', margin: '0 auto', display: 'table' }}>
                      <img decoding="async" loading="lazy" src="/images/logo_sp.png" alt="" width={298} height={108} className="h-auto" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ===== SP PRODUCT ===== */}
              <div className="wp-block-columns flex" style={{ gap: 0 }}>
                <div className="wp-block-column" style={{ flex: 1 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/o0tosa_2000x.webp" alt="" className="w-full h-auto" />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
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
