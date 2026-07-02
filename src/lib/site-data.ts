export type Card = { title: string; href: string; image: string; meta?: string; excerpt?: string };
export type PageRecord = { slug: string; title: string; kind: 'productDetail' | 'simple' | 'eventDetail'; image?: string; heading?: string; body?: string[] };

export const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCT', href: '/product/' },
  { label: 'INVENTORY', href: 'https://inventory.engkodokgames.com/' },
  { label: 'RETAILER', href: '/retailer-2/' },
  { label: 'NEWS', href: '/news-2/' },
  { label: 'EVENTS', href: '/events/' },
  { label: 'ABOUT', href: '/about-publish-games/' },
  { label: 'CONTACT', href: '/contact-2/' },
];

export const assets = {
  logo: '/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png',
  favicon: '/cloned-assets/wp-content/uploads/2022/03/cropped-57-px-01-180x180.png',
};

export const heroSlides: Card[] = [
  { title: 'Booster Pack 07', href: '/product/', image: '/cloned-assets/wp-content/uploads/slider2/topheader_782_440_dbt07_02.jpeg' },
  { title: 'Monster Strike Vol.2', href: '/product/', image: '/cloned-assets/wp-content/uploads/slider2/topheader_782_440_dtb06_01.jpeg' },
  { title: 'Starter Decks Kini Di Pasaran', href: '/product/', image: '/cloned-assets/wp-content/uploads/slider2/SD01-05_Kini_Di_Pasaran.jpeg' },
];

export const preOrderOpened: Card[] = [
  { title: 'Booster Pack 07', href: '/product/', image: '/cloned-assets/wp-content/uploads/slider2/topheader_782_440_dbt07_02.jpeg', meta: 'Pre-Order Opened' },
  { title: 'Monster Strike Vol.2', href: '/product/', image: '/cloned-assets/wp-content/uploads/slider2/topheader_782_440_dtb06_01.jpeg', meta: 'Pre-Order Opened' },
];

export const preOrderClosed: Card[] = [
  { title: 'D-BT08', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/10/VG-D-BT08-2-1024x576.webp', meta: 'Pre-Order Closed' },
  { title: 'One Turn of Summertime', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/08/o0tosa_2000x.webp', meta: 'Pre-Order Closed' },
  { title: 'Saekano Fine', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/08/saekanofine_1024x1024.webp', meta: 'Pre-Order Closed' },
];

export const onSale: Card[] = [
  { title: 'The Quintessential Quintuplets Movie', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/07/mv_5HY_bp_a.jpg', meta: 'Product On Sale' },
  { title: 'Record of Ragnarok', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/07/DTB02_mediakit_banner-1.jpg', meta: 'Product On Sale' },
  { title: 'D-TD02', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/06/dtd02_main_865w219d86252.jpg', meta: 'Product On Sale' },
];

export const products: Card[] = [
  { title: 'Cardfight!! Vanguard', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/03/Vg_new_logo.png', excerpt: 'Trading card game products, trial decks, boosters, and special releases.' },
  { title: 'Weiss Schwarz', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/03/logo-ws.png', excerpt: 'Weiss Schwarz booster and trial deck releases.' },
  ...onSale,
  { title: 'D-TD01', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/06/dtd01_main_865w219d86252.jpg', meta: 'Trial Deck' },
  { title: 'D-TD02', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/06/dtd02_main_865w219d86252.jpg', meta: 'Trial Deck' },
  { title: 'D-TD03', href: '/product/', image: '/cloned-assets/wp-content/uploads/2022/06/dtd03_main_865w219d86252.jpg', meta: 'Trial Deck' },
  { title: 'Lycoris Recoil', href: '/product/', image: '/cloned-assets/wp-content/uploads/2023/03/wsbp-Lycoris.png', meta: 'Weiss Schwarz' },
  { title: 'Uma Musume', href: '/product/', image: '/cloned-assets/wp-content/uploads/2023/03/WSBP-Uma.jpg', meta: 'Weiss Schwarz' },
];

export const newsCards: Card[] = [
  { title: 'Cardfight!! Vanguard Bahasa', href: '/engkodok-games-latest-news/', image: '/cloned-assets/wp-content/uploads/2022/06/FB-price-banner2.jpg', excerpt: 'Latest announcements and Bahasa release information.' },
  { title: 'Starter Deck', href: '/engkodok-games-latest-news/', image: '/cloned-assets/wp-content/uploads/2022/06/dtd01_main_865w219d86252.jpg' },
  { title: 'Booster', href: '/engkodok-games-latest-news/', image: '/cloned-assets/wp-content/uploads/2022/06/Media-Kit-Template_-BT01_MY_v2_1980_JPG.jpg' },
  { title: 'Weiss Schwarz Booster', href: '/engkodok-games-latest-news/', image: '/cloned-assets/wp-content/uploads/2022/06/playset_date_a_live_booster_2__1652937484_b27c64da_progressive.jpg' },
];

export const eventCards: Card[] = [
  { title: 'VMC Kuala Lumpur @ TAGCC', href: '/event/vmc-kuala-lumpur-tagcc/', image: '/cloned-assets/wp-content/uploads/2022/10/CARDFIGHT-VG-JAPAN.png', meta: 'October 22, 2022' },
  { title: 'Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)', href: '/event/vanguard-masters-cup-2022-south-malaysia-johor-bahru/', image: '/cloned-assets/wp-content/uploads/2022/08/Poster_VMC22_Johor-Bahru_V7.png', meta: 'August 27, 2022' },
  { title: 'Vanguard Masters Cup 2022 Spring', href: '/event/vanguard-masters-cup-2022-spring/', image: '/cloned-assets/wp-content/uploads/2022/06/Poster_VMC22_2-01-1.png', meta: 'June 11, 2022' },
  { title: 'Learn 2 Play: Cardfight! Vanguard', href: '/event/learn-2-play-cardfight-vanguard/', image: '/cloned-assets/wp-content/uploads/2022/06/FBJOMBELAJAR_July2022-01.png', meta: 'July 2022' },
];

export const pageRecords: PageRecord[] = [
  { slug: 'product/vge-d-vs04', title: 'VGE-D-VS04 | Engkodok Games', kind: 'productDetail', heading: 'VGE-D-VS04', image: '/cloned-assets/wp-content/uploads/2022/03/1920-x-1080-px.jpg', body: ['A featured Cardfight!! Vanguard English release distributed by Engkodok Games.'] },
  { slug: 'product/vge-v-vs03', title: 'VGE-V-VS03 | Engkodok Games', kind: 'productDetail', heading: 'VGE-V-VS03', image: '/cloned-assets/wp-content/uploads/2022/03/1920-x-1080-px-2.jpg', body: ['Cardfight!! Vanguard V-Series release information and product artwork.'] },
  { slug: 'product/vge-d-lbt02', title: 'VGE-D-LBT02 | Engkodok Games', kind: 'productDetail', heading: 'VGE-D-LBT02', image: '/cloned-assets/wp-content/uploads/2022/03/1920-x-1080px.jpg', body: ['Lyrical Booster product showcase with original product visual retained locally.'] },
  { slug: 'product/vg-d-bt05', title: 'VG-D-BT05 | Engkodok Games', kind: 'productDetail', heading: 'VG-D-BT05', image: '/cloned-assets/wp-content/uploads/2022/03/dbt05_main_04256400p3774.jpg', body: ['Booster product page rebuilt as a clean static product feature.'] },
  { slug: 'about-publish-games', title: 'About | Engkodok Games', kind: 'simple', heading: 'Our Story', image: '/cloned-assets/wp-content/uploads/2022/03/AboutUsPic.png', body: ['Engkodok Games is a Malaysian tabletop and trading-card-games publisher and distributor.', 'The brand focuses on making games accessible, fun, and easy to discover through local retailers, events, and community support.'] },
  { slug: 'contact-2', title: 'Contact | Engkodok Games', kind: 'simple', heading: 'Contact Us', body: ['Get in touch with Engkodok Games for product, retailer, and community enquiries.', 'Phone: +60 11-1067 3089', 'Address: Malaysia', 'Email: engkodokgames@gmail.com'] },
  { slug: 'retailer-2', title: 'Retailer | Engkodok Games', kind: 'simple', heading: 'Retailer', body: ['SIGNUP PROCESS', 'Submit the retailer form, wait for confirmation, and start selling Engkodok Games products.', 'PERKS', 'Retailer support includes product access, marketing material, pre-order support, and community visibility.'] },
  { slug: 'elementor-555', title: 'Pre-Order Products | Engkodok Games', kind: 'simple', heading: 'Pre-Order Products', body: ['Pre-order products, products closing, and on-sale product highlights are shown on the homepage in a cleaner static layout.'] },
  { slug: 'engkodok-games-latest-news', title: 'Engkodok Games - Latest News! | Engkodok Games', kind: 'simple', heading: 'Engkodok Games – Latest News!', body: ['Cardfight!! Vanguard Bahasa, starter deck, booster, and Weiss Schwarz announcements.'] },
  { slug: 'event/bushiroad-spring-fest', title: 'Bushiroad Spring Fest | Engkodok Games', kind: 'eventDetail', heading: 'Bushiroad Spring Fest', body: ['Details, organizer, and venue information for the Bushiroad Spring Fest listing.'] },
  { slug: 'event/learn-2-play-cardfight-vanguard', title: 'Learn 2 Play: Cardfight! Vanguard | Engkodok Games', kind: 'eventDetail', heading: 'Learn 2 Play: Cardfight! Vanguard', image: '/cloned-assets/wp-content/uploads/2022/06/FBJOMBELAJAR_July2022-01.png', body: ['Community learn-to-play event for Cardfight!! Vanguard.'] },
  { slug: 'event/vanguard-masters-cup-2022-spring', title: 'Vanguard Masters Cup 2022 Spring | Engkodok Games', kind: 'eventDetail', heading: 'Vanguard Masters Cup 2022 Spring', image: '/cloned-assets/wp-content/uploads/2022/06/Poster_VMC22_2-01-1.png', body: ['Vanguard Masters Cup 2022 Spring event information.'] },
  { slug: 'event/vanguard-masters-cup-2022-south-malaysia-johor-bahru', title: 'Vanguard Masters Cup 2022 South Malaysia (Johor Bahru) | Engkodok Games', kind: 'eventDetail', heading: 'Vanguard Masters Cup 2022 South Malaysia (Johor Bahru)', image: '/cloned-assets/wp-content/uploads/2022/08/Poster_VMC22_Johor-Bahru_V7.png', body: ['South Malaysia Vanguard Masters Cup event hosted in Johor Bahru.'] },
  { slug: 'event/vmc-kuala-lumpur-tagcc', title: 'VMC Kuala Lumpur @ TAGCC | Engkodok Games', kind: 'eventDetail', heading: 'VMC Kuala Lumpur @ TAGCC', image: '/cloned-assets/wp-content/uploads/2022/10/CARDFIGHT-VG-JAPAN.png', body: ['Vanguard Masters Cup Kuala Lumpur listing for TAGCC.'] },
];

export const allSlugs = ['', 'product', 'retailer', 'news', 'news-2', 'events', ...pageRecords.map((page) => page.slug)];
