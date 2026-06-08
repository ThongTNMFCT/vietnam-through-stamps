import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Vietnam Through Stamps Logo" className="footer-logo-img" />
          </Link>
          <p className="text-muted" style={{ marginTop: '1rem' }}>Discover Vietnam, One Stamp at a Time.</p>
        </div>
        
        <div className="footer-nav">
          <h4 className="font-heading text-text">Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="font-heading text-text">Social Media</h4>
          <ul>
            <li><a href="mailto:vietnamthroughstamps@gmail.com">vietnamthroughstamps@gmail.com</a></li>
            <li><a href="https://www.pinterest.com/vietnamthroughstamps/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-muted">&copy; {new Date().getFullYear()} Vietnam Through Stamps. A cultural storytelling initiative.</p>
      </div>
    </footer>
  );
}
