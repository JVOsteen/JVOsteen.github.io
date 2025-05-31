---
layout: default
title: Joshua Vera O'Steen
---

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  h1, h2, h3 {
    font-weight: 600;
  }
  a {
    color: #2563eb;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease-out;
    padding: 4rem 1rem;
  }
  .project-card {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    width: 300px;
    transition: transform 0.3s;
  }
  .project-card:hover {
    transform: translateY(-8px);
  }
</style>

<!-- Hero Section -->
<section id="hero" style="text-align: center; background: linear-gradient(to right, #1f2937, #4b5563); color: white;">
  <img src="./assets/img/joshmemoji.png" alt="Joshua's Memoji" style="width: 120px; border-radius: 50%;">
  <h1 style="font-size: 2.5rem; margin-top: 1rem;">Joshua Vera O'Steen</h1>
  <p style="font-size: 1.2rem; margin-top: 0.5rem;">Data Scientist | Stats & PoliSci Enthusiast | AI MPS Student</p>
  <div style="margin-top: 1.5rem;">
    <a href="#about" style="margin: 0 1rem;">About</a>
    <a href="#projects" style="margin: 0 1rem;">Projects</a>
    <a href="#resume" style="margin: 0 1rem;">Resume</a>
    <a href="#contact" style="margin: 0 1rem;">Contact</a>
  </div>
</section>

<!-- About Section -->
<section id="about" style="max-width: 800px; margin: auto;">
  <h2>About Me</h2>
  <p>I'm a data scientist based in Washington, D.C., with a background in statistics and political science. I'm passionate about leveraging data to solve complex problems and make impactful decisions. I'm currently pursuing a Master of Professional Studies in AI Management at Georgetown University.</p>
</section>

<!-- Projects Section -->
<section id="projects" style="background: #f9fafb;">
  <h2 style="text-align: center;">Projects</h2>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;">
    <!-- Project cards -->
    <div class="project-card">
      <h3>Project Title</h3>
      <p>Short description of the project, what tools you used, and what you learned or accomplished.</p>
      <a href="#">View Project</a>
    </div>
    <!-- Add more cards here -->
  </div>
</section>

<!-- Resume Section -->
<section id="resume" style="max-width: 800px; margin: auto;">
  <h2>Resume</h2>
  <p>You can <a href="/assets/resume.pdf" target="_blank">download my resume here</a>.</p>
</section>

<!-- Contact Section -->
<section id="contact" style="text-align: center; background: #e5e7eb;">
  <h2>Contact</h2>
  <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
  <p>GitHub: <a href="https://github.com/jvosteen" target="_blank">@jvosteen</a></p>
  <p>LinkedIn: <a href="https://linkedin.com/in/YOURPROFILE" target="_blank">Your LinkedIn</a></p>
</section>

<script>
  // Simple scroll animation fade in
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });
  });
</script>
