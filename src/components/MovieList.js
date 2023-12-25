import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesData from './moviesData.json';
import Pagination from './Pagination';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 12;
  const pagesVisited = pageNumber * moviesPerPage;

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => (
      <li key={movie.Id} className="movie-item">
        <Link to={`/movies/${movie.Id}`}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>
        </Link>          
          <p>Año: {movie.Year}</p>
      </li>
    ));

  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <ul className="movie-list">{displayMovies}</ul>
      <Pagination pageCount={pageCount} onPageChange={changePage} />
    </div>
  );
};

export default MovieList;
