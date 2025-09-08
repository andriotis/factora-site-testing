"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import {
  dictionaries,
  getInitialLocale,
  SupportedLocale,
  TranslationDictionary,
} from "@/lib/i18n";

type I18nContextValue = {
  locale: SupportedLocale;
  t: TranslationDictionary;
  setLocale: (locale: SupportedLocale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Start with the server-rendered locale to avoid hydration mismatch.
  // RootLayout renders html lang="en", so we start with "en" and update after mount.
  const [locale, setLocaleState] = useState<SupportedLocale>("en");

  useEffect(() => {
    const initial = getInitialLocale();
    setLocaleState(initial);
    // Also update <html lang> to reflect active locale
    if (typeof document !== "undefined") {
      document.documentElement.lang = initial;
    }
  }, []);

  const setLocale = useCallback((next: SupportedLocale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", next);
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale]
  );

  // Keep document title/description in sync with locale
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = dictionaries[locale].meta.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta)
        meta.setAttribute("content", dictionaries[locale].meta.description);
    }
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
