import { useState, createContext } from 'react';

export const Context = createContext(null)
const AppProvider = ({children}) => {
    const [altura,] = useState(window.innerHeight)
    const [usuario, setUsuario] = useState(localStorage.getItem('usuario') === null ? false : true);
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) !== null ? JSON.parse(localStorage.getItem('carrito')) : [])

    return (
        <Context.Provider value={{ altura, usuario, setUsuario, carrito, setCarrito }}>
            {children}
        </Context.Provider>
    )
}

export default AppProvider;