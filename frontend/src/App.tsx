import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/Movies/MovieDetails';

const App: React.FC = () =>  {
  return (
    <div className="flex flex-col min-h-screen">    
    <Header />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />        
        <Route path='/movie/details' element={<MovieDetails />} /> 
        {/* <Route path='/movie/details/checkout' element={<MovieDetails />} />  */}
      </Routes>
    <Footer />  
    </div>
  );
}

export default App;
