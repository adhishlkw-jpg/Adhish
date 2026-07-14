import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { CONTACT } from '../lib/data';

export const Resume = () => {
  return (
    <section id="resume" data-testid="resume-section" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border brand-gradient p-10 lg:p-16 text-white"
        >
          <div className="absolute inset-0 noise opacity-20 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-xs tracking-[0.2em] uppercase font-semibold opacity-80">Resume</div>
              <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
                A snapshot of 10+ years building category-defining brands.
              </h2>
              <p className="mt-4 text-white/85 max-w-2xl">
                Full work history, certifications and case studies — packaged for hiring managers, founders and agency partners.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-view"
                className="inline-flex items-center justify-center rounded-full h-12 bg-white text-[#0B1020] hover:bg-white/90 transition px-5 font-semibold text-sm"
              >
                <Eye className="mr-2 h-4 w-4" /> View Resume
              </a>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-download"
                download
                className="inline-flex items-center justify-center rounded-full h-12 border border-white text-white bg-transparent hover:bg-white/10 transition px-5 font-semibold text-sm"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
