document.addEventListener('DOMContentLoaded', () => {
  // Existing code...

  // Hide overlay after animation
  const overlay = document.querySelector('.hero-overlay');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 2000); // Match animation duration (2s)
});
