import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Email Confirmation Demo',
  description:
    'How to build an email confirmation workflow Next.js, Resend, and Xata',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col  items-center justify-center bg-gray-900 p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
