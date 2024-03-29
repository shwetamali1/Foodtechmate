import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from './components/Example';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function AppRoutes() {
    // Move the authentication logic outside of the component
    // Check if user is authenticated before rendering routes

    return (
        <Router> {/* Wrap your component tree with Router */}
            <Routes>
                <Route path="/example" element={<Example />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Authuser should not be rendered as a route */}
                {/* If you have additional routes, you can add them here */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
