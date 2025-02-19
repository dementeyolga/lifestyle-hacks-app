import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const ibmPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

const nunitoSans = localFont({
  src: [
    { path: '/fonts/NunitoSans-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--nunito-sans',
});

export const metadata: Metadata = {
  title: 'Lifestyle Hacks',
  description: 'Insights for your better lifestyle.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
