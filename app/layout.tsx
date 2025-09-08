import type { Metadata } from "next";
import "./globals.css";
import { EntranceProvider } from "@/components/EntranceProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Plasma } from "@/components/plasma";
import { Footer } from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";
export const metadata: Metadata = {
  title: "Factora",
  description: "Your Trusted AI Financial Assistant for Smarter B2B Payments",
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
          <Plasma
            color="#2F9A8A"
            speed={0.2}
            direction="reverse"
            scale={1.5}
            opacity={2}
            mouseInteractive={false}
          />
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
      </body>
    </html>
  );
}
