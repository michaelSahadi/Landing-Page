// // When the user scrolls the page, execute myFunction 
// window.onscroll = function () { myFunction() };

// // Get the header
// // const header = document.getElementById("navigation");
// const header = document.getElementById(".nav-positioner");

// // Get the offset position of the navbar
// const sticky = navigation.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     navigation.classList.add("sticky");
//   } else {
//     navigation.classList.remove("sticky");
//   }
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll('section');
// let sectionsTitle = document.querySelectorAll('section');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}



for (let i = 0; i < sections.length; i++) {
  console.log(sections[i].title);
  let title = sections[i].title
  let lowerTitle = title.toLowerCase();
  var listelement = document.createElement('li');
  listelement.innerHTML = `<a href="#${lowerTitle}"  data-page="${lowerTitle}" class="${lowerTitle}">${lowerTitle}</a>`;
  navMenu.appendChild(listelement);
}


const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    console.log(entry);
    const className = entry.target.className;
    console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(activeAnchor);
  });
}

sections.forEach(section => {
  observer.observe(section);
})
