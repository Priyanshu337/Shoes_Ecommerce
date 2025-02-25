import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userAction';


export default function Navbar() {
    const dispatch = useDispatch();

    const cartstate = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.loginUserReducer);
    const { currentUser } = userState;

    const login = () => {
        window.location.href = '/login'
    }

    return (
        <>
            <div style={{
                height: '9vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(24, 32, 36)',
            }}
            >
                {/* <NikeLogo className=' width="70" height="3.5vh" ' style={{ backgroundColor: 'White', borderRadius: '70%', margin: '10px' }} /> */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItem: 'center', width: 'auto', marginRight: '120px' }}>
                    <a className='m-2 p-2' style={{ color: "#EBF2FA", fontSize: "36px", fontWeight: "bold", textDecoration: 'none' }} href="/homeScreen">
                        Wea're
                    </a>
                </div>



                <div className='m-3 p-1' style={{
                    backgroundColor: "transparent",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-evenly",
                    alignContent: 'center',
                    width: '55rem',
                    transition: 'box-shadow 0.9s',
                    padding: '50px'
                }}
                >

                    <p style={{
                        fontSize: '30px', height: '36px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Men</p>
                    <p style={{
                        fontSize: '30px', height: '36px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Women</p>
                    <p style={{
                        fontSize: '30px', height: '36px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Profile</p>
                </div >


                <div style={{ margin: '2px', display: 'flex', padding: '2px' }}>
                    {currentUser ? (
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {currentUser.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => { dispatch(logoutUser()) }}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    ) : (<button onClick={login} style={{ color: "white", marginLeft: '20px', backgroundColor: 'transparent', fontSize: '36px', fontWeight: 'bold' }}>Login</button>
                    )}
                    <a href="/cart" style={{
                        fontSize: '30px', color: 'white', marginLeft: '20px', fontWeight: 'bold', textDecoration: 'none'
                    }} >Cart  {cartstate.cartItems.length}</a>
                </div>
            </div >
        </>
    );
}
