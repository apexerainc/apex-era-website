export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$997",
    period: "/month",
    description:
      "Perfect for restoration companies just getting started with digital marketing.",
    features: [
      { text: "Local SEO setup" },
      { text: "Google Business Profile" },
      { text: "Monthly reporting" },
      { text: "Up to 5 target keywords" },
      { text: "Basic website audit" },
      { text: "Email support" },
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/month",
    description:
      "For growing companies ready to dominate their local market.",
    features: [
      { text: "Everything in Starter" },
      { text: "Full SEO management" },
      { text: "Custom website design" },
      { text: "Lead tracking dashboard" },
      { text: "Up to 25 target keywords" },
      { text: "Content marketing" },
      { text: "Priority support" },
      { text: "AI tools access" },
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$3,997",
    period: "/month",
    description:
      "For established companies wanting full-service marketing management.",
    features: [
      { text: "Everything in Growth" },
      { text: "Remote estimating" },
      { text: "Custom automations" },
      { text: "Dedicated account manager" },
      { text: "Unlimited keywords" },
      { text: "Claims support" },
      { text: "Multi-location SEO" },
      { text: "Quarterly strategy sessions" },
      { text: "Custom AI tool development" },
    ],
    highlighted: false,
  },
];
