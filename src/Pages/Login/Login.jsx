import { useContext, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(0)

    const formSubmit = (event) => {
        // prevent the default page reload action 
        // on form submit
        event.preventDefault();
        // get value form login form
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        // login user
        loginUser(email, password)
            .then(result => console.log('successfully logged in'))
            .catch(error => console.error(error))
        // reset the form on submit
        form.reset()
    }

    return (
        <div className="hero w-full h-[100lvh]">
            <div className="card bg-white shadow-lg w-80 lg:w-96 p-8 border">
                <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>
                <form onSubmit={formSubmit}>
                    <div className="mb-5">
                        <label className="input input-bordered flex items-center gap-3 mb-2">
                            <FaEnvelope />
                            <input type="email" className="grow" placeholder="Email" name="email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-3">
                            <FaLock />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="grow"
                                placeholder="Password"
                                name="password"
                                required />
                            <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary text-white w-full">Login</button>
                </form>
                <h5 className="mt-5">Don&apos;t have an account? <Link className="link font-semibold text-green-500 hover:text-green-600" to="/register">Register</Link></h5>
            </div>
        </div>
    );
};

export default Login;