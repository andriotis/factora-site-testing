"use client";

export type SupportedLocale = "en" | "el";

export type TranslationDictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    solutions: string;
    solutions_core: string;
    solutions_smes: string;
    solutions_banking: string;
    about: string;
    careers: string;
    contact: string;
    book_demo: string;
  };
  landing: {
    hero_title: string;
    hero_subtitle: string;
    hero_cta: string;
    trusted_by: string;
    integrations_title: string;
    integrations_subtitle: string;
    smes_chip: string;
    smes_title: string;
    smes_subtitle: string;
    smes_problem_title: string;
    smes_problem_text: string;
    smes_point_1_title: string;
    smes_point_1_desc: string;
    smes_point_2_title: string;
    smes_point_2_desc: string;
    smes_point_3_title: string;
    smes_point_3_desc: string;
    bankers_chip: string;
    bankers_title: string;
    bankers_subtitle: string;
    bankers_problem_title: string;
    bankers_problem_text: string;
    bankers_point_1_title: string;
    bankers_point_1_desc: string;
    bankers_point_2_title: string;
    bankers_point_2_desc: string;
    bankers_point_3_title: string;
    bankers_point_3_desc: string;
    early_title: string;
    early_subtitle: string;
    early_badge: string;
    form_name: string;
    form_name_placeholder: string;
    form_email: string;
    form_email_placeholder: string;
    form_company: string;
    form_company_placeholder: string;
    form_role: string;
    form_role_placeholder: string;
    form_cta: string;
    form_disclaimer: string;
    form_disclaimer_prefix?: string;
    form_disclaimer_and?: string;
    terms_label?: string;
    privacy_label?: string;
  };
  integrations: {
    credit_scoring_name: string;
    credit_scoring_desc: string;
    credit_scoring_benefits: string[];
    get_paid_name: string;
    get_paid_desc: string;
    get_paid_benefits: string[];
    copilot_name: string;
    copilot_desc: string;
    copilot_benefits: string[];
    collections_name: string;
    collections_desc: string;
    collections_benefits: string[];
  };
  about: {
    meta_title: string;
    meta_description: string;
    why_started_title: string;
    why_started_para1: string;
    why_started_para2: string;
    why_started_para3: string;
    values_title: string;
    values_subtitle: string;
    fair_access_title: string;
    fair_access_desc: string;
    trust_title: string;
    trust_desc: string;
    simplicity_title: string;
    simplicity_desc: string;
  };
  careers: {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_subtitle: string;
    send_cv_button: string;
    join_team_title: string;
    join_team_desc: string;
    ml_engineer_title: string;
    ml_engineer_desc: string;
    data_engineer_title: string;
    data_engineer_desc: string;
    fullstack_engineer_title: string;
    fullstack_engineer_desc: string;
    designer_title: string;
    designer_desc: string;
    analyst_title: string;
    analyst_desc: string;
    security_engineer_title: string;
    security_engineer_desc: string;
    how_to_apply_title: string;
    how_to_apply_subtitle: string;
    apply_step1: string;
    apply_step2: string;
    apply_step3: string;
    apply_step4: string;
    apply_step4_1: string;
    apply_step4_2: string;
    apply_step4_3: string;
    email_cv_button: string;
  };
  contact: {
    meta_title: string;
    meta_description: string;
    hero_title: string;
    hero_subtitle: string;
    connect_title: string;
    email_label: string;
    email_desc: string;
    form_email_label: string;
    form_title: string;
    form_subtitle: string;
    name_label: string;
    name_placeholder: string;
    email_placeholder: string;
    phone_label: string;
    phone_placeholder: string;
    subject_label: string;
    subject_placeholder: string;
    message_label: string;
    message_placeholder: string;
    privacy_agreement: string;
    privacy_policy: string;
    send_button: string;
    sending_button: string;
    success_message: string;
    error_message: string;
    validation_name_required: string;
    validation_email_required: string;
    validation_phone_required: string;
    validation_subject_required: string;
    validation_message_required: string;
    validation_privacy_required: string;
    validation_email_invalid: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    html?: string;
    info_collect_title: string;
    info_collect_intro: string;
    info_collect_items: string[];
    use_title: string;
    use_intro: string;
    use_items: string[];
    sharing_title: string;
    sharing_body: string;
    security_title: string;
    security_body: string;
    rights_title: string;
    rights_intro: string;
    rights_items: string[];
    contact_title: string;
    contact_body_prefix: string;
    back_to_contact: string;
  };
  terms: {
    title: string;
    intro: string;
    contact_prefix: string;
  };
  footer: {
    company_title: string;
    solutions_title: string;
    legals_title: string;
    copyright: string;
    terms_label?: string;
    privacy_label?: string;
  };
};

export const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  en: {
    meta: {
      title: "Factora",
      description: "Your Trusted AI Financial Copilot for Smarter B2B Payments",
    },
    nav: {
      solutions: "Solutions",
      solutions_core: "Platform",
      solutions_smes: "For SMEs",
      solutions_banking: "For Financial Institutions",
      about: "About",
      careers: "Careers",
      contact: "Contact",
      book_demo: "Book a demo",
    },
    landing: {
      hero_title:
        "Your Trusted\nAI Financial Copilot\nfor Smarter B2B Payments",
      hero_subtitle:
        "<strong>Prevent</strong> risky buyers. <strong>Get paid</strong> faster. Increase <strong>conversion rates</strong> with safer credit.",
      hero_cta: "Book a demo",
      trusted_by: "SUPPORTED BY",
      integrations_title:
        "Plug-and-Play Working-Capital Management & Financing Platform",
      integrations_subtitle:
        "Factora integrates into the finance and accounting stack you use every day.",
      smes_chip: "For SMEs",
      smes_title:
        "We help businesses offer safer credit terms and get paid earlier",
      smes_subtitle: "",
      smes_problem_title: "Problem we solve:",
      smes_problem_text: "Late B2B payments choke growth and burn ops time.",
      smes_point_1_title: "Get paid faster",
      smes_point_1_desc:
        "Accelerate time-to-cash by offering attractive invoice discounts to your customers. Access instant funding with one-click invoice financing.",
      smes_point_2_title: "Underwrite buyers automatically",
      smes_point_2_desc:
        "Identify reliable customers, extend credit terms with confidence, boost sales.",
      smes_point_3_title: "Seamless integrations",
      smes_point_3_desc:
        "Built into your existing tools. Embedded directly in your accounting and finance stack for effortless workflows.",
      bankers_chip: "For Financial Institutions",
      bankers_title: "Launch SME Financing, Fast",
      bankers_subtitle:
        "White label-ready, fully automated, digital invoice-financing platform with direct integration into your systems.",
      bankers_problem_title: "Problem we solve:",
      bankers_problem_text:
        "Low‑ticket SME deals are unprofitable on legacy stacks.",
      bankers_point_1_title:
        "Finance qualified transactions, not blind credit risk",
      bankers_point_1_desc:
        "Protect against defaults with invoice-level underwriting and validated buyer–seller status.",
      bankers_point_2_title: "Generate leads",
      bankers_point_2_desc: "Unlock high-quality, finance-seeking businesses.",
      bankers_point_3_title: "Document collection",
      bankers_point_3_desc:
        "Automatically gather financials, risk signals, and KYC-ready documentation.",
      early_title: "Be among the first to use Factora",
      early_subtitle:
        "Product in development — sign up for early access and exclusive benefits.",
      early_badge:
        "Early access users get priority support and onboarding credits",
      form_name: "Name",
      form_name_placeholder: "e.g. Maria Johnson",
      form_email: "Email",
      form_email_placeholder: "you@company.com",
      form_company: "Company",
      form_company_placeholder: "Company name",
      form_role: "Role",
      form_role_placeholder: "CEO / CTO / Ops manager",
      form_cta: "Book a demo",
      form_disclaimer:
        "We'll only use your email for product updates. We won't share your data.",
      form_disclaimer_prefix:
        "By submitting this form, you consent to Factora processing your personal data as outlined in our",
      form_disclaimer_and: "and",
      terms_label: "Terms",
      privacy_label: "Privacy Policy",
    },
    integrations: {
      credit_scoring_name: "Instant buyers credit scoring",
      credit_scoring_desc:
        "Offer safer credit terms. Protect against late payments and defaults.",
      credit_scoring_benefits: [
        "Offer safer credit terms",
        "Protect against late payments and defaults",
      ],
      get_paid_name: "Get paid faster",
      get_paid_desc:
        "Dynamic invoice-discounting and one-click invoice financing.",
      get_paid_benefits: [
        "Dynamic invoice-discounting",
        "One-click invoice financing",
      ],
      copilot_name: "AI copilot",
      copilot_desc:
        "Your trusted assistant for smarter trading, customer deals, and cash flow management.",
      copilot_benefits: [
        "Smarter trading",
        "Better customer deals",
        "Cash flow management",
      ],
      collections_name: "Smart reminders & collections",
      collections_desc:
        "Kind dunning that reduces DSO, plus auto-reconciliation.",
      collections_benefits: [
        "Reduce DSO with kind dunning",
        "Automatic reconciliation",
      ],
    },
    about: {
      meta_title:
        "About Factora — Our mission, values & platform for SME financing",
      meta_description:
        "Learn how Factora builds plug-and-play digital infrastructure for invoice factoring, financing and insurance — so banks and marketplaces can reliably fund small businesses.",
      why_started_title:
        "Built by creators for merchants & Financial Institutions",
      why_started_para1:
        "Founded in 2025 in Greece, Factora was born with a clear vision: fix the liquidity gap European SMEs face due to B2B credit and late customer payments. For too long, flexible terms and fast funding have been reserved for large enterprises. Smaller firms carry the risk without the tools. Across markets the pattern repeats—strong operators held back by a domino effect of late invoices, write-offs, and scarce credit.",
      why_started_para2:
        "By removing the barriers of manual underwriting, time-consuming credit checks, paper-based processes, and old-fashioned collections, Factora makes it possible for businesses of every size to trade on fair terms.",
      why_started_para3:
        "Our team builds with a simple ethos: fair access, trust by design, and radical simplicity. We’re here to change how B2B payments flow across the supply chain and to democratize SME access to bank-grade working-capital finance",
      values_title: "Our values — how we build and serve",
      values_subtitle: "What guides our work and relationships",
      fair_access_title: "Fair Access",
      fair_access_desc:
        "Every viable SME deserves bank-backed working capital. We use transparent, data-driven underwriting based on reality, not bureaucracy or outdated methods, so every business is assessed fairly.",
      trust_title: "Trust",
      trust_desc:
        "Security, privacy, and compliance are priorities. Your business financial data are handled with rigorous protection and responsibility. Credit decisions are explainable and auditable, so owners, accountants, and banking partners can rely on them.",
      simplicity_title: "Simplicity",
      simplicity_desc:
        "Less manual processes, bureaucracy and stakeholders for working capital management and financing. Our solution integrates seamlessly with your existing tools, accounting and finance stack, offering our services with no friction.",
    },
    careers: {
      meta_title: "Careers at Factora — Build the Future of B2B Credit",
      meta_description:
        "Join Factora to ship fast, own outcomes, and help millions of SMEs access fair credit. Remote‑friendly with high ownership and real impact.",
      hero_title: "Build the Future of B2B Payments & Credit",
      hero_subtitle: "Factora seeks Dreamers. Doers. Builders.",
      send_cv_button: "Send your CV",
      join_team_title: "Join our team",
      join_team_desc:
        "We're always open to passionate, hard-working and talented people. If you enjoy creative thinking, working in a fast-evolving environment, achieving hard goals, and building financial technology to reshape B2B payments and credit, we'd love to hear from you.",
      ml_engineer_title: "Machine Learning Engineer",
      ml_engineer_desc:
        "Design cutting-edge models that power smarter credit decisions.",
      data_engineer_title: "Data Engineer",
      data_engineer_desc:
        "Build and optimize data pipelines to deliver real-time risk insights.",
      fullstack_engineer_title: "Full-Stack Engineer",
      fullstack_engineer_desc:
        "Deliver end-to-end features across the platform and embed compliance at every layer.",
      designer_title: "Product UX/UI Designer",
      designer_desc:
        "Make complex financial flows feel simple, clear, and delightful.",
      analyst_title: "Credit Scoring Analyst",
      analyst_desc:
        "Build innovative risk-scoring pipelines and pinpoint the metrics that truly matter.",
      security_engineer_title: "Cyber Security Engineer",
      security_engineer_desc:
        "Protect infrastructure and data with threat modeling, hardening, monitoring, and best-practice frameworks",
      how_to_apply_title: "How to apply",
      how_to_apply_subtitle: "",
      apply_step1: "Send an email to:",
      apply_step2: "Subject:",
      apply_step3: "Attach: CV/resume as PDF",
      apply_step4: "Include in the email body:",
      apply_step4_1: "3–5 sentences on why the selection of this role",
      apply_step4_2: "Your location/time zone and earliest start date",
      apply_step4_3: "Any links (portfolio, GitHub, LinkedIn, case studies)",
      email_cv_button: "Email Your CV",
    },
    contact: {
      meta_title: "Contact Factora — Get in Touch with Our Team",
      meta_description:
        "Have questions about our B2B payment solutions? Contact our team for personalized guidance and support. We're here to help your business grow.",
      hero_title: "We're Here to Help",
      hero_subtitle:
        "Have questions about our solutions? Want to see how we can help your business? We'd love to hear from you and help you get started.",
      connect_title: "Connect With Us",
      email_label: "info@factora.eu",
      email_desc: "Prefer email? We're just a message away!",
      form_email_label: "Email",
      form_title: "Send Us a Message",
      form_subtitle:
        "Drop us a line below and we'll get back to you as soon as possible!",
      name_label: "Your Fullname*",
      name_placeholder: "Enter your fullname",
      email_placeholder: "Enter your email",
      phone_label: "Phone",
      phone_placeholder: "Enter your phone number",
      subject_label: "Subject*",
      subject_placeholder: "Enter subject",
      message_label: "Message*",
      message_placeholder: "Enter your message",
      privacy_agreement: "I agree to the",
      privacy_policy: "Privacy Policy",
      send_button: "Send Message",
      sending_button: "Sending...",
      success_message: "Message sent successfully! We'll get back to you soon.",
      error_message: "Failed to send message. Please try again later.",
      validation_name_required: "Name is required",
      validation_email_required: "Email is required",
      validation_phone_required: "Phone is required",
      validation_subject_required: "Subject is required",
      validation_message_required: "Message is required",
      validation_privacy_required: "You must agree to the Privacy Policy",
      validation_email_invalid: "Please enter a valid email address",
    },
    footer: {
      company_title: "Company",
      solutions_title: "Solutions",
      legals_title: "Legals",
      copyright: "All rights reserved.",
      terms_label: "Terms",
      privacy_label: "Privacy Policy",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we collect, use, and protect your information",
      html: `<h1 class="text-3xl font-bold mb-4">Privacy Policy<\/h1>
<p class="mb-8">Effective Date: [09\/09\/2025]<\/p>
<p class="mb-6">Factora (“Factora,” “we,” “us,” “our”) values your privacy and is committed to protecting the personal data you provide when interacting with our website and our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information, in accordance with the General Data Protection Regulation (EU) 2016\/679 (“GDPR”).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">1. Data We Collect<\/h2>
<p class="mb-2">Demo form (required fields):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Full name<\/li>
  <li>Business email<\/li>
  <li>Company name<\/li>
  <li>Role<\/li>
<\/ul>
<p class="mb-2">Contact form:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Full name (required)<\/li>
  <li>Email (required)<\/li>
  <li>Phone number (optional)<\/li>
  <li>Subject and message<\/li>
<\/ul>
<p class="mb-2">Automatically collected (online identifiers):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>IP address<\/li>
  <li>Device\/browser information<\/li>
  <li>Timestamp<\/li>
  <li>Referral URL<\/li>
  <li>Cookie identifiers (see Cookies section)<\/li>
<\/ul>
<p class="mb-2">Marketing (optional):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Your explicit consent to receive product updates.<\/li>
<\/ul>
<p class="mb-6">⚠️ Please avoid including sensitive or confidential information (e.g., financial, health, government ID data) in free-text message fields.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">2. Purposes & Legal Bases (GDPR, Art. 6)<\/h2>
<p class="mb-4">Demo form — to arrange, confirm, and run your demo (emails, scheduling, follow-ups): Contractual necessity \/ pre-contract steps (Art. 6(1)(b)).<\/p>
<p class="mb-4">Contact form — to respond to your inquiry: Contractual necessity \/ pre-contract steps (Art. 6(1)(b)).<\/p>
<p class="mb-4">Security, abuse prevention, logging — monitoring system integrity and fraud prevention: Legitimate interests (Art. 6(1)(f)).<\/p>
<p class="mb-4">Optional product updates\/marketing — only with your explicit consent: Consent (Art. 6(1)(a)). You may withdraw at any time.<\/p>
<p class="mb-6">Legal obligations — e.g., record-keeping, regulatory requests: Legal obligation (Art. 6(1)(c)).<\/p>
<p class="mb-6">We do not use these forms for automated decision-making that produces legal or similarly significant effects.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">3. How We Use Your Information<\/h2>
<p class="mb-4">We process your personal data only where there is a lawful basis under GDPR. We use your information for the following purposes:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>To respond to your inquiries and messages.<\/li>
  <li>To schedule and manage demo calls or meetings.<\/li>
  <li>To communicate with you regarding our services and partnerships.<\/li>
  <li>To provide information about potential financing opportunities through our partner institutions (upon request).<\/li>
  <li>To improve our Website functionality and user experience.<\/li>
  <li>To comply with legal obligations and regulatory requirements.<\/li>
<\/ul>
<p class="mb-6">The lawful bases for processing include performance of a contract, legitimate interest, compliance with legal obligations, and your explicit consent (where required).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">4. Sharing of Information<\/h2>
<p class="mb-4">As part of order processing in accordance with Art. 28 GDPR, we pass on your data to service providers who support us in the operation of our websites and the associated processes. Our service providers are strictly bound by instructions to us and are contractually bound accordingly. These are service providers of the following categories:<\/p>
<p class="mb-4"> We may share your information with:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Cloud hosting and IT infrastructure providers,<\/li>
  <li>Website analytics services,<\/li>
  <li>Email communication and scheduling tools,<\/li>
  <li>Professional advisers (legal, compliance, and audit), and<\/li>
  <li>Dunning & collection agencies (registered) for dunning and collection services in the context of overdue receivables<\/li>
<\/ul>
<p class="mb-4">All third parties are required to process your data securely and in compliance with applicable data protection laws.<\/p>
<p class="mb-4">Where our service providers process data outside the European Economic Area (EEA), we ensure that appropriate safeguards are in place, such as the European Commission’s Standard Contractual Clauses (SCCs) or an adequacy decision, to guarantee an adequate level of protection.<\/p>
<p class="mb-6">We do not sell or rent your personal data. We do not share your form data with financing partners unless you explicitly ask us to or it is necessary to progress your request (e.g., you ask for an introduction).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">5. International Transfers<\/h2>
<p class="mb-2">Some providers may process or store data outside the EEA\/UK. Where this occurs, we implement:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>EU Standard Contractual Clauses (SCCs)<\/li>
  <li>Transfer Impact Assessments (TIAs)<\/li>
  <li>Technical\/organisational safeguards (e.g., encryption, access restrictions).<\/li>
<\/ul>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">6. Retention<\/h2>
<p class="mb-4">We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, and in line with legal and regulatory requirements. Specifically:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Demo leads & contact inquiries: up to 24 months from last interaction (to allow reasonable follow-ups and pipeline analytics).<\/li>
  <li>Marketing contacts (consent): until withdrawal or 24 months of inactivity.<\/li>
  <li>Security logs: typically 12 months (longer if required for security investigations).<\/li>
  <li>Legal claims\/compliance: specific records may be retained longer if required by law or necessary to establish\/defend claims.<\/li>
<\/ul>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">7. Cookies and Tracking<\/h2>
<p class="mb-4">You can manage your cookie preferences through your browser settings. Essential cookies cannot be disabled, as they are necessary for Website operation.<\/p>
<p class="mb-4">Our Website uses cookies and similar technologies to:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Ensure Website functionality.<\/li>
  <li>Improve your browsing experience.<\/li>
  <li>Collect anonymized analytics data.<\/li>
<\/ul>
<p class="mb-6">You can set your browser to inform you about the placement of cookies. This makes the use of cookies transparent to you. You can also delete cookies at any time via the corresponding browser setting and prevent the setting of new cookies. Please note that our websites may then not be displayed and some functions may no longer be technically available.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">8. Security<\/h2>
<p class="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Encryption (in transit and at rest where applicable)<\/li>
  <li>Access controls and least-privilege policies<\/li>
  <li>Regular security monitoring and logging<\/li>
  <li>Vendor due diligence and contractual safeguards.<\/li>
  <li>Incident detection and response processes<\/li>
<\/ul>
<p class="mb-6">Despite our safeguards, no system is fully secure, but we strive to maintain a level of security appropriate to the risks.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">9. Your Rights<\/h2>
<p class="mb-4">Under GDPR, you have the following rights:<\/p>
<p class="mb-4"><strong>Right to information (Article 15 GDPR):<\/strong><\/p>
<p class="mb-4">You have the right to request confirmation as to whether personal data concerning you is being processed; if this is the case, you have a right to information about this personal data and to the information listed in detail in Art. 15 GDPR.<\/p>
<p class="mb-4"><strong>Right to Rectification (Article 16 GDPR):<\/strong><\/p>
<p class="mb-4">You have the right to request the correction of inaccurate personal data concerning you and, if necessary, the completion of incomplete data without undue delay.<\/p>
<p class="mb-4"><strong>Right to Erasure (“Right to be Forgotten”) (Article 17 GDPR):<\/strong><\/p>
<p class="mb-4">You have the right to request that personal data concerning you be deleted without undue delay if one of the reasons listed in detail in Article 17 GDPR applies.<\/p>
<p class="mb-4"><strong>Right to Restrict Processing (Article 18 GDPR): <\/strong><\/p>
<p class="mb-4">You have the right to request the restriction of processing if one of the conditions listed in Art. 18 GDPR is met, e.B. if you have objected to the processing, for the duration of the examination by the controller.<\/p>
<p class="mb-4"><strong>Right to Data Portability (Article 20 GDPR): <\/strong><\/p>
<p class="mb-4">In certain cases, which are listed in detail in Art. 20 GDPR, you have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format or to request the transmission of this data to a third party.<\/p>
<p class="mb-4"><strong>Right to Object (Article 21 GDPR): <\/strong><\/p>
<p class="mb-4">You can object at any time to processing of your data based on legitimate interests, including profiling, unless we demonstrate compelling legitimate grounds. You also have the right to object to processing for direct marketing purposes.<\/p>
<p class="mb-4"><strong>Right Not to Be Subject to Automated Decision-Making (Article 22 GDPR):<\/strong><\/p>
<p class="mb-4">You have the right not to be subject to decisions based solely on automated processing, including profiling, which produces legal effects or significantly affects you, unless such processing is:<\/p>
<ul class="list-disc pl-6 mb-4 space-y-2">
  <li>necessary for entering into or performing a contract,<\/li>
  <li>authorized by law, or<\/li>
  <li>based on your explicit consent.<\/li>
<\/ul>
<p class="mb-4"><strong>Right to Withdraw Consent (Articles 6(1)(a) and 7(3) GDPR):<\/strong><\/p>
<p class="mb-4">Where processing is based on consent, you have the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.<\/p>
<p class="mb-4"><strong>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR):<\/strong><\/p>
<p class="mb-6">In accordance with Article 77 GDPR, you have the right to lodge a complaint with a supervisory authority if you believe that the processing of your data violates data protection regulations. In particular, the right to lodge a complaint may be asserted with a supervisory authority in the EU Member State or UK jurisdiction of your habitual residence, place of work or where an alleged infringement has occurred.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">10. Children’s Data<\/h2>
<p class="mb-6">Our Website and services are directed exclusively to businesses. We do not knowingly collect data from individuals under the age of 18. If we become aware that we have collected such data, we will delete it immediately.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">11. Updates to This Privacy Policy<\/h2>
<p class="mb-6">We may update this Privacy Policy from time to time to reflect legal, technical, or business changes. The “Last Updated” date at the top will indicate the latest revision. We encourage you to review this Policy regularly.<\/p>`,
      info_collect_title: "Information We Collect",
      info_collect_intro:
        "When you use our contact form, we collect the following information:",
      info_collect_items: [
        "Your fullname and contact information (email, phone)",
        "The subject and content of your message",
        "Your agreement to our privacy policy",
      ],
      use_title: "How We Use Your Information",
      use_intro: "We use the information you provide to:",
      use_items: [
        "Respond to your inquiries and provide customer support",
        "Send you information about our services",
        "Improve our website and services",
        "Comply with legal obligations",
      ],
      sharing_title: "Information Sharing",
      sharing_body:
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.",
      security_title: "Data Security",
      security_body:
        "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      rights_title: "Your Rights",
      rights_intro: "You have the right to:",
      rights_items: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Withdraw consent for data processing",
      ],
      contact_title: "Contact Us",
      contact_body_prefix:
        "If you have any questions about this Privacy Policy or our data practices, please contact us at",
      back_to_contact: "Back to Contact",
    },
    terms: {
      title: "Terms & Conditions",
      intro:
        "This page will host our Terms & Conditions. For now, please contact us with any questions.",
      contact_prefix: "For any questions, email",
    },
  },
  el: {
    meta: {
      title: "Factora",
      description:
        "Ο Έμπιστος AI Οικονομικός Βοηθός σας για Έξυπνες B2B Πληρωμές",
    },
    nav: {
      solutions: "Λύσεις",
      solutions_core: "Πλατφόρμα",
      solutions_smes: "Μικρομεσαίες Επιχειρήσεις",
      solutions_banking: "Χρηματοπιστωτικά Ιδρύματα",
      about: "Σχετικά",
      careers: "Καριέρα",
      contact: "Επικοινωνία",
      book_demo: "Κλείστε demo",
    },
    landing: {
      hero_title: "Ο έμπιστος\nAI Οικονομικός Βοηθός\nγια έξυπνες B2B πληρωμές",
      hero_subtitle:
        "Προστατευτείτε από <strong>κακοπληρωτές</strong>. <strong>Εισπράξτε</strong> πιο γρήγορα. Αυξήστε τις εμπορικές <strong>συμφωνίες</strong> σας με ασφαλή πίστωση.",
      hero_cta: "Κλείστε demo",
      trusted_by: "ΜΕ ΤΗΝ ΥΠΟΣΤΗΡΙΞΗ ΤΩΝ",
      integrations_title:
        "Ολοκλήρωμένη πλατφόρμα για διαχείριση & χρηματοδότηση κεφαλαίου κίνησης",
      integrations_subtitle:
        "Η Factora ενσωματώνεται εύκολα στα υφιστάμενα λογιστικά και συναλλακτικά εργαλεία που χρησιμοποιείτε καθημερινά.",
      smes_chip: "Για Μικρομεσαίες Επιχειρήσεις",
      smes_title:
        "Βοηθάμε επιχειρήσεις για ασφαλέστερους όρους πίστωσης και γρήγορες εισπράξεις",
      smes_subtitle: "",
      smes_problem_title: "Το πρόβλημα που λύνουμε:",
      smes_problem_text:
        "Οι καθυστερημένες B2B πληρωμές πνίγουν την ανάπτυξη και καίνε χρόνο λειτουργιών.",
      smes_point_1_title: "Εισπράξτε πιο γρήγορα",
      smes_point_1_desc:
        "Επιταχύνετε τον χρόνο είσπραξης των ανοικτών τιμολογίων με ελκυστικές εκπτώσεις για έγκαιρη πληρωμή. Πρόσβαση σε άμεση χρηματοδότηση κεφαλαίου κίνησης με προεξόφληση τιμολογίων  «με ένα κλικ».",
      smes_point_2_title: "Αυτόματη πιστοληπτική αξιολόγηση αγοραστών",
      smes_point_2_desc:
        "Αναγνωρίστε τους αξιόπιστους πελάτες, επεκτείνετε τους όρους πίστωσης με ασφάλεια, αυξήστε τις πωλήσεις.",
      smes_point_3_title: "Εύκολη διασύνδεση",
      smes_point_3_desc:
        "Προσαρμοσμένο στα υφιστάμενα λογιστικά και συναλλακτικά εργαλείας σας για αυτοματοποιημένη και ομαλή πρόσβαση στις υπηρεσίες μας.",
      bankers_chip: "Για Χρηματοπιστωτικά Ιδρύματα",
      bankers_title: "Λανσάρετε χρηματοδότηση επιχειρήσεων, γρήγορα",
      bankers_subtitle:
        "White-label, πλήρως ψηφιακή και αυτοματοποιημένη πλατφόρμα προεξόφλησης τιμολογίων με άμεση διασύνδεση με τα συστήματά σας.",
      bankers_problem_title: "Το πρόβλημα που λύνουμε:",
      bankers_problem_text:
        "Οι μικρές συναλλαγές ΜΜΕ είναι ασύμφορες σε παλαιά συστήματα.",
      bankers_point_1_title:
        "Χρηματοδοτήστε πιστοποιημένες συναλλαγές, δίχως τυφλό πιστωτικό ρίσκο",
      bankers_point_1_desc:
        "Προστατευτείτε από καθυστερήσεις  και αθετήσεις δόσεων με αξιολόγηση πίστωσης σε επίπεδο τιμολογίου και επαληθευμένη σχέση αγοραστή–πωλητή.",
      bankers_point_2_title: "Δημιουργήστε leads",
      bankers_point_2_desc:
        "Αποκτήστε πρόσβαση σε μία βάση αξιολογημένων και υγιών μικρομεσαίων επιχειρήσεων  που αναζητούν χρηματοδότηση.",
      bankers_point_3_title: "Αυτόματη συλλογή όλων των απαραίτητων εγγράφων",
      bankers_point_3_desc:
        "Αυτόματη συγκέντρωση οικονομικών στοιχείων, ενδείξεων κινδύνου, πιστοληπτικής ικανότητας και τεκμηρίωσης KYC.",
      early_title: "Γίνετε από τους πρώτους που θα χρησιμοποιήσουν την Factora",
      early_subtitle:
        "Το προϊόν είναι υπό ανάπτυξη — εγγραφείτε για early access και προνόμια.",
      early_badge:
        "Οι early access χρήστες έχουν προτεραιότητα υποστήριξης και credits onboarding",
      form_name: "Όνομα",
      form_name_placeholder: "π.χ. Μαρία Ιωάννου",
      form_email: "Email",
      form_email_placeholder: "you@company.com",
      form_company: "Εταιρεία",
      form_company_placeholder: "Όνομα εταιρείας",
      form_role: "Ρόλος",
      form_role_placeholder: "CEO / CTO / Γενικός υπεύθυνος",
      form_cta: "Κλείστε demo",
      form_disclaimer:
        "Θα χρησιμοποιήσουμε το email μόνο για ενημερώσεις προϊόντος. Δεν θα μοιραστούμε τα δεδομένα σας.",
      form_disclaimer_prefix:
        "Υποβάλλοντας αυτή τη φόρμα, συναινείτε στην επεξεργασία των προσωπικών σας δεδομένων από τη Factora, όπως περιγράφεται στην",
      form_disclaimer_and: "και την",
      terms_label: "Όρους Χρήσης",
      privacy_label: "Πολιτική Απορρήτου",
    },
    integrations: {
      credit_scoring_name: "Άμεση πιστοληπτική αξιολόγηση των πελατών σας",
      credit_scoring_desc:
        "Προσφέρετε ασφαλέστερους όρους πίστωσης. Προστατευτείτε από καθυστερημένες πληρωμές και αθετήσεις.",
      credit_scoring_benefits: [
        "Ασφαλέστεροι όροι πίστωσης",
        "Προστασία από καθυστερημένες πληρωμές και αθετήσεις",
      ],
      get_paid_name: "Εισπράξτε πιο γρήγορα",
      get_paid_desc:
        "Δυναμικές εκπτώσεις ανοικτών τιμολογίων για έγκαιρη πληρωμή (dynamic invoice discounting) και άμεση προεξόφληση τιμολογίων με ένα κλικ.",
      get_paid_benefits: [
        "Δυναμικές εκπτώσεις τιμολογίων",
        "Προεξόφληση τιμολογίων με ένα κλικ",
      ],
      copilot_name: "AI Copilot",
      copilot_desc:
        "Ο έμπιστος καθημερινός βοηθός σας για έξυπνες συναλλαγές, εμπορικές συμφωνίες και διαχείριση του κεφαλαίου κίνησης σας.",
      copilot_benefits: [
        "Έξυπνες συναλλαγές",
        "Καλύτερες συμφωνίες πελατών",
        "Διαχείριση κεφαλαίου κίνησης",
      ],
      collections_name: "Έξυπνες υπενθυμίσεις & εισπράξεις",
      collections_desc:
        "Ευγενικές υπενθυμίσεις (dunning) που μειώνουν την καθυστέρηση εκκρεμών πληρωμών (DSO), με αυτόματη αντιστοίχιση πληρωμών - τιμολογίων.",
      collections_benefits: [
        "Μείωση DSO με ευγενικές υπενθυμίσεις",
        "Αυτόματη αντιστοίχιση πληρωμών/τιμολογίων",
      ],
    },
    about: {
      meta_title:
        "Σχετικά με τη Factora — Η αποστολή, οι αξίες και η πλατφόρμα χρηματοδότησης ΜΜΕ",
      meta_description:
        "Μάθετε πώς η Factora δημιουργεί έτοιμη ψηφιακή υποδομή για factoring τιμολογίων, χρηματοδότηση και ασφάλιση — ώστε τράπεζες και marketplaces να μπορούν να χρηματοδοτούν αξιόπιστα μικρές επιχειρήσεις.",
      why_started_title:
        "Στελεχωμένη από ανθρώπους που χτίζουν το αύριο, για επιχειρήσεις και χρηματοπιστωτικά ιδρύματα.",
      why_started_para1:
        "Η Factora ιδρύθηκε το 2025 στην Ελλάδα με ένα ξεκάθαρο όραμα: να αντιμετωπίσει το πρόβλημα ρευστότητας που βιώνουν οι μικρομεσαίες επιχειρήσεις λόγω τιμολογίων επί πιστώσει, καθυστερημένων πληρωμών και αθετήσεων. Σε όλες τις αγορές κατά μήκος της Ευρώπης επαναλαμβάνεται το ίδιο μοτίβο: παραγωγικές εταιρείες πλήττονται από το ντόμινο καθυστερημένων εισπράξεων και διαγραφών, ενώ η γρήγορη πρόσβαση σε τραπεζική χρηματοδότηση κεφαλαίου κίνησης είναι προνόμιο που διατίθεται κυρίως στις μεγάλες επιχειρήσεις.",
      why_started_para2:
        "Παρακάμπτοντας τη χειροκίνητη πιστοληπτική αξιολόγηση, τους παρωχημένους χρονοβόρους πιστωτικούς ελέγχους και της γραφειοκρατίας, η Factora καθιστά εφικτό οι επιχειρήσεις κάθε μεγέθους να συναλλάσσονται με δίκαιους όρους.",
      why_started_para3:
        "Η ομάδα μας χτίζει πάνω σε μια απλή αρχή: δίκαιη πρόσβαση, εμπιστοσύνη και απλότητα. Είμαστε εδώ για να επαναπροσδιορίσουμε τον τρόπο που λειτουργούν οι B2B πληρωμές κατά μήκος της εφοδιαστικής αλυσίδας και να εκδημοκρατίσουμε την πρόσβαση των επιχειρήσεων σε τραπεζική χρηματοδότηση κεφαλαίου κίνησης.",
      values_title: "Οι αξίες μας",
      values_subtitle: "",
      fair_access_title: "Δίκαιη πρόσβαση σε χρηματοδότηση για όλους",
      fair_access_desc:
        "Χρησιμοποιούμε διαφανή αξιολόγηση με τη βοήθεια της τεχνητής νοημοσύνης με βάση την επιχειρησιακή πραγματικότητα, και όχι ξεπερασμένες μεθόδους αξιολόγησης, για την πιστοληπτική αξιολόγηση επιχειρήσεων.",
      trust_title: "Θεμελιώδης Αξιοπιστία",
      trust_desc:
        "Η ασφάλεια, η ιδιωτικότητα και η συμμόρφωση στα διεθνή πρότυπα για τη διαχείριση των δεδομένων σας αποτελούν ύψιστες προτεραιότητες για εμάς. Οι αποφάσεις πίστωσης συνοδεύονται από αιτιολόγηση και ελεγξιμότητα, ώστε να μπορείτε να βασίζεστε σε αυτές.",
      simplicity_title: "Απλότητα",
      simplicity_desc:
        "Η διαχείριση του κεφαλαίου κίνησης και η χρηματοδότηση απλοποιούνται, περιορίζοντας τη γραφειοκρατία και ενωποιώντας όλα τα εμπλεκόμενα μέρη σε μία ενιαία πλατφόρμα. Η λύση μας ενσωματώνεται εύκολα στα υφιστάμενα λογιστικά εργαλεία των επιχειρήσεων.",
    },
    careers: {
      meta_title: "Καριέρα στην Factora — Χτίστε το Μέλλον της B2B Πίστωσης",
      meta_description:
        "Ενταχθείτε στην Factora για γρήγορη παράδοση, ιδιοκτησία αποτελεσμάτων και βοήθεια σε εκατομμύρια ΜΜΕ να αποκτήσουν δίκαια πίστωση. Remote‑friendly με υψηλή ιδιοκτησία και πραγματικό αντίκτυπο.",
      hero_title: "Διαμορφώστε το Μέλλον των B2B Πληρωμών & προϊόντων Πίστωσης",
      hero_subtitle: "Η Factora αναζητά Οραματιστές. Πρακτικούς. Δημιουργούς.",
      send_cv_button: "Στείλε το βιογραφικό σου",
      join_team_title: "Γίνε μέλος της ομάδας μας",
      join_team_desc:
        "Είμαστε ανοιχτοί για παθιασμένους, σκληρά εργαζόμενους και ταλαντούχους ανθρώπους. Αν σου αρέσει η δημιουργική σκέψη, η εργασία σε ένα ταχέως εξελισσόμενο περιβάλλον και η επίτευξη υψηλών στόχων θα χαρούμε να ακούσουμε από σένα.",
      ml_engineer_title: "Machine Learning Engineer",
      ml_engineer_desc:
        "Σχεδίασε μοντέλα αιχμής που τροφοδοτούν πιο έξυπνες αποφάσεις πίστωσης.",
      data_engineer_title: "Data Engineer",
      data_engineer_desc:
        "Δημιούργησε και βελτιστοποίησε ροές δεδομένων για την παροχή πληροφοριών κινδύνου σε πραγματικό χρόνο.",
      fullstack_engineer_title: "Full-Stack Engineer",
      fullstack_engineer_desc:
        "Παράδωσε ολοκληρωμένες λειτουργίες σε όλη την πλατφόρμα και διασφάλισε τη συμμόρφωση σε κάθε επίπεδο.",
      designer_title: "Product UX/UI Designer",
      designer_desc:
        "Κάνε τις σύνθετες ενέργειες για διαχείριση και χρηματοδότηση του κεφαλαίου κίνησης να φαίνονται απλές, ξεκάθαρες και ευχάριστες.",
      analyst_title: "Credit Scoring Analyst",
      analyst_desc:
        "Δημιούργησε pipelines αξιολόγησης κινδύνου και εντόπισε τις μετρήσεις που πραγματικά έχουν σημασία.",
      security_engineer_title: "Cyber Security Engineer",
      security_engineer_desc:
        "Προστάτευσε την υποδομή και τα δεδομένα με μοντελοποίηση απειλών, ενίσχυση, παρακολούθηση και βέλτιστες πρακτικές.",
      how_to_apply_title: "Πώς να υποβάλετε αίτηση",
      how_to_apply_subtitle: "",
      apply_step1: "Στείλτε email στο:",
      apply_step2: "Θέμα:",
      apply_step3: "Επισυνάψτε: CV/βιογραφικό ως PDF",
      apply_step4: "Συμπεριλάβετε στο σώμα του email:",
      apply_step4_1: "3–5 προτάσεις για την επιλογή αυτού του ρόλου",
      apply_step4_2: "Την ζώνη ώρας σας και την επιθυμητή ημερομηνία έναρξης",
      apply_step4_3:
        "Οποιουσδήποτε συνδέσμους (portfolio, GitHub, LinkedIn, μελέτες)",
      email_cv_button: "Email το CV σας",
    },
    contact: {
      meta_title: "Επικοινωνία με Factora — Επικοινωνήστε με την Ομάδα μας",
      meta_description:
        "Έχετε ερωτήσεις για τις λύσεις B2B πληρωμών μας; Επικοινωνήστε με την ομάδα μας για εξατομικευμένη καθοδήγηση και υποστήριξη. Είμαστε εδώ για να βοηθήσουμε την επιχείρησή σας να αναπτυχθεί.",
      hero_title: "Είμαστε Εδώ για να Βοηθήσουμε",
      hero_subtitle:
        "Έχετε ερωτήσεις για τις λύσεις μας; Θέλετε να δείτε πώς μπορούμε να βοηθήσουμε την επιχείρησή σας; Θα χαρούμε να ακούσουμε από εσάς και να σας βοηθήσουμε να ξεκινήσετε.",
      connect_title: "Συνδεθείτε μαζί μας",
      email_label: "info@factora.eu",
      email_desc: "Είμαστε μόνο ένα μήνυμα μακριά!",
      form_email_label: "Email",
      form_title: "Στείλτε μας ένα Μήνυμα",
      form_subtitle:
        "Γράψτε μας παρακάτω και θα σας απαντήσουμε το συντομότερο δυνατό!",
      name_label: "Το Ονοματεπώνυμό σας*",
      name_placeholder: "Εισάγετε το ονοματεπώνυμό σας",
      email_placeholder: "Εισάγετε το email σας",
      phone_label: "Τηλέφωνο",
      phone_placeholder: "Εισάγετε τον αριθμό τηλεφώνου σας",
      subject_label: "Θέμα*",
      subject_placeholder: "Εισάγετε το θέμα",
      message_label: "Μήνυμα*",
      message_placeholder: "Εισάγετε το μήνυμά σας",
      privacy_agreement: "Συμφωνώ με την",
      privacy_policy: "Πολιτική Απορρήτου",
      send_button: "Στείλτε Μήνυμα",
      sending_button: "Αποστολή...",
      success_message:
        "Το μήνυμα στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      error_message:
        "Αποτυχία αποστολής μηνύματος. Παρακαλώ δοκιμάστε ξανά αργότερα.",
      validation_name_required: "Το ονοματεπώνυμο είναι υποχρεωτικό",
      validation_email_required: "Το email είναι υποχρεωτικό",
      validation_phone_required: "Το τηλέφωνο είναι υποχρεωτικό",
      validation_subject_required: "Το θέμα είναι υποχρεωτικό",
      validation_message_required: "Το μήνυμα είναι υποχρεωτικό",
      validation_privacy_required:
        "Πρέπει να συμφωνήσετε με την Πολιτική Απορρήτου",
      validation_email_invalid: "Παρακαλώ εισάγετε ένα έγκυρο email",
    },
    footer: {
      company_title: "Εταιρεία",
      solutions_title: "Λύσεις",
      legals_title: "Νομικά",
      copyright: "Όλα τα δικαιώματα διατηρούνται.",
      terms_label: "Όροι Χρήσης",
      privacy_label: "Πολιτική Απορρήτου",
    },
    privacy: {
      title: "Πολιτική Απορρήτου",
      subtitle:
        "Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας",
      html: `<h1 class="text-3xl font-bold mb-4">Πολιτική Απορρήτου<\/h1>
<p class="mb-8">Ημερομηνία έναρξης ισχύος: [09\/09\/2025]<\/p>
<p class="mb-6">Η Factora («Factora», «εμείς», «μας», «η εταιρεία μας») σέβεται το απόρρητό σας και δεσμεύεται να προστατεύει τα προσωπικά δεδομένα που παρέχετε όταν αλληλεπιδράτε με τον ιστότοπό μας και τις υπηρεσίες μας. Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, κοινοποιούμε και προστατεύουμε τις πληροφορίες σας, σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (ΕΕ) 2016\/679 («ΓΚΠΔ»).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">1. Δεδομένα που συλλέγουμε<\/h2>
<p class="mb-2">Φόρμα demo (υποχρεωτικά πεδία):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Ονοματεπώνυμο<\/li>
  <li>Επαγγελματικό email<\/li>
  <li>Επωνυμία εταιρείας<\/li>
  <li>Ρόλος<\/li>
<\/ul>
<p class="mb-2">Φόρμα επικοινωνίας:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Ονοματεπώνυμο (υποχρεωτικό)<\/li>
  <li>Email (υποχρεωτικό)<\/li>
  <li>Τηλέφωνο (προαιρετικό)<\/li>
  <li>Θέμα και μήνυμα (πεδίο κειμένου)<\/li>
<\/ul>
<p class="mb-2">Αυτόματα συλλεγόμενα (διαδικτυακοί δείκτες):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Διεύθυνση IP<\/li>
  <li>Πληροφορίες συσκευής\/προγράμματος περιήγησης<\/li>
  <li>Χρόνος\/χρονική σήμανση (timestamp)<\/li>
  <li>Αναφερόμενη διεύθυνση URL (referral URL)<\/li>
  <li>Αναγνωριστικά cookies (βλ. ενότητα Cookies)<\/li>
<\/ul>
<p class="mb-2">Μάρκετινγκ (προαιρετικό):<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Η ρητή συγκατάθεσή σας για να λαμβάνετε ενημερώσεις προϊόντων.<\/li>
<\/ul>
<p class="mb-6">⚠️ Παρακαλούμε αποφύγετε την εισαγωγή ευαίσθητων ή εμπιστευτικών πληροφοριών (π.χ. οικονομικά δεδομένα, δεδομένα υγείας, αριθμοί ταυτότητας\/διαβατηρίου) στα πεδία ελεύθερου κειμένου.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">2. Σκοποί & Νομικές Βάσεις (ΓΚΠΔ, Άρθρ. 6)<\/h2>
<p class="mb-4">Φόρμα demo — για τη διευθέτηση, επιβεβαίωση και εκτέλεση της επίδειξης (email, προγραμματισμός, follow-ups): Ανάγκη για εκτέλεση προ-συμβατικών μέτρων \/ εκτέλεση σύμβασης (Άρθρο 6(1)(b)).<\/p>
<p class="mb-4">Φόρμα επικοινωνίας — για την απάντηση στο αίτημά σας: Ανάγκη για εκτέλεση προ-συμβατικών μέτρων \/ εκτέλεση σύμβασης (Άρθρο 6(1)(b)).<\/p>
<p class="mb-4">Ασφάλεια, πρόληψη κατάχρησης, logging — παρακολούθηση ακεραιότητας συστημάτων και πρόληψη απάτης: Νόμιμο έννομο συμφέρον (Άρθρο 6(1)(f)).<\/p>
<p class="mb-4">Προαιρετικές ενημερώσεις προϊόντων\/μάρκετινγκ — μόνο μετά από ρητή συγκατάθεσή σας: Συγκατάθεση (Άρθρο 6(1)(a)). Μπορείτε να την ανακαλέσετε οποιαδήποτε στιγμή.<\/p>
<p class="mb-6">Νομικές υποχρεώσεις — π.χ. τήρηση αρχείων, απαντήσεις σε ρυθμιστικά αιτήματα: Νομική υποχρέωση (Άρθρο 6(1)(c)).<\/p>
<p class="mb-6">Δεν χρησιμοποιούμε αυτές τις φόρμες για αυτοματοποιημένες αποφάσεις που παράγουν νομικά ή ανάλογα σημαντικά αποτελέσματα.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">3. Πώς χρησιμοποιούμε τις πληροφορίες σας<\/h2>
<p class="mb-4">Επεξεργαζόμαστε τα προσωπικά σας δεδομένα μόνο όταν υπάρχει νόμιμη βάση σύμφωνα με τον ΓΚΠΔ. Χρησιμοποιούμε τις πληροφορίες σας για τους εξής σκοπούς:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Να απαντήσουμε σε ερωτήματα και μηνύματά σας.<\/li>
  <li>Να προγραμματίσουμε και να διαχειριστούμε κλήσεις\/συναντήσεις demo.<\/li>
  <li>Να επικοινωνήσουμε μαζί σας σχετικά με τις υπηρεσίες και συνεργασίες μας.<\/li>
  <li>Να παρέχουμε πληροφορίες σχετικά με ενδεχόμενες χρηματοδοτικές ευκαιρίες μέσω συνεργαζόμενων ιδρυμάτων (κατά αίτημα).<\/li>
  <li>Να βελτιώσουμε τη λειτουργικότητα και την εμπειρία χρήσης του ιστότοπου.<\/li>
  <li>Να συμμορφωνόμαστε με νομικές και κανονιστικές απαιτήσεις.<\/li>
<\/ul>
<p class="mb-6">Οι νόμιμες βάσεις επεξεργασίας περιλαμβάνουν την εκτέλεση συμβάσεων, το νόμιμο συμφέρον, τη συμμόρφωση προς νομικές υποχρεώσεις και τη ρητή συγκατάθεσή σας όπου απαιτείται.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">4. Κοινοποίηση πληροφοριών<\/h2>
<p class="mb-4">Στο πλαίσιο της εκτέλεσης υπηρεσιών και σύμφωνα με το Άρθρο 28 ΓΚΠΔ, ενδέχεται να μεταβιβάζουμε τα δεδομένα σας σε προμηθευτές υπηρεσιών που μας υποστηρίζουν στη λειτουργία του ιστότοπου και των σχετικών διαδικασιών. Οι προμηθευτές αυτοί δεσμεύονται αυστηρά από οδηγίες και συμβατικές υποχρεώσεις. Οι κατηγορίες υπηρεσιών περιλαμβάνουν, μεταξύ άλλων:<\/p>
<p class="mb-4">Μπορεί να κοινοποιήσουμε τις πληροφορίες σας σε:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Παρόχους φιλοξενίας στο cloud και υποδομής IT,<\/li>
  <li>Υπηρεσίες ανάλυσης ιστότοπου (analytics),<\/li>
  <li>Εργαλεία ηλεκτρονικής αλληλογραφίας και προγραμματισμού ραντεβού,<\/li>
  <li>Επαγγελματικούς συμβούλους (νομικούς, συμμόρφωσης, ελεγκτές),<\/li>
  <li>Εταιρείες διαχείρισης απαιτήσεων \/ είσπραξης (εγγεγραμμένες) για υπηρεσίες υπερημερίας και είσπραξης σε περίπτωση ληξιπρόθεσμων απαιτήσεων.<\/li>
<\/ul>
<p class="mb-4">Όλοι οι τρίτοι υποχρεούνται να επεξεργάζονται τα δεδομένα σας με ασφάλεια και σύμφωνα με την ισχύουσα νομοθεσία περί προστασίας δεδομένων. Όταν οι προμηθευτές μας επεξεργάζονται δεδομένα εκτός του Ευρωπαϊκού Οικονομικού Χώρου (ΕΟΧ), διασφαλίζουμε την ύπαρξη κατάλληλων εγγυήσεων, όπως οι Τυποποιημένοι Όροι Σύμβασης της Ευρωπαϊκής Επιτροπής (Standard Contractual Clauses — SCCs) ή απόφαση επάρκειας.<\/p>
<p class="mb-6">Δεν πουλάμε ούτε ενοικιάζουμε τα προσωπικά σας δεδομένα. Δεν κοινοποιούμε τα δεδομένα φόρμας σε χρηματοδοτικούς εταίρους εκτός εάν το ζητήσετε ρητά ή είναι απαραίτητο για την προώθηση του αιτήματός σας (π.χ. εάν ζητήσετε σύσταση).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">5. Διεθνείς μεταφορές<\/h2>
<p class="mb-2">Ορισμένοι πάροχοι ενδέχεται να επεξεργάζονται ή να αποθηκεύουν δεδομένα εκτός του ΕΟΧ\/ΗΒ. Σε αυτές τις περιπτώσεις εφαρμόζουμε:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Τυποποιημένους Όρους Σύμβασης της ΕΕ (SCCs),<\/li>
  <li>Αξιολογήσεις Επιπτώσεων Μεταφοράς (Transfer Impact Assessments — TIAs),<\/li>
  <li>Τεχνικά και οργανωτικά μέτρα προστασίας (π.χ. κρυπτογράφηση, περιορισμοί πρόσβασης).<\/li>
<\/ul>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">6. Διάρκεια τήρησης (Retention)<\/h2>
<p class="mb-4">Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο χρόνο είναι αναγκαίο για την εκπλήρωση των σκοπών που περιγράφονται στην παρούσα Πολιτική και σύμφωνα με νομικές\/ρυθμιστικές απαιτήσεις. Συγκεκριμένα:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Leads από demo & ερωτήματα επικοινωνίας: έως και 24 μήνες από την τελευταία αλληλεπίδραση (για εύλογη παρακολούθηση και αναλυτικά στοιχεία pipeline).<\/li>
  <li>Επαφές μάρκετινγκ (με συγκατάθεση): έως ανάκληση της συγκατάθεσης ή 24 μήνες αδράνειας.<\/li>
  <li>Αρχεία ασφαλείας (security logs): συνήθως 12 μήνες (ή περισσότερο εφόσον απαιτείται για έρευνες ασφαλείας).<\/li>
  <li>Νομικές αξιώσεις\/συμμόρφωση: συγκεκριμένα αρχεία μπορεί να τηρούνται για μεγαλύτερο διάστημα εφόσον απαιτείται από το νόμο ή για την απόδειξη\/υπεράσπιση αξιώσεων.<\/li>
<\/ul>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">7. Cookies και Παρακολούθηση<\/h2>
<p class="mb-4">Μπορείτε να διαχειριστείτε τις προτιμήσεις σας σχετικά με τα cookies μέσω των ρυθμίσεων του προγράμματος περιήγησής σας. Τα αναγκαία (essential) cookies δεν μπορούν να απενεργοποιηθούν, καθώς είναι απαραίτητα για τη λειτουργία του ιστότοπου.<\/p>
<p class="mb-4">Ο ιστότοπός μας χρησιμοποιεί cookies και παρόμοιες τεχνολογίες για:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Να διασφαλίσει τη λειτουργικότητα του ιστότοπου,<\/li>
  <li>Να βελτιώσει την εμπειρία περιήγησης,<\/li>
  <li>Να συλλέξει ανωνυμοποιημένα δεδομένα ανάλυσης.<\/li>
<\/ul>
<p class="mb-6">Μπορείτε να ρυθμίσετε το πρόγραμμα περιήγησής σας ώστε να σας ενημερώνει για την απόθεση cookies και να διαγράψετε cookies ανά πάσα στιγμή. Σημειώστε ότι κάποιες σελίδες ή λειτουργίες του ιστότοπου ενδέχεται να μην εμφανίζονται ή να μην λειτουργούν σωστά εάν απενεργοποιήσετε τα cookies.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">8. Ασφάλεια<\/h2>
<p class="mb-4">Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, αποκάλυψη ή καταστροφή. Αυτά περιλαμβάνουν, όπου εφαρμόζεται:<\/p>
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Κρυπτογράφηση (σε μεταφορά και αποθήκευση),<\/li>
  <li>Έλεγχο πρόσβασης και πολιτικές «ελάχιστων δικαιωμάτων»,<\/li>
  <li>Τακτική παρακολούθηση ασφαλείας και logging,<\/li>
  <li>Δέουσα επιμέλεια προμηθευτών και συμβατικές εγγυήσεις,<\/li>
  <li>Διαδικασίες ανίχνευσης περιστατικών και αντίδρασης.<\/li>
<\/ul>
<p class="mb-6">Παρόλο που εφαρμόζουμε μέτρα ασφαλείας, κανένα σύστημα δεν είναι απόλυτα ασφαλές· προβαίνουμε όμως στις ενδεδειγμένες ενέργειες για τη μείωση των κινδύνων.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">9. Τα Δικαιώματά σας<\/h2>
<p class="mb-4">Σύμφωνα με τον ΓΚΠΔ, έχετε τα ακόλουθα δικαιώματα:<\/p>
<p class="mb-4">Δικαίωμα πρόσβασης (Άρθρο 15 ΓΚΠΔ): Δικαίωμα να ζητήσετε επιβεβαίωση εάν δεδομένα προσωπικού χαρακτήρα που σας αφορούν υποβάλλονται σε επεξεργασία και, εάν ναι, να λάβετε πληροφορίες σχετικά με αυτά και τις προβλεπόμενες πληροφορίες του Άρθρου 15.<\/p>
<p class="mb-4">Δικαίωμα διόρθωσης (Άρθρο 16 ΓΚΠΔ): Δικαίωμα να ζητήσετε τη διόρθωση ανακριβών δεδομένων και τη συμπλήρωση ελλιπών δεδομένων.<\/p>
<p class="mb-4">Δικαίωμα διαγραφής («δικαίωμα στη λήθη») (Άρθρο 17 ΓΚΠΔ): Δικαίωμα να ζητήσετε τη διαγραφή προσωπικών δεδομένων υπό τους όρους που ορίζονται στο Άρθρο 17.<\/p>
<p class="mb-4">Δικαίωμα περιορισμού επεξεργασίας (Άρθρο 18 ΓΚΠΔ): Δικαίωμα να ζητήσετε τον περιορισμό της επεξεργασίας όταν ισχύουν οι σχετικοί όροι.<\/p>
<p class="mb-4">Δικαίωμα φορητότητας δεδομένων (Άρθρο 20 ΓΚΠΔ): Σε ορισμένες περιπτώσεις, δικαίωμα να λάβετε τα δεδομένα που σας αφορούν σε δομημένη, συνήθως χρησιμοποιούμενη και μηχανο-αναγνώσιμη μορφή και να ζητήσετε τη μετάδοσή τους σε άλλο υπεύθυνο επεξεργασίας.<\/p>
<p class="mb-4">Δικαίωμα αντίρρησης (Άρθρο 21 ΓΚΠΔ): Δικαίωμα να αντιταχθείτε οποιαδήποτε στιγμή στην επεξεργασία βάσει νόμιμου συμφέροντος, συμπεριλαμβανομένης της προφίλινγκ, εκτός αν υπάρχουν επιτακτικοί νόμιμοι λόγοι. Δικαίωμα να αντιταχθείτε στην επεξεργασία για σκοπούς άμεσου μάρκετινγκ.<\/p>
<p class="mb-4">Δικαίωμα να μην υπόκειται σε αυτοματοποιημένες αποφάσεις (Άρθρο 22 ΓΚΠΔ): Δικαίωμα να μην υπόκειται σε αποφάσεις αποκλειστικά βάσει αυτοματοποιημένης επεξεργασίας, συμπεριλαμβανομένης της προφίλινγκ, που παράγουν νομικά ή ανάλογα σημαντικά αποτελέσματα, εκτός εάν ισχύουν εξαιρέσεις (π.χ. αναγκαίο για σύναψη\/εκτέλεση σύμβασης, εξουσιοδοτημένο από νόμο, ή με τη ρητή συγκατάθεσή σας).<\/p>
<p class="mb-4">Δικαίωμα ανάκλησης συγκατάθεσης (Άρθρα 6(1)(a) & 7(3) ΓΚΠΔ): Όταν η επεξεργασία βασίζεται στη συγκατάθεσή σας, έχετε το δικαίωμα να την ανακαλέσετε οποιαδήποτε στιγμή, χωρίς να επηρεάζεται η νομιμότητα της επεξεργασίας που έγινε πριν από την ανάκληση.<\/p>
<p class="mb-4">Δικαίωμα υποβολής καταγγελίας σε εποπτική αρχή (Άρθρο 77 ΓΚΠΔ): Έχετε το δικαίωμα να υποβάλετε καταγγελία σε αρμόδια εποπτική αρχή αν θεωρείτε ότι η επεξεργασία των δεδομένων σας παραβιάζει τους κανόνες προστασίας δεδομένων. Η καταγγελία μπορεί να υποβληθεί στην αρμόδια αρχή του κράτους μέλους όπου έχετε τη συνήθη διαμονή σας, τον τόπο εργασίας σας ή όπου έχει συμβεί η φερόμενη παράβαση.<\/p>
<p class="mb-6">Για την άσκηση οποιουδήποτε από τα παραπάνω δικαιώματα, μπορείτε να επικοινωνήσετε μαζί μας (παρακάτω παρέχονται τα στοιχεία επικοινωνίας).<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">10. Δεδομένα παιδιών<\/h2>
<p class="mb-6">Οι υπηρεσίες και ο ιστότοπός μας απευθύνονται αποκλειστικά σε επιχειρήσεις. Δεν συλλέγουμε γνωστικά δεδομένα από άτομα κάτω των 18 ετών. Εάν μας γίνει γνωστό ότι έχουμε συλλέξει δεδομένα τέτοιων προσώπων, θα τα διαγράψουμε άμεσα.<\/p>

<h2 class="text-2xl font-semibold mb-4 text-[#2F9A8A]">11. Ενημερώσεις της Πολιτικής Απορρήτου<\/h2>
<p class="mb-6">Ενδέχεται να επικαιροποιούμε την παρούσα Πολιτική Απορρήτου περιοδικά για να αντικατοπτρίζει νομικές, τεχνικές ή επιχειρηματικές αλλαγές. Η «Ημερομηνία έναρξης ισχύος» στην αρχή θα δείχνει την τελευταία αναθεώρηση. Σας συνιστούμε να ελέγχετε τακτικά την Πολιτική για τυχόν ενημερώσεις.<\/p>`,
      info_collect_title: "Πληροφορίες που Συλλέγουμε",
      info_collect_intro:
        "Όταν χρησιμοποιείτε τη φόρμα επικοινωνίας, συλλέγουμε τις ακόλουθες πληροφορίες:",
      info_collect_items: [
        "Το ονοματεπώνυμό σας και στοιχεία επικοινωνίας (email, τηλέφωνο)",
        "Το θέμα και το περιεχόμενο του μηνύματός σας",
        "Τη συμφωνία σας με την Πολιτική Απορρήτου",
      ],
      use_title: "Πώς Χρησιμοποιούμε τις Πληροφορίες σας",
      use_intro: "Χρησιμοποιούμε τις πληροφορίες που παρέχετε για να:",
      use_items: [
        "Απαντήσουμε στα αιτήματά σας και να παρέχουμε υποστήριξη",
        "Σας στέλνουμε ενημερώσεις σχετικά με τις υπηρεσίες μας",
        "Βελτιώνουμε τον ιστότοπο και τις υπηρεσίες μας",
        "Συμμορφωνόμαστε με νομικές υποχρεώσεις",
      ],
      sharing_title: "Κοινοποίηση Πληροφοριών",
      sharing_body:
        "Δεν πουλάμε, δεν εμπορευόμαστε και δεν μεταβιβάζουμε τα προσωπικά σας δεδομένα σε τρίτους χωρίς τη συγκατάθεσή σας, εκτός όπως περιγράφεται στην παρούσα πολιτική ή όπως απαιτείται από τον νόμο.",
      security_title: "Ασφάλεια Δεδομένων",
      security_body:
        "Εφαρμόζουμε κατάλληλα μέτρα ασφαλείας για την προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, γνωστοποίηση ή καταστροφή.",
      rights_title: "Τα Δικαιώματά σας",
      rights_intro: "Διατηρείτε το δικαίωμα να:",
      rights_items: [
        "Έχετε πρόσβαση στα προσωπικά σας δεδομένα",
        "Διορθώσετε ανακριβείς πληροφορίες",
        "Ζητήσετε τη διαγραφή των δεδομένων σας",
        "Ανακαλέσετε τη συγκατάθεσή σας για επεξεργασία",
      ],
      contact_title: "Επικοινωνήστε μαζί μας",
      contact_body_prefix:
        "Αν έχετε ερωτήσεις σχετικά με την Πολιτική Απορρήτου ή τις πρακτικές μας, επικοινωνήστε στο",
      back_to_contact: "Επιστροφή στην Επικοινωνία",
    },
    terms: {
      title: "Όροι Χρήσης",
      intro:
        "Η σελίδα αυτή θα φιλοξενεί τους Όρους Χρήσης μας. Προς το παρόν, επικοινωνήστε μαζί μας για οποιαδήποτε απορία.",
      contact_prefix: "Για απορίες, στείλτε email στο",
    },
  },
};

export function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("locale");
  if (stored === "en" || stored === "el") return stored;
  return "en";
}
