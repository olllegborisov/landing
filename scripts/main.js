
class LandingVideo {
    constructor(data) {
        this._class = typeof data === 'object' ? data.class : data;
        this._videos = document.querySelectorAll(`.${this._class}`);
    }

    addVideoSource() {
        const _mediaQuery = window.matchMedia('(min-width: 768px)');

        for (let i = 0; i < this._videos.length; i++) {
            let _video = this._videos[i];
            if (_video.dataset.videoMob && !_mediaQuery.matches) {
                if (_video.dataset.videoMobWebm) {
                    _video.innerHTML = `<source src="${_video.dataset.videoMobWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.videoMob}"> `;
                } else {
                    _video.innerHTML = `<source src="${_video.dataset.videoMob}">`;
                }
            } else if (_video.dataset.video && _mediaQuery.matches) {
                if (_video.dataset.videoWebm) {
                    _video.innerHTML = `<source src="${_video.dataset.videoWebm}" type='video/webm; codecs="vp8, vorbis"'> <source src="${_video.dataset.video}"> `;
                } else {
                    _video.innerHTML = `<source src="${_video.dataset.video}">`;
                }
            }
        }
    }

    playOnScroll() {
        const _options = {
            root: null,
            rootMargin: `0px 0px 0px 0px`,
            threshold: 0.01,
        }
        const _observer = new IntersectionObserver((entries, obs) => {
            for (let i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    entries[i].target.play();
                } else {
                    entries[i].target.pause();
                }
            }
        }, _options);
        const _observerArr = [];
        for (let i = 0; i < this._videos.length; i++) {
            _observerArr.push(_observer.observe(this._videos[i]));
        }
        return _observerArr;
    }
}
// =====================================================================================================================================>
new LandingVideo('video-on-load').addVideoSource();
new LandingVideo('video-on-load').playOnScroll();

// JS CODE for ANIMATION ON SCROLL =============================
// находим и объявляем в переменную все объекты которые будут поддаваться анимации
const animItems = document.querySelectorAll("._anim-items");
// проверяем - существуют ли такие классы
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    // общая задержка вызова функции
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

//Смена фона на иконках с эллипсом
// function animateIcons() {
//     let contents = Array.from(document.querySelectorAll('div.s3-fruits__content'));
//     let content_count = contents.length;
//     let active_contents = document.querySelectorAll('.active-content')
//     let active_content_index = 0;
//     let callInterval = () => {
//         if (active_contents.length < 8) {
//             return setInterval(function () {
//                 let active_content = document.querySelector('div.s3-fruits__content.green-bg');
//                 if (contents.indexOf(active_content) === content_count - 1)
//                     active_content_index = 0;
//                 else
//                     active_content_index++;
//                 active_content.classList.remove('green-bg');
//                 document.querySelectorAll('div.s3-fruits__content')[active_content_index].classList.add('active-content', 'green-bg');
//             }, 500);
//         } else {
//             return setInterval(function () {
//                 let active_content = document.querySelector('div.s3-fruits__content.green-bg');
//                 if (contents.indexOf(active_content) === content_count - 1)
//                     active_content_index = 0;
//                 else
//                     active_content_index++;
//                 active_content.classList.remove('green-bg');
//                 document.querySelectorAll('div.s3-fruits__content')[active_content_index].classList.add('active-content', 'green-bg');
//             }, 1000);
//         }
//     }
//     callInterval()
// }

function animateIcons() {
    let contents = Array.from(document.querySelectorAll('div.s3-fruits__content'));
    let content_count = contents.length;
    // let active_content = document.querySelectorAll('.active-content')
    let active_content_index = 0;


    setInterval(function () {
        let active_content = document.querySelector('div.s3-fruits__content.green-bg');
        if (contents.indexOf(active_content) === content_count - 1)
            active_content_index = 0;
        else
            active_content_index++;
        active_content.classList.remove('green-bg');
        document.querySelectorAll('div.s3-fruits__content')[active_content_index].classList.add('active-content', 'green-bg');
    }, 500);
}

let animateIconsSetTimeOut = () => {
    let contents = Array.from(document.querySelectorAll('div.s3-fruits__content'));
    let content_count = contents.length;
    let active_contents = document.querySelectorAll('.active-content')
    let active_content_index = 0;
    if (active_contents.length < 8) {
        return setTimeout(function () {
            let active_content = document.querySelector('div.s3-fruits__content.green-bg');
            if (contents.indexOf(active_content) === content_count - 1)
                active_content_index = 0;
            else
                active_content_index++;
            active_content.classList.remove('green-bg');
            document.querySelectorAll('div.s3-fruits__content')[active_content_index].classList.add('active-content', 'green-bg');
        }, 500);

    }
}




const svg = document.querySelector('#fon1')
const svgTabl = document.querySelector('#fon1-tabl')
console.log(svgTabl);



// Уменьшает полукруг при определённом разрешении
function reduceEllipse() {
    const circle = document.querySelector('#fon')

    if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(max-width: 1240px)").matches) {
        circle.r.baseVal.value = 280
        svgTabl.beginElement()
    }

}

// рисует svg полукруг
function drawEllipse() {
    if (window.matchMedia("(min-width: 1240px)").matches) {
        svg.beginElement()
    }

}

let changeOpacity = () => {

    console.log('change opacity')
    let svg = document.querySelector('#svg1')
    svg.style = 'opacity: 1'
}
const S3controllerChangeBG = new ScrollMagic.Controller();
const sceneS3SectionEllipse = new ScrollMagic.Scene({ triggerElement: '.s3-fruits' })
sceneS3SectionEllipse.on('enter', () => {

    drawEllipse()
    animateIcons()
    reduceEllipse()


})
    .addTo(S3controllerChangeBG);
///Слайдер во весь экран
let swiperSlidesSkin = new Swiper(".swiper-autoplay", {
    effect: 'fade',
    spaceBetween: 0,
    centeredSlides: true,
    speed: 400,
    loop: true,
    autoplay: {
        delay: 400,
        disableOnInteraction: false,
        enabled: false,

    },
});

const s4ControllerStartAutoPlay = new ScrollMagic.Controller()
const sceneS4Section = new ScrollMagic.Scene({ triggerElement: '.s4-slider' })
sceneS4Section.on(
    'enter', () => {
        swiperSlidesSkin.autoplay.start()
    }
).addTo(s4ControllerStartAutoPlay)


//смена вертикального слайда по скроллу section9
let swiperS9 = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    speed: 700,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
        enabled: false,
    },
    mousewheel: {
        enabled: true,
        releaseOnEdges: true
    }
});
//запуск автоплей swiper при заходе на секцию
const S9controllerAutoPlay = new ScrollMagic.Controller();
const sceneS9SectionSlides = new ScrollMagic.Scene({ triggerElement: '.s9-effective-young' })
sceneS9SectionSlides.on('enter', () => {
    swiperS9.autoplay.start()
})
sceneS9SectionSlides.on('leave', () => {
    swiperS9.autoplay.stop()
})
    .addTo(S9controllerAutoPlay);


//Анимация кручение текста про зеленому кругу section10
const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText.split("").map((letter, i) =>
    `<span style="transform:rotate(${i * 11.1}deg")>${letter}</span>`
)
    .join("");

///////////////////////////////////////////////////////

//Параллакс
function putSomeParallaxFaceRemover() {
    let parallaxes = document.querySelectorAll('.parallax-effect-remover')
    if (parallaxes) {
        let parArray = Array.from(parallaxes)
        window.addEventListener('scroll', function (event) {
            let top = this.scrollY + 2500
            let speed
            let yPos
            parallaxes.forEach((el) => {
                speed = el.dataset.speed
                yPos = -(top * +speed / 100)
                el.style = 'top:' + yPos + 'px;'
            })
        })
    }
}

putSomeParallaxFaceRemover()
