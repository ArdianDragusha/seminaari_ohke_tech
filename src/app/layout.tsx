import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Football Demo App",
  description: "Players list + static generation + API example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>
        <header>
          <nav>
            <a href="/">Etusivu</a> | <a href="/players">Pelaajat</a> |{" "}
            <a href="/about">About</a>
          </nav>
        </header>
        <hr />
        {children}
      </body>
    </html>
  );
}
