import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/chechkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


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
    <div className='test-warning'>
      <block>
        *** Please use one of the following cards for payments ***
        <br />
        VISA ==> 4242 4242 4242 4242
        <br />
        expr. 04/24 CVV: 424
        <br />
        MC  ==> 5555 5555 5555 4444
        <br />
        expr. 05/24 CVV: 545
        <br />
        DISC ==> 6011 1111 1111 1117
        <br />
        expr. 01/24 CVV: 171
       <br />
      </block>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps
)(CheckoutPage);