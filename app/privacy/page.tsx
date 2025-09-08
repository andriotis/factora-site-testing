"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.privacy.title}</h1>
          <p className="text-xl text-gray-300">{t.privacy.subtitle}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.info_collect_title}
            </h2>
            <p className="mb-4">{t.privacy.info_collect_intro}</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {t.privacy.info_collect_items.map((item: string, idx: number) => (
                <li key={`collect-${idx}`}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.use_title}
            </h2>
            <p className="mb-4">{t.privacy.use_intro}</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {t.privacy.use_items.map((item: string, idx: number) => (
                <li key={`use-${idx}`}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.sharing_title}
            </h2>
            <p className="mb-6">{t.privacy.sharing_body}</p>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.security_title}
            </h2>
            <p className="mb-6">{t.privacy.security_body}</p>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.rights_title}
            </h2>
            <p className="mb-4">{t.privacy.rights_intro}</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {t.privacy.rights_items.map((item: string, idx: number) => (
                <li key={`rights-${idx}`}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              {t.privacy.contact_title}
            </h2>
            <p className="mb-6">
              {t.privacy.contact_body_prefix}{" "}
              <a
                href="mailto:info@factora.eu"
                className="text-[#2F9A8A] hover:underline"
              >
                info@factora.eu
              </a>
            </p>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#2F9A8A] text-white rounded-full font-medium hover:bg-[#1a5d57] transition-colors"
              >
                {t.privacy.back_to_contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
