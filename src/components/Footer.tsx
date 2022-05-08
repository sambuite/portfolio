export function Footer() {
  return (
    <footer className="flex items-center justify-center text-zinc-900 mb-20">
      <div className="flex default-center items-center justify-center mt-14 xl:justify-between">
        <span className="text-lg xl:text-xl text-indigo-700 font-semibold">
          Murilo Sambuite - 2022
        </span>
        <nav>
          <a
            className="text-navigation text-zinc-900 dark:text-zinc-100"
            href="https://github.com/sambuite"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="text-navigation text-zinc-900 dark:text-zinc-100"
            href="https://www.linkedin.com/in/murilosambuite/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
