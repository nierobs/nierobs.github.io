'use strict'

const nodes = document.querySelectorAll('section');

for (let i = 0; i < nodes.length; i++) {
    if (window.innerHeight - nodes[i].offsetTop <= 0) {
        nodes[i].style.opacity = 0;
    }
}

window.addEventListener('scroll', (event) => {
    for (let i = 0; i < nodes.length; i++) {
        if (window.innerHeight + window.scrollY - nodes[i].offsetTop > 0) {
            nodes[i].classList.add('animation--fadein');
        }
    }
});
