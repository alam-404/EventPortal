import { FaEnvelope, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="hero w-full h-[100lvh]">
            <div className="card shadow-lg w-80 lg:w-96 p-8 border">
                <h1 className="text-2xl font-semibold text-center mb-5">Login</h1>
                <form>
                    <div className="mb-5">
                        <label className="input input-bordered flex items-center gap-3 mb-2">
                            <FaEnvelope />
                            <input type="email" className="grow" placeholder="Email" required />
                        </label>
                        <label className="input input-bordered flex items-center gap-3">
                            <FaLock />
                            <input type="password" className="grow" placeholder="Password" required />
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