import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const url = `/movies?search=${encodeURIComponent(searchTerm)}`;
    navigate(url);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center centered-content">
        <h2>Búsqueda de Películas</h2>
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Categoría
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">Acción</button>
            </li>
            <li>
              <button className="dropdown-item" type="button">Comedia</button>
            </li>
            <li>
              <button className="dropdown-item" type="button">Drama</button>
            </li>
            <li>
              <button className="dropdown-item" type="button">Suspenso</button>
            </li>
          </ul>
          <input type="text" placeholder="Buscar películas..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-control' />
          <button className="btn btn-outline-secondary" onClick={handleSearch}>BUSCAR</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
