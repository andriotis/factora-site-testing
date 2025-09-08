"use client";

import { useI18n } from "@/components/I18nProvider";
import type { SupportedLocale } from "@/lib/i18n";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "el", label: "EL" },
] as const;

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="flex items-center gap-1 rounded-md bg-white/10 px-1 py-1">
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code as SupportedLocale)}
          className={`px-2 py-1 text-sm rounded-md transition-colors ${
            locale === l.code
              ? "bg-white text-black"
              : "text-white hover:bg-white/10"
          }`}
          aria-pressed={locale === l.code}
          aria-label={`Switch language to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
