import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaClock,
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import jobsData from "../data/jobsData";

import "./careerpage-style.css";

const CareerPage = () => {

    const [currentPage, setCurrentPage] =
        useState(1);

    const jobsPerPage = 6;


    /* PAGINATION */
    const totalPages = Math.ceil(
        jobsData.length / jobsPerPage
    );

    const startIndex =
        (currentPage - 1) * jobsPerPage;

    const currentJobs = jobsData.slice(
        startIndex,
        startIndex + jobsPerPage
    );


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [currentPage]);


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
                    Careers | Bonafide Premium Glass Bottled Water
                </title>


                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Explore career opportunities at Bonafide and join our team in premium hospitality, luxury branding, sales, marketing, and customer experience."
                />

                <meta
                    name="keywords"
                    content="Bonafide careers, hospitality jobs, bottled water company jobs, luxury hospitality careers, sales jobs, marketing jobs, corporate careers"
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
                    content="Careers | Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Join Bonafide and build your future in premium hospitality and luxury bottled water experiences."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/career-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/career"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Careers | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Discover exciting career opportunities at Bonafide."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/career-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/career"
                />

            </Helmet>


            {/* HERO SECTION */}
            <section className="career-hero-section">

                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8">

                            <span className="career-tagline"
                                  data-aos="zoom-in" 
                                  data-aos-delay="1200"
                            >

                                Join Bonafide

                            </span>

                            <h1 className="career-heading mt-4"
                                data-aos="fade-up" 
                                data-aos-delay="1200"
                            >

                                Build Your Future
                                With Bonafide

                            </h1>

                            <p className="career-subheading mt-4"
                                data-aos="fade-up" 
                                data-aos-delay="1200"
                            >

                                Explore exciting opportunities in premium hospitality,
                                luxury branding, and modern bottled water experiences.

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* JOB SECTION */}
            <section className="career-section py-5">

                <div className="container py-5">

                    <div className="row g-4">

                        {currentJobs.map((job) => (

                            <div
                                className="col-lg-6"
                                key={job.id}

                                data-aos="fade-up"
                                data-aos-delay={job.id * 100}
                            >

                                <div className="job-card h-100">


                                    {/* STATUS */}
                                    <div className="job-status">

                                        {job.available ? (

                                            <span className="available">

                                                Open Position

                                            </span>

                                        ) : (

                                            <span className="closed">

                                                Position Closed

                                            </span>

                                        )}

                                    </div>



                                    {/* TITLE */}
                                    <h3 className="job-title">

                                        {job.title}

                                    </h3>



                                    {/* META */}
                                    <div className="job-meta">

                                        <span>

                                            <FaMapMarkerAlt />

                                            {job.location}

                                        </span>

                                        <span>

                                            <FaBriefcase />

                                            {job.type}

                                        </span>

                                        <span>

                                            <FaClock />

                                            {job.experience}

                                        </span>

                                    </div>



                                    {/* DESCRIPTION */}
                                    <p className="job-description">

                                        {job.description}

                                    </p>



                                    {/* BUTTON */}
                                    <Link
                                        to={`/career/${job.slug}`}
                                        className="job-btn"
                                    >

                                        View Details

                                        <FaArrowRight />

                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>



                    {/* PAGINATION */}
                    <div className="pagination-wrapper mt-5">

                        <button
                            className={`pagination-btn ${
                                currentPage === 1
                                    ? "disabled"
                                    : ""
                            }`}
                            disabled={currentPage === 1}
                            onClick={() =>
                                setCurrentPage(currentPage - 1)
                            }
                        >

                            <FaChevronLeft />

                        </button>



                        {[...Array(totalPages)].map(
                            (_, index) => (

                                <button
                                    key={index}
                                    className={`pagination-number ${
                                        currentPage ===
                                        index + 1
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setCurrentPage(
                                            index + 1
                                        )
                                    }
                                >

                                    {index + 1}

                                </button>

                            )
                        )}



                        <button
                            className={`pagination-btn ${
                                currentPage === totalPages
                                    ? "disabled"
                                    : ""
                            }`}
                            disabled={
                                currentPage === totalPages
                            }
                            onClick={() =>
                                setCurrentPage(currentPage + 1)
                            }
                        >

                            <FaChevronRight />

                        </button>

                    </div>

                </div>

            </section>

        </>
    );
};

export default CareerPage;