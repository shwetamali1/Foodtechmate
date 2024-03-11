import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from './components/Example';
import Home from './components/pages/Home';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/example" element={<Example />} />
                <Route path="/home" element={<Home />} />
                {/* Other routes */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
