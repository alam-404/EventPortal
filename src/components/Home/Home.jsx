import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {

    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-[calc(100vh-500px)]">
                <div className="bg-slate-50 p-3 mb-6">
                    <Features />
                </div>
                <Services />
            </div>

            {/* <div className="carousel absolute top-0 left-0 -z-10 w-full">
                {
                    carouselImages.map(imgData => <div className="carousel-item w-full" key={imgData._id}>
                        <img src={imgData.image_url} className="w-full h-[100lvh] object-cover blur-sm" id={`slide-${imgData._id}`} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide-${}`} className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    )
                }
            </div> */}
        </div>
    );
};

export default Home;