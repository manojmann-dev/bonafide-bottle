import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import AOS from "aos";
import "aos/dist/aos.css";

import "./testimonials-style.css";

const TestimonialsSection = () => {

    const testimonials = [

        {
            id: 1,
            name: "Mr. A. Verma",
            designation: "General Manager, Premium Hotel",
            image:
                "/imgs/bonafide-testi-img1.png?q=80&w=500&auto=format&fit=crop",
            review:
                "Bonafide Minerals has consistently delivered high-quality bottled water for our guests. Their reliability and commitment to timely service make them a valued partner for our hospitality operations.",
            rating: 5,
        },

        {
            id: 2,
            name: "Ms. Priya S.",
            designation: "Administration Head, Corporate Office",
            image:
                "/imgs/bonafide-testi-img2.png?q=80&w=500&auto=format&fit=crop",
            review:
                "We appreciate the professionalism and consistency that Bonafide Minerals brings to our workplace. Their bottled water products meet the quality standards we expect for our employees and visitors.",
            rating: 5,
        },

        {
            id: 3,
            name: "Mr. R. Khanna",
            designation: "Director, Events & Banquets",
            image:
                "/imgs/bonafide-testi-img3.png?q=80&w=500&auto=format&fit=crop",
            review:
                "For every event we host, dependable suppliers are essential. Bonafide Minerals has always delivered on time, ensuring our guests receive safe and premium-quality drinking water.",
            rating: 4,
        },

        {
            id: 4,
            name: "Ms. N. Kapoor",
            designation: "Operations Manager,Business Centre",
            image:
                "/imgs/bonafide-testi-img04.png?q=80&w=500&auto=format&fit=crop",
            review:
                "The product quality, packaging, and customer support from Bonafide Minerals have been excellent. We highly recommend them to organizations seeking a dependable water supplier.",
            rating: 5,
        },

        {
            id: 5,
            name: "Mr. S. Mehta",
            designation: "Facility Manager, Corporate Headquarters",
            image:
                "/imgs/bonafide-testi-img5.png?q=80&w=500&auto=format&fit=crop",
            review:
                "Our company has partnered with Bonafide Minerals for several years. Their efficient delivery network and consistent product quality have made them our preferred choice.",
            rating: 5,
        },

        {
            id: 6,
            name: "Ms. K. Arora",
            designation: "HR & Administration Lead, Consulting office",
            image:
                "/imgs/bonafide-testi-img6.png?q=80&w=500&auto=format&fit=crop",
            review:
                "Bonafide Minerals has simplified our office water management with dependable service and excellent customer support. Their team is always responsive to our requirements.",
            rating: 5,
        },

        {
            id: 7,
            name: "Mr. D. Bansal",
            designation: "Operations Head, Healthcare Solutions",
            image:
                "/imgs/bonafide-testi-img7.png?q=80&w=500&auto=format&fit=crop",
            review:
                "Quality and hygiene are critical for our organization. Bonafide Minerals consistently provides bottled water that meets our expectations and industry standards.",
            rating: 4,
        },

        {
            id: 8,
            name: "Ms. Shweta G.",
            designation: "Administration Manager, Business center",
            image:
                "/imgs/bonafide-testi-img8.png?q=80&w=500&auto=format&fit=crop",
            review:
                "We are impressed with the professionalism shown by the Bonafide Minerals team. Their commitment to quality and timely deliveries has strengthened our business relationship.",
            rating: 5,
        },
        {
            id: 9,
            name: "Mr. M. Singh",
            designation: "Managing Partner, Hospitality Group",
            image:
                "/imgs/bonafide-testi-img9.png?q=80&w=500&auto=format&fit=crop",
            review:
                "Our guests expect the best, and Bonafide Minerals helps us deliver that experience. Their bottled water products reflect the quality and reliability we look for in a supplier.",
            rating: 5,
        },
        {
            id: 10,
            name: "Ms. A. Malhotra",
            designation: "Procurement Manager, Convention Centre",
            image:
                "/imgs/bonafide-testi-img10.png?q=80&w=500&auto=format&fit=crop",
            review:
                "From large conferences to daily operations, Bonafide Minerals has been a trusted partner. Their consistent service and premium-quality products make them easy to recommend.",
            rating: 5,
        },

    ];


    /* PAGINATION */
    const reviewsPerPage = 9;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        testimonials.length / reviewsPerPage
    );

    const startIndex =
        (currentPage - 1) * reviewsPerPage;

    const currentReviews = testimonials.slice(
        startIndex,
        startIndex + reviewsPerPage
    );


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
                    Testimonials | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Read what hotels, restaurants, event planners, and corporate clients say about Bonafide premium glass bottled water experiences."
                />

                <meta
                    name="keywords"
                    content="Bonafide testimonials, premium bottled water reviews, hotel water service reviews, restaurant hospitality water, luxury bottled water feedback, glass bottled water testimonials"
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
                    content="Client Testimonials | Bonafide"
                />

                <meta
                    property="og:description"
                    content="Explore real client experiences with Bonafide premium glass bottled water solutions."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/testimonials-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/testimonials"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Client Testimonials | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Luxury hospitality partners trust Bonafide premium glass bottled water."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/testimonials-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/testimonials"
                />

            </Helmet>

            {/* HERO SECTION */}
            <section className="abt-banner-wrapper d-flex justify-content-center align-items-center">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12">

                            <div className="header-banner text-center">

                                <h1 className="abt-banner-head">
                                    Testimonials
                                </h1>

                                <p>
                                    What Our Hospitality Partners Say
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* TESTIMONIAL SECTION */}
            <section className="testimonial-section py-5">

                <div className="container py-5">


                    {/* HEADING */}
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="1200">

                        <span className="text-uppercase theme-color testimonial-tagline">
                            Client Reviews
                        </span>

                        <h2 className="display-5 fw-bold testimonial-heading mt-3">
                            Trusted By Hospitality
                            Professionals
                        </h2>

                        <p className="testimonial-description mx-auto mt-3">

                            Discover how Bonafide is enhancing premium hospitality
                            experiences through elegant glass bottled water solutions.

                        </p>

                    </div>



                    {/* REVIEW GRID */}
                    <div className="row g-4">

                        {currentReviews.map((review) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={review.id} 
                                data-aos="fade-up"
                                data-aos-delay={review.id * 100}
                            >

                                <div className="review-card h-100">

                                    {/* TOP AREA */}
                                    <div className="review-top-wrapper">

                                        {/* USER INFO */}
                                        <div className="d-flex align-items-center mb-2">

                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="review-user-image"
                                            />

                                            <div className="ms-3">

                                                <h5 className="review-name">
                                                    {review.name}
                                                </h5>

                                                <span className="review-designation">
                                                    {review.designation}
                                                </span>

                                            </div>

                                        </div>

                                        {/* GOOGLE ICON */}
                                        <div className="google-review-icon">

                                             <FcGoogle />

                                        </div>

                                    </div>



                                    {/* STARS */}
                                    <div className="review-rating-wrapper mb-3">

                                        <div className="review-stars">

                                            {[...Array(5)].map((_, index) => (

                                                <FaStar
                                                    key={index}
                                                    className={
                                                        index < review.rating
                                                            ? "star-icon active"
                                                            : "star-icon"
                                                    }
                                                />

                                            ))}

                                        </div>

                                        <span className="rating-number">

                                            {review.rating}.0

                                        </span>

                                    </div>



                                    {/* REVIEW TEXT */}
                                    <p className="review-text">

                                        {review.review}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>



                    {/* PAGINATION */}
                    <div className="d-flex justify-content-center mt-5">

                        <nav data-aos="fade-up" data-aos-delay="600" >
                            <ul className="pagination custom-pagination">
                                {/* PREVIOUS */}
                                <li
                                    className={`page-item ${
                                        currentPage === 1
                                            ? "disabled"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                    >
                                        Previous

                                    </button>
                                </li>



                                {/* PAGE NUMBERS */}
                                {[...Array(totalPages)].map((_, index) => (

                                    <li
                                        key={index}
                                        className={`page-item ${
                                            currentPage === index + 1
                                                ? "active"
                                                : ""
                                        }`}
                                    >

                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                setCurrentPage(index + 1)
                                            }
                                        >

                                            {index + 1}

                                        </button>

                                    </li>

                                ))}



                                {/* NEXT */}
                                <li
                                    className={`page-item ${
                                        currentPage === totalPages
                                            ? "disabled"
                                            : ""
                                    }`}
                                >

                                    <button
                                        className="page-link"
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
                                    >

                                        Next

                                    </button>

                                </li>

                            </ul>

                        </nav>

                    </div>

                </div>

            </section>
        </>
    );
};

export default TestimonialsSection;