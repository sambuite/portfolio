export function Footer() {
  return (
    <footer className="flex items-center text-zinc-900 mb-20">
      <div className="flex w-full max-w-6xl mx-auto mt-14 justify-between">
        <span className="text-xl text-indigo-700 font-semibold">
          Murilo Sambuite - 2022
        </span>
        <nav className="self-end ">
          <a className="text-xl font-semibold ml-8" href="#">
            Github
          </a>
          <a className="text-xl font-semibold ml-8" href="#">
            Linkedin
          </a>
        </nav>
      </div>
    </footer>
  );
}
