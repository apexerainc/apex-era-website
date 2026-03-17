"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Users, DollarSign, ArrowUp } from "lucide-react";

// Chart data — realistic upward trend with variance
const CHART_DATA = [32, 40, 36, 52, 48, 61, 58, 72, 68, 82];
const CHART_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function buildPath(
  data: number[],
  width: number,
  height: number,
  padding = 16
): string {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const stepX = (width - padding * 2) / (data.length - 1);

  return data
    .map((val, i) => {
      const x = padding + i * stepX;
      const y = height - padding - ((val - min) / range) * (height - padding * 2);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildAreaPath(
  data: number[],
  width: number,
  height: number,
  padding = 16
): string {
  const linePath = buildPath(data, width, height, padding);
  const stepX = (width - padding * 2) / (data.length - 1);
  const lastX = padding + (data.length - 1) * stepX;
  const firstX = padding;
  const bottom = height - padding;
  return `${linePath} L ${lastX.toFixed(1)} ${bottom} L ${firstX.toFixed(1)} ${bottom} Z`;
}

function formatCurrency(value: number): string {
  return "$" + value.toLocaleString("en-US");
}

// ── Metric Card ────────────────────────────────────────────────
function MetricCard({
  icon: Icon,
  label,
  value,
  formatter,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  formatter?: (v: number) => string;
}) {
  const display = formatter ? formatter(value) : value.toLocaleString();

  return (
    <div className="bg-white/[0.03] rounded-xl p-3 flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Icon className="w-3.5 h-3.5 text-primary" />
        <span className="flex items-center gap-0.5 text-[10px] font-medium text-success">
          <ArrowUp className="w-2.5 h-2.5" />
        </span>
      </div>
      <span className="text-base font-semibold text-text font-heading leading-none tabular-nums">
        {display}
      </span>
      <span className="text-[11px] text-text-muted leading-none">{label}</span>
    </div>
  );
}

// ── Mini Line Chart ────────────────────────────────────────────
const CHART_W = 400;
const CHART_H = 160;
const CHART_PAD = 24;

function MiniChart({ animate: shouldAnimate }: { animate: boolean }) {
  const linePath = buildPath(CHART_DATA, CHART_W, CHART_H, CHART_PAD);
  const areaPath = buildAreaPath(CHART_DATA, CHART_W, CHART_H, CHART_PAD);

  // Grid lines
  const gridLines = [0.25, 0.5, 0.75].map((frac) => {
    const y = CHART_PAD + frac * (CHART_H - CHART_PAD * 2);
    return (
      <line
        key={frac}
        x1={CHART_PAD}
        x2={CHART_W - CHART_PAD}
        y1={y}
        y2={y}
        stroke="rgba(255,255,255,0.04)"
        strokeWidth={1}
      />
    );
  });

  // X-axis labels
  const stepX = (CHART_W - CHART_PAD * 2) / (CHART_LABELS.length - 1);
  const labels = CHART_LABELS.map((label, i) => (
    <text
      key={label}
      x={CHART_PAD + i * stepX}
      y={CHART_H - 4}
      fill="#a0a4ab"
      fontSize={10}
      textAnchor="middle"
      fontFamily="Inter, system-ui, sans-serif"
    >
      {label}
    </text>
  ));

  return (
    <div className="bg-black/20 rounded-xl p-2 flex-1 min-h-0">
      <svg
        viewBox={`0 0 ${CHART_W} ${CHART_H}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3ba4ff" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#3ba4ff" stopOpacity={0} />
          </linearGradient>
        </defs>

        {gridLines}
        {labels}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#chart-fill)"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />

        {/* Animated line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#3ba4ff"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={shouldAnimate ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
        />

        {/* Endpoint dot */}
        {(() => {
          const min = Math.min(...CHART_DATA);
          const max = Math.max(...CHART_DATA);
          const range = max - min || 1;
          const last = CHART_DATA[CHART_DATA.length - 1];
          const cx =
            CHART_PAD +
            (CHART_DATA.length - 1) *
              ((CHART_W - CHART_PAD * 2) / (CHART_DATA.length - 1));
          const cy =
            CHART_H -
            CHART_PAD -
            ((last - min) / range) * (CHART_H - CHART_PAD * 2);
          return (
            <motion.circle
              cx={cx}
              cy={cy}
              r={4}
              fill="#3ba4ff"
              stroke="#0a0b0d"
              strokeWidth={2}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                shouldAnimate
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.3, delay: 1.8 }}
            />
          );
        })()}
      </svg>
    </div>
  );
}

// ── LiveDashboard ──────────────────────────────────────────────
export function LiveDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });

  const [calls, setCalls] = useState(47);
  const [leads, setLeads] = useState(24);
  const [revenue, setRevenue] = useState(47200);

  // Random int helper stable across renders
  const randInt = useCallback((min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, []);

  // Ticking intervals — only when in view
  useEffect(() => {
    if (!isInView) return;

    const callsTimer = setInterval(() => {
      setCalls((prev) => prev + 1);
    }, 3000);

    const leadsTimer = setInterval(() => {
      setLeads(randInt(23, 28));
    }, 2000);

    const revenueTimer = setInterval(() => {
      setRevenue((prev) => prev + randInt(100, 500));
    }, 4000);

    return () => {
      clearInterval(callsTimer);
      clearInterval(leadsTimer);
      clearInterval(revenueTimer);
    };
  }, [isInView, randInt]);

  return (
    <motion.div
      ref={containerRef}
      className="glass rounded-2xl overflow-hidden flex flex-col glow-blue"
      style={{ aspectRatio: "4 / 3" }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ── Title bar ──────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <span className="text-xs font-medium text-text-muted tracking-wide uppercase">
          Analytics Dashboard
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Live
        </span>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="flex flex-col gap-3 p-4 flex-1 min-h-0">
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-3">
          <MetricCard
            icon={Phone}
            label="Calls This Month"
            value={calls}
          />
          <MetricCard
            icon={Users}
            label="Active Leads"
            value={leads}
          />
          <MetricCard
            icon={DollarSign}
            label="Monthly Revenue"
            value={revenue}
            formatter={formatCurrency}
          />
        </div>

        {/* Chart */}
        <MiniChart animate={isInView} />

        {/* Bottom stats bar */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">Conversion Rate</span>
            <span className="text-[10px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded-full">
              12.4%
            </span>
          </div>
          <span className="text-[11px] font-medium text-success">
            ↑ 23% vs last month
          </span>
        </div>
      </div>
    </motion.div>
  );
}
