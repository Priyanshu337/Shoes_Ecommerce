import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getShoesReducer } from "./reducers/ShoesReducer";
import { combineReducers } from 'redux';
import { cartReducer } from './reducers/CartReducer';

const rootReducer = combineReducers({
    allShoes: getShoesReducer, // Assuming `getShoesReducer` is your reducer for fetching all shoes
    cartReducer: cartReducer
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

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
    preloadedState: initialState,
});


