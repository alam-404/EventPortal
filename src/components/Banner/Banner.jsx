import { FaArrowDown } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='hero'>
            <div>
                <div className="bg-[url('https://i.ibb.co/ZcKkzQy/pexels-matheus-bertelli-2608517.jpg')] w-full h-[100lvh]  bg-no-repeat bg-cover absolute top-0 left-0 -z-10 blur-sm"></div>
                <div className="absolute bottom-10 flex flex-col justify-center items-center gap-3 left-1/2 text-sm">
                    <p className="text-white font-medium">Scroll</p>
                    <FaArrowDown className="text-white animate-bounce" />
                </div>
            </div>
            <div className="my-52 mx-10 lg:mx-20">
                <h1 className="font-bold text-xl lg:text-6xl text-white mb-7">Welcome to <span className="bg-white rounded-xl text-black px-5 py-2">EventPortal.</span></h1>
                <p className="text-white text-xl">Your portal for game and technology event management.</p>
            </div>
        </div>
    );
};

export default Banner;