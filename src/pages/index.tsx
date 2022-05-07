import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeMain } from '../components/HomeMain';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murilo Sambuite | Início</title>
      </Head>
      <div>
        <Header />
        <HomeMain />
        <Footer />
      </div>
    </>
  );
}
