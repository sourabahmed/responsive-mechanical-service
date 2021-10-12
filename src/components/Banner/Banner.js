import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner/banner-1.jpg'
import banner2 from '../../Images/banner/banner-2.jpg'
import banner3 from '../../Images/banner/banner-3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://www.simpleimageresizer.com/_uploads/photos/c925945a/istockphoto-914314364-170667a_1300x500.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://www.simpleimageresizer.com/_uploads/photos/c925945a/istockphoto-1285071153-170667a_1300x500.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://www.simpleimageresizer.com/_uploads/photos/c925945a/istockphoto-1289143731-170667a_1300x500.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;