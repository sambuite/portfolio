import Head from 'next/head';
import { HomeMain } from '../components/HomeMain';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Sou um desenvolvedor frontend. Aqui há uma aprensentação do que sei, minha experiência e como você pode me contatar."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor frontend. Aqui há uma aprensentação do que sei, minha experiência e como você pode me contatar."
        />
      </Head>
      <Layout title="Murilo Sambuite | Início">
        <HomeMain />
      </Layout>
    </>
  );
}
