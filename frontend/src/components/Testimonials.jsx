import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../lib/data';
import { SectionHeading } from './SectionHeading';

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  return (
    <section data-testid="testimonials-section" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Testimonials"
          title="What partners & peers say."
          align="center"
          testId="testimonials-heading"
        />

        <div className="mt-14 relative rounded-3xl border border-border bg-card p-8 lg:p-14 overflow-hidden">
          <Quote className="absolute -top-2 -left-2 h-32 w-32 brand-gradient-text opacity-10" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative"
              data-testid="testimonial-slide"
            >
              <p className="font-display text-xl lg:text-2xl leading-snug">{t.quote}</p>
              <div className="mt-6">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  data-testid={`testimonial-dot-${idx}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-8 brand-gradient' : 'w-1.5 bg-border'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button data-testid="testimonial-prev" onClick={prev} className="h-10 w-10 rounded-full border border-border hover:bg-secondary transition flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button data-testid="testimonial-next" onClick={next} className="h-10 w-10 rounded-full border border-border hover:bg-secondary transition flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
