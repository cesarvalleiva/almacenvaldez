import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Sidebar.css'

const Sidebar = () => {
    const {menu, handleMenu, setUsuario, altura} = useContext(Context);
    let navigate = useNavigate()

     const cerrarSesion = () => {
        localStorage.clear();
        setUsuario(false)
        navigate('/');
    }

    return (
        <>
            <div className={`sidebar ${menu ? "openSidebar" : ""}`} onClick={handleMenu} style={{height: `${altura}px`}}>
                <h2>Menu</h2>
                <div className='contenedorOpcionesSidebar'>
                    <ul>
                        <Link to="/home"><li><i className="fas fa-store"></i>Productos</li></Link>
                        <Link to ="/ventas"><li><i className="fas fa-tags"></i>Ventas</li></Link>
                        <Link to="/carrito"><li><i className="fas fa-shopping-cart"></i>Carrito</li></Link>
                        <li><i className="fas fa-dollar-sign"></i>Liquidar</li>
                    </ul>
                    <div className='cerrarSesion' onClick={() => cerrarSesion()}>
                        <i className="fas fa-power-off"></i><p>Cerrar sesión</p>
                    </div>
                </div>
            </div>
            <div className={`${menu ? "fondoNegroCarrito" : ""}`} onClick={handleMenu}></div>
        </>
    );
}
 
export default Sidebar;