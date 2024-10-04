import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn Next JS Fundamental</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          <p>Copyright 2022</p>
        </footer>
      </body>
    </html>
  );
}
