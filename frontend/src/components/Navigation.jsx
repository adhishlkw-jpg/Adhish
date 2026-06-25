import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_LINKS } from '../lib/data';
import { Button } from './ui/button';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Navigation = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_1px_0_0_rgba(0,0,0,0.04)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <button
          data-testid="nav-logo"
          onClick={() => scrollTo('home')}
          className="font-display font-bold text-lg tracking-tight"
        >
          Adhish<span className="brand-gradient-text">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            data-testid="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:bg-secondary transition"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button
            data-testid="nav-cta-book"
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex rounded-full px-5 brand-gradient text-white hover:opacity-90"
          >
            Book a Conversation
          </Button>

          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border" data-testid="nav-mobile-menu">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-mobile-link-${l.id}`}
                onClick={() => { scrollTo(l.id); setOpen(false); }}
                className="text-left py-2 text-sm font-medium"
              >
                {l.label}
              </button>
            ))}
            <Button
              data-testid="nav-mobile-cta"
              onClick={() => { scrollTo('contact'); setOpen(false); }}
              className="rounded-full brand-gradient text-white"
            >
              Book a Conversation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
