import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginState = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginState;

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/homescreen';
        }
    })

    const Login = async () => {
        try {
            const userCred = {
                email: email,
                password: password
            }
            const response = dispatch(loginUser(userCred));
            if (response.status === 200) {
                navigate('./HomeScreen');
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className='row justify-content-center align-items-center m-2 ' >

                <div className='col-md-4 shadow-lg p-3 mb-5 bg-white rounded '>
                    <h2> Login</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='somehting went wrong' />)}
                    <input type="email" className="form-control mb-1" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="password" className="form-control mt-1" placeholder="Enter your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }} onClick={Login}>Login</button>
                </div >
                <a href='/Signup'> Click here to register</a>
            </div >
        </>
    )
}

export default LoginScreen
