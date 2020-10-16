import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { decQua, ascQua } from '../actions/cartActions'

const Quantity = (props) => {
    const { quantity, id, dec, addTo } = props
    return (
        <div className='QA'>
            <span><i onClick={() => dec(id)}>
                <FontAwesomeIcon icon={faMinusCircle} /></i>
            </span> 
            <b>{quantity}</b>
            <span><i onClick={() => addTo(id)}>
                <FontAwesomeIcon icon={faPlusCircle} /></i>
            </span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dec: id => {dispatch(decQua(id))},
        addTo: id => {dispatch(ascQua(id))}
    }
}

export default connect(null, mapDispatchToProps)(Quantity)
