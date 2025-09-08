"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  HeroEntrance,
  MotionWrapper,
  SlideUp,
  StaggerContainer,
} from "@/components/EntranceProvider";
import { useState } from "react";

export default function PricingPage() {
  const [audience, setAudience] = useState<"fi" | "sme">("fi");
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-white w-full">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer stagger={0.25} delay={0.2}>
            <HeroEntrance translateY={24}>
              <div className="mb-4">
                <span className="inline-block bg-card/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                  Transparent pricing — no hidden fees
                </span>
              </div>
            </HeroEntrance>
            <HeroEntrance translateY={32} delay={0.1}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Flexible pricing that grows with your business
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.2}>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty">
                Transparent, usage-based plans designed for small businesses,
                financial institutions, and B2B marketplaces.
              </p>
            </HeroEntrance>

            <HeroEntrance translateY={20} delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  variant={audience === "fi" ? "default" : "outline"}
                  onClick={() => setAudience("fi")}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    audience === "fi"
                      ? "bg-white text-black hover:brightness-95"
                      : "backdrop-blur-md bg-white/10 text-white border border-white/30 hover:bg-white/15"
                  }`}
                >
                  Financial Institutions
                </Button>
                <Button
                  variant={audience === "sme" ? "default" : "outline"}
                  onClick={() => setAudience("sme")}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    audience === "sme"
                      ? "bg-white text-black hover:brightness-95"
                      : "backdrop-blur-md bg-white/10 text-white border border-white/30 hover:bg-white/15"
                  }`}
                >
                  SMEs
                </Button>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-20 w-full">
        <div className="max-w-6xl mx-auto">
          {audience === "fi" ? (
            <StaggerContainer
              className="grid lg:grid-cols-3 gap-8"
              stagger={0.15}
              delay={0.3}
            >
              {/* FI: Platform License */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 group h-full flex flex-col shadow-xl">
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      White-label factoring & marketplace
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      Custom
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      annual or multi-year
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Core platform with onboarding & KYC
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Operational dashboards & workflows
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Compliance & audit trails
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">SLA-backed support</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Contact sales
                  </Button>
                </div>
              </MotionWrapper>

              {/* FI: Risk & Analytics */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2F9A8A]/30 group h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      Alternative data risk scoring
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      Volume-based
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      per scoring + API usage
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Credit risk engine & explainability
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Portfolio monitoring & alerts
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Underwriting rules engine
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">Priority support</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Request demo
                  </Button>
                </div>
              </MotionWrapper>

              {/* FI: Enterprise Integration */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 group h-full flex flex-col shadow-xl">
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      Bespoke integrations & deployment
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      Custom
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      scope-based pricing
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Full API & SSO integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Custom data pipelines
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Change management & training
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Dedicated technical manager
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Talk to us
                  </Button>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          ) : (
            <StaggerContainer
              className="grid lg:grid-cols-3 gap-8"
              stagger={0.15}
              delay={0.3}
            >
              {/* SME: Starter Plan */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 group h-full flex flex-col shadow-xl">
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      Best for small businesses taking the first step into
                      digital financing
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      From 2%
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      per invoice
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Quick access to invoice factoring
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Fast onboarding & digital KYC
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Access to invoice financing marketplace
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">Standard support</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Join early access
                  </Button>
                </div>
              </MotionWrapper>

              {/* SME: Growth Plan */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#2F9A8A]/30 group h-full flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      For scaling businesses and marketplaces
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      From 1.5%
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      per invoice + risk scoring fee
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Everything in Starter, plus:
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Risk scoring engine with alternative data
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Automated credit assessment for clients
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Insurance against defaults (optional add-on)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">Priority support</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Request demo
                  </Button>
                </div>
              </MotionWrapper>

              {/* SME: Enterprise Plan */}
              <MotionWrapper preset="vivid" scale={0.95}>
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 group h-full flex flex-col shadow-xl">
                  <div className="text-center mb-8">
                    <div className="text-lg font-bold text-white mb-4">
                      Tailored for banks, factoring firms, MFIs & insurers
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">
                      Custom
                    </div>
                    <div className="text-sm text-gray-300 mb-4">
                      based on volume & integration needs
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        End-to-end plug-n-play infrastructure
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        White-label platform setup
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Full API integration
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Custom underwriting rules & risk analytics
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#2F9A8A]" />
                      <span className="text-gray-300">
                        Dedicated account manager
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="mt-auto w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                  >
                    Contact sales
                  </Button>
                </div>
              </MotionWrapper>
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white w-full">
        <div className="max-w-4xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </SlideUp>

          <StaggerContainer className="space-y-8" stagger={0.1}>
            <SlideUp>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How does Factora charge for invoice factoring?
                </h3>
                <p className="text-gray-600">
                  Pricing is based on a small percentage fee per financed
                  invoice.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is there a minimum volume required?
                </h3>
                <p className="text-gray-600">
                  No — our Starter plan is designed for businesses of any size.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I upgrade my plan later?
                </h3>
                <p className="text-gray-600">
                  Yes — plans are flexible and scale as your financing needs
                  grow.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer white-label solutions?
                </h3>
                <p className="text-gray-600">
                  Yes — our Enterprise plan is tailored for institutions
                  requiring custom integration.
                </p>
              </div>
            </SlideUp>
          </StaggerContainer>
        </div>
      </section>

      {/* Footer is rendered from RootLayout */}
    </div>
  );
}
