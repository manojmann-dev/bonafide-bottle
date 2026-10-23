import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import {
    FaChevronLeft,
    FaChevronRight,
    FaTimes,
} from "react-icons/fa";

import "./gallery-style.css";

const GalleryPage = () => {

    const galleryData = [

        {
            id: 1,
            category: "Hotels",
            image:
                "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1200&auto=format&fit=crop",
            title: "Luxury Hotel Experience",
        },

        {
            id: 2,
            category: "Restaurants",
            image:
                "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
            title: "Fine Dining Presentation",
        },

        {
            id: 3,
            category: "Events",
            image:
                "https://images.unsplash.com/photo-1564919415179-752ca9dadcdf?q=80&w=1200&auto=format&fit=crop",
            title: "Luxury Wedding Setup",
        },

        {
            id: 4,
            category: "Corporate",
            image:
                "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
            title: "Corporate Hospitality",
        },

        {
            id: 5,
            category: "Hotels",
            image:
                "https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=1200&auto=format&fit=crop",
            title: "Premium Room Service",
        },

        {
            id: 6,
            category: "Restaurants",
            image:
                "https://images.unsplash.com/photo-1639256150782-ecdb00b01e84?q=80&w=1200&auto=format&fit=crop",
            title: "Elegant Table Experience",
        },

        {
            id: 7,
            category: "Events",
            image:
                "https://images.unsplash.com/photo-1676809108409-8f4f9d5bfdfc?q=80&w=1200&auto=format&fit=crop",
            title: "Exclusive Event Setup",
        },

        {
            id: 8,
            category: "Hotels",
            image:
                "https://images.unsplash.com/photo-1553564552-02656d6a2390?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        },
        {
            id: 9,
            category: "Events",
            image:
                "https://images.unsplash.com/photo-1595994195534-d5219f02f99f?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        },
        {
            id: 10,
            category: "Restaurants",
            image:
                "https://images.unsplash.com/photo-1520090377527-6090c8a99dad?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        },

        {
            id: 11,
            category: "Corporate",
            image:
                "https://images.unsplash.com/photo-1648442302494-58f7b8947880?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        },
        {
            id: 12,
            category: "Hotels",
            image:
                "https://images.unsplash.com/photo-1520164126806-d75ade72e6e3?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        },
        
        {
            id: 13,
            category: "Corporate",
            image:"https://images.unsplash.com/photo-1549675613-7c8dafad711e?q=80&w=1200&auto=format&fit=crop",
            title: "Modern Meeting Lounge",
        }

    ];


    const categories = [
        "All",
        "Hotels",
        "Restaurants",
        "Events",
        "Corporate",
    ];


    const [selectedCategory, setSelectedCategory] =
        useState("All");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [lightboxIndex, setLightboxIndex] =
        useState(null);


    const imagesPerPage = 6;


    /* FILTER */
    const filteredGallery =
        selectedCategory === "All"
            ? galleryData
            : galleryData.filter(
                  (item) =>
                      item.category === selectedCategory
              );


    /* PAGINATION */
    const totalPages = Math.ceil(
        filteredGallery.length / imagesPerPage
    );

    const startIndex =
        (currentPage - 1) * imagesPerPage;

    const currentGallery = filteredGallery.slice(
        startIndex,
        startIndex + imagesPerPage
    );


    useEffect(() => {

        setCurrentPage(1);

    }, [selectedCategory]);


    /* LIGHTBOX */
    const nextImage = () => {

        setLightboxIndex((prev) =>
            prev === currentGallery.length - 1
                ? 0
                : prev + 1
        );

    };

    const prevImage = () => {

        setLightboxIndex((prev) =>
            prev === 0
                ? currentGallery.length - 1
                : prev - 1
        );

    };

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
                    Gallery | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Explore the Bonafide gallery showcasing premium glass bottled water experiences for hotels, restaurants, weddings, events, and corporate hospitality spaces."
                />

                <meta
                    name="keywords"
                    content="Bonafide gallery, glass bottled water gallery, luxury hospitality water, premium bottled water images, restaurant water presentation, hotel bottled water, event hospitality water"
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
                    content="Gallery | Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="View premium hospitality and luxury glass bottled water presentation by Bonafide."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/gallery-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/gallery"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Gallery | Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Luxury glass bottled water gallery for hotels, restaurants, events, and hospitality spaces."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/gallery-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/gallery"
                />

            </Helmet>

            {/* HERO */}
            <section className="gallery-hero-section">

                <div className="container">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8">

                            <span className="gallery-tagline" 
                                    data-aos="zoom-in"
                                    data-aos-delay="1200"
                            >

                                Bonafide Gallery

                            </span>

                            <h1 className="gallery-heading mt-4"
                                data-aos="fade-up"
                                data-aos-delay="900"
                            >

                                Premium Hospitality
                                Showcase Collection

                            </h1>

                            <p className="gallery-subheading mt-4"
                               data-aos="fade-up"
                               data-aos-delay="1200"
                            >

                                Explore luxury hospitality,
                                elegant events,
                                and premium bottled
                                water experiences.

                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* GALLERY */}
            <section className="gallery-section py-5">

                <div className="container py-5">


                    {/* FILTER */}
                    <div className="gallery-filter-wrapper">

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

                                data-aos="fade-up"
                                data-aos-delay={category * 100}
                            >

                                {category}

                            </button>

                        ))}

                    </div>



                    {/* GRID */}
                    <div className="row g-4 mt-2">

                        {currentGallery.map(
                            (item, index) => (

                                <div
                                    className="col-lg-4 col-md-6"
                                    key={item.id}

                                    data-aos="fade-up"
                                        data-aos-delay={item.id * 100}
                                >

                                    <div
                                        className="gallery-card"
                                        onClick={() =>
                                            setLightboxIndex(
                                                index
                                            )
                                        }
                                        
                                    >

                                        <img
                                            src={item.image}
                                            alt=""
                                            className="img-fluid gallery-image"
                                        />



                                        {/* BADGE */}
                                        <div className="gallery-badge">

                                            {item.category}

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

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



            {/* LIGHTBOX */}
            {lightboxIndex !== null && (

                <div className="lightbox-overlay">

                    {/* CLOSE */}
                    <button
                        className="lightbox-close"
                        onClick={() =>
                            setLightboxIndex(null)
                        }
                    >

                        <FaTimes />

                    </button>



                    {/* PREV */}
                    <button
                        className="lightbox-arrow left"
                        onClick={prevImage}
                    >

                        <FaChevronLeft />

                    </button>



                    {/* IMAGE */}
                    <img
                        src={
                            currentGallery[lightboxIndex]
                                .image
                        }
                        alt=""
                        className="lightbox-image"
                    />



                    {/* NEXT */}
                    <button
                        className="lightbox-arrow right"
                        onClick={nextImage}
                    >

                        <FaChevronRight />

                    </button>

                </div>

            )}

        </>
    );
};

export default GalleryPage;