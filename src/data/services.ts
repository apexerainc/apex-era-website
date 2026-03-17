import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "seo-lead-generation",
    title: "SEO & Lead Generation",
    shortTitle: "SEO & Leads",
    description:
      "Dominate local search and generate qualified leads through proven SEO strategies built specifically for restoration companies.",
    longDescription:
      "Our SEO and lead generation services are designed from the ground up for restoration companies. We combine deep industry knowledge with cutting-edge search optimization techniques to ensure your business appears at the top of local search results when homeowners and insurance adjusters need you most. From Google Business Profile optimization to targeted content marketing and paid advertising, we build a comprehensive lead generation machine that delivers measurable results month after month.",
    icon: "Search",
    features: [
      {
        title: "Local SEO Domination",
        description:
          "Rank in the top 3 of Google Maps and local search results for high-intent restoration keywords in your service area.",
      },
      {
        title: "Google Business Profile Optimization",
        description:
          "Fully optimized GBP listings with review management, post scheduling, and citation building to maximize local visibility.",
      },
      {
        title: "Content Marketing",
        description:
          "Industry-specific blog content, service pages, and landing pages that establish authority and drive organic traffic.",
      },
      {
        title: "Paid Advertising Management",
        description:
          "Google Ads and Local Services Ads managed by restoration industry experts to maximize ROI on every dollar spent.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description:
          "We perform a comprehensive audit of your current online presence, competitor landscape, and local market opportunity.",
      },
      {
        step: 2,
        title: "Strategy",
        description:
          "Based on audit findings, we build a custom SEO and lead generation strategy tailored to your market and goals.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Our team executes the strategy across all channels — on-page SEO, GBP, content, citations, and paid campaigns.",
      },
      {
        step: 4,
        title: "Optimization",
        description:
          "Continuous monitoring, A/B testing, and refinement to improve rankings, lower cost per lead, and scale results.",
      },
    ],
    stats: [
      { label: "Clients Served", value: "100+" },
      { label: "Avg Traffic Increase", value: "300%" },
      { label: "Google Rankings", value: "Top 3" },
    ],
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    description:
      "Conversion-optimized websites that turn visitors into customers, built by people who understand the restoration industry.",
    longDescription:
      "Your website is your digital storefront and often the first impression a potential customer has of your business. Our restoration-focused web design team builds fast, mobile-first websites that are engineered to convert visitors into leads. Every element — from the hero section to the contact form — is designed with conversion psychology and industry best practices in mind. We do not use templates. Every site is custom-built to reflect your brand and outperform your competition.",
    icon: "Layout",
    features: [
      {
        title: "Mobile-First Design",
        description:
          "Every site is designed mobile-first, ensuring a flawless experience on the devices your customers actually use.",
      },
      {
        title: "Speed Optimized",
        description:
          "Lightning-fast load times with optimized images, clean code, and modern hosting for excellent Core Web Vitals scores.",
      },
      {
        title: "Lead Capture Forms",
        description:
          "Strategically placed contact forms, click-to-call buttons, and chat widgets that make it easy for customers to reach you.",
      },
      {
        title: "Industry-Specific Content",
        description:
          "Professional copywriting that speaks to homeowners, property managers, and insurance adjusters in language they understand.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "We learn about your business, brand, target market, and goals to create a detailed project brief.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Custom mockups and wireframes are created for your review, with revisions until the design is exactly right.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Your approved design is built using modern web technologies with a focus on speed, SEO, and accessibility.",
      },
      {
        step: 4,
        title: "Launch",
        description:
          "After thorough testing, your new site goes live with analytics, tracking, and ongoing support included.",
      },
    ],
    stats: [
      { label: "Sites Launched", value: "75+" },
      { label: "Avg Load Time", value: "< 2s" },
      { label: "Conversion Rate Lift", value: "150%" },
    ],
  },
  {
    slug: "remote-estimates",
    title: "Remote Estimating Services",
    shortTitle: "Remote Estimates",
    description:
      "Professional Xactimate and Symbility estimates handled remotely by experienced restoration estimators with 20+ years of experience.",
    longDescription:
      "Stop losing money on underwritten estimates or spending hours building them yourself. Our team of certified estimators with over 20 years of combined restoration experience produces insurance-ready Xactimate and Symbility estimates remotely. We understand carrier guidelines, line item pricing, and the nuances that make the difference between an approved claim and a supplement battle. Submit your scope of work and get a professional estimate back in 24 to 48 hours.",
    icon: "Calculator",
    features: [
      {
        title: "Xactimate Certified",
        description:
          "Our estimators are Xactimate certified with deep expertise in water, fire, mold, and storm damage estimating.",
      },
      {
        title: "Symbility Pro",
        description:
          "Full Symbility platform support for carriers and TPAs that require Symbility-formatted estimates.",
      },
      {
        title: "24-48hr Turnaround",
        description:
          "Fast turnaround times so you can keep your projects moving without delays caused by estimating backlogs.",
      },
      {
        title: "Insurance-Ready",
        description:
          "Estimates are formatted and documented to meet carrier standards, reducing supplement requests and approval times.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Submit Scope",
        description:
          "Send us your scope of work, photos, measurements, and any carrier-specific requirements.",
      },
      {
        step: 2,
        title: "Review",
        description:
          "Our team reviews the documentation, asks clarifying questions, and identifies any missing information.",
      },
      {
        step: 3,
        title: "Estimate",
        description:
          "A certified estimator builds your estimate in Xactimate or Symbility with proper line items and documentation.",
      },
      {
        step: 4,
        title: "Deliver",
        description:
          "The completed estimate is delivered for your review, with revisions included to ensure accuracy.",
      },
    ],
    stats: [
      { label: "Estimates Completed", value: "5,000+" },
      { label: "Avg Turnaround", value: "36hrs" },
      { label: "Approval Rate", value: "98%" },
    ],
  },
  {
    slug: "automations",
    title: "Custom Automations",
    shortTitle: "Automations",
    description:
      "Custom AI-powered automations that streamline your operations, from lead follow-up to job scheduling and reporting.",
    longDescription:
      "Restoration companies lose thousands of dollars every month to slow lead response times, manual data entry, and disjointed workflows. Our custom automation solutions integrate with your existing tools — CRMs, job management platforms, accounting software — to eliminate manual work and ensure nothing falls through the cracks. From instant lead auto-response to automated job scheduling and report generation, we build the systems that let you scale without adding headcount.",
    icon: "Zap",
    features: [
      {
        title: "Lead Auto-Response",
        description:
          "Instantly respond to new leads via text, email, or voicemail drop within seconds of form submission or phone call.",
      },
      {
        title: "Job Scheduling",
        description:
          "Automated scheduling workflows that assign crews, send notifications, and update job boards in real-time.",
      },
      {
        title: "Report Generation",
        description:
          "Automated daily, weekly, and monthly reports pulled from your job management and accounting platforms.",
      },
      {
        title: "CRM Integration",
        description:
          "Seamless integration with popular restoration CRMs including DASH, PSA, Xcelerate, and RestoreManager.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assess",
        description:
          "We map your current workflows, identify bottlenecks, and quantify the time and revenue lost to manual processes.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "We design custom automation workflows with clear triggers, actions, and integrations tailored to your tech stack.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Our team builds and tests each automation thoroughly, ensuring reliability and proper error handling.",
      },
      {
        step: 4,
        title: "Deploy",
        description:
          "Automations go live with monitoring, documentation, and ongoing support to ensure everything runs smoothly.",
      },
    ],
    stats: [
      { label: "Automations Built", value: "200+" },
      { label: "Hours Saved Weekly", value: "20+" },
      { label: "Response Time", value: "< 60s" },
    ],
  },
];
