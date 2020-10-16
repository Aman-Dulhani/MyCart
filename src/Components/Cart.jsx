import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const  {cartItems, total}  = props
    return (
        <div className='cart'>
            { cartItems.length>0 ? (
                cartItems.map(item => {
                    return(
                        <CartItem item={item} />
                    )
                })
            ): (<p>Nothing.</p>)}
            <button className='fa-2x' id='checkout'><FontAwesomeIcon icon={faShoppingCart}/> Proceed to Checkout {total}$</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Cart)
