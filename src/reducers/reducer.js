import data from '../data/data.json'
import { 
        ADD_TO_CART, 
        DEL_FROM_CART, 
        DEC_QUA, 
        ASC_QUA, 
        SHOW_SELECTED, 
        SEARCH } from '../actions/cartActions'

const initState = {
    visibleItems: data.items,
    addedItems:[],
    total: 0,
    visibleCategory: data.categories,
    categoryItem: data.items
}

export const cartReducer = (state = initState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            let addedItem = state.visibleItems.findIndex(item=> item.id === action.id)
            let addItem = state.visibleItems[addedItem]
            let newAddItem = {...addItem, quantity: 1}
            return Object.assign({}, state, {
                addedItems: [
                    ...state.addedItems, newAddItem
                ],
                total: state.total+addItem.price
            })

        case DEL_FROM_CART:
            let delItem = state.addedItems.find(item => item.id===action.id)
            let price = delItem.price
            let qt = delItem.quantity
            return Object.assign({}, state, {
                addedItems: state.addedItems.filter(t => t.id!==delItem.id),
                total: state.total - (price*qt)
            })
        case DEC_QUA:
            let idx = state.addedItems.findIndex(item => item.id===action.id)
            let item = state.addedItems[idx]
            let qu = item.quantity
            let newItem = {...item, quantity: qu-1}
            if(qu-1>0){
                return Object.assign({}, state, {
                    addedItems: [
                        ...state.addedItems.slice(0,idx),
                        newItem,
                        ...state.addedItems.slice(idx+1)
                    ],
                    total : state.total - item.price
                })
            }else{
                return Object.assign({}, state, {
                    addedItems: [
                        ...state.addedItems.slice(0,idx),
                        ...state.addedItems.slice(idx+1)
                    ],
                    total : state.total - item.price
                })
            }
        case ASC_QUA:
            let inc_idx = state.addedItems.findIndex(item => item.id===action.id)
            let inc_item = state.addedItems[inc_idx]
            let qua = inc_item.quantity
            let new_Item = {...inc_item, quantity: qua+1}
            return Object.assign({}, state, {
                addedItems: [
                    ...state.addedItems.slice(0,inc_idx),
                    new_Item,
                    ...state.addedItems.slice(inc_idx+1)
                ],
                total : state.total + inc_item.price
            })
        case SHOW_SELECTED:
            let newVisibleItems;
            if (action.category==='All'){
                newVisibleItems = data.items
            }else{
                newVisibleItems = data.items.filter(t => t.category===action.category)
            }
            return Object.assign({}, state, {
                visibleItems: newVisibleItems,
                categoryItem: newVisibleItems
            })
        case SEARCH:
            let searchedItems = state.categoryItem.filter(item => item.title.includes(action.text))
            return Object.assign({}, state, {
                visibleItems: searchedItems
            })
        default:
            return state
    }
}

