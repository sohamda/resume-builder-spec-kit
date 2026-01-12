# Contract: index.html Structure

**Purpose**: Define the semantic HTML structure for the single-page portfolio

## Document Outline

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags (SEO, viewport, charset) -->
  <!-- Favicon -->
  <!-- FontAwesome CDN -->
  <!-- CSS imports (in order) -->
</head>
<body>
  <header class="site-header">
    <nav class="nav">...</nav>
  </header>
  
  <main>
    <section id="hero" class="hero">...</section>
    <section id="about" class="section">...</section>
    <section id="experience" class="section">...</section>
    <section id="skills" class="section">...</section>
    <section id="education" class="section">...</section>
    <section id="contact" class="section">...</section>
  </main>
  
  <footer class="site-footer">...</footer>
  
  <!-- JS imports (type="module") -->
</body>
</html>
```

## Head Section

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO -->
  <title>Jane Doe | Senior Software Engineer - Portfolio</title>
  <meta name="description" content="Full-stack developer with 8+ years...">
  <link rel="canonical" href="https://janedoe.github.io/portfolio/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://janedoe.github.io/portfolio/">
  <meta property="og:title" content="Jane Doe | Senior Software Engineer">
  <meta property="og:description" content="Full-stack developer with 8+ years...">
  <meta property="og:image" content="https://janedoe.github.io/portfolio/assets/images/og-image.png">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://janedoe.github.io/portfolio/">
  <meta name="twitter:title" content="Jane Doe | Senior Software Engineer">
  <meta name="twitter:description" content="Full-stack developer with 8+ years...">
  <meta name="twitter:image" content="https://janedoe.github.io/portfolio/assets/images/og-image.png">
  
  <!-- FontAwesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
        crossorigin="anonymous" referrerpolicy="no-referrer">
  
  <!-- CSS (order matters) -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/navigation.css">
  <link rel="stylesheet" href="css/hero.css">
  <link rel="stylesheet" href="css/sections.css">
  <link rel="stylesheet" href="css/components.css">
</head>
```

## Navigation Structure

```html
<header class="site-header">
  <nav class="nav" aria-label="Main navigation">
    <a href="#hero" class="nav__logo">JD</a>
    
    <button class="nav__toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle menu">
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
      <span class="nav__toggle-fallback">☰</span>
    </button>
    
    <ul id="nav-menu" class="nav__menu">
      <li><a href="#about" class="nav__link">About</a></li>
      <li><a href="#experience" class="nav__link">Experience</a></li>
      <li><a href="#skills" class="nav__link">Skills</a></li>
      <li><a href="#education" class="nav__link">Education</a></li>
      <li><a href="#contact" class="nav__link">Contact</a></li>
    </ul>
  </nav>
</header>
```

## Hero Section

```html
<section id="hero" class="hero">
  <div class="hero__content">
    <img src="assets/images/profile.webp" alt="Jane Doe" class="hero__photo">
    <h1 class="hero__name">Jane Doe</h1>
    <p class="hero__title">Senior Software Engineer</p>
    <p class="hero__summary">Full-stack developer with 8+ years of experience...</p>
    <a href="#contact" class="hero__cta btn btn--primary">Get in Touch</a>
  </div>
</section>
```

## Content Section Template

```html
<section id="[section-id]" class="section">
  <div class="section__container">
    <h2 class="section__title">[Section Title]</h2>
    <!-- Section-specific content -->
  </div>
</section>
```

## Experience Section

```html
<section id="experience" class="section">
  <div class="section__container">
    <h2 class="section__title">Experience</h2>
    
    <div class="experience-list" id="experience-list">
      <!-- Rendered by JS from resume-data.js -->
    </div>
    
    <button class="btn btn--secondary experience__toggle" id="experience-toggle" hidden>
      View More
    </button>
  </div>
</section>
```

## Experience Item Template (rendered by JS)

```html
<article class="experience-item" data-visible="true">
  <div class="experience-item__header">
    <h3 class="experience-item__role">Senior Software Engineer</h3>
    <span class="experience-item__company">Tech Corp</span>
    <span class="experience-item__dates">Jan 2022 - Present</span>
  </div>
  <ul class="experience-item__bullets">
    <li>Led development of microservices architecture...</li>
    <li>Mentored team of 5 junior developers</li>
  </ul>
</article>
```

## Skills Section

```html
<section id="skills" class="section">
  <div class="section__container">
    <h2 class="section__title">Skills</h2>
    
    <div class="skills-grid" id="skills-grid">
      <!-- Rendered by JS, grouped by category -->
    </div>
  </div>
</section>
```

## Skill Category Template (rendered by JS)

```html
<div class="skill-category">
  <h3 class="skill-category__title">Technical</h3>
  <ul class="skill-list">
    <li class="skill-item">
      <span class="skill-item__name">JavaScript</span>
      <span class="skill-item__rating" aria-label="5 out of 5 stars">
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <span class="skill-item__rating-fallback">★★★★★</span>
      </span>
    </li>
  </ul>
</div>
```

## Contact Section

```html
<section id="contact" class="section section--alt">
  <div class="section__container">
    <h2 class="section__title">Contact</h2>
    
    <a href="mailto:jane.doe@example.com" class="contact__email">
      <i class="fa-solid fa-envelope" aria-hidden="true"></i>
      <span class="contact__email-fallback">✉</span>
      jane.doe@example.com
    </a>
    
    <ul class="social-links" id="social-links">
      <!-- Rendered by JS from resume-data.js -->
    </ul>
  </div>
</section>
```

## Footer

```html
<footer class="site-footer">
  <p>&copy; 2026 Jane Doe. All rights reserved.</p>
</footer>
```

## Scripts

```html
<!-- At end of body -->
<script type="module" src="js/main.js"></script>
```

## Accessibility Requirements

| Element | Requirement |
|---------|-------------|
| `<html>` | `lang="en"` attribute |
| `<img>` | Descriptive `alt` text |
| `<nav>` | `aria-label="Main navigation"` |
| Nav toggle | `aria-expanded`, `aria-controls`, `aria-label` |
| Star ratings | `aria-label="X out of 5 stars"` |
| Icons | `aria-hidden="true"` (decorative) |
| Sections | `id` for navigation targets |
| Links | Visible focus states |
