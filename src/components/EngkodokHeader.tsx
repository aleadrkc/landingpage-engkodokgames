'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

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

type EngkodokHeaderProps = {
  active?: string
}

export default function EngkodokHeader({ active }: EngkodokHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
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
                      <a
                        href={href}
                        className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === active ? 'text-[#e11b22]' : ''}`}
                        style={{ color: label === active ? '#e11b22' : '#14171C' }}
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
              <div className="site-logo">
                <a className="brand flex items-center" href="https://engkodokgames.com/" aria-label="Engkodok Games Where games is fun">
                  <img width="200" height="215" src="/images/cropped-Logo-EG.png" alt="" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                </a>
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="navbar-toggle flex items-center gap-2 border-0 bg-transparent px-1 py-2 text-sm font-semibold uppercase"
                style={{ color: '#14171C' }}
                aria-expanded={mobileOpen}
                aria-label="Toggle mobile menu"
              >
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

        {mobileOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileOpen(false)}></div>
            <div className="fixed right-0 top-0 z-50 h-full w-[300px] overflow-y-auto bg-white shadow-lg md:hidden">
              <div className="flex justify-end p-4">
                <button onClick={() => setMobileOpen(false)} className="navbar-toggle flex items-center gap-2 border-0 bg-transparent px-1 py-2" aria-label="Close mobile menu">
                  <span className="flex flex-col gap-[4px]">
                    <span className="block h-[2px] w-[18px] translate-y-[6px] rotate-45 bg-[#14171C]"></span>
                    <span className="block h-[2px] w-[18px] -rotate-45 bg-[#14171C]"></span>
                  </span>
                </button>
              </div>
              <div className="px-4 pb-8">
                <div className="mb-6">
                  <form role="search" className="search-form flex border border-gray-300">
                    <input type="search" placeholder="Search for..." className="flex-1 border-0 px-3 py-2 text-sm outline-none" />
                    <button type="submit" className="border-0 bg-transparent px-3 py-2 text-gray-500" aria-label="Search">
                      <svg width="15" height="15" viewBox="0 0 1792 1792" fill="#666" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
                      </svg>
                    </button>
                  </form>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navItems.map(([label, href]) => (
                    <li key={label} className="border-b border-gray-100">
                      <a
                        href={href}
                        className="block py-3 text-[13.6px] font-semibold uppercase leading-[21.76px]"
                        style={{ color: label === active ? '#e11b22' : '#14171C' }}
                      >
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
  )
}
