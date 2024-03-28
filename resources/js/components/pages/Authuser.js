import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Authuser() {
    const navigate = useNavigate(); // Use useNavigate hook to get navigate function

    // Define getToken and getUser functions before using them
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        if (tokenString) {
            try {
                const userToken = JSON.parse(tokenString);
                return userToken;
            } catch (error) {
                console.error('Error parsing token data from sessionStorage:', error);
                return null; // or handle the error as needed
            }
        } else {
            return null; // or handle the case when 'token' is not found in sessionStorage
        }
    };
    
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        console.log('User data from session storage:', userString);
        if (userString && userString !== "undefined") {
            try {
                const user_details = JSON.parse(userString);
                console.log('Parsed user data:', user_details);
                return user_details;
            } catch (error) {
                console.error('Error parsing user data from sessionStorage:', error);
                return null; // or handle the error as needed
            }
        } else {
            console.log('User data not found in session storage');
            return null; // or handle the case when 'user' is not found in sessionStorage
        }
    };
    
    
    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/dashboard'); // Use navigate function to redirect
    };

    const logout = () =>{
        sessionStorage.clear();
        navigate('/login')
    }
    const http = axios.create({
        baseURL: "api",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken, // Include getToken in the returned object
        http,
        logout
    };
}
