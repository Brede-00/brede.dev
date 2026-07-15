import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource/fragment-mono";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site, fullName } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${fullName} — ${site.tagline}`,
    template: `%s · ${site.domain}`,
  },
  description: site.metaDescription,
  openGraph: {
    title: `${fullName} — ${site.tagline}`,
    description: site.metaDescription,
    url: site.url,
    siteName: site.domain,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${fullName} — ${site.tagline}`,
    description: site.metaDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
