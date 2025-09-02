import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  HeroEntrance,
  MotionWrapper,
  SlideUp,
  StaggerContainer,
} from "@/components/EntranceProvider";

export default function PricingPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="px-6 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer stagger={0.15} delay={0.2}>
            <HeroEntrance translateY={32}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Flexible pricing that grows with your business
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={24} delay={0.1}>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Transparent, usage-based plans designed for small businesses,
                financial institutions, and B2B marketplaces.
              </p>
            </HeroEntrance>

            <HeroEntrance translateY={20} delay={0.15}>
              <div className="flex justify-center space-x-4 mb-8">
                <Button
                  asChild
                  className="px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110"
                >
                  <Link href="/#early-access">Join the Waiting List</Link>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-3 rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                >
                  Contact Sales
                </Button>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer
            className="grid lg:grid-cols-3 gap-8"
            stagger={0.15}
            delay={0.3}
          >
            {/* Starter Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-8 relative transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20 group">
                <div className="text-center mb-8">
                  <div className="bg-[#2F9A8A] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                    Starter
                  </div>
                  <div className="text-lg font-bold text-white mb-4">
                    Best for small businesses taking the first step into digital
                    financing
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    From 2%
                  </div>
                  <div className="text-sm text-gray-300 mb-4">per invoice</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Quick access to invoice factoring
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Fast onboarding & digital KYC
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Access to invoice financing marketplace
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Standard support
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white transition-all duration-300 group-hover:shadow-lg"
                >
                  Join early access
                </Button>
              </div>
            </MotionWrapper>

            {/* Growth Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl border-2 border-[#2F9A8A] p-8 relative transform scale-105 shadow-xl transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl hover:shadow-[#2F9A8A]/30 group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#2F9A8A] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    For scaling businesses
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="bg-[#133B4F] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                    Growth
                  </div>
                  <div className="text-lg font-bold text-foreground mb-4">
                    For scaling businesses and marketplaces
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    From 1.5%
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    per invoice + risk scoring fee
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Everything in Starter, plus:
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Risk scoring engine with alternative data
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Automated credit assessment for clients
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Insurance against defaults (optional add-on)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Priority support
                    </span>
                  </div>
                </div>

                <Button className="w-full rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                  Request demo
                </Button>
              </div>
            </MotionWrapper>

            {/* Enterprise Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl border-2 border-border p-8 relative transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20 group">
                <div className="text-center mb-8">
                  <div className="bg-[#071A33] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                    Enterprise
                  </div>
                  <div className="text-lg font-bold text-foreground mb-4">
                    Tailored for banks, factoring firms, MFIs & insurers
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    Custom
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    based on volume & integration needs
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      End-to-end plug-n-play infrastructure
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      White-label platform setup
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Full API integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Custom underwriting rules & risk analytics
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#2F9A8A]" />
                    <span className="text-muted-foreground">
                      Dedicated account manager
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
                >
                  Contact sales
                </Button>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </SlideUp>

          <StaggerContainer className="space-y-8" stagger={0.1}>
            <SlideUp>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How does Factora charge for invoice factoring?
                </h3>
                <p className="text-muted-foreground">
                  Pricing is based on a small percentage fee per financed
                  invoice.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Is there a minimum volume required?
                </h3>
                <p className="text-muted-foreground">
                  No — our Starter plan is designed for businesses of any size.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Can I upgrade my plan later?
                </h3>
                <p className="text-muted-foreground">
                  Yes — plans are flexible and scale as your financing needs
                  grow.
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you offer white-label solutions?
                </h3>
                <p className="text-muted-foreground">
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
