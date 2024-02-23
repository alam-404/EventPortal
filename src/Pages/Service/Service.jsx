import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const Service = () => {
    const service = useLoaderData()
    const { inside_package } = service;
    const service_packages = inside_package.split('- ')
    // Book button
    const [booked, setBooked] = useState(false)
    const bookButton = () => {
        setBooked(true)
        document.getElementById('success-modal').showModal()
    }

    return (
        <>
            <div className="hero mt-12">
                <div className="w-1/2 mx-auto">
                    <div className="hero-content flex-col">
                        <img src={service.image_url} className="rounded-lg" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-medium">{service.service_name}</h1>
                        <p className="mt-5">{service.description}</p>
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
                <Modal>
                    <h3 className="font-bold text-lg text-success">Success!!</h3>
                    <p className="py-4">Your event booking is confirmed. Get ready for an extraordinary experience filled with innovation, excitement and unforgettable moments. We look forward to hosting you at {service.service_name}. If you have any questions or special requests, feel free to reach out. See you there.</p>
                </Modal>
            </div>
        </>
    );
};

export default Service;