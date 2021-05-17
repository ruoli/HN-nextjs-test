import React from 'react'
import styled from 'styled-components'
import { Map } from 'immutable'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addItemToCart } from '../actions/cart'
import { addItemToWishList } from '../actions/wishList'

const Container = styled.div`
  width: 300px;
  padding: 1em;
  margin: 1em auto;
`
const Item = styled.li`
  background: #eee;
  padding: 4px 12px;
  :hover {
    a {
      color: #eee;
    }
    background: ${props => props.theme.colors.primary};
  }
`

const ProductsDetail = ({ products, addItemToCart, addItemToWishList }) => {
  console.log('prodcut 1', products[1]);
  return (
    <Container>            
      <h2>products detail</h2>
      <Item>
        <div>{products[1]}</div>
        <button onClick={ () => addItemToCart(item) }>Add to Cart</button>
        <button onClick={ () => addItemToWishList(item) }>Add to Wish List</button>
      </Item>
    </Container>
  )
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

ProductsDetail.propTypes = {
  products: PropTypes.instanceOf(Map).isRequired
}

export { ProductsDetail }
export default connect(mapStateToProps, {
  addItemToCart,
  addItemToWishList
})(ProductsDetail)