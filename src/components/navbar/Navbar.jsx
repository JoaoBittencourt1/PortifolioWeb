import Monogram from '../monogram/Monogram.jsx';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#contato', label: 'Contato' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#skills', label: 'Skills' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#top" className="navbar-brand" aria-label="Voltar ao topo">
          <Monogram />
          <span className="navbar-name">João Bittencourt</span>
        </a>

        <nav className="nav-menu">
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
