import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bio from "./components/Bio/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import GaleriaExterna from "./components/Portfolio/Galerias/GaleriaExterna"; 
import GaleriaEventos from "./components/Portfolio/Galerias/GaleriaEventos";
import GaleriaStudio from "./components/Portfolio/Galerias/GaleriaStudio";

import './App.css';

// Componente para resetar o scroll ao trocar de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <Bio />
    <Portfolio />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Isso garante que a galeria abra no topo */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria-externa" element={<GaleriaExterna />} />
          <Route path="/galeria-eventos" element={<GaleriaEventos />} />
          <Route path="/galeria-studio" element={<GaleriaStudio />} />
        </Routes>
        
        <footer>
          &copy; {new Date().getFullYear()} LUX.PHOTO - TODOS OS DIREITOS RESERVADOS
        </footer>
      </div>
    </Router>
  );
}

export default App;