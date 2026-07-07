'use client'

import { SiteFooter } from './SiteFooter'
import { imageSizes, imageSrcSet } from '@/lib/responsive-images'

const navItems = [
  ['Home', '/'],
  ['Product', '/product/'],
  ['Inventory', 'https://inventory.engkodokgames.com/'],
  ['Retailer', '/retailer/'],
  ['News', '/news/'],
  ['Events', '/events/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
  ['LOCATIONS', '/locations/petaling-jaya/'],
]

function Header() {
  return (
    <header className="header">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:p-2.5">Skip to content</a>
      <div className="hfg_header site-header relative shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]">
        <nav className="header--row header-main layout-full-contained nv-navbar max-md:hidden">
          <div className="mx-auto max-w-[1170px] px-[15px]">
            <div className="flex w-full items-center py-[14px]">
              <div className="site-logo shrink-0">
                <a className="brand flex items-center" href="/" aria-label="Engkodok Games Where games is fun">
                  <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
                </a>
              </div>
              <div className="ml-auto">
                <ul className="flex items-center gap-0" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navItems.map(([label, href]) => (
                    <li key={label} style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      <a
                        href={href}
                        className="block px-[22px] py-[34px] text-[13.6px] font-semibold uppercase leading-[21.76px]"
                        style={{ color: label === 'Contact' ? '#e11b22' : '#14171C' }}
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
              <a className="brand flex items-center" href="/" aria-label="Engkodok Games Where games is fun">
                <img width="200" height="215" src="/images/cropped-Logo-EG.png" srcSet={imageSrcSet("/images/cropped-Logo-EG.png")} sizes={imageSizes("/images/cropped-Logo-EG.png")} alt="Engkodok Games logo" className="h-auto w-[55px]" style={{ aspectRatio: '200/215' }} />
              </a>
              <button type="button" className="flex items-center gap-2 text-[13px] font-semibold uppercase text-[#14171C]" aria-label="Navigation Menu">
                <span>Menu</span>
                <span className="flex flex-col gap-[4px]">
                  <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                  <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                  <span className="block h-[2px] w-[18px] bg-[#14171C]" />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return <SiteFooter />;
}

export default function ContactPageClient() {
  return (
    <>
      <Header />

      <main id="content" className="neve-main">
        <div className="container single-page-container mx-auto max-w-[1170px] px-[15px]">
          <div className="row">
            <div className="nv-single-page-wrap col">
              <div className="nv-content-wrap entry-content">
                <h1
                  className="has-text-align-center wp-block-heading"
                  style={{
                    fontSize: '50px',
                    fontWeight: 600,
                    color: '#14171C',
                    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                    lineHeight: '65px',
                    margin: '0 0 30px',
                    textAlign: 'center',
                  }}
                >
                  Contact Us
                </h1>

                <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: '34px', margin: '0 0 29.75px', padding: 0 }}>
                  <div className="wp-block-column" style={{ flexBasis: '33.33%' }} />
                  <div className="wp-block-column" style={{ flexBasis: '33.33%' }}>
                    <hr className="wp-block-separator has-css-opacity" style={{ display: 'inline-block', width: '100%', margin: '10px 0 20px', border: 0, borderTop: '2px solid #14171C', opacity: 0.2 }} />
                  </div>
                  <div className="wp-block-column" style={{ flexBasis: '33.33%' }} />
                </div>

                <div className="wp-block-columns flex flex-col md:flex-row" style={{ gap: '34px', margin: '0 0 29.75px', padding: 0 }}>
                  <div className="wp-block-column" style={{ flexBasis: '50%' }}>
                    <div className="wp-block-group">
                      <div className="wp-block-group__inner-container">
                        <div className="forminator-guttenberg">
                          <form id="forminator-module-133" className="forminator-ui forminator-custom-form forminator-custom-form-133 forminator-design--flat" method="post" noValidate>
                            <div role="alert" aria-live="polite" className="forminator-response-message forminator-error" aria-hidden="true" />

                            <div className="forminator-row" style={{ display: 'flex', margin: '0 -15px 30px', padding: 0 }}>
                              <div id="name-1" className="forminator-field-name forminator-col forminator-col-12" style={{ width: '100%', padding: '0 15px' }}>
                                <div className="forminator-field">
                                  <input
                                    type="text"
                                    name="name-1"
                                    defaultValue=""
                                    placeholder="Enter your name here"
                                    id="forminator-field-name-1"
                                    className="forminator-input forminator-name--field"
                                    aria-required="false"
                                    autoComplete="name"
                                    readOnly
                                    style={{
                                      width: '100%',
                                      height: '40.7969px',
                                      padding: '10px',
                                      fontSize: '16px',
                                      fontWeight: 400,
                                      color: '#000',
                                      background: '#EAF7FF',
                                      border: 0,
                                      borderRadius: 0,
                                      fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                      lineHeight: '20.8px',
                                      outline: 'none',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="forminator-row" style={{ display: 'flex', margin: '0 -15px 30px', padding: 0 }}>
                              <div id="email-1" className="forminator-field-email forminator-col forminator-col-12" style={{ width: '100%', padding: '0 15px' }}>
                                <div className="forminator-field">
                                  <input
                                    type="email"
                                    name="email-1"
                                    defaultValue=""
                                    placeholder="Enter your full email here"
                                    id="forminator-field-email-1"
                                    className="forminator-input forminator-email--field"
                                    data-required="true"
                                    aria-required="true"
                                    autoComplete="email"
                                    readOnly
                                    style={{
                                      width: '100%',
                                      height: '40.7969px',
                                      padding: '10px',
                                      fontSize: '16px',
                                      fontWeight: 400,
                                      color: '#000',
                                      background: '#EAF7FF',
                                      border: 0,
                                      borderRadius: 0,
                                      fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                      lineHeight: '20.8px',
                                      outline: 'none',
                                    }}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="forminator-row" style={{ display: 'flex', margin: '0 -15px 30px', padding: 0 }}>
                              <div id="textarea-1" className="forminator-field-textarea forminator-col forminator-col-12" style={{ width: '100%', padding: '0 15px' }}>
                                <div className="forminator-field">
                                  <label
                                    htmlFor="forminator-field-textarea-1"
                                    id="forminator-field-textarea-1-label"
                                    className="forminator-label"
                                    style={{ display: 'block', margin: '0 0 5px', fontSize: '12px', fontWeight: 700, color: '#14171C', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '20.4px' }}
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    name="textarea-1"
                                    placeholder="Enter your message..."
                                    id="forminator-field-textarea-1"
                                    className="forminator-textarea"
                                    maxLength={180}
                                    readOnly
                                    style={{
                                      width: '100%',
                                      height: '140px',
                                      minHeight: '140px',
                                      padding: '10px',
                                      fontSize: '16px',
                                      fontWeight: 400,
                                      color: '#000',
                                      background: '#EAF7FF',
                                      border: 0,
                                      borderRadius: 0,
                                      fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                      lineHeight: '20px',
                                      outline: 'none',
                                      resize: 'vertical',
                                    }}
                                  />
                                  <span id="forminator-field-textarea-1-description" className="forminator-description" style={{ display: 'block', margin: '5px 0 0', fontSize: '12px', color: '#777771', fontFamily: 'Poppins, Arial, Helvetica, sans-serif', lineHeight: '18px', textAlign: 'right' }}>
                                    <span data-limit="180" data-type="characters" data-editor="">0 / 180</span>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <input type="hidden" name="referer_url" value="" readOnly />
                            <div className="forminator-row forminator-row-last" style={{ display: 'flex', margin: '0 -15px 30px', padding: 0 }}>
                              <div className="forminator-col" style={{ width: '100%', padding: '0 15px' }}>
                                <div className="forminator-field">
                                  <button
                                    className="forminator-button forminator-button-submit"
                                    type="button"
                                    style={{
                                      width: '122.031px',
                                      height: '40.2969px',
                                      padding: '10px',
                                      fontSize: '14px',
                                      fontWeight: 500,
                                      color: '#fff',
                                      background: '#30C4D5',
                                      border: 0,
                                      borderRadius: 0,
                                      fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                                      lineHeight: '20.3px',
                                      cursor: 'default',
                                    }}
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wp-block-column" style={{ flexBasis: '50%' }}>
                    <h2
                      className="wp-block-heading"
                      style={{
                        fontSize: '50px',
                        fontWeight: 600,
                        color: '#14171C',
                        fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                        lineHeight: '65px',
                        margin: '0 0 30px',
                      }}
                    >
                      Get in touch
                    </h2>

                    <p className="wp-block-paragraph" style={contactRowStyle}>
                      <img decoding="async" width={15} height={15} className="wp-image-185" style={{ width: '15px', flex: '0 0 15px', marginTop: '6px' }} src="/images/PhoneIcon.png" srcSet={imageSrcSet("/images/PhoneIcon.png")} sizes={imageSizes("/images/PhoneIcon.png")} alt="Phone number icon" />
                      <span>+603 2702 2023</span>
                    </p>

                    <p className="wp-block-paragraph" style={contactRowStyle}>
                      <img decoding="async" width={13} height={16} className="wp-image-264" style={{ width: '13px', flex: '0 0 13px', marginTop: '5px' }} src="/images/LocationIcon.png" srcSet={imageSrcSet("/images/LocationIcon.png")} sizes={imageSizes("/images/LocationIcon.png")} alt="Location map pin icon" />
                      <span>L3-09, Wisma Academy, No.4A, Jalan 19/1, Seksyen 19, 46300 Petaling Jaya, Selangor</span>
                    </p>

                    <p className="wp-block-paragraph" style={contactRowStyle}>
                      <img decoding="async" width={17} height={12} className="wp-image-266" style={{ width: '17px', flex: '0 0 17px', marginTop: '8px' }} src="/images/EmailIcon.png" srcSet={imageSrcSet("/images/EmailIcon.png")} sizes={imageSizes("/images/EmailIcon.png")} alt="Email address icon" />
                      <span>info@engkodokgames.com</span>
                    </p>
                  </div>
                </div>

                <p className="wp-block-paragraph" style={contactPStyle}>
                  If you would like to register instead, you can fill up our online form.
                </p>

                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex flex" style={{ margin: '0 0 30px' }}>
                  <div className="wp-block-button aligncenter is-style-secondary w-full text-center">
                    <a
                      className="wp-block-button__link block w-full"
                      href="https://betobee.co/"
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#fff',
                        background: '#2B2B2B',
                        border: '0 solid #fff',
                        borderRadius: 0,
                        padding: '16px 35px',
                        height: '57.5938px',
                        fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
                        lineHeight: '25.6px',
                        textDecoration: 'none',
                      }}
                    >
                      Register 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

const contactPStyle = {
  fontSize: '17px',
  fontWeight: 400,
  color: '#14171C',
  fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
  lineHeight: '28.9px',
  margin: '0 0 30px',
} as const

const contactRowStyle = {
  ...contactPStyle,
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
} as const
