import type { Metadata } from "next";
import "./globals.css";
import { EntranceProvider } from "@/components/EntranceProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://factora.eu"),
  title: "Factora",
  description: "Your Trusted AI Financial Assistant for Smarter B2B Payments",
  openGraph: {
    title: "Factora",
    description: "Your Trusted AI Financial Assistant for Smarter B2B Payments",
    url: "/",
    siteName: "Factora",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: "Factora logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factora",
    description: "Your Trusted AI Financial Assistant for Smarter B2B Payments",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo-light.svg",
    shortcut: "/logo-light.svg",
    apple: "/logo-light.svg",
  },
  alternates: {
    canonical: "https://factora.eu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <div className="fixed inset-0 z-0 bg-black">
          {/* Mobile background */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/plasma-mobile.svg"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Desktop background */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/plasma-desktop.svg"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-gray-700/15 pointer-events-none" />
        </div>
        <div className="relative z-10 overflow-x-hidden">
          <ThemeProvider defaultTheme="dark" storageKey="site-theme">
            <I18nProvider>
              <EntranceProvider
                config={{
                  preset: "subtle",
                  duration: 0.8, // Reduced from 1.2 for better performance
                  stagger: 0.08, // Reduced from 0.12 for less layout thrashing
                  rootMargin: "0px 0px -5% 0px",
                  disableOnMobileWidth: 0, // Enable animations on all devices including mobile
                }}
              >
                <Navigation />
                {children}
                <Footer />
              </EntranceProvider>
            </I18nProvider>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
