import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
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
