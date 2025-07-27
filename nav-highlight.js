// nav-highlight.js

fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;
    });

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
