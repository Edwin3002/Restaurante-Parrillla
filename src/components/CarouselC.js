import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselC = () => {
    return (
        <Carousel className='car' fade>
            <Carousel.Item c>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1654873981/medallo/frutas_twfggf.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg" 
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1654873982/medallo/frutas2_hqpxgb.webp"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1654873983/medallo/frutas3_meao5r.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
