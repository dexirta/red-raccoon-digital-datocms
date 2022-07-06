import Document, { Head, Html, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="transition-colors duration-500 ease-in-out light:bg-gradient-to-b bg-gray-50 dark:bg-gradient-to-b from-raccoonred-lightest via-raccoonred-light to-raccoonred-dark dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MainDocument;
