import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Inside Protected UseEffect");
        const jwt = localStorage.getItem("jwt");
        if(!jwt) {
            navigate('/login');
        }
        const { exp: expiration } = jwtDecode(jwt);
        if(Date.now() > expiration * 1000) {
            navigate('/login');
        }
    }, [])

    console.log("Inside Protected before returning children");
    return children;
};

export default ProtectedRoute;