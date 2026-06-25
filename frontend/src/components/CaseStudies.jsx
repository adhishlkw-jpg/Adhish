import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { SectionHeading } from './SectionHeading';
import { CASE_STUDIES } from '../lib/data';
import { toast } from 'sonner';

export const CaseStudies = () => {
  const handleDownload = (slug) => {
    toast('Resume PDF coming soon', {
      description: `Full ${slug} case study PDF will be available shortly.`,
    });
  };

  return (
    <section id="case-studies" data-testid="case-studies-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Case Studies"
          title="Deep dives into the work."
          subtitle="Challenge, strategy, execution and measurable outcomes."
          testId="case-studies-heading"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-border bg-card p-2 lg:p-4"
        >
          <Accordion type="single" collapsible className="w-full" data-testid="case-studies-accordion">
            {CASE_STUDIES.map((cs, i) => (
              <AccordionItem key={cs.slug} value={cs.slug} className="border-border">
                <AccordionTrigger
                  data-testid={`case-trigger-${cs.slug}`}
                  className="px-4 lg:px-6 py-5 hover:no-underline"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <span className="font-display font-bold text-lg lg:text-xl">{cs.title}</span>
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
                        <Button
                          data-testid={`case-download-${cs.slug}`}
                          onClick={() => handleDownload(cs.slug)}
                          variant="outline"
                          className="mt-5 w-full rounded-full"
                        >
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

const Block = ({ label, body }) => (
  <div>
    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</div>
    <p className="text-sm lg:text-base">{body}</p>
  </div>
);
