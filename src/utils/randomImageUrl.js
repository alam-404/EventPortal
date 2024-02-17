const randomImageUrl = async () => {
    const images = await fetch('/data/images_data.json')
    const data = await images.json()
    const index = randomIndex(data.carousel.length)
    return data.carousel[index].image_url
}

const randomIndex = (max) => Math.floor(Math.random() * max)

export {
    randomImageUrl
}