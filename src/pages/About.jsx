import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import "./about-style.css";
import { PiDropLight } from "react-icons/pi";
import { FiPackage } from "react-icons/fi";
import { FaBottleWater } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { PiPackageLight } from "react-icons/pi";
import { HiOutlineCube } from "react-icons/hi2";
import { TbRecycle } from "react-icons/tb";

import { NavLink } from "react-router-dom";


function AboutUs(){
    const aboutBottleImage =
        "./imgs/abut-box-img4.png?q=80&w=1200&auto=format&fit=crop";

    const mineralBottleImage =
        "https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=1200&auto=format&fit=crop";

    
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
            <Helmet>

                {/* PAGE TITLE */}
                <title>
                    About Us | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Discover Bonafide premium glass bottled water crafted for luxury hotels, restaurants, weddings, corporate spaces, and elegant hospitality experiences."
                />

                <meta
                    name="keywords"
                    content="Bonafide water, premium bottled water, glass bottled water, luxury hospitality water, restaurant bottled water, hotel water service, wedding bottled water, corporate hospitality water"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />



                {/* OPEN GRAPH SEO */}
                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:site_name"
                    content="Bonafide"
                />

                <meta
                    property="og:title"
                    content="About Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Learn about Bonafide and our premium glass bottled water solutions designed for luxury hospitality and modern experiences."
                />

                <meta
                    property="og:image"
                    content="https://bonafidewater.com/images/about-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/about"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="About Bonafide Premium Glass Bottled Water"
                />

                <meta
                    name="twitter:description"
                    content="Premium glass bottled water designed for luxury hospitality experiences."
                />

                <meta
                    name="twitter:image"
                    content="https://bonafidewater.com/images/about-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/about"
                />

            </Helmet>

            <div className="abt-wide-container">
                <section className="abt-banner-wrapper d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header-banner">
                                    <h1 className="abt-banner-head" 
                                        data-aos="fade-up" 
                                        data-aos-delay="1200"> 
                                            
                                            About Bonafide
                                    </h1>
                                    <p 
                                        data-aos="fade-up" 
                                        data-aos-delay="1200" 
                                    > 
                                    Redefining Water With Elegance & Purity </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="abt-middle-wrapper">

                    <div className="abt2-wrapper">

                        {/* ======== ABOUT PAGE MIDDLE SECTION ============= */}

                        {/* About Top Section */}
                        
                        <section className="about-middle-section py-5">
                        {/* About Second Section */}

                            <div className="abut-outer-wrapper abt-section2">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-4">
                                            <div className="abt-contbx abt-bfide-left">
                                                {/* <h2 className="abt-main-title"> More Than Water. </h2> */}
                                                {/* <h3>
                                                    Pure Water. Premium Presence.
                                                </h3> */}
                                                {/* <p>
                                                    At Bonafide, we believe water should feel as premium as the spaces it's served in. 
                                                    Our elegant glass bottled water is crafted for luxury hotels, fine dining restaurants, 
                                                    corporate spaces, and unforgettable celebrations.    
                                                </p> */}
                                                
                                                {/* <p> 
                                                    Every bottle reflects sophistication, sustainability, and refined hospitality — delivering more 
                                                    than hydration, delivering an elevated guest experience.
                                                </p> */}

                                                <h2 className="display-5 fw-bold mt-3 mb-4 text-dark" 
                                                    data-aos="fade-up" 
                                                    data-aos-delay="800"
                                                >
                                                    Elevating Hospitality With Premium Glass Water Solutions
                                                </h2>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-4">
                                            <div className="abt-imgbx abt-bfide-right" 
                                                    data-aos="zoom-in" 
                                                    data-aos-delay="900"
                                            >
                                                <img src="./imgs/abut-box-img7.png" alt="about-img" className="abut-img1 img-fluid rounded"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="abt-contbx abt-bfide-right"
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"
                                            >
                                                {/* <h2 className="abt-main-title"> More Than Water. </h2> */}
                                                {/* <h3>
                                                    Crafted For Hospitality Excellence.
                                                </h3> */}
                                                {/* <p>
                                                    Bonafide transforms everyday water service into a refined statement of quality and elegance. 
                                                    Designed for premium venues and modern hospitality brands, our glass bottles combine clean presentation with timeless style.
                                                </p>
                                                
                                                <p> 
                                                    From luxury stays to exclusive events, Bonafide helps businesses create memorable experiences with every sip.
                                                </p> */}

                                                <p>
                                                    Bonafide redefines premium water presentation for luxury hospitality spaces. Our elegant glass bottled water is crafted for hotels, restaurants, weddings, corporate environments, and exclusive events.
                                                </p>
                                                <p>
                                                    With refined design, sustainable packaging, and premium quality, Bonafide enhances every guest experience through sophisticated hydration solutions made for modern hospitality and memorable occasions.
                                                </p>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* WHAT WE DO */}
                            <div className="abt-whtwd-wrapper abt-section4">
                                <div className="container py-5">
                                    <div className="row py-1">

                                        <div className="col-lg-4">

                                            <div className="p-5 border rounded-4 h-100 shadow-sm whtwd-box" 
                                                data-aos="fade-up" 
                                                data-aos-delay="600"
                                            >
                                                <img src="./imgs/what-wedo-icon-blk-xs.png" alt="about-img" className="whtd-icon"/>
                                                <br/>
                                                <span className="text-uppercase fw-semibold text-primary small whtd-tagline">
                                                    What We Do
                                                </span>

                                                <h3 className="fw-bold mt-3 mb-4">
                                                    Elegant Water Supply Solutions
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    We provide premium purified water in reusable glass bottles
                                                    tailored for luxury hospitality and professional environments.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-4 mt-4 mt-lg-0">

                                            <div className="p-5 border rounded-4 h-100 shadow-sm whtwd-box"
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            >
                                                <img src="./imgs/mission-icon-xs-blk.png" alt="about-img" className="whtd-icon"/>
                                                <br/>
                                                <span className="text-uppercase fw-semibold text-primary small whtd-tagline">
                                                    Our Mission
                                                </span>

                                                <h3 className="fw-bold mt-3 mb-4">
                                                    Sustainability With Elegance
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    To deliver premium hydration experiences while promoting
                                                    environmentally responsible and sustainable serving solutions.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-4 mt-4 mt-lg-0">

                                            <div className="p-5 border rounded-4 h-100 shadow-sm whtwd-box"
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"
                                            >
                                                <img src="./imgs/vision-icon-xs-blk.png" alt="about-img" className="whtd-icon"/>
                                                <br/>
                                                <span className="text-uppercase fw-semibold text-primary small whtd-tagline">
                                                    Our Vision
                                                </span>

                                                <h3 className="fw-bold mt-3 mb-4">
                                                    Redefining Modern Water Serving
                                                </h3>

                                                <p className="text-muted mb-0">
                                                    To become a trusted symbol of premium hospitality hydration
                                                    through innovation, purity, and timeless presentation.
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* DIRECTOR MESSAGE */}
                            <div className="abt-dirmsg-wrapper abt-section5">
                                <div className="container py-5">
                                    <div className="row align-items-center g-5 py-5 dirmsg-inner">

                                        <div className="col-lg-4 text-center dirmsg-imgbox overflow-hidden"
                                            data-aos="fade-up" 
                                            data-aos-delay="900"
                                        >

                                            <img
                                                src="../../imgs/bonafide-director-pic.png?q=80&w=1000&auto=format&fit=crop"
                                                alt="Company Director"
                                                className="img-fluid rounded-4 shadow-lg"
                                            />
                                        </div>

                                        <div className="col-lg-8 dirmsg-content" 
                                                data-aos="fade-up" 
                                                data-aos-delay="1200">

                                            <span className="text-uppercase fw-semibold text-primary small">
                                                Director Message
                                            </span>

                                            <h2 className="display-5 fw-bold mt-3 mb-4 text-dark">
                                                Delivering More Than Water
                                            </h2>

                                            <p className="text-muted fs-5 mb-4">
                                                “At Bonafide, we believe water should reflect the same quality,
                                                elegance, and care as every premium hospitality experience.
                                            </p>

                                            <p className="text-muted fs-5 mb-4">
                                                Our commitment goes beyond hydration — we focus on sustainability,
                                                refined presentation, and building lasting trust with every partner we serve.”
                                            </p>

                                            <h5 className="fw-bold mb-1">
                                                Mr. Singh
                                            </h5>

                                            <span className="text-muted">
                                                Founder & Managing Director
                                            </span>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* INTRO SECTION */}

                            <div className="abt-intro-wrapper abt-section1">

                            
                                <div className="container py-5">

                                    <div className="row align-items-center g-5">

                                        <div className="col-lg-6">

                                            <span className="text-uppercase fw-semibold text-primary" 
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            >
                                                ABOUT BONAFIDE
                                            </span>

                                            <h2 className="display-5 fw-bold section-heading mt-3 mb-4 text-dark"
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            >
                                                Premium Glass Bottled Water For Modern Hospitality
                                            </h2>

                                            <p className="section-tagline fs-5 mb-3"
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            >
                                                Crafted for luxury hotels, restaurants, weddings, and corporate spaces.
                                            </p>

                                            <p className="section-description mb-4"
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            > 
                                                Bonafide delivers premium glass bottled water solutions designed to elevate hospitality experiences through elegant presentation, sustainable packaging, refined quality, and memorable guest impressions for luxury venues and modern businesses.</p>

                                            <NavLink to="/contact-us" className="btn btn-dark px-4 py-3 rounded-pill"
                                                data-aos="fade-up" 
                                                data-aos-delay="900"
                                            >
                                                For More Information
                                            </NavLink>

                                        </div>

                                        <div className="col-lg-6 text-center">

                                            <img
                                                src={aboutBottleImage}
                                                alt="Bonafide Bottle"
                                                className="img-fluid rounded-4 shadow-lg about-bottle-image"
                                                data-aos="zoom-in" 
                                                data-aos-delay="1200"
                                            />

                                        </div>

                                    </div>

                                </div>
                            </div>

                            


                            {/* WHO WE ARE */}
                            {/* <div className="abt-whywer-wrapper abt-section3">
                                <div className="container py-5">
                                    <div className="row align-items-center g-5 py-5">
                                        <div className="col-lg-6 text-center">

                                            <img
                                                src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop"
                                                alt="Bonafide Glass Bottle"
                                                className="img-fluid rounded-4 shadow-lg"
                                            />

                                        </div>

                                        <div className="col-lg-6">

                                            <span className="text-uppercase fw-semibold text-primary small">
                                                Who We Are
                                            </span>

                                            <h2 className="display-5 fw-bold mt-3 mb-4">
                                                Premium Glass Bottled
                                                Water For Modern Hospitality
                                            </h2>

                                            <p className="text-muted fs-5 mb-4">
                                                Bonafide is a premium glass bottled water brand dedicated
                                                to delivering elegant hydration experiences for hotels,
                                                restaurants, events, and corporate environments.
                                            </p>

                                            <p className="text-muted">
                                                Combining purity, sustainability, and refined presentation,
                                                we create sophisticated water solutions designed for premium spaces.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            

                            
                            

                            
                            {/* WHY CHOOSE US */}
                            <div className="abt-whychs-wrapper abt-section6">
                                <div className="container py-5">
                                    <div className="py-5">

                                        <div className="text-center mb-5 whychs-heading">

                                            <span className="text-uppercase fw-semibold text-primary small whychs-tag"
                                                data-aos="fade-up" 
                                                data-aos-delay="800"
                                            >
                                                Why Choose Bonafide
                                            </span>

                                            <h2 className="display-5 fw-bold mt-3 whychs-title"
                                                data-aos="fade-up" 
                                                data-aos-delay="1000"
                                            >
                                                Designed For Premium Experiences
                                            </h2>

                                            <p className="fs-5 mt-3 mx-auto whychs-desc"
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"

                                            style={{ maxWidth: "750px" }}>
                                                Trusted by businesses that value elegant presentation,
                                                sustainability, and exceptional guest experiences.
                                            </p>

                                        </div>

                                        <div className="row g-4">

                                            <div className="col-lg-3 col-md-6">

                                                <div className="p-4 border rounded-4 h-100 shadow-sm text-center card-whychs"
                                                     data-aos="fade-up" 
                                                     data-aos-delay="1200"
                                                >

                                                     <PiDropLight size={40} color="#1FB6B9" />

                                                    <h5 className="fw-bold mb-3">
                                                        Premium Quality
                                                    </h5>

                                                    <p className="text-muted mb-0">
                                                        Purified water crafted for luxury hospitality standards.
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="col-lg-3 col-md-6">

                                                <div className="p-4 border rounded-4 h-100 shadow-sm text-center card-whychs"
                                                     data-aos="fade-up" 
                                                     data-aos-delay="1400"
                                                >
                                                    <PiPackageLight size={40} color="#1FB6B9" />
                                                    <h5 className="fw-bold mb-3">
                                                        Elegant Packaging
                                                    </h5>

                                                    <p className="text-muted mb-0">
                                                        Minimal glass bottle design with refined presentation.
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="col-lg-3 col-md-6">

                                                <div className="p-4 border rounded-4 h-100 shadow-sm text-center card-whychs"
                                                    data-aos="fade-up" 
                                                    data-aos-delay="1600"
                                                >
                                                    <TbRecycle  size={40} color="#1FB6B9" />
                                                    <h5 className="fw-bold mb-3">
                                                        Eco-Friendly
                                                    </h5>

                                                    <p className="text-muted mb-0">
                                                        Sustainable reusable glass bottles reducing plastic waste.
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="col-lg-3 col-md-6">

                                                <div className="p-4 border rounded-4 h-100 shadow-sm text-center card-whychs"
                                                     data-aos="fade-up" 
                                                     data-aos-delay="1800"
                                                >
                                                    <HiOutlineCube  size={40} color="#1FB6B9" />
                                                    <h5 className="fw-bold mb-3">
                                                        Hospitality Focused
                                                    </h5>

                                                    <p className="text-muted mb-0">
                                                        Designed specifically for hotels, restaurants, and events.
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* OUR STORY */}
                            <div className="abt-story-wrapper abt-section7">   
                                <div className="container py-5">

                                    <div className="text-center mb-5">

                                        <span className="text-uppercase fw-semibold text-primary small" 
                                              data-aos="fade-up" 
                                              data-aos-delay="800"
                                        >
                                            OUR STORY
                                        </span>

                                        <h2 className="display-5 fw-bold mt-3 text-dark"
                                            data-aos="fade-up" 
                                            data-aos-delay="800"
                                        >
                                            Our Story Begins With Purity
                                        </h2>

                                        <p className="text-muted fs-5 mt-3 pb-4 mx-auto section-description story-text"
                                            data-aos="fade-up" 
                                            data-aos-delay="800"
                                        >
                                            Created to replace ordinary plastic serving, Bonafide delivers
                                            elegant glass bottled water designed for premium hospitality experiences.
                                        </p>

                                    </div>

                                    <div className="row g-4">

                                        <div className="col-md-4">

                                            <div className="story-card"                                             
                                                 data-aos="zoom-in" 
                                                 data-aos-delay="500">

                                                <img src="./imgs/water-drop-filter-xs.png" alt="Purity Icon" className="stry-icon mb-3"/>
                                                <h4 className="story-card-title">
                                                    Purity
                                                </h4>

                                                <p className="story-card-text">
                                                    Clean and refreshing hydration with balanced mineral quality.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-md-4">

                                            <div className="story-card" 
                                                 data-aos="zoom-in" 
                                                 data-aos-delay="600"
                                                 >
                                                <img src="./imgs/save-water-icon-xs.png" alt="Purity Icon" className="stry-icon mb-3"/>
                                                <h4 className="story-card-title">
                                                    Sustainability
                                                </h4>

                                                <p className="story-card-text">
                                                    Reusable glass bottles supporting a cleaner future.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-md-4">

                                            <div className="story-card" 
                                                 data-aos="zoom-in" 
                                                 data-aos-delay="700">

                                                <img src="./imgs/room-service-icon-xs.png" alt="Purity Icon" className="stry-icon mb-3"/>
                                                <h4 className="story-card-title">
                                                    Hospitality
                                                </h4>

                                                <p className="story-card-text">
                                                    Elegant presentation designed for premium experiences.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            {/* WHY BONAFIDE */}
                            {/* <div className="abt-whybfide-wrapper abt-section8">  
                                <div className="container py-5">

                                    <div className="text-center mb-5">

                                        <span className="text-uppercase fw-semibold text-primary small section-tag">
                                            WHY BONAFIDE
                                        </span>

                                        <h2 className="display-5 fw-bold mt-3 section-heading">
                                            Crafted For Modern Hospitality
                                        </h2>

                                    </div>

                                    <div className="row g-4">

                                        <div className="col-lg-3 col-md-6">

                                            <div className="feature-card bg-light">

                                                <h5 className="feature-title">
                                                    Premium Purity
                                                </h5>

                                                <p className="feature-text">
                                                    Clean, refreshing water with exceptional mineral balance.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-6">

                                            <div className="feature-card">

                                                <h5 className="feature-title">
                                                    Elegant Packaging
                                                </h5>

                                                <p className="feature-text">
                                                    Minimal glass design crafted for refined presentation.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-6">

                                            <div className="feature-card">

                                                <h5 className="feature-title">
                                                    Sustainable Choice
                                                </h5>

                                                <p className="feature-text">
                                                    Eco-conscious reusable glass bottle solutions.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-6">

                                            <div className="feature-card">

                                                <h5 className="feature-title">
                                                    Trusted Quality
                                                </h5>

                                                <p className="feature-text">
                                                    Reliable premium water solutions for hospitality spaces.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div> */}

                        </section>


                        {/* About Second Section */}

                        

                        {/* ==== CTA SECTION ==== */}

                        <section className="bonafide-cta-section position-relative overflow-hidden py-5">

                            <div className="container py-5">

                                <div className="row align-items-center g-5">


                                    {/* LEFT CONTENT */}
                                    <div className="col-lg-7">

                                        <span className="text-uppercase fw-semibold text-primary small" 
                                            data-aos="fade-up" 
                                            data-aos-delay="800"
                                        >
                                            Partner With Bonafide
                                        </span>

                                        <h2 className="display-3 fw-bold mt-3 mb-4 text-dark"
                                            data-aos="fade-up" 
                                            data-aos-delay="800"
                                        >
                                            Upgrade The Way
                                            You Serve Water
                                        </h2>

                                        <p className="fs-5 mb-5"
                                           data-aos="fade-up" 
                                            data-aos-delay="800"
                                        style={{ maxWidth: "650px" }}>
                                            Deliver premium hospitality experiences with elegant
                                            glass bottled water designed for hotels, restaurants,
                                            events, and corporate spaces.
                                        </p>


                                        {/* CTA BUTTONS */}
                                        <div className="d-flex flex-wrap gap-3">

                                            <NavLink to="/enquiry" className="btn btn-dark btn-lg rounded-pill px-5 py-3 fw-semibold"
                                                data-aos="fade-up" 
                                                data-aos-delay="1000"
                                            >

                                                Become A Partner

                                            </NavLink>

                                            <NavLink to="/contact-us" className="btn btn-outline-dark btn-lg rounded-pill px-5 py-3 fw-semibold"
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"
                                            >

                                                Contact Us

                                            </NavLink>

                                        </div>


                                        {/* SMALL TRUST TEXT */}
                                        <div className="d-flex flex-wrap gap-4 mt-5">

                                            <div className="text-dark"
                                                 data-aos="fade-up" 
                                                 data-aos-delay="1000"
                                            >

                                                <h4 className="fw-bold mb-1">
                                                    12.5k+
                                                </h4>

                                                <small className="opacity-75">
                                                    Bottles Supplied Monthly
                                                </small>

                                            </div>

                                            <div className="text-dark"
                                                 data-aos="fade-up" 
                                                 data-aos-delay="1200"
                                             >

                                                <h4 className="fw-bold mb-1">
                                                    180+
                                                </h4>

                                                <small className="opacity-75">
                                                    Hospitality Partners
                                                </small>

                                            </div>

                                            <div className="text-dark"
                                                 data-aos="fade-up" 
                                                 data-aos-delay="1400"
                                            >

                                                <h4 className="fw-bold mb-1">
                                                    100%
                                                </h4>

                                                <small className="opacity-75">
                                                    Premium Glass Packaging
                                                </small>

                                            </div>

                                        </div>

                                    </div>



                                    {/* RIGHT IMAGE */}
                                    <div className="col-lg-5 text-center position-relative">

                                        <img
                                            src="./imgs/abut-box-img1.png?q=80&w=1200&auto=format&fit=crop"
                                            alt="Bonafide Glass Bottle"
                                            className="img-fluid cta-bottle-image"
                                            
                                            data-aos="fade-up" 
                                            data-aos-delay="1000"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* BACKGROUND BLUR EFFECT */}
                            <div className="cta-blur-circle"></div>

                        </section>
                    </div> {/* end of the abt2 wrapper */}
                </section>
            </div>
        </>

    )
}

export default AboutUs;

//