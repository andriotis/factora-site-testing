"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { t } = useI18n();
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
              <div>
                <a
                  href="https://www.linkedin.com/company/factoraeu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Factora on LinkedIn"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2F9A8A]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="40"
                    height="40"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.052 20.452H3.999V9h3.053v11.452zM5.525 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.851 0-2.133 1.445-2.133 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.369-1.848 3.6 0 4.267 2.37 4.267 5.455v6.284z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.company_title}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/about" className="hover:text-[#2F9A8A]">
                  {t.nav.about}
                </Link>
              </div>
              <div>
                <Link href="/careers" className="hover:text-[#2F9A8A]">
                  {t.nav.careers}
                </Link>
              </div>
              <div>
                <Link href="/contact" className="hover:text-[#2F9A8A]">
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.solutions_title}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/#core" className="hover:text-[#2F9A8A]">
                  {t.nav.solutions_core}
                </Link>
              </div>
              <div>
                <Link href="/#smes" className="hover:text-[#2F9A8A]">
                  {t.nav.solutions_smes}
                </Link>
              </div>
              <div>
                <Link href="/#banking" className="hover:text-[#2F9A8A]">
                  {t.nav.solutions_banking}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.legals_title}</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <Link href="/privacy" className="hover:text-[#2F9A8A]">
                  {t.footer.privacy_label}
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-[#2F9A8A]">
                  {t.footer.terms_label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Factora. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
