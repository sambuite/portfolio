import Link from 'next/link';
import { useRouter } from 'next/router';
import { List, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { CONTACTS_ID, HEADER_ID, THEME_KEY } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function Header() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(
    (typeof window !== 'undefined' &&
      (localStorage.getItem(THEME_KEY) as any)) ||
      'light',
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

  function toggleMenu() {
    if (typeof window === 'undefined') return;
    const menu = document.querySelector('#menu');
    menu?.classList.toggle('h-44');
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function menuResize() {
      const menu = document.querySelector('#menu');
      const window_size = window.innerWidth || document.body.clientWidth;
      if (window_size > 640) {
        menu?.classList.remove('h-44');
      }
    }

    window.addEventListener('resize', menuResize);
  }, []);

  return (
    <header
      id={HEADER_ID}
      className="flex flex-col items-center text-zinc-900 dark:text-zinc-100"
    >
      <div className="flex default-center items-center mt-5 lg:mt-14 justify-between">
        <span className="text-4xl font-bold">ms.</span>
        <div className="flex items-center self-end">
          <button type="button" className="w-8 h-8" onClick={toggleTheme}>
            {themeMode === 'dark' ? (
              <Sun className="w-7 lg:w-8 h-7 lg:h-8 mr-8 hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors" />
            ) : (
              <Moon className="w-7 lg:w-8 h-7 lg:h-8 mr-8 hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors" />
            )}
          </button>
          <button
            type="button"
            className="w-8 h-8 ml-4 block sm:hidden "
            onClick={toggleMenu}
          >
            <List className="w-7 h-7 active:text-indigo-700 dark:active:text-indigo-700 transition-colors" />
          </button>
          <nav className="hidden sm:flex justify-center items-center">
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

      <div
        id="menu"
        className="w-full h-0 transition-all ease-in duration-300 sm:hidden overflow-hidden"
      >
        <nav className="flex default-center h-0 mt-4 flex-col duration-300 ease-in sm:hidden">
          <span className="font-sans text-lg lg:text-xl pb-2 font-semibold text-zinc-900 dark:text-zinc-100 active:text-indigo-700 dark:active:text-indigo-700 transition-colors border-b-2 border-zinc-500 w-full">
            <Link href="/">Início</Link>
          </span>
          <span className="font-sans text-lg lg:text-xl pb-2 font-semibold mt-3 text-zinc-900 dark:text-zinc-100 active:text-indigo-700 dark:active:text-indigo-700 transition-colors flex flex-col relative group border-b-2 border-zinc-500 w-full">
            <Link href="/about">Sobre</Link>
          </span>
          <span
            className="font-sans text-lg lg:text-xl pb-2  font-semibold mt-3 text-zinc-900 dark:text-zinc-100 active:text-indigo-700 dark:active:text-indigo-700 transition-colors cursor-pointer border-b-2 border-zinc-500 w-full"
            onClick={() => {
              scrollToSection(CONTACTS_ID);
              toggleMenu();
            }}
          >
            Contato
          </span>
        </nav>
      </div>
    </header>
  );
}
