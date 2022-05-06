import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Murilo Sambuite | Início</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  );
}
