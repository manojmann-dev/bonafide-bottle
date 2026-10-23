import {useEffect,useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./HeroSlider.css";

export default function Hero(){

const bottleRef=useRef();

useEffect(()=>{

let tl = gsap.timeline();


// Initial bottle drop
tl.fromTo(
    bottleRef.current,
    {
        y: -500,
        x: 0,
        opacity: 0,
        duration:2,
       
    
    },
    {
        y: 200,
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
        yoyo: true,

    }
)


// Gentle floating
.to(
bottleRef.current,
    {
        y:200,
        x:0,
    }
);



/* HERO -> INTRO1 (Animation) */


gsap.to(
bottleRef.current,
    {
        x:50,
        y:450,
        duration: 2,
        scrollTrigger:{
            trigger: ".animate1",
            start: "top center",
            end: "bottom center",
            scrub: 2,
        }

    }
);



},[])



return(
<>

    <section className="myhero trigger1">

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="heroSlider-txt">
                        <h1>NATURE'S PURE</h1>
                        <h2>Purity You Can Taste</h2>
                    </div>
                    <div className="heroSlider-img">
                        <img
                        ref={bottleRef}
                        src="./imgs/bottle-transparent-img1.png"
                        className="bottle"
                        alt="Bottle"
                        />
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="water-effects"></div>
    </section>
    {/* End Hero Slider Section */}


    <section className="intro1 animate1">
        <div className="middle-step1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="step1-txt text-left">
                            <p> Pure Water. Pure Trust. </p>
                            <h2> Nature's Pure </h2>
                            
                            <ul className="intro-list list-unstyled">
                                <li> Advanced Purification</li>
                                <li> Crisp Fresh Taste</li>
                                <li> Quality Assured</li>
                                <li> Essential Hydration</li>
                                <li> Safe & Hygienic Packaging</li>
                                <li> Sustainable Commitment</li>
                            </ul>
                            <a href="#" className="btn btn-primary"> Enquire Now</a>
                                

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="step1-img">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Intro Section 1 */}


    <section className="intro2 animate2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="step1-img">
                        <img src="./imgs/dring-water-men-img1.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="step1-txt text-left">
                        <p> BONAFIDE </p>
                        <h1> Purity</h1>
                        <h3>You Can Taste </h3> 
                        <div className="intro-abut">
                            <p>
                                At Bonafide, we believe water should be more than hydration — it should be clean, refreshing, and uncompromisingly pure.
                            </p>    
                            <p>
                                Carefully purified and quality tested, every bottle delivers the freshness your lifestyle deserves.
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary"> Enquire Now</a>
                            

                    </div>
                </div>
                    
            </div>
        </div>
    </section>
    {/* End Intro Section 2 */}

    <section className="section-two animate3">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="step1-img">
                        <img src="./imgs/dring-water-men-img1.png" className="img-fluid" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="step1-txt text-left">
                        <p> BONAFIDE </p>
                        <h1> Purity</h1>
                        <h3>You Can Taste </h3> 
                        <div className="intro-abut">
                            <p>
                                At Bonafide, we believe water should be more than hydration — it should be clean, refreshing, and uncompromisingly pure.
                            </p>    
                            <p>
                                Carefully purified and quality tested, every bottle delivers the freshness your lifestyle deserves.
                            </p>
                        </div>
                        <a href="#" className="btn btn-primary"> Enquire Now</a>
                            

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End Intro Section 3 */}

    <section className="section-three animate4">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="step1-img">
                    <img src="./imgs/dring-water-men-img1.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="step1-txt text-left">
                    <p> BONAFIDE </p>
                    <h1> Purity</h1>
                    <h3>You Can Taste </h3> 
                    <div className="intro-abut">
                        <p>
                            At Bonafide, we believe water should be more than hydration — it should be clean, refreshing, and uncompromisingly pure.
                        </p>    
                        <p>
                            Carefully purified and quality tested, every bottle delivers the freshness your lifestyle deserves.
                        </p>
                    </div>
                    <a href="#" className="btn btn-primary"> Enquire Now</a>
                        

                </div>
            </div>
                
            </div>
        </div>
    </section>
    {/* End Intro Section 3 */}
    
</> 

)

}