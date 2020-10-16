import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { delFromCart } from '../actions/cartActions'
import Quantity from './Quantity'

const CartItem = (props) => {
    const item = props.item
    const { delFrom } = props
    return (
            <div className="collection-item avatar" key={item.id}>
                <div className="item-img"> 
                    <img src={item.img} alt={item.img} className=""/>
                </div>
                                
                <div className="item-desc">

                    <span className="title"><b>{item.title}</b>
                        <button className='fa-1x' id='del-button' onClick={() => delFrom(item.id)}>
                            <FontAwesomeIcon icon={faTrash} /></button> 
                    </span>
                    <br/>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p> 
                    <b>Quantity:</b> <Quantity quantity={item.quantity} id={item.id} />
                </div>
            </div>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        delFrom: id => {dispatch(delFromCart(id))},
    }
}


export default connect(null,mapDisptachToProps)(CartItem)
