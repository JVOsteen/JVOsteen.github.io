---
layout: none
title: Joshua Vera O'Steen
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Joshua Vera O'Steen | Senior Data Scientist</title>
  <meta name="description" content="Senior Data Scientist at Fannie Mae, AI Management student at Georgetown University. Building ML solutions that shape real-world outcomes.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Pacifico&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    /* ─── Variables ─── */
    :root {
      --bg:            #080d1a;
      --bg-2:          #0f172a;
      --bg-3:          #162032;
      --glass:         rgba(255,255,255,0.035);
      --glass-hover:   rgba(255,255,255,0.06);
      --glass-border:  rgba(255,255,255,0.08);
      --primary:       #10b981;
      --primary-light: #34d399;
      --primary-glow:  rgba(16,185,129,0.18);
      --gold:          #f59e0b;
      --blue:          #3b82f6;
      --purple:        #8b5cf6;
      --text:          #f0f4f8;
      --text-muted:    #94a3b8;
      --text-faint:    #4a5568;
      --radius:        1rem;
      --radius-sm:     0.6rem;
      --radius-lg:     1.5rem;
    }

    /* ─── Reset ─── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; scroll-padding-top: 80px; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }

    /* ─── Canvas ─── */
    #bg-canvas {
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      width: 100%; height: 100%;
    }

    /* ─── Intro overlay ─── */
    .intro-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: var(--primary);
      transform-origin: right center;
      animation: wipeOut 1.6s cubic-bezier(0.76, 0, 0.24, 1) 0.2s forwards;
      pointer-events: none;
    }
    @keyframes wipeOut {
      0%   { clip-path: inset(0 0 0 0); }
      100% { clip-path: inset(0 0 0 100%); }
    }

    /* ─── Header ─── */
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.1rem 2.5rem;
      transition: background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s;
    }
    header.scrolled {
      background: rgba(8, 13, 26, 0.88);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 1px 0 var(--glass-border);
    }

    .logo {
      font-family: 'Pacifico', cursive;
      font-size: 1.9rem;
      color: var(--primary);
      transition: opacity 0.2s;
    }
    .logo:hover { opacity: 0.75; }

    nav { display: flex; gap: 2rem; }
    nav a {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-muted);
      position: relative;
      padding: 0.25rem 0;
      transition: color 0.2s;
    }
    nav a::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0; right: 0;
      height: 2px;
      background: var(--primary);
      transform: scaleX(0);
      transition: transform 0.25s;
      border-radius: 1px;
    }
    nav a:hover { color: var(--text); }
    nav a:hover::after { transform: scaleX(1); }

    /* ─── Hamburger ─── */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 6px;
      z-index: 1001;
    }
    .hamburger span {
      display: block;
      width: 22px; height: 2px;
      background: var(--text);
      border-radius: 2px;
      transition: transform 0.3s, opacity 0.3s;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* Mobile overlay nav */
    .mobile-nav {
      position: fixed;
      inset: 0;
      z-index: 998;
      background: rgba(8, 13, 26, 0.97);
      backdrop-filter: blur(16px);
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
    }
    .mobile-nav.open { display: flex; }
    .mobile-nav a {
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-muted);
      transition: color 0.2s;
    }
    .mobile-nav a:hover { color: var(--primary); }

    /* ─── Sections ─── */
    section {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 7rem 2rem 5rem;
      min-height: 100vh;
    }

    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      color: var(--primary);
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }
    .section-title {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1rem;
      text-align: center;
    }
    .section-sub {
      font-size: 1.05rem;
      color: var(--text-muted);
      text-align: center;
      max-width: 560px;
      margin-bottom: 3rem;
      line-height: 1.75;
    }

    /* Fade-in */
    .fi {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fi.vis { opacity: 1; transform: translateY(0); }

    /* ─── Hero ─── */
    #hero {
      min-height: 100vh;
      padding: 0 2rem;
      text-align: center;
      overflow: hidden;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(16,185,129,0.1);
      border: 1px solid rgba(16,185,129,0.22);
      color: var(--primary);
      padding: 0.45rem 1.1rem;
      border-radius: 100px;
      font-size: 0.82rem;
      font-weight: 500;
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeUp 0.8s ease 1.9s forwards;
    }
    .pulse-dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--primary);
      animation: pulseDot 2s ease infinite;
    }
    @keyframes pulseDot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.4; transform: scale(0.8); }
    }

    .hero-mono {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: var(--text-faint);
      letter-spacing: 0.08em;
      margin-bottom: 1.2rem;
      opacity: 0;
      animation: fadeUp 0.8s ease 2.1s forwards;
    }

    #hero h1 {
      font-size: clamp(3rem, 9vw, 6.5rem);
      font-weight: 900;
      line-height: 1.05;
      margin-bottom: 1.75rem;
      opacity: 0;
      animation: fadeUp 0.8s ease 2.3s forwards;
      letter-spacing: -0.02em;
    }
    .grad {
      background: linear-gradient(130deg, var(--primary) 0%, var(--blue) 60%, var(--purple) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-desc {
      font-size: clamp(1rem, 2.2vw, 1.25rem);
      color: var(--text-muted);
      max-width: 650px;
      margin: 0 auto 2.5rem;
      line-height: 1.8;
      opacity: 0;
      animation: fadeUp 0.8s ease 2.5s forwards;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      opacity: 0;
      animation: fadeUp 0.8s ease 2.7s forwards;
    }

    .btn {
      padding: 0.8rem 1.9rem;
      border-radius: 100px;
      font-weight: 600;
      font-size: 0.92rem;
      transition: all 0.25s;
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      border: none;
      cursor: pointer;
    }
    .btn-primary {
      background: var(--primary);
      color: #fff;
    }
    .btn-primary:hover {
      background: var(--primary-light);
      transform: translateY(-3px);
      box-shadow: 0 10px 28px rgba(16,185,129,0.38);
    }
    .btn-outline {
      background: transparent;
      color: var(--text);
      border: 1.5px solid var(--glass-border);
    }
    .btn-outline:hover {
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-3px);
    }

    .scroll-hint {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      opacity: 0;
      animation: fadeIn 1s ease 3.4s forwards;
    }
    .scroll-hint span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      color: var(--text-faint);
    }
    .scroll-bar {
      width: 1px;
      height: 44px;
      background: linear-gradient(to bottom, var(--primary), transparent);
      animation: barPulse 2s ease infinite;
    }
    @keyframes barPulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.25; }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      to { opacity: 0.7; }
    }

    /* ─── About ─── */
    #about { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.04), transparent); }

    .about-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      max-width: 960px;
      width: 100%;
    }
    .about-intro {
      grid-column: 1 / -1;
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
      font-size: 1.1rem;
      color: var(--text-muted);
      line-height: 1.85;
    }
    .about-intro strong { color: var(--text); font-weight: 700; }

    .glass-card {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius);
      padding: 1.75rem;
      transition: border-color 0.3s, background 0.3s, transform 0.3s;
      text-align: left;
    }
    .glass-card:hover {
      border-color: rgba(16,185,129,0.28);
      background: var(--glass-hover);
      transform: translateY(-5px);
    }
    .glass-card h3 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .glass-card p {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.75;
    }
    .hl { color: var(--primary); font-weight: 600; }
    .hl-gold { color: var(--gold); font-weight: 600; }
    .hl-blue { color: #60a5fa; font-weight: 600; }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .tag {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(16,185,129,0.07);
      border: 1px solid rgba(16,185,129,0.14);
      color: var(--text-muted);
      padding: 0.3rem 0.75rem;
      border-radius: 100px;
      font-size: 0.78rem;
    }

    /* ─── Experience ─── */
    #experience { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.04), transparent); }

    .timeline {
      position: relative;
      max-width: 780px;
      width: 100%;
      padding-left: 0;
    }
    .tl-rail {
      position: absolute;
      left: 11px;
      top: 14px;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary), var(--blue) 60%, transparent);
      border-radius: 1px;
    }

    .exp-item {
      position: relative;
      padding-left: 3.5rem;
      margin-bottom: 1.75rem;
    }
    .exp-dot {
      position: absolute;
      left: 0;
      top: 1.4rem;
      width: 24px; height: 24px;
      border-radius: 50%;
      background: var(--bg-2);
      border: 2px solid var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
      z-index: 1;
    }
    .exp-dot::after {
      content: '';
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--primary);
      transition: background 0.3s;
    }
    .exp-item:hover .exp-dot {
      background: var(--primary);
      transform: scale(1.2);
      box-shadow: 0 0 16px var(--primary-glow);
    }
    .exp-item:hover .exp-dot::after { background: #fff; }

    .exp-box {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius);
      padding: 1.4rem 1.6rem;
      cursor: pointer;
      transition: border-color 0.3s, background 0.3s, transform 0.3s;
      user-select: none;
    }
    .exp-box:hover {
      border-color: rgba(16,185,129,0.28);
      background: var(--glass-hover);
      transform: translateX(5px);
    }

    .exp-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .exp-title {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text);
    }
    .exp-company {
      font-size: 0.875rem;
      color: var(--gold);
      font-weight: 500;
      margin-top: 0.2rem;
    }
    .exp-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--text-faint);
      white-space: nowrap;
      padding-top: 3px;
      flex-shrink: 0;
    }
    .exp-details {
      display: none;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--glass-border);
      font-size: 0.875rem;
      color: var(--text-muted);
      line-height: 1.75;
    }
    .exp-details strong { color: var(--text); font-weight: 600; }
    .exp-box.open .exp-details { display: block; }
    .exp-cue {
      margin-top: 0.8rem;
      font-size: 0.78rem;
      color: var(--primary);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .exp-cue-arrow { transition: transform 0.3s; display: inline-block; }
    .exp-box.open .exp-cue-arrow { transform: rotate(180deg); }

    /* ─── Education ─── */
    #education { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.04), transparent); }

    .edu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
      max-width: 900px;
      width: 100%;
    }
    .edu-card {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius);
      padding: 2rem 1.75rem;
      text-align: left;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    }
    .edu-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      border-radius: var(--radius) var(--radius) 0 0;
    }
    .edu-card.c-green::before  { background: linear-gradient(90deg, var(--primary), var(--primary-light)); }
    .edu-card.c-blue::before   { background: linear-gradient(90deg, var(--blue), var(--purple)); }
    .edu-card.c-gold::before   { background: linear-gradient(90deg, var(--gold), #f97316); }
    .edu-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 48px rgba(0,0,0,0.3);
      border-color: rgba(255,255,255,0.13);
    }
    .edu-icon { font-size: 2.2rem; margin-bottom: 1.1rem; }
    .edu-degree { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.25rem; }
    .edu-school { font-size: 0.88rem; color: var(--primary); font-weight: 600; margin-bottom: 0.2rem; }
    .edu-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--text-faint);
      margin-bottom: 0.9rem;
    }
    .edu-note { font-size: 0.84rem; color: var(--text-muted); line-height: 1.65; }

    /* ─── Skills ─── */
    #skills { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.03), transparent); }

    .skills-wrap {
      max-width: 900px;
      width: 100%;
    }
    .sk-cat { margin-bottom: 2.25rem; text-align: left; }
    .sk-cat-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      color: var(--text-faint);
      text-transform: uppercase;
      margin-bottom: 0.9rem;
    }
    .sk-tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
    .sk {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      padding: 0.55rem 1.1rem;
      border-radius: var(--radius-sm);
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.25s;
      cursor: default;
    }
    .sk:hover {
      border-color: rgba(16,185,129,0.35);
      color: var(--primary);
      background: rgba(16,185,129,0.07);
      transform: translateY(-2px);
    }
    .sk.featured {
      border-color: rgba(16,185,129,0.28);
      color: var(--primary);
      background: rgba(16,185,129,0.07);
    }
    .sk.featured:hover {
      background: rgba(16,185,129,0.14);
      border-color: rgba(16,185,129,0.5);
    }

    /* ─── Contact ─── */
    #contact { background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.04), transparent); }

    .contact-card {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: 3rem 2.5rem;
      max-width: 560px;
      width: 100%;
      text-align: center;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      margin-top: 2rem;
    }
    .c-link {
      display: flex;
      align-items: center;
      gap: 1.1rem;
      padding: 1rem 1.4rem;
      background: rgba(255,255,255,0.025);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-sm);
      transition: all 0.25s;
    }
    .c-link:hover {
      border-color: rgba(16,185,129,0.35);
      background: rgba(16,185,129,0.07);
      transform: translateX(5px);
    }
    .c-icon { font-size: 1.3rem; flex-shrink: 0; width: 2rem; text-align: center; }
    .c-info { text-align: left; }
    .c-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      color: var(--text-faint);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .c-value { font-size: 0.92rem; font-weight: 600; color: var(--text); }

    /* ─── Footer ─── */
    footer {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 2rem;
      color: var(--text-faint);
      font-size: 0.78rem;
      border-top: 1px solid var(--glass-border);
    }
    footer a { color: var(--primary); }

    /* ─── Responsive ─── */
    @media (max-width: 768px) {
      nav          { display: none; }
      .hamburger   { display: flex; }

      header { padding: 1rem 1.4rem; }

      section { padding: 5.5rem 1.25rem 3.5rem; }

      #hero h1 { font-size: clamp(2.4rem, 12vw, 4rem); }
      .hero-desc { font-size: 1rem; }

      .about-wrapper { grid-template-columns: 1fr; }
      .about-intro { grid-column: 1; }

      .contact-card { padding: 2rem 1.25rem; }

      .exp-head { flex-direction: column; gap: 0.3rem; }
      .exp-date { align-self: flex-start; }
    }
  </style>
</head>
<body>

  <!-- Intro animation -->
  <div class="intro-overlay"></div>

  <!-- Particle background -->
  <canvas id="bg-canvas"></canvas>

  <!-- ─── Header ─── -->
  <header id="hdr">
    <a href="#hero" class="logo">JVO</a>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="hamburger" id="ham" aria-label="Toggle menu" role="button" tabindex="0">
      <span></span><span></span><span></span>
    </div>
  </header>

  <!-- Mobile nav -->
  <div class="mobile-nav" id="mob-nav" aria-hidden="true">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </div>

  <!-- ─────────── HERO ─────────── -->
  <section id="hero">
    <div class="hero-badge">
      <span class="pulse-dot"></span>
      Open to connecting
    </div>
    <div class="hero-mono">// Senior Data Scientist &nbsp;·&nbsp; Washington, D.C.</div>
    <h1>Joshua<br><span class="grad">Vera O'Steen</span></h1>
    <p class="hero-desc">
      Building machine learning solutions that matter — from modernizing property valuation at Fannie Mae to making AI responsible and actionable at scale.
    </p>
    <div class="hero-cta">
      <a href="#experience" class="btn btn-primary">View My Work ↓</a>
      <a href="#contact" class="btn btn-outline">Get in Touch</a>
    </div>
    <div class="scroll-hint">
      <span>scroll</span>
      <div class="scroll-bar"></div>
    </div>
  </section>

  <!-- ─────────── ABOUT ─────────── -->
  <section id="about">
    <div class="section-label fi">01 // About</div>
    <h2 class="section-title fi">Hi, I'm Josh 👋</h2>
    <div class="about-wrapper">

      <div class="about-intro fi">
        <p>I'm a <strong>Senior Data Scientist</strong> at <strong>Fannie Mae</strong> with an unusual blend of statistical rigor and political science intuition. I love turning complex data into decisions that shape real-world outcomes — whether that's modernizing how homes are valued or leading bias research with genuine social impact.</p>
      </div>

      <div class="glass-card fi">
        <h3>🧠 What I Do</h3>
        <p>On Fannie Mae's <span class="hl">Collateral Products &amp; Modeling</span> team, I lead research on property valuation modernization and appraisal bias. I blend ML with policy thinking to build models that are accurate, fair, and actionable — and I mentor junior data scientists along the way.</p>
      </div>

      <div class="glass-card fi">
        <h3>🚀 Always Growing</h3>
        <p>Currently pursuing an <span class="hl-gold">MPS in AI Management</span> at <span class="hl-gold">Georgetown University</span> — exploring how AI can be deployed responsibly at organizational scale. I believe the future of AI isn't just better models; it's better leadership around those models.</p>
      </div>

      <div class="glass-card fi" style="grid-column: 1 / -1;">
        <h3>🌎 Outside of Work</h3>
        <p>Originally from <span class="hl">Seattle</span>, I'm a devoted coffee enthusiast always hunting for the perfect cup. I'm a proud <span class="hl-blue">Beli</span> power user tracking the best restaurants, bars, and bakeries wherever I roam. I travel whenever I can — <span class="hl-gold">Mexico City</span> holds a special place in my heart. And as any good data scientist should be, I'm endlessly curious. That curiosity is exactly what drove me to build this site. Hope you enjoy!</p>
        <div class="tags">
          <span class="tag">☕ Coffee Obsessed</span>
          <span class="tag">🍜 Dedicated Foodie</span>
          <span class="tag">✈️ World Traveler</span>
          <span class="tag">🇲🇽 Mexico City Devotee</span>
          <span class="tag">📍 Beli Power User</span>
          <span class="tag">🇪🇸 Spanish Speaker</span>
          <span class="tag">📖 Endlessly Curious</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ─────────── EXPERIENCE ─────────── -->
  <section id="experience">
    <div class="section-label fi">02 // Experience</div>
    <h2 class="section-title fi">Work History</h2>
    <p class="section-sub fi">A journey through data, policy, and impact. Click any card to expand.</p>
    <div class="timeline fi">
      <div class="tl-rail"></div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Senior Data Science Associate</div>
              <div class="exp-company">Fannie Mae · Washington, D.C.</div>
            </div>
            <div class="exp-date">Sept 2024 – Present</div>
          </div>
          <div class="exp-details">
            Contributing to research that supports the expansion of Fannie Mae's <strong>Value Acceptance</strong> program — a cornerstone initiative to modernize property appraisals. Led the <strong>2024 Cost-Benefit Analysis</strong> for Value Acceptance, delivering strategic findings that inform policy and business decisions. Continue to drive research on how appraisal waivers can scale responsibly across the housing market.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Data Science Associate</div>
              <div class="exp-company">Fannie Mae · Washington, D.C.</div>
            </div>
            <div class="exp-date">Sept 2023 – Sept 2024</div>
          </div>
          <div class="exp-details">
            Joined the Collateral Products &amp; Modeling team as a full Data Science Associate. Led research on <strong>appraisal bias mitigation</strong>, authoring three research memos on fair lending and valuation equity. Served as <strong>Project Lead</strong> on a bias mitigation initiative — managing and mentoring a summer intern through end-to-end delivery.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Analytics &amp; Modeling Associate</div>
              <div class="exp-company">Fannie Mae · Washington, D.C.</div>
            </div>
            <div class="exp-date">July 2022 – Sept 2023</div>
          </div>
          <div class="exp-details">
            Joined through Fannie Mae's competitive rotational program, completing an <strong>11-week intensive</strong> in programming, statistics, and financial modeling. Placed on the Collateral Products &amp; Modeling team, where I built the analytical foundation for my subsequent permanent role in property valuation analytics.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Spring Data Analyst</div>
              <div class="exp-company">Grassroots Analytics · Washington, D.C.</div>
            </div>
            <div class="exp-date">Jan – June 2022</div>
          </div>
          <div class="exp-details">
            Provided <strong>fundraising analytics and data support</strong> to political campaigns nationwide. Collaborated with fundraising strategists to assess campaign operations, built targeted donor lists in Stata, and delivered actionable insights to maximize funds raised. The perfect environment to combine data skills with political science instincts.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Consumer Insights Intern</div>
              <div class="exp-company">Giant Food · Hyattsville, MD</div>
            </div>
            <div class="exp-date">June – Aug 2021</div>
          </div>
          <div class="exp-details">
            Led market research on <strong>Gen-Z grocery shopping habits</strong> using surveys and secondary research — findings that directly shaped customer strategy. Spearheaded a competitive insights project for the Healthy Living team, analyzing competitor strategies in nutrition and wellness to inform product positioning.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

      <div class="exp-item">
        <div class="exp-dot"></div>
        <div class="exp-box" onclick="toggleExp(this)">
          <div class="exp-head">
            <div>
              <div class="exp-title">Undergraduate Research Fellow</div>
              <div class="exp-company">AU Center for Data Science · Washington, D.C.</div>
            </div>
            <div class="exp-date">Sept 2020 – June 2021</div>
          </div>
          <div class="exp-details">
            Collaborated with Professor Andrew Ballard on <strong>legislative behavior research</strong>, applying NLP and machine learning to political science questions. Gained foundational experience in text analysis, research methodology, and the exciting intersection of data science and public policy — the spark that set everything in motion.
          </div>
          <div class="exp-cue">Show details <span class="exp-cue-arrow">▾</span></div>
        </div>
      </div>

    </div>
  </section>

  <!-- ─────────── EDUCATION ─────────── -->
  <section id="education">
    <div class="section-label fi">03 // Education</div>
    <h2 class="section-title fi">Academic Background</h2>
    <p class="section-sub fi">Where numbers meet ideas, and ideas meet the real world.</p>
    <div class="edu-grid fi">

      <div class="edu-card c-gold">
        <div class="edu-icon">🦁</div>
        <div class="edu-degree">Master of Professional Studies</div>
        <div class="edu-school">Georgetown University</div>
        <div class="edu-date">In Progress · Expected 2026</div>
        <div class="edu-note">Artificial Intelligence Management — responsible AI deployment, organizational strategy, and AI governance. Bridging the gap between model-building and executive leadership.</div>
      </div>

      <div class="edu-card c-green">
        <div class="edu-icon">🦅</div>
        <div class="edu-degree">Bachelor of Science · Statistics</div>
        <div class="edu-school">American University</div>
        <div class="edu-date">Class of 2022</div>
        <div class="edu-note">Built a rigorous quantitative foundation — probability, statistical inference, regression, and the mathematical language of data science.</div>
      </div>

      <div class="edu-card c-blue">
        <div class="edu-icon">🏛️</div>
        <div class="edu-degree">Bachelor of Arts · Political Science</div>
        <div class="edu-school">American University</div>
        <div class="edu-date">Class of 2022</div>
        <div class="edu-note">Systems thinking, policy analysis, and a deep appreciation for how institutions work — and why it matters who controls the data and the models.</div>
      </div>

    </div>
  </section>

  <!-- ─────────── SKILLS ─────────── -->
  <section id="skills">
    <div class="section-label fi">04 // Skills</div>
    <h2 class="section-title fi">Toolkit</h2>
    <p class="section-sub fi">Languages, frameworks, and capabilities I bring to the table.</p>
    <div class="skills-wrap fi">

      <div class="sk-cat">
        <div class="sk-cat-title">// Programming &amp; Data</div>
        <div class="sk-tags">
          <span class="sk featured">Python</span>
          <span class="sk featured">R</span>
          <span class="sk featured">SQL</span>
          <span class="sk">Stata</span>
          <span class="sk">Data Visualization</span>
          <span class="sk">Statistical Modeling</span>
        </div>
      </div>

      <div class="sk-cat">
        <div class="sk-cat-title">// Machine Learning &amp; AI</div>
        <div class="sk-tags">
          <span class="sk featured">Machine Learning</span>
          <span class="sk">Regression &amp; Classification</span>
          <span class="sk">NLP / Text Analysis</span>
          <span class="sk">A/B Testing</span>
          <span class="sk">Experimental Design</span>
          <span class="sk">AI Ethics &amp; Governance</span>
        </div>
      </div>

      <div class="sk-cat">
        <div class="sk-cat-title">// Cloud &amp; Infrastructure</div>
        <div class="sk-tags">
          <span class="sk featured">AWS (S3 · SageMaker · Ground Truth)</span>
          <span class="sk">Model Deployment</span>
          <span class="sk">Data Pipelines</span>
        </div>
      </div>

      <div class="sk-cat">
        <div class="sk-cat-title">// Domain Expertise</div>
        <div class="sk-tags">
          <span class="sk featured">Property Valuation</span>
          <span class="sk featured">Appraisal Bias Research</span>
          <span class="sk">Real Estate Finance</span>
          <span class="sk">Fair Lending Analytics</span>
          <span class="sk">Political Data Analytics</span>
          <span class="sk">Consumer Insights</span>
        </div>
      </div>

      <div class="sk-cat">
        <div class="sk-cat-title">// Leadership &amp; Communication</div>
        <div class="sk-tags">
          <span class="sk">Technical Writing</span>
          <span class="sk">Project Management</span>
          <span class="sk">Mentorship</span>
          <span class="sk">Cross-functional Collaboration</span>
          <span class="sk">Stakeholder Communication</span>
          <span class="sk">Spanish (Professional)</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ─────────── CONTACT ─────────── -->
  <section id="contact">
    <div class="section-label fi">05 // Contact</div>
    <h2 class="section-title fi">Let's Connect</h2>
    <p class="section-sub fi">Whether you want to talk data science, AI strategy, real estate analytics, or swap coffee recommendations — I'm always happy to connect.</p>
    <div class="contact-card fi">
      <div class="contact-links">
        <a href="mailto:osteenjv@gmail.com" class="c-link">
          <span class="c-icon">✉️</span>
          <div class="c-info">
            <div class="c-label">Email</div>
            <div class="c-value">osteenjv@gmail.com</div>
          </div>
        </a>
        <a href="https://linkedin.com/in/jvosteen" target="_blank" rel="noopener" class="c-link">
          <span class="c-icon">💼</span>
          <div class="c-info">
            <div class="c-label">LinkedIn</div>
            <div class="c-value">linkedin.com/in/jvosteen</div>
          </div>
        </a>
        <a href="https://github.com/jvosteen" target="_blank" rel="noopener" class="c-link">
          <span class="c-icon">🐙</span>
          <div class="c-info">
            <div class="c-label">GitHub</div>
            <div class="c-value">github.com/jvosteen</div>
          </div>
        </a>
      </div>
    </div>
  </section>

  <footer>
    Built with curiosity by <a href="#hero">Joshua Vera O'Steen</a> &nbsp;·&nbsp; &copy; 2025
  </footer>

  <!-- ─── JavaScript ─── -->
  <script>
    /* ── Hamburger menu ── */
    const ham     = document.getElementById('ham');
    const mobNav  = document.getElementById('mob-nav');

    function toggleMenu(force) {
      const open = force !== undefined ? force : !ham.classList.contains('open');
      ham.classList.toggle('open', open);
      mobNav.classList.toggle('open', open);
      mobNav.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    ham.addEventListener('click', () => toggleMenu());
    ham.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); });
    mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

    /* ── Header scroll style ── */
    const hdr = document.getElementById('hdr');
    window.addEventListener('scroll', () => {
      hdr.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* ── Fade-in on scroll ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fi').forEach((el, i) => {
      // stagger siblings within same parent
      const siblings = el.parentElement.querySelectorAll('.fi');
      let idx = 0;
      siblings.forEach((s, j) => { if (s === el) idx = j; });
      el.style.transitionDelay = `${idx * 0.07}s`;
      observer.observe(el);
    });

    /* ── Experience expand ── */
    function toggleExp(box) {
      box.classList.toggle('open');
    }

    /* ── Scroll lock during intro overlay ── */
    document.body.style.overflow = 'hidden';
    setTimeout(() => { document.body.style.overflow = ''; }, 1900);

    /* ── Particle canvas ── */
    const canvas = document.getElementById('bg-canvas');
    const ctx    = canvas.getContext('2d');
    let W, H;

    function resizeCanvas() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const COUNT = 55;
    const particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.2 + 0.4,
    }));

    function drawParticles() {
      ctx.clearRect(0, 0, W, H);

      // update & draw dots
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.55)';
        ctx.fill();
      });

      // draw connecting lines
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - d / 130) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  </script>

</body>
</html>
