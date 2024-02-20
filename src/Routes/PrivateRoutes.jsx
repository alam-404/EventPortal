import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    // auth context
    const { user, pageLoading } = useContext(AuthContext)
    // location
    const location = useLocation()

    if (pageLoading) return <Loading />

    if (user) return children

    return <Navigate to='/login' state={location.pathname} />;
};

export default PrivateRoutes;