import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Singlepost from './components/Singlepost';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Singlepost' element={<Singlepost />} />
        </Routes>
    </div>
  );
}

export default App;
