import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/appContext';
import './Home.css'

const Home = () => {
    const {altura} = useContext(Context);
    
    return ( 
        <>
            <div className='prueba'>
                <p>Por favor ingresá desde el celular 📱</p>
            </div>
            <div className='contenedorHome' style={{height: `${altura}px`}}>
                <div className='secciones'>
                    <div className='pedido'>
                        <Link to="/pedidos">
                            <i className="fas fa-tag"></i>
                            <p>Pedidos</p>
                        </Link>
                    </div>
                    <div className='pedido'>
                        <i className="fas fa-archive"></i>
                        <p>Stock</p>
                    </div>
                    {/* <div className='pedido'>
                        <i className="fas fa-dollar-sign"></i>
                        <p>{altura}</p>
                    </div>
                    <div className='pedido'>
                        <i className="fas fa-dollar-sign"></i>
                        <p>Rendir</p>
                    </div> */}
                </div>
            </div>
        </>
     );
}
 
export default Home;