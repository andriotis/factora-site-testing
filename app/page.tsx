"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Zap,
  Plug,
  BadgeDollarSign,
  Target,
  FileCheck2,
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import {
  MotionWrapper,
  HeroEntrance,
  StaggerContainer,
  SlideUp,
  ScaleIn,
  UnblurIn,
} from "@/components/EntranceProvider";
import { useI18n } from "@/components/I18nProvider";
import { useState } from "react";

export default function FactoraPage() {
  const { t } = useI18n();

  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Invalid email format";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ type: "error", message: validationError });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "info@factora.eu",
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll be in touch soon.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
        });
      } else {
        throw new Error("Failed to submit request");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const AnimatedHeadline = () => {
    const text = t.landing.hero_title;
    const words = text.split(" ");
    return (
      <h1
        className="text-5xl md:text-6xl font-bold mb-6 text-balance"
        aria-label={text}
      >
        {words.map((word, index) => (
          <HeroEntrance
            as="span"
            key={`${word}-${index}`}
            delay={0.1 + Math.floor(index / 3) * 0.15} // Group words in threes
            translateY={32} // Reduced from 48
            className="inline-block will-change-transform"
          >
            {word}&nbsp;
          </HeroEntrance>
        ))}
      </h1>
    );
  };
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className=" px-6 py-20 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.25} delay={0.2}>
            <AnimatedHeadline />
            <HeroEntrance translateY={20} delay={0.4}>
              <p
                className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty"
                dangerouslySetInnerHTML={{ __html: t.landing.hero_subtitle }}
              />
            </HeroEntrance>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScaleIn delay={0.55} scale={0.92}>
                <a
                  href="#early-access"
                  className="px-8 py-3 rounded-full font-medium transition-all bg-white text-black hover:brightness-95 shadow-lg"
                >
                  {t.landing.hero_cta}
                </a>
              </ScaleIn>
            </div>
          </StaggerContainer>
        </div>

        {/* Hero Mockup: Video Player with BorderBeam */}
        <div className="max-w-6xl mx-auto mt-16 px-6">
          <MotionWrapper preset="vivid" scale={0.98} delay={0.5}>
            <div className="relative backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden will-change-transform transform-gpu [mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_90%)]">
              <video
                src="/hero-dashboard.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
              <BorderBeam
                duration={8}
                size={400}
                className="from-transparent via-[#2F9A8A] to-transparent"
              />
              <BorderBeam
                duration={8}
                delay={3}
                size={400}
                borderWidth={3}
                className="from-transparent via-[#1a5d57] to-transparent"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="py-16 mb-20 md:mb-28">
        <div className="max-w-6xl mx-auto text-center px-6">
          <SlideUp className="mb-12">
            <h4 className="text-xl font-bold text-white mb-4">
              {t.landing.trusted_by}
            </h4>
          </SlideUp>
          <ScrollVelocityContainer className="text-4xl md:text-7xl font-bold [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <ScrollVelocityRow baseVelocity={10} direction={1}>
              <div className="flex items-center">
                {/* Logo Pair 1 */}
                <div className="flex px-12 items-center justify-center group flex-shrink-0">
                  <Image
                    src="/piraeus.svg"
                    alt="Piraeus Bank"
                    width={120}
                    height={48}
                    className="w-48 h-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 invert brightness-0"
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDgiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4="
                  />
                </div>
                <div className="flex px-12 items-center justify-center group flex-shrink-0">
                  <Image
                    src="/pos4work.png"
                    alt="POS4Work"
                    width={120}
                    height={48}
                    className="w-48 h-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 invert brightness-0"
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </section>

      {/* Section Divider */}
      {/* Integrations Beam Section (before Banking) */}
      <div id="core" className="relative -top-24 h-0" aria-hidden="true" />
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <SlideUp className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              {t.landing.integrations_title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.landing.integrations_subtitle}
            </p>
          </SlideUp>
          <IntegrationShowcase />
        </div>
      </section>
      {/* SMEs Section */}
      <div id="smes" className="relative -top-24 h-0" aria-hidden="true" />
      <section className="px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* SMEs Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                {t.landing.smes_chip}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t.landing.smes_title}
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                {t.landing.smes_subtitle}
              </p>
            </UnblurIn>
          </div>

          {/* SME Solutions Section 1 - Turn Invoices Into Cash */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <MotionWrapper translateX={-48} duration={1.2} delay={0.3}>
                <div className="relative will-change-transform transform-gpu">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/sme-section.png"
                      alt="Invoice management dashboard showing one-click funding, status tracking, filtering options, and automated factoring guidance"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority={false}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
              </MotionWrapper>

              <div className="space-y-8">
                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.smes_point_1_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.smes_point_1_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.smes_point_2_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.smes_point_2_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Plug className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.smes_point_3_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.smes_point_3_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>
            </StaggerContainer>
          </div>

          {/* SME Solutions Section 2 - Business Financial Snapshot */}
        </div>
      </section>
      {/* <div className="relative my-28">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div> */}

      {/* Banking Section */}
      <div id="banking" className="relative -top-24 h-0" aria-hidden="true" />
      <section className="px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Banking Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                {t.landing.bankers_chip}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                {t.landing.bankers_title}
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                {t.landing.bankers_subtitle}
              </p>
            </UnblurIn>
          </div>

          {/* Banking Solutions Section 1 - Risk and Profitability */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <BadgeDollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.bankers_point_1_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.bankers_point_1_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.bankers_point_2_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.bankers_point_2_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <FileCheck2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">
                          {t.landing.bankers_point_3_title}
                        </h4>
                        <p className="text-lg font-medium text-gray-300">
                          {t.landing.bankers_point_3_desc}
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative will-change-transform transform-gpu">
                  <div className="bg-card/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    <Image
                      src="/financials-section.png"
                      alt="Banking dashboard showing portfolio performance with total advances, net revenue, invoices, DSO tracking, and default rate monitoring"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      priority={false}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Early Access / Waiting List */}
      <section id="early-access" className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.landing.early_title}
            </h2>
          </SlideUp>

          <MotionWrapper preset="scale" scale={0.95} delay={0.2}>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 shadow-2xl shadow-gray-200/50 will-change-transform transform-gpu">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-100 border border-green-300 text-green-800"
                      : "bg-red-100 border border-red-300 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {t.landing.form_name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.landing.form_name_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {t.landing.form_email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.landing.form_email_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {t.landing.form_company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t.landing.form_company_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {t.landing.form_role}
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder={t.landing.form_role_placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : t.landing.form_cta}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {t.landing.form_disclaimer}
                </p>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </section>
      {/* Section Divider: Early Access → Footer */}
      {/* Footer is rendered from RootLayout - we don't need to render it here */}
    </div>
  );
}
