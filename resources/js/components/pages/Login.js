import React, { useState } from 'react';
import Authuser from './Authuser';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { storeGmailData } from '../services/sample';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { http, setToken } = Authuser({ navigate });

    const submitForm = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        http.post('/login', { email: email, password: password })
            .then((res) => {
                setToken(res.data.user, res.data.access_token);
            })
            .catch(error => {
                setError('Invalid email or password.');
            });
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

  

const handleGoogleLogin = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
        const data = await storeGmailData(decoded);
     
      
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
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                            </form>
                            <GoogleLogin
                                onSuccess={handleGoogleLogin} // Pass the handler function
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
