const serviceLoader = async (id) => {
    const res = await fetch('/data/services.json')
    const data = await res.json()
    let service = data.find(service => service._id == id)
    if (!service) service = ''
    return service;
}

export {
    serviceLoader
}