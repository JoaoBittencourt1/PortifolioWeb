import AppShell from '../components/AppShell.jsx';
import './globals.css';

export const metadata = {
  title: 'João Bittencourt — Software Developer',
  description:
    'João Bittencourt — Software Developer, estudante de Ciência da Computação e desenvolvedor da Vanep.',
  icons: { icon: '/capibara.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
