import { Metadata } from "next";
import {
  MotionWrapper,
  HeroEntrance,
  StaggerContainer,
  SlideUp,
  FadeIn,
} from "@/components/EntranceProvider";

export const metadata: Metadata = {
  title: "About Factora — Our mission, values & platform for SME financing",
  description:
    "Learn how Factora builds plug-and-play digital infrastructure for invoice factoring, financing and insurance — so banks and marketplaces can reliably fund small businesses.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A33] via-[#133B4F] to-[#2F9A8A] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.12} delay={0.2}>
            <HeroEntrance translateY={32}>
              <div className="mb-4">
                <span className="inline-block bg-card/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                  Product in development — early access & preferential
                  onboarding
                </span>
              </div>
            </HeroEntrance>
            <HeroEntrance translateY={40} delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Time to rethink how you manage your business finances
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={32} delay={0.15}>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
                Automated invoice financing, risk protection, and actionable
                insights — all in one digital-first platform that gets you cash
                faster and keeps your books healthy.
              </p>
            </HeroEntrance>
            <HeroEntrance translateY={24} delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#2F9A8A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#2F9A8A]/90 transition-colors">
                  Join the waiting list
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-card hover:text-[#071A33] transition-colors">
                  Request a demo
                </button>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>

        {/* Dashboard Mockups */}
        <div className="max-w-6xl mx-auto mt-16 px-6">
          <StaggerContainer
            className="grid md:grid-cols-3 gap-8 items-center"
            stagger={0.15}
            delay={0.4}
          >
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-lg shadow-2xl p-4 transform md:-rotate-3">
                <div
                  className="w-full h-40 bg-gray-100 rounded mb-3"
                  role="img"
                  aria-label="Dashboard mockup showing cashflow, risk scores and insurance status"
                ></div>
                <p className="text-gray-800 text-sm font-medium text-center">
                  Cashflow Snapshot — See incoming invoices, available
                  liquidity, and funding status at a glance.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-lg shadow-2xl p-4 z-10">
                <div
                  className="w-full h-48 bg-gray-100 rounded mb-3"
                  role="img"
                  aria-label="Dashboard mockup showing cashflow, risk scores and insurance status"
                ></div>
                <p className="text-gray-800 text-sm font-medium text-center">
                  Risk & Scoring — Real-time buyer risk scores and suggested
                  credit limits.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-lg shadow-2xl p-4 transform md:rotate-3">
                <div
                  className="w-full h-40 bg-gray-100 rounded mb-3"
                  role="img"
                  aria-label="Dashboard mockup showing cashflow, risk scores and insurance status"
                ></div>
                <p className="text-gray-800 text-sm font-medium text-center">
                  Claims & Insurance — Track insured invoices and claims
                  progress in one place.
                </p>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-muted/50">
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
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 mb-6">
              <div className="text-xl font-bold text-muted-foreground">
                Alpha Bank
              </div>
              <div className="text-xl font-bold text-muted-foreground">
                FinBridge Capital
              </div>
              <div className="text-xl font-bold text-muted-foreground">
                MarketFlow
              </div>
              <div className="text-xl font-bold text-muted-foreground">
                MicroFund
              </div>
              <div className="text-xl font-bold text-muted-foreground">
                TradeSwap
              </div>
            </div>
          </FadeIn>
          <SlideUp delay={0.4}>
            <p className="text-sm text-muted-foreground italic">
              These are illustrative customers and partners. Real logos will be
              shown once integrations are live.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Our Founding Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionWrapper preset="scale" scale={0.9} delay={0.2}>
              <div className="bg-gradient-to-br from-[#2F9A8A] to-[#133B4F] rounded-2xl p-8 text-white">
                <div
                  className="w-full h-64 bg-card/20 rounded-lg flex items-center justify-center"
                  role="img"
                  aria-label="Gradient placeholder showing brand colors and abstract finance glyphs"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-card/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-card/50 rounded-full"></div>
                    </div>
                    <div className="w-12 h-12 bg-card/20 rounded mx-auto mb-4"></div>
                    <div className="w-16 h-2 bg-card/30 rounded mx-auto mb-2"></div>
                    <div className="w-12 h-2 bg-card/20 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
            <StaggerContainer stagger={0.1}>
              <SlideUp>
                <h2 className="text-3xl font-bold text-[#071A33] mb-6">
                  Why we started Factora
                </h2>
              </SlideUp>
              <SlideUp>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Small businesses are the backbone of every economy, but cash
                  flow fragility is their constant enemy. Founders (and former
                  banking engineers) noticed the same pattern: viable businesses
                  denied financing because they lacked traditional credit
                  history, and marketplaces losing customers to late payments
                  and defaults.
                </p>
              </SlideUp>
              <SlideUp>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Factora was built to flip that script. We combine automated
                  underwriting, alternative data signals, and a plug-and-play
                  platform so banks, factoring firms, and marketplaces can serve
                  small businesses reliably — without reinventing the stack. Our
                  mission is simple: make working capital predictable, fast, and
                  fair.
                </p>
              </SlideUp>
              <SlideUp>
                <div className="bg-muted/50 border-l-4 border-[#2F9A8A] pl-6 py-4">
                  <blockquote className="text-muted-foreground italic mb-2">
                    &ldquo;Access to liquidity shouldn&apos;t depend on legacy
                    credit scores. We built a system that evaluates businesses
                    where they actually operate — their invoices.&rdquo;
                  </blockquote>
                  <cite className="text-sm text-muted-foreground font-medium">
                    — Co-founder & CEO
                  </cite>
                </div>
              </SlideUp>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <SlideUp className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#071A33] mb-4">
              Our values — how we build and serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Values that guide every product decision and partnership.
            </p>
          </SlideUp>
          <StaggerContainer
            className="grid md:grid-cols-3 gap-8 mb-12"
            stagger={0.15}
          >
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="text-center bg-card p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#2F9A8A] rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#071A33] mb-4">
                  Empowering with Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automate repetitive underwriting and funding tasks so teams
                  focus on relationship-building, not paperwork. Fast decisions,
                  consistent outcomes.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="text-center bg-card p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#133B4F] rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#071A33] mb-4">
                  Seamless Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finance shouldn&apos;t be siloed. We build integrations and
                  workflows so banks, insurers, and marketplaces work together —
                  transparently and securely.
                </p>
              </div>
            </MotionWrapper>
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="text-center bg-card p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#2F9A8A] rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#071A33] mb-4">
                  Accelerating Cash Flow
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Speed is power. We turn receivables into predictable capital
                  and layer protection so businesses can invest in growth with
                  confidence.
                </p>
              </div>
            </MotionWrapper>
          </StaggerContainer>
          <SlideUp className="text-center" delay={0.5}>
            <p className="text-sm text-gray-500">
              Want to learn more about our approach?{" "}
              <a href="#" className="text-[#2F9A8A] hover:underline">
                Visit the Knowledge Hub
              </a>
              .
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <StaggerContainer stagger={0.1}>
              <SlideUp>
                <h2 className="text-3xl font-bold text-[#071A33] mb-6">
                  A platform built to scale every financing flow
                </h2>
              </SlideUp>
              <SlideUp>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Factora is an end-to-end, plug-and-play platform that handles
                  onboarding, risk scoring, funding, and claims management. We
                  provide the technical backbone so capital providers can reach
                  small businesses efficiently while maintaining robust risk
                  controls.
                </p>
              </SlideUp>

              <StaggerContainer className="space-y-4 mb-8" stagger={0.08}>
                <SlideUp>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2F9A8A] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#071A33] mb-1">
                        Plug-n-Play Deployment
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Get the platform running with minimal integration
                        effort.
                      </p>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2F9A8A] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#071A33] mb-1">
                        Risk Scoring Engine
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Industry-standard models enriched with alternative data
                        for thin-file businesses.
                      </p>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2F9A8A] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#071A33] mb-1">
                        API-First Architecture
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Programmatic access to funding, underwriting, and
                        reporting.
                      </p>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2F9A8A] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#071A33] mb-1">
                        White-Label & Multi-Tenant Support
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Launch under your brand, operate across portfolios.
                      </p>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#2F9A8A] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-[#071A33] mb-1">
                        Marketplace Tools
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Buyer evaluation and preventive controls to reduce late
                        payments.
                      </p>
                    </div>
                  </div>
                </SlideUp>
              </StaggerContainer>

              <SlideUp>
                <div className="bg-[#071A33] text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Vision</h3>
                  <p className="text-gray-300 text-sm">
                    Democratize access to working capital so every small
                    business can compete, grow, and weather volatility.
                  </p>
                </div>
              </SlideUp>
            </StaggerContainer>

            <MotionWrapper preset="scale" scale={0.9} delay={0.3}>
              <div className="bg-gradient-to-br from-[#133B4F] to-[#2F9A8A] rounded-2xl p-8">
                <div
                  className="w-full h-80 bg-card/20 rounded-lg flex items-center justify-center"
                  role="img"
                  aria-label="Platform interface preview showing funding flow, API keys, and buyer risk dashboard"
                >
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-card/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-10 h-10 bg-card/50 rounded"></div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="w-24 h-2 bg-card/30 rounded mx-auto"></div>
                      <div className="w-20 h-2 bg-card/20 rounded mx-auto"></div>
                      <div className="w-28 h-2 bg-card/25 rounded mx-auto"></div>
                    </div>
                    <p className="text-sm opacity-80">
                      Live demo preview — underwriting and funding workflow
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#071A33] via-[#133B4F] to-[#2F9A8A] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.12} delay={0.2}>
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to transform how you finance growth?
              </h2>
            </SlideUp>
            <SlideUp>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Join early adopters who will get priority onboarding, discounted
                pilot pricing, and dedicated support.
              </p>
            </SlideUp>
            <SlideUp>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="bg-[#2F9A8A] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#2F9A8A]/90 transition-colors">
                  Join the waiting list
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-card hover:text-[#071A33] transition-colors">
                  Contact sales
                </button>
              </div>
            </SlideUp>
            <SlideUp>
              <p className="text-sm text-gray-300">
                No spam — only product updates and priority access invitations.{" "}
                <a href="#" className="underline hover:text-white">
                  See our privacy policy
                </a>
                .
              </p>
            </SlideUp>
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071A33] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Factora</div>
              <p className="text-gray-400 text-sm">
                Digital financing solutions for your business growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Invoice Factoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Invoice Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Insurance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">
                hello@factora.com
                <br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Factora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
