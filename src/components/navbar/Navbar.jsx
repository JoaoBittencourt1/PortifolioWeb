'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../theme/ThemeToggle.jsx';
import LangToggle from '../lang/LangToggle.jsx';
import { useLang } from '../lang/lang.js';
import './Navbar.css';

const NAV_LINKS = [
  { hash: '#projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { hash: '#sobre', label: { pt: 'Sobre', en: 'About' } },
  { hash: '#experiencia', label: { pt: 'Experiência', en: 'Experience' } },
  { hash: '#contato', label: { pt: 'Contato', en: 'Contact' }, keepOnMobile: true },
];

const NAV_ARIA = { pt: 'Principal', en: 'Main' };

function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const lang = useLang();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          João Bittencourt
        </Link>
        <nav className="nav-menu" aria-label={NAV_ARIA[lang]}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.hash}
              href={onHome ? item.hash : `/${item.hash}`}
              className={`nav-link${item.keepOnMobile ? ' nav-link--mobile' : ''}`}
            >
              {item.label[lang]}
            </a>
          ))}
          <LangToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
