import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Authuser() {
    const navigate = useNavigate(); 

  
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        if (tokenString) {
            try {
                const userToken = JSON.parse(tokenString);
                return userToken;
            } catch (error) {
                console.error('Error parsing token data from sessionStorage:', error);
                return null; 
            }
        } else {
            return null;
        }
    };
    
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        console.log('User data from session storage:', userString);
        if (userString && userString !== "undefined") {
            try {
                const user_details = JSON.parse(userString);
                return user_details;
            } catch (error) {
                return null; 
            }
        } else {
            return null; 
        }
    };
    
    
    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/dashboard'); 
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
        getToken, 
        http,
        logout
    };
}
