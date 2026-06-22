import { useEffect, useState } from 'react';
import Background from './components/Background';
import CodeBackground from './components/CodeBackground';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './pages/CaseStudy';

function getRoute() {
  const hash = window.location.hash;
  const match = hash.match(/^#\/case-study\/([\w-]+)/);
  if (match) return { page: 'case-study', id: match[1] };
  return { page: 'home', id: null };
}

function HomePage() {
  return (
    <>
      <Background />
      <CodeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Academic />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <>
      <Analytics />
      {route.page === 'case-study' ? <CaseStudy id={route.id} /> : <HomePage />}
    </>
  );
}
