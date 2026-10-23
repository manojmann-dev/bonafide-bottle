import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import "./home-bottles-style.css";

function HomeBottles(){
    useEffect(() => {
    
        AOS.init({

            duration: 1200,

            once: false,

            mirror: true,

            offset: 80,

            easing: "ease-out-cubic",

        });
    
    }, []);
    return(
        <>
            {/* BOTTLE COLLECTION SECTION */}
            <section className="bottle-showcase-wrapper">
                <div className="container">

                    {/* HEADING */}
                    <div className="text-center bottle-heading-area">
                        <p className="bottle-small-title"
                           data-aos="fade-up" 
                            data-aos-delay="800"
                        >
                            OUR WATER COLLECTION
                        </p>

                        <h2 className="main-heading bottle-main-title pb-0"
                            data-aos="fade-up" 
                            data-aos-delay="900"
                        >
                            Choose Your Perfect Bottle Types
                        </h2>

                        <p className="bottle-description"
                            data-aos="fade-up" 
                            data-aos-delay="900"
                        >
                            Elegant hydration solutions designed for hotels,
                            restaurants, events, offices, and everyday luxury living.
                        </p>
                    </div>

                    <div className="row g-4 mt-5">

                        

                        {/* SMALL PLASTIC */}
                        <div className="col-lg-3 col-md-6">
                            <div className="bottle-card active-bottle-card">

                                <div className="bottle-img-box" 
                                        data-aos="fade-up" 
                                        data-aos-delay="800">
                                    <img
                                        src="./imgs/new-created-bottle-bonafide-img.png"
                                        alt="Small Bottle"
                                        className="img-fluid hmbtl-sample2 hmbtlsmpl"
                                        
                                    />
                                </div>

                                <div className="bottle-content hmbtlsmpl-info">
                                    <span className="bottle-tag"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Daily Hydration
                                    </span>

                                    <h5 class="fw-bold mb-3 mt-1"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Small Plastic Bottle
                                    </h5>

                                    <p 
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Lightweight and convenient bottles perfect
                                        for travel, events, and daily refreshment.
                                    </p>

                                    <a href="#" className="btn btn-primary btn-sm hmbtlsmpl-btn mt-4"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Enquire Now
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* 1 LTR BOTTLE */}
                        <div className="col-lg-3 col-md-6">
                            <div className="bottle-card">

                                <div className="bottle-img-box"
                                    data-aos="fade-up" 
                                    data-aos-delay="800"
                                >
                                    <img
                                        src="./imgs/new-created-bottle-bonafide-img-2.png"
                                        alt="1 Litre Bottle"
                                        className="img-fluid hmbtl-sample3 hmbtlsmpl"
                                        
                                    />
                                </div>

                                <div className="bottle-content hmbtlsmpl-info">
                                    <span className="bottle-tag"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Family Size
                                    </span>

                                    <h5 class="fw-bold mb-3 mt-1"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        1 Litre Water Bottle
                                    </h5>

                                    <p
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Larger hydration capacity for offices,
                                        families, fitness, and active lifestyles.
                                    </p>

                                    <a href="#" className="btn btn-primary btn-sm hmbtlsmpl-btn mt-4"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Enquire Now
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* SMART WATER BOTTLE */}
                        <div className="col-lg-3 col-md-6">
                            <div className="bottle-card">

                                <div
                                    className="bottle-img-box"
                                    data-aos="fade-up"
                                    data-aos-delay="800"
                                >
                                    <img
                                        src="./imgs/smart-bottle-new-design-2.png"
                                        alt="Smart Water Bottle"
                                        className="img-fluid hmbtlsmpl"
                                    />
                                </div>

                                <div className="bottle-content hmbtlsmpl-info">

                                    <span
                                        className="bottle-tag"
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        Smart Hydration
                                    </span>

                                    <h5
                                        className="fw-bold mb-3 mt-1"
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        Smart Water Bottle
                                    </h5>

                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        Advanced hydration bottle with smart temperature
                                        tracking and modern lifestyle convenience.
                                    </p>

                                    <a
                                        href="#"
                                        className="btn btn-primary btn-sm hmbtlsmpl-btn mt-4"
                                        data-aos="fade-up"
                                        data-aos-delay="800"
                                    >
                                        Enquire Now
                                    </a>

                                </div>

                            </div>
                        </div>

                        {/* GLASS BOTTLE */}
                        <div className="col-lg-3 col-md-6">
                            <div className="bottle-card">

                                <div className="bottle-img-box" 
                                        data-aos="fade-up" 
                                        data-aos-delay="600"
                                >
                                    <img
                                        src="./imgs/bottle-img-sm.png"
                                        alt="Glass Bottle"
                                        className="img-fluid hmbtl-sample1 hmbtlsmpl"
                                        
                                    />
                                </div>

                                <div className="bottle-content hmbtlsmpl-info">
                                    <span className="bottle-tag"
                                        data-aos="fade-up" 
                                        data-aos-delay="700"
                                    >
                                        Premium Glass
                                    </span>

                                    <h5 className="fw-bold mb-3 mt-1"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                    Glass Water Bottle</h5>

                                    <p
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        Luxury glass bottled water designed for
                                        premium hospitality experiences.
                                    </p>

                                    <a href="#" className="btn btn-primary btn-sm hmbtlsmpl-btn mt-4"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                        >
                                        Enquire Now
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBottles;
// export default HomeBottles