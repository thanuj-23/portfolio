import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import AllCertifications from './components/AllCertifications';
import Skills from './components/Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';


// Home Component wrapping all main sections
const Home = () => {
  return (
    <>
      <div className="liquid-blob"></div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    // Disable Right Click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable Common Shortcut Keys (F12, Ctrl+U, Ctrl+Shift+I, Ctrl+S, Ctrl+P)
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        e.key === 'PrintScreen' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U') ||
        (e.ctrlKey && e.key === 'S') ||
        (e.ctrlKey && e.key === 'P')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<AllCertifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
