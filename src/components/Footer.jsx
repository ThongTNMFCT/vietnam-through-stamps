import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column footer-brand">
          <Link to="/">
            <img src="/images/logo.png" alt="Vietnam Through Stamps Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-text-light" style={{ marginTop: '1.5rem', fontStyle: 'italic', fontSize: '1.1rem' }}>
            Discover Vietnam, One Stamp at a Time.
          </p>
        </div>
        
        <div className="footer-column footer-nav">
          <h4 className="font-heading">Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4 className="font-heading">Contact & Connect</h4>
          <ul>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--color-bg)' }}>Trần Ngọc Minh Thông</strong><br/>
              Creator & Illustrator
            </li>
            <li>
              <a href="mailto:thongtnmfct31178@gmail.com" className="contact-link">thongtnmfct31178@gmail.com</a>
            </li>
            <li>
              <a href="https://www.facebook.com/tran.ngoc.minh.thong/" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/vietnamthroughstamps/" target="_blank" rel="noopener noreferrer" className="contact-link">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-text-light">&copy; {new Date().getFullYear()} Vietnam Through Stamps. A cultural storytelling initiative by Trần Ngọc Minh Thông.</p>
      </div>
    </footer>
  );
}
