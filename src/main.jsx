import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HelmetProvider } from "react-helmet-async";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import App from './App.jsx';
import './mystyle.css';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/Home.jsx';
import AboutUs from './pages/About.jsx';
import Testimonials from "./pages/Testimonials.jsx";
import FAQSPage from "./pages/Faqs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import EnquiryPage from "./pages/EnquiryFormPage.jsx";
import BlogsList from "./pages/BlogsList.jsx";
import BlogDetailsPage from "./pages/BlogsInfo.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import CareerDetailsPage from "./pages/CareerDetailsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx"
import Footer from './components/Footer.jsx';

import NotFound from "./pages/NotFound";

import './components/responsive.css';







createRoot(document.getElementById('root')).render(
   <HelmetProvider>

    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/faqs" element={<FAQSPage/>}/>
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/enquiry" element={<EnquiryPage/>} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/:slug" element={<CareerDetailsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />

          {/* 404 PAGE */}
          <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>

    </BrowserRouter>

  </HelmetProvider>
)
