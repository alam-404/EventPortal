import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';


import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';

// Root Layout
const Root = () => {
    const { pageLoading } = useContext(AuthContext)
    const navigation = useNavigation()

    return (
        <>
        <ToastContainer />
        {
            pageLoading || navigation.state === 'loading' ? 
            <Loading />
            :
            <div className='scroll-smooth'>
                <header className='mx-3 lg:mx-32'>
                    <Navbar />
                </header>
                <section className='lg:mx-32'>
                    <Outlet></Outlet>
                </section>
                <footer className='mt-10 relative'>
                    <Footer />
                </footer>
            </div>
        }
        </>
    );
};

export default Root;