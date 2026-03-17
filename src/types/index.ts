export type { Service, ServiceFeature, ProcessStep } from "./service";
export type { Tool } from "./tool";
export type { BlogPost } from "./blog";
export type { ContactFormData, AuditFormData } from "./forms";
export { contactFormSchema, auditFormSchema } from "./forms";

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  prefix?: string;
  label: string;
}
