import { Html, Head, Main, NextScript } from 'next/document';
import rootStore from '@/store';

export default function Document() {
  const { uiStore } = rootStore;
  const pageLanguage = uiStore.pageLanguage;
  return (
    <Html lang={pageLanguage}>
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
