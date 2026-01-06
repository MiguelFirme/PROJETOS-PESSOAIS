import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <section id="bio" className="bio">
      <div className="bio-img" data-aos="fade-right"></div>
      <div className="bio-text" data-aos="fade-left">
        <h2>A Arte do Olhar</h2>
        <p>Especializado em fotografia editorial e minimalista, transformo momentos comuns em narrativas visuais cinematográficas através de luz e sombra.</p>
      </div>
    </section>
  );
};

export default Bio;