function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Logo</h3>
        <p>
          Discover your English level with us! Practice, learn, and improve — all
          for free.
        </p>
        <div className="social-icons">
        <a 
        className="linkedin" 
        aria-label="LinkedIn" 
        href="https://www.linkedin.com/in/ramy-nady-1a766625a/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a  
      className="git-hub" 
      aria-label="GitHub" 
      href="https://github.com/ramynady78" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-github"></i>
    </a>
    <a  
      className="telegram" 
      aria-label="Telegram" 
      href="https://t.me/ramynady8" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-telegram-plane"></i>
    </a>

        </div>
        <p className="copyright">
          &copy; 2025 Logo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
