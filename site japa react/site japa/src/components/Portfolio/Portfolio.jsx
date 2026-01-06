import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se que está instalado
import './Portfolio.css';

// Importação das suas fotos
import foto1 from '../../Imagens/FotosPortfolio/Foto1.jpg';
import foto2 from '../../Imagens/FotosPortfolio/Foto2.jpg';
import foto3 from '../../Imagens/FotosPortfolio/Foto3.jpg';

const images = [
  { id: 1, title: 'Ensaios Externos', url: foto1, path: '/galeria-externa', delay: 0 },
  { id: 2, title: 'Ensaios em Studio', url: foto2, path: '/galeria-studio', delay: 200 },
  { id: 3, title: 'Eventos', url: foto3, path: '/galeria-eventos', delay: 400 },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-grid">
        {images.map((img) => (
          <Link 
            to={img.path} 
            key={img.id} 
            className="item" 
            data-aos="fade-up" 
            data-aos-delay={img.delay}
          >
            <img src={img.url} alt={img.title} />
            <div className="item-overlay">
              <span>{img.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;