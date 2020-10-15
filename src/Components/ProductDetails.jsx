import React from 'react';
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation()
    const item = location.state
    return (
        <div className='container'> 
            <div className='detail-img'>
                <img src={item.img} alt={item.title}/>
            </div>

            <div>
                <span>{item.title}</span>
                <p><b>{item.price}</b></p>
                <p>{item.desc}</p>
                
            </div>
        </div>
    )
}

export default ProductDetails
