import React from 'react';
import Logo from './Logo';
import Menu from './Menu'; 
import '../App.css';

const Header = ({ cartItems }) => {
  return (
    <header className='App-header'>
      <Logo className='App-logo' /> Alquiler de Peliculas
      <Menu /> 
    </header>
  );
};

export default Header;
