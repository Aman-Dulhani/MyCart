import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory()
    return (
        <div className='navbar'>
            <div className='nav-left' onClick = {() => 
                history.push({pathname:'/'})}>Shopper Stop</div>
            <Search />
            <div className='nav-right' onClick = {() => 
                history.push({pathname:'/cart'})}>Cart</div>
        </div>
    )
}

export default Navigation
