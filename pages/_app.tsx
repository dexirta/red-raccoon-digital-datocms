import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/shared/lib/router/router';
import ThemeColorChangeButton from '../components/ThemeColorChangeButton';
import '../styles/globals.css';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="absolute top-1 right-1">
        <ThemeColorChangeButton />
      </div>
      <div className="h-screen p-0 text-base text-center flex flex-wrap content-center">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MainApp;
