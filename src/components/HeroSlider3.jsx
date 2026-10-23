// src/components/Hero.jsx

import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import gsap from "gsap";

import "./hero-style3.css";

import { NavLink } from "react-router-dom";

const slides = [
    {
        id: 1,
        bg: "/imgs/water-hero-slider3.jpeg",
        bottle: "/imgs/new-created-bottle-bonafide-img.png",
        subtitle: "PURE • NATURAL • REFRESHING",
        title: "Experience The Purity Of Premium Mineral Water",
    },

    {
        id: 2,
        bg: "/imgs/water-hero-slider2.jpeg",
        bottle: "/imgs/new-created-bottle-bonafide-img-2.png",
        subtitle: "CRYSTAL • CLEAN • HEALTHY",
        title: "Refreshing Hydration From Nature",
    },
    {
        id: 3,
        bg: "/imgs/water-hero-slider2.jpeg",
        bottle: "/imgs/smart-bottle-new-design-2.png",
        subtitle: "100% • PURE • MINERAL",
        title: "Premium Water For Better Living",
    },

    {
        id: 4,
        bg: "/imgs/water-hero-slider2.jpeg",
        bottle: "/imgs/bottle-img-lg-with-shadow-img.png",
        subtitle: "100% • PURE • MINERAL",
        title: "Premium Water For Better Living",
    },
];

const Hero = () => {

    const animateSlide = () => {

        gsap.fromTo(
            ".swiper-slide-active .hero-subtitle",
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            ".swiper-slide-active .hero-title",
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                delay: 0.2,
                ease: "power4.out",
            }
        );

        gsap.fromTo(
            ".swiper-slide-active .hero-btns",
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            }
        );

        gsap.fromTo(
            ".swiper-slide-active .hero-bottle",
            {
                opacity: 0,
                y: 300,
                scale: 0.7,
                rotate: 8,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                duration: 1.8,
                ease: "power4.out",
            }
        );

    };

    useEffect(() => {

        setTimeout(() => {
            animateSlide();
        }, 300);

    }, []);

    return (
        <>

            <section className="hero-section">

                <Swiper

                    modules={[Pagination, Autoplay, EffectFade]}

                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}

                    speed={1400}

                    loop={true}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        clickable: true,
                    }}

                    onSlideChangeTransitionStart={() => {

                        gsap.to(".hero-bottle", {
                            opacity: 0,
                            y: -200,
                            scale: 0.8,
                            duration: 0.5,
                        });

                    }}

                    onSlideChangeTransitionEnd={() => {

                        animateSlide();

                    }}

                    className="heroSwiper"
                >

                    {slides.map((slide) => (

                        <SwiperSlide key={slide.id}>

                            <div
                                className="hero-slide"
                                style={{
                                    backgroundImage: `url(${slide.bg})`, backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >

                                <div className="hero-overlay"></div>

                                {/* Glow */}
                                <div className="water-glow hero-glow-1"></div>
                                <div className="water-glow hero-glow-2"></div>

                                {/* Bubbles */}
                                <div className="bubble bubble-1"></div>
                                <div className="bubble bubble-2"></div>
                                <div className="bubble bubble-3"></div>

                                <div className="container">

                                    <div className="row align-items-center hero-row">

                                        {/* LEFT */}
                                        <div className="col-lg-6 col-md-12">

                                            <div className="hero-content">

                                                <span className="hero-subtitle">

                                                    {slide.subtitle}

                                                </span>

                                                <h1 className="hero-title">

                                                    {slide.title}

                                                </h1>

                                                <div className="hero-btns">

                                                    <NavLink
                                                        to="/enquiry"
                                                        className="btn btn-primary primary-btn"
                                                    >

                                                        Explore Bonafide

                                                    </NavLink>

                                                </div>

                                            </div>

                                        </div>

                                        {/* RIGHT */}
                                        <div className="col-lg-6">

                                            <div className="hero-image">

                                                {/* Leafs */}

                                                <img
                                                    src="/imgs/leaf01.png"
                                                    alt=""
                                                    className="leaf leaf-1"
                                                />

                                                <img
                                                    src="/imgs/leaf02.png"
                                                    alt=""
                                                    className="leaf leaf-2"
                                                />

                                                <img
                                                    src="/imgs/leaf03.png"
                                                    alt=""
                                                    className="leaf leaf-3"
                                                />

                                                {/* Bottle */}

                                                <img
                                                    src={slide.bottle}
                                                    alt=""
                                                    className="hero-bottle img-fluid"
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Wave */}

                                <div className="topwave-wrapper">

                                    <div className="top-wave">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 500 28.1"
                                            preserveAspectRatio="none"
                                        >

                                            <path
                                                className="wave-fill"

                                                d="
                                                M500.2,0v23.5
                                                c-13.2,0.4-26.4,0-39.2-1.5
                                                c-22.7-2.7-43.3-8.6-65.1-12.6
                                                c-21.8-4-47.3-6.1-68.2-1.1
                                                c-12.5,2.9-21.8,8-32.5,12.3
                                                s-23.9,8-37.6,7.1
                                                c-18.3-1.1-31.1-9.7-49.1-11.3
                                                c-19.2-1.6-37.3,5.1-56.8,6.1
                                                c-19.8,1-38.4-4-56.6-7.8
                                                C65.2,8.4,32.7,5.1,0,4.9
                                                V0h500H500.2z
                                                "
                                            ></path>

                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </section>

        </>
    );
};

export default Hero;