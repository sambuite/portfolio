import Link from 'next/link';
import { CONTACTS_ID, HEADER_ID, PROJECTS_ID } from '../utils/constants';
import { scrollToSection } from '../utils/scrollToSection';

export function Header() {
  // function toggleTheme() {
  //   const themeMode = localStorage.getItem(THEME_KEY);

  //   if (themeMode === 'light') {
  //     localStorage.setItem(THEME_KEY, 'dark');
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     localStorage.setItem(THEME_KEY, 'light');
  //     document.documentElement.classList.remove('dark');
  //   }
  // }

  return (
    <header id={HEADER_ID} className="flex items-center text-zinc-900">
      <div className="flex default-center mt-14 justify-between">
        <span className="text-4xl font-bold">ms.</span>
        <nav className="self-end ">
          <a className="text-navigation">
            <Link href="/">Início</Link>
          </a>
          <a className="text-navigation">
            <Link href="/about">Sobre</Link>
          </a>
          <a
            className="text-navigation cursor-pointer"
            onClick={() => scrollToSection(PROJECTS_ID)}
          >
            Projetos
          </a>
          <a
            className="text-navigation cursor-pointer"
            onClick={() => scrollToSection(CONTACTS_ID)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
