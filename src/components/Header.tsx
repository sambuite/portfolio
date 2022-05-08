import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun } from 'phosphor-react';
import { useState } from 'react';
import { CONTACTS_ID, HEADER_ID, THEME_KEY } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function Header() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(
    (localStorage.getItem(THEME_KEY) as any) || 'light',
  );
  const { asPath } = useRouter();

  function toggleTheme() {
    if (themeMode === 'light') {
      localStorage.setItem(THEME_KEY, 'dark');
      document.documentElement.classList.add('dark');
      setThemeMode('dark');
    } else {
      localStorage.setItem(THEME_KEY, 'light');
      document.documentElement.classList.remove('dark');
      setThemeMode('light');
    }
  }

  return (
    <header
      id={HEADER_ID}
      className="flex items-center text-zinc-900 dark:text-zinc-100"
    >
      <div className="flex default-center mt-14 justify-between">
        <span className="text-4xl font-bold">ms.</span>
        <div className="flex items-center self-end">
          <button type="button" className="w-8 h-8" onClick={toggleTheme}>
            {themeMode === 'dark' ? (
              <Sun className="w-8 h-8 mr-8 hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors" />
            ) : (
              <Moon className="w-8 h-8 mr-8 hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors" />
            )}
          </button>
          <nav className="flex justify-center items-center">
            <span className="text-navigation flex flex-col justify-center items-center relative group">
              <Link href="/">Início</Link>
              {asPath === '/' && (
                <div className="rounded-full bg-zinc-900 dark:bg-zinc-100 w-2 h-2 flex absolute -bottom-3 group-hover:bg-indigo-700 transition-colors" />
              )}
            </span>
            <span className="text-navigation flex flex-col justify-center items-center relative group">
              <Link href="/about">Sobre</Link>
              {asPath === '/about' && (
                <div className="rounded-full bg-zinc-900 dark:bg-zinc-100 w-2 h-2 flex absolute -bottom-3 group-hover:bg-indigo-700 transition-colors" />
              )}
            </span>
            <span
              className="text-navigation cursor-pointer"
              onClick={() => scrollToSection(CONTACTS_ID)}
            >
              Contato
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
