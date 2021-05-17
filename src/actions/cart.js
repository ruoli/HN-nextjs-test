export const GET_ALL_ITEMS_IN_CART = Symbol('GET_ALL_ITEMS_IN_CART')
export const ADD_ITEM_TO_CART = Symbol('ADD_ITEM_TO_CART')

export function getAllItemsInCart () {
  dispatch({type: GET_ALL_ITEMS_IN_CART})
}

export function addItemToCart (payload) {
  return {
    type: ADD_ITEM_TO_CART,
    payload
  }
}
