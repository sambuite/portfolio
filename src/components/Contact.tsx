import { ArrowRight } from 'phosphor-react';
import { CONTACTS_ID } from '../utils/constants';

export function Contact() {
  return (
    <div id={CONTACTS_ID} className="default-center flex my-28">
      <div className="flex flex-col items-start w-5/12">
        <h2 className="font-sans font-normal text-3xl text-zinc-900">
          Não posso esperar para responder
        </h2>
        <h2 className="flex items-center font-sans font-normal text-3xl text-zinc-900">
          ao seu próximo projeto
          <ArrowRight className="w-7 h-7 ml-2 mt-1" weight="bold" />
        </h2>
      </div>
      <div className="flex flex-col mx-auto">
        <h2 className="font-sans font-normal text-3xl text-zinc-900">
          murilosambuite@gmail.com
        </h2>
        <a
          href="https://drive.google.com/file/d/1an9EGrvi1uYOwy5liMp-ACsJzf5Bjkrn/view"
          target="_blank"
          className="font-body font-normal text-lg text-zinc-900 mt-7 hover:underline underline-offset-2"
          rel="noreferrer"
        >
          Ver currículo
        </a>
      </div>
    </div>
  );
}
