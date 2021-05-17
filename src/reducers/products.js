import Immutable from 'immutable'
import * as ActionType from '../actions/products'

export const initialState = Immutable.fromJS({
  isLoading: false,
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCTS:
      return state.set('isLoading', true)

    case ActionType.GET_ALL_PRODUCTS_SUCCESS:
      return state.merge(        
        Object.assign({}, action.payload, {
          isLoading: false,
        })
      )

    default:
      return state
  }
}
