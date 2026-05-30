import type { Metadata } from "next";
import { Chivo, Rasa } from "next/font/google";
import "./globals.css";
import Header from "@components/layout/Header";
import ReduxProvider from "@/lib/redux/ReduxProvider";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

const rasa = Rasa({
  variable: "--font-rasa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QRaw",
  description: "The favorite digital tools platform of your mom's friend's son",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${rasa.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="w-full max-w-[1000px] mx-auto px-6 sm:px-10 pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
