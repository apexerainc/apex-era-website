"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <span className="text-lg font-bold text-primary">
                {COMPANY.name}
              </span>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6" role="navigation">
              <ul className="space-y-1">
                {navItems.map((link, i) => (
                  <motion.li
                    key={link.label}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                        isActive(link.href)
                          ? "bg-primary/5 text-primary"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="border-t border-slate-200 px-6 py-6">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
