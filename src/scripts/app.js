import { gsap } from "gsap";
console.log(gsap.version);

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from(".download__container",{
    opacity:0,
    scale:0.9,
    scrollTrigger: {
        trigger:".download__container",
        start: "0 55%",
        end: "10% 25%",
        toggleActions: "play pause reverse reset",
        scrub: true,
        markers: true
    }
});

var animaLeft = gsap.utils.toArray(".gsap__gauche");

animaLeft.forEach(function(animaLeft){
    gsap.from(animaLeft,{ 
        x:-500,
        opacity:0,
        scrollTrigger: {
            trigger:animaLeft,
            start: "0 55%",
            end: "10% 25%",
            toggleActions: "play pause reverse reset",
            scrub: true,
            markers: true
        }
    });
})

var animaRight = gsap.utils.toArray(".gsap__droite");

animaRight.forEach(function(animaRight){
    gsap.from(animaRight,{ 
        x:500,
        opacity:0,
        scrollTrigger: {
            trigger:animaRight,
            start: "0 55%",
            end: "10% 25%",
            toggleActions: "play pause reverse reset",
            scrub: true,
            markers: true
        }
    });
})