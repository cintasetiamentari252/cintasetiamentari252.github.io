const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Animasi fade-in SETIAP scroll masuk viewport
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('visible'); // reset animasi
      void entry.target.offsetWidth;            // paksa reflow
      entry.target.classList.add('visible');    // aktifkan animasi
    } else {
      entry.target.classList.remove('visible'); // hilangkan saat keluar layar
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Scroll ke atas saat halaman direfresh
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
window.addEventListener('load', () => {
  setTimeout(() => window.scrollTo(0, 0), 10);
});

// Reset dan jalankan animasi saat klik menu navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      sections.forEach(el => {
        el.classList.remove('visible');
        void el.offsetWidth;
        el.classList.add('visible');
      });
    }, 300); // Delay agar scroll selesai dulu
  });
});
