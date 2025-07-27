// nav-highlight.js

fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav').innerHTML = data;

    // Now that nav is inserted, highlight the current page link
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  });
