'use strict'

/* sass animation fade-in component
*/
const nodes = document.getElementsByTagName('section');

for (let i = 0; i < nodes.length; i++) {
    if (window.innerHeight - nodes[i].offsetTop <= 0) {
        nodes[i].style.opacity = 0;
    }
}

window.addEventListener('scroll', () => {
    for (let i = 0; i < nodes.length; i++) {
        if (window.innerHeight + window.scrollY - nodes[i].offsetTop > 0) {
            nodes[i].classList.add('animation--fadein');
        }
    }
});

/* biati-digital/glightbox
*/
const lightbox = GLightbox({ selector: '.glightbox' });
