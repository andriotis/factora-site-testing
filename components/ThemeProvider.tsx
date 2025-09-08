"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

const ThemeProviderContext = createContext<
  ThemeProviderContextType | undefined
>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
}: // defaultTheme: _defaultTheme = "dark",
// storageKey: _storageKey = "theme",
ThemeProviderProps) {
  const [theme, _setTheme] = useState<Theme>("dark");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only apply theme after hydration
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add("dark");
    setResolvedTheme("dark");
  }, []);

  const setTheme = () => {
    // Intentionally force dark mode regardless of input
    _setTheme("dark");
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add("dark");
    }
    setResolvedTheme("dark");
  };

  const value = {
    theme: theme,
    setTheme,
    resolvedTheme,
  };

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return <div className="dark">{children}</div>;
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
