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
    quote: string;
    quote_author: string;
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
  footer: {
    company_title: string;
    solutions_title: string;
    legals_title: string;
    copyright: string;
  };
};

export const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  en: {
    meta: {
      title: "Factora",
      description:
        "Your Trusted AI Financial Assistant for Smarter B2B Payments",
    },
    nav: {
      solutions: "Solutions",
      solutions_core: "Core",
      solutions_smes: "For SMEs",
      solutions_banking: "For Financial Institutions",
      about: "About",
      careers: "Careers",
      contact: "Contact",
      book_demo: "Book a demo",
    },
    landing: {
      hero_title: "Your Trusted AI Financial Copilot for Smarter B2B Payments",
      hero_subtitle:
        "<strong>Prevent</strong> risky buyers. <strong>Get paid</strong> faster. Increase <strong>conversion rates</strong> with safer credit.",
      hero_cta: "Book a demo",
      trusted_by: "SUPPORTED BY",
      integrations_title: "Connect Factora to the Tools You Use Every Day",
      integrations_subtitle:
        "Plug-and-play integrations with your ERP, accounting, banking, and payment systems for real-time sync—no manual uploads, no complex setup.",
      smes_chip: "For SMEs",
      smes_title: "We help SMEs offer safer credit terms and get paid earlier",
      smes_subtitle:
        "Transform your cash flow with instant financing, smart credit decisions, and seamless integrations.",
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
        "Built into your existing tools. Embedded directly in your ERP and accounting software for effortless workflows.",
      bankers_chip: "For Financial Institutions",
      bankers_title: "Launch SME Financing, Fast",
      bankers_subtitle:
        "White-label-ready, fully automated, digital invoice-financing platform with direct integration into your systems.",
      bankers_problem_title: "Problem we solve:",
      bankers_problem_text:
        "Low‑ticket SME deals are unprofitable on legacy stacks.",
      bankers_point_1_title:
        "Finance qualified transactions, not blind credit risk",
      bankers_point_1_desc:
        "White-label-ready, fully automated, digital invoice-financing platform with direct integration into your systems.",
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
      form_role_placeholder: "CEO / CFO / Ops manager",
      form_cta: "Book a demo",
      form_disclaimer:
        "We'll only use your email for product updates. We won't share your data.",
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
      why_started_title: "Why we started Factora",
      why_started_para1:
        "Small and medium-sized enterprises (SMEs) are the backbone of every economy and a fundamental pillar of global GDP, yet cash-flow fragility is their constant enemy. Across the world, the same pattern repeats: teams doing everything right, building products, winning customers, running tight operations, and yet, they get knocked down by a domino effect of late customer payments and write-offs. Denied by viable bank financing and excluded from specialty working-capital funds, many businesses lose momentum, customers, and in many cases are forced to shut their doors or even file for bankruptcy.",
      why_started_para2:
        "Factora was built to help businesses do what they love and grow as they deserve. Our platform brings together automated underwriting, safer data-driven credit terms, dynamic invoice discounting, and one-click financing to accelerate time to cash. Smart reminders and auto-reconciliation cut DSO, while an AI copilot surfaces early warnings and practical cash flow management advice. Our mission is to prevent bad buyers from damaging the P&L and to democratize access to bank working-capital finance.",
      quote:
        "Every SME deserves respect for its contribution to society and the economy, and a more democratic financial system should support it. Our vision is to bridge the liquidity gap European SMEs face—caused by late payments and defaults—and to offer a tailored, trusted AI financial assistant to help them navigate this strenuous environment. We believe in the strength and importance of every business and we stand by their side with solutions that foster resilience and growth.",
      quote_author: "— Co-founder & CEO",
      values_title: "Our values — how we build and serve",
      values_subtitle:
        "Values that guide every product decision and partnership.",
      fair_access_title: "Fair Access",
      fair_access_desc:
        "Every viable SME deserves bank-backed working capital. We use transparent, data-driven underwriting based on reality—not bureaucracy or outdated methods—so every business is assessed fairly.",
      trust_title: "Trust by Design",
      trust_desc:
        "Security, privacy, and compliance are priorities. Your business financial data are handled with rigorous protection and responsibility. Credit decisions are explainable and auditable, so owners, accountants, and banking partners can rely on them.",
      simplicity_title: "Simplicity",
      simplicity_desc:
        "Less manual processes, bureaucracy and stakeholders for working capital management and financing. Our solution integrates seamlessly with your existing tools, ERP and accounting software, offering our services with no friction.",
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
      how_to_apply_subtitle: "Simple email application. No forms, no ATS.",
      apply_step1: "Send an email to:",
      apply_step2: "Subject:",
      apply_step3:
        "Attach: CV/resume as PDF (plus portfolio/GitHub/LinkedIn if relevant)",
      apply_step4: "Include in the email body:",
      apply_step4_1: "3–5 sentences on why Factora and this role",
      apply_step4_2: "Your location/time zone and earliest start date",
      apply_step4_3: "Any links (portfolio, GitHub, LinkedIn, case studies)",
      email_cv_button: "Email Your CV",
    },
    contact: {
      meta_title: "Contact Factora — Get in Touch with Our Team",
      meta_description:
        "Have questions about our B2B payment solutions? Contact our team for personalized guidance and support. We're here to help your business grow.",
      hero_title: "Let's Chat! We're Here to Help",
      hero_subtitle:
        "Have questions about our solutions? Want to see how we can help your business? We'd love to hear from you and help you get started.",
      connect_title: "Connect With Us",
      email_label: "info@factora.eu",
      email_desc: "Prefer email? We're just a message away!",
      form_email_label: "Email",
      form_title: "Send Us a Message",
      form_subtitle:
        "Drop us a line below and we'll get back to you as soon as possible. No question is too small!",
      name_label: "Your Name*",
      name_placeholder: "Enter your name",
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
    },
  },
  el: {
    meta: {
      title: "Factora",
      description:
        "Ο αξιόπιστος AI οικονομικός βοηθός για πιο έξυπνες B2B πληρωμές",
    },
    nav: {
      solutions: "Λύσεις",
      solutions_core: "Πυρήνας",
      solutions_smes: "Για ΜΜΕ",
      solutions_banking: "Για Χρηματοπιστωτικούς Φορείς",
      about: "Σχετικά",
      careers: "Καριέρα",
      contact: "Επικοινωνία",
      book_demo: "Κλείστε demo",
    },
    landing: {
      hero_title:
        "Ο έμπιστος AI Οικονομικός Βοηθός σας για έξυπνες B2B πληρωμές για την επιχείρησή σας",
      hero_subtitle:
        "<strong>Προστατευτείτε</strong> από κακοπληρωτές. <strong>Εισπράξτε</strong> τα ανοιχτά τιμολόγια πιο γρήγορα. Αυξήστε τις <strong>εμπορικές συμφωνίες</strong> σας με ασφαλέστερη πίστωση.",
      hero_cta: "Κλείστε demo",
      trusted_by: "ΜΕ ΤΗΝ ΥΠΟΣΤΗΡΙΞΗ ΤΩΝ",
      integrations_title:
        "Συνδέστε το Factora με τα εργαλεία που χρησιμοποιείτε καθημερινά",
      integrations_subtitle:
        "Έτοιμες ενσωματώσεις με ERP, λογιστική, τραπεζικά και συστήματα πληρωμών για συγχρονισμό σε πραγματικό χρόνο — χωρίς χειροκίνητες εισαγωγές, χωρίς πολύπλοκη ρύθμιση.",
      smes_chip: "Για Μικρομεσαίες Επιχειρήσεις",
      smes_title:
        "Βοηθάμε τις ΜΜΕ να προσφέρουν ασφαλέστερους όρους πίστωσης και να εισπράττουν νωρίτερα",
      smes_subtitle:
        "Μεταμορφώστε το κεφάλαιο κίνησής σας με άμεση χρηματοδότηση, έξυπνες πιστοληπτικές αποφάσεις και απρόσκοπτες ενσωματώσεις.",
      smes_problem_title: "Το πρόβλημα που λύνουμε:",
      smes_problem_text:
        "Οι καθυστερημένες B2B πληρωμές πνίγουν την ανάπτυξη και καίνε χρόνο λειτουργιών.",
      smes_point_1_title: "Εισπράξτε πιο γρήγορα",
      smes_point_1_desc:
        "Μειώστε τον χρόνο είσπραξης των ανοικτών τιμολογίων με ελκυστικές εκπτώσεις έγκαιρης πληρωμής προς τους πελάτες σας. Πρόσβαση σε άμεση χρηματοδότηση κεφαλαίου κίνησης με προεξόφληση τιμολογίων (factoring) «με ένα κλικ» μέσω των συνεργατών μας.",
      smes_point_2_title: "Αυτόματη πιστοληπτική αξιολόγηση αγοραστών",
      smes_point_2_desc:
        "Αναγνωρίστε τους αξιόπιστους πελάτες, επεκτείνετε τους όρους πίστωσης με ασφάλεια, αυξήστε τις πωλήσεις.",
      smes_point_3_title: "Εύκολη διασύνδεση",
      smes_point_3_desc:
        "Προσαρμοσμένο στα υπάρχοντα εργαλεία σας. Ενσωμάτωση απευθείας στο ERP/λογιστικό λογισμικό της επιχείρησής σας για αυτοματοποιημένες και απλές ροές εργασίας.",
      bankers_chip: "Για Χρηματοπιστωτικά Ιδρύματα",
      bankers_title: "Λανσάρετε χρηματοδότηση ΜΜΕ, γρήγορα",
      bankers_subtitle:
        "White-label, πλήρως ψηφιακή και αυτοματοποιημένη πλατφόρμα προεξόφλησης τιμολογίων με διαφανή/ελέγξιμα μοντέλα, δικλείδες επιπέδου τράπεζας και άμεση διασύνδεση με τα συστήματά σας.",
      bankers_problem_title: "Το πρόβλημα που λύνουμε:",
      bankers_problem_text:
        "Οι μικρές συναλλαγές ΜΜΕ είναι ασύμφορες σε παλαιά συστήματα.",
      bankers_point_1_title:
        "Χρηματοδοτήστε ποιοτικές συναλλαγές, χωρίς τυφλές πιστώσεις",
      bankers_point_1_desc:
        "White-label, πλήρως ψηφιακή και αυτοματοποιημένη πλατφόρμα προεξόφλησης τιμολογίων με διαφανή/ελέγξιμα μοντέλα, δικλείδες επιπέδου τράπεζας και άμεση διασύνδεση με τα συστήματά σας.",
      bankers_point_2_title: "Δημιουργήστε leads",
      bankers_point_2_desc:
        "Αποκτήστε πρόσβαση σε μία βάση αξιολογημένων και υγιών μικρομεσαίων επιχειρήσεων που αναζητούν χρηματοδότηση.",
      bankers_point_3_title: "Αυτόματη συλλογή όλων των απαραίτητων εγγράφων",
      bankers_point_3_desc:
        "Αυτόματη συγκέντρωση οικονομικών στοιχείων, ενδείξεων κινδύνου, πιστοληπτικής ικανότητας και τεκμηρίωσης KYC.",
      early_title: "Γίνετε από τους πρώτους που θα χρησιμοποιήσουν το Factora",
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
      form_role_placeholder: "CEO / CFO / Υπεύθυνος λειτουργιών",
      form_cta: "Κλείστε demo",
      form_disclaimer:
        "Θα χρησιμοποιήσουμε το email μόνο για ενημερώσεις προϊόντος. Δεν θα μοιραστούμε τα δεδομένα σας.",
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
        "Δυναμικές εκπτώσεις ανοικτών τιμολογίων για έγκαιρη πληρωμή (dynamic invoice discounting) από τους πελάτες σας και άμεσης προεξόφλησης τιμολογίων (factoring) με ένα κλικ.",
      get_paid_benefits: [
        "Δυναμικές εκπτώσεις τιμολογίων",
        "Προεξόφληση τιμολογίων με ένα κλικ",
      ],
      copilot_name: "AI Copilot",
      copilot_desc:
        "Ο έμπιστος καθημερινός βοηθός σας για πιο έξυπνες συναλλαγές, συμφωνίες και διαχείρισης του κεφαλαίου κίνησης σας",
      copilot_benefits: [
        "Έξυπνες συναλλαγές",
        "Καλύτερες συμφωνίες πελατών",
        "Διαχείριση κεφαλαίου κίνησης",
      ],
      collections_name: "Έξυπνες υπενθυμίσεις & εισπράξεις",
      collections_desc:
        "Ευγενικές υπενθυμίσεις (dunning) που μειώνουν την καθυστέρηση εκκρεμών πληρωμών (DSO), με αυτόματη αντιστοίχιση πληρωμών/τιμολογίων.",
      collections_benefits: [
        "Μείωση DSO με ευγενικές υπενθυμίσεις",
        "Αυτόματη αντιστοίχιση πληρωμών/τιμολογίων",
      ],
    },
    about: {
      meta_title:
        "Σχετικά με το Factora — Η αποστολή, οι αξίες και η πλατφόρμα χρηματοδότησης ΜΜΕ",
      meta_description:
        "Μάθετε πώς το Factora δημιουργεί έτοιμη ψηφιακή υποδομή για factoring τιμολογίων, χρηματοδότηση και ασφάλιση — ώστε τράπεζες και marketplaces να μπορούν να χρηματοδοτούν αξιόπιστα μικρές επιχειρήσεις.",
      why_started_title: "Γιατί ξεκινήσαμε την Factora",
      why_started_para1:
        "Οι μικρομεσαίες επιχειρήσεις στην Ευρώπη αποτελούν θεμέλιο λίθο κάθε οικονομίας και βασικό πυλώνα του παγκόσμιου ΑΕΠ. Ωστόσο, η έντονη μεταβλητότητα του βραχυπρόθεσμου κεφαλαίου κίνησης αποτελεί τον καταλυτικό παράγοντα που απειλεί την επιβίωση και την ανάπτυξή τους. Σε ολόκληρη την υφήλιο επαναλαμβάνεται το ίδιο μοτίβο: ικανές εταιρείες που εκτελούν σωστά το επιχειρηματικό τους μοντέλο- δημιουργώντας αξία για τους πελάτες, την εταιρεία και την οικονομία, καταρρέουν. Βασική αιτία αποτελεί το ντόμινο καθυστερημένων πληρωμών, των αυξανόμενων αθετήσεων και της περιορισμένης πρόσβασης σε κατάλληλη χρηματοδότηση από το παραδοσιακό τραπεζικό σύστημα. Με αποτέλεσμα ένας σημαντικός αριθμός παραγωγικών και υγιών επιχειρήσεων οδηγείται σε παύση εργασιών ή ακόμη και πτώχευση, λόγω της αδυναμίας κάλυψης των υποχρεώσεων, της ζήτησης από την αγορά και την περιορισμένη δυναμικής για ανάπτυξη.",
      why_started_para2:
        "Η Factora δημιουργήθηκε για να ανατρέψει αυτό το καθεστώς και να βοηθήσει τις επιχειρήσεις να επιβιώσουν και να αναπτυχθούν με υγιή τρόπο. Η πλατφόρμα μας συνδυάζει την αυτοματοποιημένη αξιολόγηση της πιστοληπτικής ικανότητας των πελατών με απώτερο σκοπό να προσφέρονται ασφαλέστεροι όροι πίστωσης, δυναμικές εκπτώσεις τιμολογίων έγκαιρης πληρωμής που μειώνουν τον χρόνο είσπραξης και την άμεση χρηματοδότηση ανοικτών τιμολογίων με ένα κλικ όταν εμφανίζονται κενά ρευστότητας. Ταυτόχρονα οι έξυπνες εισπράξεις με ευγενικές υπενθυμίσεις και αυτόματη αντιστοίχιση πληρωμών/τιμολογίων απλοποιούν την πολυπλοκότητα και τον χρόνο που απαιτείται, ενώ ο AI Οικονομικός βοηθός έχει σχεδιαστεί για να παρέχει έγκαιρες προειδοποιήσεις και πρακτικές συστάσεις για τη διαχείριση και τη βελτιστοποίηση του κεφαλαίου κίνησης. Αποστολή μας είναι να προλαμβάνουμε τις καθυστερημένες πληρωμές που πυροδοτούν έλλειμμα ρευστότητας, τους κακοπληρωτές που διαβρώνουν την κερδοφορία, και να εκδημοκρατίσουμε την πρόσβαση στη χρηματοδότηση μέσω του τραπεζικού συστήματος.",
      quote:
        "Κάθε μικρομεσαία επιχείρηση αξίζει δέοντα σεβασμό για τη συμβολή της στην κοινωνία και την οικονομία, και θα πρέπει να υποστηρίζεται από ένα πιο δίκαιο χρηματοπιστωτικό σύστημα που τη στηρίζει έμπρακτα. Το όραμά μας είναι να γεφυρώσουμε την έλλειψη ρευστότητας που βιώνουν αυτές οι επιχειρήσεις, λόγω των καθυστερημένων πληρωμών και αθετήσεων, προσφέροντας έναν εξατομικευμένο, έμπιστο AI Οικονομικό Σύμβουλο που βοηθά τις επιχειρήσεις να πλοηγηθούν με ασφάλεια σε αυτό το απαιτητικό περιβάλλον. Πιστεύουμε στη δύναμη κάθε επιχείρησης και στεκόμαστε δίπλα στους ανθρώπους της, ώστε να επικεντρώνονται σε αυτό που πραγματικά έχει σημασία για την επιχείρηση τους: να δημιουργούν αξία και να αναπτύσσονται.",
      quote_author: "— Συνιδρυτής & CEO",
      values_title: "Οι αξίες μας — πώς χτίζουμε και εξυπηρετούμε",
      values_subtitle:
        "Αξίες που καθοδηγούν κάθε απόφαση προϊόντος και συνεργασία.",
      fair_access_title: "Δίκαιη πρόσβαση",
      fair_access_desc:
        "Κάθε βιώσιμη μικρομεσαία επιχείρηση αξίζει πρόσβαση σε χρηματοδότηση. Χρησιμοποιούμε διαφανή αξιολόγηση με βάση την επιχειρησιακή πραγματικότητα, και όχι στη γραφειοκρατία και σε ξεπερασμένες μεθόδους αξιολόγησης, ώστε κάθε επιχείρηση να αντιμετωπίζεται δίκαια.",
      trust_title: "Θεμελιώδης Αξιοπιστία",
      trust_desc:
        "Η ασφάλεια, η ιδιωτικότητα και η συμμόρφωση στα διεθνή πρότυπα αποτελούν ύψιστες προτεραιότητες. Τα οικονομικά δεδομένα κάθε επιχείρησής αντιμετωπίζονται με αυστηρή προστασία και υπευθυνότητα. Οι αποφάσεις πίστωσης συνοδεύονται από αιτιολόγηση και ελεγξιμότητα, ώστε οι ιδιοκτήτες, οι λογιστές και οι συνεργαζόμενες τράπεζες να μπορούν να βασίζονται σε αυτές.",
      simplicity_title: "Απλότητα",
      simplicity_desc:
        "Στόχο αποτελεί η μείωση των χειροκίνητων ενεργειών, της γραφειοκρατίας που απαιτείται και των εμπλεκόμενων μερών για ευκολη πρόσωαση σε χρηματοδότηση και στη βελτιστοποίηση της διαχείρησης του κεφαλαίου κίνησης . Η λύση μας ενσωματώνεται στα υπάρχοντα εργαλεία όπως το ERP και τα λογιστισκά λογισμικά, για εύκολη παροχή των υπηρεσιών μας",
    },
    careers: {
      meta_title: "Καριέρα στο Factora — Χτίστε το Μέλλον της B2B Πίστωσης",
      meta_description:
        "Ενταχθείτε στο Factora για γρήγορη παράδοση, ιδιοκτησία αποτελεσμάτων και βοήθεια σε εκατομμύρια ΜΜΕ να αποκτήσουν δίκαια πίστωση. Remote‑friendly με υψηλή ιδιοκτησία και πραγματικό αντίκτυπο.",
      hero_title: "Διαμορφώστε το Μέλλον των B2B Πληρωμών & προϊόντων Πίστωσης",
      hero_subtitle: "Η Factora αναζητά Οραματιστές. Πρακτικούς. Δημιουργούς.",
      send_cv_button: "Στείλε το βιογραφικό σου",
      join_team_title: "Γίνε μέλος της ομάδας μας",
      join_team_desc:
        "Είμαστε πάντα ανοιχτοί να συνεργαστούμε και να ακούσουμε παθιασμένους ανθώπους για την καινοτομία, σκληρά εργαζόμενους και ταλαντούχους. Αν σου αρέσει η δημιουργική σκέψη, η εργασία σε ένα ταχέως εξελισσόμενο περιβάλλον, η επίτευξη δύσκολων στόχων και η δημιουργία λύσεων τεχνολογίας για την αναδιαμόρφωση των B2B πληρωμών και προϊότνων πίστωσης, θα χαρούμε να ακούσουμε από σένα.",
      ml_engineer_title: "Machine Learning Engineer",
      ml_engineer_desc:
        "Σχεδίασε μοντέλα αιχμής που τροφοδοτούν πιο έξυπνες αποφάσεις πίστωσης.",
      data_engineer_title: "Data Engineer",
      data_engineer_desc:
        "Δημιούργησε και βελτιστοποίησε ροές δεδομένων για να παροχή πληροφοριών κινδύνου σε πραγματικό χρόνο.",
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
      how_to_apply_subtitle: "Απλή αίτηση email. Χωρίς φόρμες, χωρίς ATS.",
      apply_step1: "Στείλτε email στο:",
      apply_step2: "Θέμα:",
      apply_step3:
        "Επισυνάψτε: CV/βιογραφικό ως PDF (συν portfolio/GitHub/LinkedIn αν είναι σχετικό)",
      apply_step4: "Συμπεριλάβετε στο σώμα του email:",
      apply_step4_1: "3–5 προτάσεις γιατί το Factora και αυτός ο ρόλος",
      apply_step4_2:
        "Την τοποθεσία/ζώνη ώρας σας και την πιο πρόσφατη ημερομηνία έναρξης",
      apply_step4_3:
        "Οποιεσδήποτε συνδέσμους (portfolio, GitHub, LinkedIn, μελέτες περιπτώσεων)",
      email_cv_button: "Email το CV σας",
    },
    contact: {
      meta_title: "Επικοινωνία με το Factora — Επικοινωνήστε με την Ομάδα μας",
      meta_description:
        "Έχετε ερωτήσεις για τις λύσεις B2B πληρωμών μας; Επικοινωνήστε με την ομάδα μας για εξατομικευμένη καθοδήγηση και υποστήριξη. Είμαστε εδώ για να βοηθήσουμε την επιχείρησή σας να αναπτυχθεί.",
      hero_title: "Ας Συζητήσουμε! Είμαστε Εδώ για να Βοηθήσουμε",
      hero_subtitle:
        "Έχετε ερωτήσεις για τις λύσεις μας; Θέλετε να δείτε πώς μπορούμε να βοηθήσουμε την επιχείρησή σας; Θα χαρούμε να ακούσουμε από εσάς και να σας βοηθήσουμε να ξεκινήσετε.",
      connect_title: "Συνδεθείτε μαζί μας",
      email_label: "info@factora.eu",
      email_desc: "Προτιμάτε email; Είμαστε μόνο ένα μήνυμα μακριά!",
      form_email_label: "Email",
      form_title: "Στείλτε μας ένα Μήνυμα",
      form_subtitle:
        "Γράψτε μας παρακάτω και θα σας απαντήσουμε το συντομότερο δυνατό. Κανένα ερώτημα δεν είναι μικρό!",
      name_label: "Το Όνομά σας*",
      name_placeholder: "Εισάγετε το όνομά σας",
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
      validation_name_required: "Το όνομα είναι υποχρεωτικό",
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
    },
  },
};

export function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("locale");
  if (stored === "en" || stored === "el") return stored;
  const browser = navigator.language?.toLowerCase() || "en";
  return browser.startsWith("el") ? "el" : "en";
}
