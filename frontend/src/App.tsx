import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';

const App: React.FC = () =>  {
  return (
    <div className="container">    
    <Header />  
      <Routes>
        <Route path='/Home' element={<Home />} />        
      </Routes>
    </div>
  );
}

export default App;
