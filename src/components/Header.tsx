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
    <header className="flex items-center text-zinc-900">
      <div className="flex w-full max-w-6xl mx-auto mt-14 justify-between">
        <span className="text-4xl font-bold">ms.</span>
        <nav className="self-end ">
          <a className="text-navigation" href="#">
            Projetos
          </a>
          <a className="text-navigation" href="#">
            Sobre
          </a>
          <a className="text-navigation" href="#">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
