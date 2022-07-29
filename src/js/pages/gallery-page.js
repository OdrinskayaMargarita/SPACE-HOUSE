
import fullpage from '../imports/fullpage.min.js';
import Swiper from '../imports/import-swiper';
import MicroModal from '../imports/micromodal.min.js';

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

    const sliderCards = document.querySelectorAll('[data-slider-cards]');
    sliderCards.forEach(slider => {

        let sliderInit = slider.querySelector('.swiper-container');
        let sliderBtnPrev = slider.querySelector('.btn-slider_prev');
        let sliderBtnNext = slider.querySelector('.btn-slider_next');
        // let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true,
            speed: 500,
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                2100: {
                    spaceBetween: 20,
                },
                1199: {
                    spaceBetween: 10,
                },
                767: {
                    spaceBetween: 10,
                },
                0: {
                    spaceBetween: 10,
                },
            }
        });

    });

    const sliderGallery = document.querySelectorAll('[data-slider-gallery]');
    sliderGallery.forEach((slider, sliderIndex) => {
        var sliderInit = slider.querySelector('.swiper-container');
        var sliderBtnPrev = slider.querySelector('.btn-slider-gallery_prev');
        var sliderBtnNext = slider.querySelector('.btn-slider-gallery_next');
        var sliderFraction = slider.querySelector('.swiper-fraction');
        var option = {
            slidesPerView: 1,
            spaceBetween: 20,
            watchOverflow: true,
            speed: 500,
            observeParents: true,
            observeSlideChildren: true,
            observer: true,

            // pagination: {
            //     el: sliderFraction,
            //     type: 'custom',
            //     renderCustom: function (swiper, current, total) {
            //         var text = `<div class="value-gallery-box">`;
            //         for (let i = 1; i <= total; i++) {
            //             if (current === i) {
            //                 text += `<div class="value-gallery value-gallery_prev">0${i-1}</div><div class="value-gallery value-gallery_next">0${i+1}</div>`
            //             }
            //         }
            //         text += "</div>";
            //         return text;

            //     },
            // },
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                2100: {
                    spaceBetween: 20,
                },
                1199: {
                    spaceBetween: 10,
                },
                767: {
                    spaceBetween: 10,
                },
                0: {
                    spaceBetween: 10,
                },
            },
            on: {
                init: function () {
                    console.log('swiper initialized');
                },
            }
        }
        var swiperMain = new Swiper(sliderInit, option);


        const btns = document.querySelectorAll(`.gallery-box [data-modal="modal-gallery${sliderIndex}"]`);
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                MicroModal.show(btn.dataset.modal, {
                    closeTrigger: "data-modal-close", // [4]
                    awaitCloseAnimation: false,
                    disableFocus: true,
                    onShow: function (modal) {
                        swiperMain.slideTo(Number(btn.dataset.modalOpenSlider));
                    },
                });
            });
        });

        const menuModal = document.querySelectorAll(".modal-g__inner");
        menuModal.forEach(menu => {
            let btn = menu.querySelector('.modal-g__open-dd')
            let btnMenu = menu.querySelector('.modal-g__open-dd-icon--inner')
            console.log("object1");
            console.log(btnMenu);
            let btnClose = menu.querySelector('.modal-g__close')
            let btnClose2 = menu.querySelectorAll('.gallery-menu__item')
            btn.addEventListener('click', ()=> {
                menu.classList.add('open-menu-modal')
            })
            btnMenu.addEventListener('click', ()=> {
                menu.classList.remove('open-menu-modal')
            })
            btnClose.addEventListener('click', ()=> {
                menu.classList.remove('open-menu-modal')
                console.log('1')
            })
            btnClose2.forEach(element => {
                element.addEventListener('click', ()=> {
                    menu.classList.remove('open-menu-modal')
                })
            });
        });
    });


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
