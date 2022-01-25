import { useState, createContext } from 'react';

export const Context = createContext(null)
const AppProvider = ({children}) => {
    const [altura, setAltura] = useState(window.innerHeight)
    const [usuario, setUsuario] = useState(localStorage.getItem('usuario') === null ? false : true);

    return (
        <Context.Provider value={{ altura, usuario, setUsuario }}>
            {children}
        </Context.Provider>
    )
}

export default AppProvider;