import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';

const Features = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-center mx-3 lg:mx-32 my-10 gap-4 text-white'>
            <div className='bg-slate-400 w-62 px-5 py-8 rounded-2xl flex flex-col justify-center items-center gap-3'>
                <FaCalendarDays className=' text-6xl' />
                <h1 className='text-2xl font-bold'>24/7</h1>
                <p className='text-xs'>We are open 24/7. Feel free to checkout us on anytime.</p>
            </div>
            <div className='bg-slate-400 w-62 px-5 py-8 rounded-2xl flex flex-col justify-center items-center gap-3'>
                <FaLocationDot  className='text-6xl' />
                <h1 className='text-2xl font-bold'>Great Location</h1>
                <p className='text-xs'>We have a great location. You will definitely love it.</p>
            </div>
        </div>
    );
};

export default Features;