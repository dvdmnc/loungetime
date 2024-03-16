import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Musiciens from './pages/Musiciens';
import Robinson from './pages/Robinson';
import Photos from './pages/Photos';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/musiciens' element={<Musiciens />} />
      <Route path='/mrs-robinson-band' element={<Robinson />} />
      <Route path='/photos' element={<Photos />} />
      <Route path='/agenda' element={<Agenda />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
