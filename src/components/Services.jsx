import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./service-style.css";


function Services(){

    // useEffect(() => {

    //     gsap.registerPlugin(ScrollTrigger);

    //         /* SECTION TITLE */
    // gsap.fromTo(
    //     ".serve-title",
    //     {
    //         y: 100,
    //         opacity: 0,
    //     },
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1,
    //         ease: "power4.out",

    //         scrollTrigger: {

    //             trigger: ".serve-title",
    //             start: "top 85%",
    //             end: "top 30%",

    //             scrub: 1,

    //         },

    //     }
    // );



    // /* SECTION TEXT */
    // gsap.fromTo(
    //     ".serv-txt",
    //     {
    //         y: 80,
    //         opacity: 0,
    //     },
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1,

    //         scrollTrigger: {

    //             trigger: ".serv-txt",
    //             start: "top 85%",
    //             end: "top 30%",

    //             scrub: 1,

    //         },

    //     }
    // );



    // /* SERVICE BOX */
    // gsap.fromTo(
    //     ".serv-box",
    //     {
    //         y: 150,
    //         opacity: 0,
    //     },
    //     {
    //         y: 0,
    //         opacity: 1,

    //         stagger: 0.3,
    //         duration: 1,
    //         delay: 0.5,
    //         ease: "power4.out",

    //         scrollTrigger: {

    //             trigger: ".serv-container",
    //             start: "top 50%",
    //             end: "top 20%",

    //             scrub: 1,

    //         },

    //     }
    // );

    // }, []);

    // gsap.registerPlugin(ScrollTrigger);


    return(
        <>
            <section className="serve-wrapper">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto col-sm-12 col-xs-12">
                                <div className="serve-head text-center"
                                        data-aos="fade-up" 
                                        data-aos-delay="500"
                                >
                                    <h5 className="section-title serve-title"> Designed for Every <span>Premium Experience </span> </h5>
                                    <p className="serv-txt"> 
                                        Elegant glass bottle water supply for hospitality, celebrations, and professional spaces.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="serv-container">
                        <div className="container servbox">
                            <div className="row">
                                <div className="col-lg-4">

                                        <div className="serv-box"     
                                            data-aos="fade-up" 
                                            data-aos-delay="500"
                                        >
                                            <div className="serv-imgbox">
                                                <img src="imgs/serv-hotel-img1.png" alt="Image" className="img-fluid"/>
                                            </div>
                                            <div className="serv-content">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="serv-icon">
                                                            <i className="fa fa-hotel fa-2x"> </i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h4 className="serv-title">
                                                            Hotel
                                                        </h4>
                                                        <p className="serv-sdesc"> 
                                                            Premium glass bottles for elegant hospitality and dining experiences.
                                                        </p>
                                                    </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                </div>
                                <div className="col-lg-4">

                                        <div className="serv-box"
                                            data-aos="fade-up" 
                                            data-aos-delay="600"
                                        >
                                            <div className="serv-imgbox">
                                                <img src="imgs/serv-party-img02.png" alt="Image" className="img-fluid"/>
                                            </div>
                                            <div className="serv-content">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="serv-icon">
                                                            <i className="fa-solid fa-champagne-glasses fa-2x"></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h4 className="serv-title">
                                                            Events and Weddings
                                                        </h4>
                                                        <p className="serv-sdesc"> 
                                                            Elegant water solutions for weddings, events, and celebrations. 
                                                        </p>
                                                    </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                </div>
                                <div className="col-lg-4">

                                        <div className="serv-box"
                                            data-aos="fade-up" 
                                            data-aos-delay="700"
                                        >
                                            <div className="serv-imgbox">
                                                <img src="imgs/serv-img3.png" alt="Image" className="img-fluid"/>
                                            </div>
                                            <div className="serv-content">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <div className="serv-icon">
                                                            <i className="fa fa-briefcase fa-2x"> </i>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h4 className="serv-title">
                                                            Corporate
                                                        </h4>
                                                        <p className="serv-sdesc"> 
                                                            Premium water supply for meetings, offices, and corporate spaces. 
                                                        </p>
                                                    </div>

                                                </div>
                                                
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>
                        <div className="servbox">

                        </div>
                    </div>

                </section>     
        </>

    )
}

export default Services;
