import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { delFromCart, decQua,ascQua } from '../actions/cartActions'

const CartItem = (props) => {
    const item = props.item
    const { delFrom, dec, addTo } = props
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
                    <b>Quantity:</b> <span><i onClick={() => dec(item.id)}>
                        <FontAwesomeIcon icon={faMinusCircle} /></i></span> 
                    <b>{item.quantity}</b>
                    <span><i onClick={() => addTo(item.id)}>
                        <FontAwesomeIcon icon={faPlusCircle} /></i>
                    </span> 
                </div>
            </div>
    )
}

const mapDisptachToProps = (dispatch) => {
    return {
        delFrom: id => {dispatch(delFromCart(id))},
        dec: id => {dispatch(decQua(id))},
        addTo: id => {dispatch(ascQua(id))}
    }
}


export default connect(null,mapDisptachToProps)(CartItem)
