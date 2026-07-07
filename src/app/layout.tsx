import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://demolandingengkodoggames.z48.web.core.windows.net";
const SITE_NAME = "Engkodok Games";
const DEFAULT_DESC =
  "Malaysia's trusted trading card game store. Shop Weiss Schwarz, Cardfight!! Vanguard, pre-orders, and TCG products at our Petaling Jaya store.";
const OG_IMAGE =
  "/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png";
const ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%2314171C'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='Arial' font-size='16' font-weight='700' fill='white'%3EEG%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} – Trading Card & Hobby Store Malaysia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESC,
  openGraph: {
    title: `${SITE_NAME} – Trading Card & Hobby Store Malaysia`,
    description: DEFAULT_DESC,
    url: BASE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 200, height: 215 }],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Trading Card & Hobby Store Malaysia`,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
  },
  icons: { icon: ICON },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
