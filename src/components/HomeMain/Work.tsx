export function Work() {
  return (
    <div
      className="default-center mt-28 pb-28 border-b-[1.5px] border-zinc-600 dark:border-zinc-400 font-body"
      data-aos="fade-up"
    >
      <ol className="relative border-l border-zinc-200 dark:border-zinc-800">
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-1.5 -left-1.5 border border-zinc-300 dark:border-zinc-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-700">
            Setembro 2019 - Dezembro 2021
          </time>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {"Love's Delivery"}
          </h3>
          <p className="text-base font-normal text-zinc-600 dark:text-zinc-400 mt-2">
            - Responsável pelo desenvolvimento de três dashboards e um
            aplicativo mobile para um sistema de delivery.
          </p>
          <p className="text-base font-normal text-zinc-600 dark:text-zinc-400 mt-2">
            - Desenvolvimento web e mobile com ReactJs e React Native,
            respectivamente, - com Typescript - utilização do apex-charts para
            gráficos, styled-components - através de um design system - para
            estilização da aplicação e o consumo da API GraphQL com Apollo
            Client.
          </p>
        </li>
      </ol>
    </div>
  );
}
