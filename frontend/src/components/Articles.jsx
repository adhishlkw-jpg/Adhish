import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ARTICLES } from '../lib/data';

const GRADIENTS = [
  'from-[#5B0FFF] to-[#D946EF]',
  'from-[#8B1CF7] to-[#FF6B35]',
  'from-[#D946EF] to-[#FF6B35]',
  'from-[#5B0FFF] to-[#FF6B35]',
];

export const Articles = () => {
  return (
    <section id="articles" data-testid="articles-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Thought Leadership"
          title="Articles, bylines & features."
          subtitle="Bylines and features across Adgully, exchange4media, Financial Express, Indian Television, ANI and more."
          testId="articles-heading"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-12 gap-5">
          {ARTICLES.map((a, i) => (
            <motion.a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group sm:col-span-6 lg:col-span-4 rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-all hover:shadow-xl"
              data-testid={`article-card-${i}`}
            >
              <div className={`relative h-36 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} overflow-hidden`}>
                <div className="absolute inset-0 noise" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/90">{a.publication}</div>
                </div>
                <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 flex items-center justify-center text-[#0B1020] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-base leading-snug line-clamp-3 group-hover:brand-gradient-text transition-colors">
                  {a.title}
                </h3>
                <div className="mt-4 text-xs font-medium text-muted-foreground inline-flex items-center gap-1">
                  Read Article <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
