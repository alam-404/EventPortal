import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Root = () => {
    return (
        <>
            <header className='lg:mx-32'>
                <Navbar />
            </header>
            <section className='lg:mx-32'>
                <Outlet></Outlet>
            </section>
            <section className='mt-10 flex justify-center'>
                <hr className='w-44'/>
            </section>
            <footer className='mt-10'>
                <Footer />
            </footer>
        </>
    );
};

export default Root;