"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300",
          scrolled
            ? "shadow-sm border-b border-slate-200/80"
            : "border-b border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={200}
              height={43}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:origin-left",
                  isActive(link.href)
                    ? "text-slate-900 font-medium after:scale-x-100"
                    : "text-slate-600 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden text-sm text-slate-600 transition-colors hover:text-slate-900 lg:inline-block"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="hidden rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover lg:inline-flex"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Mobile Navigation */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
