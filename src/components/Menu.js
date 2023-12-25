import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link to="/">Inicio</Link>
      <Link to="/movies">Peliculas</Link>
      <Link to="/series">Series</Link>
      <Link to="/novelties">Novedades</Link>
    </>
  );
};

export default Menu;
