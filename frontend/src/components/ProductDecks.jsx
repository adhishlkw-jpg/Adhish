import { motion } from 'framer-motion';
import { Download, FileText, ArrowUpRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { PRODUCT_DECKS } from '../lib/data';

export const ProductDecks = () => {
  return (
    <section id="product-decks" data-testid="product-decks-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs tracking-[0.2em] uppercase font-semibold text-muted-foreground mb-3">
            <span className="brand-gradient-text">Product Decks</span>
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl">
            Product marketing, in <span className="brand-gradient-text">deck form.</span>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-3xl">
            Positioning, narrative and sales-ready collateral for the products I've taken to market.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PRODUCT_DECKS.map((deck, i) => (
            <motion.div
              key={deck.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              data-testid={`deck-card-${deck.slug}`}
            >
              <div className={`relative h-48 bg-gradient-to-br ${deck.gradient} overflow-hidden`}>
                <div className="absolute inset-0 noise opacity-30" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/95 text-[10px] tracking-widest uppercase font-semibold text-[#0B1020]">
                  {deck.company}
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/95 flex items-center justify-center text-[#0B1020]">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white/85 text-xs font-medium">Sales-Ready Deck</div>
                </div>
              </div>

              <div className="p-7 lg:p-8">
                <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight">{deck.title}</h3>
                <p className="mt-2 text-sm italic brand-gradient-text font-semibold">{deck.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground">{deck.summary}</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deck.capabilities.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-xs">
                      <Check className="h-3.5 w-3.5 text-foreground/70 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    asChild
                    data-testid={`deck-view-${deck.slug}`}
                    className="rounded-full brand-gradient text-white hover:opacity-90"
                  >
                    <a href={deck.pdf} target="_blank" rel="noopener noreferrer">
                      View Deck <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    data-testid={`deck-download-${deck.slug}`}
                    className="rounded-full"
                  >
                    <a href={deck.pdf} download>
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
