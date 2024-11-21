import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

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
      <body className="px-4 md:px-0">
        <Header />
        <main className="flex-grow container mx-auto py-8 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
