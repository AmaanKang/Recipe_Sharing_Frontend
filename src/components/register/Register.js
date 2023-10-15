/**
 * @Reference https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
 */

import { useState } from 'react';
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Register() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    // States for checking the errors
    //const [submitted, setSubmitted] = useState(false);
    //const [error, setError] = useState(false);
 
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        //setSubmitted(false);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        //setSubmitted(false);
    };
 
    // Handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            //setError(true);
        } else {
            const response = await api.post('api/v1/users',{emailAddress:email,password:password});
            //const navigate = useNavigate();
            //setSubmitted(true);
            //setError(false);
            //navigate(to="/");
        }
    };
 
    // Showing success message
    const successMessage = () => {
        setEmail('');
        setPassword('');
        return (
            <div
                className="success"
                style={{
                    //display: submitted ? '' : 'none',
                }}>
                <h3>User {email} successfully registered!!</h3>
                <p>
                    Go back to <Link to='/login'>Login Page here</Link>
                </p>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    //display: error ? '' : 'none',
                }}>
                <h3>Please enter all the fields</h3>
            </div>
        );
    };
 
    return (
        <div className="form">
            <div>
                <h1>User Registration</h1>
            </div>
 
            {/* Calling to the methods */}
            <div className="messages">
                {/*errorMessage()*/}
                {/*successMessage()*/}
            </div>
 
            <form>
                {/* Labels and inputs for form data */}
 
                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
 
                <label className="label">Password</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
 
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}