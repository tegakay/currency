import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Main } from './pages/Main';
import { Converter } from './pages/Converter';
import { About } from './pages/About';

function App() {
  return (
    <Routes>
      
        <Route path='/' element={<Main/>}/>
        <Route path='/convert' element={<Converter/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/main'  element={<Users/>}/> */}
      </Routes>
  );
}

export default App;
