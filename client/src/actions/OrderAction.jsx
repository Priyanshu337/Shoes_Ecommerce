import React from 'react'
import axios from 'axios';

export const placeOrder = (token, Subtotal) => async (dispatch, getState) => {
    dispatch({
        type: 'PLACE_ORDER_REQUEST'
    })
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems

    try {
        const response = await axios.post('/api/orders/placeOrder', { token, cartItems, currentUser, Subtotal });
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        console.log(response)
    } catch (err) {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
        console.log(err)
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    console.log("api working");

    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' })
    try {
        const response = await axios.post('/api/orders/getUserOrders', { userid: currentUser._id });
        console.log(response, "response in action");
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data })
    } catch (err) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: err.message })
    }
}

