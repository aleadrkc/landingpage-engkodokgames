'use client'

import EngkodokHeader from './EngkodokHeader'
import { SiteFooter } from './SiteFooter'
import { imageSizes, imageSrcSet } from '@/lib/responsive-images'

export default function ProductPageClient() {
  return (
    <>
      {/* HEADER (same as homepage) */}
      <EngkodokHeader active="Product" />

      <main id="content" className="min-h-[70vh]">
        <div className="mx-auto max-w-[1170px] px-[15px]">
          <div className="w-full">
            <div className="entry-content max-sm:max-w-full" style={{ maxWidth: 1140, width: '100%' }}>

              {/* ===== PRODUCTS HEADING ===== */}
              <h1 className="wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]"
                style={{ fontSize: 50, fontWeight: 600, color: '#14171C', textAlign: 'center', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>
                PRODUCTS
              </h1>

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
                      <img decoding="async" src="/images/Vg_new_logo.png" srcSet={imageSrcSet("/images/Vg_new_logo.png")} sizes={imageSizes("/images/Vg_new_logo.png")} alt="Cardfight Vanguard logo" width={300} height={129} className="h-auto" />
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
                        <img decoding="async" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image"
                          className="w-full"
                          style={{ aspectRatio: `${item.w}/${item.h}`, height: 'auto', objectFit: 'fill' }}
                          loading={i === 0 ? 'eager' : 'lazy'} />
                      </a>
                    ) : (
                      <img decoding="async" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image"
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
                      <img decoding="async" loading="lazy" src="/images/logo-ws.png" srcSet={imageSrcSet("/images/logo-ws.png")} sizes={imageSizes("/images/logo-ws.png")} alt="Weiss Schwarz logo" width={321} height={158} className="h-auto" />
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
                    <img decoding="async" loading="lazy" src={item.src} srcSet={imageSrcSet(item.src)} sizes={imageSizes(item.src)} alt="Engkodok Games product promotional image"
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
                      <img decoding="async" loading="lazy" src="/images/logo_sp.png" srcSet={imageSrcSet("/images/logo_sp.png")} sizes={imageSizes("/images/logo_sp.png")} alt="Weiss Schwarz Schwarzside logo" width={298} height={108} className="h-auto" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ===== SP PRODUCT ===== */}
              <div className="wp-block-columns flex" style={{ gap: 0 }}>
                <div className="wp-block-column" style={{ flex: 1 }}>
                  <figure className="wp-block-image size-large" style={{ margin: 0 }}>
                    <img decoding="async" loading="lazy" src="/images/o0tosa_2000x.webp" srcSet={imageSrcSet("/images/o0tosa_2000x.webp")} sizes={imageSizes("/images/o0tosa_2000x.webp")} alt="Weiss Schwarz product banner" className="w-full h-auto" />
                  </figure>
                </div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
                <div className="wp-block-column" style={{ flex: 1 }}></div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
