import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/chechkout-item.component';


import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        Product
      </div>
      <div className='header-block'>
        Description
      </div>
      <div className='header-block'>
        QuantityE
      </div>
      <div className='header-block'>
        Price
      </div>
      <div className='header-block'>
        Remove
      </div>
    </div>
    {
      cartItems.map(item =>
        <CheckoutItem cartItem={item} />
      )
    }
    <div className='total'>
      <span>TOTAL ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps
)(CheckoutPage);