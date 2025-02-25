import axios from "axios";

export const getAllShoes = () => async (dispatch) => {
    dispatch({ type: 'GET_SHOES_REQUEST' })

    try {
        const response = await axios.get('/api/shoes/getShoes')
        dispatch({ type: 'GET_SHOES_SUCCESS', payload: response.data })
    } catch (err) {
        dispatch({ type: 'GET_SHOES_FAILED', payload: err.message })
    }
}

export const addShoes = (shoesName, category, description, sizes, prices, imageUrl) => async (dispatch) => {
    dispatch({ type: 'ADD_SHOES_REQUEST' });

    const shoes = {
        shoesName,
        category,
        description,
        sizes,
        prices,
        imageUrl,
    };

    try {
        const response = await fetch('/api/shoes/addShoes', {
            method: "POST",
            body: JSON.stringify({ shoes }), // Pass the object directly
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json(); // Parse the response data
        dispatch({ type: 'ADD_SHOES_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'ADD_SHOES_FAILED', payload: error.message });
    }
};
