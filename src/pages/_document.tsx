import { Html, Head, Main, NextScript } from 'next/document';
import rootStore from '@/store';

export default function Document() {
  const { uiStore } = rootStore;
  const pageLanguage = uiStore.pageLanguage;
  return (
    <Html lang={pageLanguage}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
