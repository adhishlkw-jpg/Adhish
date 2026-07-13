import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { CONTACT } from '../lib/data';

export const Contact = () => {
  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          overline="Contact"
          title="Let's build something category-defining."
          subtitle="Whether it's positioning, a launch, or a full GTM build — happy to jam. Reach out on LinkedIn or via email."
          align="center"
          testId="contact-heading"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="h-12 w-12 rounded-xl brand-gradient flex items-center justify-center text-white">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Connect</div>
              <div className="font-display font-bold text-lg mt-1">LinkedIn</div>
              <div className="text-sm text-muted-foreground">linkedin.com/in/adhish-kacker-79b85950</div>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            data-testid="contact-email"
            className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="h-12 w-12 rounded-xl brand-gradient flex items-center justify-center text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</div>
              <div className="font-display font-bold text-lg mt-1">Drop a line</div>
              <div className="text-sm text-muted-foreground break-all">{CONTACT.email}</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
