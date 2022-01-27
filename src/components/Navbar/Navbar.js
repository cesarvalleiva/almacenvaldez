import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css'

const Navbar = () => {
    const {carrito, handleMenu} = useContext(Context)

    return ( 
        <div className='contenedorNavbar'>
            <div className='menu shadow'>
                <div className='contenedorIconoMenuLogo'>
                    <i className="fas fa-bars" onClick={() => handleMenu()}></i>
                    <Link to="/home"><img src={require('../../assets/img/logoalmacenblanco.png')} alt="Logo Almacen Valdez"/></Link>
                </div>
                <div className='contenedorCarrito'>
                    <Link to="/carrito">
                        <div className='d-flex'>
                            {carrito.length === 0 ? '' : <p className='cantidadCarrito'>{carrito.length}</p>}
                            <i className="fas fa-shopping-cart violetaFondo"></i>
                        </div>
                    </Link>
                </div>
            </div>
            <Sidebar />
        </div>
     );
}
 
export default Navbar;