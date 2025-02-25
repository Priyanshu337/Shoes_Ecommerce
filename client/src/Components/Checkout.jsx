import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/OrderAction';
import Loading from './Loading';
import Error from './Error';
import Success from './Success';

export default function Checkout({ subTotal }) {

    const orderState = useSelector((state) => state.placeOrderReducer)
    const { loading, success, error } = orderState;
    const currentUser = useSelector((state) => state.loginUserReducer.currentUser);
    const dispatch = useDispatch()


    const tokenHandler = (token) => {
        try {
            if (token) {
                dispatch(placeOrder(token, subTotal))
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            {loading && (< Loading />)}
            {error && (<Error error='something went wrong' />)}
            {success && (< Success success='your order placed succesfully' />)}

            <StripeCheckout
                token={tokenHandler}
                amount={subTotal * 100}
                shippingAddress
                billingAddress
                stripeKey='pk_test_51QaVQfINYLjKABXEQAssiytSSGqaqPGxd6yNAP17OuuWSypIkAIxWXRjdsDXWxi9K6AxXmZuhKAQiAZLaGquKUga00dpPJi6aU'
                currency='CAD'
            >
                <button> Paynow</button>
            </StripeCheckout>
        </div >
    )
}
