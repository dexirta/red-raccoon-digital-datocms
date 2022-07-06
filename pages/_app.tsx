import { LocalSwitcher } from '@components/LocalSwitcher/LocalSwitcher';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import '../styles/globals.css';

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="absolute top-1 right-1">
        <div className="flex">
          <LocalSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
      <div className="h-screen p-0 text-base text-center flex flex-wrap content-center">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MainApp;
