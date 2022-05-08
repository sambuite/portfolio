import { ArrowDown, ArrowRight } from 'phosphor-react';
import { CONTACTS_ID } from '../utils/constants';

export function Contact() {
  return (
    <div
      id={CONTACTS_ID}
      className="default-center flex flex-col xl:flex-row my-28"
      data-aos="fade-up"
    >
      <div className="hidden xl:flex flex-col items-start w-5/12">
        <h2 className=" font-sans font-normal text-3xl text-zinc-900 dark:text-zinc-100">
          Não posso esperar para responder
        </h2>
        <h2 className="flex items-center font-sans font-normal text-3xl text-zinc-900 dark:text-zinc-100">
          ao seu próximo projeto
          <ArrowRight className="w-7 h-7 ml-2 mt-1" weight="bold" />
        </h2>
      </div>
      <div className="xl:hidden flex flex-col items-center text-center">
        <h2 className=" font-sans font-normal text-3xl text-zinc-900 dark:text-zinc-100">
          Não posso esperar para responder ao seu próximo projeto
        </h2>
        <ArrowDown className="w-7 h-7 mt-5" weight="bold" />
      </div>
      <div className="flex flex-col items-center xl:items-start mx-auto mt-10 xl:mt-0">
        <h2 className="font-sans font-normal text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-100">
          murilosambuite@gmail.com
        </h2>
        <a
          href="https://drive.google.com/file/d/1an9EGrvi1uYOwy5liMp-ACsJzf5Bjkrn/view"
          target="_blank"
          className="font-body font-normal text-lg text-zinc-900 dark:text-zinc-100 mt-7 underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-700 transition-colors"
          rel="noreferrer"
        >
          Ver currículo
        </a>
      </div>
    </div>
  );
}
