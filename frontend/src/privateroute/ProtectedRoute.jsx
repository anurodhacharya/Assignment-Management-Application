import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Inside Protected UseEffect");
        const jwt = localStorage.getItem("jwt");
        if(!jwt) {
            navigate('/login');
        }
        
    }, [])

    console.log("Inside Protected before returning children");
    return children;
};

export default ProtectedRoute;