import Image from 'next/image';
import meImg from '../../assets/me.jpeg';
import { Contact } from '../Contact';

export function AboutMain() {
  return (
    <main className="default-center mt-80" data-aos="fade-in">
      <section className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
        <div className="mb-36">
          <h1 className="text-h-1 xl:w-[26rem]">
            Oi, sou Murilo Sambuite, desenvolvedor frontend.
          </h1>
          <h2 className="text-h-2 xl:w-[40rem] mt-16 leading-10">
            Tenho aprendido programação por pouco mais de dois anos. Sempre
            foquei em frontend com ReactJs e Typescript. Ultimamente procuro
            estudar sobre backend buscando ser um profissional mais completo -
            fullstack.{' '}
          </h2>
          <h2 className="text-h-2 xl:w-[40rem] mt-8 leading-10">
            Há alguns meses atrás sai do meu primeiro emprego que durou um ano ⏤
            atualmente, estou procurando por uma oportunidade de demonstrar tudo
            que aprendi e estou aprendendo.
          </h2>
        </div>
        <div className="w-full xl:w-[27rem] h-[37rem] mb-20 xl:mb-0 bg-zinc-400 relative">
          <Image
            src={meImg}
            alt={`Imagem de Murilo`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      <section
        className="border-b-[1.5px] border-zinc-600 pb-28"
        data-aos="fade-up"
      >
        <div className="flex items-center">
          <h6 className="text-body underline underline-offset-2 w-80">
            Principais ferramentas
          </h6>
          <span className="w-[27rem] font-body">
            VSCode, Insomnia, Figma, WSL2
          </span>
        </div>
        <div className="flex items-center mt-28">
          <h6 className="text-body underline underline-offset-2 w-80">
            Principais tecnologias
          </h6>
          <span className="w-[27rem] font-body">
            JavaScript, TypeScript, Git, ReactJs, React Native, TailwindCSS,
            Styled Components, Express, NodeJs, Prisma, Jest
          </span>
        </div>
      </section>
      <Contact />
    </main>
  );
}
