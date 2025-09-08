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
            © {new Date().getFullYear()} Factora. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
