import React, { useState } from 'react';
import Authuser from './Authuser';
import { useNavigate } from 'react-router-dom'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const { http, setToken } = Authuser({ navigate }); 

    const submitForm = () => {
        console.log(email, password);
        http.post('/login', { email: email, password: password })
            .then((res) => {
                setToken(res.data.user, res.data.access_token);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Login</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
