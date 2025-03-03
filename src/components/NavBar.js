import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navbarRef = useRef();
 
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
          setOpen(false); 
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary"  ref={navbarRef}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>Logo</Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setOpen(!open)} 
            aria-expanded={open} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-bar-right-section">
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Our Tests
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/quick/test-details" onClick={() => setOpen(false)}>Quick Test</Link></li>
                  <li><Link className="dropdown-item" to="/standard/test-details" onClick={() => setOpen(false)}>Standard Test</Link></li>
                  <li><Link className="dropdown-item" to="/advanced/test-details" onClick={() => setOpen(false)}>Advanced Test</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about" onClick={() => setOpen(false)}>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
