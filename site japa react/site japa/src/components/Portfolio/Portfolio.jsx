import React from 'react';
import './Portfolio.css';
import foto1 from '../../Imagens/FotosPortfolio/Foto1.jpg';
import foto2 from '../../Imagens/FotosPortfolio/Foto2.jpg';
import foto3 from '../../Imagens/FotosPortfolio/Foto3.jpg';

const images = [
  { id: 1, title: 'Ensaios Externos', url: foto1, delay: 0 },
  { id: 2, title: 'Ensaios em Studio', url: foto2, delay: 200 },
  { id: 3, title: 'Eventos', url: foto3, delay: 400 },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-grid">
        {images.map((img) => (
          <div key={img.id} className="item" data-aos="fade-up" data-aos-delay={img.delay}>
            <img src={img.url} alt={img.title} />
            <div className="item-overlay">{img.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;