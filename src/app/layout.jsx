import { Geist, Geist_Mono } from 'next/font/google';
import AppShell from '../components/AppShell.jsx';
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from '../components/theme/theme-config.js';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'João Bittencourt — Software Engineer',
  description:
    'João Bittencourt — Software Engineer full stack, estudante de Ciência da Computação e tech lead da Vanep.',
  icons: { icon: '/capibara.png' },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      data-theme={DEFAULT_THEME}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
