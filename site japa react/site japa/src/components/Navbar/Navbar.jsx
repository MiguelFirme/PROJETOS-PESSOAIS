import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Murilo G. Firme</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#bio">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;