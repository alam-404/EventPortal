const Loading = () => {
    return (
        <div className='w-full h-[100lvh] flex flex-col justify-center items-center'>
            <span className='loading loading-ball w-80 bg-green-600'></span>
            <span className='text-xl font-semibold text-center'>Loading...</span>
        </div>
    );
};

export default Loading;