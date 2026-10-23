import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import HeroSlider3 from "../components/HeroSlider3.jsx";
import MiddleSection from "../components/MiddleSection.jsx";
import { Routes, Route } from "react-router-dom";


export default function HomeMain(){
    return(
    <>
        <Helmet>

            <title>
                Bonafide | Premium Glass Bottled Water
            </title>
            <meta
                name="robots"
                content="index, follow"
            />

            <meta
                name="description"
                content="Bonafide provides elegant glass bottled water for luxury hospitality, restaurants, hotels, and events."
            />

            <meta
                name="keywords"
                content="glass bottled water, premium water, luxury hospitality water"
            />

        </Helmet>

        <HeroSlider3/>
        <MiddleSection/>

    </>
    )
}
