import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { CASE_STUDIES } from '../lib/data';
import { toast } from 'sonner';

const Block = ({ label, body }) => (
  <div>
    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</div>
    <p className="text-sm lg:text-base">{body}</p>
  </div>
);

export const CaseStudies = () => {
  return (
    <section id="work" data-testid="case-studies-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Big bold Work Showcase parent heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="text-xs tracking-[0.3em] uppercase font-bold brand-gradient-text mb-4">
            Work Showcase
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            Case studies, campaigns &
            <br className="hidden sm:block" />
            <span className="brand-gradient-text"> thought leadership.</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-2xl">
            A selection of campaigns, product launches and category-defining narratives shipped across
            SaaS, AI and AdTech — each with measurable outcomes.
          </p>
        </motion.div>

        {/* Case Studies Section */}
        <div id="case-studies" className="scroll-mt-24 mt-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Case Studies</div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl mt-2 tracking-tight">
                Five deep dives. Outcomes attached.
              </h3>
            </div>
            <div className="hidden lg:block text-sm text-muted-foreground">
              {CASE_STUDIES.length} case studies
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-2 lg:p-4"
          >
            <Accordion type="single" collapsible className="w-full" data-testid="case-studies-accordion">
              {CASE_STUDIES.map((cs, i) => (
                <AccordionItem key={cs.slug} value={cs.slug} className="border-border">
                  <AccordionTrigger
                    data-testid={`case-trigger-${cs.slug}`}
                    className="px-4 lg:px-6 py-5 hover:no-underline"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className="font-mono text-xs text-muted-foreground w-8 shrink-0">0{i + 1}</span>
                      <div>
                        <span className="font-display font-bold text-lg lg:text-xl">{cs.title}</span>
                        {cs.category && (
                          <div className="text-[11px] tracking-widest uppercase text-muted-foreground mt-1">
                            {cs.category}
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 lg:px-6 pb-6">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 lg:col-span-8 space-y-5">
                        <Block label="Challenge" body={cs.challenge} />
                        <Block label="Strategy" body={cs.strategy} />
                        <Block label="Execution" body={cs.execution} />
                      </div>
                      <div className="col-span-12 lg:col-span-4">
                        <div className="rounded-2xl border border-border bg-background p-5">
                          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Results</div>
                          <ul className="space-y-3">
                            {cs.results.map((r) => (
                              <li key={r} className="flex gap-2 text-sm">
                                <span className="brand-gradient-text font-bold">→</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                          {cs.pdf ? (
                            <Button
                              asChild
                              data-testid={`case-download-${cs.slug}`}
                              variant="outline"
                              className="mt-5 w-full rounded-full"
                            >
                              <a href={cs.pdf} target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" /> Download PDF
                              </a>
                            </Button>
                          ) : (
                            <Button
                              data-testid={`case-download-${cs.slug}`}
                              variant="outline"
                              className="mt-5 w-full rounded-full"
                              onClick={() =>
                                toast(`${cs.title} PDF coming soon`, {
                                  description: 'Full case study PDF will be available shortly.',
                                })
                              }
                            >
                              <Download className="mr-2 h-4 w-4" /> Download PDF
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
