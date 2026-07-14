import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { WORK } from '../lib/data';

export const Work = () => {
  return (
    <section id="work" data-testid="work-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Work"
          title="Selected campaigns & narratives."
          subtitle="A blend of product launches, thought-leadership platforms and performance campaigns."
          testId="work-heading"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {WORK.map((item, i) => (
            <motion.a
              key={item.slug}
              href={`#case-studies`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${item.span}`}
              data-testid={`work-card-${item.slug}`}
            >
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-[10px] tracking-widest uppercase font-semibold text-[#0B1020]">
                  {item.category}
                </div>
                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/95 flex items-center justify-center text-[#0B1020] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                {item.quote && (
                  <div className="mt-4 text-sm italic brand-gradient-text font-semibold">{item.quote}</div>
                )}
                {item.metrics && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.metrics.map((m) => (
                      <div key={m.k} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium">
                        <span className="text-muted-foreground">{m.k}:</span>{' '}
                        <span className="font-bold">{m.v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Seasonal banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-border bg-card p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          data-testid="work-seasonal"
        >
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Seasonal Brand Campaigns</div>
            <h3 className="font-display font-bold text-2xl mt-2">Valentine's · IPL 2025 · Festive Editions</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
              Brand-led seasonal activations blending contextual targeting, creative storytelling and on-ground engagement
              across India's most attention-rich cultural moments.
            </p>
          </div>
          <div className="flex gap-2">
            {['Valentine\u2019s', 'IPL 2025', 'Festive'].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium brand-gradient text-white">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
