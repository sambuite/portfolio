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
            Sou desenvolvedor de software, atuo profissionalmente desde 2020,
            meu foco inicial na carreira era me tornar um desenvolvedor
            front-end, e consegui no meu primeiro emprego desenvolver em ReactJs
            e aprender mais sobre React Native.{' '}
          </h2>
          <h2 className="text-h-2 xl:w-[40rem] mt-8 leading-10">
            No meu emprego mais recente, tive a oportunidade de fortalecer esses
            conhecimentos bem como aprender mais sobre outros tópicos como BFF,
            Storybook e testes automatizados, além de surgir novos interesses
            como por Arquitetura de Software, UX(User Experience), C# .NET e
            tudo relacionado a performance.
          </h2>
          <h2 className="text-h-2 xl:w-[40rem] mt-8 leading-10">
            Atualmente, como já tenho uma boa base de front-end e mobile, meu
            foco nos estudos é no back-end, venho estudando Node JS mas
            eventualmente pretendo aprender mais sobre C# e Ruby.
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
            JavaScript, TypeScript, ReactJs, React Native, TailwindCSS, Styled
            Components, Material UI, Storybook, Git, GraphQL, Express, NodeJs,
            Prisma, Jest
          </span>
        </div>
      </section>
      <Contact />
    </main>
  );
}
