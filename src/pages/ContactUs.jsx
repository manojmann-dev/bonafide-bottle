import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";

import "./contactus-style.css";
import { TbLocation } from "react-icons/tb";
import { PiMapPinLight } from "react-icons/pi";
import { PiPhoneLight } from "react-icons/pi";
import { PiEnvelopeLight } from "react-icons/pi";
import { PiClockLight } from "react-icons/pi";


const ContactSection = () => {
    useEffect(() => {
        
        AOS.init({

            duration: 1200,

            once: false,

            mirror: true,

            offset: 80,

            easing: "ease-out-cubic",

        });

    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({
        type: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        const form = e.currentTarget;
        setIsSubmitting(true);
        setFormStatus({ type: "", message: "" });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Check your VITE_EMAILJS variables in the .env file."
                );
            }

            await emailjs.sendForm(
                serviceId,
                templateId,
                form,
                { publicKey }
            );

            setFormStatus({
                type: "success",
                message: "Thank you! Your enquiry has been sent successfully.",
            });
            form.reset();
        } catch (error) {
            console.error("EmailJS submission failed:", error);
            setFormStatus({
                type: "error",
                message: "Sorry, your enquiry could not be sent. Please check your details and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>

                {/* PAGE TITLE */}
                <title>
                    Contact Us | Bonafide Premium Glass Bottled Water
                </title>



                {/* BASIC SEO */}
                <meta
                    name="description"
                    content="Contact Bonafide for premium glass bottled water solutions for hotels, restaurants, weddings, events, and corporate hospitality experiences."
                />

                <meta
                    name="keywords"
                    content="contact Bonafide, premium bottled water contact, glass bottled water supplier, luxury hospitality water, restaurant bottled water, hotel water supplier"
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
                    content="Contact Bonafide Premium Glass Bottled Water"
                />

                <meta
                    property="og:description"
                    content="Get in touch with Bonafide for premium hospitality bottled water solutions."
                />

                <meta
                    property="og:image"
                    content="https://yourwebsite.com/images/contact-banner.jpg"
                />

                <meta
                    property="og:url"
                    content="https://bonafidewater.com/contact-us"
                />



                {/* TWITTER SEO */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Contact Bonafide"
                />

                <meta
                    name="twitter:description"
                    content="Connect with Bonafide for luxury glass bottled water hospitality solutions."
                />

                <meta
                    name="twitter:image"
                    content="https://yourwebsite.com/images/contact-banner.jpg"
                />



                {/* CANONICAL URL */}
                <link
                    rel="canonical"
                    href="https://bonafidewater.com/contact-us"
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
                                    > Contact Us</h1>
                                    <p
                                        data-aos="fade-up" 
                                        data-aos-delay="1000"
                                    > Connect with Bonafide for elegant glass bottled water solutions. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-section py-5">

                    <div className="container py-5">


                        {/* SECTION HEADING */}
                        <div className="text-center mb-5">

                            <span className="text-uppercase contact-tagline"
                                data-aos="fade-up" 
                                data-aos-delay="1000"
                            >

                                Contact Bonafide

                            </span>

                            <h2 className="contact-heading mt-3"
                                data-aos="fade-up" 
                                data-aos-delay="1200"
                            >

                                Let’s Connect With Bonafide

                            </h2>

                            <p className="contact-description mx-auto mt-3"
                                data-aos="fade-up" 
                                data-aos-delay="1300"
                            >

                                Get in touch with our team for hospitality partnerships,
                                premium water supply services, and business inquiries.

                            </p>

                        </div>



                        <div className="row g-5 align-items-stretch">


                            {/* LEFT CONTACT INFO */}
                            <div className="col-lg-5">

                                <div className="contact-info-wrapper h-100">


                                    {/* CONTACT CARD */}
                                    <div className="contact-info-card"
                                        data-aos="fade-up" 
                                        data-aos-delay="1000"
                                    >

                                        <div className="contact-icon">

                                            <PiMapPinLight size={40}/>

                                        </div>

                                        <div>

                                            <h5 className="fw-bold mb-2">

                                                Office Address

                                            </h5>

                                            <p className="mb-0 text-muted">

                                                Village Kandola Kalan, Talwan Road, 
                                                Near Gurdwara Alsheed Baba Natha Singh, 
                                                Nurmahal, Dist-Jalandhar, Punjab

                                            </p>

                                        </div>

                                    </div>



                                    {/* CONTACT CARD */}
                                    <div className="contact-info-card"
                                        data-aos="fade-up" 
                                        data-aos-delay="1200"
                                    >

                                        <div className="contact-icon">

                                            <PiPhoneLight size={40} />

                                        </div>

                                        <div>

                                            <h5 className="fw-bold mb-2">

                                                Phone Number

                                            </h5>

                                            <p className="mb-0 text-muted">

                                               (+91) 6280-427055

                                            </p>

                                        </div>

                                    </div>



                                    {/* CONTACT CARD */}
                                    <div className="contact-info-card"
                                        data-aos="fade-up" 
                                        data-aos-delay="1400"
                                    >

                                        <div className="contact-icon">

                                            <PiEnvelopeLight size={40} />

                                        </div>

                                        <div>

                                            <h5 className="fw-bold mb-2">

                                                Email Address

                                            </h5>

                                            <p className="mb-0 text-muted">

                                                bonafideminerals@gmail.com

                                            </p>

                                        </div>

                                    </div>



                                    {/* CONTACT CARD */}
                                    <div className="contact-info-card"
                                        data-aos="fade-up" 
                                        data-aos-delay="1600"
                                    >

                                        <div className="contact-icon">

                                            <PiClockLight  size={40} />

                                        </div>

                                        <div>

                                            <h5 className="fw-bold mb-2">

                                                Working Hours

                                            </h5>

                                            <p className="mb-0 text-muted">

                                                Monday - Saturday
                                                <br />
                                                9:00 AM - 6:00 PM

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>



                            {/* RIGHT FORM */}
                            <div className="col-lg-7">

                                <div className="contact-form-wrapper">

                                    <form onSubmit={handleSubmit}>

                                        <div className="row g-4">


                                            {/* NAME */}
                                            <div className="col-md-6" 
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"
                                            >

                                                <label className="form-label">

                                                    Full Name

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your name"
                                                    name="fullname"
                                                    maxLength={100}
                                                    autoComplete="name"
                                                    required
                                                />

                                            </div>



                                            {/* EMAIL */}
                                            <div className="col-md-6"
                                                data-aos="fade-up" 
                                                data-aos-delay="1200"
                                            >

                                                <label className="form-label">

                                                    Email Address

                                                </label>

                                                <input
                                                    type="email"
                                                    className="form-control custom-input"
                                                    placeholder="Enter your email"
                                                    name="youremail"
                                                    maxLength={254}
                                                    autoComplete="email"
                                                    required
                                                />

                                            </div>



                                            {/* PHONE */}
                                            <div className="col-md-6"
                                                    data-aos="fade-up" 
                                                    data-aos-delay="1200"
                                            >

                                                <label className="form-label">

                                                    Phone Number

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter phone number"
                                                    name="yourphone"
                                                    maxLength={30}
                                                    autoComplete="tel"
                                                    required
                                                />

                                            </div>



                                            {/* SUBJECT */}
                                            <div className="col-md-6"
                                                    data-aos="fade-up" 
                                                    data-aos-delay="1200"
                                            >

                                                <label className="form-label">

                                                    Subject

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter subject"
                                                    name="subject"
                                                />

                                            </div>



                                            {/* MESSAGE */}
                                            <div className="col-12" 
                                                    data-aos="fade-up" 
                                                    data-aos-delay="1200"
                                            >

                                                <label className="form-label">

                                                    Your Message

                                                </label>

                                                <textarea
                                                    rows="6"
                                                    className="form-control custom-input"
                                                    placeholder="Write your message..."
                                                    name="message"
                                                    required
                                                    maxLength={5000}
                                                ></textarea>

                                            </div>



                                            {/* FORM STATUS MESSAGE */}
                                            {formStatus.message && (
                                                <div className="col-12">
                                                    <div
                                                        className={
                                                            formStatus.type === "success"
                                                                ? "alert alert-success"
                                                                : "alert alert-danger"
                                                        }
                                                        role="status"
                                                        aria-live="polite"
                                                    >
                                                        {formStatus.message}
                                                    </div>
                                                </div>
                                            )}

                                            {/* BUTTON */}
                                            <div className="col-12">

                                                <button
                                                    type="submit"
                                                    className="btn btn-dark rounded-pill px-5 py-3"
                                                    data-aos="fade-up"
                                                    data-aos-delay="1000"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Sending..." : "Send Message"}
                                                </button>

                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* GOOGLE MAP SECTION */}
            <section className="map-section pb-5">

                <div className="container-fluid">

                    <div className="map-wrapper" 
                        data-aos="zoom-in" 
                        data-aos-delay="1000"
                    >
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.7946910747287!2d75.6057788!3d31.0598146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a65003d5c1391%3A0x1050c374638ef2a5!2sbonafide%20minerals!5e0!3m2!1sen!2sin!4v1779448963799!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>

                </div>

            </section>
        </>
    );
};

export default ContactSection;