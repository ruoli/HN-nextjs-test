import Immutable from 'immutable'
import * as ActionType from '../actions/cart'

export const initialState = Immutable.fromJS([])

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ALL_ITEMS_IN_CART:      
      return state

    case ActionType.ADD_ITEM_TO_CART:
      return [...state, action.payload]

    default:
      return state
  }
}
