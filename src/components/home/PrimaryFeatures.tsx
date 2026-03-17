"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Layout, Calculator, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SEOHeatmap } from "@/components/home/SEOHeatmap";
import { LiveDashboard } from "@/components/home/LiveDashboard";

const tabs = [
  {
    title: "SEO & Lead Generation",
    description:
      "Dominate local search and generate qualified leads through proven SEO strategies built specifically for restoration companies. We optimize your Google Business Profile, build citations, create targeted content, and manage paid campaigns to keep your pipeline full.",
    icon: Search,
    component: "heatmap" as const,
  },
  {
    title: "Website Design",
    description:
      "Conversion-optimized websites that turn visitors into customers. Every site is custom-built mobile-first with lightning-fast load times, strategic lead capture forms, and industry-specific copywriting that speaks to homeowners and adjusters.",
    icon: Layout,
    component: "card" as const,
    features: [
      "Mobile-first, responsive design",
      "Core Web Vitals optimized",
      "Strategic lead capture forms",
      "Professional industry copywriting",
    ],
  },
  {
    title: "Remote Estimates",
    description:
      "Professional Xactimate and Symbility estimates handled remotely by certified estimators with 20+ years of experience. Submit your scope and get insurance-ready estimates back in 24-48 hours.",
    icon: Calculator,
    component: "card" as const,
    features: [
      "Xactimate & Symbility certified",
      "24-48 hour turnaround",
      "Insurance-ready formatting",
      "98% carrier approval rate",
    ],
  },
  {
    title: "Custom Automations",
    description:
      "AI-powered automations that integrate with your CRM, job management, and accounting platforms. From instant lead auto-response to automated reporting, we build the systems that let you scale without adding headcount.",
    icon: Zap,
    component: "card" as const,
    features: [
      "Instant lead auto-response",
      "Automated job scheduling",
      "Custom report generation",
      "CRM & platform integrations",
    ],
  },
];

function FeatureCard({
  tab,
}: {
  tab: (typeof tabs)[number];
}) {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl bg-white/10 p-8 backdrop-blur">
      <tab.icon className="mb-4 h-8 w-8 text-blue-300" />
      <h3 className="text-xl font-semibold text-white">{tab.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-blue-100">
        {tab.description}
      </p>
      {"features" in tab && tab.features && (
        <ul className="mt-6 space-y-2">
          {tab.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-blue-200"
            >
              <svg
                className="h-4 w-4 flex-shrink-0 text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function PrimaryFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 py-20 sm:py-32"
    >
      <Container>
        <div className="lg:flex lg:items-start lg:gap-16">
          {/* Left column */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Everything you need to grow your business.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-blue-100">
              From SEO to web design to AI-powered automations, we provide
              everything restoration companies need to dominate their market.
            </p>

            {/* Tab buttons */}
            <div className="mt-12 flex flex-col gap-1">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.title}
                    onClick={() => setActiveTab(index)}
                    className={`group relative flex flex-col items-start rounded-lg px-5 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-l-4 border-blue-300 bg-white/10"
                        : "border-l-4 border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`text-base font-semibold transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-blue-100 group-hover:text-white"
                      }`}
                    >
                      {tab.title}
                    </span>
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-2 overflow-hidden text-sm leading-relaxed text-blue-200"
                        >
                          {tab.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right column — feature display */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 0 ? (
                    <div className="rounded-xl bg-slate-900 p-4">
                      <SEOHeatmap />
                    </div>
                  ) : activeTab === 1 ? (
                    <div className="rounded-xl bg-slate-900 p-4">
                      <LiveDashboard />
                    </div>
                  ) : (
                    <FeatureCard tab={tabs[activeTab]} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
