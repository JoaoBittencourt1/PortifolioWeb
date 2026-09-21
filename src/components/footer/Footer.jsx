'use client';

import { useState } from 'react';
import './Footer.css';

const LINKS = [
  { href: 'https://github.com/JoaoBittencourt1', label: 'GitHub' },
  { href: 'https://linkedin.com/in/joaobittencourt1', label: 'LinkedIn' },
  { href: 'mailto:jvabgo@gmail.com', label: 'Email' },
];

function Footer() {
  const year = new Date().getFullYear();
  const [showCapivara, setShowCapivara] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          ©{' '}
          <button
            type="button"
            className="footer-name"
            onClick={() => setShowCapivara((open) => !open)}
            aria-expanded={showCapivara}
          >
            João Bittencourt
          </button>{' '}
          {year}
        </p>

        <nav className="footer-links" aria-label="Redes">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {showCapivara && (
        <div
          className="capivara-overlay"
          role="presentation"
          onClick={() => setShowCapivara(false)}
        >
          <img
            src="/capivaras.gif"
            alt="Capivara relaxando na banheira"
            className="capivara-gif"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;
