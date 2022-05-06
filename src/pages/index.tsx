import Head from 'next/head';

export default function Home() {
  const THEME_KEY = '@murilosambuite:theme';
  const themeMode = localStorage.getItem(THEME_KEY);

  if (
    themeMode === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(THEME_KEY, 'light');
  }

  return (
    <div>
      <Head>
        <title>Murilo Sambuite | Home</title>
        <meta name="description" content="Murilo Sambuite's home page" />
      </Head>

      <main>
        <span>Hello</span>
      </main>
    </div>
  );
}
