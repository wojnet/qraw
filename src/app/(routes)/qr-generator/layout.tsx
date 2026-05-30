import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRaw - QRGenerator",
  description: "QR code generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}
