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

// True if a narrative field is still the untouched placeholder text
function isPlaceholder(str) {
  return typeof str === "string" && str.trim().startsWith("REPLACE ME");
}

function buildVisual(proj) {
  if (proj.image) {
    return `<div class="cf-visual cf-visual-image"><img src="${proj.image}" alt="${escapeHTML(proj.title)} screenshot" loading="lazy"></div>`;
  }
  return `
    <div class="cf-visual cf-visual-terminal">
      <div class="code-block">
        <div class="code-header">
          <span class="code-dot red"></span>
          <span class="code-dot yellow"></span>
          <span class="code-dot green"></span>
          <span class="code-filename">${proj.id}.py</span>
        </div>
        <pre class="code-content"><code><span class="keyword">class</span> <span class="class-name">${escapeHTML(proj.title.replace(/[^a-zA-Z0-9]/g, ""))}</span>:
    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="param">self</span>):
        <span class="param">self</span>.<span class="attr">stack</span> = ${JSON.stringify(proj.stack || [])}
        <span class="param">self</span>.<span class="attr">status</span> = <span class="string">"Deployed"</span></code></pre>
      </div>
    </div>
  `;
}

function buildSection(title, bodyHTML) {
  return `
    <section class="cf-section">
      <h2>${escapeHTML(title)}</h2>
      ${bodyHTML}
    </section>
  `;
}

function renderCaseFile(proj) {
  document.title = `${proj.title} | Case File | ${PORTFOLIO_DATA.footer.name}`;

  const chips = (proj.stack && proj.stack.length ? proj.stack : proj.tags.map(t => t.label))
    .map(s => `<span class="tag">${escapeHTML(s)}</span>`).join("");

  const metaBits = [];
  if (proj.year) metaBits.push(`<span><i class="fas fa-calendar"></i> ${escapeHTML(proj.year)}</span>`);
  if (proj.role) metaBits.push(`<span><i class="fas fa-user-shield"></i> ${escapeHTML(proj.role)}</span>`);

  let sections = "";
  if (proj.problem && !isPlaceholder(proj.problem)) {
    sections += buildSection("The Brief", `<p>${escapeHTML(proj.problem)}</p>`);
  }
  if (proj.approach && proj.approach.length && !proj.approach.every(isPlaceholder)) {
    const items = proj.approach.filter(a => !isPlaceholder(a)).map(a => `<li>${escapeHTML(a)}</li>`).join("");
    sections += buildSection("Approach", `<ul class="cf-list">${items}</ul>`);
  }
  if (proj.challenges && !isPlaceholder(proj.challenges)) {
    sections += buildSection("Challenges", `<p>${escapeHTML(proj.challenges)}</p>`);
  }
  if (proj.outcome && !isPlaceholder(proj.outcome)) {
    sections += buildSection("Outcome", `<p>${escapeHTML(proj.outcome)}</p>`);
  }
  if (proj.learnings && proj.learnings.length && !proj.learnings.every(isPlaceholder)) {
    const items = proj.learnings.filter(a => !isPlaceholder(a)).map(a => `<li>${escapeHTML(a)}</li>`).join("");
    sections += buildSection("Key Takeaways", `<ul class="cf-list">${items}</ul>`);
  }

  if (!sections) {
    sections = `<p class="cf-empty-note">This case file doesn't have its story written up yet — add problem/approach/challenges/outcome details in data.js to fill this in.</p>`;
  }

  const actions = [];
  if (proj.repoLink) {
    actions.push(`<a href="${proj.repoLink}" target="_blank" rel="noopener noreferrer" class="btn-view btn-case-file"><i class="fab fa-github"></i> View Repository</a>`);
  }
  if (proj.demoLink) {
    actions.push(`<a href="${proj.demoLink}" target="_blank" rel="noopener noreferrer" class="btn-view"><i class="fas fa-play"></i> Live Demo</a>`);
  }

  document.getElementById("case-file-content").innerHTML = `
    <div class="section-header">
      <span class="section-number">CASE_FILE //</span>
      <span class="section-title">${escapeHTML(proj.id)}</span>
    </div>
    <h1 class="cf-title">${escapeHTML(proj.title)}</h1>
    <p class="cf-tagline">${escapeHTML(proj.description)}</p>
    <div class="cf-meta">${metaBits.join("")}</div>
    <div class="cf-stack">${chips}</div>

    ${buildVisual(proj)}

    <div class="cf-body">${sections}</div>

    <div class="cf-actions">${actions.join("")}</div>
  `;
}

function initCaseFile() {
  renderNav();
  renderFooter();

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const proj = (PORTFOLIO_DATA.projects || []).find(p => p.id === id);

  if (proj) {
    renderCaseFile(proj);
  } else {
    document.getElementById("case-file-content").style.display = "none";
    document.getElementById("case-file-not-found").style.display = "block";
  }

  document.dispatchEvent(new CustomEvent("portfolio:rendered"));
}

document.addEventListener("DOMContentLoaded", initCaseFile);
