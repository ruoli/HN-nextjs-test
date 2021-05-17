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

const REPO_COUNT = 10
const ProductsResults = ({ products, addItemToCart, addItemToWishList }) => {
  return (
    <Container>
            
      <h2>products gallery</h2>
      <small>{ products.length } products found</small>
      <ul>
        {
          products.map((item, index) => (
            <Item key={index}>
              <div>{item}</div>
              <button onClick={ () => addItemToCart(item) }>Add to Cart</button>
              <button onClick={ () => addItemToWishList(item) }>Add to Wish List</button>
            </Item>
          ))
        }
      </ul>
    </Container>
  )
}

ProductsResults.propTypes = {
  products: PropTypes.instanceOf(Map).isRequired
}

export { ProductsResults }
export default connect(null, {
  addItemToCart,
  addItemToWishList
})(ProductsResults)