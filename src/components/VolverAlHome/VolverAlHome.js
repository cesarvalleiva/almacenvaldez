import { Link } from 'react-router-dom';
import './VolverAlHome.css'

const VolverAlHome = () => {
    return ( 
        <div className='back'>
            <Link to="/home">Volver</Link>
        </div>
     );
}
 
export default VolverAlHome;