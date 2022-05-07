import Head from 'next/head';
import { AboutMain } from '../components/AboutMain';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>Murilo Sambuite | Sobre</title>
      </Head>
      <div>
        <Header />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
}
