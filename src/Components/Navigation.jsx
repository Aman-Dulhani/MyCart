import React from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'

const Navigation = () => {
    return (
        <div className='navbar'>
            <div className='nav-left'><Link to='/'>Shop</Link></div>
            <DropDown />
            <div className='nav-right'><Link to='/cart'>Cart</Link></div>
        </div>
    )
}

export default Navigation
