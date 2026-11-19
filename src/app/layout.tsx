import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { seo, settings } from "@content/08-SETTINGS";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: settings.organizationName }],
  creator: settings.organizationName,
  publisher: settings.organizationName,
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: "/",
    siteName: settings.organizationName,
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage.url],
  },
  icons: {
    icon: settings.logo,
    shortcut: settings.logo,
    apple: settings.logo,
  },
  robots: seo.robots,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seo.themeColor,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: settings.fullName,
  alternateName: settings.organizationName,
  url: siteUrl,
  logo: `${siteUrl}${settings.logo}`,
  email: settings.email,
  address: {
    "@type": "PostalAddress",
    ...seo.address,
  },
  sameAs: [settings.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${display.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg transition focus:translate-y-0"
        >
          Lewati ke konten utama
        </a>
        <IntroAnimation />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
