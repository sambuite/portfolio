import Link from 'next/link';
import { useRouter } from 'next/router';
import { CONTACTS_ID, HEADER_ID } from '../utils/constants';
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

  const { asPath } = useRouter();

  return (
    <header
      id={HEADER_ID}
      className="flex items-center text-zinc-900"
      data-aos={asPath === '/' ? 'fade-in' : undefined}
    >
      <div className="flex default-center mt-14 justify-between">
        <span className="text-4xl font-bold">ms.</span>
        <nav className="self-end ">
          <span className="text-navigation">
            <Link href="/">Início</Link>
          </span>
          <span className="text-navigation">
            <Link href="/about">Sobre</Link>
          </span>
          <span
            className="text-navigation cursor-pointer"
            onClick={() => scrollToSection(CONTACTS_ID)}
          >
            Contato
          </span>
        </nav>
      </div>
    </header>
  );
}
