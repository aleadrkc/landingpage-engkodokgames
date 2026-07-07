'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import type { ReactNode } from 'react'
import EngkodokHeader from './EngkodokHeader'
import { SiteFooter } from './SiteFooter'
import { EventSchema } from './EventSchema'
import { imageSizes, imageSrcSet } from '@/lib/responsive-images'

const eventUrl = '/events/bushiroad-spring-fest/'
const nextEventUrl = '/event/learn-2-play-cardfight-vanguard/'

export default function BushiroadSpringFestPageClient() {
  return (
    <>
      <EventSchema
        name="Bushiroad Spring Fest"
        description="Bushiroad Spring Fest tournament details: Regional Championship structure, team formation rules for VGE and WSE, and prize information in Malaysia."
        startDate="2022-06-11"
        endDate="2022-06-12"
        locationName="Malaysia"
        image="/images/bushiroad-spring-fest.svg"
        url="/events/bushiroad-spring-fest/"
        organizerName="Engkodok Games"
      />
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
              <Link href="/events/" style={{ color: '#501c60', textDecoration: 'none' }}> &laquo; All Events</Link>
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
              Bushiroad Spring Fest
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
              <span>June 11, 2022 @ 8:00 am</span> - <span>&nbsp;June 12, 2022 @ 5:00 pm</span>
            </div>

            <EventNavigation nextUrl={nextEventUrl} />

            <article id="post-244" className="post-244 tribe_events type-tribe_events status-publish hentry">
              {/* No featured image on source — using Bushiroad logo as visual anchor */}
              <div className="tribe-events-event-image" style={{ margin: '0 0 32px' }}>
                <Link href={eventUrl} aria-label="Bushiroad Spring Fest">
                  <img
                    width="600"
                    height="200"
                    src="/images/bushiroad-spring-fest.svg" srcSet={imageSrcSet("/images/bushiroad-spring-fest.svg")} sizes={imageSizes("/images/bushiroad-spring-fest.svg")}
                    alt="Bushiroad Spring Fest"
                    className="attachment-full size-full wp-post-image h-auto"
                    style={{ maxWidth: 600, display: 'block' }}
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
                  <section className="bsf">
                    <u>Overall Tournament Structure</u>
                  </section>
                </TextBlock>

                <TextBlock>
                  <ol style={{ margin: '0 0 16px', paddingLeft: 20 }}>
                    <li>There will only be 1 level of tournament: Regional Championship.</li>
                    <li>
                      The Regional Championship will run a <strong>team tournament format</strong> (groups of 3) for all
                      games, except some locations with a smaller player base may hold individual tournaments instead.
                      <ol type="a" style={{ marginTop: 8 }}>
                        <li>
                          The prizes will be the same for team and individual tournaments, including the top prizes.
                          (e.g. Top 4 playmat will be given to Top 4 players in individual tournaments, even when Top 8
                          cut is made.)
                        </li>
                      </ol>
                    </li>
                  </ol>
                </TextBlock>

                <TextBlock>
                  <section className="bsf">
                    For Regional Championships, players of VGE and WSE must participate in teams of 3, unless otherwise
                    stated. The restrictions for team forming are as follow:
                  </section>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>
                    VGE-S: Each team member has to have a unique Grade 3 unit in their ride deck.
                    <br />
                    i.e. if Player A has Chakrabarthi Divine Dragon, Nirvana in their ride deck,
                    <br />
                    Player B and C cannot have this G3 in both their ride deck and deck.
                  </div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>VGE-V/VGE-P: All 3 players in a team must use different clans</div>
                </TextBlock>

                <TextBlock>
                  <div>&nbsp;</div>
                  <div>WSE: All 3 players in a team must use different titles</div>
                </TextBlock>
              </div>

              <div className="tribe-events tribe-common" style={{ marginBottom: 32 }}>
                <div
                  className="tribe-events-c-subscribe-dropdown__button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    border: '1px solid #141827',
                    borderRadius: 4,
                    padding: '11px 20px',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#141827',
                    background: '#fff',
                    cursor: 'default',
                  }}
                >
                  <svg aria-hidden="true" viewBox="0 0 23 17" width="23" height="17" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M.128.896V16.13c0 .211.145.383.323.383h15.354c.179 0 .323-.172.323-.383V.896c0-.212-.144-.383-.323-.383H.451C.273.513.128.684.128.896Zm16 6.742h-.901V4.679H1.009v10.729h14.218v-3.336h.901V7.638ZM1.01 1.614h14.218v2.058H1.009V1.614Z"
                    />
                    <path
                      d="M20.5 9.846H8.312M18.524 6.953l2.89 2.909-2.855 2.855"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      stroke="currentColor"
                    />
                  </svg>
                  <span>Add to calendar</span>
                  <svg aria-hidden="true" viewBox="0 0 10 7" width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.008.609L5 4.6 8.992.61l.958.958L5 6.517.05 1.566l.958-.958z"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="tribe-events-single-section tribe-events-event-meta primary tribe-clearfix flex flex-wrap"
                style={{
                  color: '#141827',
                  fontFamily: '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
                  fontSize: 14,
                  lineHeight: '28.9px',
                }}
              >
                <MetaGroup title="Details">
                  <li>
                    <span style={{ fontWeight: 700 }}>Start:</span>
                    <br />
                    <abbr title="2022-06-11">June 11, 2022 @ 8:00 am</abbr>
                  </li>
                  <li>
                    <span style={{ fontWeight: 700 }}>End:</span>
                    <br />
                    <abbr title="2022-06-12">June 12, 2022 @ 5:00 pm</abbr>
                  </li>
                </MetaGroup>
                <MetaGroup title="Organizer">
                  <li>Engkodok Games</li>
                </MetaGroup>
              </div>
            </article>

            <div id="tribe-events-footer" style={{ marginTop: 16 }}>
              <EventNavigation nextUrl={nextEventUrl} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

function EventNavigation({ nextUrl }: { nextUrl: string }) {
  return (
    <nav aria-label="Event Navigation" style={{ margin: '0 0 24px' }}>
      <ul
        className="flex flex-wrap justify-between gap-4"
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: 16,
          lineHeight: '28.9px',
        }}
      >
        <li />
        <li>
          <Link href={nextUrl} style={{ color: '#501c60', textDecoration: 'none' }}>
            Learn 2 Play: Cardfight! Vanguard <span>&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function TextBlock({ children, style: extraStyle }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className="cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q"
      style={{ margin: '0 0 16px', ...extraStyle }}
    >
      {children}
    </div>
  )
}

function MetaGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="tribe-events-meta-group" style={{ flex: '1 0 168px', margin: '0 24px 0 0', padding: '32px 0 16px' }}>
      <h2
        style={{
          margin: '0 0 8px',
          padding: 0,
          color: '#141827',
          fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: '18.2px',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>{children}</ul>
    </div>
  )
}
