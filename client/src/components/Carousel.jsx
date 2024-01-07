import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CCTV from '../assets/CCTV.png';
import Epson from '../assets/Epson.png';
import lenovo from '../assets/lenovo.png';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 5000); // Auto slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: CCTV,
        },
        {
            text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: Epson,
        },
        {
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            image: lenovo,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    const goToSlide = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
            setCurrentIndex(index);
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto my-8 relative">
            <Slider ref={sliderRef} {...settings} >
                {/* Slides content */}
                {slides.map((slide, index) => (
                    <div key={index} className="flex items-center">
                        <div className=''>
                        <img
                            className="w-1/2 h-64 object-contain relative"
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                        />
                        </div>
                        <div className="w-1/2 pl-8">
                            <p className="text-lg font-semibold">{slide.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="absolute top-1/2 transform -translate-y-1/2 left-1 ">
                <button
                    onClick={() => goToSlide(currentIndex - 1)}
                    className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white'
                >
                    <ChevronLeft size={40} />
                </button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-1 ">
                <button
                    onClick={() => goToSlide(currentIndex + 1)}
                    className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white'
                >
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;