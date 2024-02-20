import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/data/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                {
                    services.map(service => <div className="card w-80 lg:w-96 bg-base-100 shadow-xl image-full" key={service._id}>
                        <figure className="h-96"><img src={service.image_url} alt={service.service_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title align-text-bottom">{service.service_name}</h2>
                            <p>{service.short_description}</p>
                            <div className="card-actions justify-end">
                                <div className="flex items-center gap-3">
                                    <p className="font-bold">$ {service.price}</p>
                                    <Link to={`/service/${service._id}`} className="btn btn-primary">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;