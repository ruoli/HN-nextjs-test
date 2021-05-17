
import productAPI from '../libs/productAPI'

export const GET_ALL_PRODUCTS = Symbol('GET_ALL_PRODUCTS')
export const GET_ALL_PRODUCTS_SUCCESS = Symbol('GET_ALL_PRODUCTS_SUCCESS')

export function getAllProducts () {
  return dispatch => {
    dispatch({
      type: GET_ALL_PRODUCTS
    })

    return productAPI.getAllProducts().then(res => {
      dispatch(onGetAllProducts(res))
    })
  }
}

function onGetAllProducts (payload) {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload
  }
}
