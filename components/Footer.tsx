"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-semibold mb-4">Factora</div>
            <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
              <div>
                <a href="mailto:info@factora.eu" className="hover:text-white">
                  info@factora.eu
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
              <div>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
              <div>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </div>
              <div>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legals</h4>
            <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
              <div>
                <Link href="/privacy" className="hover:text-white">
                  Privacy & Policy
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Factora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
