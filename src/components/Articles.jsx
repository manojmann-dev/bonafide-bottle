// src/components/Articles.jsx

import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./articles-style.css";

const Articles = () => {

    const articles = [

        {
            id: 1,
            image: "/imgs/blog-post-img1.png",
            category: "Hydration",
            title: "Why Daily Hydration Is Essential For Healthy Living",
            date: "08 Aug 2025",
        },

        {
            id: 2,
            image: "/imgs/blog-post-img2.png",
            category: "Mineral Water",
            title: "Benefits Of Drinking Natural Mineral Water Everyday",
            date: "11 Aug 2025",
        },

        {
            id: 3,
            image: "/imgs/blog-post-img3.png",
            category: "Lifestyle",
            title: "Premium Water Bottles For Modern Sustainable Living",
            date: "14 Aug 2025",
        },

    ];


//  useEffect(() => {

//     gsap.registerPlugin(ScrollTrigger);

//     const cards = gsap.utils.toArray(".article-card");



//     // HEADING ANIMATION
//     gsap.from(".artl-heading", {

//         scrollTrigger: {
//             trigger: ".artl-heading",
//             start: "top 85%",
//             end: "top 30%",
//             toggleActions: "play none none reverse",
//         },

//         y: 80,
//         opacity: 0,
//         duration: 1.4,
//         ease: "power3.out",

//     });



//     // CARD ANIMATION ONE BY ONE
//     cards.forEach((card, index) => {

//         gsap.from(card, {

//             scrollTrigger: {
//                 trigger: card,
//                 start: "top 90%",
//                 end: "top 40%",
//                 toggleActions: "play none none reverse",
//             },

//             y: 120,
//             opacity: 0,
//             duration: 1.4,
//             delay: index * 0.2,
//             ease: "power4.out",

//         });

//     });



//     return () => {

//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     };

// }, []);

    return (

        

        <section className="articles-section">

            {/* Glow Effects */}
            <div className="article-glow article-glow-1"></div>
            <div className="article-glow article-glow-2"></div>

            <div className="container">

                {/* SECTION TITLE */}

                <div className="section-heading text-center artl-heading"
                     data-aos="fade-up" 
                     data-aos-delay="500"
                >

                    <span className="section-subtitle artl-subtitle">

                        RECENT ARTICLES

                    </span>

                    <h2 className="section-title artl-title">

                        Latest News &
                        <span> Healthy Insights</span>

                    </h2>

                </div>

                {/* ARTICLES GRID */}

                <div className="row g-4 artl-grid">

                    {articles.map((item) => (

                        <div
                            className="col-lg-4 col-md-6"
                            key={item.id}
                        >

                            <div className="article-card"
                                data-aos="fade-up" 
                                data-aos-delay="500"
                            >

                                {/* IMAGE */}

                                <div className="article-image">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="img-fluid"
                                    />

                                    <span className="article-category">

                                        {item.category}

                                    </span>

                                </div>

                                {/* CONTENT */}

                                <div className="article-content">

                                    <div className="article-date">

                                        <i className="fa-regular fa-calendar"></i>

                                        {item.date}

                                    </div>

                                    <h3 className="article-title">

                                        <a href="#">

                                            {item.title}

                                        </a>

                                    </h3>

                                    <a
                                        href="#"
                                        className="article-btn"
                                    >

                                        Read More

                                        <i className="fa-solid fa-arrow-right"></i>

                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};

export default Articles;