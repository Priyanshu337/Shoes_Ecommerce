import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)

    return (
        <div className='navbar'>
            <a className='m-10' href='/'>Wear`e</a>
            <div className='category'>
                <h4>Men</h4>
                <h4>Women</h4>
            </div>
            <div className="left-nav">
                <p>Profile</p>
                <a className="nav-link" href="/cart" onClick={() => {
                    console.log("Cart button hit")
                }}>Cart{cartstate.cartItems.length}</a>
            </div>
        </div>

    )
}
