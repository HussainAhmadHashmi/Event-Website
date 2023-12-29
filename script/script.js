// Header menu
function headerMenu() {
  const toggle = document.querySelector(".js-header-toggler");
  const menu = document.querySelector(".js-header-menu");
  const items = menu.querySelectorAll("li");

  const menuToggle = () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("active");
  };

  toggle.addEventListener("click", menuToggle);

  items.forEach((item) => {
    item.querySelector("a").addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        menuToggle();
      }
    });
  });
}

headerMenu();

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Schedule table

function scheduleTabs() {
  const tabs = document.querySelectorAll(".js-schedule-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) {
        return;
      }
      document
        .querySelector(".js-schedule-tab.active")
        .classList.remove("active");
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document
        .querySelector(".js-schedule-table.active")
        .classList.remove("active");
      document.querySelector(target).classList.add("active");
    });
  });
}

scheduleTabs();

// Animations
window.addEventListener("load", () => {
  // preloader
  document.querySelector(".js-preloader").classList.add("loaded");
  document
    .querySelector(".js-preloader .js-bg-item")
    .addEventListener("transitionend", () => {
      document.querySelector(".js-preloader").style.display = "none";

      // Initialize AOS
      AOS.init({
        duration: 1200,
        easing: "ease-in-out-cubic",
      });
    });
});

// splitting
Splitting();
