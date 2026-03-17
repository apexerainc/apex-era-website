"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function TeamGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind Apex Era"
            subtitle="A small, focused team of restoration industry veterans and digital marketing experts."
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.15}>
              <Card hover className="text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30">
                  <span className="font-heading text-2xl font-bold text-text">
                    {getInitials(member.name)}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-text">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
