import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Ventas.css'

const Ventas = () => {
    const {altura, ventas, calcularTotal} = useContext(Context);

    return ( 
        <div className='containerProducto' style={{height: `${altura}px`}}>
            <div className="contenedorProducto">
            <Link to="/home" className='volverAlHome'><i className="fas fa-arrow-left"></i> Volver</Link>
                <div className="accordion contenedorVenta" id="accordionExamplee">
                    {ventas.length > 0 ? 
                        ventas.map((venta, idx) => (
                            <div className="accordion-item contenedorTituloProducto shadow" key={idx}>
                                <h2 className="accordion-header" id={venta[0].nombre}>
                                    <button className="accordion-button collapsed contenedorVentaDetalle" type="button" data-bs-toggle="collapse" data-bs-target={`#${venta[0].id}`} aria-expanded="true" aria-controls={venta[0].id}>
                                        <div className='contenedorNumVentaYFormaPago'>
                                            <p className='numVenta'>Nº de venta: {idx+1}</p>
                                            <p className='d-flex align-items-center'>{venta[0].formapago === "efectivo" ? <><i className="far fa-money-bill-alt fa-lg iconoEfectivo"></i> Efectivo</> : <><img src={require(`../../assets/img/mercadopago.png`)} alt="Mercado pago" className='logomercadopagoventa' /> Mercadopago </>}</p>
                                        </div>
                                        <p className='totalVenta'>$ {venta[0].total}</p>
                                    </button>
                                </h2>
                                <div id={venta[0].id} className="accordion-collapse collapse" aria-labelledby={venta[0].nombre} data-bs-parent="#accordionExamplee">
                                    <div className="accordion-body">
                                        <div className='contenedorStockProdSinTalleColor'>
                                            {venta.map((ven, idx) => (
                                                <div key={idx} className='contenedorProductoCarrito shadow'>
                                                    <div className='contenedorImagenCarrito'>
                                                        <img src={require(`../../assets/img/${ven.imagen}.png`)} alt={ven.nombre} />
                                                    </div>
                                                    <div className='productoCarrito'>
                                                        <p className='tituloProductoCarrito'>{ven.nombre}</p>
                                                        <div className='contenedorUnidadesPrecioTotal'>
                                                            <div className='cantidadEnCarrito'><p>Cant.</p>{ven.cantidad} unid.</div>
                                                            <div className='precioUnitarioCarrito'><p>Unitario</p>$ {ven.precio}</div>
                                                            <div className='precioTotalProductoCarrito'><p>Total</p>$ {calcularTotal(ven.precio, ven.cantidad)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                        <p className="textoCarritoVacio nombreProducto">No hay ventas</p>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Ventas;