import { FaFacebook, FaInstagram, FaMapPin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full h-52 bg-black text-slate-300 p-5 lg:px-32 lg:py-10 ">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
                <div>
                    <h1 className="text-2xl lg:text-4xl">EventPortal</h1>
                    <div className="flex items-center gap-3 mt-2 text-xs lg:text-base">
                        <FaMapPin></FaMapPin>
                        <address>
                            Begum Rokeya Avenue,
                            Dhaka - 1207
                        </address>
                    </div>
                </div>
                <div>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-3 text-xl">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>
                <div className="lg:hidden">
                    <p className="text-xs">Copyright &copy; 2024 - All right reserved</p>
                </div>
            </div>
            <div className="mt-8 hidden lg:block">
                <p className="text-xs lg:text-sm">Copyright &copy; 2024 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;