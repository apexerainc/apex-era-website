"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { MobileNav } from "@/components/layout/MobileNav";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export function Header() {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection(10);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" && scrolled ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "h-16 border-b border-white/5 bg-background/60 backdrop-blur-xl"
            : "h-20 bg-transparent"
        )}
      >
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <GradientText className="font-heading text-2xl font-extrabold tracking-tight">
              {COMPANY.name}
            </GradientText>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services" && "children" in link && link.children) {
                return (
                  <div key={link.label} ref={servicesRef} className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                        "after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:origin-left",
                        isActive(link.href)
                          ? "text-primary after:scale-x-100"
                          : "text-text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1 w-56 glass-strong rounded-xl p-2 shadow-2xl shadow-black/50"
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              "block rounded-lg px-3 py-2 text-sm transition-colors duration-150",
                              isActive(link.href) && pathname === link.href
                                ? "text-primary bg-primary/10"
                                : "text-text-muted hover:bg-card-hover hover:text-text"
                            )}
                          >
                            All Services
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2 text-sm transition-colors duration-150",
                                isActive(child.href)
                                  ? "text-primary bg-primary/10"
                                  : "text-text-muted hover:bg-card-hover hover:text-text"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                    "after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:origin-left",
                    isActive(link.href)
                      ? "text-primary after:scale-x-100"
                      : "text-text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              variant="primary"
              className="hidden lg:inline-flex shadow-lg shadow-primary/20"
            >
              Book a Call
            </Button>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-text-muted transition-colors hover:bg-card hover:text-text lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
