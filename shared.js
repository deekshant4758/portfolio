/* ============================================
   SHARED NAV + FOOTER INJECTION
   ============================================ */

const currentYear = new Date().getFullYear();

const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo" aria-label="Deekshant Gupta home">
      <span>//</span> dg.dev
    </a>
    <div class="nav__links">
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="experience.html">Experience</a>
      <a href="skills.html">Skills</a>
      <a href="contact.html">Contact</a>
    </div>
    <a href="assets/resume.pdf" target="_blank" rel="noopener" class="nav__resume">Resume ↗</a>
    <button class="nav__hamburger" id="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <a href="index.html">Home</a>
  <a href="projects.html">Projects</a>
  <a href="experience.html">Experience</a>
  <a href="skills.html">Skills</a>
  <a href="contact.html">Contact</a>
  <a href="assets/resume.pdf" target="_blank" rel="noopener" style="color:var(--accent)">Resume ↗</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <p class="footer-copy">© ${currentYear} Deekshant Gupta · Built with precision</p>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/deekshant-gupta-986774202/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/deekshant4758" target="_blank" rel="noopener">GitHub</a>
      <a href="https://leetcode.com/u/deekshant0_3/" target="_blank" rel="noopener">LeetCode</a>
      <a href="mailto:deekshant2003@gmail.com">Email</a>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectComponents);
} else {
  injectComponents();
}
