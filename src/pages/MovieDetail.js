import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayMovie from '../components/PlayVideo';
import moviesData from '../components/moviesData.json';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = moviesData.find(movie => String(movie.Id) === id);
    setMovie(selectedMovie);
  }, [id]);

  return (
    <div>
      <div className='row'>
      <h2>{movie ? movie.Title : 'No se encontró la película'}</h2>
      <div className='col-7'>
        {movie && <PlayMovie movieID={movie.Id} />}
      </div>
      <div className='col-5'>
        <h2>Titulo: {movie ? movie.Title : ''}</h2>
        <p>Año: {movie ? movie.Year : ''}</p>
        <p>Director: {movie ? movie.Director : ''}</p>
        <p>Actors: {movie ? movie.Actors : ''}</p>
        <p>{movie ? movie.Plot : ''}</p>

        <button className="btn btn-primary">Alquilar Película</button>
        
      </div>
      </div>
    </div>
  );
};

export default MovieDetail;
