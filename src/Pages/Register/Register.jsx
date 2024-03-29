import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock, FaUser } from "react-icons/fa6";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import { updateProfile } from "firebase/auth";

const Register = () => {

    // AuthContext
    const { user, setDisplayName, createUser, googleLogin } = useContext(AuthContext)

    // Location
    const location = useLocation()

    // page loading
    const [loading, setLoading] = useState(false)


    // password state
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(0)

    // error state
    const [errorPassword, setErrorPassword] = useState('')
    const [confirmError, setConfirmError] = useState('')
    const [error, setError] = useState('')

    // register with email and password
    const formSubmit = (event) => {
        // reset error
        setErrorPassword('')
        setConfirmError('')
        setError('')
        // prevent default reload page action
        event.preventDefault();

        // get value from register form
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        // set a loading on submit
        setLoading(true)
        // create user
        createUser(email, password)
            .then(result => {
                setLoading(false)
                // reset the form after submit
                form.reset()
                // set display name
                setDisplayName(name)
                // notify user
                toast("User account created.")
            })
            .catch(error => {
                setLoading(false)
                // firebase error code
                const errorCode = error.code

                if (errorCode == "auth/email-already-in-use") {
                    setError("User already exist with this account.")
                }
            })
    }

    // login with google
    const loginWithGoogle = () => {
        setLoading(true)

        googleLogin()
            .then(result => {
                setLoading(false)
                toast('Successfully logged in.')
            })
    }

    // password validation
    const checkPassword = (event) => {
        const password = event.target.value
        // length validation
        if (password.length < 8)
            setErrorPassword("Password must be 8 characters long.")
        // uppercase validation
        else if (!/(?=.*?[A-Z])/.test(password))
            setErrorPassword("Password should include at least one uppercase character.")
        // lowercase validation
        else if (!/(?=.*?[a-z])/.test(password))
            setErrorPassword("Password should include at least one lowercase character.")
        // number validation
        else if (!/(?=.*?[0-9])/.test(password))
            setErrorPassword("Password should include at least one digit.")
        // special char validation
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password))
            setErrorPassword("Password should include at least one special character.")
        else setErrorPassword('')
        // set the password
        setPassword(password)
    }

    // confirm password check
    const confirmPassword = (event) => {
        const typedPassword = event.target.value
        if (typedPassword !== password)
            setConfirmError("Password doesn't match.")
        else setConfirmError('')

    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="hero w-full h-[100lvh]">
                        {user ? <Navigate to={location?.state ? location.state : '/'} /> :
                            <div className="card bg-white shadow-lg w-80 lg:w-96 p-8 border">
                                <h1 className="text-2xl font-semibold text-center mb-5">Register</h1>
                                {/* Register Form */}
                                <form onSubmit={formSubmit}>
                                    <div className="mb-5">
                                        {/* User Name */}
                                        <label className="input input-bordered flex items-center gap-3 mb-2">
                                            <FaUser />
                                            <input
                                                type="text"
                                                className="grow"
                                                placeholder="Name"
                                                name="name"
                                                required />
                                        </label>
                                        {/* Email */}
                                        <label className="input input-bordered flex items-center gap-3 mb-2">
                                            <FaEnvelope />
                                            <input
                                                type="email"
                                                className="grow"
                                                placeholder="Email"
                                                name="email"
                                                required />
                                        </label>
                                        {/* Password */}
                                        <div className="mb-2">
                                            <label className={`input input-bordered ${errorPassword ? 'input-error' : ''} flex items-center justify-around lg:gap-3`}>
                                                <FaLock />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="grow"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={checkPassword}
                                                    required />
                                                <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                                    {
                                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                                    }
                                                </span>                            </label>
                                            <span className="text-red-500 block my-2">{errorPassword}</span>
                                        </div>
                                        {/* Confirm Password */}
                                        <div>
                                            <label className={`input input-bordered ${confirmError ? 'input-error' : ''} flex items-center justify-around lg:gap-3`}>
                                                <FaLock />
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="grow"
                                                    placeholder="Confirm Password"
                                                    name="confirm_password"
                                                    onChange={confirmPassword}
                                                    required />
                                                <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                                    {
                                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                                    }
                                                </span>
                                            </label>
                                            <span className="text-red-500 block my-2">{confirmError}</span>
                                        </div>
                                        {/* Accept Terms and Conditions */}
                                        <div className="form-control mt-6">
                                            <label className="flex gap-3 items-center cursor-pointer">
                                                <input type="checkbox" className="checkbox checkbox-primary w-6 h-6" required />
                                                <span className="text-sm">Accept our <Link to='/terms' className="link">Terms and Conditions</Link> </span>
                                            </label>
                                        </div>
                                    </div>

                                    <span className="text-red-500 block my-2">{error}</span>
                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-primary text-white w-full">Register</button>
                                </form>
                                {/* Goto login page */}
                                <div>
                                    <h5 className="mt-5">Already an user? <Link className="link font-semibold text-green-500 hover:text-green-600" to="/login">Login</Link></h5>
                                </div>
                                {/* Register with google */}
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

export default Register;