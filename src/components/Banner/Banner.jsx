import { useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const Banner = () => {
    
    useEffect(() => {
        document.getElementById('banner-image').style.backgroundImage = `url('https://i.ibb.co/ZcKkzQy/pexels-matheus-bertelli-2608517.jpg')`
        const time = 10 * 1000;
        const imageChanger = setInterval(() => {
            fetch('/data/services.json')
            .then(res => res.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length)
                const imageUrl = data[randomIndex].image_url
                document.getElementById('banner-image').style.backgroundImage = `url('${imageUrl}')`
            })
        }, time);
        return () => clearInterval(imageChanger);
    }, [])
    return (
        <div className='hero'>
            <div>
                <div className="w-full h-[100lvh]  bg-no-repeat bg-cover absolute top-0 left-0 -z-10 blur-md" id='banner-image'></div>
                <div className="absolute bottom-10 flex flex-col justify-center items-center gap-3 left-[calc(50%-20px)] text-sm">
                    <p className="text-white font-medium">Scroll</p>
                    <FaArrowDown className="text-white animate-bounce" />
                </div>
            </div>
            <div className="my-52 mx-10 lg:mx-20">
                <h1 className="font-bold text-xl lg:text-6xl text-white mb-7">Welcome to <span className="bg-white rounded-xl transition-transform duration-500 text-black px-5 py-2 hover:-rotate-6 inline-block">EventPortal<span className='text-green-500 animate-ping'>.</span></span></h1>
                <p className="text-white text-sm lg:text-xl">Your portal for game and technology event management.</p>
            </div>
        </div>
    );
};

export default Banner;