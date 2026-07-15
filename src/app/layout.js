// src\app\layout.js
import "./globals.css";

 

export const metadata = {
  title: "Namaz Rehberi Sitesi- V.15.07.2026",
  description: "Namaz Rehberi - SAV - 2 ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"     >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
