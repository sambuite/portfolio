import Head from 'next/head';
import { BackToTopButton } from './BackToTopButton';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
      <BackToTopButton />
    </>
  );
}
