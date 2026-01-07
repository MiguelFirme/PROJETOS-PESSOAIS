import React from 'react';
import { Link } from 'react-router-dom';
import './GaleriaExterna.css';

// CAMINHO CORRIGIDO: Saindo de Galerias/Portfolio/components/src para chegar em Imagens
import foto1 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5345.jpg';
import foto2 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5371.jpg';
import foto3 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5379.jpg';
import foto4 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5678.jpg';
import foto5 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5811.jpg';
import foto6 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5884.jpg';
import foto7 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A5898.jpg';
import foto8 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A6008.jpg';
import foto9 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A6143.jpg';
import foto10 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A6204.jpg';
import foto11 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A6248.jpg';
import foto12 from '../../../Imagens/FotosPortfolio/GaleriaEventos/2H9A6296.jpg';
import foto13 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5026.jpg';
import foto14 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5030.jpg';
import foto15 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5059.jpg';
import foto16 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5129.jpg';
import foto17 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5147.jpg';
import foto18 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5225.jpg';
import foto19 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5248.jpg';
import foto20 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5363.jpg';
import foto21 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5731.jpg';
import foto22 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5741.jpg';
import foto23 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_5861.jpg';
import foto24 from '../../../Imagens/FotosPortfolio/GaleriaEventos/IMG_9716.jpg';

const externaImages = [
  { id: 1, url: foto1, title: 'Evento 01' },
  { id: 2, url: foto2, title: 'Evento  02' },
  { id: 3, url: foto3, title: 'Evento  03' },
  { id: 4, url: foto4, title: 'Evento  04' },
  { id: 5, url: foto5, title: 'Evento  05' },
  { id: 6, url: foto6, title: 'Evento  06' },
  { id: 7, url: foto7, title: 'Evento  07' },
  { id: 8, url: foto8, title: 'Evento  08' },
  { id: 9, url: foto9, title: 'Evento  09' },
  { id: 10, url: foto10, title: 'Evento  10' },
  { id: 11, url: foto11, title: 'Evento  11' },
  { id: 12, url: foto12, title: 'Evento  12' },
  { id: 13, url: foto13, title: 'Evento  13'},
  { id: 14, url: foto14, title: 'Evento  14' },
  { id: 15, url: foto15, title: 'Evento  15' },
  { id: 16, url: foto16, title: 'Evento  16' },
  { id: 17, url: foto17, title: 'Evento  17' },
  { id: 18, url: foto18, title: 'Evento  18' },
  { id: 19, url: foto19, title: 'Evento  19' },
  { id: 20, url: foto20, title: 'Evento  20' },
  { id: 21, url: foto21, title: 'Evento  21' },
  { id: 22, url: foto22, title: 'Evento  22' },
  { id: 23, url: foto23, title: 'Evento  23' },
  { id: 24, url: foto24, title: 'Evento  24' },
];

const GaleriaEventos = () => {
  return (
    <div className="galeria-container">
      <header className="galeria-header">
        <Link to="/" className="back-button">← Voltar para Home</Link>
        <h1>Fotografias Eventos</h1>
      </header>

      <div className="galeria-grid">
        {externaImages.map((img) => (
          <div key={img.id} className="galeria-item">
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaEventos;