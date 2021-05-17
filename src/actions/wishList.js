export const GET_ALL_ITEMS_IN_WISH_LIST = Symbol('GET_ALL_ITEMS_IN_WISH_LIST')
export const ADD_ITEM_TO_WISH_LIST = Symbol('ADD_ITEM_TO_WISH_LIST')

export function getAllItemsInWishList () {
  dispatch({type: GET_ALL_ITEMS_IN_WISH_LIST})
}

export function addItemToWishList (payload) {
  return {
    type: ADD_ITEM_TO_WISH_LIST,
    payload
  }
}
