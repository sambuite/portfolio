import Head from 'next/head';
import { HomeMain } from '../components/HomeMain';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aprensentação dos projetos, experiência e informações para contato de Murilo Sambuite."
        />
        <meta
          property="og:description"
          content="Aprensentação dos projetos, experiência e informações para contato de Murilo Sambuite."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, ReactJs, React.js, NextJs, Next.js, TypeScript, NodeJs, Node.js, Portfolio, Frontend, Front-end, Projetos, Desenvolvedor Frontend, Dev Frontend, Frontend Developer, Currículo, Resume, Developer, Desenvolvedor, VSCode, Insomnia, Figma, WSL2, Git, TailwindCSS, Styled Components, Express, Prisma, Jest"
        />
      </Head>
      <Layout title="Murilo Sambuite | Início">
        <HomeMain />
      </Layout>
    </>
  );
}
