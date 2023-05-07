import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src={`https://www.googletagmanager/?with=${process.env.MY_GTAG}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `config-string${process.env.MY_GTAG}', {...};`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id='backdrop-root' />
        <div id='overlay-root' />
      </body>
    </Html>
  );
}
