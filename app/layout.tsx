import type { Metadata } from "next";
import Navbar from '@/components/Navbar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zerando Leetcode",
  description: "Site que te ajuda a visualizar as soluções e questões do LeetCode e outros algoritmos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
