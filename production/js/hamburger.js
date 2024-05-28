document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const hamburgerIcon = document.querySelector(".hamburger-menu i");

  hamburgerMenu.addEventListener("click", function () {
    toggleMenu();
  });

  function toggleMenu() {
    dropdownMenu.classList.toggle("show");
    if (dropdownMenu.classList.contains("show")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
      dropdownMenu.classList.add("hide"); // Add hide class to initiate slide-out animation
      setTimeout(() => {
        dropdownMenu.classList.remove("hide"); // Remove hide class after animation completes
      }, 500); // Adjust timing to match animation duration
    }
  }
});
