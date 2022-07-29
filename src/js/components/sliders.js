import Swiper from '../imports/import-swiper';

export default () => {
    // swiper();
    const sliderCardIcon = document.querySelectorAll('[data-slider-icon]');
    sliderCardIcon.forEach(slider => {
        let sliderInit = slider.querySelector('.swiper-container');
        let sliderBtnPrev = slider.querySelector('.btn-slider_prev');
        let sliderBtnNext = slider.querySelector('.btn-slider_next');
        // let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 1.5,
            // slidesPerGroup: 4,
            spaceBetween: 100,
            watchOverflow: true,
            speed: 500,
            // mousewheel: true,
            // loop: true,
            // loopFillGroupWithBlank: true,
            // pagination: {
            //     el: sliderPagination,
            //     clickable: true,
            // },
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                2000: {
                    slidesPerView: 1.5,
                    spaceBetween: 100,
                },
                1600: {
                    slidesPerView: 1.3,
                    spaceBetween: 100,
                },
                1199: {
                    slidesPerView: 1.5,
                    spaceBetween: 100,
                },
                767: {
                    slidesPerView: 1.3,
                    spaceBetween: 40,
                },
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 27,
                },
            }
        });
    });

    const sliderCardImg = document.querySelectorAll('[data-slider-img]');
    sliderCardImg.forEach(slider => {
        let sliderCapHeight = slider.querySelector('.slider-img-cap').clientHeight;
        let sliderCapHeightView = slider.querySelector('.slider-img-wrapp__carousel');
        console.log(sliderCapHeight);

        sliderCapHeightView.style.height = 'calc(100% - ' + sliderCapHeight + 'px)'
        console.log(sliderCapHeightView.style.height = 'calc(100% - ' + sliderCapHeight + 'px)');


        let sliderInit = slider.querySelector('.swiper-container');
        let sliderBtnPrev = slider.querySelector('.btn-slider_prev');
        let sliderBtnNext = slider.querySelector('.btn-slider_next');
        // let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 1,
            spaceBetween: 100,
            watchOverflow: true,
            speed: 500,
            // mousewheel: true,
            // loop: true,
            // loopFillGroupWithBlank: true,
            // pagination: {
            //     el: sliderPagination,
            //     clickable: true,
            // },
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                1199: {
                    spaceBetween: 99,
                },
                767: {
                    spaceBetween: 42,
                },
                0: {
                    spaceBetween: 23,
                },
            }
        });
    });

    const sliderCardImgSecond = document.querySelectorAll('[data-slider-img-second]');
    sliderCardImgSecond.forEach(slider => {
        let sliderCapHeight = slider.querySelector('.slider-img-cap').clientHeight;
        let sliderCapHeightView = slider.querySelector('.slider-img-wrapp__carousel');
        console.log(sliderCapHeight);

        sliderCapHeightView.style.height = 'calc(100% - ' + sliderCapHeight + 'px)'
        console.log(sliderCapHeightView.style.height = 'calc(100% - ' + sliderCapHeight + 'px)');


        let sliderInit = slider.querySelector('.swiper-container');
        let sliderBtnPrev = slider.querySelector('.btn-slider_prev');
        let sliderBtnNext = slider.querySelector('.btn-slider_next');
        // let sliderPagination = slider.querySelector('.swiper-pagination');
        let swiper = new Swiper(sliderInit, {
            slidesPerView: 2.4,
            spaceBetween: 57,
            watchOverflow: true,
            speed: 500,
            // mousewheel: true,
            // loop: true,
            // loopFillGroupWithBlank: true,
            // pagination: {
            //     el: sliderPagination,
            //     clickable: true,
            // },
            navigation: {
                nextEl: sliderBtnNext,
                prevEl: sliderBtnPrev,
            },
            breakpoints: {
                2100: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                },
                1199: {
                    slidesPerView: 2.4,
                    spaceBetween: 57,
                },
                767: {
                    slidesPerView: 1.2,
                    spaceBetween: 41,
                },
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 27,
                },
            }
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
            // loop: true,
            // loopFillGroupWithBlank: true,
            // pagination: {
            //     el: sliderPagination,
            //     clickable: true,
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
            }
        });
    });


}
