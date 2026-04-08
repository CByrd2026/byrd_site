import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlice Byrd voting against Cherokee County — District 20",
  description:
    "Charlice Byrd has consistantly voted against Cherokee County.  Time for someone new for State House in District 20. Learn about her work to fight against education, healthcare, and working families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
