import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "원자 조회",
    description: "원자 조회 사이트",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
