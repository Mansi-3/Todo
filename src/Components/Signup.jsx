import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css'; // Make sure to create this CSS file for styling

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(''); // For success messages
    const [error, setError] = useState(''); // For error messages

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Payload to be sent
        const payload = {
            email,
            password,
        };

        try {
            // Make the API call
            const response = await axios.post('http://127.0.0.1:8000/api-django/users/signup/', payload);

            // Response received
            setSuccess('Registration successful! Please log in.'); // Set success message
            setError(''); // Clear any previous error messages
        } catch (error) {
            setError('Registration failed: ' + (error.response?.data?.detail || 'Unknown error')); // Set error message
            setSuccess(''); // Clear any previous success messages
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="signup-input"
                />
                <button type="submit" className="signup-button">Sign Up</button>
                <p className="login-link">
                    Already registered? <Link to="/login">Login</Link>
                </p>
            </form>
            {success && <p className="signup-success">{success}</p>}
            {error && <p className="signup-error">{error}</p>}
        </div>
    );
};

export default Signup;
