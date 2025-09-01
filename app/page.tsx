import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, TrendingUp } from "lucide-react";
import {
  MotionWrapper,
  HeroEntrance,
  StaggerContainer,
  SlideUp,
} from "@/components/EntranceProvider";

export default function FactoraPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#2F9A8A]/10 to-[#133B4F]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer stagger={0.12} delay={0.2}>
              <HeroEntrance translateY={32}>
                <div className="inline-block bg-[#2F9A8A]/10 text-[#2F9A8A] px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Product in development — get early access
                </div>
              </HeroEntrance>
              <HeroEntrance translateY={40} delay={0.1}>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Digital financing solutions for your business
                </h1>
              </HeroEntrance>
              <HeroEntrance translateY={32} delay={0.15}>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Immediate liquidity, invoice financing, and protection against
                  defaults so you can grow with confidence.
                </p>
              </HeroEntrance>

              <HeroEntrance translateY={24} delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white px-6 py-3 rounded-full">
                    Join the waiting list
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white px-6 py-3 rounded-full bg-transparent"
                  >
                    Learn more
                  </Button>
                </div>
              </HeroEntrance>
            </StaggerContainer>

            {/* MacBook frame */}
            <HeroEntrance scale={0.85} delay={0.4} duration={1.0}>
              <div className="relative max-w-4xl mx-auto">
                {/* Screen area */}
                <div className="relative">
                  {/* Screen bezel */}
                  <div className="bg-gradient-to-b from-gray-800 via-black to-gray-900 rounded-t-2xl rounded-b-xl p-3 shadow-inner">
                    {/* Screen */}
                    <div className="bg-black rounded-xl p-4 shadow-inner">
                      <div className="bg-background rounded-lg overflow-hidden shadow-lg aspect-[16/10]">
                        <Image
                          src="/dashboard.png"
                          alt="Factora dashboard interface"
                          width={800}
                          height={500}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook base/bottom */}
                <div className="bg-gradient-to-b from-gray-200 to-gray-400 h-4 rounded-b-2xl relative">
                  {/* Trackpad indicator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1 w-10 h-2 bg-gray-500 rounded-full shadow-inner opacity-60"></div>
                </div>
              </div>
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* Problem / Mission Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <SlideUp className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Redefining small-business financing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional banks often leave small businesses underserved.
              Factora bridges that gap with fast, digital, and reliable
              financial solutions.
            </p>
          </SlideUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.1}>
            <SlideUp className="text-center">
              <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[#2F9A8A]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Financing when traditional banks say no
              </h3>
            </SlideUp>
            <SlideUp className="text-center">
              <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#2F9A8A]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Fast access to working capital
              </h3>
            </SlideUp>
            <SlideUp className="text-center">
              <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#2F9A8A]" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Protection against non-payment risk to preserve cash flow
              </h3>
            </SlideUp>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="px-6 py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <SlideUp className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
          </SlideUp>

          <StaggerContainer
            className="grid lg:grid-cols-3 gap-8"
            stagger={0.15}
          >
            {/* Invoice Factoring */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#2F9A8A]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Invoice Factoring
                </h3>
                <p className="text-muted-foreground mb-4">
                  Convert invoices into cash within 24–48 hours.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Sell your outstanding invoices and receive the funds you need
                  without waiting for customer payment cycles.
                </p>
                <Button
                  variant="outline"
                  className="border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white w-full bg-transparent"
                >
                  Learn more
                </Button>
              </div>
            </MotionWrapper>

            {/* Invoice Financing */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#2F9A8A]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Invoice Financing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Short-term loans secured by your invoices.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Use your invoices as collateral to secure flexible short-term
                  financing and cover immediate obligations.
                </p>
                <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white w-full">
                  Request financing
                </Button>
              </div>
            </MotionWrapper>

            {/* Insurance Against Defaults */}
            <MotionWrapper preset="vivid" scale={0.95}>
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-[#2F9A8A]/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#2F9A8A]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Insurance Against Defaults
                </h3>
                <p className="text-muted-foreground mb-4">
                  Protect revenue from customer non-payment.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Minimize the financial impact of defaults with insurance
                  tailored for B2B invoices.
                </p>
                <Button
                  variant="outline"
                  className="border-[#133B4F] text-[#133B4F] hover:bg-[#133B4F] hover:text-white w-full bg-transparent"
                >
                  Explore insurance
                </Button>
              </div>
            </MotionWrapper>
          </StaggerContainer>
        </div>
      </section>

      {/* Platform / Technology Section */}
      <section id="platform" className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <StaggerContainer stagger={0.1}>
              <SlideUp>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Digital, plug-and-play, built to scale
                </h2>
              </SlideUp>
              <SlideUp>
                <p className="text-lg text-muted-foreground mb-8">
                  A complete, end-to-end platform enabling banks, factoring
                  firms, MFIs and insurers to serve small businesses quickly —
                  with all infrastructure included.
                </p>
              </SlideUp>

              <StaggerContainer className="space-y-6 mb-8" stagger={0.08}>
                <SlideUp>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#133B4F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Plug-n-Play deployment
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Ready infrastructure so partners can go to market fast.
                      </p>
                    </div>
                  </div>
                </SlideUp>

                <SlideUp>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#133B4F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Risk scoring engine
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Industry-standard scoring + alternative data for
                        businesses without credit history.
                      </p>
                    </div>
                  </div>
                </SlideUp>

                <SlideUp>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#133B4F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Late-payment prevention
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Tools for B2B marketplaces to evaluate buyers and reduce
                        overdue invoices.
                      </p>
                    </div>
                  </div>
                </SlideUp>
              </StaggerContainer>

              <SlideUp>
                <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white px-6 py-3 rounded-full">
                  Request technical demo
                </Button>
              </SlideUp>
            </StaggerContainer>

            <MotionWrapper preset="scale" scale={0.9} delay={0.3}>
              <div className="relative">
                <div className="bg-card rounded-2xl shadow-2xl p-6 transform rotate-3">
                  <Image
                    src="/invoices.png"
                    alt="Platform dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-[#071A33] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#133B4F] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Connect & configure</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Integrate in hours via API or UI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#133B4F] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Evaluate & approve</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Automated scoring uses alternative data to assess credit risk.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#133B4F] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Finance & protect</h3>
              <p className="text-gray-300 dark:text-gray-300">
                Fund invoices and layer insurance to reduce downside risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section
        id="knowledge"
        className="px-6 py-16 bg-gradient-to-br from-[#2F9A8A]/10 to-[#133B4F]/10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Learn how to protect your business
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Guides, insights, and updates on modern financial management and SME
            financing.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Get more out of your tools. Stay at the cutting edge of financial
            management.
          </p>

          <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white px-6 py-3 rounded-full">
            Visit Knowledge Hub
          </Button>
        </div>
      </section>

      {/* Early Access / Waiting List */}
      <section className="px-6 py-16">
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
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Johnson"
                      className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      placeholder="CEO / CFO / Ops manager"
                      className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    />
                  </div>
                </div>

                <Button className="bg-[#133B4F] hover:bg-[#071A33] text-white px-8 py-3 rounded-full w-full">
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

      {/* Footer */}
      <footer className="bg-[#071A33] text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-semibold mb-4">Factora</div>
              <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
                <div>hello@factora.com</div>
                <div>+30 21X XXX XXXX</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    Invoice Factoring
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Invoice Financing
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Insurance Against Defaults
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    Platform
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Knowledge Hub
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Team
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-300 dark:text-gray-300">
                <div>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              For banks · factoring firms · microfinance institutions ·
              marketplaces
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
