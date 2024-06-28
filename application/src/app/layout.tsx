import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/src/features/common/components/Footer";
import { Header } from "@/src/features/common/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className}  min-h-[100vh]`}>
        {/* とりあえずshadcn-uiのデフォルトで*/}
        <Header src="https://github.com/shadcn.png" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
