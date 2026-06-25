import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const Resume = () => {
  const handle = (action) => {
    toast(`${action} Resume`, {
      description: 'Resume PDF will be available shortly. Reach out via the contact form for the latest copy.',
    });
  };

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
          <div className="absolute inset-0 noise opacity-20" />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-xs tracking-[0.2em] uppercase font-semibold opacity-80">Resume</div>
              <h2 className="font-display font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl mt-3 leading-tight">
                A snapshot of 11+ years building category-defining brands.
              </h2>
              <p className="mt-4 text-white/85 max-w-2xl">
                Full work history, certifications and case studies — packaged for hiring managers, founders and agency partners.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3">
              <Button
                data-testid="resume-view"
                onClick={() => handle('View')}
                className="rounded-full h-12 bg-white text-[#0B1020] hover:bg-white/90"
              >
                <Eye className="mr-2 h-4 w-4" /> View Resume
              </Button>
              <Button
                data-testid="resume-download"
                onClick={() => handle('Download')}
                variant="outline"
                className="rounded-full h-12 border-white text-white bg-transparent hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
