// timecode for topnavbar
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const timeString = now.toLocaleTimeString("en-US", options);
  timeElement.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();
////////////////////////////////

// datecode for topnav
var currentDate = new Date();

var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

var formattedDate = day + "/" + month + "/" + year;

document.getElementById("dateDisplay").textContent = formattedDate;
///////////////////////////////////

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
