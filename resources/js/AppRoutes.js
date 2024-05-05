import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import Example from './components/Example';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function AppRoutes() {
    return (
        <Router>
            <GoogleOAuthProvider clientId="9013125876-rrt8ja2cjv032ru7u4e15c2fba2i9ph2.apps.googleusercontent.com"> {/* Wrap your routes with the provider */}
                <Routes>
                    <Route path="/example" element={<Example />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </GoogleOAuthProvider>
        </Router>
    );
}

export default AppRoutes;
