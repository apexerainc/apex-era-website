"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 section-fade">
      {/* Decorative gradient orb */}
      <div className="gradient-orb gradient-orb-cyan absolute top-1/2 -left-40 h-80 w-80" />
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Hear from restoration companies that trust Apex Era to grow their business."
          />
        </ScrollReveal>

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_80%] lg:flex-[0_0_60%]"
                >
                  <div className="rounded-2xl glass p-8 sm:p-10">
                    <Quote className="mb-4 h-8 w-8 text-primary/30" />

                    {/* Star rating */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-6 text-lg leading-relaxed text-text sm:text-xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Attribution */}
                    <div>
                      <p className="font-semibold text-text">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-text-muted">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  selectedIndex === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-border hover:bg-text-muted"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
