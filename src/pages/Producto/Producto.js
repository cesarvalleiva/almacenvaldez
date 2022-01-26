import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import { motion } from 'framer-motion';
import './Producto.css'

const Producto = () => {
    const {altura} = useContext(Context);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit = {{ opacity: 0}}>
            <div className='containerProducto' style={{height: `${altura}px`}}>
                <div className='contenedorProducto'>
                    <Link to="/home" className='volverAlHome'><i className="fas fa-arrow-left"></i> Volver</Link>
                    <div className="card cardProducto">
                        <img src={require('../../assets/img/remeralunanegra.png')} className="card-img-top" alt="remera luna" />
                        <div className="card-body cuerpoDetalleProducto">
                            <h5 className="card-title tituloProducto">
                                Remera Luna
                                <p>$ 1600</p>
                            </h5>
                            <div className='contenedorTallesDetalleProducto'>
                                <div className='contenedorColor'>
                                    <p>Color: </p>
                                    <select className="w-75 form-select" aria-label="Default select example">
                                        <option defaultValue>Elegir color</option>
                                        <option value="1">Negra</option>
                                        <option value="2">Blanca</option>
                                    </select>
                                </div>
                                <div className='contenedorTalle'>
                                    <p>Talle: </p>
                                    <select className="w-75 form-select" aria-label="Default select example">
                                        <option defaultValue>Elegir talle</option>
                                        <option value="1">S</option>
                                        <option value="2">M</option>
                                        <option value="1">L</option>
                                        <option value="1">XL</option>
                                        <option value="1">XXL</option>
                                        <option value="1">XXXL</option>
                                    </select>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button className="btn btn-success btn-agregar" type="button">Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Producto;