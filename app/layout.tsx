import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Applique `.dark` sur <html> avant la peinture initiale (anti-flash) :
 * choix persisté dans localStorage, sinon préférence système.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Layout racine : structure html/body, polices et thème. La locale réelle
 * est posée sur <html> par le layout `[lang]` (attribut mis à jour côté
 * client) ; « fr » sert de valeur par défaut (404 comprise).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
