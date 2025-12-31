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
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<AllCertifications />} />
      </Routes>
    </Router>
  );
}

export default App;
