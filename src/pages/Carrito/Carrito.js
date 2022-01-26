import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from '../../store/appContext';
import './Carrito.css'

const Carrito = () => {
    const {altura, carrito, setCarrito} = useContext(Context);
    const navigate = useNavigate();

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

    const calcularTotal = (precio, cantidad) => {
        return precio*cantidad
    }

    const confirmacionPedidoMercadopago = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido confirmado',
            showConfirmButton: false,
            timer: 1500
        })
        setCarrito([])
        navigate('/home')
    }

    const confirmacionPedidoEnEfectivo = () => {
        Swal.fire({
            title: 'Confirmar pedido?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto confirmado',
                showConfirmButton: false,
                timer: 1500
              })
              setCarrito([])
              navigate('/home')
            }
        })
    }

    const calcularTotalCarritoEfectivo = () => {
        let total = 0;
        carrito.map(prod => (
            total += prod.precio*prod.cantidad
        ))

        return total.toFixed(0);
    }

    const calcularTotalCarritoMercadopago = () => {
        let total = 0;
        carrito.map(prod => (
            total += prod.precio*prod.cantidad
        ))

        return (total*1.10).toFixed(0);
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className='contenedorProducto'>
                <Link to="/home" className='volverAlHome'><i className="fas fa-arrow-left"></i> Volver</Link>
                {carrito.length > 0 ? 
                    <div className='w-100 d-flex justify-content-between align-items-center'>
                        <h3 className='mb-4 mt-3'>Carrito</h3>
                        <button className='btn btn-danger btn-sm btn-vaciarCarrito' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    </div>
                : ''}
                {carrito.length > 0 ?
                    <div className='contenedorProductosCarrito'>
                        <div>
                            {carrito.map(producto => (
                                <div key={producto.id} className='contenedorProductoCarrito shadow'>
                                    <div className='contenedorImagenCarrito'>
                                        <img src={require(`../../assets/img/${producto.imagen}.png`)} alt={producto.nombre} />
                                    </div>
                                    <div className='productoCarrito'>
                                        <p className='tituloProductoCarrito'>{producto.nombre}</p>
                                        <div className='contenedorUnidadesPrecioTotal'>
                                            <div className='cantidadEnCarrito'><p>Cant.</p>{producto.cantidad} unid.</div>
                                            <div className='precioUnitarioCarrito'><p>Unitario</p>$ {producto.precio}</div>
                                            <div className='precioTotalProductoCarrito'><p>Total</p>$ {calcularTotal(producto.precio, producto.cantidad)}</div>
                                            <div className='eliminarDelCarrito'>
                                                <i className="fas fa-trash-alt" onClick={() => eliminarDelCarrito(producto.id)}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='contenedorBotonesPago'>
                            <button className='btn btn-pago btn-mercadopago' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src={require(`../../assets/img/mercadopago.png`)} alt="Mercado pago" />
                                <p>$ {calcularTotalCarritoMercadopago()}</p>
                            </button>
                            <button className='btn btn-pago btn-efectivo' onClick={() => confirmacionPedidoEnEfectivo()}>Efectivo: $ {calcularTotalCarritoEfectivo()}</button>
                        </div>
                    </div>
                :
                    <p className="textoCarritoVacio nombreProducto">No hay productos</p>
                }
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Abonar con mercadopago</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body qrmercadopago">
                        <img src={require(`../../assets/img/qrmercadopago.png`)} alt="qr mercadopago" />
                        <h2>$ 2660</h2>
                    </div>
                    <div className="modal-footer">
                        <div className="w-100 d-grid gap-2">
                            <button className="btn btn-success" type="button" data-bs-dismiss="modal" onClick={() => confirmacionPedidoMercadopago()}>Pedido confimado</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Carrito;