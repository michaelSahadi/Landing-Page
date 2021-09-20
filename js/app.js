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

let sections = document.querySelectorAll('section');

for (let i = 0; i < sections.length; i++) {
  console.log(sections[i].title);
  let title = sections[i].title
  let listelement = document.createElement('li');
  listelement.innerHTML = `<a href="#${sections[i].title}" class="nav-a">${sections[i].title}</a>`;
  navMenu.appendChild(listelement);
}