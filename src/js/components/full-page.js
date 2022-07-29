
import fullpage from '../imports/fullpage.min.js';
import fullpagescroll from '../imports/fullpagescroll';

export default () => {
    const fullpageInit = document.querySelectorAll('#fullpage');
    fullpageInit.forEach(el => {

        el = new fullpage('#fullpage', {
            licenseKey: '77EE6A6C-DD2F448E-8B13346E-EF3361CE',
            navigation: true,
            // responsiveWidth: 1024,
            // fitToSection: false,
            easingcss3: "ease-in-out",
            // anchors: ['slide1', 'slide2'],
            navigation: false,
            responsiveHeight: 600,

            // scrollBar: true,
            normalScrollElements: '.scroll-auto',

            verticalCentered: true,
            // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
            navigationPosition: 'right',
            // navigationTooltips: ['about-us', 'contact'],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollingSpeed: 1400,
            // parallax: true,
            onLeave: function(origin, destination, direction){
                console.log("Leaving section" + origin.index);
            },
            scrollOverflow: true,
            // autoScrolling: true,
            // fitToSection: false
        });
        // fullpagescroll();
    });

};
