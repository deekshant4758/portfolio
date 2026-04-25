// /* ============================================
//    SHARED NAV + FOOTER INJECTION
//    ============================================ */

// const NAV_HTML = `
// <nav class="nav">
//   <div class="nav__inner">
//     <a href="index.html" class="nav__logo">
//       <span>//</span> dg.dev
//     </a>
//     <div class="nav__links">
//       <a href="index.html">Home</a>
//       <a href="projects.html">Projects</a>
//       <a href="experience.html">Experience</a>
//       <a href="skills.html">Skills</a>
//       <a href="contact.html">Contact</a>
//     </div>
//     <a href="assets/resume.pdf" target="_blank" class="nav__resume">Resume ↗</a>
//     <button class="nav__hamburger" id="hamburger" aria-label="Menu">
//       <span></span><span></span><span></span>
//     </button>
//   </div>
// </nav>
// <div class="mobile-menu" id="mobileMenu">
//   <a href="index.html">Home</a>
//   <a href="projects.html">Projects</a>
//   <a href="experience.html">Experience</a>
//   <a href="skills.html">Skills</a>
//   <a href="contact.html">Contact</a>
//   <a href="assets/resume.pdf" target="_blank" style="color:var(--accent)">Resume ↗</a>
// </div>
// `;

// const FOOTER_HTML = `
// <footer>
//   <div class="footer-inner">
//     <p class="footer-copy">© 2025 Deekshant Gupta — Built with precision</p>
//     <div class="footer-links">
//       <a href="https://linkedin.com/in/deekshantgupta" target="_blank">LinkedIn</a>
//       <a href="https://github.com/deekshantgupta" target="_blank">GitHub</a>
//       <a href="https://leetcode.com/deekshantgupta" target="_blank">LeetCode</a>
//       <a href="mailto:deekshant2003@gmail.com">Email</a>
//     </div>
//   </div>
// </footer>
// `;

// function injectComponents() {
//   const navPlaceholder = document.getElementById('nav-placeholder');
//   if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

//   const footerPlaceholder = document.getElementById('footer-placeholder');
//   if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
// }

// // Run immediately if DOM is ready, otherwise wait
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', injectComponents);
// } else {
//   injectComponents();
// }