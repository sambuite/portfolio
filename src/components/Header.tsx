import { THEME_KEY } from '../utils/constants';

export function Header() {
  function toggleTheme() {
    const themeMode = localStorage.getItem(THEME_KEY);

    if (themeMode === 'light') {
      localStorage.setItem(THEME_KEY, 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem(THEME_KEY, 'light');
      document.documentElement.classList.remove('dark');
    }
  }

  return <div />;
}
