//image carousel
let slideIndex = 0;
let slideTimeout;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
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
