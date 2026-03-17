import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const contactCards = [
  {
    icon: Phone,
    title: COMPANY.phone,
    subtitle: "Mon-Fri, 9am-6pm EST",
    href: `tel:${COMPANY.phoneRaw}`,
  },
  {
    icon: Mail,
    title: COMPANY.email,
    subtitle: "Responses within 24 hours",
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    title: COMPANY.address.street,
    subtitle: `${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}`,
    href: undefined,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactCards.map((card) => {
        const Icon = card.icon;
        const content = (
          <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-medium text-text">{card.title}</p>
              <p className="mt-0.5 text-sm text-text-muted">{card.subtitle}</p>
            </div>
          </div>
        );

        if (card.href) {
          return (
            <a key={card.title} href={card.href} className="block">
              {content}
            </a>
          );
        }

        return <div key={card.title}>{content}</div>;
      })}
    </div>
  );
}
