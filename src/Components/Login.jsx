import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState(''); // For error messages
    const [success, setSuccess] = useState(''); // For success messages

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Payload to be sent
        const payload = {
            email,
            password,
        };

        try {
            // Make the API call
            const response = await axios.post('http://127.0.0.1:8000/api-django/users/login/', payload);

            // Response received
            const accessToken = response.data.access;
            setToken(accessToken);
            localStorage.setItem('token', accessToken);
            setSuccess('Login successful!'); // Set success message
            setError(''); // Clear any previous error messages
        } catch (error) {
            setError('Login failed: ' + (error.response?.data?.detail || 'Unknown error')); // Set error message
            setSuccess(''); // Clear any previous success messages
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
                <p className="signup-link">
                    Not registered yet? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
            {token && <p className="login-token">Token: {token}</p>}
            {success && <p className="login-success">{success}</p>}
            {error && <p className="login-error">{error}</p>}
        </div>
    );
};

export default Login;
