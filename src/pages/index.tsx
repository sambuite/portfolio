import Head from 'next/head';
import { HomeMain } from '../components/HomeMain';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Me chamo Murilo Sambuite, sou um desenvolvedor frontend. Foco em criar aplicações modernas, performáticas e responsivas, seguindo as melhores práticas e com a melhor experiência de usuário possível. Utilizo principalmente React Js e TypeScript no desenvolvimento."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReactJs, React.js, NextJs, Next.js, TypeScript, NodeJs, Node.js, Portfolio, Frontend, Front-end, Projetos, Desenvolvedor Frontend, Dev Frontend, Frontend Developer, Currículo, Resume, Developer, Desenvolvedor, VSCode, Insomnia, Figma, WSL2, Git, TailwindCSS, Styled Components, Express, Prisma, Jest"
        />
      </Head>
      <Layout title="Portfolio | Murilo Sambuite - Início">
        <HomeMain />
      </Layout>
    </>
  );
}
