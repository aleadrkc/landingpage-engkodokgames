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

type EventListItem = {
  month: string
  day: string
  year: string
  img: string | null
  imgW: number
  imgH: number
  dateFull: string
  dateStart: string
  dateEnd: string
  title: string
  href: string
  venue: string
  address: string
  desc: string
}

const events: EventListItem[] = [
  {
    month: 'Oct', day: '22', year: '2022',
    img: '/images/CARDFIGHT-VG-JAPAN.png',
    imgW: 842, imgH: 1191,
    dateFull: 'October 22, 2022 @ 10:00 am - October 23, 2022 @ 7:00 pm',
    dateStart: 'October 22, 2022', dateEnd: 'October 23, 2022',
    title: 'VMC Kuala Lumpur @ TAGCC',
    href: '/event/vmc-kuala-lumpur-tagcc/',
    venue: 'Tropicana Gardens Mall',
    address: '29 No, Unit CC, 2A, Persiaran Surian, Tropicana Indah, 47810 Petaling Jaya, Selangor, Selangor',
    desc: 'Attention to all cardfighters!! The online pre-registration for VMC Kuala Lumpur is opened now! The deadline of the pre-registration will be on the 16th October 2022. Register now to secure your tournament slot in the event! In conjunction with TAGCC, players are required to have a TAGCC ticker to enter the venue. Pre-registered players can\u2026',
  },
  {
    month: 'Aug', day: '27', year: '2022',
    img: '/images/Poster_VMC22_Johor-Bahru_V7.png',
    imgW: 1080, imgH: 1081,
    dateFull: 'August 27, 2022 - August 28, 2022',
    dateStart: 'August 27, 2022', dateEnd: 'August 28, 2022',
    title: 'Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)',
    href: '/event/vanguard-masters-cup-2022-south-malaysia-johor-bahru/',
    venue: 'KOMTAR JBCC',
    address: 'KOMTAR JBCC, City Centre, 80000 Johor Bahru, Johor, City Centre',
    desc: 'Cardfight!! Vanguard Malaysia Vanguard Masters Cup 2022 (Johor Bahru) 27 - 28 August 2022 KOMTAR JBCC, Atrium (Ground Floor) REGISTRATION period ends at 22 August 2022, 11:59 PM Walk-in Registration and Slots are Subject to Availability Japanese Edition Cards Only Tournament is Open for Malaysian Only How to register? 1. Click the link of the\u2026',
  },
  {
    month: 'Jul', day: '9', year: '2022',
    img: '/images/Poster_VMC22_2-01-1.png',
    imgW: 1080, imgH: 1080,
    dateFull: 'July 9, 2022 - July 10, 2022',
    dateStart: 'July 9, 2022', dateEnd: 'July 10, 2022',
    title: 'Vanguard Masters Cup 2022 Spring',
    href: '/event/vanguard-masters-cup-2022-spring/',
    venue: 'Prangin Mall, Penang',
    address: 'Prangin Mall, No 33, Jalan Dr Lim Chwee Leong, George Town, 10100 George Town, Pulau Pinang, Georgetown',
    desc: 'Dear Players, We are happy to announce that this upcoming 9 - 10 July VANGUARD MASTERS CUP 2022 SPRING will be held at Prangin Mall .. So prepare your best decks and battle your opponents to the very end.. 9 - 10 July Prangin Mall, Penang **Registration Link for players will be out soon!!**',
  },
]

export default function EventsPageClient() {
  return (
    <>
      {/* HEADER */}
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
                          className={`block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px] ${label === 'Events' ? 'text-[#e11b22]' : ''}`}
                          style={{ color: label === 'Events' ? '#e11b22' : '#14171C' }}>
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
        <div className="tribe-common tribe-events tribe-events-view tribe-events-view--list mx-auto" style={{ maxWidth: 1170, padding: '0 15px' }}>

          <section className="tribe-common-l-container tribe-events-l-container" style={{ maxWidth: 1000, margin: '0 auto', paddingTop: 24 }}>

            {/* ===== SEARCH BAR & VIEW SELECTOR ===== */}
            <header className="tribe-events-header tribe-events-header--has-event-search">

              {/* No upcoming events notice */}
              <div className="tribe-events-header__messages" style={{ marginBottom: 20 }}>
                <div className="tribe-events-c-messages__message--notice" style={{
                  background: '#f9f9f9', borderLeft: '4px solid #141827',
                  padding: '12px 16px', fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSize: 14, color: '#141827',
                }}>
                  There are no upcoming events.
                </div>
              </div>

              {/* Events Bar: Search + View Tabs */}
              <div className="tribe-events-c-events-bar tribe-events-c-events-bar--border" style={{
                border: '1px solid #e4e4e4', borderRadius: 3, marginBottom: 24,
                display: 'flex', flexWrap: 'wrap',
              }}>

                {/* Search section */}
                <div style={{ flex: '1 1 70%', display: 'flex', borderRight: '1px solid #e4e4e4' }}>
                  <form className="tribe-events-c-search tribe-events-c-events-bar__search-form" style={{
                    display: 'flex', width: '100%', alignItems: 'center',
                  }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                      {/* Search icon */}
                      <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, fill: '#a5a5a5' }} viewBox="0 0 16 16">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.164 10.133L16 14.97 14.969 16l-4.836-4.836a6.225 6.225 0 01-3.875 1.352 6.24 6.24 0 01-4.427-1.832A6.272 6.272 0 010 6.258 6.24 6.24 0 011.831 1.83 6.272 6.272 0 016.258 0c1.67 0 3.235.658 4.426 1.831a6.272 6.272 0 011.832 4.427c0 1.422-.48 2.773-1.352 3.875zM6.258 1.458c-1.28 0-2.49.498-3.396 1.404-1.866 1.867-1.866 4.925 0 6.791a4.774 4.774 0 003.396 1.405c1.28 0 2.489-.498 3.395-1.405 1.867-1.866 1.867-4.924 0-6.79a4.774 4.774 0 00-3.395-1.405z"></path>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search for events"
                        readOnly
                        style={{
                          width: '100%', border: 'none', outline: 'none',
                          padding: '20px 20px 20px 40px',
                          fontSize: 14, fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                          color: '#141827', background: 'transparent',
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      style={{
                        background: '#fff', color: '#2b2b2b', border: 'none',
                        fontSize: 16, fontWeight: 700, fontFamily: 'Poppins, Arial, sans-serif',
                        padding: '10px 12px', lineHeight: '16px', cursor: 'default',
                        borderLeft: '1px solid #e4e4e4', borderRadius: '0 2px 2px 0',
                      }}>
                      Find Events
                    </button>
                  </form>
                </div>

                {/* View selector tabs */}
                <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                  {/* List - active */}
                  <a className="flex items-center px-3 py-3 border-b-2 border-[#141827] no-underline" href="#" style={{ color: '#141827' }}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="#141827" style={{ marginRight: 6 }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M.451.432V17.6c0 .238.163.432.364.432H18.12c.2 0 .364-.194.364-.432V.432c0-.239-.163-.432-.364-.432H.815c-.2 0-.364.193-.364.432zm.993.81h16.024V3.56H1.444V1.24zM17.468 3.56H1.444v13.227h16.024V3.56z" />
                      <path d="M11.831 4.912v1.825c0 .504.409.913.913.913h1.825a.913.913 0 00.912-.913V4.912A.913.913 0 0014.57 4h-1.825a.912.912 0 00-.913.912z" />
                      <path d="M8.028 7.66a.449.449 0 00.446-.448v-.364c0-.246-.2-.448-.446-.448h-4.13a.449.449 0 00-.447.448v.364c0 .246.201.448.447.448h4.13z" />
                      <path d="M9.797 5.26a.449.449 0 00.447-.448v-.364c0-.246-.201-.448-.447-.448h-5.9a.449.449 0 00-.446.448v.364c0 .246.201.448.447.448h5.9z" />
                    </svg>
                    <span style={{ fontSize: 14, fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>List</span>
                  </a>
                  {/* Month */}
                  <a className="flex items-center px-3 py-3 no-underline" href="#" style={{ color: '#5d5d5d' }}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="#5d5d5d" style={{ marginRight: 6 }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 .991v17.04c0 .236.162.428.361.428h17.175c.2 0 .361-.192.361-.429V.991c0-.237-.162-.428-.361-.428H.36C.161.563 0 .754 0 .99zm.985.803H16.89v2.301H.985v-2.3zM16.89 5.223H.985v12H16.89v-12z" />
                    </svg>
                    <span style={{ fontSize: 14, fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>Month</span>
                  </a>
                  {/* Day */}
                  <a className="flex items-center px-3 py-3 no-underline" href="#" style={{ color: '#5d5d5d' }}>
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="#5d5d5d" style={{ marginRight: 6 }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M.363 17.569V.43C.363.193.526 0 .726 0H18c.201 0 .364.193.364.431V17.57c0 .238-.163.431-.364.431H.726c-.2 0-.363-.193-.363-.431z" />
                    </svg>
                    <span style={{ fontSize: 14, fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>Day</span>
                  </a>
                </div>
              </div>

              {/* Top bar: Previous/Next, Today, date */}
              <div className="tribe-events-c-top-bar tribe-events-header__top-bar" style={{
                display: 'flex', alignItems: 'center', marginBottom: 32, gap: 16,
              }}>
                <nav aria-label="Top events list pagination">
                  <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: 8 }}>
                    <li>
                      <a href="#" style={{ display: 'flex', alignItems: 'center', padding: 4, color: '#141827' }}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="#141827">
                          <path d="M9.7 14.4l-1.5 1.5L.3 8 8.2.1l1.5 1.5L3.3 8l6.4 6.4z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <button disabled style={{ display: 'flex', alignItems: 'center', padding: 4, color: '#a5a5a5', background: 'none', border: 'none', cursor: 'default' }}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="#a5a5a5">
                          <path d="M.3 1.6L1.8.1 9.7 8l-7.9 7.9-1.5-1.5L6.7 8 .3 1.6z" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>

                <a href="#" style={{
                  border: '1px solid #e4e4e4', borderRadius: 4,
                  padding: '6px 12px', fontSize: 12, fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  color: '#141827', textDecoration: 'none',
                }}>Today</a>

                <div style={{ fontSize: 16, fontWeight: 700, fontFamily: '"Helvetica Neue", Helvetica, sans-serif', color: '#141827' }}>
                  Upcoming
                </div>
              </div>
            </header>

            {/* ===== LATEST PAST EVENTS ===== */}
            <div className="tribe-events-calendar-latest-past">
              <h2 className="tribe-events-calendar-latest-past__heading" style={{
                fontSize: 50, fontWeight: 400, color: '#14171C',
                fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                margin: '0 0 30px',
              }}>
                Latest Past Events
              </h2>

              {events.map((ev, idx) => (
                <div key={idx} className="tribe-common-g-row tribe-events-calendar-latest-past__event-row" style={{
                  display: 'flex', gap: 28, marginBottom: 40, paddingBottom: 40,
                  borderBottom: idx < events.length - 1 ? '1px solid #e4e4e4' : 'none',
                  flexWrap: 'wrap',
                }}>
                  {/* Date tag */}
                  <div style={{ textAlign: 'center', minWidth: 70 }}>
                    <time>
                      <div style={{ fontSize: 11, fontWeight: 400, color: '#5d5d5d', textTransform: 'uppercase', fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>
                        {ev.month}
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 700, color: '#141827', lineHeight: 1, fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>
                        {ev.day}
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 400, color: '#5d5d5d', fontFamily: '"Helvetica Neue", Helvetica, sans-serif' }}>
                        {ev.year}
                      </div>
                    </time>
                  </div>

                  {/* Event content */}
                  <div style={{ flex: 1, minWidth: 280, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {/* Featured image */}
                    {ev.img && (
                      <div style={{ flex: '0 0 200px' }}>
                        <a href={ev.href ?? `/event/${ev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}/`} aria-label={ev.title}>
                          <img src={ev.img} alt=""
                            className="w-full h-auto"
                            style={{ aspectRatio: `${ev.imgW}/${ev.imgH}`, maxWidth: 200 }}
                          />
                        </a>
                      </div>
                    )}

                    {/* Details */}
                    <div style={{ flex: 1, minWidth: 250 }}>
                      <header className="tribe-events-calendar-latest-past__event-header">
                        <div style={{ fontSize: 13.5, color: '#141827', fontFamily: '"Helvetica Neue", Helvetica, sans-serif', marginBottom: 5 }}>
                          <time>{ev.dateFull}</time>
                        </div>
                        <h3 className="tribe-events-calendar-latest-past__event-title" style={{
                          fontSize: 24, fontWeight: 700, color: '#141827',
                          fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
                          margin: '0 0 16px',
                        }}>
                          <a href={ev.href ?? `/event/${ev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}/`}
                            style={{ color: '#141827', textDecoration: 'none' }}>
                            {ev.title}
                          </a>
                        </h3>
                        <address style={{
                          fontStyle: 'normal', fontSize: 13.5, color: '#141827',
                          fontFamily: '"Helvetica Neue", Helvetica, sans-serif', marginBottom: 8,
                        }}>
                          <span style={{ fontWeight: 700 }}>{ev.venue}</span><br />
                          <span>{ev.address}</span>
                        </address>
                      </header>
                      <div style={{
                        fontSize: 14, color: '#141827', lineHeight: 1.5,
                        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                      }}>
                        <p style={{ margin: '0 0 10px' }}>{ev.desc}</p>
                        <a href={ev.href ?? '#'} style={{ color: '#141827', fontSize: 14 }}>Read More &raquo;</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* After events HTML */}
            <div style={{ fontSize: 11, color: '#a5a5a5', textAlign: 'center', padding: '20px 0' }}>
              This calendar is powered by The Events Calendar.
            </div>

          </section>
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
