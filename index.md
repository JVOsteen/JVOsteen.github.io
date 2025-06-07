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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Pacifico&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #0f172a;
      --text-light: #ffffff;
      --primary: #10b981;
      --nav-link-hover: #3b82f6;
      --timeline-bg: #1f2937;
      --timeline-hover: #374151;
      --skill-bg: #242f3e;
    }
    html, body {
      background-color: var(--bg-dark); /* still good */
      position: relative;
      z-index: 1;
      font-family: 'Inter', sans-serif;
      color: var(--text-light);
      overflow-x: hidden;
      overscroll-behavior-y: none;
      margin: 0;
      padding: 0;
      height: 100%;
      /*scroll-padding-top: 80px;*/
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
    }
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--bg-dark);
      z-index: 1000;
    }
    .hero-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: var(--primary);
      z-index: 999;
      animation: slideInOut 2s ease forwards;
      pointer-events: none;
    }
    @keyframes slideInOut {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
    #hero h1, #hero .hero-text {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeSlide 1s ease forwards;
      animation-delay: 2s;
      animation-fill-mode: forwards;
    }
    @keyframes fadeSlide {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .logo {
      font-family: 'Pacifico', cursive;
      font-size: 2.5rem;
      color: var(--primary);
      cursor: pointer;
      text-decoration: none;
      margin-right: 2rem;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    .nav-links a {
      color: var(--text-light);
      display: inline-block;
      padding: 0.5rem 0;
      font-weight: 600;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: var(--nav-link-hover);
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
      color: var(--text-light);
      background-color: transparent; /* allow canvas to show through */
    }
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    /* Hero section */
    #hero {
      height: 100vh;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      text-align: center;
      overflow: hidden;
    }
    h1 {
      font-size: 5rem;
      margin: 1rem 0 0.75rem;
      color: var(--text-light);
    }
    .hero-text p {
      font-size: 1.75rem;
      max-width: 900px;
      margin: 0.75rem auto;
      line-height: 1.4;
      color: var(--text-light);
    }
    .highlight-green { color: #10b981; font-weight: 600; }
    .highlight-yellow { color: #eab308; font-weight: 600; }
    .highlight-orange { color: #f59e0b; font-weight: 600; }
    /* Experience Timeline */
    #experience {
      position: relative;
      padding-top: 4rem;
    }
    #experience h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    #about h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .timeline {
      position: relative;
      max-width: 900px;
      margin: 2rem 0;
      padding-left: 2rem;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 40px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: var(--primary);
      border-radius: 2px;
    }
    .exp-item {
      position: relative;
      margin: 2rem 0;
      padding-left: 3rem;
      text-align: left;
    }
    .exp-item::before {
      content: '';
      position: absolute;
      left: 28px;
      top: 0;
      width: 24px;
      height: 24px;
      background: var(--primary);
      border-radius: 50%;
      border: 4px solid var(--timeline-bg);
    }
    .exp-box {
      background: var(--timeline-bg);
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      transition: background 0.3s;
    }
    .exp-item:hover .exp-box {
      background: var(--timeline-hover);
    }
    .exp-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      color: var(--primary);
    }
    .exp-company {
      font-size: 1rem;
      margin: 0.25rem 0;
      color: #eab308;
    }
    .exp-details {
      display: none;
      margin-top: 0.5rem;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    .exp-item:hover .exp-details {
      display: block;
    }
    /* Skills Section */
    #skills {
      padding-top: 4rem;
    }
    #skills h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      justify-content: center;
      justify-items: center;
      max-width: 1000px;
      margin: 1rem auto 0;
    }
    .skill-box {
      background: var(--skill-bg);
      padding: 1rem;
      border-radius: 0.5rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
      width: 100%;
      max-width: 220px;
      
      /* Flexbox centering */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 100px; /* ensures enough height for visual balance */
      padding: 1rem;
    }
        /* Canvas styling */
    #background-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0; /* was -1 */
      background: transparent;
      pointer-events: none;
    }
    @media (max-width: 768px) {
    html {
      scroll-padding-top: 100px; /* adjust if needed */
    }
    header {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      gap: 0.5rem;
    }

    .logo {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .nav-links {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: flex-start;
      width: 100%;
    }

    .nav-links a {
      font-size: 0.95rem;
      padding: 0.25rem 0;
    }

    h1 {
      font-size: 2.75rem;
    }

    .hero-text p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }

    section {
      padding: 5rem 1rem 2rem;
    }
  }
  </style>
</head>
<body>
  <div class="hero-overlay"></div>
  <canvas id="background-canvas"></canvas>
  <header>
    <a href="#hero" class="logo">JVO</a>
    <nav class="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="hero">
    <h1>Joshua Vera O'Steen</h1>
    <div class="hero-text">
      <p><span class="highlight-green">Senior Data Scientist</span> with <span class="highlight-yellow">over 4 years</span> of experience building solutions in <span class="highlight-green">real estate analytics, ML modeling,</span> and <span class="highlight-green">ML explainability</span>.</p>
      <p>Currently pursuing an MPS in AI Management at <span class="highlight-orange">Georgetown University</span> and leading data science projects at <span class="highlight-orange">Fannie Mae</span>.</p>
    </div>
  </section>
  <section id="about">
    <h2>About Me</h2>
    <p>Hi! I’m Josh Vera O’Steen — a Senior Data Scientist at Fannie Mae with a background in statistics, political science, and a growing passion for leadership and real estate. I combine analytical rigor with strategic thinking to build models and solutions that drive real-world impact.</p>
    <h3><strong><span class="highlight-yellow">Background:</span></strong></h3>
    <p>I hold a Bachelor of Science in Statistics and a Bachelor of Arts in Political Science from American University. I’m currently pursuing a Master of Professional Studies in Artificial Intelligence Management at Georgetown University, where I’m deepening my understanding of how AI can be deployed responsibly and effectively at scale — particularly from a leadership and organizational strategy perspective.</p>
    <p>At Fannie Mae, I work on the Collateral Products & Modeling team, working on projects aimed at modernizing property valuation — blending advanced modeling techniques with policy and business decision-making. I love collaborating with cross-functional teams, mentoring junior data scientists, and finding ways to make complex ideas accessible and actionable. </p>
    <h3><strong><span class="highlight-yellow">Outside of Work:</span></strong></h3>
    <p>Hailing from Seattle, I am an avid coffee drinker and enjoy finding great coffees. Besides coffee, I’m also a big foodie and am a consistent Beli user, always looking for the best restaurants, bars, and bakeries. I also love to travel the world, going to as many places as I can (a personal favorite place to visit is Mexico City). Finally, as any good data scientist, I am always curious. I love trying new things and it’s my curiosity that drove me to make this website! Hope you enjoy and please reach out if you’d like to connect.</p>
  </section>

  <section id="experience">
    <h2>Work Experience</h2>
    <div class="timeline">
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Senior Data Science Associate</p>
          <p class="exp-company">Fannie Mae, Washington, D.C. (Sept 2024–Present)</p>
          <p class="exp-details">Contributed to research supporting the expansion of Fannie Mae’s Value Acceptance program. Led the 2024 Cost-Benefit Analysis for Value Acceptance and continue to work on Value Acceptance research and design.</p>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Data Science Associate</p>
          <p class="exp-company">Fannie Mae, Washington, D.C. (Sept 2023–Sept 2024)</p>
          <p class="exp-details">Joined the Collateral Products & Modeling team. Led research on appraisal bias mitigation. Authored three research memos and served as Project Lead, managing an intern on an appraisal bias mitigation project.</p>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Analytics & Modeling Associate</p>
          <p class="exp-company">Fannie Mae, Washington, D.C. (July 2022–Sept 2023)</p>
          <p class="exp-details">Completed an 11-week program at Fannie Mae, enhancing programming and statistical skills, then spent one year on the Collateral Products & Modeling team on a trial basis.</p>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Spring Data Analyst</p>
          <p class="exp-company">Grassroots Analytics, Washington, D.C. (Jan–June 2022)</p>
          <p class="exp-details">Provided fundraising and data support to clients, working closely with fundraising strategists to assess campaigns’ operations, developed lists of donors using Stata, and offered guidance to maximize money raised.</p>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Consumer Insights Intern</p>
          <p class="exp-company">Giant Food, Hyattsville, MD (June–Aug 2021)</p>
          <p class="exp-details">Led market research on Gen-Z grocery shopping habits using surveys and secondary research. Led a competitive insights project for the Healthy Living team to analyze competitor strategies in healthy living and nutrition.</p>
        </div>
      </div>
      <div class="exp-item">
        <div class="exp-box">
          <p class="exp-title">Research Fellow</p>
          <p class="exp-company">American University Center for Data Science, Washington, D.C. (Sept 2020–June 2021)</p>
          <p class="exp-details">Served as Research Assistant with Professor Andrew Ballard on legislative behavior research using text analysis and machine learning techniques.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-box">Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Plotly)</div>
      <div class="skill-box">R</div>
      <div class="skill-box">SQL</div>
      <div class="skill-box">Stata</div>
      <div class="skill-box">Machine Learning (Regression, Classification, Clustering, Time Series)</div>
      <div class="skill-box">A/B Testing</div>
      <div class="skill-box">Data Visualization</div>
      <div class="skill-box">AWS (S3, SageMaker, Ground Truth)</div>
      <div class="skill-box">Technical Writing</div>
      <div class="skill-box">Spanish (Professional Working Proficiency)</div>
      <div class="skill-box">Appraisal Bias Research</div>
      <div class="skill-box">Project Management</div>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:osteenjv@gmail.com" style="color: var(--text-light); text-decoration: underline;">osteenjv@gmail.com</a></p>
    <p>Phone: (206) 992-5736</p>
    <p>GitHub: <a href="https://github.com/jvosteen" target="_blank" style="color: var(--text-light); text-decoration: underline;">@jvosteen</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/YOURPROFILE" target="_blank" style="color: var(--text-light); text-decoration: underline;">Your LinkedIn</a></p>
  </section>
<script src="/assets/js/needed.js"></script>
</body>
</html>