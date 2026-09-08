const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced", "Pro", "Expert"];

const PHASE_STATUS_MAP = {
  "complete": { label: "Complete", dot: "green" },
  "in-progress": { label: "In Progress", dot: "yellow" },
  "pending": { label: "Pending", dot: "purple" }
};

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

function renderSocialLinks() {
  const { github, linkedin, googleDev } = PORTFOLIO_DATA.social;

  const navLinks = document.getElementById("nav-social-links");
  if (navLinks) {
    navLinks.innerHTML = `
      <a href="${github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="${linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="${googleDev}" target="_blank" rel="noopener noreferrer" aria-label="Google Developer"><i class="fab fa-google"></i></a>
    `;
  }

  const googleDevBtn = document.getElementById("google-dev-link");
  if (googleDevBtn) googleDevBtn.href = googleDev;

  const uplinksGrid = document.getElementById("uplinks-grid");
  if (uplinksGrid) {
    const uplinks = [
      { id: "github", icon: "fab fa-github", label: "GitHub", url: github, qr: "qr-github" },
      { id: "linkedin", icon: "fab fa-linkedin", label: "LinkedIn", url: linkedin, qr: "qr-linkedin" },
      { id: "google", icon: "fab fa-google", label: "Developer", url: googleDev, qr: "qr-google" }
    ];
    uplinksGrid.innerHTML = uplinks.map((u, i) => `
      <div class="uplink-card" data-testid="uplink-${u.id}">
        <span class="uplink-label">UPLINK_0${i + 1}</span>
        <div class="qr-container" id="${u.qr}"></div>
        <div class="uplink-info">
          <i class="${u.icon}"></i>
          <span>${u.label}</span>
        </div>
        <a href="${u.url}" target="_blank" loading="lazy" rel="noopener noreferrer" class="connect-link">Connect <i class="fas fa-arrow-right"></i></a>
      </div>
    `).join("");
  }
}

function renderHero() {
  const h = PORTFOLIO_DATA.hero;
  document.getElementById("hero-location").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${escapeHTML(h.location)}`;
  document.getElementById("hero-status-text").textContent = h.statusText;
  document.getElementById("hero-first-name").textContent = h.firstName;
  document.getElementById("hero-last-name").textContent = h.lastName;
  document.getElementById("hero-terminal-role").innerHTML = `${escapeHTML(h.terminalRole)}<span class="cursor">_</span>`;
  document.getElementById("hero-description").textContent = h.description;
  document.getElementById("hero-cv-link").href = h.cvLink;

  document.title = `${h.firstName} ${h.lastName} | ${h.terminalRole.replace(/\b\w/g, c => c.toUpperCase())}`;
}

function renderProfileIntel() {
  const p = PORTFOLIO_DATA.profileIntel;

  const returns = p.missionLines
    .map(line => `        <span class="keyword">return</span> <span class="string">"${escapeHTML(line)}"</span>`)
    .join("\n");

  document.getElementById("code-block-body").innerHTML =
`<span class="keyword">class</span> <span class="class-name">CyberSpecialist</span>:
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="param">self</span>):
        <span class="param">self</span>.<span class="attr">focus</span> = <span class="string">"${escapeHTML(p.codeFocus)}"</span>
        <span class="param">self</span>.<span class="attr">status</span> = <span class="string">"${escapeHTML(p.codeStatus)}"</span>
        <span class="param">self</span>.<span class="attr">location</span> = <span class="string">"${escapeHTML(p.codeLocation)}"</span>

    <span class="keyword">def</span> <span class="function">execute_mission</span>(<span class="param">self</span>):
${returns}`;

  document.getElementById("about-title").textContent = p.aboutTitle;
  document.getElementById("about-text").textContent = p.aboutText;

  document.getElementById("stats-grid").innerHTML = p.stats.map((s, i) => `
    <div class="stat-card" data-testid="stat-${i}">
      <span class="stat-number">${escapeHTML(s.number)}</span>
      <span class="stat-label">${escapeHTML(s.label)}</span>
    </div>
  `).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map((skill, i) => {
    const levelIndex = Math.max(0, SKILL_LEVELS.indexOf(skill.level));
    const percent = (levelIndex + 1) * 20;

    const labels = SKILL_LEVELS.map(lvl =>
      `<span${lvl === skill.level ? ' class="active"' : ''}>${lvl}</span>`
    ).join("\n                            ");

    return `
      <div class="skill-item" data-testid="skill-${i}">
        <div class="skill-header">
          <i class="${skill.icon} skill-icon"></i>
          <span class="skill-name">${escapeHTML(skill.name)}</span>
          <span class="skill-level">${escapeHTML(skill.level)}</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" style="width: 0%" data-target-width="${percent}"></div>
          <div class="progress-labels">
            ${labels}
          </div>
        </div>
        <p class="skill-description">${escapeHTML(skill.description)}</p>
      </div>
    `;
  }).join("");
}

function renderToolbox() {
  const container = document.getElementById("toolbox-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.toolbox.map(tool => `
    <div class="tool-item" data-testid="tool-${tool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">
      <i class="${tool.icon}"></i>
      <span>${escapeHTML(tool.name)}</span>
    </div>
  `).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map((job, i) => `
    <div class="timeline-item${job.current ? ' current' : ''}" data-testid="job-${i}">
      <div class="timeline-marker"></div>
      <div class="timeline-date">${escapeHTML(job.date)}</div>
      <div class="timeline-details">
        <h3>${escapeHTML(job.title)}</h3>
        <p class="company">${escapeHTML(job.company)}</p>
        <p class="description">${escapeHTML(job.description)}</p>
      </div>
    </div>
  `).join("");
}

function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education.map((edu, i) => `
    <div class="timeline-item" data-testid="edu-${i}">
      <div class="timeline-marker"></div>
      <div class="timeline-date">${escapeHTML(edu.date)}</div>
      <div class="timeline-details">
        <h3>${escapeHTML(edu.title)}</h3>
        <p class="company">${escapeHTML(edu.institution)}</p>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, i) => `
    <div class="project-card" data-testid="project-${i}">
      <div class="project-info">
        <h3>${escapeHTML(proj.title)}</h3>
        <p>${escapeHTML(proj.description)}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="tag">${tag.icon ? `<i class="${tag.icon}"></i> ` : ''}${escapeHTML(tag.label)}</span>`).join("")}
        </div>
      </div>
      <div class="project-actions">
        ${proj.id ? `
        <a href="project.html?id=${encodeURIComponent(proj.id)}" class="btn-view btn-case-file" data-testid="view-case-${i}">
          <i class="fas fa-folder-open"></i> View Case File
        </a>` : ''}
        <a href="${proj.repoLink}" target="_blank" rel="noopener noreferrer" class="btn-view" data-testid="view-repo-${i}">
          <i class="fab fa-github"></i> View Repository
        </a>
      </div>
    </div>
  `).join("");
}

function renderHundredDays() {
  const data = PORTFOLIO_DATA.hundredDaysOfCode;

  const subtitle = document.getElementById("progression-subtitle");
  if (subtitle) subtitle.textContent = data.subtitle;

  const repoLink = document.getElementById("view-100days-repo");
  if (repoLink) repoLink.href = data.githubRepo;

  const phasesTable = document.getElementById("phases-table-body");
  if (phasesTable) {
    phasesTable.innerHTML = data.phases.map((phase, i) => {
      const meta = PHASE_STATUS_MAP[phase.status] || PHASE_STATUS_MAP["pending"];
      return `
        <div class="phase-row" data-testid="phase-${i + 1}">
          <span>${escapeHTML(phase.range)}</span>
          <span class="status ${phase.status}"><span class="status-dot ${meta.dot}"></span> ${meta.label}</span>
          <span>${escapeHTML(phase.focus)}</span>
        </div>
      `;
    }).join("");
  }

  const dayCards = document.getElementById("day-cards-list");
  if (dayCards) {
    dayCards.innerHTML = data.days.map((day, i) => `
      <div class="day-card" data-testid="day-${i}">
        <span class="day-number">${escapeHTML(day.number)}</span>
        <h4>${escapeHTML(day.title)}</h4>
        <p>${escapeHTML(day.description)}</p>
        <div class="day-tags">
          ${day.tags.map(t => `<span>${escapeHTML(t)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

function renderAffiliations() {
  const container = document.getElementById("affiliations-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.affiliations.map((aff, i) => `
    <div class="affiliation-card" data-testid="affiliation-${i}">
      <div class="affiliation-icon">
        <i class="${aff.icon}"></i>
      </div>
      <h3>${escapeHTML(aff.name)}</h3>
      <p class="member-since">${escapeHTML(aff.since)}</p>
      ${aff.verified ? '<span class="verified"><i class="fas fa-check-circle"></i> VERIFIED</span>' : ''}
    </div>
  `).join("");
}

function renderFooter() {
  const f = PORTFOLIO_DATA.footer;
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setText("footer-name", f.name);
  setText("footer-title", f.title);
  setText("footer-tagline", f.tagline);
  setText("footer-copyright", `Copyright © ${f.copyrightYear} ${f.name.split(" ")[0]}. All rights reserved.`);
}

function renderPortfolio() {
  renderSocialLinks();
  renderHero();
  renderProfileIntel();
  renderSkills();
  renderToolbox();
  renderExperience();
  renderEducation();
  renderProjects();
  renderHundredDays();
  renderAffiliations();
  renderFooter();

  document.dispatchEvent(new CustomEvent("portfolio:rendered"));
}

document.addEventListener("DOMContentLoaded", renderPortfolio);

// Copyright (c) 2026 Vinayak. All Rights Reserved.
