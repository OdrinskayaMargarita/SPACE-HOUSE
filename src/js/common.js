
// import fullpage from './components/full-page';
import header from './components/header-main';
import sliders from './components/sliders';
import animation from './components/animation';
import cookie from './components/cookie';
import mapConection from './components/map-conection';



export default () => {
    header();

    sliders();

    animation();

    cookie();

    mapConection();

    const appHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
}
