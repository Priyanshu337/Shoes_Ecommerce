export const addToCart = (shoe, Quantity, Size) => (dispatch, getState) => {

    const cartItem = {
        name: shoe.name,
        _id: shoe._id,
        image: shoe.image,
        size: Size,
        quantity: Quantity,
        prices: shoe.prices,
        price: shoe.prices[0][Size] * Quantity
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });

    // Get the updated cart items from the state after dispatch
    const { cartItems } = getState().cartReducer;

    // Check if cartItems is updated correctly
    console.log('Updated cart items:', cartItems);

    // Store updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


export const deleteFromCart = (item) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: item })
    const cartItems = getState().cartReducer.cartItems;
    // Check if cartItems is updated correctly
    console.log('CHecking wheather item are stored or not :', cartItems);

    // Store updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}