/*
Project image comparison slider
*/

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".project-image-comparison-slider");
    const beforeImage = document.querySelector(".before-image");
    const sliderLine = document.querySelector(".project-image-comparison-slider-line");
    const sliderIcon = document.querySelector(".project-image-comparison-slider-icon");

    slider.addEventListener("input", function() {
        let sliderValue = this.value;
        let percentage = sliderValue + "%";

        /*
        As the sliderValue changes, the width of the beforeImage is changed accordingly
        and so is the 'left' position of the project-image-comparison-slider-line
        By default the project-image-comparison-slider-line is left: 50%; as defined in the CSS
         */
        beforeImage.style.width = percentage;
        sliderLine.style.left = percentage;
        sliderIcon.style.left = percentage;
    });
});
