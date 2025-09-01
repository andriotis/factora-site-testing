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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#071A33] to-[#133B4F] text-white">
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
                <Button className="bg-[#2F9A8A] hover:bg-[#2F9A8A]/90 text-white px-8 py-3 rounded-full">
                  Join the Waiting List
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-background hover:text-[#071A33] px-8 py-3 rounded-full bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer
            className="grid lg:grid-cols-3 gap-8"
            stagger={0.15}
            delay={0.3}
          >
            {/* Starter Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-background rounded-2xl border-2 border-border p-8 relative">
                <div className="text-center mb-8">
                  <div className="bg-[#2F9A8A] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                    Starter
                  </div>
                  <div className="text-lg font-bold text-foreground mb-4">
                    Best for small businesses taking the first step into digital
                    financing
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    From 2%
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    per invoice
                  </div>
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
                  className="w-full border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white bg-transparent"
                >
                  Join early access
                </Button>
              </div>
            </MotionWrapper>

            {/* Growth Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-background rounded-2xl border-2 border-[#2F9A8A] p-8 relative transform scale-105 shadow-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#2F9A8A] text-white px-4 py-2 rounded-full text-sm font-medium">
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

                <Button className="w-full bg-[#133B4F] hover:bg-[#071A33] text-white">
                  Request demo
                </Button>
              </div>
            </MotionWrapper>

            {/* Enterprise Plan */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-background rounded-2xl border-2 border-border p-8 relative">
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
                  className="w-full border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white bg-transparent"
                >
                  Contact sales
                </Button>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="px-6 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Enhance your plan with optional services
            </h2>
          </SlideUp>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.1}
          >
            <SlideUp>
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2F9A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Insurance against non-payment
                  </h3>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#133B4F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Advanced analytics dashboard
                  </h3>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#071A33] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    White-label branding
                  </h3>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2F9A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Dedicated compliance & onboarding support
                  </h3>
                </div>
              </div>
            </SlideUp>
          </StaggerContainer>

          <SlideUp className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white bg-transparent px-8 py-3"
            >
              Explore add-ons
            </Button>
          </SlideUp>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-16 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Simple. Transparent. No hidden fees.
            </h2>
          </SlideUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.1}>
            <SlideUp>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#2F9A8A] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Pay only for what you use
                </h3>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#133B4F] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No setup fees for early access users
                </h3>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#071A33] rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Flexible terms for growing businesses
                </h3>
              </div>
            </SlideUp>
          </StaggerContainer>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#071A33] to-[#133B4F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer stagger={0.15} delay={0.2}>
            <SlideUp>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Product in development — limited early access pricing
              </h2>
            </SlideUp>
            <SlideUp>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Be the first to experience Factora. Lock in exclusive early-bird
                rates and priority onboarding.
              </p>
            </SlideUp>

            <SlideUp>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#2F9A8A] hover:bg-[#2F9A8A]/90 text-white px-8 py-3 rounded-full">
                  Join the Waiting List
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-background hover:text-[#071A33] px-8 py-3 rounded-full bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </SlideUp>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-background">
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

      {/* Newsletter */}
      <section className="px-6 py-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Sign Up For Our Newsletter And Get The Latest News
                </h3>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="flex-1 md:w-64 px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-[#2F9A8A] focus:border-transparent"
                />
                <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white px-6 py-2 rounded-lg">
                  Submit Now
                </Button>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071A33] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-semibold mb-4">Factora</div>
              <p className="text-sm text-gray-300 mb-4">
                Factora Empowering Your Business
              </p>
              <p className="text-sm text-gray-300">
                Delfyn helps B2B companies get paid faster.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Ask for Demo
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legals</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-xs text-gray-400">
              © 2024 Factora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
