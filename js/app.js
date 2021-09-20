// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the header
const header = document.getElementById("navigation");

// Get the offset position of the navbar
const sticky = navigation.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const