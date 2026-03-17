"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { MapPin, Trophy } from "lucide-react";

// ---------------------------------------------------------------------------
// Map shape mask  -- 1 = dot present, 0 = empty.
// 12 columns x 8 rows.  The shape loosely resembles a city/region blob.
// ---------------------------------------------------------------------------
const MAP_SHAPE: number[][] = [
  //0  1  2  3  4  5  6  7  8  9 10 11
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], // row 0
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // row 1
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // row 2
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // row 3
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // row 4
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], // row 5
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // row 6
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], // row 7
];

const COLS = 12;
const ROWS = 8;
const CENTER = { col: 5, row: 3 }; // "client location" – slightly left-of-center

// Build the list of active dots with pre-computed distances from center
interface Dot {
  row: number;
  col: number;
  dist: number; // Euclidean distance from CENTER
}

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (MAP_SHAPE[r][c] === 1) {
        const dx = c - CENTER.col;
        const dy = r - CENTER.row;
        dots.push({ row: r, col: c, dist: Math.sqrt(dx * dx + dy * dy) });
      }
    }
  }
  return dots;
}

const ALL_DOTS = buildDots();
const MAX_DIST = Math.max(...ALL_DOTS.map((d) => d.dist));

// Determine final color bucket for each dot based on distance
// ~80-90% green, edge dots amber
function finalColor(dot: Dot): "green" | "amber" {
  const ratio = dot.dist / MAX_DIST;
  return ratio > 0.85 ? "amber" : "green";
}

// ---------------------------------------------------------------------------
// Animated stat that counts between two values
// ---------------------------------------------------------------------------
function CountingStat({
  label,
  from,
  to,
  suffix,
  prefix,
  playing,
  duration,
  decimals,
}: {
  label: string;
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  playing: boolean;
  duration: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(from);
  const dec = decimals ?? 0;

  useEffect(() => {
    if (playing) {
      mv.set(from);
      const ctrl = animate(mv, to, { duration, ease: "easeOut" });
      return () => ctrl.stop();
    } else {
      mv.set(from);
    }
  }, [playing, from, to, duration, mv]);

  useEffect(() => {
    const unsub = mv.on("change", (v) => {
      if (ref.current) {
        const display = dec > 0 ? v.toFixed(dec) : Math.round(v).toString();
        ref.current.textContent = `${prefix ?? ""}${display}${suffix ?? ""}`;
      }
    });
    return () => unsub();
  }, [mv, prefix, suffix, dec]);

  return (
    <div className="flex flex-col gap-0.5">
      <span ref={ref} className="font-heading text-lg font-bold text-text sm:text-xl">
        {prefix ?? ""}{dec > 0 ? from.toFixed(dec) : from}{suffix ?? ""}
      </span>
      <span className="text-[11px] text-text-muted leading-tight">{label}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// A single dot in the heatmap grid
// ---------------------------------------------------------------------------
function HeatmapDot({
  dot,
  playing,
  waveDelay,
}: {
  dot: Dot;
  playing: boolean;
  waveDelay: number;
}) {
  const isCenter = dot.row === CENTER.row && dot.col === CENTER.col;
  const final = finalColor(dot);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        gridRow: dot.row + 1,
        gridColumn: dot.col + 1,
      }}
    >
      {/* The dot itself */}
      <motion.div
        className="w-2.5 h-2.5 rounded-full"
        initial={false}
        animate={
          playing
            ? {
                backgroundColor:
                  final === "green"
                    ? "rgb(52, 211, 153)" // emerald-400
                    : "rgb(251, 191, 36)", // amber-400
                scale: [1, 1.4, 1],
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 8px rgba(255,255,255,0.7)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }
            : {
                backgroundColor: "rgb(239, 68, 68)", // red-500
                scale: 1,
                boxShadow: "0 0 0px rgba(255,255,255,0)",
              }
        }
        transition={{
          delay: playing ? waveDelay : 0,
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Center pulsing ring */}
      {isCenter && (
        <>
          <motion.div
            className="absolute w-6 h-6 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute w-6 h-6 rounded-full border border-primary/50"
            animate={{
              scale: [1, 3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5,
            }}
          />
        </>
      )}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function SEOHeatmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [playing, setPlaying] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [mapPackFlipped, setMapPackFlipped] = useState(false);

  // When entering viewport, start the wave.  When leaving, reset.
  useEffect(() => {
    if (isInView) {
      setPlaying(false);
      setShowBadge(false);
      setMapPackFlipped(false);

      // Small delay so the reset frame renders first
      const t0 = setTimeout(() => setPlaying(true), 80);
      // Show badge after wave mostly completes
      const t1 = setTimeout(() => setShowBadge(true), 5200);
      // Flip map pack when center dots turn green
      const t2 = setTimeout(() => setMapPackFlipped(true), 2000);

      return () => {
        clearTimeout(t0);
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setPlaying(false);
      setShowBadge(false);
      setMapPackFlipped(false);
    }
  }, [isInView]);

  // Pre-compute wave delays (distance-based staggering, 1-4s range)
  const dotsWithDelay = useMemo(
    () =>
      ALL_DOTS.map((dot) => ({
        dot,
        waveDelay: 0.8 + (dot.dist / MAX_DIST) * 3.2, // 0.8s – 4.0s
      })),
    []
  );

  return (
    <div ref={containerRef} className="w-full">
      <div className="glass rounded-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-text">Local Search Rankings</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Map area */}
          <div className="relative flex-1 p-6 sm:p-8 grid-pattern">
            {/* Dot grid – using CSS grid so empty cells just stay empty */}
            <div
              className="mx-auto grid place-items-center"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
                gap: "10px",
                aspectRatio: "16 / 10",
                maxWidth: 520,
              }}
            >
              {dotsWithDelay.map(({ dot, waveDelay }) => (
                <HeatmapDot
                  key={`${dot.row}-${dot.col}`}
                  dot={dot}
                  playing={playing}
                  waveDelay={waveDelay}
                />
              ))}
            </div>

            {/* Success badge that slides up */}
            <motion.div
              className="mt-5 mx-auto max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={showBadge ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 border border-success/30">
                <Trophy className="h-4 w-4 text-success shrink-0" />
                <span className="text-sm font-medium text-text">
                  Ranking <span className="text-success">#1</span> in 47 Local Searches
                </span>
              </div>
            </motion.div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-text-muted">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                Not Ranking
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
                Improving
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                Page 1
              </span>
            </div>
          </div>

          {/* Stats sidebar */}
          <div className="flex flex-row lg:flex-col justify-around gap-4 border-t lg:border-t-0 lg:border-l border-border/50 px-5 py-5 lg:py-8 lg:w-48">
            <CountingStat
              label="Keywords Ranked"
              from={0}
              to={47}
              playing={playing}
              duration={4.5}
            />
            <CountingStat
              label="Avg Position"
              from={34}
              to={2.1}
              playing={playing}
              duration={4.5}
              decimals={1}
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-heading text-lg font-bold sm:text-xl">
                {mapPackFlipped ? (
                  <span className="text-success">Yes</span>
                ) : (
                  <span className="text-red-400">No</span>
                )}
              </span>
              <span className="text-[11px] text-text-muted leading-tight">Map Pack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
