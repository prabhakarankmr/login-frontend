import type { Metadata } from 'next';

import './globals.css';



export const metadata: Metadata = {
  title: 'Prabha Login App',
  description: 'A secure login and signup application built with Next.js and NestJS by prabha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}