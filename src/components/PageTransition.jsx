import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (location.pathname !== location.state?.prevPath) {
      setIsTransitioning(true);
      
      const timer1 = setTimeout(() => {
        setDisplayChildren(children);
        // Scroll to top when actual page content changes
        window.scrollTo(0, 0);
      }, 400); // Wait for fade out

      const timer2 = setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Total transition time

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [location.pathname, children, location.state]);

  return (
    <>
      <div className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <div className="loader-container">
          <div className="loader-stamp">
            <img src="/images/logo.png" alt="Loading..." className="loader-logo" />
            <div className="loader-spinner"></div>
          </div>
        </div>
      </div>
      <div className={`page-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {displayChildren}
      </div>
    </>
  );
}
