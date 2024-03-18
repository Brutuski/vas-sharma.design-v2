/*
Testimonial slider
 */
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.testimonials-section-box');
const dots = document.querySelectorAll('.testimonial-dot');
const prevBtn = document.querySelector('');

let dotIndx = 0;

//Scroll progress indicator shown on top of every project page.

window.onscroll  = function () {scrollProgress()};

function scrollProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("scrollProgressBar").style.width = scrolled + "%";
}

/*
Listens for scroll event and adjusts the position of 'ScrollProgressContainer
based on the scroll container.
When the scroll position is greater than the navbar height, the progress bar is set to top by setting it's
position to 0
If the scroll position is lesser than the navbar height, the position is set to -50px.
Effectively moving it off the viewport.
 */

window.addEventListener('scroll', function () {
   var navbarHeight = document.querySelector('.navbar').offsetHeight;
   var scrollProgressContainer = document.getElementById('scrollProgressContainer');
   
   if (window.scrollY > navbarHeight) {
       scrollProgressContainer.style.top = '0';
   } else {
       scrollProgressContainer.style.top = '-50px';
   }
   
   var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
   document.getElementById("scrollProgressBar").style.width = scrollPercent + '%';
});

/*
Image slider for project page.
Shows 2 images, side by side with a slider.
To showcase a wireframe translating into the final UI
*/

range.oninput = () =>
    document.body.style.setProperty('--pos', range.value + '%')