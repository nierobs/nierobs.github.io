'use strict';

// sass animation fade-in component
const nodes = document.getElementsByClassName('animation--fade-in');

window.addEventListener('load', () => {
  for (let i = 0; i < nodes.length; i++) {
    if (window.scrollY + window.innerHeight - nodes[i].offsetTop <= 0) {
      nodes[i].style.opacity = 0;
    }
  }

  window.addEventListener('scroll', () => {
    for (let i = 0; i < nodes.length; i++) {
      if (window.scrollY + window.innerHeight - nodes[i].offsetTop > 0) {
        nodes[i].classList.add('animation--fade-in--show');
      }
    }
  });
});

// biati-digital/glightbox
const lightbox = GLightbox({
  selector: '.glightbox',
  videosWidth: '100%',
  plyr: { config: { hideControls: true } }
});
