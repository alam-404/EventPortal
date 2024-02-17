import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {

    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-[calc(100vh-500px)]">
                {/* Our Features */}
                <div className="bg-slate-50 p-3 mb-6 rounded-lg">
                    <Features />
                </div>
                <section className='mt-10 mb-5 flex justify-center'>
                    <hr className='w-44' />
                </section>
                {/* Our Services */}
                <div className="flex justify-center items-center flex-col gap-10 mt-5">
                    <div>
                        <h1 className="text-3xl font-semibold">Our Services</h1>
                    </div>
                    <Services />
                </div>
                <section className='mt-10 mb-5 flex justify-center'>
                    <hr className='w-44' />
                </section>
                {/* Our Reviews */}
                <div className="flex justify-center items-center flex-col gap-10 mt-16">
                    <h1 className="text-3xl font-semibold">Our Reviews</h1>
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default Home;