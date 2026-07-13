import { motion } from 'framer-motion';

export const Pitch = () => {
  return (
    <section id="pitch" data-testid="pitch-section" className="py-20 lg:py-28 relative border-y border-border bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="font-display font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl leading-[1.1]"
          data-testid="pitch-headline"
        >
          Positioning, Brand and Pipeline
          <br className="hidden sm:block" />
          <span className="brand-gradient-text"> Built as One Story.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl mx-auto text-base lg:text-lg text-muted-foreground"
          data-testid="pitch-sub"
        >
          I bring product marketing and brand communications together into a single narrative — defining
          positioning and messaging, shaping brand strategy and PR, and turning that story into demand
          generation and GTM execution that moves pipeline. For SaaS, AI and AdTech companies, that means
          category clarity translates directly into revenue.
        </motion.p>
      </div>
    </section>
  );
};
