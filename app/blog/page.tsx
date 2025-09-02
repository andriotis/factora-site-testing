import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import {
  HeroEntrance,
  StaggerContainer,
  SlideUp,
  FadeIn,
} from "@/components/EntranceProvider";

export const metadata: Metadata = {
  title:
    "Factora Blog — Invoice financing, underwriting & SME cashflow insights",
  description:
    "Read actionable guides and product thinking from Factora — from invoice factoring best practices to underwriting thin-file SMEs with alternative data.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <HeroEntrance>
            <h1 className="text-5xl font-bold mb-6 text-balance">
              Insights & Resources
            </h1>
          </HeroEntrance>
          <HeroEntrance delay={0.2}>
            <p className="text-xl mb-8 text-gray-200 dark:text-gray-200 max-w-2xl mx-auto">
              Practical guides, industry thinking, and product updates to help
              you manage receivables, unlock liquidity, and reduce payment risk.
            </p>
          </HeroEntrance>
          <HeroEntrance delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110"
              >
                <Link href="/#early-access">Join the waiting list</Link>
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
              >
                Visit Knowledge Hub
              </Button>
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left column - Posts list */}
            <div className="lg:col-span-3">
              <StaggerContainer stagger={0.2} className="space-y-8">
                {/* Blog Post 1 */}
                <SlideUp>
                  <article className="bg-card/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20">
                    <Image
                      src="/business-woman-working-on-laptop-in-modern-office.png"
                      alt="Small-business owner reviewing invoices while laptop shows a cashflow dashboard."
                      width={600}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 flex-wrap gap-2">
                        <span className="bg-[#2F9A8A] text-white px-2 py-1 rounded text-xs">
                          invoice-factoring
                        </span>
                        <span className="bg-[#133B4F] text-white px-2 py-1 rounded text-xs">
                          cashflow
                        </span>
                        <span className="bg-[#071A33] text-white px-2 py-1 rounded text-xs">
                          SME
                        </span>
                        <span className="bg-muted/500 text-white px-2 py-1 rounded text-xs">
                          finance
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        How invoice factoring unlocks growth for small
                        businesses
                      </h2>
                      <p className="text-gray-300 mb-4">
                        Invoice factoring converts receivables into working
                        capital — fast. Learn how it works, when it makes sense,
                        and how to pick the right partner.
                      </p>
                      <div className="flex items-center text-sm text-gray-300 mb-4">
                        <span>Maria Georgiou, Head of Product Content</span>
                        <span className="mx-2">•</span>
                        <span>August 18, 2025</span>
                        <span className="mx-2">•</span>
                        <span>4 min</span>
                      </div>
                      <Link
                        href="/blog/invoice-factoring-unlocks-growth"
                        className="text-[#2F9A8A] font-semibold hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                </SlideUp>

                {/* Blog Post 2 */}
                <SlideUp>
                  <article className="bg-card rounded-lg shadow-lg overflow-hidden">
                    <Image
                      src="/business-professional-analyzing-data-on-computer-s.png"
                      alt="Data scientist analyzing charts on a laptop with invoices and receipts on the desk."
                      width={600}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 flex-wrap gap-2">
                        <span className="bg-[#2F9A8A] text-white px-2 py-1 rounded text-xs">
                          underwriting
                        </span>
                        <span className="bg-[#133B4F] text-white px-2 py-1 rounded text-xs">
                          alternativedata
                        </span>
                        <span className="bg-[#071A33] text-white px-2 py-1 rounded text-xs">
                          credit-risk
                        </span>
                        <span className="bg-muted/500 text-white px-2 py-1 rounded text-xs">
                          SME
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-3">
                        Using alternative data to underwrite thin-file SMEs
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        When traditional credit scores don&apos;t exist,
                        alternative signals can reveal a business&apos;s real
                        ability to repay. Here&apos;s how lenders are using
                        transaction, marketplace and behavioral data to
                        underwrite SMEs.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <span>
                          Dr. Alex Petros, Head of Risk & Data Science
                        </span>
                        <span className="mx-2">•</span>
                        <span>July 29, 2025</span>
                        <span className="mx-2">•</span>
                        <span>4 min</span>
                      </div>
                      <Link
                        href="/blog/alternative-data-underwrite-smes"
                        className="text-[#2F9A8A] font-semibold hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                </SlideUp>
              </StaggerContainer>
            </div>

            {/* Right column - Sidebar */}
            <div className="lg:col-span-1">
              <StaggerContainer stagger={0.15} className="space-y-6">
                {/* Search */}
                <FadeIn>
                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl p-6">
                    <Input
                      type="search"
                      placeholder="Search articles, tags, and authors"
                      className="w-full"
                    />
                  </div>
                </FadeIn>

                {/* Categories */}
                <FadeIn>
                  <div className="bg-card rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-[#2F9A8A]"
                        >
                          Financing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-[#2F9A8A]"
                        >
                          Underwriting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-[#2F9A8A]"
                        >
                          Product Updates
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-[#2F9A8A]"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-muted-foreground hover:text-[#2F9A8A]"
                        >
                          Guides
                        </Link>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                {/* Popular Tags */}
                <FadeIn>
                  <div className="bg-card/20 backdrop-blur-sm rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-muted/80 cursor-pointer">
                        invoice-factoring
                      </span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-muted/80 cursor-pointer">
                        underwriting
                      </span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-muted/80 cursor-pointer">
                        SME
                      </span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-muted/80 cursor-pointer">
                        cashflow
                      </span>
                      <span className="bg-muted text-foreground px-3 py-1 rounded-full text-sm hover:bg-muted/80 cursor-pointer">
                        insurance
                      </span>
                    </div>
                  </div>
                </FadeIn>

                {/* Subscribe Form */}
                <FadeIn>
                  <div className="bg-card rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Subscribe
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get monthly insights on financing, underwriting, and
                      product updates. No spam — unsubscribe anytime.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                      />
                      <Button className="w-full rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </FadeIn>

                {/* CTA for Early Access */}
                <FadeIn>
                  <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">
                      Get early access
                    </h3>
                    <p className="text-sm text-gray-200 dark:text-gray-200 mb-4">
                      Join the waiting list for Factora&apos;s invoice factoring
                      platform.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110"
                    >
                      <Link href="/#early-access">Join the waiting list</Link>
                    </Button>
                  </div>
                </FadeIn>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <SlideUp>
            <h2 className="text-4xl font-bold mb-6">
              Get Early Access To Factora To Get Paid Faster
            </h2>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-xl mb-8 text-gray-200 dark:text-gray-200 max-w-2xl mx-auto">
              With intelligent automation, predictive insights, and seamless
              integrations, Factora helps you get paid faster while simplifying
              your accounts receivable process.
            </p>
          </SlideUp>
          <SlideUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110">
                Sign Up For Free Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full font-medium transition-all backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 shadow-lg shadow-black/10"
              >
                Request Free Demo
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Sign Up For Our Newsletter And Get The Latest News
                </h3>
                <p className="text-muted-foreground">
                  Stay informed about the latest trends in business finance and
                  invoice factoring.
                </p>
              </div>
              <div className="flex gap-3 min-w-80">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button className="bg-[#2F9A8A] hover:bg-[#2F9A8A]/90 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Footer is rendered from RootLayout */}
    </div>
  );
}
