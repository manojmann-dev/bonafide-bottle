import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
//import "./samplepage-style.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero(){

const bottleRef = useRef();

useEffect(()=>{

/* Intro bottle drop */
let intro = gsap.timeline();

intro
.fromTo(
 bottleRef.current,
 {
  y:0,
  opacity:0,
  rotation:10,
},
 {
  y:0,
  opacity:1,
  duration:2,
  ease:"bounce.out",
 }
)
.to(
 bottleRef.current,
 {
  y:-10,
  repeat:0,
  yoyo:true,
  duration:2.5,
  ease:"sine.inOut",
  markers:true,
  scrub:true,
}
);


/* Main Scrollytelling */
let tl = gsap.timeline({

scrollTrigger:{
trigger:".story-wrapper",
start:"top top",
end:"+=5000",
pin:true,
scrub:1.4,
snap:1/4,
markers:false
}

});


/* Section 1 */
tl.to(
 bottleRef.current,
 {
  x:-180,
  y:120,
  scale:.85,
  rotation:-8,
  ease:"none",

 }
)

/* Section 2 */
.to(
 bottleRef.current,
 {
  x:140,
  y:320,
  scale:.72,
  rotation:12,
  ease:"none"
 }
)

/* Section 3 */
.to(
 bottleRef.current,
 {
  x:-120,
  y:540,
  scale:.58,
  rotation:-10,
  ease:"none"
 }
)

/* Section 4 */
.to(
 bottleRef.current,
 {
  x:160,
  y:760,
  scale:.48,
  rotation:0,
  ease:"none"
 }
);


return ()=>{
ScrollTrigger.getAll().forEach(t=>t.kill());
};

},[])


return(
<>



</>
)

}