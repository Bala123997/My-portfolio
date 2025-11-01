// small interactions
document.addEventListener("DOMContentLoaded", function() {
  // set current year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = y;

  // smooth scroll for page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
});