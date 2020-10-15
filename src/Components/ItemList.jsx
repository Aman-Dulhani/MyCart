import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const ItemList = (props) => {
    const history = useHistory()
    const { item } = props
    return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title}/>
                </div>

                <div className="card-content">
                    <div className='add'><h4 className="card-title" onClick = {() => 
                        history.push({pathname:'/details',state: item })}>
                        {item.title}
                    </h4><button className='fa-2x' onClick={() => props.addTo(item.id) }><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button></div>
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTo: id => {dispatch(addToCart(id))}
    }
}

export default connect(null,mapDispatchToProps)(ItemList)
