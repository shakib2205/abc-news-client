import React from 'react';
import image1 from '../../../assets/brands/image1.png';
import image2 from '../../../assets/brands/image2.avif';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;