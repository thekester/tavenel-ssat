// main.js
// Smooth scrolling for internal navigation
document.querySelectorAll('nav#sommaire a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// (Fonctions évolutives à venir ici)
