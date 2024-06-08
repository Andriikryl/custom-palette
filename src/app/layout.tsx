import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperStore from "@/store/WrapperStore";
import Nav from "@/components/nav/Nav";
import AsiedeWrapper from "@/components/asideWrapper/AsiedeWrapper";

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
        <WrapperStore>
          <main>
            <AsiedeWrapper aside={<Nav />} main={<div>{children}</div>} />
          </main>
        </WrapperStore>
      </body>
    </html>
  );
}
