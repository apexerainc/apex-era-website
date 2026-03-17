"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

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
  const [servicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    onClose();
    setServicesExpanded(false);
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background/90 backdrop-blur-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <GradientText className="font-heading text-lg font-bold">
                {COMPANY.name}
              </GradientText>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-card hover:text-text"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6" role="navigation">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => {
                  if (link.label === "Services" && "children" in link && link.children) {
                    return (
                      <motion.li
                        key={link.label}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <button
                          onClick={() => setServicesExpanded(!servicesExpanded)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                            isActive(link.href)
                              ? "text-primary border-l-2 border-primary shadow-[inset_0_0_12px_rgba(59,164,255,0.06)]"
                              : "text-text-muted border-l-2 border-transparent hover:border-primary/40 hover:bg-white/[0.03] hover:text-text"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              servicesExpanded && "rotate-180"
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesExpanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              <li>
                                <Link
                                  href={link.href}
                                  className={cn(
                                    "block rounded-lg px-4 py-2 text-sm transition-colors",
                                    pathname === link.href
                                      ? "text-primary"
                                      : "text-text-muted hover:text-text"
                                  )}
                                >
                                  All Services
                                </Link>
                              </li>
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "block rounded-lg px-4 py-2 text-sm transition-colors",
                                      isActive(child.href)
                                        ? "text-primary"
                                        : "text-text-muted hover:text-text"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

                  return (
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
                          "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                          isActive(link.href)
                            ? "text-primary border-l-2 border-primary shadow-[inset_0_0_12px_rgba(59,164,255,0.06)]"
                            : "text-text-muted border-l-2 border-transparent hover:border-primary/40 hover:bg-white/[0.03] hover:text-text"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA */}
            <div className="border-t border-white/5 px-6 py-6">
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                Book a Call
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
