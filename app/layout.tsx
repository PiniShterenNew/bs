import type { Metadata, Viewport } from "next";
import { Heebo, IBM_Plex_Mono, Rubik, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo", display: "swap" });
const rubik = Rubik({ subsets: ["hebrew", "latin"], variable: "--font-rubik", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

const danaYad = localFont({
  src: [
    { path: "../public/fonts/dana-yad/DanaYad-Regular.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-dana-yad",
  display: "swap",
  fallback: ["cursive"],
});

export const metadata: Metadata = {
  title: "בנימין שטרן | תמיכה ב-Windows ובתוכנות",
  description: "אבחון ופתרון תקלות Windows ותוכנה, התקנות, גיבוי והעברת מידע בגובה העיניים.",
};

export const viewport: Viewport = {
  themeColor: "#080a0d",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${rubik.variable} ${danaYad.variable} ${space.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
