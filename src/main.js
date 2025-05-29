'use strict';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import styles
import './style.scss';

const btn = document.getElementById('toggle-theme');
const app = document.getElementById('app');
let isDark = true;

const processor = document.getElementById('processor');

btn.addEventListener('click', () => {
    // direction du slide
    const direction = isDark ? '-100%' : '100%';
    const blackColor = '#1e1e1e';
    const whiteColor = '#bfbfbf';

    const blackBg = "url(\"img/background_dark.png\")"
    const whiteBg = "url(\"img/background_light.png\")";
    // slide out
    gsap.to(app, {
        x: direction,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
            // une fois glissé hors écran → changer les couleurs
            gsap.set(app, { x: direction }); // rester hors écran

            gsap.to(':root', {
                '--bg-color': !isDark ? blackColor : whiteColor,
                '--text-color': !isDark ? whiteColor : blackColor,
                '--bg-image': !isDark ? blackBg : whiteBg,
                duration: 0.3
            });

            processor.src = !isDark ? 'img/processor_dark.svg' : 'img/processor_light.svg';

            // slide in depuis l'autre côté
            gsap.fromTo(app,
                { x: isDark ? '100%' : '-100%' }, // repartir de l'autre côté
                { x: '0%', duration: 0.5, ease: 'power2.out' }
            );

            isDark = !isDark;
        }
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('#film', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'bottom bottom',
        endTrigger: '#processor',
        end: 'top center',
        scrub: true,
        markers: false
    },
    y: () => {
        const film = document.getElementById('film');
        const processorY = processor.getBoundingClientRect().top + window.scrollY;
        const filmY = film.getBoundingClientRect().top + window.scrollY;
        return processorY - filmY;
    }
});

ScrollTrigger.create({
    trigger: '#processor',
    start: 'top 60%', // ⬅️ au lieu de 'top center' → ça déclenche un peu avant
    toggleActions: 'play none none reverse',
    onEnter: () => {
        gsap.to('#alternative-version', {
            y: 150,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        });
    },
    onLeaveBack: () => {
        gsap.to('#alternative-version', {
            y: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
        });
    },
    markers: false
});


