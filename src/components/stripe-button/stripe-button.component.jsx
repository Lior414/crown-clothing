import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I7yeUIZ7y7XBP3p1CYEjwovxALSSUeEU0XZDAuA7tZ0kt6Ct4cJ1U3va8blyUP4oR8tg3M8ayx0bJZNz3v9aalr00361YDQqU';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CROWN-Clothing ltd.'
            billingAddress
            shippiungAddress
            image='https://svgShare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;