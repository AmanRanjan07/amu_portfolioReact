import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-background text-foreground transition-colors duration-300 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
