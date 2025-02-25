import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import Success from '../Components/Success';
function SignupScreen() {

    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');

    const registerState = useSelector(state => state.registerUserReducer)
    const { loading, error, success } = registerState;
    const dispatch = useDispatch();

    function Register() {
        if (password !== passwordVerify) {
            alert("Passwords do not match")
        } else {
            const user = {
                name,
                email,
                password,
                passwordVerify
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div className=" row justify-content-center mt-5 p-5 ">
            <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded w-50" style={{ border: '2px ' }}>
                {loading && (<Loading />)}
                {success && (<Success success='Register Succesfully' />)}
                {error && (<Error error='somehting went wrong' />)}

                <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Registration</h2>
                <h4>Name</h4>
                <input type="text" className="form-control" require value={name} placeholder="Enter you Email" onChange={(e) => { setName(e.target.value) }} />

                <h4>E-Mail</h4>
                <input type="text" className="form-control" require value={email} placeholder="Enter you Email" onChange={(e) => { setEmail(e.target.value) }} />

                <h4>Password</h4>
                <input type="text" className="form-control" require value={password} placeholder="Enter you Password" onChange={(e) => { setPassword(e.target.value) }} />

                <h4>Confirm Password</h4>
                <input type="text" className="form-control" require value={passwordVerify} placeholder="Enter you Confirm Password" onChange={(e) => { setPasswordVerify(e.target.value) }} />

                <button className="btn mt-3" style={{ backgroundColor: 'blue', color: 'white' }} onClick={Register}>Register</button>
            </div >
            <a href='/Login'> Click here to Login</a>
        </div >
    )
}

export default SignupScreen