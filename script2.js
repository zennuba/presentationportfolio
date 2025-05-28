// Burger toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dark/light theme
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Gem valg i localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
} else {
  body.className = 'dark';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.className);
});
