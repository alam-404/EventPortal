import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';

// Root Layout
const Root = () => {
    const { pageLoading } = useContext(AuthContext)

    return (
        <>
        <ToastContainer />
        {
            pageLoading ? 
            <div className='w-full h-[100lvh] flex flex-col justify-center items-center'>
                <span className='loading loading-ball w-80 bg-green-600'></span>
                <span className='text-xl font-semibold text-center'>Loading...</span>
            </div>
            :
            <div className='scroll-smooth'>
                <header className='mx-3 lg:mx-32'>
                    <Navbar />
                </header>
                <section className='lg:mx-32'>
                    <Outlet></Outlet>
                </section>
                <footer className='mt-10'>
                    <Footer />
                </footer>
            </div>
        }
        </>
    );
};

export default Root;