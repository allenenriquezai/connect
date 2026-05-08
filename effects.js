// Shared effects: reveal-on-scroll
(function(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
