let slideIndex = 0;
let slideTimeout;

function showSlides() {
  let slides;
  if (window.innerWidth > 900) {
    slides = document.getElementsByClassName("mySlides");
  } else {
    slides = document.getElementsByClassName("mySlides-mobile");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(showSlides, 3000);
}

function initCarousel() {
  slideIndex = 0;
  clearTimeout(slideTimeout);
  showSlides();
}

window.addEventListener("resize", initCarousel);
document.addEventListener("DOMContentLoaded", initCarousel);
