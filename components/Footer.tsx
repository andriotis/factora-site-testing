"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-gray-900 px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-semibold mb-4">Factora</div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <a
                  href="mailto:info@factora.eu"
                  className="hover:text-[#2F9A8A]"
                >
                  info@factora.eu
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/about" className="hover:text-[#2F9A8A]">
                  About
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-[#2F9A8A]">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/pricing" className="hover:text-[#2F9A8A]">
                  Pricing
                </Link>
              </div>
              <div>
                <Link href="/blog" className="hover:text-[#2F9A8A]">
                  Blog
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legals</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/privacy" className="hover:text-[#2F9A8A]">
                  Privacy & Policy
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-[#2F9A8A]">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Factora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
