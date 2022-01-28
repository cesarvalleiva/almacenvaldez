import React from 'react';
import './Loading.css'

const Loading = () => {
    return ( 
        <div className='containerLoading'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p>Cargando...</p>
        </div>
     );
}
 
export default Loading;