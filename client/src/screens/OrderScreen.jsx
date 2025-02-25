import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/OrderAction';
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import './orderScreen.css'

function OrderScreen() {

    const dispatch = useDispatch();
    const ordersState = useSelector((state) => state.getUserOrdersReducer);
    const { orders, error, loading } = ordersState;
    console.log(orders, "order in orderscreen ")

    useEffect(() => {
        dispatch(getUserOrders());
    }, [dispatch]);

    return (
        <div className='order-screen'>
            <h2>Orders Screen</h2>
            <div className='row '>
                {loading && (<Loading />)}
                {error && (<Error error='something went wrong ' />)}
                {orders && orders.map(order => {
                    return (
                        <div className='col-md-8' >
                            <div className='orders' >
                                <div className='items'>
                                    <h2 style={{ fontSize: '25px' }} > Items</h2>
                                    <hr />
                                    {order.orderItems.map(item => {
                                        return <div>
                                            <p>{item.name} [{item.variant}] * {item.quantity} = {item.price}</p>
                                        </div>
                                    })}

                                </div>
                                <div className='address'>
                                    <h2 style={{ fontSize: '25px' }} >Address</h2>
                                    <hr />
                                    <p>Street: {order.shippingAddress.street}</p>
                                    <p>City:{order.shippingAddress.city}</p>
                                    <p>Country:{order.shippingAddress.country}</p>
                                    <p>Pincode:{order.shippingAddress.zip}</p>
                                </div>

                                <div className='order-info'>
                                    <h2 style={{ fontSize: '25px' }} >Order Info</h2>
                                    <hr />
                                    <p>Amount: {order.orderAmount}</p>
                                    <p>Transaction ID : {order.transactionId}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default OrderScreen