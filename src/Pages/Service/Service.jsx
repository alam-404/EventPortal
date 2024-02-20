import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookedModal from "../../components/BookedModal/BookedModal";

const Service = () => {
    const service = useLoaderData()
    const { inside_package } = service;
    const service_packages = inside_package.split('- ')
    // Book button
    const [booked, setBooked] = useState(false)
    const bookButton = () => {
        setBooked(true)
        document.getElementById('book-modal').showModal()
    }

    return (
        <>
            <div className="hero h-[100lvh]">
                <div className="w-1/2 mx-auto">
                    <div>
                        <h1 className="text-4xl font-medium">{service.service_name}</h1>
                        <p className="mt-5 text-justify">{service.description}</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-medium">Inside the package</h3>
                        <ul className="list-disc ms-8 mt-2">
                            {
                                service_packages.map(service_package =>
                                    service_package && <li className='list-item' key={Math.random()}>{service_package}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="mt-12 flex flex-col gap-3">
                        <h5 className="font-bold text-lg">$ {service.price}</h5>
                        <button className={`btn btn-primary w-32`}
                            onClick={bookButton}
                            disabled={booked}
                        >{booked ? "Booked" : "Book"}</button>
                    </div>
                </div>
            </div>
            {/* Show modal when book button is clicked */}
            <div>
                <BookedModal service={service} />
            </div>
        </>
    );
};

export default Service;