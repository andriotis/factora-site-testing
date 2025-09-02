import type { Metadata } from "next";
import "./globals.css";
import { EntranceProvider } from "@/components/EntranceProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Plasma } from "@/components/plasma";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "Your App",
  description: "A clean Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
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
        <div className="relative z-10">
          <ThemeProvider defaultTheme="dark" storageKey="site-theme">
            <EntranceProvider
              config={{
                preset: "subtle",
                duration: 1.2, // Increased from 0.6 to 1.2 for slower, more graceful animations
                stagger: 0.12, // Increased stagger for more pronounced cascading effect
                rootMargin: "0px 0px -5% 0px",
                disableOnMobileWidth: 0, // Enable animations on all devices including mobile
              }}
            >
              <Navigation />
              {children}
              <Footer />
            </EntranceProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
