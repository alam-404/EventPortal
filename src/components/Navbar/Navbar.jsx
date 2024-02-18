import { FaSun, FaMoon } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <div>
            <div className="navbar bg-slate-800/40 px-5 lg:px-10 rounded-full mt-5 sticky top-0 left-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li>
                                <ActiveLink to='/services'>Services</ActiveLink>
                            </li>
                            <li><ActiveLink to='/about'>About</ActiveLink></li>
                            <li className='mt-5'>
                                {
                                    location.pathname == '/login' || location.pathname == '/register' ?
                                        '' : <Link className="btn btn-primary text-white" to='/login'>Login</Link>

                                }
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-semibold hidden lg:block text-white">EventPortal</Link>
                </div>
                <div className="navbar-center lg:flex">
                    <Link to='/' className="text-xl font-semibold lg:hidden text-white">EventPortal</Link>
                    <ul className="menu hidden lg:flex menu-horizontal px-1 text-white">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li>
                            <ActiveLink to='/services'>Services</ActiveLink>
                        </li>
                        <li><ActiveLink to='/about'>About</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <button><FaSun></FaSun><FaMoon></FaMoon></button> */}
                    {
                        location.pathname == '/login' || location.pathname == '/register' ?
                            '' : <Link className="hidden lg:btn lg:btn-primary text-white" to='/login'>Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

// Active Navigation link
const ActiveLink = ({ children, to }) => {
    return (
        <NavLink className={({ isActive }) => isActive ? 'text-green-500 font-bold underline' : ''} to={to}>
            {children}
        </NavLink>
    )
}

export default Navbar;