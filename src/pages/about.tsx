import Head from 'next/head';
import { AboutMain } from '../components/AboutMain';
import { Layout } from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Informações sobre minha carreira atualmente, sobre mim e o que sei sobre frontend."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Informações sobre minha carreira atualmente, sobre mim e o que sei sobre frontend."
        />
      </Head>
      <Layout title="Murilo Sambuite | Sobre">
        <AboutMain />
      </Layout>
    </>
  );
}
