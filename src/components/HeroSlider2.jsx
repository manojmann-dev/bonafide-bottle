// src/components/Hero.jsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./hero-style2.css";
import { NavLink } from "react-router-dom";

const Hero = () => {

    const bottleRef = useRef(null);

    useEffect(() => {

        // Bottle Animation
        gsap.fromTo(
            bottleRef.current,
            {
                y: -300,
                opacity: 0,
                rotate: -10,
            },
            {
                y: 0,
                opacity: 1,
                rotate: 0,
                delay: 0.4,
                duration: 3,
                ease: "power4.out",
            }
        );

        // Text Animation
        gsap.from(".hero-subtitle", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.2,
        });

        gsap.from(".hero-title", {
            y: 80,
            opacity: 0,
            duration: 1.2,
            delay: 0.4,
        });

        gsap.from(".hero-btns", {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 1,
        });

        /* ---------------- BUBBLE FLOAT ---------------- */
        // gsap.to(".bubble", {
        //     y: -80,
        //     opacity: 0,
        //     stagger: 0.4,
        //     duration: 4,
        //     repeat: -1,
        //     ease: "power1.out",
        // });

    }, []);

    return (
        <>
        <section className="hero-section position-relative overflow-hidden">

            {/* Glow Effects */}
            <div className="water-glow hero-glow-1"></div>
            <div className="water-glow hero-glow-2"></div>

            {/* Floating Bubbles */}
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>

            <div className="container">

                <div className="row align-items-center min-vh-100">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6">

                        <div className="hero-content">

                            <span className="hero-subtitle">

                                PURE • NATURAL • REFRESHING

                            </span>

                            <h1 className="hero-title">

                                Experience The Purity Of 
                                <span> Premium Mineral Water</span>

                            </h1>

                            {/* <p className="hero-text">

                                Experience crystal-clear hydration with BONAFIDE.
                                Premium bottled water crafted for freshness,
                                purity, and healthy living.

                            </p> */}

                            <div className="hero-btns d-flex gap-3">

                                <NavLink to="/enquiry" className="btn btn-primary primary-btn">

                                    Explore Bonafide

                                </NavLink>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-6">

                        <div className="hero-image text-center position-relative">

                            {/* Circle Background */}
                            <div className="hero-circle"></div>
                            {/* Floating Leaves */}
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
                                ref={bottleRef}
                                src="/imgs/bottle-img-lg-with-shadow-img.png"
                                alt="BONAFIDE Water Bottle"
                                className="img-fluid hero-bottle"
                            />

                            

                        </div>

                    </div>

                </div>

            </div>

           

        </section>

        {/*-- Bottom Wave SVG */}

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
    </>
    );
};

export default Hero;