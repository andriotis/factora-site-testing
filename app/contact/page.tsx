import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  HeroEntrance,
  SlideUp,
  FadeIn,
  StaggerContainer,
} from "@/components/EntranceProvider";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#071A33] to-[#133B4F] text-white py-24">
        <HeroEntrance className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6 text-balance">
            Need To Talk?
            <br />
            Contact Us Today
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            Our friendly and knowledgeable team is just a call away. Get
            personalized guidance to understand how our solutions can unlock
            growth for your business.
          </p>
        </HeroEntrance>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <StaggerContainer className="space-y-12">
              <SlideUp>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Connect With Us
                </h2>
              </SlideUp>

              <div className="space-y-8">
                <SlideUp delay={0.1}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2F9A8A] p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        team@factora.co
                      </h3>
                      <p className="text-muted-foreground">
                        Have a question for the team? Send a message.
                      </p>
                    </div>
                  </div>
                </SlideUp>

                <SlideUp delay={0.2}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2F9A8A] p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        +31 6 39665120
                      </h3>
                      <p className="text-muted-foreground">
                        Are you interested in working together? Let us know!
                      </p>
                    </div>
                  </div>
                </SlideUp>

                <SlideUp delay={0.3}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2F9A8A] p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Prins Hendrikkade 25E, 1012TL
                      </h3>
                      <p className="text-muted-foreground">
                        Amsterdam, The Netherlands
                      </p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </StaggerContainer>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect With Factora
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a question or just want to share your thoughts,
                we&apos;d love to hear from you.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name*
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email*
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone*
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject*
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message*
                  </label>
                  <Textarea
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="rounded border-gray-300"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the Privacy Policy
                  </label>
                </div>

                <Button className="w-full bg-[#2F9A8A] hover:bg-[#2F9A8A]/90 text-white py-3">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#071A33] to-[#133B4F] text-white py-20">
        <SlideUp className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Get Early Access To Factora
            <br />
            To Get Paid Faster
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
            With intelligent automation, proactive insights, and seamless
            integrations, Factora helps you get paid faster while simplifying
            your accounts receivable process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-card text-foreground hover:bg-gray-100 px-8 py-3">
              Sign Up For Free Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-card hover:text-foreground px-8 py-3 bg-transparent"
            >
              Request Free Demo
            </Button>
          </div>
        </SlideUp>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted/50 py-16">
        <FadeIn className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Sign Up For Our Newsletter And
                <br />
                Get The Latest News
              </h3>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Input
                type="email"
                placeholder="email@provider.com"
                className="flex-1 md:w-80"
              />
              <Button className="bg-[#2F9A8A] hover:bg-[#2F9A8A]/90 text-white px-6">
                Submit Now
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="bg-card py-16 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            <SlideUp delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Factora
                </h3>
                <p className="text-muted-foreground mb-4">
                  Factora Empowering Your Business
                </p>
                <p className="text-muted-foreground text-sm">
                  Factora helps SME companies get paid faster.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/about" className="hover:text-[#2F9A8A]">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[#2F9A8A]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Resources
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/pricing" className="hover:text-[#2F9A8A]">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2F9A8A]">
                      Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2F9A8A]">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2F9A8A]">
                      Ask for Demo
                    </Link>
                  </li>
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Legals</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-[#2F9A8A]">
                      Privacy & Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#2F9A8A]">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </SlideUp>
          </StaggerContainer>

          <SlideUp
            delay={0.6}
            className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-muted-foreground text-sm">
              © 2025 Factora. All rights reserved.
              <br />
              Factora B.V.
              <br />
              Prins Hendrikkade 25E, 1012TL
              <br />
              Chamber of Commerce: 95634-X
            </p>
            <div className="mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-[#2F9A8A]"
              >
                LinkedIn
              </Link>
            </div>
          </SlideUp>
        </div>
      </footer>
    </div>
  );
}
