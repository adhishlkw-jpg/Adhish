import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../lib/data';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => {
  return (
    <footer data-testid="footer" className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Let's Talk</div>
            <h3 className="font-display font-black tracking-tighter text-4xl sm:text-5xl leading-[1.05]">
              Building market narratives
              <br />
              that <span className="brand-gradient-text">drive growth.</span>
            </h3>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Site</div>
            <ul className="space-y-2 text-sm">
              {['case-studies', 'articles', 'resume', 'contact'].map((id) => (
                <li key={id}>
                  <button data-testid={`footer-link-${id}`} onClick={() => scrollTo(id)} className="hover:brand-gradient-text">
                    {id.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Connect</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a data-testid="footer-linkedin" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:brand-gradient-text">
                  <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a data-testid="footer-email" href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:brand-gradient-text">
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Adhish Kacker. All rights reserved.</div>
          <div>Senior Product Marketing & GTM Leader · SaaS · AI · AdTech</div>
        </div>
      </div>
    </footer>
  );
};
