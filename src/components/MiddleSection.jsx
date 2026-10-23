import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "./middle-style.css";
import Testimonials from "./Testimonials";
import Articles from "./Articles";
import SpecialService from "./Services";
import HomeBottles from "./HomeBottles";




export default function Navbar(){
    
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
            <main className="main-wrapper">
                <section className="middle-wrapper about-wrapper">
                    <div className="middle-step1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="abut-cont" 
                                        data-aos="fade-up" 
                                        data-aos-delay="600"
                                        >

                                        <div className="abut-anim-box">
                                            {/* Rotating Circle */}
                                            <div className="rotating-circle"></div>
                                                {/* Floating Circle */}
                                                <div className="first-txt"> <span className="bndtxt"> B </span> </div>
                                                {/* Floating Circle */}
                                                <div className="floating-circle"></div>
                                        </div>
                                        <img src="/imgs/abut-bottle-glass-img1.png" alt="about-img" className="img-fluid hmabut-img"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="section-two">

                                        <h2 className="main-heading abut-head text-dark" 
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        > 
                                            <i className="fa-solid fa-droplet theme-color"></i><br/>
                                            Natural water with no additives or processing, created by nature
                                        </h2>

                                        <p className="content-txt abut-txt"
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        > 
                                            We use only safe materials and modern technologies to preserve the freshness of water until the last sip. 
                                            Clean drinking water should be available to everyone. We work to make it possible. </p>
                                        <ul className="list-nmbr abutlist intro-list list-unstyled">
                                            <li
                                                data-aos="fade-up" 
                                                data-aos-delay="500"
                                            > 
                                                <span className="lst-nmbr"> 01.</span> 
                                                <span className="lst-txt">Balance of taste and natural purity</span> 
                                            </li>
                                            <li
                                                data-aos="fade-up" 
                                                data-aos-delay="500"
                                            > 
                                                <span className="lst-nmbr"> 02.</span> 
                                                <span className="lst-txt">Your daily source of energy and freshness</span>
                                            </li>
                                            <li
                                                data-aos="fade-up" 
                                                data-aos-delay="500"
                                            >
                                                <span className="lst-nmbr"> 03.</span> 
                                                <span className="lst-txt">Drink easily. Drink naturally</span>
                                            </li>
                                            
                                        </ul>
                                        <a href="#" className="btn btn-primary"
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        > 
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </section>

                <SpecialService/>
                
                <section className="points-wrapper">
                    <div className="middle-wrapper points-outer">
                        <div className="leaf-side-img left-leaf"> </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="step1-txt text-left">
                                        <i className="fa-solid fa-hand-holding-heart theme-color fa-3x"></i>
                                        <br/>
                                        
                                        <p className="point-sml-txt theme-color"
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        > 
                                            PURE HYDRATION BENEFITS 
                                        </p>

                                        <h2 className="main-heading point-title text-dark"
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        > 
                                            
                                        Healthy Hydration For A Better Everyday Lifestyle </h2>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul className="point-chklst list-unstyled"
                                                data-aos="fade-up" 
                                                data-aos-delay="500"
                                            >
                                                <li> <i className="fa fa-check"> </i> Increased Daily Energy</li>
                                                <li> <i className="fa fa-check"> </i> Supports Strong Immunity</li>
                                                <li> <i className="fa fa-check"> </i> Promotes Healthy Digestion</li>
                                                <li> <i className="fa fa-check"> </i> Better Focus & Productivity</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul className="point-chklst list-unstyled"
                                                data-aos="fade-up" 
                                                data-aos-delay="500"
                                            >
                                                <li> <i className="fa fa-check"> </i> Heart & Muscle Support</li>
                                                <li> <i className="fa fa-check"> </i> Healthy Skin Hydration</li>
                                                <li> <i className="fa fa-check"> </i> Naturally Refreshing Taste</li>
                                                <li> <i className="fa fa-check"></i> Everyday Wellness Support </li>
                                            </ul>
                                        </div>
                                    </div>
                                    

                                    <a href="#" className="btn btn-primary point-btn"
                                        data-aos="fade-up" 
                                        data-aos-delay="500"
                                    > 
                                        Enquire Now  <i className="fa-solid fa-arrow-right"></i> 
                                    </a>

                                </div>
                                <div className="col-lg-6">
                                    <div className="point-box">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-xs-12">
                                                <div className="pnt-box-wht pntbox pnt-box-vid-section overflow-hidden"
                                                    data-aos="fade-up" 
                                                    data-aos-delay="500"
                                                >
                                                    <img src="./imgs/pont-box-img4.png" alt="Image" className="img-fluid" />
                                                    {/* <p> Calcium </p>
                                                    <h3 className="pntbox-head"> Ca2+ </h3>
                                                    <h6 className="pntbox-sub-head">15-70 mg/l</h6>
                                                    <div className="pntbox-content">
                                                        <p className="pnt-txt">
                                                             Supports stronger bones, healthier teeth, and smoother water balance.
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xs-12">
                                                <div className="pnt-box-wht pntbox pnt-box-vid-section overflow-hidden"
                                                    data-aos="fade-up" 
                                                    data-aos-delay="600"
                                                >
                                                    <img src="./imgs/pont-box-img2.png" alt="Image" className="img-fluid"/>
                                                    {/* <p> Magnesium </p>
                                                    <h3 className="pntbox-head"> Mg2+ </h3>
                                                    <h6 className="pntbox-sub-head">5.2-43 mg/l</h6>
                                                    <div className="pntbox-content">
                                                        <p className="pnt-txt">
                                                            Helps support muscle function, heart health, and daily energy.
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xs-12">
                                                <div className="pnt-box-theme pntbox pntbox-video">
                                                    <div className="pnt-box-vid-section position-relative overflow-hidden"
                                                        data-aos="fade-up" 
                                                        data-aos-delay="700"
                                                    >
                                                        <img src="./imgs/pont-box-img1.png" alt="Image" className="img-fluid" />
                                                        {/* Background Video */}
                                                        {/* <video
                                                            className="background-video-hosted"
                                                            autoPlay
                                                            muted
                                                            playsInline
                                                            loop
                                                        >
                                                            <source
                                                                src="https://waterly.like-themes.com/wp-content/uploads/2025/05/bubl_video.mp4"
                                                                type="video/mp4"
                                                            />

                                                        </video> */}

                                                        {/* Hero Content */}

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xs-12">
                                                <div className="pnt-box-wht pntbox pnt-box-vid-section overflow-hidden"
                                                        data-aos="fade-up" 
                                                    data-aos-delay="8z00"
                                                >
                                                    <img src="./imgs/pont-box-img3.png" alt="Image" className="img-fluid" />
                                                    {/* <p> Sodium </p>
                                                    <h3 className="pntbox-head"> Na+ </h3>
                                                    <h6 className="pntbox-sub-head">5-50 mg/l</h6>
                                                    <div className="pntbox-content">
                                                        <p className="pnt-txt">
                                                            Maintains healthy hydration and natural fluid balance within the body.
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leaf-side-img right-leaf"> </div>
                    </div>
                </section>

                <HomeBottles />

                <section className="features-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-auto col-sm-12 col-xs-12">
                                <div className="featr-inner"
                                    data-aos="fade-up" 
                                    data-aos-delay="700"
                                >
                                    <h4 className="featr-content">
                                        Our water undergoes <span className="theme-color">multiple stages</span> of purification and contains no artificial additives. We work to make it possible.
                                    </h4>

                                    <img src="./imgs/water-source-hill-img.png" alt="image" className="img-fluid wsrchill"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Water Bottle Features Highlight Lists */}

                <section className="btl-trck-wrapper">

                    <div className="container">

                        <Swiper
                            modules={[Autoplay]}

                            spaceBetween={20}

                            slidesPerView={1}

                            loop={true}

                            speed={1200}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}

                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                },

                                992: {
                                    slidesPerView: 1,
                                },
                            }}

                            className="bottleTrackSwiper"
                        >

                            <SwiperSlide>

                                <div
                                    className="btl-trck-box"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >

                                    <img
                                        src="./imgs/bottle1-feature-txt-img-new.png"
                                        alt="Bottle"
                                        className="img-fluid"
                                    />

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div
                                    className="btl-trck-box"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >

                                    <img
                                        src="./imgs/bottle2-feature-txt-img-new.png"
                                        alt="Bottle"
                                        className="img-fluid"
                                    />

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div
                                    className="btl-trck-box"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >

                                    <img
                                        src="./imgs/bottle3-feature-txt-img-new.png"
                                        alt="Bottle"
                                        className="img-fluid"
                                    />

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div
                                    className="btl-trck-box"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >

                                    <img
                                        src="./imgs/bottle4-feature-txt-img-new.png"
                                        alt="Bottle"
                                        className="img-fluid"
                                    />

                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </div>

                </section>


                <section className="counter-wrapper">
                    <div className="container">
                        <div className="counter-inner">
                            <div className="row gx-5">
                                
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter-box"
                                        data-aos="fade-up" 
                                        data-aos-delay="500"
                                    >
                                        <h4 className="counter-title"> 185m</h4>
                                        <p className="counter-subtitle"> Natural Source <br/>Depth </p>

                                        <p className="counter-content"> 
                                            Carefully sourced from deep natural reserves for pure and refreshing hydration.
                                        </p>
                                    </div>
                                </div>{/* -- End col-lg-3 --*/}

                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter-box"
                                         data-aos="fade-up" 
                                        data-aos-delay="600"
                                    >
                                        <h4 className="counter-title"> 15k+</h4>
                                        <p className="counter-subtitle"> Bottles Delivered Monthly </p>

                                        <p className="counter-content"> 
                                            Providing premium bottled water to hotels, restaurants, and events regularly.
                                        </p>
                                    </div>
                                </div>{/* -- End col-lg-3 --*/}

                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter-box" 
                                        data-aos="fade-up" 
                                        data-aos-delay="700"
                                    >
                                        <h4 className="counter-title"> 52</h4>
                                        <p className="counter-subtitle"> Quality Awards Received </p>

                                        <p className="counter-content"> 
                                            Recognized for purity, packaging excellence, and trusted product quality.
                                        </p>
                                    </div>
                                </div>{/* -- End col-lg-3 --*/}

                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                    <div className="counter-box"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        <h4 className="counter-title"> 200+</h4>
                                        <p className="counter-subtitle"> Hospitality Partners Served </p>

                                        <p className="counter-content"> 
                                            Trusted by cafes, hotels, restaurants, and premium venues across regions.
                                        </p>
                                    </div>
                                </div>{/* -- End col-lg-3 --*/}

                            </div>
                        </div>
                    </div>
                </section>

                <section className="nature-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 mx-auto col-sm-12 col-xs-12">
                                <div className="nature-inner"
                                    data-aos="fade-up" 
                                    data-aos-delay="500"   
                                >
                                    <h4 className="main-heading nature-title"> Nature inside our every bottle of water</h4>

                                    <a href="#" title="Read More" className="btn btn-primary"> 
                                        Read More <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="process-wrapper">
                    <div className="container-">
                        <div className="row">
                            <div className="col-lg-9 mx-auto col-sm-12 col-xs-12">
                                <div className="process-inner text-center" 
                                        data-aos="fade-up" 
                                        data-aos-delay="500"
                                    >
                                    {/* <h4 className="main-heading process-title"> Our Process</h4> */}

                                    <h5 className="main-subtitle process-subtitle"> 
                                        Carefully Purified To Deliver Freshness, Safety, And Natural Taste
                                    </h5>
                                    <p>
                                        Our water passes through advanced purification and quality-control processes to ensure every bottle delivers exceptional clarity, balanced minerals, and refreshing purity without unnecessary additives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="process-grid-wrapper">
                            <div className="row gx-5">
                                <div className="col-lg-3">
                                    <div className="lte-heading-content">
                                        <h6 className="lte-header">01.</h6>
                                    </div>
                                    <div className="process-box"
                                         data-aos="fade-up" 
                                         data-aos-delay="500"
                                    >
                                        <div className="process-circle-box">
                                            <div className="process-imgbox">
                                                <img src="./imgs/water-filter-01.png" title="filter_01" alt="filter_01" className="img-fluid"/>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    <div className="process-name">
                                            <h4> Filtration of physical particles</h4>
                                        </div>
                                </div> {/* -- End col-lg-3 --*/}

                                <div className="col-lg-3">
                                    <div className="lte-heading-content">
                                        <h6 className="lte-header">02.</h6>
                                    </div>
                                    <div className="process-box" 
                                         data-aos="fade-up" 
                                         data-aos-delay="600"
                                    >
                                        <div className="process-circle-box">
                                            <div className="process-imgbox">
                                                <img src="./imgs/water-filter-02.png" title="filter_01" alt="filter_01" className="img-fluid"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="process-name">
                                        <h4> Microbiological purification</h4>
                                    </div>
                                </div> {/* -- End col-lg-3 --*/}

                                <div className="col-lg-3">
                                    <div className="lte-heading-content">
                                        <h6 className="lte-header">03.</h6>
                                    </div>
                                    <div className="process-box"
                                         data-aos="fade-up" 
                                         data-aos-delay="700"
                                    >
                                        <div className="process-circle-box">
                                            <div className="process-imgbox">
                                                <img src="./imgs/water-filter-03.png" title="filter_01" alt="filter_01" className="img-fluid"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="process-name">
                                        <h4> Mineral stabilization</h4>
                                    </div>
                                </div> {/* -- End col-lg-3 --*/}

                                <div className="col-lg-3">
                                    <div className="lte-heading-content">
                                        <h6 className="lte-header">04.</h6>
                                    </div>
                                    <div className="process-box"
                                        data-aos="fade-up" 
                                        data-aos-delay="800"
                                    >
                                        <div className="process-circle-box">
                                            <div className="process-imgbox">
                                            
                                                <Swiper
                                                    modules={[Autoplay, EffectFade]}

                                                    effect="fade"

                                                    fadeEffect={{
                                                        crossFade: true,
                                                    }}

                                                    slidesPerView={1}

                                                    loop={true}

                                                    speed={1200}

                                                    autoplay={{
                                                        delay: 1800,
                                                        disableOnInteraction: false,
                                                    }}

                                                    className="bottleFadeSwiper"
                                                >

                                                    <SwiperSlide>
                                                        <img
                                                            src="./imgs/water-filter-bottle-img-sm4.png"
                                                            alt="Bottle"
                                                            className="img-fluid btlsply-img"
                                                        />
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <img
                                                            src="./imgs/water-filter-bottle-img-sm5.png"
                                                            alt="Bottle"
                                                            className="img-fluid btlsply-img"
                                                        />
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <img
                                                            src="./imgs/water-filter-bottle-img-sm6.png"
                                                            alt="Bottle"
                                                            className="img-fluid btlsply-img"
                                                        />
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <img
                                                            src="./imgs/water-filter-bottle-img-sm7.png"
                                                            alt="Bottle"
                                                            className="img-fluid btlsply-img"
                                                        />
                                                    </SwiperSlide>

                                                </Swiper>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="process-name">
                                        <h4> Bottling and distribution  </h4>
                                    </div>
                                </div> {/* -- End col-lg-3 --*/}
                            </div>

                        </div>
                    </div>
                </section>

                <Testimonials/>

                <Articles/>

                

            </main>
            
        </>
    );
}