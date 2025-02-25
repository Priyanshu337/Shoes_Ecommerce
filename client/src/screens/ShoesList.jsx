import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllShoes } from "../actions/ShoesAction";
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function ShoesList() {
    const dispatch = useDispatch();
    const shoeState = useSelector((state) => state.allShoes);

    const { shoes, loading, error } = shoeState

    useEffect(() => {
        dispatch(getAllShoes());
    }, [])
    return (
        <div>
            <h2>ShoesList</h2>
            {loading && (<Loading />)}
            {error && (<Error error='something went wrong ' />)}

            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {shoes && shoes.map(shoes => {
                        return <tr>
                            <td>{shoes.name}</td>
                            <td>
                                <ul>
                                    {Object.entries(shoes.prices[0]).map(([size, price]) => (
                                        <li key={size} className='list'>
                                            {size}: ${price}
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td>{shoes.category}</td>
                            <td>
                                <i className='fa fa-trash' style={{ margin: '20px' }}></i>
                                <i className='fa fa-edit'></i>

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>


        </div>
    )
}
