import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bio from "./components/Bio/Bio";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bio />
      <Portfolio />
      <Contact />
      <footer>
        &copy; {new Date().getFullYear()} LUX.PHOTO - TODOS OS DIREITOS RESERVADOS
      </footer>
    </div>
  );
}

export default App;