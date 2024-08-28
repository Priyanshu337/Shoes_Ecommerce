import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as NikeLogo } from '../../assets/icons/nike.svg';
import { useState } from 'react';

export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer);
    return (
        <>
            <div style={{
                height: '11vh',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'rgb(24, 32, 36)',
            }}
            >
                <NikeLogo className=' width="70" height="3.5vh" ' style={{ backgroundColor: 'White', borderRadius: '70%', margin: '10px' }} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "center", alignItem: 'center', width: 'auto', marginRight: '120px' }}>
                    <b className='m-2 p-2' style={{ color: "#EBF2FA", fontSize: "36px", fontWeight: "bold", textDecoration: 'none' }} href='/'>
                        Wea're
                    </b>
                </div>
                <div className='m-1 p-1' style={{
                    backgroundColor: "transparent",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignContent: 'center',
                    width: '55rem',
                    transition: 'box-shadow 0.9s',
                    padding: '50px',
                }}
                >

                    <p style={{
                        fontSize: '30px', height: '36px', marginRight: '60px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Men</p>
                    <p style={{
                        fontSize: '30px', height: '36px', marginRight: '60px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Women</p>
                    <p style={{
                        fontSize: '30px', height: '36px', color: 'white', fontWeight: "bold", textDecoration: 'none'
                    }}>Profile</p >


                </div >
                <div style={{ margin: '10px' }}>
                    <a href="/cart" style={{
                        fontSize: '30px', color: 'white', marginRight: '20px', fontWeight: 'bold', textDecoration: 'none'
                    }} >Cart  {cartstate.cartItems.length}</a>
                    <b style={{ color: "white", marginLeft: '20px', fontSize: '36px', fontWeight: 'bold' }}>Profile</b>
                </div>
            </div >
        </>
    );
}
