import React, { useState } from 'react';
import { connect } from 'react-redux'
import { showSelected } from '../actions/cartActions'


const DropDown = (props) => {
    const {list, showCategory} = props
    const [header, setHeader] = useState('')

    const handleClick = (e) => {
        setHeader(e.target.value)
        showCategory(e.target.value)
        console.log(e.target.value)
    }

    return (
        <form >
            <select value={header} onChange={handleClick}>
                {
                    list.length > 0 ? (
                        list.map(item => {
                            return(
                                <option value={item.category} key={item.id}>{item.category}</option>
                            )
                        })
                    ): null
                }
            </select>
        </form>
    );
}
  

const mapStateToProps = (state) => {
    return {
        list: state.visibleCategory,
        header: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCategory: category => {dispatch(showSelected(category))} 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropDown)
