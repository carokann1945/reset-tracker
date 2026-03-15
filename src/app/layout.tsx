import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/providers/providers';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard', //tailwind와 연동할 css 변수명
});

export const metadata: Metadata = {
  title: 'Reset Tracker',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased bg-silver-custom`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
