import { useContext, useEffect } from 'react';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {altura, carrito, setCarrito} = useContext(Context);

    const vaciarCarrito = () => {
        setCarrito([])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className='contenedorProducto'>
                <button className='btn btn-danger' onClick={() => vaciarCarrito()}>vaciar carrito</button>
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