export function Footer() {
  return (
    <footer
      className="flex items-center text-zinc-900 mb-20"
      data-aos="fade-up"
    >
      <div className="flex default-center mt-14 justify-between">
        <span className="text-xl text-indigo-700 font-semibold">
          Murilo Sambuite - 2022
        </span>
        <nav className="self-end ">
          <a
            className="text-navigation"
            href="https://github.com/sambuite"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="text-navigation"
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
