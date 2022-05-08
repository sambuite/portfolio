import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  title: string;
  children: React.ReactElement;
}

export function Layout({ title, children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in',
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header />
        {React.cloneElement(children, { 'data-aos': 'fade-in' })}
        <Footer />
      </div>
      {/* <BackToTopButton /> */}
    </>
  );
}
