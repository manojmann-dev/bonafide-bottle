import React, { useEffect, useState } from "react";

import "./navbar-style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    // Scroll Effect
    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 100);

        };

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    // Close Navbar
    const closeNavbar = () => {

        setMenuOpen(false);

    };

    return (

        <header className="main-header">

            <nav
                className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "navbar-scrolled" : ""
                    }`}
            >

                <div className="container">

                    {/* Logo */}
                    <NavLink
                        className="navbar-brand logo"
                        to="/"
                        onClick={closeNavbar}
                    >

                        <img
                            src="/imgs/logo-wht.png"
                            alt="Bonafide Water"
                            className="img-fluid"
                        />

                    </NavLink>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    {/* Menu */}
                    <div
                        className={`collapse navbar-collapse justify-content-between ${menuOpen ? "show" : ""
                            }`}
                    >

                        {/* Nav Links */}
                        <ul className="navbar-nav mx-auto">

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    onClick={closeNavbar}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/about"
                                    onClick={closeNavbar}
                                >
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/testimonials"
                                    onClick={closeNavbar}
                                >
                                    Testimonials
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/faqs"
                                    onClick={closeNavbar}
                                >
                                    FAQ
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/contact-us"
                                    onClick={closeNavbar}
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>

                        {/* CTA */}
                        <NavLink
                            to="/enquiry"
                            className="btn btn-primary"
                            onClick={closeNavbar}
                        >

                            Enquire Now

                        </NavLink>

                    </div>

                </div>

            </nav>

        </header>

    );

};

export default Navbar;