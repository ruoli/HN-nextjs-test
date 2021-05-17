import { combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import wishList from './wishList'

export default combineReducers({
  products,
  cart,
  wishList
})
