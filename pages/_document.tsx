import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (() => {
              const storedTheme = localStorage.getItem("theme");
              const currentTheme = storedTheme ? storedTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
              if (currentTheme === "dark") {
                document.documentElement.classList.add("dark");
              }
              localStorage.setItem("theme", currentTheme);
            })()
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
