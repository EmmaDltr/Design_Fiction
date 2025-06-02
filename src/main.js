'use strict';

import { gsap } from "gsap";

// Import styles
import './style.scss';
const page = window.location.pathname;


const btn = document.getElementById('toggle-theme');
const app = document.getElementById('app');
let isDark = true;

const processor = document.getElementById('processor');

btn.addEventListener('click', () => {
    // direction du slide
    const direction = isDark ? '-100%' : '100%';
    const blackColor = '#1e1e1e';
    const whiteColor = '#bfbfbf';

    const blackBg = "url(\"/img/background_dark.png\")"
    const whiteBg = "url(\"/img/background_light.png\")";
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
            if (page.endsWith("index.html") || page === "/")
                processor.src = !isDark ? '/img/processor_dark.svg' : '/img/processor_light.svg';

            // slide in depuis l'autre côté
            gsap.fromTo(app,
                { x: isDark ? '100%' : '-100%' }, // repartir de l'autre côté
                { x: '0%', duration: 0.5, ease: 'power2.out' }
            );

            isDark = !isDark;
        }
    });
});
if (page.endsWith("index.html") || page === "/") {
    import('./home.js');
}

if (page.endsWith("catalogue.html") || page === "catalogue") {
    import('./catalogue.js');
}
