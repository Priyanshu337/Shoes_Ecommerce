import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';
import HomeScreen from '../HomeScreen/HomeScreen';

function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const Login = async (email, password) => {

        const userCred = {
            email: email,
            password: password
        }
        try {
            const response = await dispatch(loginUser(userCred));

            if (response.status === 202) {
                navigate('./HomeScreen');
            }
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <div className='row justify-content-center align-items-center m-2 '>
                <div className='col-md-4 '>
                    <h2> Login</h2>
                    <input type="email" className="form-control mb-1" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="password" className="form-control mt-1" placeholder="Enter your Password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    <button className="btn" onClick={Login}>Login</button>
                </div >
            </div >
        </>
    )
}

export default LoginScreen
