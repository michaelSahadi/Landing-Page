const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll('section');

// Add a "click" listener to the hamburger which will lead to mobileMenu function
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Loop through the sections and creating an li per section 
for (let i = 0; i < sections.length; i++) {
  let title = sections[i].title
  let upperTitle = title.toUpperCase();
  // I originaly had this as 'var' because I was hoisting it to use outside of the function to highlight the nav elements per section but opted for a dif. method and forgot to set it back to 'let'
  let listElement = document.createElement('li');
  listElement.innerHTML = `<a href="#${title}"  data-page="${title}" class="${title}">${upperTitle}</a>`;
  navMenu.appendChild(listElement);
};

// Went with this method because its less code on my end. Plus, I just couldn't get it to work with vanilla JS
// const scroll = new SmoothScroll('#navigation a[href*="#"]', {
//   speed: 1000
// });

// Scroll behavior isn't supported on Safari
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

  link.addEventListener('click', (event) => {
    event.preventDefault();  // prevent the page from reloading (a default behavior when a link is clicked)
    const id = link.getAttribute("href");// get id from href value of the link, use link.getAttribute("href")

    // get the reference to the corresponding section
    const targetSection = document.querySelector(id);// use `.querySelector(id)` to select the corresponding section

    // add smooth scrolling feature like this-
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  })

});


// Setting how far the section has to come into view before the section nav highlights
const options = {
  threshold: 0.2
};

let observer = new IntersectionObserver(navCheck, options);

// Creating function 
function navCheck(entries) {
  entries.forEach(entry => { // Each page being observed
    const className = entry.target.className; //Class of each section
    const activeAnchor = document.querySelector(`[data-page=${className}]`); // Grabbing the active anchor

    // Self explanatory
    if (entry.isIntersecting) {
      activeAnchor.classList.add('active');
    } else {
      activeAnchor.classList.remove('active')
    }
  });
}

// Observing the sections when in frame
sections.forEach(section => {
  observer.observe(section);
})




