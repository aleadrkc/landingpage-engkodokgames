'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import type { ReactNode } from 'react'
import EngkodokHeader from './EngkodokHeader'

const eventUrl = '/event/vanguard-masters-cup-2022-south-malaysia-johor-bahru/'
const previousEventUrl = '/event/vanguard-masters-cup-2022-spring/'
const nextEventUrl = '/event/vmc-kuala-lumpur-tagcc/'
const mapSrc = 'https://www.google.com/maps?q=KOMTAR+JBCC%2C+City+Centre%2C+80000+Johor+Bahru%2C+Johor+City+Centre+Johor+Bahru+80000+Malaysia&output=embed'

export default function EventVanguardMastersCupJohorBahruPageClient() {
  return (
    <>
      <EngkodokHeader active="Events" />

      <main id="content" className="neve-main min-h-[70vh]">
        <section
          id="tribe-events-pg-template"
          role="main"
          className="mx-auto box-border w-full max-w-[1058px] px-[25px] pb-0 pt-[48px] max-sm:px-[15px] max-sm:pt-[32px]"
          style={{ fontFamily: 'Poppins, Arial, Helvetica, sans-serif', color: '#14171C' }}
        >
          <div id="tribe-events-content" className="tribe-events-single">
            <p style={{ margin: '0 0 40px', fontSize: 17, lineHeight: '28.9px' }}>
              <Link href="/events/" style={{ color: '#501c60', textDecoration: 'none' }}> « All Events</Link>
            </p>

            <div className="tribe-events-notices" style={{ marginBottom: 24 }}>
              <ul style={{ listStyle: 'disc', margin: '0 0 0 20px', padding: 0, fontSize: 17, lineHeight: '28.9px' }}>
                <li>This event has passed.</li>
              </ul>
            </div>

            <h1
              className="tribe-events-single-event-title"
              style={{
                margin: 0,
                padding: 0,
                color: '#141827',
                fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
                fontSize: 42,
                fontWeight: 700,
                lineHeight: '57.96px',
              }}
            >
              Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)
            </h1>

            <div
              className="tribe-events-schedule tribe-clearfix"
              style={{
                display: 'flex',
                margin: '24px 0 32px',
                color: '#141827',
                fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                fontSize: 17,
                lineHeight: '28.9px',
              }}
            >
              <span>August 27, 2022</span> - <span>&nbsp;August 28, 2022</span>
            </div>

            <EventNavigation />

            <article id="post-486" className="post-486 tribe_events type-tribe_events status-publish has-post-thumbnail hentry">
              <div className="tribe-events-event-image" style={{ margin: '0 0 32px' }}>
                <Link href={eventUrl} aria-label="Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)">
                  <img
                    width="1080"
                    height="1081"
                    src="/images/Poster_VMC22_Johor-Bahru_V7.png"
                    alt="Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)"
                    className="attachment-full size-full wp-post-image h-auto w-full max-w-[1080px]"
                    style={{ aspectRatio: '1080/1081', display: 'block' }}
                  />
                </Link>
              </div>

              <div
                className="tribe-events-single-event-description tribe-events-content"
                style={{
                  color: '#141827',
                  fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
                  fontSize: 17,
                  lineHeight: '28.9px',
                }}
              >
                <TextBlock>
                  <div>Cardfight!! Vanguard Malaysia<Emoji file="emoji-swords.png" alt="⚔️" /></div>
                  <div>&nbsp;</div>
                  <div>Vanguard Masters Cup 2022 (Johor Bahru)<Emoji file="emoji-trophy.png" alt="🏆" /></div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div><Emoji file="emoji-calendar.png" alt="📅" />27 – 28 August 2022</div>
                  <div><Emoji file="emoji-pin.png" alt="📍" />KOMTAR JBCC, Atrium (Ground Floor)</div>
                </TextBlock>

                <TextBlock>
                  <div><Emoji file="emoji-fire.png" alt="🔥" /><Emoji file="emoji-fire.png" alt="🔥" />REGISTRATION period ends at 22 August 2022, 11:59 PM</div>
                </TextBlock>

                <TextBlock>
                  <div><Emoji file="emoji-sparkles.png" alt="✨" />Walk-in Registration and Slots are Subject to Availability</div>
                  <div><Emoji file="emoji-warning.png" alt="⚠️" />Japanese Edition Cards Only</div>
                  <div><Emoji file="emoji-warning.png" alt="⚠️" />Tournament is Open for Malaysian Only</div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>How to register?</div>
                  <div>1. Click the link of the tournament you wish to participate.<Emoji file="emoji-link.png" alt="🔗" /></div>
                  <div>2. Complete the registration form and you will receive a confirmation of your slots from events@engkodokgames.com<Emoji file="emoji-bell.png" alt="🔔" /></div>
                  <div>3. Come to the event during the check-in time to confirm your attendance. Kindly bring your IC and show us your mySejahtera for verification purposes.<Emoji file="emoji-sparkles.png" alt="✨" /></div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>Cardfight!! Vanguard Standard</div>
                  <div>[VG-S]</div>
                  <div><Emoji file="emoji-point.png" alt="👉" /> <a href="https://forms.office.com/r/hzVHcgSHRV" target="_blank" rel="nofollow noopener" style={{ color: '#501c60' }}>https://forms.office.com/r/hzVHcgSHRV</a></div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>Cardfight!! Vanguard V Premium</div>
                  <div>[VG-V Premium]</div>
                  <div><Emoji file="emoji-point.png" alt="👉" /><a href="https://forms.office.com/r/z6fBzwBWBk" target="_blank" rel="nofollow noopener" style={{ color: '#501c60' }}>https://forms.office.com/r/z6fBzwBWBk</a></div>
                </TextBlock>

                <TextBlock>
                  <div>
                    <Hash text="#cardfightvanguard" /> <Hash text="#bushiroad" /> <Hash text="#cardfightvanguardbahasa" /> <Hash text="#cardfightvanguardoverDress" />
                  </div>
                  <div>
                    <Hash text="#CardfightVanguardOverdress" /> <Hash text="#CardfightVanguard" /> <Hash text="#VGBahasa" /> <Hash text="#jommain" /> <Hash text="#cardfightvanguardmalaysia" />
                  </div>
                </TextBlock>
              </div>

              <div className="tribe-events tribe-common" style={{ marginBottom: 32 }}>
                <div className="tribe-events-c-subscribe-dropdown__button" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #141827', borderRadius: 4,
                  padding: '11px 20px', fontFamily: '"Helvetica Neue", Helvetica, sans-serif', fontSize: 14, fontWeight: 700,
                  color: '#141827', background: '#fff', cursor: 'default',
                }}>
                  <svg aria-hidden="true" viewBox="0 0 23 17" width="23" height="17" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M.128.896V16.13c0 .211.145.383.323.383h15.354c.179 0 .323-.172.323-.383V.896c0-.212-.144-.383-.323-.383H.451C.273.513.128.684.128.896Zm16 6.742h-.901V4.679H1.009v10.729h14.218v-3.336h.901V7.638ZM1.01 1.614h14.218v2.058H1.009V1.614Z" />
                    <path d="M20.5 9.846H8.312M18.524 6.953l2.89 2.909-2.855 2.855" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" />
                  </svg>
                  <span>Add to calendar</span>
                  <svg aria-hidden="true" viewBox="0 0 10 7" width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.008.609L5 4.6 8.992.61l.958.958L5 6.517.05 1.566l.958-.958z" /></svg>
                </div>
              </div>

              <div className="tribe-events-single-section tribe-events-event-meta primary tribe-clearfix flex flex-wrap" style={{ color: '#141827', fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif', fontSize: 14, lineHeight: '28.9px' }}>
                <MetaGroup title="Details">
                  <li><span style={{ fontWeight: 700 }}>Start:</span><br /><abbr title="2022-08-27">August 27, 2022</abbr></li>
                  <li><span style={{ fontWeight: 700 }}>End:</span><br /><abbr title="2022-08-28">August 28, 2022</abbr></li>
                </MetaGroup>
                <MetaGroup title="Organizer">
                  <li>Engkodok Games</li>
                </MetaGroup>
              </div>

              <div className="tribe-events-single-section tribe-events-event-meta secondary tribe-clearfix flex flex-wrap" style={{ color: '#141827', fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif', fontSize: 14, lineHeight: '28.9px' }}>
                <MetaGroup title="Venue">
                  <li>KOMTAR JBCC</li>
                  <li>
                    <address style={{ fontStyle: 'normal' }}>
                      KOMTAR JBCC, City Centre, 80000 Johor Bahru, Johor<br />
                      City Centre, Johor Bahru 80000 Malaysia<br />
                      <a href="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=KOMTAR+JBCC%2C+City+Centre%2C+80000+Johor+Bahru%2C+Johor+City+Centre+Johor+Bahru+80000+Malaysia" target="_blank" rel="noreferrer noopener" style={{ color: '#501c60' }}>+ Google Map</a>
                    </address>
                  </li>
                </MetaGroup>

                <div className="tribe-events-venue-map" style={{ flex: '1 1 420px', minWidth: 280, padding: '32px 0 16px' }}>
                  <iframe title="Google maps iframe displaying the address to KOMTAR JBCC" aria-label="Venue location map" width="100%" height="350" style={{ border: 0 }} src={mapSrc} allowFullScreen />
                </div>
              </div>
            </article>

            <div id="tribe-events-footer" style={{ marginTop: 16 }}>
              <EventNavigation />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 bg-[#14171C] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-3 px-[15px] text-center">
          <img src="/images/cropped-Logo-EG.png" width={66} height={71} alt="Engkodok Games" className="h-auto w-[48px] opacity-95" />
          <p className="text-[13px] font-medium tracking-[0.02em] text-white/80">Engkodok Games © 2026</p>
        </div>
      </footer>
    </>
  )
}

function EventNavigation() {
  return (
    <nav aria-label="Event Navigation" style={{ margin: '0 0 24px' }}>
      <ul className="flex flex-wrap justify-between gap-4" style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: '"Helvetica Neue", Helvetica, sans-serif', fontSize: 16, lineHeight: '28.9px' }}>
        <li>
          <Link href={previousEventUrl} style={{ color: '#501c60', textDecoration: 'none' }}><span>«</span> Vanguard Masters Cup 2022 Spring</Link>
        </li>
        <li>
          <Link href={nextEventUrl} style={{ color: '#501c60', textDecoration: 'none' }}>VMC Kuala Lumpur @ TAGCC <span>»</span></Link>
        </li>
      </ul>
    </nav>
  )
}

function TextBlock({ children }: { children: ReactNode }) {
  return <div className="cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q" style={{ margin: '0 0 16px' }}>{children}</div>
}

function Emoji({ file, alt }: { file: string; alt: string }) {
  return <img decoding="async" src={`/cloned-assets/${file}`} alt={alt} width="16" height="16" style={{ display: 'inline', width: 16, height: 16, marginLeft: 1, marginRight: 1, verticalAlign: '-2px' }} />
}

function Hash({ text }: { text: string }) {
  const slug = text.replace(/^#/, '').toLowerCase()
  return <a href={`https://www.facebook.com/hashtag/${slug}`} target="_blank" rel="noopener" style={{ color: '#501c60' }}>{text}</a>
}

function MetaGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="tribe-events-meta-group" style={{ flex: '0 1 168px', margin: '0 24px 0 0', padding: '32px 0 16px' }}>
      <h2 style={{ margin: '0 0 8px', padding: 0, color: '#141827', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', fontSize: 14, fontWeight: 700, lineHeight: '18.2px', textTransform: 'uppercase' }}>{title}</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {children}
      </ul>
    </div>
  )
}
