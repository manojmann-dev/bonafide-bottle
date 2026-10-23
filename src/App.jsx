import Navbar from "./components/Navbar";
import HeroSlider from "./components/SliderHero";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import SamplePage from "./pages/SamplePage";



function App() {
return (
    <>
        <section id="center">
            <div className="hero">
                <img src={heroImg} className="base" width="170" height="179" alt="" />
                <img src={reactLogo} className="framework" alt="React logo" />
                <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
                <h1>Get started</h1>
                <p>
                Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                </p>
            </div>
            <button
                className="counter"
                onClick={() => setCount((count) => count + 1)}
            >
                Count is {count}
            </button>
        </section>
    </>
    )
}

export default App;