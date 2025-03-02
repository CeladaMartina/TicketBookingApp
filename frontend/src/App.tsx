import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Movie from './components/Movie Section/Movie';
import Container from './components/Body Section/Container';

const App: React.FC = () =>  {
  return (
    <div className="App">
      <h1 className='text-xl font-bold text-red-500'>Hello</h1>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/container' element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
