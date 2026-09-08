# 🛡️ Cyber-Specialist Portfolio | Vinayak Burgess

<p align="left">
  <img src="https://img.shields.io/badge/System-Active-5BCEFA?style=for-the-badge&logo=opsgenie" alt="System Status">
  <img src="https://img.shields.io/badge/Specialization-Python_%7C_Cyber_Security-F5A9B8?style=for-the-badge&logo=python" alt="Specialization">
  <img src="https://img.shields.io/badge/Content-Data--Driven-BE7EFF?style=for-the-badge" alt="Data-Driven Content">
  <img src="https://img.shields.io/badge/Logic-Enabled-white?style=for-the-badge" alt="Logic Status">
</p>

---

### 🌟 Project Overview

A high-performance, responsive portfolio environment engineered with a **Cyber-Architect aesthetic**. This deployment serves as the central command for my "100-Day Technical Transformation Protocol," showcasing the intersection of Python automation, offensive security concepts, and aesthetic software design. Every module — homepage, project case files, and the full progress log — runs off a single data file, so the whole environment can be updated without touching the rendering logic.

---

### 🚀 Technical Features

* **Terminal Interface:** Integrated typewriter execution in the Hero section for a "Command-Line" user experience.
* **Cyber Palette:** A unique UI theme blending high-visibility neon accents with the Pride color variables.
* **Technical Arsenal:** Dynamic skill visualization using CSS custom properties, Grid layouts, and scroll-triggered progress bars.
* **Case File System:** Every featured project auto-generates its own dedicated case-study page — problem, approach, challenges, outcome — from a single entry in the data layer.
* **Progression Log:** A dedicated devlog module tracks the full "100 Days of Code" history independently of the homepage highlights.
* **Secure QR Uplinks:** Real-time QR generation (using `qrcode.js`) to provide encrypted-style links to professional credentials.
* **Persistent Branding:** Circular profile integration and a responsive, fixed-nav architecture.
* **Accessibility-Minded:** Respects `prefers-reduced-motion` and ships visible `:focus-visible` states for keyboard navigation.

---

### 🛠️ The Stack

* **HTML5:** Semantic architecture for SEO and high-speed indexing.
* **CSS3:** Advanced Flexbox/Grid systems utilizing custom variables for global theme management.
* **JavaScript (Vanilla):** Intersection Observer API for scroll-driven animations, dynamic DOM rendering, and Typewriter effects — no frameworks, no build step.
* **Data-Driven Architecture:** All content — skills, experience, projects, devlog entries — lives in one editable data file, decoupled from the render logic that builds the pages.
* **Typography:** Powered by `Orbitron` and `JetBrains Mono` for professional, developer-centric readability.

---

### 📂 Repository Structure

```text
├── index.html            # Homepage structure & SEO meta-tags
├── project.html          # Dynamic case-file template (renders any project via ?id=)
├── devlog.html            # Full 100 Days of Code progression log
├── data.js                 # Single source of truth — all editable content lives here
├── render.js                # Builds the homepage from data.js
├── project-render.js         # Builds each project's case-file page from data.js
├── devlog-render.js           # Builds the full devlog page from data.js
├── script.js                   # UI interactions: QR logic, scroll animations, typewriter effect
├── style.css                     # Global theme engine & Cyber-animations
└── images/                        # Visual assets (Profile Photos, Logo, Favicon)
```

---

### ✏️ Updating This Portfolio

Every piece of content — skills, experience, education, featured projects, and devlog entries — is edited in one place: `data.js`. Adding a new "100 Days" entry, a new job, or a whole new project with its own case-study page never requires touching the HTML or JS rendering logic.

---

### Copyright (c) 2026 Vinayak Burgess. All Rights Reserved.
