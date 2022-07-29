export default () => {
    const sliderRangeImg = document.querySelectorAll('[data-slider-range-img]')
    sliderRangeImg.forEach(element => {
        let input = element.querySelector('.slider-range-input')
        let img = element.querySelector('.slider-range-img__foreground-img')
        let imgAll = element.querySelectorAll('.slider-range-img__img')
        let btn = element.querySelector('.slider-range-img__slider-button')

        input.addEventListener('input', (e)=> {
            const sliderPos = e.target.value;
            img.style.width = `${sliderPos}%`
            btn.style.left = `calc(${sliderPos}% - 1px)`
        })

    });
}
