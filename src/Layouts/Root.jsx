import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Root = () => {
    return (
        <div className='scroll-smooth'>
            <header className='mx-3 lg:mx-32'>
                <Navbar/>
            </header>
            <section className='lg:mx-32'>
                <Outlet></Outlet>
            </section>
            <footer className='mt-10'>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;