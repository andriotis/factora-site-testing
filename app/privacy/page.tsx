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
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div dangerouslySetInnerHTML={{ __html: t.privacy.html ?? "" }} />

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
