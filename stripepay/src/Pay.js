import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
const Pay = () => {
const KEY = process.env.STRIPE_TEST_PRI

  const [stripeToken, setStripeToken] = useState(null)
  const history = useNavigate()

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        history.push('/success') 
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken,history]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {stripeToken
        ? (<span>Processing. please wait..</span>)
        : (
          <StripeCheckout

            name='E-med Shop'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ETPUM3G6l9Pe3VTHbMbx_yfLk5KqZ_kU9w&usqp=CAU'
            billingAddress
            shippingAddress
            description='You total is $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}

          >
            <button style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              background: "#000000",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer"
            }}>Pay</button>
          </StripeCheckout>
        )}

    </div>

  )
}

export default Pay