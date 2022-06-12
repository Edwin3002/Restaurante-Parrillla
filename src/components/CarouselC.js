import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselC = () => {
    return (
        <Carousel className='car' fade>
            <Carousel.Item c>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1655012505/restaurant/c3_2_uvposy.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg" 
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1655012506/restaurant/c1_2_vdghfs.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1655012508/restaurant/c2_2_jyymef.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carImg"
                    src="https://res.cloudinary.com/edwin3002/image/upload/v1655012515/restaurant/car2_2_ueyqik.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
