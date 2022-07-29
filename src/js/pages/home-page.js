
// import fullpage from '../imports/fullpage.min.js';
// import fullpagescroll from '../imports/fullpagescroll';

// export default () => {
//     const fullpageInit = document.querySelectorAll('#fullpage');
//     fullpageInit.forEach(el => {

//         el = new fullpage('#fullpage', {
//             licenseKey: '77EE6A6C-DD2F448E-8B13346E-EF3361CE',
//             responsiveWidth: 1025,
//             easingcss3: "ease-in-out",
//             navigation: false,
//             responsiveHeight: 600,
//             normalScrollElements: '.scroll-auto',
//             verticalCentered: true,
//             navigationPosition: 'right',
//             showActiveTooltip: false,
//             scrollingSpeed: 1400,
//             // parallax: true,
//             // onLeave: function(origin, destination, direction){
//             //     console.log("Leaving section" + origin.index);
//             // },
//             // scrollBar: true,
//             // anchors: ['slide1', 'slide2'],
//             // fitToSection: false,
//             // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
//             // navigation: true,
//             // navigationTooltips: ['about-us', 'contact'],
//             // scrollOverflow: true,
//             // autoScrolling: true,
//             // fitToSection: false
//             // slidesNavigation: false,
//             // slidesNavPosition: 'bottom',
//         });
//         // fullpagescroll();
//     });

// };


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classToggle from "../helpers/class-toggle";
import Swiper from 'swiper/bundle';

export default ()=>{
    gsap.registerPlugin(ScrollTrigger);

    let hero = document.querySelector('.home-hero');
    let wrapper = document.querySelector('#fullpage');
    let frames = document.querySelectorAll('.home-hero__frame');
    let title = document.querySelectorAll('.home-hero__text');
    let title1 = document.querySelectorAll('.my-bl-scroll-txt');
    let slider;
    // let slideNav = document.querySelector('#fp-nav');
    // let buttons = document.querySelectorAll('#fp-nav a');
    let body = document.body;

    const activeFrameClass = 'home-hero__frame--visible';
    const sliderPrefix = 'home-slider';
    let sliderEl = document.querySelector(`.${sliderPrefix}`);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: `+=${innerHeight*2}`,
        pin: hero,
        scrub: true,
        onUpdate: (self) => {
          let progress = self.progress;
          if (frames.length) {
              let frame = Math.round(self.progress * (frames.length - 1));
              classToggle(frames, frames[frame], activeFrameClass);
          }
        },
        onLeave: (self) => {
          
        },
        
      }
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: `+=200px`,
        scrub: true,
      }
    });
    tl.to(title, {
        opacity: 1,
        duration: 0.5
    }, 1)
    tl2.to(title1, {
        opacity: 0,
        duration: 1,
    }, 1)

    let tlSlider = gsap.timeline({
      scrollTrigger: {
        trigger: sliderEl,
        start: "top top",
        end: `+=${innerHeight}`,
        pin: sliderEl,
        scrub: true,
        onUpdate: (self) => {
          // console.log(self.progress);
          if (self.progress>0 && self.direction == 1) {
            slider.mousewheel.enable();
            // console.log('wheel enabled');
          }
          if (slider.activeIndex === 0 && self.progress === -1) {

          }
        },
        onLeaveBack: (self) => {
          // slideNav.classList.remove('visible')
        },
        onLeave: (self) => {
          
        },
        
      }
    });

    let tlhelper = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: 'bottom 0.1%',
        scrub: true,
        onEnterBack: (self) => {
          // console.log('helper: hero enter back');
          console.log('scroll up');
          gsap.set(body, {'overflow': 'hidden'});
          console.log('body locked');
          setTimeout(function(){
            gsap.set(body, {'overflow': 'auto'});
            console.log('body unlocked');
          }, 2000);

          // slideNav.classList.remove('visible')
          let offset = {};
          let elOffsetY = hero.getBoundingClientRect().top
          offset.val = window.scrollY;
          let distance = elOffsetY  + offset.val;
          const time = 2;

          gsap.to(offset, {
              val: (elOffsetY + window.scrollY),
              duration: time,
              ease: 'power2.inOut',
              onUpdate: () => {
                  window.scrollTo(0, offset.val)
              },
              
          });
        },
        onEnter: (self) => {
          //scroll down
          // console.log('helper: hero enter');
          console.log('autoscroll down');
          gsap.set(body, {'overflow': 'hidden'});
          console.log('body locked');
          setTimeout(function(){
            gsap.set(body, {'overflow': 'auto'});
            console.log('body unlocked');
          }, 2000);

          let offset = {};
          let elOffsetY = sliderEl.getBoundingClientRect().top
          offset.val = window.scrollY;
          let distance = elOffsetY  + offset.val;
          const time = 2;

          gsap.to(offset, {
              val: (elOffsetY + window.scrollY),
              duration: time,
              ease: 'power2.inOut',
              onUpdate: () => {
                  window.scrollTo(0, offset.val)
              }
          });

          setTimeout(function(){
            // slideNav.classList.add('visible')
          }, time*1000);
          
        },
        onLeave: (self) => {

        },
        onCompelte: (self) => {
          console.log('complete');
        },
      }
    });
    
    if (sliderEl) {
        slider = new Swiper(sliderEl, {
          wrapperClass: `${sliderPrefix}__wrapper`,
          slideClass: `${sliderPrefix}__slide`,
          slideActiveClass: `${sliderPrefix}slide--active`,
          slidesPerView: 1,
          speed: 1500,
          resistanceRatio: 0,
          parallax: true,
          direction: 'vertical',
          mousewheel: false,
          on: {
            slideChange: function () {
                let index = slider.activeIndex;

                // if (buttons[index]) {
                //     classToggle(buttons, buttons[index], 'active');
                // }
                if (index === 0) {
                    setTimeout(function(){
                      // console.log('wheel disabled');
                      slider.mousewheel.disable()
                    }, 1400);
                }

                // if (index === slider.slides.length-1) {
                //   slideNav.classList.remove('visible');
                // } else {
                //   slideNav.classList.add('visible');
                // }
            }
          }
        });

        // buttons.forEach(function(btn, index) {
        //   btn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     slider.slideTo(index)
        //   });
        // });
    }
}

