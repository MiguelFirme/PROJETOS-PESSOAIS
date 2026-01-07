import React from 'react';
import { Link } from 'react-router-dom';
import './GaleriaStudio.css';

// CAMINHO CORRIGIDO: Saindo de Galerias/Portfolio/components/src para chegar em Imagens
import foto1 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6705.jpg';
import foto2 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6733.jpg';
import foto3 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6741.jpg';
import foto4 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6746.jpg';
import foto5 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6845.jpg';
import foto6 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6931.jpg';
import foto7 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6943.jpg';
import foto8 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_6963.jpg';
import foto9 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/IMG_7131.jpg';
import foto10 from '../../../Imagens/FotosPortfolio/GaleriaEnsaios/Foto2.jpg';

const externaImages = [
  { id: 1, url: foto10, title: 'Evento 01' },
  { id: 2, url: foto1, title: 'Evento  02' },
  { id: 3, url: foto2, title: 'Evento  03' },
  { id: 4, url: foto3, title: 'Evento  04' },
  { id: 5, url: foto4, title: 'Evento  05' },
  { id: 6, url: foto5, title: 'Evento  06' },
  { id: 7, url: foto6, title: 'Evento  07' },
  { id: 8, url: foto7, title: 'Evento  08' },
  { id: 9, url: foto8, title: 'Evento  09' },
  { id: 10, url: foto9, title: 'Evento  10' }
];

const GaleriaStudio = () => {
  return (
    <div className="galeria-container">
      <header className="galeria-header">
        <Link to="/" className="back-button">← Voltar para Home</Link>
        <h1>Fotografias De Estudio</h1>
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
export default GaleriaStudio;