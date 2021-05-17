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
  background: grey;
  padding: 4px 12px;
  :hover {
    a {
      color: light-grey;
    }
    background: ${props => props.theme.colors.primary};
  }
`

const ProductsResults = ({ products, addItemToCart, addItemToWishList }) => {
  console.log(products);
  return (
    <Container>
      <h2>products gallery</h2>
      <ul>
        {
          products.map((item, index) => (            
            <Item>
              {item}
              <span>{item.title}</span>
              <span>{item.subTitle}</span>
              <span>
                <img src={item.image} />
              </span>
              <button onClick={ () => addItemToCart(item) }>Add to Cart</button>
              <button onClick={ () => addItemToWishList(item) }>Add to Wish List</button>
              <a href='/detail?index=${index}'>View Detail</a>
            </Item>
          ))
        }
      </ul>
    </Container>
  )
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export { ProductsResults }
export default connect(mapStateToProps, {
  addItemToCart,
  addItemToWishList
})(ProductsResults)