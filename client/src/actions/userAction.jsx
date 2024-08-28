import axios from 'axios';


export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        console.log("This is the user", user);
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
        return response;
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error.message })
        console.error('Error during login:', error.response?.data || error.message);

    }
}


// if (response.status === 200) {
//     navigate('./HomeScreen'); // Redirects to the login page
// }