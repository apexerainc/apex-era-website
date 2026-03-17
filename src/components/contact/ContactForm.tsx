"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { contactFormSchema } from "@/types";
import type { ContactFormData } from "@/types";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something went wrong. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-text">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Name *"
          placeholder="John Smith"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email *"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Input
          id="company"
          name="company"
          label="Company"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
      </div>

      <div className="mt-5">
        <Textarea
          id="message"
          name="message"
          label="Message *"
          placeholder="Tell us about your project or how we can help..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={5}
        />
      </div>

      {serverError && (
        <p className="mt-4 text-sm text-red-400">{serverError}</p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="solid"
          size="lg"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
