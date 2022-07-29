
import fullpage from '../imports/fullpage.min.js';
import MicroModal from '../imports/micromodal.min.js';

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
        });
    });

    // const infoFormSend = document.querySelectorAll('[data-form-send]')
    // infoFormSend.forEach(forms => {
    //     let btn = forms.querySelector('.btn-form')
    //     let form = forms.querySelector('form')
    //     form.addEventListener('submit', ()=> {
    //         console.log("object");
    //         // alert("Thank you, we will be in touch");
    //
    //         MicroModal.show('modal-1', {
    //             closeTrigger: "data-modal-close", // [4]
    //             awaitCloseAnimation: false,
    //             disableFocus: true,
    //             // onShow: function (modal) {
    //             //     swiperMain.slideTo(Number(btn.dataset.modalOpenSlider));
    //             // },
    //         });
    //     })
    // });

    document.addEventListener('wpcf7mailsent', function (event) {
        if ('846' == event.detail.contactFormId) {
            MicroModal.show('modal-1', {
                closeTrigger: "data-modal-close", // [4]
                awaitCloseAnimation: false,
                disableFocus: true,
                // onShow: function (modal) {
                //     swiperMain.slideTo(Number(btn.dataset.modalOpenSlider));
                // },
            });
        }
    }, false);

    MicroModal.init({
        onShow: modal => console.info(`${modal.id} is shown`), // [1]
        onClose: modal => console.info(`${modal.id} is hidden`), // [2]
        openTrigger: 'data-modal-open', // [3]
        closeTrigger: 'data-modal-close', // [4]
        // openClass: 'modal_open', // [5]
        disableScroll: false, // [6]
        disableFocus: false, // [7]
        awaitOpenAnimation: true, // [8]
        awaitCloseAnimation: false, // [9]
        debugMode: true // [10]
    });
};
