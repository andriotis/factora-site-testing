"use client";
import { useI18n } from "@/components/I18nProvider";

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen text-white px-6 py-16">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1>{t.terms.title}</h1>
        <p>
          {t.terms.intro} {t.terms.contact_prefix}
          <a href="mailto:info@factora.eu"> info@factora.eu</a>.
        </p>
      </div>
    </div>
  );
}
