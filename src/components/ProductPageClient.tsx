'use client'

export default function ProductPageClient() {
  return (
    <div className="mx-auto max-w-[1170px] px-[15px]">
      <div className="nv-single-page-wrap col w-full">
        <div className="nv-content-wrap entry-content max-sm:max-w-full" style={{ maxWidth: 1140, width: '100%' }}>

          <h2 className="has-text-align-center wp-block-heading max-sm:text-[32px] max-sm:leading-[42px]"
            style={{ fontSize: 50, fontWeight: 600, color: '#14171C', textAlign: 'center', margin: '0 0 30px', fontFamily: 'Poppins, Arial, Helvetica, sans-serif' }}>
            PRODUCTS
          </h2>

          {/* Separator */}
          <div className="wp-block-columns flex justify-center" style={{ gap: 0 }}>
            <div className="wp-block-column" style={{ flex: 1 }}></div>
            <div className="wp-block-column" style={{ flex: 0 }}>
              <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px', width: 300 }} />
            </div>
            <div className="wp-block-column" style={{ flex: 1 }}></div>
          </div>

          {/* VG Logo */}
          <div className="wp-block-columns flex justify-center">
            <div className="wp-block-column" style={{ flexBasis: '100%' }}>
              <figure className="aligncenter" style={{ textAlign: 'center', margin: 0 }}>
                <img decoding="async" src="/images/Vg_new_logo.png" alt="" className="inline-block" width={300} height={129} />
              </figure>
            </div>
          </div>

          {/* VG Products - 4 column gallery */}
          <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
            {[
              { src: '/cloned-assets/wp-content/uploads/2022/06/289707958_10210060953157837_2514460781407167568_n.jpg', caption: 'VG D-BT06', width: 1920 },
              { src: '/cloned-assets/wp-content/uploads/2022/06/dtd01_main_865w219d86252.jpg', caption: 'VG D-TD01', width: 1920 },
              { src: '/cloned-assets/wp-content/uploads/2022/06/dtd02_main_865w219d86252.jpg', caption: 'VG D-TD02', width: 1920 },
              { src: '/cloned-assets/wp-content/uploads/2022/06/dtd03_main_865w219d86252.jpg', caption: 'VG D-TD03', width: 1920 },
              { src: '/cloned-assets/wp-content/uploads/2022/06/dvs06_main_66v2771cl78240-4-1024x576.jpg', caption: 'V Clan Collection Vol.6', width: 1024 },
              { src: '/cloned-assets/wp-content/uploads/2022/06/dvs05_main_66v2771cl78240-4-1024x576.jpg', caption: 'V Clan Collection Vol.5', width: 1024 },
              { src: '/cloned-assets/wp-content/uploads/2022/08/product24273-large-1.jpeg', caption: 'VG D-BT05', link: '/product/vg-d-bt05/', width: 1000 },
              { src: '/cloned-assets/wp-content/uploads/2022/08/dlbt02_main_fj574l8m634580.jpeg', caption: 'VG D-BT04', width: 1920 },
            ].map((item, i) => (
              <figure key={i} className="wp-block-image" style={{ margin: 0, flex: `1 0 calc(25% - ${8.5*3/4}px)`, minWidth: 200, position: 'relative', overflow: 'hidden' }}>
                {item.link ? (
                  <a href={item.link}>
                    <img decoding="async" loading="lazy" src={item.src} alt="" className="w-full object-cover" style={{ height: 180, objectFit: 'fill' }} />
                  </a>
                ) : (
                  <img decoding="async" loading="lazy" src={item.src} alt="" className="w-full object-cover" style={{ height: 180, objectFit: 'fill' }} />
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

          {/* Separator */}
          <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px' }} />

          {/* WS Logo */}
          <div className="wp-block-columns flex justify-center">
            <div className="wp-block-column" style={{ flexBasis: '100%' }}>
              <figure style={{ textAlign: 'center', margin: 0 }}>
                <img decoding="async" loading="lazy" src="/images/logo-ws.png" alt="" className="inline-block" width={321} height={158} />
              </figure>
            </div>
          </div>

          {/* WS Products - 3 column gallery */}
          <figure className="flex flex-wrap" style={{ gap: '8.5px', margin: 0 }}>
            {[
              { src: '/cloned-assets/wp-content/uploads/2022/06/playset_date_a_live_booster_2__1652937484_b27c64da_progressive.jpg', caption: 'Weiss Schwarz Date A Live Vol.2' },
              { src: '/images/mv_5HY_bp_a.jpg', caption: 'Weiss Schwarz Kaguya-sama: Love is War' },
              { src: '/images/saekanofine_1024x1024.webp', caption: 'Weiss Schwarz Saekano Fine' },
            ].map((item, i) => (
              <figure key={i} className="wp-block-image" style={{ margin: 0, flex: `1 0 calc(33.33% - ${8.5*2/3}px)`, minWidth: 200, position: 'relative', overflow: 'hidden' }}>
                <img decoding="async" loading="lazy" src={item.src} alt="" className="w-full object-cover" style={{ height: 180, objectFit: 'fill' }} />
                <figcaption style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,.7))',
                  color: '#fff', fontSize: 13, textAlign: 'center',
                  padding: '20px 6px 6px', lineHeight: 1.4
                }}>{item.caption}</figcaption>
              </figure>
            ))}
          </figure>

          {/* Separator */}
          <hr className="wp-block-separator" style={{ height: 2, background: '#14171C', border: 0, margin: '10px 0 20px' }} />

          {/* SP Logo */}
          <div className="wp-block-columns flex justify-center">
            <div className="wp-block-column" style={{ flexBasis: '100%' }}>
              <figure style={{ textAlign: 'center', margin: 0 }}>
                <img decoding="async" loading="lazy" src="/images/logo_sp.png" alt="" className="inline-block" width={298} height={108} />
              </figure>
            </div>
          </div>

          {/* SP Product */}
          <div className="wp-block-columns flex" style={{ gap: 0 }}>
            <div className="wp-block-column" style={{ flex: 1 }}>
              <figure style={{ margin: 0 }}>
                <img decoding="async" loading="lazy" src="/images/o0tosa_2000x.webp" alt="" className="w-full" style={{ objectFit: 'fill' }} />
              </figure>
            </div>
            <div className="wp-block-column" style={{ flex: 1 }}></div>
            <div className="wp-block-column" style={{ flex: 1 }}></div>
          </div>

        </div>
      </div>
    </div>
  )
}
