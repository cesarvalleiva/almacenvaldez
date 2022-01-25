import { useContext } from 'react';
import { Link } from 'react-router-dom';
import VolverAlHome from '../../components/VolverAlHome/VolverAlHome';
import { Context } from '../../store/appContext';
import './Pedidos.css'

const Pedidos = () => {
    const {altura} = useContext(Context);
    return ( 
        <div className='contenedorPedidos' style={{height: `${altura}px`}}>
            <VolverAlHome />
            <div className='contenedorListaPedidos'>
                <Link to="/producto/1">
                    <div className='cardProducto'>
                        <div className='nombreProducto'>
                            <img src={require('../../assets/img/remeraluna.png')} alt="Remera Luna" />
                            <p>Remera Luna</p>
                        </div>
                        <p>$1500</p>
                    </div>
                </Link>

                <div className='cardProducto'>
                    <div className='nombreProducto'>
                        <img src={require('../../assets/img/gorraroja.png')} alt="Gorra Roja" />
                        <p>Gorra Roja escudo negro</p>
                    </div>
                    <p>$1700</p>
                </div>

                <div className='cardProducto'>
                    <div className='nombreProducto'>
                        <img src={require('../../assets/img/gorraazul.png')} alt="Gorra Azul" />
                        <p>Gorra Azul escudo negro</p>
                    </div>
                    <p>$1700</p>
                </div>
            </div>
        </div>
     );
}
 
export default Pedidos;