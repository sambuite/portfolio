import Head from 'next/head';
import { AboutMain } from '../components/AboutMain';
import { Layout } from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Informações sobre a carreira, experiência e conhecimento em ferramentas e tecnologias de Murilo Sambuite."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReactJs, React.js, NextJs, Next.js, TypeScript, NodeJs, Node.js, Portfolio, Frontend, Front-end, Projetos, Desenvolvedor Frontend, Dev Frontend, Frontend Developer, Backend, Back-end, Desenvolvedor Backend, Dev Backend, Backend Developer, Software Developer, Desenvolvedor de Software, Currículo, Resume, Backend, Back-end, Developer, Desenvolvedor, VSCode, Insomnia, Figma, WSL2, Git, TailwindCSS, Styled Components, Express, Prisma, Jest"
        />
      </Head>
      <Layout title="Portfolio | Murilo Sambuite - Sobre">
        <AboutMain />
      </Layout>
    </>
  );
}
