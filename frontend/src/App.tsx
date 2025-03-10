import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/Movies/MovieDetails';
import Checkout from './components/Movies/Checkout';
import Success from './components/Page/Success';
import Cancel from './components/Page/Cancel';
import { useMovieStore } from './components/store/useGloblaStore';

const App: React.FC = () =>  {
  const fetchMovies = useMovieStore((state) => state.fetchMovies);

  useEffect(() => {
    fetchMovies(); // Load movies on app start
  }, [fetchMovies]);

  
  return (
    <div className="flex flex-col min-h-screen">    
    <Header />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />        
        <Route path='/movie/details/:id' element={<MovieDetails />} /> 
        <Route path='/movie/details/checkout' element={<Checkout />} /> 
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />
      </Routes>
    <Footer />  
    </div>
  );
}

export default App;
