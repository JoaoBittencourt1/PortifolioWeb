'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../theme/ThemeToggle.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { hash: '#projetos', label: 'Projetos' },
  { hash: '#sobre', label: 'Sobre' },
  { hash: '#experiencia', label: 'Experiência' },
  { hash: '#contato', label: 'Contato', keepOnMobile: true },
];

function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === '/';

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          João Bittencourt
        </Link>
        <nav className="nav-menu" aria-label="Principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.hash}
              href={onHome ? item.hash : `/${item.hash}`}
              className={`nav-link${item.keepOnMobile ? ' nav-link--mobile' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
