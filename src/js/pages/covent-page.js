
import fullpage from '../imports/fullpage.min.js';
// import Swiper from '../imports/import-swiper';
// import fullpagescroll from '../imports/fullpagescroll';
// import sliderRangeImg from '../components/slider-range-img';
import map from '../components/map';

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
            // navigation: true,
            // responsiveWidth: 1024,
            // fitToSection: false,
            // anchors: ['slide1', 'slide2'],

            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
            // navigationTooltips: ['about-us', 'contact'],
            // slidesNavigation: false,
            // slidesNavPosition: 'bottom',
            // parallax: true,
            // onLeave: function(origin, destination, direction){
            //     console.log("Leaving section" + origin.index);
            // },
            // scrollOverflow: true,
            // fitToSection: false
        });
        // fullpagescroll();
    });

    // sliderRangeImg()

    map()

};
