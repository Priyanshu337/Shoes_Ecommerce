import axios from 'axios';


export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        const response = await axios.post('/api/authentication/signup', user)
        dispatch({ type: 'USER_REGISTER_SUCCESS', payload: response.data });
        return response;
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error.message })
        console.error('Error during signup:', error.response?.data || error.message);
    }
}

export const loginUser = (userCred) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        const response = await axios.post('/api/authentication/login', userCred)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        console.log(response.data, "This is in action")
        localStorage.setItem('currentUser', JSON.stringify(response.data));
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error.message })
        console.log('Error during login:', error.message);
    }
}


export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/Login'
}