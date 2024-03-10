import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    const jwt = localStorage.getItem("jwt");

    if(jwt) {
        return children;
    }
    
    return navigate('/login');
};

export default ProtectedRoute;