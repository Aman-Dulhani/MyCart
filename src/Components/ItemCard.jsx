import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import Quantity from './Quantity' 

const ItemCard = (props) => {
    const history = useHistory()
    const { item, addTo, quantity } = props
    const [added, setAdded] = useState(false)

    const handleClick = () => {
        addTo(item.id)
        setAdded(true)
    }

    return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title}/>
                </div>

                <div className="card-content">
                    <div className='add'><h2 className="card-title" onClick = {() => 
                        history.push({pathname:'/details',state: item })}>
                        {item.title}
                    </h2>{ added ? (<div className='added-item'>
                        <Quantity quantity={quantity(item.id)} id={ item.id } /></div>    
                    ):(
                    <button className='fa-2x' 
                        onClick={ handleClick }>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                        Add to Cart
                    </button>)}
                </div>     
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quantity: id => {
            let newI = state.addedItems.find(t => t.id===id)
            return newI.quantity
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTo: id => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemCard)
