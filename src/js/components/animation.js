import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Parallax from 'parallax-js'

export default () => {
    gsap.registerPlugin(ScrollTrigger);
    // animation


    var scene2 = document.querySelectorAll('[data-paralax]');
    scene2.forEach(element => {
        var parallaxInstance = new Parallax(element);
    });

    const animFadeY = document.querySelectorAll("[data-anim-fadey]");
    const animFadeYFix = document.querySelectorAll("[data-anim-fadey-fix]");
    const animFadeL = document.querySelectorAll("[data-anim-fadel]");
    const animFadeR = document.querySelectorAll("[data-anim-fader]");
    const animFadeZ = document.querySelectorAll("[data-anim-zoom]");
    const animDuration = 1;
    const animToggleActions = "play none none none";
    const animStart = "top bottom-=100px";
    const animEnd = "top top";


    animFadeY.forEach((animFY) => {
        gsap
        .timeline({
            scrollTrigger: {
                trigger: animFY,
                toggleActions: animToggleActions,
                start: animStart,
                end: animEnd,
            },
        })
        .fromTo(animFY, {
            y: 70,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: animDuration,
            delay: animFY.dataset.animFadey,
        })
    });

    animFadeYFix.forEach((animFY) => {
        gsap
        .timeline({
            scrollTrigger: {
                trigger: animFY,
                toggleActions: animToggleActions,
                start: animStart,
                end: "top center",
                // markers: true,
                scrub: true,
            },
        })
        .fromTo(animFY, {
            y: 70,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: animDuration,
            delay: animFY.dataset.animFadey,
        })
    });

    animFadeL.forEach(e => {
        gsap
        .timeline({
            scrollTrigger: {
                trigger: e,
                toggleActions: animToggleActions,
                start: animStart,
                end: animEnd,
            },
        })
        .fromTo(e, {
            x: -70,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: animDuration,
            delay: e.dataset.animFadel,
        })
    });

    animFadeR.forEach(e => {
        gsap
        .timeline({
            scrollTrigger: {
                trigger: e,
                toggleActions: animToggleActions,
                start: animStart,
                end: animEnd,
            },
        })
        .fromTo(e, {
            x: 70,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: animDuration,
            delay: e.dataset.animFader,
        })
    });

    animFadeZ.forEach(e => {
        gsap
        .timeline({
            scrollTrigger: {
                trigger: e,
                toggleActions: animToggleActions,
                start: animStart,
                end: "top center",
                // markers: true,
                scrub: true,
            },
        })
        .fromTo(e, {
            scale: 0.8,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: animDuration,
            delay: e.dataset.animFader,
        })
    });

    const designEl1 = document.querySelectorAll('[data-scroll-container]')
    designEl1.forEach(element => {
        // console.log("object");
        let el1 = element
        let designEl1Inner1 = element.querySelector('[data-scroll-left]')
        gsap
        .timeline({
            scrollTrigger: {
                trigger: el1,
                start: "top top",
                // end: "bottom bottom",
                // markers: true,
                scrub: true,
            },
        })
        .fromTo(designEl1Inner1, {
            x: 0,
            duration: 1,
        }, {
            x: -120,
            duration: 1,
        })
        // console.log("object");
        let designEl1Inner = element.querySelector('[data-scroll-right]')
        gsap
        .timeline({
            scrollTrigger: {
                trigger: element,
                start: "center center-=50px",
                // end: "bottom bottom",
                // markers: true,
                scrub: true,
            },
        })
        .fromTo(designEl1Inner, {
            x: 0,
            duration: 1,
        }, {
            x: 120,
            duration: 1,
        })
    });

    // const containerParalax1 = document.querySelectorAll('.section-anim')
    // containerParalax1.forEach(e => {
    //     let element = e.querySelector('.my-bg')
    //     let inner = element.querySelector('img')
    //     if (e.classList.contains('active')) {
    //         console.log("object");
    //     }
    //     gsap
    //     .fromTo(element, {
    //         y: () => -inner.offsetHeight - element.offsetHeight
    //     }, {
    //         y: 0,
    //         ease: "none"
    //     });
    // });

    const sliderScrollImg = document.querySelectorAll('[data-slider-scroll-img]')
    sliderScrollImg.forEach(element => {
        // console.log("object");
        let imgOne = element.querySelector('.img-js_one')
        let imgTwo = element.querySelector('.img-js_two')
        let imgThree = element.querySelector('.img-js_three')
        let height = imgOne.offsetHeight - 100
        // console.log(imgOne.offsetHeight - 200);

        ScrollTrigger.create({
            // animation: tl,
            trigger: imgOne,
            // markers: true,
            start: "center center",
            end: () => "+=" + height,
            // end: "center center",
            toggleClass: "_active",
            onLeaveBack: ()=> {
                imgOne.classList.add('_active')
            },
        });
        ScrollTrigger.create({
            // animation: tl,
            trigger: imgTwo,
            // markers: true,
            start: "center center",
            end: () => "+=" + height,
            toggleClass: "_active",
        });
        ScrollTrigger.create({
            // animation: tl,
            trigger: imgThree,
            // markers: true,
            start: "center center",
            end: () => "+=" + height,
            toggleClass: "_active",
            onLeave: ()=> {
                imgThree.classList.add('_active')
            },
        });
        // gsap
        // .timeline({
        //     scrollTrigger: {
        //         trigger: imgOne,
        //         start: "center center-=50px",
        //         // end: "bottom bottom",
        //         markers: true,
        //         // scrub: true,
        //         toggleClass: "_active",
        //     },
        //     scrollTrigger: {
        //         trigger: imgTwo,
        //         start: "center center-=50px",
        //         // end: "bottom bottom",
        //         markers: true,
        //         // scrub: true,
        //         toggleClass: "_active",
        //     },
        // })

        // .fromTo(element, {
        //     // x: 0,
        //     duration: 1,
        // }, {
        //     // x: 120,
        //     duration: 1,
        // })
    });


    const addGsapClaas = document.querySelectorAll('[data-gsap-addclass]')
    addGsapClaas.forEach(element => {
        ScrollTrigger.create({
            // animation: tl,
            trigger: element,
            // markers: true,
            start: "top center",
            end: "bottom center",
            toggleClass: "_active",
        });
    });

    // gsap.utils.toArray(".section-parallax .parallax-content").forEach((section, i) => {
    //     const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

    //     gsap.fromTo(section,{
    //     y: -heightDiff
    //     }, {
    //     scrollTrigger: {
    //         trigger: section.parentElement,
    //         scrub: true
    //     },
    //     y: 0,
    //     ease: "none"
    //     });
    // });


    // gsap.from(".bg-section3", {
    //     scrollTrigger: {
    //         trigger: ".design-section3",
    //         toggleActions: "restart none none none",
    //     },
    //     delay:0.5,
    //     scale:0.5,
    //     duration: 2
    // });

    // const designEl3 = document.querySelectorAll('.grid-vision')
    // designEl3.forEach(element => {
    //     // console.log("object");
    //     let inner = designEl3.querySelector('.grid-vision__txt::before')
    //     gsap
    //     .timeline({
    //         scrollTrigger: {
    //             trigger: element,
    //             start: "top top",
    //             end: "bottom top",
    //             markers: true,
    //             scrub: true,
    //         },
    //     })
    //     .fromTo(inner, {
    //         width: 0,
    //         duration: 1,
    //     }, {
    //         width: 100,
    //         duration: 1,
    //     })
    // });
    // if (designEl) {
    // }


    const getNavFix = document.querySelectorAll('[data-nav-fix]')
    getNavFix.forEach(e => {

        let navs = document.querySelectorAll('.fp-nav-space')
        navs.forEach(nav => {
            // console.log(nav);
            let navData = nav.querySelector('a').dataset.navName
            // console.log(navData);

            let anchors = e.querySelectorAll('[data-anchor]')
            anchors.forEach((anchor, index) => {
                let anchor1 = anchor.dataset.anchor
                let number1 = index+1
                if (navData === anchor1) {
                    // console.log(document.querySelectorAll(`.end--nav${number1}`));
                    // console.log(number1);
                    ScrollTrigger.create({
                        // animation: tl,
                        trigger: anchor,
                        endTrigger: e.querySelector(`.end--nav${number1}`),
                        // markers: true,
                        start: "top center",
                        end: "top center",
                        toggleClass: "_active",

                        onEnter: () => {
                            nav.classList.add('_active')
                        },
                        onEnterBack: () => {
                            nav.classList.add('_active')
                        },
                        onLeave: () => {
                            nav.classList.remove('_active')
                        },
                        onLeaveBack: () => {
                            nav.classList.remove('_active')
                        },
                    });
                }

            });
        });
    });
}
