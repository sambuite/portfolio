import Link from 'next/link';
import { useRouter } from 'next/router';
import { List, Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { CONTACTS_ID, HEADER_ID } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function Header() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    document.documentElement.classList.add('dark');
    return 'dark';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [changeHeaderBgColor, setChangeHeaderBgColor] = useState(false);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const [lastScroll, setLastScroll] = useState(0);

  const { asPath } = useRouter();

  function toggleTheme() {
    if (themeMode === 'light') {
      document.documentElement.classList.add('dark');
      setThemeMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeMode('light');
    }
  }

  function toggleMenu() {
    setMenuOpen((old) => !old);
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

    function changeHeaderBgColor() {
      if (window.scrollY >= 100) {
        setChangeHeaderBgColor(true);
      } else {
        setChangeHeaderBgColor(false);
      }
    }

    function handleScrollDir() {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) setMenuOpen(false);

      if (currentScroll > lastScroll && !(scrollDir === 'down')) {
        setScrollDir('down');
      } else if (currentScroll < lastScroll && scrollDir === 'down') {
        setScrollDir('up');
      }
      setLastScroll(currentScroll);
    }

    window.addEventListener('resize', menuResize);

    window.addEventListener('scroll', () => {
      changeHeaderBgColor();
      handleScrollDir();
    });
  }, [lastScroll, scrollDir]);

  return (
    <header
      id={HEADER_ID}
      className={
        'fixed w-full top-0 py-7 lg:pt-7 lg:py-7 z-50 flex flex-col items-center justify-center pt-5 transition-all ' +
        (changeHeaderBgColor
          ? 'bg-zinc-900 dark:bg-zinc-800 text-zinc-100  '
          : '') +
        (scrollDir === 'down' ? '-translate-y-full' : '')
      }
    >
      <div
        id="content-area"
        className="flex default-center items-center justify-between"
      >
        <span className="text-4xl font-bold">ms.</span>
        <div className="flex items-center self-end">
          <button
            type="button"
            className="w-8 h-8"
            aria-label="Alternar entre tema"
            onClick={toggleTheme}
          >
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
            onBlurCapture={toggleMenu}
          >
            <List className="w-7 h-7 active:text-indigo-700 dark:active:text-indigo-700 transition-colors" />
          </button>
          <nav className="hidden sm:flex justify-center items-center">
            <span className="text-navigation flex flex-col justify-center items-center relative group">
              <Link href="/">Início</Link>
              {asPath === '/' && (
                <div
                  className={
                    'rounded-full bg-zinc-900 dark:bg-zinc-100 w-[0.3rem] h-[0.3rem] flex absolute -bottom-3 group-hover:bg-indigo-700 transition-colors ' +
                    (changeHeaderBgColor ? 'bg-zinc-100' : '')
                  }
                />
              )}
            </span>
            <span className="text-navigation flex flex-col justify-center items-center relative group">
              <Link href="/about">Sobre</Link>
              {asPath === '/about' && (
                <div
                  className={
                    'rounded-full bg-zinc-900 dark:bg-zinc-100 w-[0.3rem] h-[0.3rem] flex absolute -bottom-3 group-hover:bg-indigo-700 transition-colors ' +
                    (changeHeaderBgColor ? 'bg-zinc-100' : '')
                  }
                />
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
        className={
          (menuOpen ? 'h-44' : 'h-0') +
          ' w-full transition-all ease-in duration-300 sm:hidden overflow-hidden ' +
          (changeHeaderBgColor
            ? 'bg-zinc-900 dark:bg-zinc-800'
            : 'bg-zinc-100 dark:bg-zinc-900')
        }
      >
        <nav
          className={
            (menuOpen ? 'h-44' : 'h-0') +
            ' flex default-center h-0 mt-4 flex-col duration-300 ease-in sm:hidden text-zinc-900 dark:text-zinc-100 ' +
            (changeHeaderBgColor ? 'text-zinc-100 ' : '')
          }
        >
          <span className="font-sans text-lg lg:text-xl pb-2 font-semibold active:text-indigo-700 dark:active:text-indigo-700 transition-colors border-b-2 border-zinc-500 w-full">
            <Link href="/">Início</Link>
          </span>
          <span className="font-sans text-lg lg:text-xl pb-2 font-semibold mt-3 active:text-indigo-700 dark:active:text-indigo-700 transition-colors flex flex-col relative group border-b-2 border-zinc-500 w-full">
            <Link href="/about">Sobre</Link>
          </span>
          <span
            className="font-sans text-lg lg:text-xl pb-2  font-semibold mt-3 active:text-indigo-700 dark:active:text-indigo-700 transition-colors cursor-pointer border-b-2 border-zinc-500 w-full"
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
