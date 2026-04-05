/* ============================================
   DEEKSHANT GUPTA — PORTFOLIO JS
   ============================================ */

// ── Nav Active State ─────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .mobile-menu a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ── Mobile Menu ──────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  const toggleMenu = (forceState) => {
    const shouldOpen = typeof forceState === 'boolean'
      ? forceState
      : !mobileMenu.classList.contains('open');
    const isOpen = shouldOpen;

    mobileMenu.classList.toggle('open', shouldOpen);
    hamburger.setAttribute('aria-expanded', String(shouldOpen));
    mobileMenu.setAttribute('aria-hidden', String(!shouldOpen));

    hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : '';
    hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '';
    hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : '';
  };

  hamburger.addEventListener('click', () => {
    toggleMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleMenu(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) toggleMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMenu(false);
  });
}

// ── Scroll Reveal ────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay || 0) * 1000;
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  els.forEach(el => observer.observe(el));

  // Immediately reveal anything already in the viewport on load
  // (avoids elements above-the-fold being stuck invisible)
  setTimeout(() => {
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const delay = parseFloat(el.dataset.delay || 0) * 1000;
        setTimeout(() => el.classList.add('revealed'), delay);
      }
    });
  }, 50);
}

// ── Progress Bars ────────────────────────────
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
}

// ── Typewriter Effect ─────────────────────────
function typewriter(el, texts, speed = 80, pause = 1800) {
  let textIndex = 0, charIndex = 0, deleting = false;
  function tick() {
    const current = texts[textIndex];
    el.textContent = deleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && charIndex === current.length + 1) { delay = pause; deleting = true; }
    else if (deleting && charIndex < 0) { deleting = false; textIndex = (textIndex + 1) % texts.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
}

// ── Counter Animation ─────────────────────────
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  // For above-fold counters (hero stats), run after CSS animation completes
  // For below-fold counters, use IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.count));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => {
    const rect = c.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight;
    if (isAboveFold) {
      // Wait for the CSS fade-in animation to finish (longest delay is ~0.9s)
      setTimeout(() => animateCounter(c, parseInt(c.dataset.count)), 950);
    } else {
      observer.observe(c);
    }
  });
}

// ── Nav Scroll Behavior ───────────────────────
function initNavScroll() {
  // Nav is injected by components.js — wait for it
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    nav.style.background = window.scrollY > 20
      ? 'rgba(7, 9, 13, 0.97)'
      : 'rgba(7, 9, 13, 0.88)';
  });
}

// ── Contact Form ──────────────────────────────
// Note: contact.html handles its own submit logic inline.
// This legacy handler is kept only as a no-op fallback.
function initContactForm() {
  // contact.html manages its own form submission — nothing to do here
}

// ── Project Filter ────────────────────────────
function initProjectFilter() {
  const filters = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');
  if (!filters.length) return;
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.opacity = show ? '1' : '0.3';
        item.style.transform = show ? 'scale(1)' : 'scale(0.97)';
      });
    });
  });
}

// ── Skill Tooltip ─────────────────────────────
function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    const tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.textContent = el.dataset.tooltip;
    tip.style.cssText = `position:absolute;background:var(--surface-2);border:1px solid var(--border-bright);color:var(--text);font-family:var(--mono);font-size:0.65rem;padding:0.3rem 0.6rem;border-radius:4px;white-space:nowrap;pointer-events:none;opacity:0;transition:0.2s;z-index:100;letter-spacing:0.05em;`;
    el.style.position = 'relative';
    el.appendChild(tip);
    el.addEventListener('mouseenter', () => { tip.style.opacity = '1'; tip.style.bottom = 'calc(100% + 6px)'; tip.style.left = '50%'; tip.style.transform = 'translateX(-50%)'; });
    el.addEventListener('mouseleave', () => { tip.style.opacity = '0'; });
  });
}

// ── GitHub Activity Bar ──────────────────────
async function initGithubActivityBar() {
  const root = document.querySelector('[data-github-activity]');
  if (!root) return;

  const username = root.dataset.githubUser;
  if (!username) return;

  const dateFloor = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10);
  const totalReposEl = root.querySelector('[data-github-total-repos]');
  const commitsEl = root.querySelector('[data-github-commits]');
  const prsEl = root.querySelector('[data-github-prs]');
  const track = root.querySelector('[data-github-track]');
  const status = root.querySelector('[data-github-status]');
  const projectsBuiltEl = document.querySelector('[data-github-projects-built]');

  const renderFallback = () => {
    root.classList.add('is-fallback');
    if (status) status.textContent = 'Live GitHub stats unavailable right now';
  };

  try {
    const [profileResponse, reposResponse, commitsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers: { Accept: 'application/vnd.github+json' }
      }),
      fetch(`https://api.github.com/search/commits?q=author:${username}+committer-date:>=${dateFloor}&per_page=1`, {
        headers: { Accept: 'application/vnd.github+json' }
      })
    ]);

    if (!profileResponse.ok || !reposResponse.ok || !commitsResponse.ok) {
      throw new Error('GitHub API request failed');
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const commitsData = await commitsResponse.json();
    const recentCommits = commitsData.total_count ?? 0;
    const publicRepos = profile.public_repos ?? 0;
    const activePublicRepos = Array.isArray(repos)
      ? repos.filter((repo) => {
          if (repo.fork || repo.archived) return false;
          const pushedAt = new Date(repo.pushed_at || repo.updated_at).getTime();
          const daysSincePush = (Date.now() - pushedAt) / 86400000;
          return daysSincePush <= 180;
        }).length
      : 0;

    if (totalReposEl) totalReposEl.textContent = publicRepos;
    if (projectsBuiltEl) projectsBuiltEl.textContent = publicRepos;
    if (commitsEl) commitsEl.textContent = recentCommits;
    if (prsEl) prsEl.textContent = activePublicRepos;
    if (status) {
      status.textContent = publicRepos > 0
        ? `${recentCommits} public commits in the last 30 days across ${activePublicRepos} active public repos`
        : 'Tracking public GitHub activity from the last 30 days';
    }

    if (track) {
      const repoScore = Math.min(publicRepos / 24, 1);
      const commitScore = Math.min(recentCommits / 40, 1);
      const activeRepoScore = Math.min(activePublicRepos / 12, 1);

      track.style.setProperty('--segment-repos', `${0.9 + (repoScore * 1.15)}fr`);
      track.style.setProperty('--segment-commits', `${1 + (commitScore * 1.35)}fr`);
      track.style.setProperty('--segment-prs', `${0.8 + (activeRepoScore * 1.1)}fr`);
    }
  } catch (error) {
    renderFallback();
  }
}

// ── Init all ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMobileMenu();
  initReveal();
  initProgressBars();
  initCounters();
  initNavScroll();
  initContactForm();
  initProjectFilter();
  initTooltips();
  initGithubActivityBar();

  // Typewriter on hero if element exists
  const twEl = document.getElementById('typewriter');
  if (twEl) typewriter(twEl, ['Backend Engineer', 'AI / ML Specialist', 'Full-Stack Developer', 'System Architect']);
});
