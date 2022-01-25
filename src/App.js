import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from './store/appContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Pedidos from './pages/Pedidos/Pedidos';
import Navbar from './components/Navbar/Navbar';
import Producto from './pages/Producto';
import './App.css';

function App() {
  const { usuario } = useContext(Context);
  return (
      <Router>
        {usuario ? <Navbar /> : ''}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={usuario ? <Home /> : <Navigate to="/" />} />
          <Route path="/pedidos" element={usuario ? <Pedidos /> : <Navigate to="/" />} />
          <Route path="/producto/:id" element={usuario ? <Producto /> : <Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
