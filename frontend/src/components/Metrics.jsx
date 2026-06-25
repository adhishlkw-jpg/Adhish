import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { METRICS } from '../lib/data';

const Counter = ({ to, decimals = 0, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (to - start) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  const display = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return (
    <span ref={ref}>{display}{suffix}</span>
  );
};

export const Metrics = () => {
  return (
    <section data-testid="metrics-section" className="py-20 lg:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4"
        >
          {METRICS.map((m, i) => (
            <div key={m.label} className="text-center lg:text-left" data-testid={`metric-${i}`}>
              <div className="font-display font-black text-3xl lg:text-4xl tracking-tight brand-gradient-text">
                <Counter to={m.value} decimals={m.decimals || 0} suffix={m.suffix} />
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground mt-2">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
