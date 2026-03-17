import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

const footerLinks = [
  { label: "Features", href: "/#features" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <Container className="py-16 text-center">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <span className="text-xl font-bold text-primary">
            {COMPANY.name}
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 transition-colors duration-200 hover:text-slate-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="mt-10 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
