import { Mail } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact section">
      <div className="container contact-container">
        <h1 className="font-heading text-primary text-center page-title">Get in Touch</h1>
        
        <div className="contact-card card text-center">
          <p className="text-muted contact-intro">
            We would love to hear from you. Whether you have questions about our collection, want to share a cultural story, or just want to say hello, feel free to reach out.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <Mail className="contact-icon text-secondary" size={32} />
              <h3 className="font-heading">Email</h3>
              <a href="mailto:vietnamthroughstamps@gmail.com" className="text-primary contact-link">
                vietnamthroughstamps@gmail.com
              </a>
            </div>
          </div>
          
          <h3 className="font-heading social-title">Follow Our Journey</h3>
          <div className="social-links" style={{ justifyContent: 'center' }}>
            <a href="https://www.pinterest.com/vietnamthroughstamps/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>P</span>
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
