import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store/appContext';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
import './Home.css'

const Home = () => {
    const {altura, carrito, setCarrito} = useContext(Context);
    let navigate = useNavigate()

    const productos = [
        {
            id: 1,
            nombre: "Remera Luna",
            precio: 1600,
            imagen: "remeraluna",
            tallecolor: true,
            stock: 20
        },
        {
            id: 2,
            nombre: "Remera Luna Negra",
            precio: 1600,
            imagen: "remeralunanegra",
            tallecolor: true,
            stock: 20
        },
        {
            id: 3,
            nombre: "Taza Valdez",
            precio: 1400,
            imagen: "tazavaldez",
            tallecolor: false,
            stock: 5
        },
        {
            id: 4,
            nombre: "Disco El Tiempo y La Serenata",
            precio: 1000,
            imagen: "discoeltiempoylaserenata",
            tallecolor: false,
            stock: 10
        },
        {
            id: 5,
            nombre: "Gorra Azul Escudo Amarillo",
            precio: 1700,
            imagen: "gorraazul",
            tallecolor: false,
            stock: 1
        },
        {
            id: 6,
            nombre: "Gorra Roja Escudo Negro",
            precio: 1700,
            imagen: "gorraroja",
            tallecolor: false,
            stock: 3
        },
        {
            id: 7,
            nombre: "Vaso Güira Clásico",
            precio: 1700,
            imagen: "vasoguira",
            tallecolor: false,
            stock: 2
        }
    ]

    const irAlCarrito = () => {
        navigate('/carrito')
    }

    const agregarAlCarrito = (producto) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1500
        })
        setCarrito([producto, ...carrito])
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
    return ( 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit = {{ opacity: 0}}>
            <div className='prueba'>
                <p>Por favor ingresá desde el celular 📱</p>
            </div>
            <div className='contenedorHome' style={{height: `${altura}px`}}>
                <div className='secciones'>
                    <div className="accordion w-100" id="accordionExample">
                        {productos.length > 0 ? 
                            productos.map(producto => (
                                producto.stock > 0 ?
                                    <div className="accordion-item contenedorTituloProducto shadow" key={producto.id}>
                                        <h2 className="accordion-header" id={producto}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${producto.imagen}`} aria-expanded="true" aria-controls={producto.imagen}>
                                                <div className='contenedorTituloYPrecio'>
                                                    <div className='d-flex align-items-center'>
                                                        <img src={require(`../../assets/img/${producto.imagen}.png`)} alt={producto.nombre} />
                                                        <p className='ms-2 nombreProducto'>{producto.nombre}</p>
                                                    </div>
                                                    <p className='precioProducto'>$ {producto.precio}</p>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id={producto.imagen} className="accordion-collapse collapse" aria-labelledby={producto} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='w-100'>
                                                    {producto.tallecolor ?
                                                        <>
                                                            <div className='contenedorTalles'>
                                                                <div className='talle'>S</div>
                                                                <div className='talle'>M</div>
                                                                <div className='talle'>L</div>
                                                                <div className='talle'>XL</div>
                                                                <div className='talle'>XXL</div>
                                                                <div className='talle'>XXXL</div>
                                                            </div>
                                                            <div className='contenedorTalles'>
                                                                <div className='cantidad'>3</div>
                                                                <div className='cantidad'>10</div>
                                                                <div className='cantidad'>0</div>
                                                                <div className='cantidad'>20</div>
                                                                <div className='cantidad'>14</div>
                                                                <div className='cantidad'>7</div>
                                                            </div>
                                                        </>
                                                    :
                                                        <div className='p-2'>
                                                            <p className='m-0'>Stock: {producto.stock} {producto.stock === 1 ? "unidad" : "unidades"}</p>
                                                        </div>
                                                    }
                                                </div>
                                                <div className="d-grid gap-2 mt-3">
                                                    <button className="btn btn-success btn-agregar" data-bs-toggle="collapse" data-bs-target={`#${producto.imagen}`} onClick={() => producto.tallecolor ? navigate(`/${producto.id}`) : agregarAlCarrito({...producto})} type="button">{producto.tallecolor ? 'Ver producto' : 'Agregar'}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    ''
                            ))
                        :
                         <p>No hay productos</p>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Home;