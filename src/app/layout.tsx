import type { Metadata } from "next";
import { Inter, Fira_Code, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cameron Zollinger | z011y",
  description: "Cameron Zollinger's website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldUseDark = theme === 'dark' || (!theme && systemPrefersDark);
                  
                  if (shouldUseDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  // Ignore errors during SSR
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} ${crimsonPro.variable} bg-white text-black antialiased dark:bg-black dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
