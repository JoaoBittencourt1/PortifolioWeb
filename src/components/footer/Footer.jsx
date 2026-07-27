import { useState } from 'react';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.webp';
import capivarasGif from '../../../gifs/capivaras.gif';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const [showCapivara, setShowCapivara] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <button
          type="button"
          className="footer-name"
          onClick={() => setShowCapivara((open) => !open)}
          aria-expanded={showCapivara}
          aria-label="João Bittencourt"
        >
          João Bittencourt
        </button>

        <div className="footer-links">
          <a href="https://github.com/JoaoBittencourt1" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="" className="footer-icon" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/joaobittencourt1" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="" className="footer-icon" />
            LinkedIn
          </a>
          <a href="mailto:jvabgo@gmail.com">jvabgo@gmail.com</a>
        </div>

        <p className="footer-copyright">© {year}</p>
      </div>

      {showCapivara && (
        <div
          className="capivara-overlay"
          role="presentation"
          onClick={() => setShowCapivara(false)}
        >
          <img
            src={capivarasGif}
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
