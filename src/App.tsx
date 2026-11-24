import React from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { TerminalSection } from '@/sections/TerminalSection';
import { About } from '@/sections/About';
import { SelectedWorks } from '@/sections/SelectedWorks';
import { TechnicalArsenal } from '@/sections/TechnicalArsenal';
import { Recognition } from '@/sections/Recognition';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/components/Footer';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div id="top" className="relative min-h-screen bg-[#090909] text-[#F5F5F5]">
        <ScrollProgress />
        <Navbar statusText="PORTFOLIO / 2026" />
        <main className="pt-14 md:pt-16">
          <Hero />
          <TerminalSection />
          <About />
          <SelectedWorks />
          <TechnicalArsenal />
          <Recognition />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
