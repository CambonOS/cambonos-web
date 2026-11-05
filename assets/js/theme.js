const themeMenu = document.querySelector('.theme-menu');

if (themeMenu) {
  const choices = [...themeMenu.querySelectorAll('[data-theme-choice]')];
  let preference = 'system';

  try {
    preference = localStorage.getItem('cambonos-theme') || 'system';
  } catch {}

  if (!['system', 'light', 'dark'].includes(preference)) preference = 'system';

  const setTheme = (selected) => {
    if (selected === 'system') {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = selected;
    }

    choices.forEach((choice) => {
      choice.setAttribute('aria-pressed', String(choice.dataset.themeChoice === selected));
    });
  };

  setTheme(preference);

  choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      const selected = choice.dataset.themeChoice;

      try {
        localStorage.setItem('cambonos-theme', selected);
      } catch {}

      setTheme(selected);
      themeMenu.open = false;
      themeMenu.querySelector('summary').focus();
    });
  });

  document.addEventListener('click', (event) => {
    if (!themeMenu.contains(event.target)) themeMenu.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && themeMenu.open) {
      themeMenu.open = false;
      themeMenu.querySelector('summary').focus();
    }
  });
}

document.querySelectorAll('.language-switch').forEach((link) => {
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('cambonos-language', link.hreflang.split('-')[0]);
    } catch {}
  });
});