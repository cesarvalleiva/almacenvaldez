import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Producto.css'

const Producto = () => {
    const {altura} = useContext(Context);
    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className='contenedorProducto'>
                <Link to="/">Volver</Link>
                <div className="card cardProducto border-0">
                    <img src={require('../../assets/img/remeraluna.png')} className="card-img-top" alt="remera luna" />
                    <div className="card-body cuerpoDetalleProducto">
                        <h5 className="card-title d-flex justify-content-between mb-3">Remera Luna <p>$ 1600</p></h5>
                        <div className='contenedorTallesDetalleProducto'>
                            <div className='contenedorTalleCantidad'>
                                <p>S</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                            <div className='contenedorTalleCantidad'>
                                <p>M</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                            <div className='contenedorTalleCantidad'>
                                <p>L</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                            <div className='contenedorTalleCantidad'>
                                <p>XL</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                            <div className='contenedorTalleCantidad'>
                                <p>XXL</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                            <div className='contenedorTalleCantidad'>
                                <p>XXXL</p>
                                <div>
                                    <button className='btn btn-ajustar-cantidad me-3 pt-1 pb-1 ps-3 pe-3'>-</button>
                                    0
                                    <button className='btn btn-ajustar-cantidad ms-3 pt-1 pb-1 ps-3 pe-3'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Producto;