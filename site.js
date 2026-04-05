function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme !== 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', nextTheme);
      applyTheme(nextTheme);
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const panel = document.querySelector('[data-mobile-panel]');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollProgress() {
  const bar = document.querySelector('[data-scroll-progress]');
  if (!bar) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const status = form.querySelector('[data-contact-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  const emailjsConfig = window.EMAILJS_CONFIG;

  if (!window.emailjs || !emailjsConfig?.publicKey || !emailjsConfig?.serviceId || !emailjsConfig?.templateMain) {
    if (status) status.textContent = 'Contact form is not configured yet. Please email me directly.';
    return;
  }

  window.emailjs.init({
    publicKey: emailjsConfig.publicKey
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      if (status) status.textContent = 'Please fill out your name, email, and message first.';
      return;
    }

    const templateParams = {
      name,
      from_name: name,
      user_name: name,
      to_name: 'Deekshant Gupta',
      email,
      from_email: email,
      to_email: email,
      reply_to: email,
      user_email: email,
      recipient: 'deekshant2003@gmail.com',
      title: `Portfolio inquiry from ${name}`,
      subject: `Portfolio inquiry from ${name}`,
      message,
      message_html: message.replace(/\n/g, '<br>'),
      time: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      if (status) status.textContent = 'Sending your message...';

      await window.emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateMain,
        templateParams
      );

      if (emailjsConfig.templateAuto) {
        try {
          await window.emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateAuto,
            templateParams
          );
        } catch (error) {
          console.warn('EmailJS auto-reply failed:', error);
        }
      }

      form.reset();
      if (status) status.textContent = 'Message sent successfully. I will get back to you soon.';
    } catch (error) {
      if (status) status.textContent = 'Message failed to send. Please try again or email me directly.';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Inquiry';
      }
    }
  });
}

async function initGithubProjects() {
  const grid = document.querySelector('[data-github-projects]');
  if (!grid) return;

  const username = grid.dataset.githubProjects;
  const status = document.querySelector('[data-github-projects-status]');

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) throw new Error('GitHub fetch failed');

    const repos = await response.json();
    const featured = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort((a, b) => {
        const rank = (repo) => {
          const hasHomepage = repo.homepage ? 8 : 0;
          const hasDescription = repo.description ? 6 : 0;
          const stars = (repo.stargazers_count || 0) * 7;
          const pushed = new Date(repo.pushed_at || repo.updated_at).getTime() / 1e11;
          return hasHomepage + hasDescription + stars + pushed;
        };
        return rank(b) - rank(a);
      })
      .slice(0, 6);

    grid.innerHTML = featured.map((repo) => `
      <article class="repo-card">
        <div class="split-meta">
          <span>${repo.language || 'Codebase'}</span>
          <span>${new Date(repo.updated_at).getFullYear()}</span>
        </div>
        <h3 class="card-title" style="font-size:1.15rem;margin-top:0.9rem">${repo.name}</h3>
        <p class="muted">${repo.description || 'Public repository from my GitHub profile.'}</p>
        <div class="chip-row" style="margin-top:1rem">
          <span class="chip">★ ${repo.stargazers_count}</span>
          <span class="chip">${repo.visibility}</span>
        </div>
        <div class="chip-row" style="margin-top:1rem">
          <a class="btn btn--ghost" style="padding:0.7rem 1rem" href="${repo.html_url}" target="_blank" rel="noopener">Source</a>
          ${repo.homepage ? `<a class="btn btn--ghost" style="padding:0.7rem 1rem" href="${repo.homepage}" target="_blank" rel="noopener">Live</a>` : ''}
        </div>
      </article>
    `).join('');

    if (status) {
      status.textContent = `Auto-synced from ${repos.filter((repo) => !repo.fork && !repo.archived).length} public repositories.`;
    }
  } catch (error) {
    if (status) status.textContent = 'GitHub archive unavailable right now.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollProgress();
  initContactForm();
  initGithubProjects();
});
