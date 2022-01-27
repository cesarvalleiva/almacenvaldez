import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Navbar.css'

const Navbar = () => {
    let navigate = useNavigate()
    const {setUsuario, carrito} = useContext(Context)

    const cerrarSesion = () => {
        localStorage.removeItem('usuario')
        setUsuario(false)
        navigate('/');
    }

    return ( 
        <div className='contenedorNavbar'>
            <div className='menu shadow'>
                <div className='contenedorIconoMenuLogo'>
                    <i className="fas fa-bars"></i>
                    <Link to="/home"><img src={require('../../assets/img/logoalmacenblanco.png')} alt="Logo Almacen Valdez"/></Link>
                </div>
                <div className='cerrarSesion'>
                    <Link to="/carrito">
                        <div className='d-flex'>
                            {carrito.length === 0 ? '' : <p className='cantidadCarrito'>{carrito.length}</p>}
                            <i className="fas fa-shopping-cart violetaFondo"></i>
                        </div>
                    </Link>
                    {/* <i className="fas fa-power-off violetaFondo" onClick={() => cerrarSesion()}></i> */}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;