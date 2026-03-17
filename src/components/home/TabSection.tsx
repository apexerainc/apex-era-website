"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LiveDashboard } from "@/components/home/LiveDashboard";
import { SEOHeatmap } from "@/components/home/SEOHeatmap";

const tabItems = [
  { label: "Analytics Dashboard", key: "analytics" },
  { label: "SEO Rankings", key: "seo" },
  { label: "Lead Pipeline", key: "leads" },
] as const;

type TabKey = (typeof tabItems)[number]["key"];

// Fake lead data for the pipeline mockup
const leads = [
  {
    name: "Sarah Mitchell",
    status: "Qualified",
    statusColor: "bg-emerald-100 text-emerald-700",
    source: "Google Ads",
    value: "$12,400",
  },
  {
    name: "James Rivera",
    status: "New",
    statusColor: "bg-blue-100 text-blue-700",
    source: "Organic Search",
    value: "$8,200",
  },
  {
    name: "Angela Chen",
    status: "Contacted",
    statusColor: "bg-amber-100 text-amber-700",
    source: "Referral",
    value: "$15,800",
  },
  {
    name: "Marcus Johnson",
    status: "Qualified",
    statusColor: "bg-emerald-100 text-emerald-700",
    source: "Google Maps",
    value: "$22,100",
  },
  {
    name: "Patricia Gomez",
    status: "New",
    statusColor: "bg-blue-100 text-blue-700",
    source: "Website Form",
    value: "$9,750",
  },
  {
    name: "David Kim",
    status: "Proposal Sent",
    statusColor: "bg-violet-100 text-violet-700",
    source: "Google Ads",
    value: "$31,200",
  },
  {
    name: "Lisa Thompson",
    status: "Contacted",
    statusColor: "bg-amber-100 text-amber-700",
    source: "Organic Search",
    value: "$14,600",
  },
];

function LeadPipeline() {
  return (
    <div className="rounded-xl bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Lead Pipeline</h3>
          <p className="mt-0.5 text-xs text-slate-400">
            7 active leads &middot; $113,050 total value
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-400">Live</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-slate-700/50">
        {/* Table header */}
        <div className="grid grid-cols-4 gap-4 border-b border-slate-700/50 bg-slate-800/50 px-4 py-2.5">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Name
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Status
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Source
          </span>
          <span className="text-right text-xs font-medium uppercase tracking-wider text-slate-400">
            Value
          </span>
        </div>

        {/* Table rows */}
        {leads.map((lead, i) => (
          <div
            key={lead.name}
            className={`grid grid-cols-4 gap-4 px-4 py-3 ${
              i < leads.length - 1 ? "border-b border-slate-800" : ""
            } transition-colors hover:bg-slate-800/40`}
          >
            <span className="truncate text-sm font-medium text-slate-200">
              {lead.name}
            </span>
            <span>
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${lead.statusColor}`}
              >
                {lead.status}
              </span>
            </span>
            <span className="truncate text-sm text-slate-400">
              {lead.source}
            </span>
            <span className="text-right text-sm font-semibold tabular-nums text-slate-200">
              {lead.value}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom summary */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>Conversion rate: 34%</span>
        <span className="font-medium text-emerald-400">
          +18% vs last month
        </span>
      </div>
    </div>
  );
}

export function TabSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("analytics");

  return (
    <section className="bg-white py-20 sm:py-32">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900">
            See the results for yourself.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-600">
            Real-time dashboards give you full visibility into your marketing
            performance, rankings, and lead pipeline.
          </p>
        </div>

        {/* Tab bar */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-slate-100 p-1">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content area */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-slate-200" />
              <span className="h-3 w-3 rounded-full bg-slate-200" />
              <span className="h-3 w-3 rounded-full bg-slate-200" />
              <div className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1">
                <span className="text-xs text-slate-400">
                  dashboard.apexerainc.com
                </span>
              </div>
            </div>

            {/* Tab content */}
            <div className="p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {activeTab === "analytics" && (
                    <div className="rounded-xl bg-slate-900 p-4">
                      <LiveDashboard />
                    </div>
                  )}
                  {activeTab === "seo" && (
                    <div className="rounded-xl bg-slate-900 p-4">
                      <SEOHeatmap />
                    </div>
                  )}
                  {activeTab === "leads" && <LeadPipeline />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
