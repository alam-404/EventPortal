import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock } from "react-icons/fa6";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const Login = () => {
    // Auth context
    const { user, loginUser, googleLogin } = useContext(AuthContext)

    // Location
    const location = useLocation()

    // page loading
    const [loading, setLoading] = useState(false)

    // password state
    const [showPassword, setShowPassword] = useState(0)

    // error state
    const [error, setError] = useState('')

    // login with email and password
    const formSubmit = (event) => {
        // prevent the default page reload action 
        // on form submit
        event.preventDefault();
        // get value form login form
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        // set loading
        setLoading(true)

        // login user
        loginUser(email, password)
            .then(result => {
                setLoading(false)
                toast('Successfully logged in.')
            })
            .catch(error => {
                const errorCode = error.code
                if (errorCode === 'auth/invalid-credential') {
                    setLoading(false)
                    setError("Invalid email or password")
                }
            })

        // reset the form on submit
        form.reset()
    }

    // Login with google
    const loginWithGoogle = () => {
        setLoading(true)

        googleLogin()
            .then(result => {
                setLoading(false)
                toast('Successfully logged in.')
            })
    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="hero w-full h-[100lvh]">

                        {
                            user ? <Navigate to={location?.state ? location.state : '/'} /> :
                                <div className="card bg-white shadow-lg w-80 lg:w-96 p-8 border">
                                    <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>
                                    <form onSubmit={formSubmit}>
                                        <div className="mb-5">
                                            <label className={`input input-bordered ${error ? 'input-error' : ''} flex items-center lg:gap-3 mb-2`}>
                                                <FaEnvelope />
                                                <input type="email" className="grow" placeholder="Email" name="email" required />
                                            </label>
                                            <label className={`input input-bordered ${error ? 'input-error' : ''} flex items-center justify-around lg:gap-3`}>
                                                <FaLock />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="grow"
                                                    placeholder="Password"
                                                    name="password"
                                                    required />
                                                <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                                    {
                                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                                    }
                                                </span>
                                            </label>
                                        </div>
                                        <span className="text-red-500 block my-2">{error}</span>
                                        {/* Login button */}
                                        <button type="submit" className="btn btn-primary text-white w-full">Login</button>
                                    </form>
                                    {/* Go to login page */}
                                    <div>
                                        <h5 className="mt-5">Don&apos;t have an account? <Link className="link font-semibold text-green-500 hover:text-green-600" to="/register" state={location.state}>Register</Link></h5>
                                    </div>
                                    {/* Login with google */}
                                    <div className='mt-8 mb-5 flex justify-center'>
                                        <hr className='w-44' />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="btn btn-primary" onClick={loginWithGoogle}><FaGoogle className="text-3xl text-white" /></button>
                                    </div>
                                </div>
                        }

                    </div>
            }
        </>
    );
};

export default Login;