import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Work } from '@/components/Work';
import { CaseStudies } from '@/components/CaseStudies';
import { Articles } from '@/components/Articles';
import { Metrics } from '@/components/Metrics';
import { Testimonials } from '@/components/Testimonials';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Adhish Kacker — Senior Product Marketing & GTM Leader';
  }, []);

  return (
    <div className="App font-body" data-testid="home-page">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <CaseStudies />
        <Articles />
        <Metrics />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
