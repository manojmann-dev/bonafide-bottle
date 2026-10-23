import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";


import {
    FaMapMarkerAlt,
    FaBriefcase,
    FaClock,
    FaMoneyBillWave,
    FaArrowLeft,
    FaTimes,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import jobsData from "../data/jobsData";

import "./career-details-style.css";

const CareerDetailsPage = () => {

    const { slug } = useParams();

    const [showPopup, setShowPopup] = useState(false);

    const job = jobsData.find(
        (item) => item.slug === slug
    );


    if (!job) {

        return <h2>Job Not Found</h2>;

    }

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
                    {`${job.title} | Careers at Bonafide`}
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content={job.description}
                />

                <meta
                    name="keywords"
                    content={`${job.title}, Bonafide careers, hospitality jobs, premium bottled water jobs, ${job.location}`}
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
                    content={`${job.title} | Careers at Bonafide`}
                />

                <meta
                    property="og:description"
                    content={job.description}
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/career-banner.jpg"
                />

                <meta
                    property="og:url"
                    content={`https://bonafidewater.com/career/${job.slug}`}
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={`${job.title} | Bonafide`}
                />

                <meta
                    name="twitter:description"
                    content={job.description}
                />

                <meta
                    name="twitter:image"
                    content="https://www.bonafideminerals.com/assets/about-banner-bg-DwXds0WE.png"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href={`https://bonafidewater.com/career/${job.slug}`}
                />

            </Helmet>

            {/* HERO */}
            <section className="career-details-hero">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-9 text-center">

                            <span className="career-detail-tag"
                                  data-aos="zoom-in"
                                data-aos-delay="1200"
                            >

                                Career Opportunity

                            </span>

                            <h1 className="career-detail-heading mt-4"
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
                                {job.title}

                            </h1>

                        </div>

                    </div>

                </div>

            </section>



            {/* CONTENT */}
            <section className="career-details-section py-5">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-9">

                            <div className="career-details-card">


                                {/* META */}
                                <div className="career-meta">

                                    <span 
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >

                                        <FaMapMarkerAlt />

                                        {job.location}

                                    </span>

                                    <span
                                        data-aos="fade-up"
                                        data-aos-delay="1000"
                                    >

                                        <FaBriefcase />

                                        {job.type}

                                    </span>

                                    <span
                                        data-aos="fade-up"
                                        data-aos-delay="1100"
                                    >

                                        <FaClock />

                                        {job.experience}

                                    </span>

                                    <span
                                        data-aos="fade-up"
                                        data-aos-delay="1200"
                                    >

                                        <FaMoneyBillWave />

                                        {job.salary}

                                    </span>

                                </div>



                                {/* DESCRIPTION */}
                                <div className="career-content">

                                    <h3 
                                        data-aos="fade-up"
                                        data-aos-delay="1200"
                                    >

                                        Job Overview

                                    </h3>

                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay="1200"
                                    >

                                        {job.fullDescription}

                                    </p>



                                    <h3 className="mt-5"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >

                                        Responsibilities

                                    </h3>

                                    <ul>

                                        {job.responsibilities.map(
                                            (item, index) => (

                                                <li key={index} 
                                                    data-aos="fade-up"
                                                    data-aos-delay={item.id * 100}
                                >

                                                    {item}

                                                </li>

                                            )
                                        )}

                                    </ul>



                                    <h3 className="mt-5"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >

                                        Requirements

                                    </h3>

                                    <ul>

                                        {job.requirements.map(
                                            (item, index) => (

                                                <li key={index}
                                                    data-aos="fade-up"
                                                    data-aos-delay={item.id * 100}
                                                >

                                                    {item}

                                                </li>

                                            )
                                        )}

                                    </ul>

                                </div>



                                {/* BUTTONS */}
                                <div className="career-action mt-5">

                                    {/* <button
                                        className="apply-btn"
                                        onClick={() =>
                                            setShowPopup(true)
                                        }
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >

                                        Apply Now

                                    </button> */}

                                    <a href="/contact-us"
                                        className="apply-btn"
                                        data-aos="fade-up"
                                        data-aos-delay="900"
                                    >
                                            Apply Now
                                    </a>

                                    <Link
                                        to="/career"
                                        className="back-btn"

                                        data-aos="fade-up"
                                        data-aos-delay="1200"
                                    >

                                        <FaArrowLeft />

                                        Back To Careers

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* APPLY POPUP */}
            {showPopup && (

                <div className="job-popup-overlay">

                    <div className="job-popup-box">


                        {/* CLOSE */}
                        <button
                            className="popup-close-btn"
                            onClick={() =>
                                setShowPopup(false)
                            }
                        >

                            <FaTimes />

                        </button>



                        {/* HEADING */}
                        <span className="popup-tag">

                            Apply For Position

                        </span>

                        <h2 className="popup-heading">

                            {job.title}

                        </h2>

                        <p className="popup-subheading">

                            Complete the application form below
                            to apply for this position.

                        </p>



                        {/* FORM */}
                        <form className="popup-form">

                            <div className="row g-4">


                                {/* JOB TITLE */}
                                <div className="col-12">

                                    <label>

                                        Job Position

                                    </label>

                                    <input
                                        type="text"
                                        value={job.title}
                                        readOnly name="jobtitle"
                                    />

                                </div>



                                {/* NAME */}
                                <div className="col-md-6">

                                    <label>

                                        Full Name

                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name" name="name" required
                                    />

                                </div>



                                {/* EMAIL */}
                                <div className="col-md-6">

                                    <label>

                                        Email Address

                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email" name="email" required
                                    />

                                </div>



                                {/* PHONE */}
                                <div className="col-md-6">

                                    <label>

                                        Phone Number

                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter phone number" name="phone" required
                                    />

                                </div>

                                 



                                {/* EXPERIENCE */}
                                <div className="col-md-6">

                                    <label>

                                        Experience

                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Years of experience" name="experience" required
                                    />

                                </div>

                                {/* ADDRESS */}
                                <div className="col-md-12">

                                    <label>

                                        Your Current Address

                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Current Address" name="address" required
                                    />

                                </div>



                                {/* MESSAGE */}
                                <div className="col-12">

                                    <label>

                                        Message

                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Write your message..." name="message" required
                                    ></textarea>

                                </div>

                                {/* RESUME / PORTFOLIO */}
                                <div className="col-12">

                                    <label>

                                        Upload Resume

                                    </label>

                                    <input
                                        type="file"
                                        className="file-input"
                                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" name="resume"
                                    />

                                    <small className="file-note">

                                        Allowed files:
                                        JPG, PNG, PDF, DOC, DOCX

                                    </small>

                                </div>



                                {/* PORTFOLIO LINK */}
                                <div className="col-12">

                                    <label>

                                        Portfolio Link <small style={{color:"red",}}>(optional)</small>

                                    </label>

                                    <input
                                        type="url"
                                        placeholder="https://yourportfolio.com" name="portfoliourl"
                                    />

                                </div>



                                {/* BUTTON */}
                                <div className="col-12">

                                    <button
                                        type="submit"
                                        className="submit-job-btn"
                                    >

                                        Submit Application

                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </>
    );
};

export default CareerDetailsPage;