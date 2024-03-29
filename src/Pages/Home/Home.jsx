import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services/Services";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-[calc(100vh-600px)] lg:mt-[calc(100vh-500px)] will-change-scroll">
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
                    <div className="mt-5">
                        <Link to={'/review'} className="px-5 py-4 text-slate-50 shadow-lg font-semibold bg-green-400 rounded-lg">Write Review</Link>
                    </div>
                </div>
                <section className='mt-10 flex justify-center'>
                    <hr className='w-44' />
                </section>
            </div>
        </div>
    );
};

export default Home;