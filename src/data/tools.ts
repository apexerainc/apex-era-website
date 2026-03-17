import type { Tool } from "@/types";

export const tools: Tool[] = [
  {
    id: "chatgpp",
    name: "ChatGPP",
    tagline: "The IICRC-trained AI assistant",
    description:
      "AI chatbot trained on IICRC S500, S520, and S700 standards for water, mold, and fire restoration guidance.",
    icon: "MessageSquare",
    href: "/tools/chatgpp",
    comingSoon: false,
  },
  {
    id: "xcavate",
    name: "Xcavate",
    tagline: "Xactimate line item search engine",
    description:
      "Search and find any Xactimate line item instantly. No more scrolling through categories.",
    icon: "Search",
    href: "/tools/xcavate",
    comingSoon: false,
  },
  {
    id: "echoscope",
    name: "EchoScope",
    tagline: "Scope of work comparison tool",
    description:
      "Compare your scope of work against similar jobs to catch missed line items and ensure complete estimates.",
    icon: "GitCompare",
    href: "/tools/echoscope",
    comingSoon: false,
  },
  {
    id: "restoration-guru",
    name: "Restoration Guru",
    tagline: "AI strategy advisor for restorers",
    description:
      "Get personalized business growth strategies powered by AI, tailored to the restoration industry.",
    icon: "Brain",
    href: "/tools/restoration-guru",
    comingSoon: false,
  },
  {
    id: "amplify",
    name: "Amplify",
    tagline: "Social media content generator",
    description:
      "Generate engaging social media content tailored for restoration companies in seconds.",
    icon: "Megaphone",
    href: "/tools/amplify",
    comingSoon: true,
  },
  {
    id: "vectorpulse",
    name: "VectorPulse",
    tagline: "Market intelligence dashboard",
    description:
      "Track your local market performance, competitor activity, and growth opportunities in real-time.",
    icon: "BarChart3",
    href: "/tools/vectorpulse",
    comingSoon: true,
  },
];
