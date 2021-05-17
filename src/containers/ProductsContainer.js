import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'

import { getAllProducts } from '../actions/products'
import ProductsResults from '../components/ProductsResults'

class ProductsContainer extends Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(getAllProducts())
    return {}
  }

  componentDidMount () {
    const { getAllProducts } = this.props
    getAllProducts()
  }

  render () {
    const { products } = this.props
    return (
      <Fragment>
        <div onClick={this._goToAbout}>
          GO TO ABOUT (with <code>router</code>)
        </div>
        <ProductsResults products={products} />
      </Fragment>
    )
  }

  _goToAbout = () => {
    this.props.router.push('/about')
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.instanceOf(Map).isRequired,
  getAllProducts: PropTypes.func.isRequired
}

export { ProductsContainer }
export default connect(mapStateToProps, {
  getAllProducts
})(ProductsContainer)
