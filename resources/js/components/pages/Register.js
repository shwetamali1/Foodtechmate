import React, { useState } from 'react';
import Authuser from './Authuser';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Register() {
    const navigate = useNavigate(); // Get navigate function from useNavigate
    const { http, setToken } = Authuser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const submitForm = () => {
        http.post('/register', { email: email, password: password, name: name })
            .then((res) => {
                navigate('/login');
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center pt-4">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Register</h5>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email address:</label>
                                <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" id="pwd" onChange={e => setPassword(e.target.value)} />
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
