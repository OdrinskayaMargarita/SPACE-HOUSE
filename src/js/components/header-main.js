export default () => {


    const headerBurg = document.body.querySelectorAll('.header-burger');
    headerBurg.forEach(element => {
        let openBurger = element.querySelector('.line-menu__menu-item-first')
        let closeBurger = element.querySelector('.line-menu__menu-item-second')
        let divAlert = document.querySelector('.h-menu');
        let headerAlert = document.querySelector('.header');
        closeBurger.addEventListener('click', () => {
            // this.header.classList.toggle('header--open');
            // this.menu.classList.toggle('menu--open');
            document.body.classList.remove('h-menu-open');
            // if (!document.body.classList.contains('h-menu-open')) {

            var handler = function () {
                divAlert.classList.remove('fa-leave-active');
                headerAlert.classList.remove('fa-leave-active');
                divAlert.removeEventListener('transitionend', handler, false);
                headerAlert.removeEventListener('transitionend', handler, false);
                divAlert.style.display = 'none';
            };

            divAlert.classList.add('fa-leave-active');
            headerAlert.classList.add('fa-leave-active');
            divAlert.addEventListener('transitionend', handler, false);

            // this.menu.addEventListener('transitionend', ()=> {
            //     this.menu.classList.remove('fa-enter-active')
            // })
            // this.menu.classList.add('fa-live');
            // let handler = function () {
            //     document.body.classList.remove('h-menu-open');
            //     this.menu.classList.remove('fa-live-active');
            //     this.menu.removeEventListener('transitionend', handler);
            // }
            // this.menu.addEventListener('transitionend', handler)
            // }
        })
        openBurger.addEventListener('click', () => {
            // else {
            document.body.classList.add('h-menu-open');
            divAlert.style.display = 'block';

            var handler = function () {
                divAlert.classList.remove('fa-enter-active');
                headerAlert.classList.remove('fa-enter-active');
                divAlert.removeEventListener('transitionend', handler);
                headerAlert.removeEventListener('transitionend', handler);
            };

            // divAlert.style.display = 'block';
            divAlert.classList.add('fa-enter');
            headerAlert.classList.add('fa-enter');
            raf(function () {
                divAlert.classList.add('fa-enter-active');
                divAlert.classList.remove('fa-enter');
                headerAlert.classList.add('fa-enter-active');
                headerAlert.classList.remove('fa-enter');
            })

            divAlert.addEventListener('transitionend', handler);
            headerAlert.addEventListener('transitionend', handler);

            // let handler = function(){
            //     divAlert.classList.remove('fa-enter-active')
            //     divAlert.removeEventListener('transitionend', handler)
            // }

            // document.body.classList.add('h-menu-open');
            // this.menu.style.display = "block"

            // document.body.classList.add('h-menu-open_animation-first');
            // raf(function() {
            //     document.body.classList.add('h-menu-open_animation');
            //     document.body.classList.remove('h-menu-open_animation-first');
            // })

            // divAlert.addEventListener('transitionend', handler)
            // }

        })
    });


    function raf(fn) {
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                fn();
            })
        })
    };

    let header = document.getElementById('header');
    let oldScrollTopPosition = 1;
    let scrollTopPosition = 1;

    window.onscroll = () => {
        scrollTopPosition = document.documentElement.scrollTop;
        if (scrollTopPosition < oldScrollTopPosition) {
            header.classList.add('header--fixed')
            header.classList.remove('header--hide')

        } else if (scrollTopPosition > oldScrollTopPosition) {
            header.classList.remove('header--fixed')
            header.classList.add('header--hide')
        }
        oldScrollTopPosition = scrollTopPosition;
        if (scrollTopPosition === 0) {
            header.classList.remove('header--fixed')
            header.classList.remove('header--hide')
        }
    }
}
