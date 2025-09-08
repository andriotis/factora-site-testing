"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  HeroEntrance,
  SlideUp,
  StaggerContainer,
  MotionWrapper,
} from "@/components/EntranceProvider";
import { useI18n } from "@/components/I18nProvider";

export default function ContactPage() {
  const { t, locale } = useI18n();

  // Update page metadata when locale changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = t.contact.meta_title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t.contact.meta_description);
    }
  }, [t, locale]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacyAgreed: e.target.checked }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return t.contact.validation_name_required;
    if (!formData.email.trim()) return t.contact.validation_email_required;
    if (!formData.subject.trim()) return t.contact.validation_subject_required;
    if (!formData.message.trim()) return t.contact.validation_message_required;
    if (!formData.privacyAgreed) return t.contact.validation_privacy_required;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return t.contact.validation_email_invalid;

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
      const response = await fetch("/api/contact", {
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
          message: t.contact.success_message,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacyAgreed: false,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: t.contact.error_message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="px-6 py-24 text-white h-[700px] flex items-center w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <StaggerContainer stagger={0.15}>
            <HeroEntrance translateY={24}>
              <h1 className="text-5xl font-bold mb-6 text-balance">
                {t.contact.hero_title}
              </h1>
            </HeroEntrance>
            <HeroEntrance translateY={20} delay={0.16}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
                {t.contact.hero_subtitle}
              </p>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <StaggerContainer className="space-y-12">
              <SlideUp>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.contact.connect_title}
                </h2>
              </SlideUp>

              <div className="space-y-8">
                <SlideUp delay={0.1}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2F9A8A] p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {t.contact.email_label}
                      </h3>
                      <p className="text-gray-600">{t.contact.email_desc}</p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </StaggerContainer>

            {/* Contact Form */}
            <MotionWrapper preset="scale" scale={0.95} delay={0.2}>
              <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200 shadow-2xl shadow-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.contact.form_title}
                </h3>
                <p className="text-gray-600 mb-8">{t.contact.form_subtitle}</p>

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
                        {t.contact.name_label}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.contact.name_placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        {t.contact.form_email_label}*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.contact.email_placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        {t.contact.phone_label}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.contact.phone_placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        {t.contact.subject_label}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t.contact.subject_placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      {t.contact.message_label}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contact.message_placeholder}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2F9A8A]/30 focus:border-[#2F9A8A] resize-none text-gray-900"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleCheckboxChange}
                      className="mt-1 rounded border-gray-300 focus:ring-2 focus:ring-[#2F9A8A]/30 focus:ring-offset-0"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      {t.contact.privacy_agreement}{" "}
                      <Link
                        href="/privacy"
                        className="text-[#2F9A8A] hover:underline font-medium"
                      >
                        {t.contact.privacy_policy}
                      </Link>
                      *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 rounded-full font-medium transition-all bg-gradient-to-br from-[#2F9A8A] to-[#1a5d57] text-white shadow-lg shadow-[#2F9A8A]/20 hover:shadow-[#2F9A8A]/30 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? t.contact.sending_button
                      : t.contact.send_button}
                  </Button>
                </form>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
      {/* Footer is rendered from RootLayout */}
    </div>
  );
}
