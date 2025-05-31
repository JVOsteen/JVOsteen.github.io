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
      --bg-light: #ffffff;
      --bg-dark: #0f172a;
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
