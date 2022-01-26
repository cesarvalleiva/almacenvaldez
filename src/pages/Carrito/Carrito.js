import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {altura, carrito, setCarrito} = useContext(Context);

    const eliminarDelCarrito = id => {
        
        Swal.fire({
            title: 'Deseas eliminarlo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCarrito(carrito.filter(prod => prod.id !== id))
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto eliminado',
                showConfirmButton: false,
                timer: 1500
            })
            }
          })
    }

    const vaciarCarrito = () => {
        
        Swal.fire({
            title: 'Deseas vaciar el carrito?',
            text: "Se perderán todos los productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              setCarrito([])
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Carrito eliminado',
                showConfirmButton: false,
                timer: 1500
            })
            }
          })
    }

    const  calcularTotal = (precio, cantidad) => {
        return precio*cantidad
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className='contenedorProducto'>
                {carrito.length > 0 ? <h3 className='w-100 text-center mb-4 mt-3'>Carrito</h3> : ''}
                {carrito.length > 0 ? <button className='btn btn-danger' onClick={() => vaciarCarrito()}>vaciar carrito</button> : ''}
                {carrito.length > 0 ?
                    <div className='contenedorProductosCarrito'>
                        {carrito.map(producto => (
                            <div key={producto.id} className='contenedorProductoCarrito shadow'>
                                <div className='contenedorImagenCarrito'>
                                    <img src={require(`../../assets/img/${producto.imagen}.png`)} alt={producto.nombre} />
                                </div>
                                <div className='productoCarrito'>
                                    <p>{producto.nombre}</p>
                                    <div className='contenedorUnidadesPrecioTotal'>
                                        <div className='cantidadEnCarrito'>{producto.cantidad} unid.</div>
                                        <div className='precioUnitarioCarrito'>$ {producto.precio}</div>
                                        <div className='precioTotalProductoCarrito'>$ {calcularTotal(producto.precio, producto.cantidad)}</div>
                                    </div>
                                </div>
                                <div className='eliminarDelCarrito'>
                                    <i className="fas fa-trash-alt" onClick={() => eliminarDelCarrito(producto.id)}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                :
                    <p className="textoCarritoVacio nombreProducto">No hay productos</p>
                }
            </div>
        </div>
     );
}
 
export default Carrito;