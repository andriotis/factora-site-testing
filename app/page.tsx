import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, TrendingUp } from "lucide-react";
import {
  MotionWrapper,
  HeroEntrance,
  StaggerContainer,
  SlideUp,
  ScaleIn,
  UnblurIn,
} from "@/components/EntranceProvider";

export default function FactoraPage() {
  const AnimatedHeadline = () => {
    const text = "Powering Smarter B2B Credit for Everyone";
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
            delay={0.12 + index * 0.08}
            translateY={48}
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
      <section className="px-6 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.25} delay={0.2}>
            <HeroEntrance translateY={24}>
              <div className="mb-4">
                <span className="inline-block bg-card/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                  Product in development — early access & preferential
                  onboarding
                </span>
              </div>
            </HeroEntrance>
            <AnimatedHeadline />
            <HeroEntrance translateY={20} delay={0.4}>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
                One plug‑and‑play platform to underwrite SBEs, finance invoices,
                and automate payments—built for banks, SMEs, and insurers.
              </p>
            </HeroEntrance>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScaleIn delay={0.55} scale={0.92}>
                <a
                  href="#early-access"
                  className="px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110"
                >
                  Book a demo
                </a>
              </ScaleIn>
            </div>
          </StaggerContainer>
        </div>

        {/* Dashboard Mockups */}
        <div className="max-w-6xl mx-auto mt-16 px-6">
          <StaggerContainer
            className="grid md:grid-cols-3 gap-8 items-center"
            stagger={0.15}
            delay={0.4}
          >
            <MotionWrapper preset="vivid" scale={0.95} delay={0.5}>
              <div className="bg-card/10 backdrop-blur-sm rounded-lg shadow-2xl p-4 transform md:-rotate-3 border border-white/20">
                <Image
                  src="/dashboard.png"
                  alt="Banking dashboard showing portfolio performance with total advances, revenue, invoices, DSO tracking, and default rate monitoring"
                  width={800}
                  height={600}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <p className="text-white text-sm font-medium text-center">
                  Banks: Plug in capital. Scale SME credit.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95} delay={0.75}>
              <div className="bg-card/10 backdrop-blur-sm rounded-lg shadow-2xl p-4 z-10 border border-white/20">
                <Image
                  src="/customer-invoices.png"
                  alt="Invoice management dashboard for SMEs showing one-click funding, status tracking, and filtering options"
                  width={800}
                  height={600}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <p className="text-white text-sm font-medium text-center">
                  SMEs: Turn invoices into cash—offer terms with confidence.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95} delay={1}>
              <div className="bg-card/10 backdrop-blur-sm rounded-lg shadow-2xl p-4 transform md:rotate-3 border border-white/20">
                <Image
                  src="/customer-overview.png"
                  alt="Customer overview dashboard for insurers showing core KPIs, exposure tracking, and trend analysis"
                  width={800}
                  height={600}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <p className="text-white text-sm font-medium text-center">
                  Insurance Firms: See risk early. Price cover precisely.
                </p>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <SlideUp className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Partners and customers who rely on faster cash flow and smarter
              underwriting.
            </p>
          </SlideUp>
          <StaggerContainer delay={1} stagger={0.12}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-6">
              <SlideUp>
                <div className="flex items-center justify-center">
                  <Image
                    src="/piraeus.avif"
                    alt="Piraeus Bank"
                    width={96}
                    height={96}
                    className="h-24 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </SlideUp>

              <ScaleIn>
                <div className="flex items-center justify-center">
                  <Image
                    src="/pos4work.avif"
                    alt="POS4Work"
                    width={96}
                    height={96}
                    className="h-24 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </ScaleIn>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Banking Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Banking Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                BANKERS (Banks, MFIs, Factors)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Launch SME Financing, Fast
              </h2>
              <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
                Plug‑and‑play, fully automated factoring and invoice‑financing
                with AI underwriting, servicing, and collections.
              </p>
              <div className="bg-gradient-to-r from-[#2F9A8A]/20 to-[#133B4F]/20 rounded-xl p-6 max-w-3xl mx-auto border border-[#2F9A8A]/30">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Problem we solve:
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Low‑ticket SME deals are unprofitable on legacy stacks.
                    </p>
                  </div>
                </div>
              </div>
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
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">
                          Know your portfolio: sectors, growth, acquisition and
                          repeat rates—spot concentration and customer mix fast.
                        </h4>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">
                          Know your portfolio: sectors, growth, acquisition and
                          repeat rates—spot concentration and customer mix fast.
                        </h4>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">
                          Act with confidence: end-to-end invoice control,
                          verified data + audit trail, and banker-grade exposure
                          & pricing (incl. virtual IBANs).
                        </h4>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/dashboard.png"
                      alt="Banking dashboard showing portfolio performance with total advances, net revenue, invoices, DSO tracking, and default rate monitoring"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* SMEs Section */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* SMEs Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                SMEs (Suppliers, Marketplaces, B2B merchants)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get Paid Now. Offer Terms Safely.
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Instant invoice financing and buyer risk checks to reduce late
                payments and boost cash flow.
              </p>
              <div className="bg-gradient-to-r from-[#2F9A8A]/20 to-[#133B4F]/20 rounded-xl p-6 max-w-3xl mx-auto border border-[#2F9A8A]/30">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white mb-2">
                      Problem we solve:
                    </h4>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Late B2B payments choke growth and burn ops time.
                    </p>
                  </div>
                </div>
              </div>
            </UnblurIn>
          </div>

          {/* SME Solutions Section 1 - Turn Invoices Into Cash */}
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
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Click to cash: instant funding and automated factoring
                          with transparent limits.
                        </h4>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Every invoice, at a glance: powerful search/filters
                          across pending, paid, and defaulted.
                        </h4>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-invoices.png"
                      alt="Invoice management dashboard showing one-click funding, status tracking, filtering options, and automated factoring guidance"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>

          {/* SME Solutions Section 2 - Business Financial Snapshot */}
        </div>
      </section>

      {/* Early Access / Waiting List */}
      <section id="early-access" className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Be among the first to use Factora
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Product in development — sign up for early access and exclusive
              benefits.
            </p>
            <div className="inline-block bg-[#2F9A8A]/10 text-[#2F9A8A] px-3 py-1 rounded-full text-sm font-medium">
              Early access users get priority support and onboarding credits
            </div>
          </SlideUp>

          <MotionWrapper preset="scale" scale={0.95} delay={0.2}>
            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 shadow-2xl shadow-gray-200/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Johnson"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      placeholder="CEO / CFO / Ops manager"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A]"
                    />
                  </div>
                </div>

                <Button className="w-full px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                  Join the waiting list
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We&apos;ll only use your email for product updates. We
                  won&apos;t share your data.
                </p>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </section>
      {/* Section Divider: Early Access → Footer */}
      {/* <div className="relative my-28">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div> */}
      {/* Footer is rendered from RootLayout - we don't need to render it here */}
    </div>
  );
}
