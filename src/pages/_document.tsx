import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta
          property="og:description"
          content="Desenvolver Front-end | ReactJs e TypeScript"
        />
        <meta
          property="og:title"
          content="Portfolio | Murilo Sambuite - Frontend developer"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta name="author" content="Murilo Sambuite" />
        <meta name="theme-color" content="#4338ca" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
