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

function renderNav() {
  const social = PORTFOLIO_DATA.social;
  const navLinks = document.getElementById("nav-social-links");
  if (navLinks) {
    navLinks.innerHTML = `
      <a href="${social.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="${social.googleDev}" target="_blank" rel="noopener noreferrer" aria-label="Google Developer"><i class="fab fa-google"></i></a>
    `;
  }
}

function renderFooter() {
  const f = PORTFOLIO_DATA.footer;
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText("footer-name", f.name);
  setText("footer-title", f.title);
  setText("footer-copyright", `Copyright © ${f.copyrightYear} ${f.name.split(" ")[0]}. All rights reserved.`);
}

function renderDevlog() {
  const data = PORTFOLIO_DATA.hundredDaysOfCode;

  document.getElementById("devlog-subtitle").textContent = data.subtitle;
  document.getElementById("devlog-repo-link").href = data.githubRepo;

  const phasesTable = document.getElementById("phases-table-body");
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

  const total = data.days.length;
  document.getElementById("devlog-progress-summary").innerHTML =
    `<i class="fas fa-code-branch"></i> ${total} day${total === 1 ? '' : 's'} logged so far`;

  document.getElementById("day-cards-list").innerHTML = data.days.map((day, i) => `
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

function initDevlog() {
  renderNav();
  renderFooter();
  renderDevlog();
  document.dispatchEvent(new CustomEvent("portfolio:rendered"));
}

document.addEventListener("DOMContentLoaded", initDevlog);
