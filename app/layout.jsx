import "./globals.css";
import Navbar from "../components/Navbar";
import { roboto } from "./fonts";

export const metadata = {
  title: "Situs Next.js App",
  description: "This is my next.js app",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <title>Learn Next JS Fundamental</title>
      </head>
      <body className="bg-gray-100 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          <p>Copyright 2022</p>
        </footer>
      </body>
    </html>
  );
}
