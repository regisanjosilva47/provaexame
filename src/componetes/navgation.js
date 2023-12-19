import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/about">Página Sobre</Link></li>
        <li><Link to="/contact">Página de Contato</Link></li>
        <li><Link to="/products">Lista de Produtos/Serviços</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;