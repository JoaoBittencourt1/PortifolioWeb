import { motion as Motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Monogram from '../monogram/Monogram.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#contato', label: 'Contato' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#skills', label: 'Skills' },
];

function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <Motion.header
      className="navbar"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-container">
        <Link to="/#top" className="navbar-brand" aria-label="Voltar ao topo">
          <Monogram />
          <span className="navbar-name">João Bittencourt</span>
        </Link>

        <nav className="nav-menu">
          {NAV_LINKS.map((item, i) => (
            <Motion.a
              key={item.href}
              href={onHome ? item.href : `/${item.href}`}
              className="nav-link"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              whileHover={{ color: 'var(--brand)' }}
            >
              {item.label}
            </Motion.a>
          ))}
        </nav>
      </div>
    </Motion.header>
  );
}

export default Navbar;
