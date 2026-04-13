import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MenuBase Next.js',
  description: 'MenuBase restoran menusu ve admin yonetimi icin Next.js uygulamasi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
