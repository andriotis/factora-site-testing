import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            How we collect, use, and protect your information
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you use our contact form, we collect the following
              information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your name and contact information (email, phone)</li>
              <li>The subject and content of your message</li>
              <li>Your agreement to our privacy policy</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information you provide to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              Information Sharing
            </h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              Data Security
            </h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6 text-[#2F9A8A]">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at{" "}
              <a
                href="mailto:info@factora.eu"
                className="text-[#2F9A8A] hover:underline"
              >
                info@factora.eu
              </a>
            </p>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#2F9A8A] text-white rounded-full font-medium hover:bg-[#1a5d57] transition-colors"
              >
                Back to Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
