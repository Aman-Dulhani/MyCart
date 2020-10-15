import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='navbar'>
            <h2><Link to='/'>Shop</Link></h2>
            <h2><Link to='/cart'>Cart</Link></h2>
        </div>
    )
}

export default Navigation
