import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Pitch } from '@/components/Pitch';
import { Expertise } from '@/components/Expertise';
import { CaseStudies } from '@/components/CaseStudies';
import { ProductDecks } from '@/components/ProductDecks';
import { Articles } from '@/components/Articles';
import { Metrics } from '@/components/Metrics';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Adhish Kacker — Senior Product Marketing, Brand & GTM Leader';
  }, []);

  return (
    <div className="App font-body" data-testid="home-page">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Pitch />
        <Expertise />
        <CaseStudies />
        <ProductDecks />
        <Articles />
        <Metrics />
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
