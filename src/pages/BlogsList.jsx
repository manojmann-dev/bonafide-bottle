import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaArrowRight,
    FaCalendarAlt,
    FaUserAlt,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import blogData from "../data/blogData";

import "./blogslist-style.css";

const BlogPage = () => {

    const categories = [
        "All",
        "Hospitality",
        "Restaurants",
        "Events",
        "Corporate",
        "Sustainability",
    ];


    /* CATEGORY FILTER */
    const [selectedCategory, setSelectedCategory] =
        useState("All");


    /* PAGINATION */
    const [currentPage, setCurrentPage] =
        useState(1);

    const blogsPerPage = 6;


    /* FILTER BLOGS */
    const filteredBlogs =
        selectedCategory === "All"
            ? blogData
            : blogData.filter(
                  (blog) =>
                      blog.category === selectedCategory
              );


    /* TOTAL PAGES */
    const totalPages = Math.ceil(
        filteredBlogs.length / blogsPerPage
    );


    /* START INDEX */
    const startIndex =
        (currentPage - 1) * blogsPerPage;


    /* CURRENT BLOGS */
    const currentBlogs = filteredBlogs.slice(
        startIndex,
        startIndex + blogsPerPage
    );


    /* RESET PAGE WHEN CATEGORY CHANGES */
    useEffect(() => {

        setCurrentPage(1);

    }, [selectedCategory]);


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
                    Blogs | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Explore Bonafide blogs covering premium glass bottled water, luxury hospitality trends, restaurant presentation, hotel experiences, and event hydration solutions."
                />

                <meta
                    name="keywords"
                    content="Bonafide blogs, hospitality blogs, premium bottled water blog, luxury hotel water, restaurant water presentation, glass bottled water trends, event hospitality water"
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
                    content="Blogs | Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Read luxury hospitality and premium bottled water insights from Bonafide."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/blog-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/blogs"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Blogs | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Luxury hospitality insights and premium glass bottled water trends."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/blog-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/blogs"
                />

            </Helmet>

            
            {/* HERO SECTION */}
            <section className="blog-hero-section d-flex align-items-center">

                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8">

                            <span className="blog-tagline" 
                                    data-aos="fade-up" 
                                    data-aos-delay="1200">

                                Bonafide Insights

                            </span>

                            <h1 className="blog-heading mt-4"
                                data-aos="fade-up" 
                                data-aos-delay="1200"
                            >

                                Premium Hospitality
                                & Water Experience Blogs

                            </h1>

                            <p className="blog-subheading mt-4"
                                data-aos="fade-up" 
                                data-aos-delay="1000"
                            >

                                Explore luxury hospitality trends,
                                elegant bottled water presentation,
                                and premium lifestyle inspiration.

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* BLOG SECTION */}
            <section className="blog-section py-5">

                <div className="container py-5">


                    {/* FILTER BUTTONS */}
                    <div className="filter-wrapper mb-5"
                        data-aos="fade-up" 
                        data-aos-delay="1200"
                    >

                        {categories.map((category, index) => (

                            <button
                                key={index}
                                className={`filter-btn ${
                                    selectedCategory === category
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setSelectedCategory(category)
                                }
                            >

                                {category}

                            </button>

                        ))}

                    </div>



                    {/* BLOG GRID */}
                    <div className="row g-4">

                        {currentBlogs.map((blog) => (

                            <div
                                className="col-lg-4 col-md-6"
                                key={blog.id}

                                data-aos="fade-up"
                                data-aos-delay={blog.id * 100}
                            >

                                <div className="blog-card h-100">


                                    {/* IMAGE */}
                                    <div className="blog-image-wrapper">

                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="img-fluid blog-image"
                                        />

                                        <span className="blog-category">

                                            {blog.category}

                                        </span>

                                    </div>



                                    {/* CONTENT */}
                                    <div className="blog-content">


                                        {/* META */}
                                        <div className="blog-meta">

                                            <span>

                                                <FaCalendarAlt />

                                                {blog.date}

                                            </span>

                                            <span>

                                                <FaUserAlt />

                                                {blog.author}

                                            </span>

                                        </div>



                                        {/* TITLE */}
                                        <h4 className="blog-title">

                                            <Link to={`/blog/${blog.slug}`}> 
                                                {blog.title}
                                            </Link>

                                        </h4>



                                        {/* DESCRIPTION */}
                                        <p className="blog-description">

                                            {blog.description}

                                        </p>



                                        {/* BUTTON */}
                                        <Link
                                            to={`/blog/${blog.slug}`}
                                            className="blog-btn"
                                        >

                                            Read More

                                            <FaArrowRight />

                                        </Link>

                                    </div>

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

export default BlogPage;