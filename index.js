// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Landing Page Buttons
function hireMe() {
  alert('You clicked Hire Me! You can link this to a specific contact form or section.');
}

function explore() {
  document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
}
