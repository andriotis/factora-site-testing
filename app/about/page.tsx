"use client";

import { useEffect } from "react";
import {
  MotionWrapper,
  StaggerContainer,
  HeroEntrance,
  UnblurIn,
} from "@/components/EntranceProvider";
import { useI18n } from "@/components/I18nProvider";

export default function AboutPage() {
  const { t, locale } = useI18n();

  // Update page metadata when locale changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = t.about.meta_title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t.about.meta_description);
    }
  }, [t, locale]);
  return (
    <div className="min-h-screen text-white">
      {/* Our Founding Story */}
      <section className="px-6 py-16 md:py-24 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <StaggerContainer stagger={0.1}>
            <HeroEntrance translateY={24}>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.about.why_started_title}
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.12}>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.about.why_started_para1}
              </p>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.2}>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.about.why_started_para2}
              </p>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.28}>
              <p className="text-gray-300 leading-relaxed">
                {t.about.why_started_para3}
              </p>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="px-6 py-20 bg-white text-gray-900 w-full">
        <div className="max-w-6xl mx-auto">
          <UnblurIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.about.values_title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.values_subtitle}
            </p>
          </UnblurIn>
          <StaggerContainer
            className="grid md:grid-cols-3 gap-8 mb-12 items-stretch"
            stagger={0.15}
          >
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="h-full flex flex-col text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v6m0 0H5m7 0h7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 9l-3 6h6l-3-6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9l-3 6h6l-3-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#2F9A8A]">
                  {t.about.fair_access_title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.fair_access_desc}
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="h-full flex flex-col text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21c-3.866-1.17-7-4.61-7-9V6l7-3 7 3v6c0 4.39-3.134 7.83-7 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#2F9A8A]">
                  {t.about.trust_title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.trust_desc}
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="h-full flex flex-col text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8l2 2-2 2-2-2 2-2zm7-6l2.5 5L18 9.5 13 11l-2.5 5L8 11 3 9.5 8.5 9 12 2zm7 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#2F9A8A]">
                  {t.about.simplicity_title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.simplicity_desc}
                </p>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>
      {/* Footer is rendered from RootLayout */}
    </div>
  );
}
