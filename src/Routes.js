// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Novelties from './pages/Novelties';
import MovieDetail from './pages/MovieDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/novelties" element={<Novelties />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AppRoutes;
