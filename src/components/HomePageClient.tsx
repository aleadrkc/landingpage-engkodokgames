'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  { id: 1, img: '/images/307033505_515019567300167_4558219091365422579_n.jpeg', label: 'Cardfight!! Vanguard' },
  { id: 2, img: '/images/SD01-05_Kini_Di_Pasaran.jpeg', label: 'Starter Decks Kini Di Pasaran' },
  { id: 3, img: '/images/Media-Kit-Template_-BT01_MY_v2_1980_JPG.jpg', label: 'New Vanguard Releases' },
  { id: 4, img: '/images/bt11.jpg', label: 'Minerva Rising' },
  { id: 5, img: '/images/dbt10.jpg', label: 'Dragontree Invasion' },
  { id: 6, img: '/images/dss05.jpg', label: 'D Special Series' },
  { id: 7, img: '/images/dpv01.jpg', label: 'History Collection' },
]

const productImages = [
  { section: 'Pre-Order Opened', images: ['/images/VG-D-BT08-2-1024x576.webp', '/images/topheader_782_440_dtb06_01.jpeg'], cols: 2 },
  { section: 'Pre-Order Closed', images: ['/images/o0tosa_2000x.webp', '/images/saekanofine_1024x1024.webp', '/images/mv_5HY_bp_a.jpg'], cols: 3 },
  { section: 'Product On Sale', images: ['/images/DTB02_mediakit_banner-1.jpg', '/images/topheader_782_440_dtb06_01.jpeg', '/images/mv_5HY_bp_a.jpg'], cols: 3 },
]

export default function HomePageClient() {
  const [current, setCurrent] = useState(0)

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
      <header className="sticky top-0 z-30 bg-white/98 shadow-[0_1px_10px_rgba(0,0,0,.04)]">
        <div className="mx-auto flex min-h-[92px] w-[min(1120px,calc(100%-32px))] items-center justify-between gap-10">
          <a href="https://engkodokgames.com/" className="flex items-center gap-3" aria-label="Engkodok Games Where games is fun">
            <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[66px]" />
            <span className="max-w-[78px] text-xs leading-tight text-[#999]">Where games is fun</span>
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-8">
            <a href="https://engkodokgames.com/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">HOME</a>
            <a href="https://engkodokgames.com/product/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">PRODUCT</a>
            <a href="https://inventory.engkodokgames.com/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">INVENTORY</a>
            <a href="https://engkodokgames.com/retailer-2/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">RETAILER</a>
            <a href="https://engkodokgames.com/news-2/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">NEWS</a>
            <a href="https://engkodokgames.com/events/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">EVENTS</a>
            <a href="https://engkodokgames.com/about-publish-games/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">ABOUT</a>
            <a href="https://engkodokgames.com/contact-2/" className="px-0 py-9 text-[13px] font-extrabold uppercase tracking-[.02em] text-[#252034] hover:text-[#e11b22]">CONTACT</a>
          </nav>
        </div>
      </header>

      <main className="min-h-[70vh] pb-[90px]">
      {/* Skip link */}
      <a href="#content" className="absolute -left-[9999px] focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>

      {/* SLIDER */}
      <section aria-label="Featured releases" className="relative mb-[70px] flex h-[332px] w-full items-center justify-center overflow-hidden bg-[#111]">
        <button onClick={prev} type="button" aria-label="previous arrow"
          className="absolute left-6 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border-0 bg-black/80 text-[32px] leading-none text-white cursor-pointer">
          ‹
        </button>

        <a href="https://engkodokgames.com/" className="absolute inset-y-0 left-[-18%] w-1/2 scale-[1.08] opacity-[.42] blur-[3px]">
          <img src={left.img} alt="" className="h-full w-full object-cover" />
        </a>

        <a href="https://engkodokgames.com/" className="relative z-10 flex h-full w-[min(782px,72vw)] items-center justify-center shadow-[0_0_18px_rgba(0,0,0,.22)]">
          <img src={main.img} alt={main.label} className="h-auto max-h-full w-full object-contain" />
        </a>

        <a href="https://engkodokgames.com/" className="absolute inset-y-0 right-[-18%] w-1/2 scale-[1.08] opacity-[.42] blur-[3px]">
          <img src={right.img} alt="" className="h-full w-full object-cover" />
        </a>

        <button onClick={next} type="button" aria-label="next arrow"
          className="absolute right-6 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border-0 bg-black/80 text-[32px] leading-none text-white cursor-pointer">
          ›
        </button>
      </section>

      {/* Product sections */}
      {productImages.map((section) => (
        <section key={section.section} className="mx-auto mb-[86px] w-[min(1060px,calc(100%-48px))]">
          <div className="mb-7 block">
            <h2 className="m-0 font-sans text-[clamp(34px,4.2vw,54px)] font-extrabold leading-tight tracking-[-.03em] text-[#111]">{section.section}</h2>
          </div>
          <div className={`mb-[18px] grid gap-7 ${section.cols === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {section.images.map((img, i) => (
              <a key={i} href="https://engkodokgames.com/product/" className="block bg-white">
                <img src={img} alt="" className="aspect-[636/324] w-full object-cover" />
              </a>
            ))}
          </div>
          <a href="https://engkodokgames.com/product/" className="ml-auto block w-fit min-w-[104px] bg-[#222] px-[18px] py-3 text-center text-[13px] font-bold text-white hover:bg-[#111]">View More</a>
        </section>
      ))}
    </main>
    </>
  )
}
