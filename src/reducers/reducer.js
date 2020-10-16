import data from '../data/data.json'
import { ADD_TO_CART, DEL_FROM_CART, DEC_QUA, ASC_QUA, SHOW_SELECTED } from '../actions/cartActions'

const initState = {
    visibleItems: data.items,
    addedItems:[],
    total: 0,
    visibleCategory: data.categories,
}

export const cartReducer = (state = initState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            let addedItem = state.visibleItems.findIndex(item=> item.id === action.id)
          //check if the action id exists in the addedItems
            let existed_item= state.addedItems.findIndex(item=> action.id === item.id)
            if(existed_item>=0)
            {
                let addItem = state.addedItems[existed_item]
                let qua_addItem = addItem.quantity
                let newAddItem = {...addItem, quantity: qua_addItem+1}
                return Object.assign({}, state, {
                    addedItems: [
                        ...state.addedItems.slice(0,existed_item),
                        newAddItem,
                        ...state.addedItems.slice(existed_item+1)
                    ]
                })
            }
            else{
                let addItem = state.visibleItems[addedItem]
                let newAddItem = {...addItem, quantity: 1}
                return Object.assign({}, state, {
                    addedItems: [
                        ...state.addedItems, newAddItem
                    ]
                })
            }

        case DEL_FROM_CART:
            return {
                ...state,
                addedItems: state.addedItems.reduce((accum, curr) => {
                    if (curr.id !== action.id) {
                        return {...accum, curr};
                    } 
                    return accum;
                }, {}), 
            }
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
                    ]
                })
            }else{
                return Object.assign({}, state, {
                    addedItems: [
                        ...state.addedItems.slice(0,idx),
                        ...state.addedItems.slice(idx+1)
                    ]
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
                ]
            })
        case SHOW_SELECTED:
            let newVisibleItems;
            if (action.category==='All'){
                newVisibleItems = data.items
            }else{
                newVisibleItems = data.items.filter(t => t.category===action.category)
            }
            return Object.assign({}, state, {
                visibleItems: newVisibleItems
            })
        default:
            return state
    }
}

