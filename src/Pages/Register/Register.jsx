import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(0)

    // error state
    const [errorPassword, setErrorPassword] = useState('')
    const [confirmError, setConfirmError] = useState('')

    const formSubmit = (event) => {
        // reset error
        setErrorPassword('')

        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        form.reset()
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
        <div className="hero w-full h-[100lvh]">
            <div className="card shadow-lg w-80 lg:w-96 p-8 border">
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
                            <label className={`input input-bordered ${errorPassword ? 'input-error' : ''} flex items-center gap-3`}>
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
                            <label className={`input input-bordered ${confirmError ? 'input-error' : ''} flex items-center gap-3`}>
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
                                <input type="checkbox" className="checkbox checkbox-primary w-6 h-6" />
                                <span className="text-sm">Accept our <Link to='/terms' className="link">Terms and Conditions</Link> </span>
                            </label>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary text-white w-full">Register</button>
                </form>
                {/* Goto login page */}
                <h5 className="mt-5">Already an user? <Link className="link font-semibold text-green-500 hover:text-green-600" to="/login">Login</Link></h5>
            </div>
        </div>
    );
};

export default Register;