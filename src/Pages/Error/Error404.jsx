import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center mt-12 px-8">
            <div className="flex items-center gap-5">
                <img src="https://i.ibb.co/NCDZqT6/confetti-ball-1f38a.webp" className="w-96" />
            </div>
            <div className="mt-5">
                <div className="mb-5">
                    <h1 className="text-4xl font-bold">404 | NOT FOUND</h1>
                </div>
                <div className="text-sm text-slate-700">
                    <p>Ahhh! You lost! You are in the wrong event.</p>
                    <p>Unfortunately, they don&apos;t allow outsider in their event. :&apos;(</p>
                </div>
                <div>
                    <p className="text-base mt-5">Go to <Link to='/' className="link link-primary font-medium">Home</Link> and book your own event.</p>
                </div>
            </div>
        </div>
    );
};

export default Error404;