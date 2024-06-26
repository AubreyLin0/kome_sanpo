import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Search } from "@/features/common/components/Search";
import { Button } from "@/features/common/components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="grid grid-cols-2-4-2 gap-6">
          <h1>こめさんぽ</h1>
          <Search placeholder="店名・ジャンルで検索" />
          <Button>検索</Button>
        </header>
        {children}
      </body>
    </html>
  );
}
