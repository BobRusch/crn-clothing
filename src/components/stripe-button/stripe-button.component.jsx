import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51HH8NaIbn6wt6TXXWYi2p8TjPpGa3RpM1wz44hQQ1jrCmEtVriJtu7BIUmNDtWxkRxCahkLnvs7K2DXclmMR4q0Q00h1qjk27N';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment. Please make sure the card use used was correct'
        );
      })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
