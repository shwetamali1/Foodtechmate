import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from './components/Example';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/example" element={<Example />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              
            </Routes>
        </Router>
    );
}

export default AppRoutes;
