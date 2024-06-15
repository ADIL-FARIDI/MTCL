document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true,
    getSpeed: true,
    scrollFromAnywhere: true,
    inertia: 0.45,
  });
});
