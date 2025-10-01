import type { Metadata } from 'next';
import './globals.css';
import AppShell from './components/AppShell';

export const metadata: Metadata = {
  title: 'QueryQuest',
  description: 'Master SQL. One query at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-text">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
