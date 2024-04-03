/*
Listens for scroll event and adjusts the position of the scroll-progress-container.
When the page loads up, the container is bound by the limits of its parent container, position:relative
Once the page is scrolling, the position is changed to fixed and the container is moved to the very top of the page
*/
window.addEventListener('scroll', function() {
    var scrollProgressContainer = document.querySelector('.scroll-progress-container');
    var scrollPosition = window.scrollY;

    // Check if the scroll position is beyond a certain threshold (e.g., 100 pixels)
    if (scrollPosition > 100) {
        scrollProgressContainer.style.position = 'fixed';
        scrollProgressContainer.style.top = '0';
        scrollProgressContainer.style.left = '0';
        scrollProgressContainer.style.right = '0';
    } else {
        // Reset to initial position
        scrollProgressContainer.style.position = 'relative';
    }
});

/*
Listens for scroll event and adjusts the width of the ScrollProgressBar
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgressBar").style.width = scrolled + "%";
}