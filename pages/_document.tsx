/* eslint-disable @next/next/no-title-in-document-head */
//@ts-ignore
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Kaushan+Script&family=Nunito:ital,wght@0,200;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Lutfullah Blog</title>
      </Head>
      <body className="bg-gradient-to-r from-green-default to-blue-500 dark:from-dark-200 dark:to-dark-100 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
