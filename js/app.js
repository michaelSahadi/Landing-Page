const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const sections = document.querySelectorAll('section');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

for (let i = 0; i < sections.length; i++) {
  console.log(sections[i].title);
  let title = sections[i].title
  let upperTitle = title.toUpperCase();
  var listElement = document.createElement('li');
  listElement.innerHTML = `<a href="#${title}"  data-page="${title}" class="${title}">${upperTitle}</a>`;
  navMenu.appendChild(listElement);
}

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    // console.log(entry);
    const className = entry.target.className;
    // console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(activeAnchor);
    activeAnchor.style.color = "#ffffff";

    if (entry.isIntersecting) {
      activeAnchor.style.color = "#016774";
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
})
