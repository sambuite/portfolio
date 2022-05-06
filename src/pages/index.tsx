import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murilo Sambuite | Início</title>
      </Head>
      <div>
        <Header />
        <main className="flex max-h-screen h-screen"></main>
        <Footer />
      </div>
    </>
  );
}
