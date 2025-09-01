import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { EntranceProvider } from "@/components/EntranceProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="system" storageKey="site-theme">
          <SmoothScrollProvider
            config={{
              lerp: 0.035, // Ultra smooth - very slow interpolation
              maxDelta: 60, // Gentle acceleration limit
              touchMultiplier: 1.0, // Smooth touch response
              disableOnMobileWidth: 0, // Enable on all devices including mobile
              lenisOptions: {
                duration: 2.2, // Long duration for ultra buttery feel
                wheelMultiplier: 0.6, // Very gentle wheel response
                normalizeWheel: true,
                smoothWheel: true,
                smoothTouch: true, // Enable smooth touch on mobile
              },
            }}
          >
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
            </EntranceProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
