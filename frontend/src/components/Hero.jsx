import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { HERO_STATS, FLOATING_TAGS, CONTACT } from '../lib/data';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 lg:pt-36 pb-20 lg:pb-32"
    >
      <div className="hero-mesh" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium"
            data-testid="hero-eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full brand-gradient" />
            Senior Product Marketing, Communications, Brand & GTM Leader
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-black tracking-tighter mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]"
            data-testid="hero-headline"
          >
            Turning Product Complexities Into
            <br className="hidden sm:block" />
            <span className="brand-gradient-text"> Market Demand.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base lg:text-lg text-muted-foreground"
            data-testid="hero-sub"
          >
            I help brands build positioning, launch products, generate demand, and craft category-defining
            narratives — across marketing, communications and GTM, for B2B and B2C alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              data-testid="hero-cta-view-work"
              onClick={() => scrollTo('work')}
              className="rounded-full brand-gradient text-white hover:opacity-90 px-6 h-12"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href={CONTACT.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-resume"
              className="inline-flex items-center justify-center rounded-full px-6 h-12 border border-border bg-card hover:bg-secondary transition text-sm font-medium"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-3xl"
            data-testid="hero-stats"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl lg:text-3xl font-bold brand-gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-4 hidden lg:block">
          <div className="relative h-[460px]">
            {FLOATING_TAGS.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ y: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.6, delay: 0.4 + i * 0.1 } }}
                className="absolute glass rounded-2xl px-4 py-3 text-sm font-medium shadow-sm"
                style={{
                  top: `${10 + i * 18}%`,
                  left: `${i % 2 === 0 ? 5 : 45}%`,
                }}
                data-testid={`floating-tag-${i}`}
              >
                <span className="brand-gradient-text font-semibold">{tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
