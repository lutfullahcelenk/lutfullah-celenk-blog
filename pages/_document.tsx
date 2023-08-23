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
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Rubik&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-gradient-to-b from-red-800 to-blue-400 dark:from-dark-default dark:to-dark-200 dark:text-white font-rubik">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
