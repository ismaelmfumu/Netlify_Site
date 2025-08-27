import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

import RevealOnScroll from './components/RevealOnScroll'; // Import it

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <RevealOnScroll><Home /></RevealOnScroll>
        <section id="about"><RevealOnScroll><About /></RevealOnScroll></section>
        <section id="skills"><RevealOnScroll><Skills /></RevealOnScroll></section>
        <section id="projects"><RevealOnScroll><Projects /></RevealOnScroll></section>
        <section id="experience"><RevealOnScroll><Experience /></RevealOnScroll></section>
        <section id="education"><RevealOnScroll><Education /></RevealOnScroll></section>
        <section id="contact"><RevealOnScroll><Contact /></RevealOnScroll></section>
      </main>
    </div>
  );
}

export default App;
