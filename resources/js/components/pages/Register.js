import React, { useState } from 'react';
import Authuser from './Authuser';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate(); 
    const { http, setToken } = Authuser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!name || !email || !password) {
            setError('Please fill  all fields.');
            return false;
        }
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            setError('Name must contain only letters and spaces.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return false;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            return false;
        }
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Password must contain at least one special character.');
            return false;
        }
        setError('');
        return true;
    };

    const submitForm = () => {
        if (validateForm()) {
            http.post('/register', { email, password, name })
                .then((res) => {
                    navigate('/login');
                })
                .catch(error => {
                    setError('Please try to register after some time.');
                });
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center pt-4">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Register</h5>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email address:</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" id="pwd" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <button type="button" onClick={submitForm} className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
