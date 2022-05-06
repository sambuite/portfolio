import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const themeMode = window.localStorage.getItem(THEME_KEY);

  //   if (
  //     themeMode === 'dark' ||
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem(THEME_KEY, 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem(THEME_KEY, 'light');
  //   }
  // }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
