const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  let preference = 'system';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  try {
    preference = localStorage.getItem('cambonos-theme') || 'system';
  } catch {}

  if (!['system', 'light', 'dark'].includes(preference)) preference = 'system';

  const setTheme = () => {
    if (preference === 'system') {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = preference;
    }

    const isDark = preference === 'dark' || (preference === 'system' && systemTheme.matches);
    const label = isDark ? themeToggle.dataset.lightLabel : themeToggle.dataset.darkLabel;
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
  };

  setTheme();

  themeToggle.addEventListener('click', () => {
    const isDark = preference === 'dark' || (preference === 'system' && systemTheme.matches);
    preference = isDark ? 'light' : 'dark';

    try {
      localStorage.setItem('cambonos-theme', preference);
    } catch {}

    setTheme();
  });

  systemTheme.addEventListener('change', () => {
    if (preference === 'system') setTheme();
  });
}

document.querySelectorAll('.language-switch').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('cambonos-language', link.hreflang.split('-')[0]);
    } catch {}
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? menuToggle.dataset.closeLabel : menuToggle.dataset.openLabel);
    mainNav.classList.toggle('is-open', isOpen);
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mainNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.matchMedia('(min-width: 721px)').addEventListener('change', () => setMenuOpen(false));
}