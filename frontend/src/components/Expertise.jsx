import { motion } from 'framer-motion';
import { Rocket, Target, Zap, BookOpen, Megaphone, Sparkles, Check } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { EXPERTISE } from '../lib/data';

const ICONS = { Rocket, Target, Zap, BookOpen, Megaphone, Sparkles };

export const Expertise = () => {
  return (
    <section id="expertise" data-testid="expertise-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Expertise"
          title="Six disciplines. One revenue narrative."
          subtitle="Marketing functions built end-to-end — from positioning and messaging to demand and brand."
          testId="expertise-heading"
        />

        <div className="mt-14 grid grid-cols-12 gap-5">
          {EXPERTISE.map((card, i) => {
            const Icon = ICONS[card.icon];
            const spans = ['col-span-12 sm:col-span-6 lg:col-span-4'];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`${spans[0]} group`}
                data-testid={`expertise-card-${i}`}
              >
                <div className="glow-border h-full rounded-2xl bg-card border border-border p-6 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-10 w-10 rounded-xl brand-gradient flex items-center justify-center text-white mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg lg:text-xl">{card.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-foreground/70" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
