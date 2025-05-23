import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-apple-touch.png" />
        <link rel="icon" href="/icons/icon-32.png" />
        
        <link rel="manifest" href="/manifest.json" />
        
        <meta name="description" content="Expanding Horizons - One Project at a Time. Creative portfolio showcasing innovative projects and technical skills." />
        <meta name="theme-color" content="#6366f1" />
      </Head>
      <body className="antialiased font-nunito">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
