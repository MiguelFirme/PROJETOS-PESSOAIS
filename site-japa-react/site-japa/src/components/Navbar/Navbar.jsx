import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">Murilo G. Firme</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Usando o caminho /# garante que ele tente voltar para a home */}
        <li><a href="/#portfolio">Portfólio</a></li>
        <li><a href="/#bio">Sobre</a></li>
        <li><a href="/#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;