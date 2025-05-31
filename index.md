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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-light: #ffffff;
      --bg-dark: #0f172a;
      --text-light: #0f172a;
      --text-dark: #ffffff;
      --primary: #3b82f6;
    }
    html {
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-light);
      color: var(--text-light);
      transition: background 0.3s, color 0.3s;
      overflow-x: hidden;
      position: relative;
    }
    body.dark {
      background-color: var(--bg-dark);
      color: var(--text-dark);
    }
    section {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      scroll-snap-align: start;
      padding: 2rem;
      text-align: center;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    h1 {
      font-size: 3rem;
      margin: 0.5rem 0;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .toggle {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: none;
      border: 2px solid currentColor;
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-weight: 600;
      z-index: 1000;
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
    .links a {
      margin: 0 1rem;
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
    }
    #background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      background: radial-gradient(circle at 20% 30%, #3b82f640 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, #6366f140 0%, transparent 50%),
                  #f0f4f8;
      animation: animateBackground 10s infinite alternate ease-in-out;
    }
    body.dark #background-canvas {
      background: radial-gradient(circle at 20% 30%, #60a5fa33 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, #a78bfa33 0%, transparent 50%),
                  #0f172a;
    }
    @keyframes animateBackground {
      0% {
        background-position: 20% 30%, 80% 70%;
      }
      100% {
        background-position: 25% 35%, 75% 65%;
      }
    }
  </style>
</head>
<body>
  <div id="background-canvas"></div>
  <button class="toggle" onclick="toggleTheme()">Toggle Theme</button>

  <section id="hero">
    <img src="./assets/img/joshmemoji.png" alt="Joshua's Memoji" style="width: 100px; border-radius: 50%;">
    <h1>Joshua Vera O'Steen</h1>
    <p>Data Scientist | Stats & PoliSci | AI MPS Student</p>
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
    function toggleTheme() {
      document.body.classList.toggle('dark');
      document.querySelectorAll('.card').forEach(c => c.classList.toggle('dark'));
    }

    // Scroll animation
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
  </script>
</body>
</html>
