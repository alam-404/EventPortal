import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    // auth context
    const { user } = useContext(AuthContext)
    // location
    const location = useLocation()

    return (
        <>
            {
                user ? { children } : <Navigate to='/login' state={location.pathname} />
            }
        </>
    );
};

export default PrivateRoutes;