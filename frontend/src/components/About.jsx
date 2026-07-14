import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { TIMELINE } from '../lib/data';

export const About = () => {
  return (
    <section id="about" data-testid="about-section" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="About"
          title="Building market narratives that drive growth."
          subtitle="Senior B2B and B2C marketing leader with 11+ years across SaaS, AI, AdTech, Hospitality and Retail, working at the intersection of product marketing and brand. I specialize in positioning, messaging, GTM, demand generation, sales enablement and ABM, alongside brand strategy, integrated communications, PR and thought leadership."
          testId="about-heading"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-28">
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Experience</div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6">
                A decade of building category-defining brands.
              </h3>
              <p className="text-muted-foreground">
                From flagship retail brands and global hospitality groups to AI and AdTech platforms — I've led marketing
                functions through scale-ups, launches and rebrands. The throughline: clarity of positioning, disciplined
                GTM, and storytelling that earns attention.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative pl-8">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.company}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative mb-10 last:mb-0"
                  data-testid={`timeline-item-${i}`}
                >
                  <div className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full brand-gradient" />
                  <div className="text-xs tracking-widest uppercase text-muted-foreground">{t.period}</div>
                  <div className="mt-1 font-display font-bold text-xl">{t.company}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                  <p className="mt-2 text-sm">{t.highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
