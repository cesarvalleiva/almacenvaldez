import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import { motion } from 'framer-motion';
import './Producto.css'

const Producto = () => {
    const {altura} = useContext(Context);
    const [talle, setTalle] = useState('')
    const [color, setColor] = useState('Seleccionar')

    const cambiarTalle = (e) => {
        setColor('Seleccionar')
        setTalle(e.target.value)
        console.log(talle);
        console.log(color);
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit = {{ opacity: 0}}>
            <div className='containerProducto' style={{height: `${altura}px`}}>
                <div className='contenedorProducto shadow'>
                    <Link to="/home" className='volverAlHome ms-1'><i className="fas fa-arrow-left"></i> Volver</Link>
                    <div className="card cardProducto">
                        <img src={require('../../assets/img/remeralunanegra.png')} className="card-img-top" alt="remera luna" />
                        <div className="card-body cuerpoDetalleProducto">
                            <h5 className="card-title tituloProducto">
                                Remera Luna
                                <p>$ 1600</p>
                            </h5>
                            <div className='contenedorTallesDetalleProducto'>
                                <div className='contenedorTalle'>
                                    <p>Talle: </p>
                                    <select className="w-75 form-select" aria-label="Default select example" onChange={(e) => cambiarTalle(e)}>
                                        <option defaultValue>Elegir talle</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                    </select>
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button className="btn btn-agregar" type="button">Agregar</button>
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