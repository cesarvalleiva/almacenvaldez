import { useContext } from 'react';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {altura, carrito} = useContext(Context);
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className='contenedorProducto'>
                {carrito.length > 0 ?
                    carrito.map(producto => (
                        <div key={producto.id}>
                            <p>{producto.nombre}</p>
                        </div>
                    ))
                :
                    <p>No hay productos</p>
                }
            </div>
        </div>
     );
}
 
export default Carrito;