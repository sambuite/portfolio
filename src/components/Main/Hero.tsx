import { ArrowDown } from 'phosphor-react';

export function Hero() {
  return (
    <section className="flex flex-col default-center mt-56 ">
      <div className="flex justify-between">
        <span className="text-h-1 whitespace-pre ">
          Olá, sou {'\n'}Murilo Sambuite.
        </span>
        <span className="h-fit self-end text-h-2 w-1/2">
          Um desenvolvedor frontend que busca criar interfaces precisas e
          performáticas.
        </span>
      </div>
      <a href="#" className="h-fit w-fit">
        <ArrowDown className="w-9 h-9 mt-32 " weight="bold" />
      </a>
    </section>
  );
}
