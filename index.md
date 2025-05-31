---
layout: none
title: Joshua Vera O'Steen
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Joshua Vera O'Steen</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Great+Vibes&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-section-light: #ffffff;
      --bg-section-dark: #e5e7eb;
      --text-light: #0f172a;
      --text-dark: #ffffff;
      --primary: #10b981; /* green */
    }
    html {
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-section-light);
      color: var(--text-light);
      transition: background 0.3s, color 0.3s;
      overflow-x: hidden;
      position: relative;
    }
    body.dark {
      background-color: var(--bg-section-dark);
      color: var(--text-dark);
    }
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      z-index: 1000;
    }
    .logo {
      font-family: 'Great Vibes', cursive;
      font-size: 2rem;
      font-weight: 400;
      color: var(--primary);
      cursor: pointer;
      text-decoration: none;
    }
    .toggle {
      background: none;
      border: 2px solid currentColor;
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-weight: 600;
      z-index: 1000;
      position: relative;
    }
    section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      scroll-snap-align: start;
      padding: 6rem 2rem 2rem;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    /* Hero section specific styling */
    #hero {
      position: relative;
      color: white;
      padding-top: 8rem;
    }
    h1 {
      font-size: 5rem;
      margin: 1rem 0 0.75rem;
    }
    .hero-text p {
      font-size: 1.75rem;
      max-width: 900px;
      margin: 0.75rem auto;
      line-height: 1.4;
    }
    .highlight-green { color: #10b981; font-weight: 600; }
    .highlight-yellow { color: #eab308; font-weight: 600; }
    .highlight-orange { color: #f59e0b; font-weight: 600; }
    .links a {
      margin: 0 1rem;
      color: white;
      font-weight: 600;
      text-decoration: none;
      font-size: 1.1rem;
    }
    /* Other sections background override */
    #about, #projects, #contact {
      background-color: var(--bg-section-light);
      color: var(--text-light);
    }
    body.dark #about, body.dark #projects, body.dark #contact {
      background-color: var(--bg-section-dark);
      color: var(--text-dark);
    }
    .card {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      border-radius: 1rem;
      padding: 1.5rem;
      margin: 1rem;
      max-width: 300px;
      border: 1px solid rgba(0,0,0,0.1);
    }
    .card.dark {
      border-color: rgba(255,255,255,0.1);
    }
    /* Canvas network styling */
    #background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      background: #0f172a;
    }
  </style>
</head>
<body>
  <!-- Canvas for data-network animation -->
  <canvas id="background-canvas"></canvas>
  <header>
    <a href="#hero" class="logo">JVO</a>
    <button class="toggle" onclick="toggleTheme()">Toggle Theme</button>
  </header>

  <section id="hero">
    <h1>Joshua Vera O'Steen</h1>
    <div class="hero-text">
      <p><span class="highlight-green">Senior Data Scientist</span> with <span class="highlight-yellow">over 5 years</span> of experience building solutions in <span class="highlight-green">housing analytics, policy modeling,</span> and <span class="highlight-green">ML explainability</span>.</p>
      <p>Currently pursuing an MPS in AI Management at <span class="highlight-orange">Georgetown University</span> and leading data science projects at <span class="highlight-orange">Fannie Mae</span>.</p>
    </div>
    <div class="links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m a data scientist in Washington, D.C. with a background in Statistics and Political Science, currently pursuing a Master of Professional Studies in AI Management at Georgetown University. I’m interested in using data and AI to drive thoughtful, strategic decisions.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      <div class="card">
        <h3>Project One</h3>
        <p>A brief description of something cool you built or analyzed.</p>
      </div>
      <div class="card">
        <h3>Project Two</h3>
        <p>Another example of your work. Maybe include a dataset, model, or visualization.</p>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
    <p>GitHub: <a href="https://github.com/jvosteen" target="_blank">@jvosteen</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/YOURPROFILE" target="_blank">Your LinkedIn</a></p>
  </section>

  <script>
    // Theme toggle
    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.querySelectorAll('.card').forEach(c => c.classList.toggle('dark'));
    }
    // Scroll animation observer
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

    // Canvas network animation (particles and lines)
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
n        });
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
      // Draw lines
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
      // Draw particles
      for (let p of particles) {
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }
    initParticles();
    animate();
  </script>
</body>
</html>
