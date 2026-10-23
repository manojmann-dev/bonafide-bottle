import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import "./faqs-style.css";

const FaqSection = () => {

    const faqs = [
        {
            id: 1,
            question: "What makes Bonafide different from regular bottled water?",
            answer:
                "Bonafide delivers premium purified water in elegant reusable glass bottles designed for luxury hospitality experiences.",
        },

        {
            id: 2,
            question: "Do you supply water for hotels and restaurants?",
            answer:
                "Yes, we provide premium glass bottled water solutions for hotels, restaurants, cafés, and hospitality businesses.",
        },

        {
            id: 3,
            question: "Can Bonafide supply water for weddings and events?",
            answer:
                "Absolutely. Bonafide offers elegant glass bottled water for weddings, private celebrations, and luxury events.",
        },

        {
            id: 4,
            question: "Are your glass bottles reusable?",
            answer:
                "Yes, our bottles are designed with sustainability in mind and support eco-friendly reusable packaging.",
        },

        {
            id: 5,
            question: "Do you offer corporate water supply services?",
            answer:
                "Yes, we provide premium hydration solutions for offices, meetings, conferences, and corporate environments.",
        },

        {
            id: 6,
            question: "How can we partner with Bonafide?",
            answer:
                "You can contact our team directly through the website to discuss partnerships and hospitality supply solutions.",
        },
    ];


       useEffect(() => {
    
            AOS.init({
    
                duration: 1200,
    
                once: false,
    
                mirror: true,
    
                offset: 80,
    
                easing: "ease-out-cubic",
    
            });
    
        }, []);

    return (

        <>
            <Helmet>
            
                {/* PAGE TITLE */}
                <title>
                    FAQs | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Find answers to common questions about Bonafide premium glass bottled water, hospitality solutions, orders, delivery, and services."
                />

                <meta
                    name="keywords"
                    content="Bonafide FAQs, bottled water questions, premium glass bottled water, hospitality water solutions, hotel bottled water FAQs, restaurant water service"
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
                    content="FAQs | Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Explore frequently asked questions about Bonafide luxury bottled water solutions."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/faqs-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/faqs"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="FAQs | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Answers to common questions about Bonafide premium glass bottled water."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/faqs-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/faqs"
                />

            </Helmet>

            <section className="abt-banner-wrapper d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header-banner">
                                    <h1 className="abt-banner-head"
                                        data-aos="fade-up" 
                                        data-aos-delay="1000"   
                                    > Frequently Asked Questions

                                    </h1>
                                    <p
                                      data-aos="fade-up" 
                                      data-aos-delay="1000"
                                    > 
                                        Everything You Need To Know About Bonafide. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
        <section className="faq-section py-5">

            <div className="container py-5">


                {/* SECTION HEADING */}
                <div className="text-center mb-5">

                    <h2 className="display-6 fw-bold faq-heading mt-3 text-dark"
                        data-aos="fade-up" 
                        data-aos-delay="1000"
                    >

                        Explore common questions

                    </h2>

                    <p className="faq-description mx-auto mt-3"
                       data-aos="fade-up" 
                       data-aos-delay="1200"
                    >

                        about our premium glass bottled
                        water solutions, hospitality services, and partnerships.

                    </p>

                </div>



                {/* FAQ LAYOUT */}
                <div className="row justify-content-center">

                    <div className="col-lg-9">

                        <div
                            className="accordion custom-faq-accordion"
                            id="faqAccordion"
                        >

                            {faqs.map((faq, index) => (

                                <div
                                    className="accordion-item faq-card"
                                    key={faq.id}   
                                    data-aos="fade-up" 
                                    data-aos-delay="1000"
                                >

                                    <h2
                                        className="accordion-header"
                                        id={`heading${faq.id}`}
                                        
                                    >

                                        <button
                                            className={`accordion-button ${
                                                index !== 0 ? "collapsed" : ""
                                            }`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${faq.id}`}
                                            aria-expanded={
                                                index === 0 ? "true" : "false"
                                            }
                                            aria-controls={`collapse${faq.id}`}
                                        >

                                            {faq.question}

                                        </button>

                                    </h2>

                                    <div
                                        id={`collapse${faq.id}`}
                                        className={`accordion-collapse collapse ${
                                            index === 0 ? "show" : ""
                                        }`}
                                        aria-labelledby={`heading${faq.id}`}
                                        data-bs-parent="#faqAccordion"
                                    >

                                        <div className="accordion-body" 
                                             data-aos="fade-up" 
                                             data-aos-delay="1200"
                                        >

                                            {faq.answer}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>



                {/* BOTTOM CTA */}
                <div className="faq-contact-box text-center mt-5">

                    <h3 className="fw-bold mb-3"
                        data-aos="fade-up" 
                        data-aos-delay="1000"
                    >

                        Still Have Questions?

                    </h3>

                    <p className="text-muted mb-4"
                       data-aos="fade-up" 
                                        data-aos-delay="1000"
                    >

                        Our team is ready to help you with hospitality
                        partnerships and premium water supply solutions.

                    </p>

                    <a href="/contact-us" className="btn btn-dark rounded-pill px-5 py-3"
                            data-aos="fade-up" 
                            data-aos-delay="1000" 
                    >

                        Contact Us

                    </a>

                </div>

            </div>

        </section>
        </>
    );
};

export default FaqSection;