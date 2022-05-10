import { ArrowDown } from 'phosphor-react';
import { PROJECTS_ID } from '../../utils/constants';
import { scrollToSection } from '../../utils/scrollToSection';

export function Hero() {
  return (
    <section
      className="flex flex-col default-center mt-40 lg:mt-80"
      data-aos="fade-in"
    >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <h1 className="text-h-1 whitespace-pre">
          Olá, sou {'\n'}Murilo Sambuite.
        </h1>
        <h2 className="h-fit self-end text-h-2 mt-11 xl:mt-0 lg:w-1/2">
          Um desenvolvedor frontend que busca criar interfaces precisas e
          performáticas.
        </h2>
      </div>
      <button
        type="button"
        onClick={() => scrollToSection(PROJECTS_ID)}
        aria-label="Ir para próxima seção"
        className="h-fit w-fit cursor-pointer"
      >
        <ArrowDown className="w-9 h-9 mt-32 " weight="bold" />
      </button>
    </section>
  );
}
