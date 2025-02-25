import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getShoesReducer } from "./reducers/ShoesReducer";
import { combineReducers } from 'redux';
import { cartReducer } from './reducers/CartReducer';
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer } from './reducers/OrderReducer';

const rootReducer = combineReducers({
    allShoes: getShoesReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer
});


var cartItems = [];
const storedCartItems = localStorage.getItem('cartItems');
if (storedCartItems) {
    try {
        cartItems = JSON.parse(storedCartItems);
    } catch (error) {
        console.error("Failed to parse cart items from localStorage:", error);
    }
}

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null; // TODO

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }, loginUserReducer: {
        currentUser: currentUser
    }
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
    preloadedState: initialState,

});


