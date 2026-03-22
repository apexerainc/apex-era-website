export const COMPANY = {
  name: "Apex Era Inc",
  legalName: "Apex Era Inc",
  tagline: "Built by Restorers, for Restorers",
  description:
    "National digital marketing agency for damage restoration companies. SEO, website design, remote Xactimate estimating, and AI-powered automation tools built by restorers, for restorers.",
  founded: 2023,
  phone: "(609) 931-5050",
  phoneRaw: "+16099315050",
  email: "matt@apexerainc.com",
  address: {
    street: "1425 Walnut St #200",
    city: "Philadelphia",
    state: "PA",
    zip: "19102",
    full: "1425 Walnut St #200, Philadelphia, PA 19102",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/apex-era",
    facebook: "https://www.facebook.com/apexerainc",
    instagram: "https://www.instagram.com/apexerasolutions",
    tiktok: "https://www.tiktok.com/@apexerainc",
  },
  url: "https://apexerainc.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SEO & Lead Generation", href: "/services/seo-lead-generation" },
      { label: "Website Design", href: "/services/website-design" },
      { label: "Remote Estimates", href: "/services/remote-estimates" },
      { label: "Custom Automations", href: "/services/automations" },
    ],
  },
  { label: "Tools", href: "/tools" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
