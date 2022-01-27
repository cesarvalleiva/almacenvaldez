import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Sidebar.css'

const Sidebar = () => {
    const {menu, handleMenu, setUsuario} = useContext(Context);
    let navigate = useNavigate()

     const cerrarSesion = () => {
        localStorage.clear();
        setUsuario(false)
        navigate('/');
    }

    return (
        <>
            <div className={`sidebar ${menu ? "openSidebar" : ""}`} onClick={handleMenu}>
                <h2>Menu</h2>
                <div className='contenedorOpcionesSidebar'>
                    <ul>
                        <li>Ventas</li>
                        <li>Liquidar</li>
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