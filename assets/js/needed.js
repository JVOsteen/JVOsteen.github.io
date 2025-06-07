document.addEventListener('DOMContentLoaded', () => {
  // Lock scrolling during hero animation
  document.body.style.overflow = 'hidden';

  const overlay = document.querySelector('.hero-overlay');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // unlock scroll
  }, 2000);

  // Section visibility observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Canvas setup
  const canvas = document.getElementById('background-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 80;
  const maxDistance = 150;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2 + Math.random() * 2
      });
    }
  }

  function updateParticles() {
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance) {
          const alpha = 1 - dist / maxDistance;
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    for (let p of particles) {
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  initParticles();
  animate();

  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }
});