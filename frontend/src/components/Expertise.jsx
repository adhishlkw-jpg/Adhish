import { motion } from 'framer-motion';
import { Rocket, Target, Zap, BookOpen, Megaphone, Sparkles, Check, TrendingUp, Cog, Users, Crosshair, Wrench } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { EXPERTISE, TOOLS } from '../lib/data';

const ICONS = { Rocket, Target, Zap, BookOpen, Megaphone, Sparkles, TrendingUp, Cog, Users, Crosshair };

export const Expertise = () => {
  return (
    <section id="expertise" data-testid="expertise-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Expertise"
          title="Ten disciplines. One revenue narrative."
          subtitle="End-to-end marketing functions — from positioning and messaging to demand, brand, automation and AI."
          testId="expertise-heading"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-12 gap-5">
          {EXPERTISE.map((card, i) => {
            const Icon = ICONS[card.icon] || Rocket;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="sm:col-span-6 lg:col-span-4 group"
                data-testid={`expertise-card-${i}`}
              >
                <div className="glow-border h-full rounded-2xl bg-card border border-border p-6 lg:p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-10 w-10 rounded-xl brand-gradient flex items-center justify-center text-white mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg lg:text-xl leading-snug">{card.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {card.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-foreground/70 shrink-0" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-border bg-card p-8 lg:p-10"
          data-testid="tools-subsection"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/3">
              <div className="h-11 w-11 rounded-xl brand-gradient flex items-center justify-center text-white mb-4">
                <Wrench className="h-5 w-5" />
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Stack</div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight">
                Tools I'm <span className="brand-gradient-text">proficient in.</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The modern B2B marketing stack — from automation and CRM to paid media, analytics and AI.
              </p>
            </div>
            <div className="lg:w-2/3 flex flex-wrap gap-2.5">
              {TOOLS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group/tool px-4 py-2.5 rounded-full border border-border bg-background hover:brand-gradient hover:text-white transition-all cursor-default"
                  data-testid={`tool-${i}`}
                  title={t.category}
                >
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="ml-2 text-[10px] tracking-widest uppercase text-muted-foreground group-hover/tool:text-white/80">
                    {t.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
