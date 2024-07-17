import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/src/features/common/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className}  grid grid-cols[10vh,90vh]`}>
        {/* とりあえずshadcn-uiのデフォルトで*/}
        <Header />
        {children}
      </body>
    </html>
  );
}
