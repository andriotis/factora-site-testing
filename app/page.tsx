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
                  Join the waiting list
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <SlideUp className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by forward-thinking teams
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partners and customers who rely on faster cash flow and smarter
              underwriting.
            </p>
          </SlideUp>
          <StaggerContainer delay={1} stagger={0.12}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 mb-6">
              <SlideUp>
                <div className="text-xl font-bold text-muted-foreground">
                  Piraeus Bank
                </div>
              </SlideUp>

              <ScaleIn>
                <div className="text-xl font-bold text-muted-foreground">
                  POS4Work
                </div>
              </ScaleIn>
            </div>
          </StaggerContainer>
          <SlideUp delay={0.4}>
            <p className="text-sm text-muted-foreground italic">
              These are illustrative customers and partners. Real logos will be
              shown once integrations are live.
            </p>
          </SlideUp>
        </div>
      </section>
      {/* Section Divider: Banking → SMEs */}
      <div className="relative my-28" id="bankers">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      {/* Solutions for Different Industries */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Banking Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                BANKERS (Banks, MFIs, Factors)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Launch SME Financing, Fast
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Plug‑and‑play, fully automated factoring and invoice‑financing
                with AI underwriting, servicing, and collections.
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
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Risk and Profit, Live
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Live KPIs across funding, revenue, DSO, and defaults.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Advances and revenue at a glance, with clear trend
                          lines
                        </h4>
                        <p className="text-gray-300">
                          Track comprehensive financial metrics with visual
                          trending and performance indicators.
                        </p>
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
                          DSO and default rate monitors with color‑coded alerts
                        </h4>
                        <p className="text-gray-300">
                          Monitor default rates with visual thresholds and
                          comprehensive invoice analytics.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Quick drill‑downs by region and time ranges
                        </h4>
                        <p className="text-gray-300">
                          Advanced filtering and segmentation tools for detailed
                          portfolio analysis.
                        </p>
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

          {/* Banking Solutions Section 2 - Customer Portfolio */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <MotionWrapper translateX={-48} duration={1.2} delay={0.3}>
                <div className="lg:order-1 relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customers.png"
                      alt="Customer portfolio dashboard showing sector exposure, onboarding trends, repeat customer rates, and searchable customer database"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
              <div className="lg:order-2 space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      See Your SME Portfolio, Clearly
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Sectors, growth, and customer quality in one view.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Top sectors by volume — spot and balance concentration
                        </h4>
                        <p className="text-gray-300">
                          Identify sector concentration risks and
                          diversification opportunities across your portfolio.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Onboarding trend — track acquisition velocity
                        </h4>
                        <p className="text-gray-300">
                          Monitor customer acquisition velocity and business
                          development performance over time.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Repeat rate — check loyalty and product fit
                        </h4>
                        <p className="text-gray-300">
                          Measure customer loyalty and platform value through
                          repeat engagement metrics.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>
            </StaggerContainer>
          </div>

          {/* Banking Solutions Section 3 - Invoice Lifecycle */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <div className="space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Control the Invoice Lifecycle
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Instant status, rich details, and built-in actions.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Status totals — all/pending/defaulted at a glance
                        </h4>
                        <p className="text-gray-300">
                          Real-time aggregate view of invoice statuses across
                          your entire portfolio.
                        </p>
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
                          Line‑item details — VAT, amount, dates, current status
                        </h4>
                        <p className="text-gray-300">
                          Comprehensive invoice details with all critical
                          business information in one view.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Built‑in workflows — reminders, funding, escalation
                        </h4>
                        <p className="text-gray-300">
                          Integrated workflow management for proactive invoice
                          collection and financing.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/invoices.png"
                      alt="Invoice lifecycle dashboard showing totals by status, detailed invoice information, search filters, and workflow management tools"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>

          {/* Banking Solutions Section 4 - Business Evidence */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <MotionWrapper translateX={-48} duration={1.2} delay={0.3}>
                <div className="lg:order-1 relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-documents.png"
                      alt="Business evidence dashboard showing official sources, document audit trails, and instant context with risk scoring"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>

              <div className="lg:order-2 space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      All Business Evidence, Organized
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Source‑of‑truth docs and data feeds for faster
                      underwriting.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Direct feeds — GE.MI, credit bureau, bank statements,
                          MyADEE
                        </h4>
                        <p className="text-gray-300">
                          Direct integration with authoritative data sources for
                          comprehensive business verification.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Full audit trail — uploads, opens, versions for every
                          file
                        </h4>
                        <p className="text-gray-300">
                          Complete document versioning and access history for
                          regulatory compliance and audit purposes.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>
            </StaggerContainer>
          </div>

          {/* Banking Solutions Section 5 - Customer Overview */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <div className="space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      The Snapshot Bankers Need
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Live KPIs to set limits, price risk, and monitor health.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Core KPIs — turnover, EBITDA, P&L, AR, payroll, DSO
                          with YoY deltas
                        </h4>
                        <p className="text-gray-300">
                          Essential financial indicators with year-over-year
                          comparisons for comprehensive business health
                          assessment.
                        </p>
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
                          Exposure view — credit limit vs outstanding AR +
                          virtual IBAN
                        </h4>
                        <p className="text-gray-300">
                          Real-time credit exposure monitoring with integrated
                          banking infrastructure and payment processing.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Trends & concentration — sales vs cash flow and
                          customer mix
                        </h4>
                        <p className="text-gray-300">
                          Visual analytics for trend identification and
                          concentration risk management across customer
                          portfolios.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-overview.png"
                      alt="Customer overview dashboard showing core metrics, YoY deltas, credit limits, exposure tracking, and trend analysis"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>

          {/* Section Divider: Banking → SMEs */}
          <div className="relative my-28" id="smes">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

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
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Turn Invoices Into Cash, Fast
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Instant funding, automated factoring, full billing
                      visibility.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          One‑click funding — see available credit and draw down
                          instantly
                        </h4>
                        <p className="text-gray-300">
                          Instant funding with transparent credit limits.
                        </p>
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
                          Status tracking — filter/search across pending, paid,
                          defaulted
                        </h4>
                        <p className="text-gray-300">
                          Complete invoice visibility with advanced filtering.
                        </p>
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
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <MotionWrapper translateX={-48} duration={1.2} delay={0.3}>
                <div className="lg:order-1 relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-overview.png"
                      alt="Business financial snapshot dashboard showing turnover, EBITDA, P&L metrics, credit limits, DSO trends, and cash flow visualization"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
              <div className="lg:order-2 space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Your Business, At‑a‑Glance
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Live KPIs to steer cash flow and growth with confidence.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Core KPIs — turnover, EBITDA, P&L, payroll, virtual
                          IBAN activity
                        </h4>
                        <p className="text-gray-300">
                          Real-time tracking of key business metrics.
                        </p>
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
                          Exposure & timing — credit limit vs outstanding AR,
                          DSO trendline
                        </h4>
                        <p className="text-gray-300">
                          Monitor credit exposure and DSO trends.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Trends & risks — sales vs cash flow and customer
                          concentration visuals
                        </h4>
                        <p className="text-gray-300">
                          Spot risks with visual analytics.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>
            </StaggerContainer>
          </div>

          {/* Section Divider: SMEs → Insurers */}
          <div className="relative my-28" id="insurers">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Insurance Solutions Section Header */}
          <div className="mb-16">
            <UnblurIn className="text-center">
              <div className="inline-block bg-[#2F9A8A]/20 text-[#2F9A8A] px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
                INSURERS (Credit insurers, Risk sharing partners)
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Underwrite SBEs With Confidence
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Alternative‑data risk scoring and policy automation for trade
                credit insurance and risk sharing.
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
                      Thin‑file SBEs are hard to assess and expensive to serve.
                    </p>
                  </div>
                </div>
              </div>
            </UnblurIn>
          </div>

          {/* Insurance Solutions Section 1 - Verified Data */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <div className="space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      See Everything, Risk Nothing
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Every data point you need, verified and ready to
                      underwrite.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Official sources at your fingertips
                        </h4>
                        <p className="text-gray-300">
                          Registry, credit bureau, bank statements, and tax
                          data—all connected and current.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.36}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Full paper trail, zero guesswork
                        </h4>
                        <p className="text-gray-300">
                          Every document timestamped, versioned, and audit‑ready
                          for compliance peace of mind.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Key insights upfront, decisions faster
                        </h4>
                        <p className="text-gray-300">
                          Risk score, country context, and growth signals—all in
                          the header for instant clarity.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-documents.png"
                      alt="Verified data dashboard showing direct sources integration, audit trail management, and fast context header with risk scoring"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          </div>

          {/* Insurance Solutions Section 2 - Portfolio Clarity */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <MotionWrapper translateX={-48} duration={1.2} delay={0.3}>
                <div className="lg:order-1 relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/customer-overview.png"
                      alt="Portfolio clarity dashboard showing core KPIs with YoY deltas, exposure view with credit limits, and concentration analysis"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </MotionWrapper>
              <div className="lg:order-2 space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Know More, Risk Less
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Real‑time insights that turn data into confident
                      decisions.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Financial pulse check, instantly
                        </h4>
                        <p className="text-gray-300">
                          Turnover, EBITDA, payroll, DSO—all with YoY trends to
                          spot what&apos;s changing fast.
                        </p>
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
                          Credit exposure at a glance
                        </h4>
                        <p className="text-gray-300">
                          See limits vs outstanding AR and DSO trends—know your
                          exposure before it hurts.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Spot risks before they bite
                        </h4>
                        <p className="text-gray-300">
                          Sales vs cash flow charts and customer
                          concentration—see trouble coming from miles away.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>
            </StaggerContainer>
          </div>

          {/* Insurance Solutions Section 3 - Monitor Exposure */}
          <div className="mb-20">
            <StaggerContainer
              className="grid lg:grid-cols-2 gap-12 items-center"
              stagger={0.18}
            >
              <div className="space-y-8">
                <div>
                  <HeroEntrance translateY={24} delay={0.0}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Stay Alert, Stay Protected
                    </h3>
                  </HeroEntrance>
                  <HeroEntrance translateY={20} delay={0.12}>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Every invoice tracked, every risk spotted early.
                    </p>
                  </HeroEntrance>
                </div>

                <div className="space-y-6">
                  <HeroEntrance translateY={20} delay={0.24}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Big picture, instant clarity
                        </h4>
                        <p className="text-gray-300">
                          Totals, pending volume, defaults—all with trend arrows
                          pointing to what’s next.
                        </p>
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
                          Every detail that matters
                        </h4>
                        <p className="text-gray-300">
                          VAT, dates, amounts, updates, status—everything you
                          need in one clean row.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>

                  <HeroEntrance translateY={20} delay={0.48}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Find problems before they find you
                        </h4>
                        <p className="text-gray-300">
                          Smart filters for reviews, collections, and claims—cut
                          through noise, act fast.
                        </p>
                      </div>
                    </div>
                  </HeroEntrance>
                </div>
              </div>

              <MotionWrapper translateX={48} duration={1.2} delay={0.3}>
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/invoices.png"
                      alt="Invoice monitoring dashboard showing portfolio counters, line-item details, and smart filters for exposure and delinquency management"
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
      {/* Section Divider: Insurance Solutions → Early Access */}
      <div className="relative my-28">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      {/* Early Access / Waiting List */}
      <section id="early-access" className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Be among the first to use Factora
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Product in development — sign up for early access and exclusive
              benefits.
            </p>
            <div className="inline-block bg-[#2F9A8A]/10 text-[#2F9A8A] px-3 py-1 rounded-full text-sm font-medium">
              Early access users get priority support and onboarding credits
            </div>
          </SlideUp>

          <MotionWrapper preset="scale" scale={0.95} delay={0.2}>
            <div className="rounded-2xl p-8 backdrop-blur-xl bg-black/20 border border-white/10 shadow-2xl shadow-black/30">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Johnson"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 backdrop-blur-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 backdrop-blur-md"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 backdrop-blur-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      placeholder="CEO / CFO / Ops manager"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 backdrop-blur-md"
                    />
                  </div>
                </div>

                <Button className="w-full px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                  Join the waiting list
                </Button>

                <p className="text-xs text-muted-foreground text-center">
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
