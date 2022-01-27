import React, { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Context } from './store/appContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Producto from './pages/Producto';
import './App.css';
import Carrito from './pages/Carrito';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  const { usuario } = useContext(Context);
  return (
    <>
      {usuario ? <Navbar /> : ''}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={usuario ? <Home /> : <Navigate to="/" />} />
          <Route path="/carrito" element={usuario ? <Carrito /> : <Navigate to="/" />} />
          <Route path="/:id" element={usuario ? <Producto /> : <Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
