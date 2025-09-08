"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  HeroEntrance,
  StaggerContainer,
  MotionWrapper,
  SlideUp,
  UnblurIn,
} from "@/components/EntranceProvider";
import { useI18n } from "@/components/I18nProvider";

export default function CareersPage() {
  const { t, locale } = useI18n();

  // Update page metadata when locale changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = t.careers.meta_title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t.careers.meta_description);
    }
  }, [t, locale]);
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-white h-[700px] flex items-center w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.15}>
            <HeroEntrance translateY={24}>
              <h1 className="text-5xl font-bold mb-6 text-balance">
                {t.careers.hero_title}
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.16}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                {t.careers.hero_subtitle}
              </p>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.28}>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:info@factora.eu?subject=Application%20%E2%80%94%20%5BRole%5D%20%E2%80%94%20%5BYour%20Name%5D"
                  className="inline-block"
                >
                  <Button className="px-8 py-3 rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10">
                    {t.careers.send_cv_button}
                  </Button>
                </a>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Open Roles & What We Look For */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-start">
            {/* Copy */}
            <StaggerContainer stagger={0.15} className="space-y-8">
              <SlideUp>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {t.careers.join_team_title}
                </h2>
              </SlideUp>
              <SlideUp delay={0.1}>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.careers.join_team_desc}
                </p>
              </SlideUp>

              <div className="grid md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
                <MotionWrapper preset="vivid" scale={0.96}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.ml_engineer_title}
                    </h3>
                    <p className="text-gray-600">
                      {t.careers.ml_engineer_desc}
                    </p>
                  </div>
                </MotionWrapper>
                <MotionWrapper preset="vivid" scale={0.96} delay={0.06}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.data_engineer_title}
                    </h3>
                    <p className="text-gray-600">
                      {t.careers.data_engineer_desc}
                    </p>
                  </div>
                </MotionWrapper>
                <MotionWrapper preset="vivid" scale={0.96} delay={0.12}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.fullstack_engineer_title}
                    </h3>
                    <p className="text-gray-600">
                      {t.careers.fullstack_engineer_desc}
                    </p>
                  </div>
                </MotionWrapper>
                <MotionWrapper preset="vivid" scale={0.96} delay={0.18}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.designer_title}
                    </h3>
                    <p className="text-gray-600">{t.careers.designer_desc}</p>
                  </div>
                </MotionWrapper>
                <MotionWrapper preset="vivid" scale={0.96} delay={0.24}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.analyst_title}
                    </h3>
                    <p className="text-gray-600">{t.careers.analyst_desc}</p>
                  </div>
                </MotionWrapper>
                <MotionWrapper preset="vivid" scale={0.96} delay={0.3}>
                  <div className="h-full flex flex-col bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/40 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t.careers.security_engineer_title}
                    </h3>
                    <p className="text-gray-600">
                      {t.careers.security_engineer_desc}
                    </p>
                  </div>
                </MotionWrapper>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="px-6 py-20 bg-white w-full">
        <div className="max-w-3xl mx-auto">
          <UnblurIn className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-gray-900">
              {t.careers.how_to_apply_title}
            </h2>
            <p className="text-gray-600">{t.careers.how_to_apply_subtitle}</p>
          </UnblurIn>

          <MotionWrapper preset="vivid" scale={0.98}>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 shadow-2xl shadow-gray-200/50">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  {t.careers.apply_step1}{" "}
                  <span className="font-medium">info@factora.eu</span>
                </li>
                <li>
                  {t.careers.apply_step2}{" "}
                  <span className="font-medium">
                    Application — [Role] — [Your Name]
                  </span>
                </li>
                <li>{t.careers.apply_step3}</li>
                <li>
                  {t.careers.apply_step4}
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• {t.careers.apply_step4_1}</li>
                    <li>• {t.careers.apply_step4_2}</li>
                    <li>• {t.careers.apply_step4_3}</li>
                  </ul>
                </li>
              </ol>

              <div className="mt-8">
                <a
                  href="mailto:info@factora.eu?subject=Application%20%E2%80%94%20%5BRole%5D%20%E2%80%94%20%5BYour%20Name%5D"
                  className="inline-block"
                >
                  <Button className="px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                    {t.careers.email_cv_button}
                  </Button>
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Footer is rendered from RootLayout */}
    </div>
  );
}
