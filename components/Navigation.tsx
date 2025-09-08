"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { MotionWrapper } from "@/components/EntranceProvider";
import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function Navigation() {
  const pathname = usePathname();
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  type NavItem = {
    href?: string;
    label: string;
    isDropdown?: boolean;
    items?: { href: string; label: string }[];
  };

  const navItems: NavItem[] = [
    {
      label: t.nav.solutions,
      isDropdown: true,
      items: [
        { href: "/#core", label: t.nav.solutions_core },
        { href: "/#smes", label: t.nav.solutions_smes },
        { href: "/#banking", label: t.nav.solutions_banking },
      ],
    },
    { href: "/about", label: t.nav.about },
    { href: "/careers", label: t.nav.careers },
    // { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 text-white px-6 py-4 z-50 shadow-lg backdrop-blur-md bg-black/20 border-b border-white/10">
        <MotionWrapper preset="fade" duration={0.8}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Factora Logo"
                width={357}
                height={249}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  const isSolutions = item.label === t.nav.solutions;
                  const isActiveDropdown = isSolutions
                    ? pathname === "/"
                    : false; // Mark Solutions active on homepage
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() =>
                        isSolutions && setIsSolutionsDropdownOpen(true)
                      }
                      onMouseLeave={() =>
                        isSolutions && setIsSolutionsDropdownOpen(false)
                      }
                    >
                      <button
                        className={`text-base font-medium transition-colors flex items-center gap-1 ${
                          isActiveDropdown
                            ? "text-[#2F9A8A] font-medium"
                            : "hover:text-[#2F9A8A]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            isSolutions && isSolutionsDropdownOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-2 w-64 backdrop-blur-xl bg-black/40 text-white rounded-xl shadow-xl ring-1 ring-white/10 py-2 z-50 transition-all duration-200 overflow-hidden bg-clip-padding ${
                          isSolutions && isSolutionsDropdownOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible"
                        }`}
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-base transition-colors hover:bg-white/10/50`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Only render Link if href exists
                if (!item.href) return null;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base transition-colors ${
                      pathname === item.href
                        ? "text-[#2F9A8A] font-medium"
                        : "hover:text-[#2F9A8A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#early-access"
                className="bg-white text-black hover:brightness-95 px-6 py-3 rounded-lg font-medium text-base transition-all shadow-md"
              >
                {t.nav.book_demo}
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </MotionWrapper>
      </header>

      {/* Spacer to offset fixed header height */}
      <div className="h-24" />

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-24 left-0 right-0 backdrop-blur-md bg-black/20 border-b border-white/10  z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6">
          <div className="space-y-4">
            {navItems.map((item) => {
              if (item.isDropdown) {
                const isSolutions = item.label === t.nav.solutions;
                const isActiveDropdown = isSolutions ? pathname === "/" : false;
                return (
                  <div key={item.label} className="space-y-2">
                    <div
                      className={`text-xl font-medium ${
                        isActiveDropdown ? "text-[#2F9A8A]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className={`block text-lg transition-colors text-white/80 hover:text-[#2F9A8A]`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Only render Link if href exists
              if (!item.href) return null;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-xl transition-colors ${
                    pathname === item.href
                      ? "text-[#2F9A8A] font-medium"
                      : "text-white hover:text-[#2F9A8A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <Link
              href="#early-access"
              className="block w-full bg-white text-black hover:brightness-95 px-6 py-3 rounded-lg font-medium text-lg text-center transition-all shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.book_demo}
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
