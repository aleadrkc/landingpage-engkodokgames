import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://demolandingengkodoggames.z48.web.core.windows.net";
const SITE_NAME = "Engkodok Games";
const DEFAULT_DESC =
  "Malaysia's trusted trading card game store. Shop Weiss Schwarz, Cardfight!! Vanguard, pre-orders, and TCG products at our Petaling Jaya store.";
const OG_IMAGE =
  "/cloned-assets/wp-content/uploads/2022/03/cropped-Logo-EG.png";
const ICON =
  "/cloned-assets/wp-content/uploads/2022/03/cropped-57-px-01-180x180.png";

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
