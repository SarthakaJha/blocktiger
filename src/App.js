import React from 'react';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Services from './Components/Services.js';
import Status from './Pages/Status.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Services' element={<Services />}></Route>
        <Route path='/Status' element={<Status />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
