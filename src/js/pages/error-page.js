
import fullpage from '../imports/fullpage.min.js';

export default () => {
    const fullpageInit = document.querySelectorAll('#fullpage');
    fullpageInit.forEach(el => {

        el = new fullpage('#fullpage', {
            licenseKey: '77EE6A6C-DD2F448E-8B13346E-EF3361CE',
            easingcss3: "ease-in-out",
            scrollingSpeed: 1400,
            // navigation: true,
            // responsiveWidth: 1024,
            fitToSection: false,
            // anchors: ['slide1', 'slide2'],
            navigation: false,
            responsiveHeight: 600,
            scrollBar: true,
            normalScrollElements: '.scroll-auto',
            verticalCentered: true,
            navigationPosition: 'right',
            showActiveTooltip: false,
            autoScrolling: false,
        });
    });

};
