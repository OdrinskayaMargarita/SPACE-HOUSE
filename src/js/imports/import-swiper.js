// this file is deprecated, use import bundle form npm instead
// import Swiper from 'swiper/bundle';

import {
    Swiper,
    Navigation,
    Pagination,
    Controller,
    EffectFade,
    Autoplay,
    Parallax,
    Scrollbar
} from 'swiper/core';

Swiper.use([
    Navigation,
    Pagination,
    Controller,
    EffectFade,
    Autoplay,
    Parallax,
    Scrollbar
]);

export default Swiper;
