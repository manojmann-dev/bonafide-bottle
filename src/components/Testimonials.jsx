// src/components/Testimonials.jsx

import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial-style.css";

const Testimonials = () => {

    const testimonials = [

        {
            id: 1,
            name: "Mr. A. Verma",
            role: "General Manager, Premium Hotel",
            image: "/imgs/bonafide-testi-img1.png",
            review:
                "Bonafide Minerals has consistently delivered high-quality bottled water for our guests. Their reliability and commitment to timely service make them a valued partner for our hospitality operations.",
        },

        {
            id: 2,
            name: "Ms. Priya S.",
            role: "Administration Head, Corporate Office",
            image: "/imgs/bonafide-testi-img2.png",
            review:
                "We appreciate the professionalism and consistency that Bonafide Minerals brings to our workplace. Their bottled water products meet the quality standards we expect for our employees and visitors.",
        },

        {
            id: 3,
            name: "Mr. R. Khanna",
            role: "Director, Events & Banquets",
            image: "/imgs/bonafide-testi-img3.png",
            review:
                "For every event we host, dependable suppliers are essential. Bonafide Minerals has always delivered on time, ensuring our guests receive safe and premium-quality drinking water.",
        },

        {
            id: 4,
            name: "Ms. N. Kapoor",
            role: "Operations Manager, Business Centre",
            image: "/imgs/bonafide-testi-img4.png",
            review:
                "The product quality, packaging, and customer support from Bonafide Minerals have been excellent. We highly recommend them to organizations seeking a dependable water supplier.",
        },

    ];


    //   useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    
    //     // SECTION HEADING
    //     gsap.from(".testi-heading ", {
    //         scrollTrigger: {
    //             trigger: ".testimonials-section",
    //             start: "top 85%",
    //             toggleActions: "play none none reverse",
                
    //         },
    
    //         y: 80,
    //         opacity: 0,
    //         duration: 1.3,
    //         ease: "power3.out",
    //     });

    // }, []);
    return (

        <section className="testimonials-section">

            {/* Section Glow */}
            <div className="testimonial-glow testimonial-glow-1"></div>
            <div className="testimonial-glow testimonial-glow-2"></div>

            <div className="container-fluid px-lg-5">

                {/* SECTION TITLE */}

                <div className="testi-heading section-heading text-center" 
                     data-aos="fade-up" 
                     data-aos-delay="500"
                >

                    <span className="testi-subtitle section-subtitle">
                        TESTIMONIALS
                    </span>

                    <h2 className="testi-title section-title">
                        What Our Customers
                        <span> Say About BONAFIDE</span>
                    </h2>

                </div>

                {/* SWIPER */}

                <Swiper

                    modules={[Autoplay, Pagination]}

                    spaceBetween={30}

                    slidesPerView={3}

                    loop={true}

                    speed={1200}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true,
                    }}


                    breakpoints={{

                        0: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        1200: {
                            slidesPerView: 3,
                        },

                    }}

                    className="testimonial-swiper"
                    data-aos="fade-up" 
                    data-aos-delay="600"
                >

                    {testimonials.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className="testimonial-card">

                                {/* Quote Icon */}

                                <div className="quote-icon">

                                    <i className="fa-solid fa-quote-right"></i>

                                </div>

                                {/* Review */}

                                <p className="testimonial-text">

                                    {item.review}

                                </p>

                                {/* User */}

                                <div className="testimonial-user">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>

                                        <h4>{item.name}</h4>

                                        <span>{item.role}</span>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>

    );
};

export default Testimonials;