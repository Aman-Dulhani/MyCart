import React from 'react'
import ItemList from './ItemList'
import data from '../data/data.json';



const Home = () => {
    const items = data.items
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


export default Home
