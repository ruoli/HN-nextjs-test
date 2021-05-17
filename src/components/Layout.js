import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import Link from 'next/link'

class Layout extends PureComponent {
  render () {
    const { cart, wishList } = this.props
    return (
      <div className='layout'>
        <header>
          <img src='/static/harvey-nichols.png' />
          <h3>harvey-nichols-test</h3>
          <menu>
            <Link href='/about'>
              <a>About</a>
            </Link>
            <Link href='/'>
              <a>Redux demo</a>
            </Link>
            <Link href='#'>
              <a>You Have {cart.length > 0 ? cart.length : 0} items in Cart</a>
            </Link>
            <Link href='#'>
            <a>You have {wishList.length > 0 ? wishList.length : 0} items in Wish List</a>
            </Link>
          </menu>
          <style jsx>{`
            header {
              display: flex;
              align-items: center;
              font-family: Monospace;
              margin: 10px 20px;
            }
            h3 {
              margin-left: 10px
            }
            img {
              height: 50px;
              width: 50px;
            }
            menu > a {
              margin-right: 16px;
            }
          `}</style>
        </header>
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart,
    wishList: state.wishList
  }
}

Layout.propTypes = {
  cart: PropTypes.instanceOf(Map).isRequired,
  wishList: PropTypes.instanceOf(Map).isRequired
}

export { Layout }
export default connect(mapStateToProps, null)(Layout)
