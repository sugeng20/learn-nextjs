export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Learn Next JS Fundamental</title>
      </head>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
