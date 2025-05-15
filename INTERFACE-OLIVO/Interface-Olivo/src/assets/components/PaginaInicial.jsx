import { Link } from 'react-router-dom';
import './paginaInicial.css';

export default function PaginaInicial() {
  return (
    <div className="pagina-inicial">
      <h1 className="pagina-inicial-h1">Bem-vindo</h1>
      <h2 className="pagina-inicial-h2">Sistema de Consulta</h2>
      <Link to="/consulta">
        <button className="pagina-inicial-button">Ir para Consulta NF</button>
      </Link>
    </div>
  );
}
