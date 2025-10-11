import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Avatar from "../../assets/img/Avatar.png"
import Avatar1 from "../../assets/img/Avatar(1).png"
import './AboutUs.css'

const testimonials = [
    {
        id: 1,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
    {
        id: 2,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar1,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
    {
        id: 3,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar1,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
    {
        id: 4,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
    {
        id: 5,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar1,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
    {
        id: 6,
        name: "Sam Crockett",
        role: "Independent Web Developer",
        image: Avatar1,
        text: "The freelance talent we work with are more productive than we ever thought possible. The freelance talent we work with are more productive than .",
    },
];

const AboutUs = () => {
    const [countId, setCountId] = useState(2)


    const handleNext = () => {
        setCountId((prev) => (prev < testimonials.length ? prev + 1 : 1));
    };

    const handlePrev = () => {
        setCountId((prev) => (prev > 1 ? prev - 1 : testimonials.length));
    };
    
    return (
        <div className='mb-20'>
            <h2 className="text-[53px] font-bold mb-[20px] mt-[62px] text-center">
                People talk about us
            </h2>
            <p className="text-[20px] font-normal text-[#2A1E17] text-center max-w-[444px] mx-auto mb-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className='relative'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={true}
                    // centeredSlides={true}
                    // pagination={{ clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    breakpoints={{
                        1024: { slidesPerView: 3 },
                        700: { slidesPerView: 1 },
                    }}
                    className="w-full"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={item.id} className='p-[15px]'>
                            <div className={`card relative flex flex-col items-center text-center rounded-2xl max-xl:shadow:2xl max-xl:transition-all max-xl:border border-[#CAD3D7] shadow p-8 pt-14 transition-all ease text-[#333333] ${countId === item.id ? "-mt-10" : "mt-0"}`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[160px] absolute -top-15 z-[1] flex justify-center"
                                />
                                <p className="mb-4 mt-2 max-w-[583px]">“{item.text}”</p>
                                <h3 className="font-bold">{item.name}</h3>
                                <span className="font-normal">{item.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className="swiper-button-prev-custom cursor-pointer text-3xl"
                    onClick={handlePrev}
                >
                    &#10094;
                </div>
                <div
                    className="swiper-button-next-custom cursor-pointer text-3xl"
                    onClick={handleNext}
                >
                    &#10095;
                </div>
            </div>
        </div>
    )
}

export default AboutUs