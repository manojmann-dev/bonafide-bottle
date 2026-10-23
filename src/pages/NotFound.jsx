import React from "react";
import { NavLink } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import "./notfound-style.css";

const NotFound = () => {

    return (

        <>

            <section className="notfound-wrapper">

                {/* BACKGROUND GLOW */}
                <div className="blur-circle blur-one"></div>
                <div className="blur-circle blur-two"></div>

                <div className="container">

                    <div className="notfound-content">

                        {/* BIG 404 */}
                        <h1 className="notfound-code">

                            4<span>0</span>4

                        </h1>

                        {/* TITLE */}
                        <h2 className="notfound-title">

                            Oops! Lost In The Flow

                        </h2>

                        {/* DESCRIPTION */}
                        <p className="notfound-text">

                            The page you are looking for may have been removed,
                            renamed, or is temporarily unavailable.

                        </p>

                        {/* BUTTON */}
                        <NavLink
                            to="/"
                            className="notfound-btn"
                        >

                            <FaArrowLeft />

                            Back To Homepage

                        </NavLink>

                    </div>

                </div>

            </section>

        </>

    );

};

export default NotFound;