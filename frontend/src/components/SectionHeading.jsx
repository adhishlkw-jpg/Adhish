import { motion } from 'framer-motion';

export const SectionHeading = ({ overline, title, subtitle, align = 'left', testId }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      data-testid={testId}
    >
      {overline && (
        <div className="text-xs tracking-[0.2em] uppercase font-semibold text-muted-foreground mb-3">
          <span className="brand-gradient-text">{overline}</span>
        </div>
      )}
      <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base lg:text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
};
