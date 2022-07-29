
import fullpage from '../imports/fullpage.min.js';
// import Swiper from '../imports/import-swiper';
// import fullpagescroll from '../imports/fullpagescroll';
import sliderRangeImg from '../components/slider-range-img';

export default () => {
    const fullpageInit = document.querySelectorAll('#fullpage');
    fullpageInit.forEach(el => {

        el = new fullpage('#fullpage', {
            licenseKey: '77EE6A6C-DD2F448E-8B13346E-EF3361CE',
            easingcss3: "ease-in-out",
            scrollingSpeed: 1400,
            navigation: false,
            responsiveHeight: 600,
            scrollBar: true,
            normalScrollElements: '.scroll-auto',
            verticalCentered: true,
            navigationPosition: 'right',
            showActiveTooltip: false,
            autoScrolling: false,
            // scrollOverflow: true,
            // fitToSection: false
            // slidesNavigation: false,
            // slidesNavPosition: 'bottom',
            // onLeave: function(origin, destination, direction){
            //     console.log("Leaving section" + origin.index);
            // },
            // navigation: true,
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
            // responsiveWidth: 1024,
            // fitToSection: false,
            // anchors: ['slide1', 'slide2'],
            // parallax: true,
            // navigationTooltips: ['about-us', 'contact'],
        });
        // fullpagescroll();
    });

    sliderRangeImg()

};
