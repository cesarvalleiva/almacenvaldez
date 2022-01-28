import React, { useState, useEffect, createContext } from 'react';
import Swal from 'sweetalert2'

export const Context = createContext(null)
const AppProvider = ({children}) => {
    const [altura,] = useState(window.innerHeight)
    const [usuario, setUsuario] = useState(localStorage.getItem('usuario') === null ? false : true);
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) !== null ? JSON.parse(localStorage.getItem('carrito')) : [])
    const [menu, setMenu] = useState(false);
    const [loading, setLoading] = useState(false);

    const agregarAlCarrito = (producto) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1500
        })

        if(carrito !== null) {
        let cont = 0
        let pos = 0
            carrito.forEach((prod, indice) => {
                if(prod.id === producto.id) {
                    cont =+ 1;
                    pos = indice;
                }
            })
            if(cont > 0) {
                carrito[pos].cantidad = carrito[pos].cantidad+=1;
                setCarrito([...carrito])
            } else {
                producto.cantidad = 1;
                setCarrito([producto, ...carrito])
            } 
        } else {
            producto.cantidad = 1;
            setCarrito([producto, ...carrito])
        }
    }

    const handleMenu = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    return (
        <Context.Provider value={{ altura, usuario, setUsuario, carrito, setCarrito, agregarAlCarrito, menu, setMenu, handleMenu, loading, setLoading }}>
            {children}
        </Context.Provider>
    )
}

export default AppProvider;