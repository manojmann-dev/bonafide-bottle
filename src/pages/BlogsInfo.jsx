import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaCalendarAlt,
    FaUserAlt,
    FaArrowLeft,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaArrowRight,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import blogData from "../data/blogData";

import "./bloginfo-style.css";

const BlogDetailsPage = () => {

    const { slug } = useParams();

    const blog = blogData.find(
        (item) => item.slug === slug
    );


    /* RELATED BLOGS */
    const relatedBlogs = blogData.filter(
        (item) => item.slug !== slug
    );


    if (!blog) {

        return (

            <section className="py-5 text-center">

                <div className="container">

                    <h2>Blog Not Found</h2>

                </div>

            </section>

        );
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
                    {`${blog.title} | Bonafide`}
                </title>

                {/* BASIC SEO */}
                <meta
                    name="description"
                    content={blog.description}
                />

                <meta
                    name="keywords"
                    content={blog.keywords}
                />

                <meta
                    name="robots"
                    content="index, follow"
                />


                {/* OPEN GRAPH SEO */}
                <meta
                    property="og:type"
                    content="article"
                />

                <meta
                    property="og:site_name"
                    content="Bonafide"
                />

                <meta
                    property="og:title"
                    content={blog.title}
                />

                <meta
                    property="og:description"
                    content={blog.description}
                />

                <meta
                    property="og:image"
                    content={blog.image}
                />

                <meta
                    property="og:url"
                    content={`https://bonafidewater.com/blog/${blog.slug}`}
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={blog.title}
                />

                <meta
                    name="twitter:description"
                    content={blog.description}
                />

                <meta
                    name="twitter:image"
                    content={blog.image}
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href={`https://bonafidewater.com/blog/${blog.slug}`}
                />
            </Helmet>

            {/* HERO SECTION */}
            <section className="blog-details-hero">

                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-9">


                            {/* CATEGORY */}
                            <span className="details-category" 
                                    data-aos="zoom-in"
                                    data-aos-delay="1200">

                                {blog.category}

                            </span>



                            {/* TITLE */}
                            <h1 className="details-title mt-4"
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >

                                {blog.title}

                            </h1>



                            {/* META */}
                            <div className="details-meta mt-4">

                                <span 
                                    data-aos="fade-up"
                                    data-aos-delay="1200"
                                >

                                    <FaCalendarAlt />

                                    {blog.date}

                                </span>

                                <span 
                                    data-aos="fade-up"
                                    data-aos-delay="1200">

                                    <FaUserAlt />

                                    {blog.author}

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* FEATURE IMAGE */}
            <section className="feature-image-section">

                <div className="container">

                    <div className="feature-image-wrapper">

                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="img-fluid feature-image" 
                                data-aos="zoom-out"
                                data-aos-delay="1200"
                        />

                    </div>

                </div>

            </section>



            {/* BLOG CONTENT */}
            <section className="blog-content-section py-5">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-10">

                            <div className="blog-content-wrapper">


                                {/* INTRO */}
                                <div className="blog-intro"
                                    data-aos="fade-up"
                                    data-aos-delay="1200"

                                >

                                    <p>

                                        {blog.description}

                                    </p>

                                </div>



                                {/* CONTENT */}
                                <div className="bloginfo-content"
                                    data-aos="zoom-in"
                                    data-aos-delay="1200"
                                >

                                    <p>

                                        {blog.content}

                                    </p>

                                </div>



                                {/* QUOTE SECTION */}
                                <div className="quote-box"
                                    data-aos="zoom-in"
                                    data-aos-delay="1200"
                                >

                                    <h4>

                                        “Luxury hospitality is built through
                                        elegant presentation and unforgettable
                                        guest experiences.”

                                    </h4>

                                </div>



                                {/* SOCIAL SHARE */}
                                <div className="social-share-wrapper">

                                    <h5 
                                        data-aos="zoom-in"
                                        data-aos-delay="1200"
                                    >

                                        Share Article

                                    </h5>

                                    <div className="social-icons">

                                        <a href="#" 
                                            data-aos="zoom-in"
                                            data-aos-delay="800">

                                            <FaFacebookF />

                                        </a>

                                        <a href="#"
                                            data-aos="zoom-in"
                                            data-aos-delay="900"
                                        >

                                            <FaTwitter />

                                        </a>

                                        <a href="#"
                                            data-aos="zoom-in"
                                            data-aos-delay="1000"
                                        >

                                            <FaInstagram />

                                        </a>

                                    </div>

                                </div>



                                {/* BACK BUTTON */}
                                <div className="back-btn-wrapper">

                                    <Link
                                        to="/blogs"
                                        className="back-blog-btn"

                                        data-aos="fade-down"
                                            data-aos-delay="800"
                                    >

                                        <FaArrowLeft />

                                        Back To Blogs

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* RELATED BLOGS */}
            <section className="related-blog-section py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="related-subtitle"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                        >

                            More Insights

                        </span>

                        <h2 className="related-heading mt-3"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                        >

                            Related Articles

                        </h2>

                    </div>



                    <div className="row g-4">

                        {relatedBlogs.slice(0, 3).map((item) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={item.id}

                                data-aos="fade-up"
                                data-aos-delay={item.id * 100}
                            >

                                <div className="related-card h-100">


                                    {/* IMAGE */}
                                    <div className="related-image-wrapper">

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="img-fluid related-image"
                                        />

                                    </div>



                                    {/* CONTENT */}
                                    <div className="related-content">

                                        <span className="related-category">

                                            {item.category}

                                        </span>

                                        <h3 className="related-title">

                                            {item.title}

                                        </h3>

                                        <p className="related-description">

                                            {item.description}

                                        </p>



                                        <Link
                                            to={`/blog/${item.slug}`}
                                            className="related-btn"
                                        >

                                            Read More

                                            <FaArrowRight />

                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </>
    );
};

export default BlogDetailsPage;