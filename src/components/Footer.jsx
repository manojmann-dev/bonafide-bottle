import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import "./footer-style.css";
import { NavLink } from "react-router-dom";


function Footer(){

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
    <section className="footer-wrapper">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="foot-inner footabt">
                            <div className="foot-col-1">
                                <img src="./imgs/logo.png" alt="Footer Logo" 
                                    data-aos="zoom-in"
                                    data-aos-delay="1200"
                                />

                                <p className="foot-abt-txt" data-aos="zoom-in" data-aos-delay="1200">    
                                    Our water undergoes multiple stages of purification and contains no artificial additives.
                                </p>

                                <ul className="list-unstyled foot-sicon list-inline">
                                    <li className="list-inline-item" data-aos="fade-down" data-aos-delay="800">  
                                        <a href="https://www.facebook.com/people/Bonafide-Minerals/pfbid0c3jbGFVimAgoHTJSxpxJNDTnQ1oJRaH72HTfby7yNeTRCer4fC9MG2nVHSagQ7LVl/" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item" data-aos="fade-down" data-aos-delay="900">  
                                        <a href="https://www.youtube.com/@bonafideminerals" >
                                            <i className="fa-brands fa-youtube"></i> 
                                        </a>
                                    </li>
                                    <li className="list-inline-item" data-aos="fade-down" data-aos-delay="1000"> 
                                        <a href="https://www.instagram.com/bona_fide_minerals/" target="_blank">
                                            <i className="fa-brands fa-instagram"></i> 
                                        </a>
                                    </li>
                                    <li className="list-inline-item" data-aos="fade-down" data-aos-delay="1100"> 
                                        <a href="https://www.linkedin.com/in/bonafide-minerals-356701409?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
                                            <i className="fa-brands fa-linkedin-in"></i> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="foot-inner footlink">
                            <div className="foot-col-2">
                                <h3 className="foot-title foot-link-title" data-aos="zoom-in" data-aos-delay="900"> Company</h3>
                                
                                <ul className="list-unstyled foot-links">
                                    <li data-aos="fade-up" data-aos-delay="800"> <NavLink to="/home">       <i className="fa fa-angle-right"></i> Home </NavLink></li>
                                    <li data-aos="fade-up" data-aos-delay="900"> <NavLink to="/about">   <i className="fa fa-angle-right"></i> About Us</NavLink></li>
                                    <li data-aos="fade-up" data-aos-delay="1000"><NavLink to="/career">     <i className="fa fa-angle-right"></i> Career </NavLink></li>
                                    <li data-aos="fade-up" data-aos-delay="1100"><NavLink to="/contact-us"> <i className="fa fa-angle-right"></i> Contact Us </NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="foot-inner footlink2">
                            <div className="foot-col-3">
                                <h3 className="foot-title foot-link-title" data-aos="zoom-in" data-aos-delay="900"> Useful Links</h3>
                                
                                <ul className="list-unstyled foot-links">
                                    <li data-aos="fade-up" data-aos-delay="800"><NavLink to="/blogs"> <i className="fa fa-angle-right"></i> Articles</NavLink></li>
                                    <li data-aos="fade-up" data-aos-delay="900"><NavLink to="/faqs"> <i className="fa fa-angle-right"></i> FAQ  </NavLink> </li>
                                    <li data-aos="fade-up" data-aos-delay="1000"><NavLink to="/gallery"> <i className="fa fa-angle-right"></i> Gallery </NavLink></li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="foot-inner footcnt">
                            <div className="foot-col-4">
                                <h3 className="foot-title foot-link-title" data-aos="zoom-in" data-aos-delay="900"> Contact info</h3>
                                <div className="foot-addrs">
                                    <ul className="list-unstyled foot-addrs-list">
                                        <li className="faddrs-list">
                                            <div className="d-flex d-xs-block">
                                                <div className="flex-shrink-0 circle-icon" data-aos="fade-up" data-aos-delay="900">
                                                    <i className="fa fa-map-marker"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className="addrs-head" data-aos="fade-up" data-aos-delay="1000" > Central office: </h4>
                                                    <p data-aos="fade-up" data-aos-delay="1100">Village Kandola Kalan, Talwan Road, Near Gurdwara Alsheed Baba Natha Singh, Nurmahal, Jalandhar, Punjab </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="faddrs-list">
                                            <div className="d-flex d-xs-block">
                                                <div className="flex-shrink-0 circle-icon" data-aos="fade-up" data-aos-delay="1200">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className="addrs-head" data-aos="fade-up" data-aos-delay="1200"> Phones: </h4>
                                                    <p data-aos="fade-up" data-aos-delay="1300">(+91) 6280-427055</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="faddrs-list">
                                            <div className="d-flex d-xs-block">
                                                <div className="flex-shrink-0 circle-icon" data-aos="fade-up" data-aos-delay="1200">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h4 className="addrs-head" data-aos="fade-up" data-aos-delay="1200"> Email Address: </h4>
                                                    <p data-aos="fade-up" data-aos-delay="1300">bonafideminerals@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>

        <section className="copyright-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright-inner cpyrt-left">
                            <p className="copyright-txt">
                                © All Rights Reserved - 2026 BONAFIDE Water.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="copyright-inner cpyrt-right text-end">
                            <p className="copyright-txt">
                                Designed and Developed by <a href="https://socialsimba.com/" target="_blank"> Social Simba </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )}

export default Footer;