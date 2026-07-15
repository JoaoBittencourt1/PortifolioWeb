import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.webp';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">João Bittencourt</p>

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
    </footer>
  );
}

export default Footer;
