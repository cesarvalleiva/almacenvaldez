import { useContext } from 'react';
import VolverAlHome from '../../components/VolverAlHome/VolverAlHome';
import { Context } from '../../store/appContext';
import './Producto.css'

const Producto = () => {
    const {altura} = useContext(Context);
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <VolverAlHome />
            <div className='contenedorProducto'>
                <div className="card cardProducto">
                    <img src={require('../../assets/img/remeraluna.png')} className="card-img-top" alt="remera luna" />
                    <div className="card-body">
                        <h5 className="card-title">Remera Luna</h5>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Producto;