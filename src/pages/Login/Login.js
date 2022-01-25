import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { Context } from '../../store/appContext';
import './Login.css'

const Login = () => {
    const [altura,] = useState(window.innerHeight);
    const { setUsuario, usuario } = useContext(Context);
    let navigate = useNavigate()

    const enviarForm = (e) => {
        e.preventDefault();
        navigate('/home');
        localStorage.setItem('usuario', true)
        setUsuario(true)
    }

    const verifyUser = () => {
        if(usuario) {
            navigate('/home');
        }
    }

    useEffect(() => {
        verifyUser()
    }, [])

    return (
        <div className='contenedorLogin' style={{height: `${altura}px`}}>
            <div className='contenedorFormLogin shadow'>
                <form className='login' onSubmit={enviarForm}>
                    <img src={require('../../assets/img/logoalmacen.png')} alt="Logo Almacen Valdez"/>
                    <div className="mb-3 ">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="usuario" />
                    </div>
                    <div className="mb-3 ">
                        <input type="email" className="form-control" placeholder="********" />
                    </div>
                    <div className="d-grid gap-2">
                        {/* <Link to="/home" className="btn btn-ingresar">Ingresar</Link> */}
                        <button className="btn btn-ingresar" type="submit">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;