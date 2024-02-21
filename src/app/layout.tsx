import { Inter } from "next/font/google";
import "./globals.css";
import style from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={style.root}>
          {children}
        </main>
      </body>
    </html>
  );
}
