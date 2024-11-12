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

