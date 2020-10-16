import React from 'react'
import ItemList from './ItemList'
import { connect } from 'react-redux'


const Home = (props) => {
    const { items } = props
    return (
        <div className='container'>
            { items.length > 0 ? (
                items.map(item => {
                    return(
                        <ItemList item={item} />
                    )
                }) 
            ): (' ')}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        items: state.visibleItems
    }
}


export default connect(mapStateToProps)(Home)
