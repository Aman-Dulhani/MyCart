import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'


const Cart = (props) => {
    const  cartItems  = props.cartItems
    return (
        <div className='cart'>
            { cartItems.length>0 ? (
                cartItems.map(item => {
                    return(
                        <CartItem item={item} />
                    )
                })
            ): (<p>Nothing.</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cartItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)
