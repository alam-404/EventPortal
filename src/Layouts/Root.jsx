import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
const Root = () => {
    return (
        <div className='lg:mx-32'>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;