"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MotionWrapper } from "@/components/EntranceProvider";

export function Navigation() {
  const pathname = usePathname();
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  type NavItem = {
    href?: string;
    label: string;
    isDropdown?: boolean;
    items?: { href: string; label: string }[];
  };

  const navItems: NavItem[] = [
    { href: "/", label: "Solutions" },
    {
      label: "Company",
      isDropdown: true,
      items: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ],
    },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 bg-[#071A33] text-white px-6 py-4 z-50 shadow-lg dark:bg-[#071A33]">
        <MotionWrapper preset="fade" duration={0.8}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Factora
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  const isActiveDropdown = item.items?.some(
                    (subItem) => pathname === subItem.href
                  );
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                      onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                    >
                      <button
                        className={`text-sm transition-colors flex items-center gap-1 ${
                          isActiveDropdown
                            ? "text-[#2F9A8A] font-medium"
                            : "hover:text-[#2F9A8A]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isCompanyDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-background text-foreground rounded-lg shadow-lg border border-border py-2 z-50 transition-all duration-200 ${
                          isCompanyDropdownOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 -translate-y-2 invisible"
                        }`}
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === subItem.href
                                ? "bg-[#2F9A8A]/10 text-[#2F9A8A] font-medium"
                                : "hover:bg-accent hover:text-[#2F9A8A]"
                            }`}
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
                    className={`text-sm transition-colors ${
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
              <ThemeToggle
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white border-white/20"
              />
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

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-[#071A33] dark:bg-[#071A33] border-t border-white/10 z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6">
          <div className="space-y-4">
            {navItems.map((item) => {
              if (item.isDropdown) {
                const isActiveDropdown = item.items?.some(
                  (subItem) => pathname === subItem.href
                );
                return (
                  <div key={item.label} className="space-y-2">
                    <div
                      className={`text-lg font-medium ${
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
                          className={`block text-base transition-colors ${
                            pathname === subItem.href
                              ? "text-[#2F9A8A] font-medium"
                              : "text-white/80 hover:text-[#2F9A8A]"
                          }`}
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
                  className={`block text-lg transition-colors ${
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
            <div className="flex justify-center">
              <ThemeToggle
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white border-white/20"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
