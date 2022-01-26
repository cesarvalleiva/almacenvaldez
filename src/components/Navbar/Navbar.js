import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
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
            <div className='menu'>
                <div>
                    <i className="fas fa-bars ms-2 me-2"></i>
                    <Link to="/home"><img src={require('../../assets/img/logoalmacen.png')} alt="Logo Almacen Valdez"/></Link>
                </div>
                <div className='cerrarSesion'>
                    <div className='d-flex'>
                        {carrito.length === 0 ? '' : <p className='cantidadCarrito'>{carrito.length}</p>}
                        <Link to="/carrito"><i className="fas fa-shopping-cart violetaFondo"></i></Link>
                    </div>
                    <i className="fas fa-power-off" onClick={() => cerrarSesion()}></i>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;