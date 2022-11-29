import Head from 'next/head';
import { HomeMain } from '../components/HomeMain';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Me chamo Murilo Sambuite, sou um desenvolvedor de software. Foco em criar aplicações modernas, performáticas e responsivas, seguindo as melhores práticas e com a melhor experiência de usuário possível. Utilizo principalmente React Js, NodeJS e TypeScript no desenvolvimento."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReactJs, React.js, NextJs, Next.js, TypeScript, NodeJs, Node.js, Portfolio, Frontend, Front-end, Backend, Back-end, Projetos, Desenvolvedor Frontend, Dev Frontend, Frontend Developer, Desenvolvedor Front-end, Dev Front-end, Front-end Developer, Desenvolvedor Backend, Dev Backend, Backend Developer, Desenvolvedor Back-end, Dev Back-end, Back-end Developer, Currículo, Resume, Developer, Desenvolvedor, VSCode, Insomnia, Figma, WSL2, Git, TailwindCSS, Styled Components, Express, Prisma, Jest"
        />
      </Head>
      <Layout title="Portfolio | Murilo Sambuite - Início">
        <HomeMain />
      </Layout>
    </>
  );
}
