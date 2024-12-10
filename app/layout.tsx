import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/app/provider";
import { Suspense } from "react";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard"
});

export const metadata: Metadata = {
  title: "RevUP",
  description: "RevUP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable} flex min-h-screen flex-col font-pretendard`}>
        <Providers>
          <Suspense>
          <Header />
          <main className="grow pt-24">{children}</main> <Footer /></Suspense>
        </Providers>
      </body>
    </html>
  );
}
