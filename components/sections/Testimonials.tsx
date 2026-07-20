"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Vance",
    role: "CEO & Co-founder",
    company: "Vance Media Labs",
    avatar: "/images/clients/client1.png",
    rating: 5,
    text: "Atul engineered the entire Yatrikaa travel application. His mastery of BLoC state management and integration of Google Places and OpenTripMap APIs delivered an incredibly smooth experience.",
    project: "Yatrikaa Travel App",
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "GuruConnect Team",
    avatar: "/images/clients/client2.png",
    rating: 5,
    text: "Atul's backend engineering work on the GuruConnect mentorship booking system was exceptional. The Express/MongoDB APIs are highly secure, and the Razorpay/Zoom integrations run flawlessly.",
    project: "GuruConnect Platform",
  },
  {
    id: "t3",
    name: "David Chen",
    role: "Head of Engineering",
    company: "TechSys Solutions",
    avatar: "/images/clients/client1.png",
    rating: 5,
    text: "Atul's focus on clean architecture, SOLID standards, and database optimization is remarkable. He writes production-grade, highly documented APIs and Flutter interfaces.",
    project: "Software Systems",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="py-24 relative bg-bg-secondary/60 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-bold uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="font-heading section-title font-extrabold text-white">
            What <span className="text-accent-gradient">Clients & Founders Say</span>
          </h2>
          <p className="text-text-body text-base max-w-2xl">
            Testimonials from startup founders, product managers, and engineering leaders I have collaborated with.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] md:flex-[0_0_80%] min-w-0 glass-card p-8 sm:p-10 rounded-[28px] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Star Rating & Quote */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-accent-primary/30" />
                    </div>

                    <p className="text-base sm:text-lg text-white leading-relaxed italic mb-8">
                      &quot;{t.text}&quot;
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent-primary/40">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-heading">{t.name}</h4>
                        <p className="text-xs text-text-muted">{t.role} • {t.company}</p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs font-mono font-medium">
                      {t.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full glass-card border border-white/10 flex items-center justify-center text-white hover:text-accent-primary hover:border-accent-primary/40 transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full glass-card border border-white/10 flex items-center justify-center text-white hover:text-accent-primary hover:border-accent-primary/40 transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
