import Immutable from 'immutable'
import * as ActionType from '../actions/wishList'

export const initialState = Immutable.fromJS([])

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ALL_ITEMS_IN_WISH_LIST:      
      return state

    case ActionType.ADD_ITEM_TO_WISH_LIST:
      return [...state, action.payload]

    default:
      return state
  }
}
