import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Collers",
  description: "Generated by Emre Ates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${roboto.className} text-primary`}
        style={{
          background: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}