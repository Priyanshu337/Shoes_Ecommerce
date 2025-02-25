

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from './UserList';
import ShoesList from './ShoesList';
import OrderList from './OrderList';
import AddNewShoes from './AddNewShoes';
import { Link, Route, Routes, Navigate } from 'react-router-dom';

export default function AdminScreen() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;

    useEffect(() => {
        if (currentUser && !currentUser.isAdmin) {
            window.location.href = './homeScreen';
        }
    }, [currentUser]);

    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '35px' }}>This is Admin Screen</h2>
                    <ul className="adminPanel">
                        <li>
                            <Link to="userlist">UserList</Link>
                        </li>
                        <li>
                            <Link to="shoesList">ShoesList</Link>
                        </li>
                        <li>
                            <Link to="orderList">OrderList</Link>
                        </li>
                        <li>
                            <Link to="addNewShoes">AddNewShoes</Link>
                        </li>
                    </ul>

                    <Routes>
                        <Route index element={<UserList />} />
                        <Route path="userlist" element={<UserList />} />
                        <Route path="shoesList" element={<ShoesList />} />
                        <Route path="orderList" element={<OrderList />} />
                        <Route path="addNewShoes" element={<AddNewShoes />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
