import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm, category) => {
    const url = `/movies?search=${encodeURIComponent(searchTerm)}&category=${category}`;
    navigate(url);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center centered-content">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
