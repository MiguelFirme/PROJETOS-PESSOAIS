import React from 'react';
import { Link } from 'react-router-dom';
import './GaleriaExterna.css';

// CAMINHO CORRIGIDO: Saindo de Galerias/Portfolio/components/src para chegar em Imagens
import foto1 from '../../../Imagens/FotosPortfolio/Foto1.jpg';

const externaImages = [
  { id: 1, url: foto1, title: 'Ensaio Externo 01' },
  { id: 2, url: foto1, title: 'Ensaio Externo 02' }, 
  { id: 3, url: foto1, title: 'Ensaio Externo 03' },
];

const GaleriaExterna = () => {
  return (
    <div className="galeria-container">
      <header className="galeria-header">
        <Link to="/" className="back-button">← Voltar para Home</Link>
        <h1>Ensaios Externos</h1>
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

export default GaleriaExterna;