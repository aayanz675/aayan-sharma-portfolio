/* Aayan Sharma portfolio - shared JavaScript (loaded on every page)
   1. Fade-in animation for sections as they scroll into view
   2. Floating back-to-top button */

// Add a "js" class so the fade-in CSS only applies when JavaScript is running
document.documentElement.classList.add('js');

// 1. Fade-in on scroll
var revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(function (item) { observer.observe(item); });
} else {
  // Older browsers: just show everything
  revealItems.forEach(function (item) { item.classList.add('is-visible'); });
}

// 2. Back-to-top button: appears after scrolling down, scrolls smoothly to the top
var backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('is-visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
