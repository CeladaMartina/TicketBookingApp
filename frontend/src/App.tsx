import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () =>  {
  return (
    <div className="flex flex-col min-h-screen">    
    <Header />  
      {/* <Routes>
        <Route path='/Home' element={<Home />} />        
      </Routes> */}
    <Footer />  
    </div>
  );
}

export default App;
