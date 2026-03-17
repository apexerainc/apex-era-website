"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { auditFormSchema } from "@/types";

export function HeroSection() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ url?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const result = auditFormSchema.safeParse({ url, email });
    if (!result.success) {
      const fieldErrors: { url?: string; email?: string } = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as "url" | "email";
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Dot grid pattern — subtle premium feel */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,164,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="gradient-orb gradient-orb-blue absolute -top-20 -right-40 h-[500px] w-[500px]" />
      <div className="gradient-orb gradient-orb-cyan absolute -bottom-32 -left-40 h-80 w-80" />

      {/* Subtle central glow for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <ScrollReveal delay={0}>
            <div className="mb-6 flex justify-center">
              <Badge>Built by Restorers, for Restorers</Badge>
            </div>
          </ScrollReveal>

          {/* H1 */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-7xl">
              Grow Your Restoration Business with{" "}
              <GradientText>Digital Marketing That Works</GradientText>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
              We help restoration companies generate more leads, dominate local
              search, and scale their business with AI-powered marketing tools.
            </p>
          </ScrollReveal>

          {/* Audit form */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-10 max-w-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 rounded-xl border border-success/30 bg-success/10 px-6 py-4"
                >
                  <CheckCircle className="h-5 w-5 text-success" />
                  <p className="text-sm font-medium text-success">
                    Your free audit request has been submitted. We will be in
                    touch shortly!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row sm:items-start"
                >
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="Your website URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      error={errors.url}
                      aria-label="Website URL"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={errors.email}
                      aria-label="Email address"
                    />
                  </div>
                  <Button type="submit" size="lg" className="sm:flex-shrink-0">
                    Get Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Trust strip */}
          <ScrollReveal delay={0.4}>
            <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Trusted by 100+ restoration companies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>C&amp;R Magazine Featured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>$3M+ avg revenue per client</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
