import { useSelector } from 'react-redux';
import { addToCart } from '../actions/CartAction';
import { useDispatch } from "react-redux";
import { deleteFromCart } from '../actions/CartAction';

import React from "react";
import Checkout from '../Components/Checkout';

function CartScreen() {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch();



    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', width: '50%' }}>
                <div style={{
                    borderRadius: '15px', padding: '3px', margin: '5px', width: 'auto'
                }}>
                    <h1 style={{ fontWeight: 'bold' }}>My Cart</h1>
                    {
                        cartItems.map((item) => {
                            return <div
                                style={{ overflow: 'scroll', display: "flex", width: '50rem', alignContent: "center", justifyContent: "space-evenly", margin: '30px', borderRadius: '9px', border: '1px  black', transition: 'all .3s ease-in-out', boxShadow: '-3px 6px 5px 0px rgba(176,164,176,1)' }}
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = '-3px 18px 20px 0px rgba(99,89,99,1)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = '-3px 6px 5px 0px rgba(176,164,176,1)'}>

                                <div className='text-left m-1 '>
                                    <h2 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{item.name}   Size:{item.size}</h2>
                                    <h4 style={{ fontWeight: 'bold' }}>Price: {item.quantity}*{item.prices[0][item.size]} = {item.price}</h4>
                                    <h1 style={{ display: 'inline', fontWeight: 'bold' }}>Quantity</h1>

                                    <button className='m-3 ' style={{ 'borderRadius': '4px' }}>
                                        <a className='fa fa-plus' aria-hidden="true" style={{ textDecoration: 'none' }} onClick={() => {
                                            dispatch(addToCart(item, item.quantity + 1, item.size))
                                        }} ></a>
                                    </button>

                                    <b>{item.quantity}</b>

                                    <button className=' m-3' style={{ 'borderRadius': '4px' }}>
                                        <a className='fa fa-minus' style={{ textDecoration: 'none' }} aria-hidden="true" onClick={() => {
                                            dispatch(addToCart(item, item.quantity - 1, item.size))
                                        }}></a>
                                    </button>
                                </div>

                                <div>
                                    <img src={item.image} alt="Shoes print" className="img-fluid" style={{ borderRadius: '15px', width: "150px", height: "150px", boxShadow: '0 .15rem 1.75rem 0 rgba(0, 0, 0, .15)', padding: '5px', margin: '20px auto' }} />
                                </div>
                                <div className='trash'>
                                    <a className='fa fa-trash' aria-hidden="true" onClick={() => {
                                        dispatch(deleteFromCart(item))
                                    }} ></a>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div >
            <div className='h-90 w-90 d-flex flex-row '>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', width: '30vw', height: '60vh' }}>
                    <button style={{ margin: '5px', height: '40vh', width: '55vh' }}  >
                        <h1 className="m-5" style={{ fontSize: "45px" }}>Subtotal: {subTotal}/-</h1>
                        <Checkout subTotal={subTotal} /></button>
                </div>
            </div>
        </div >
    );
}

export default CartScreen;


