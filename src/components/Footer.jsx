// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\components\Footer.jsx
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Krisworth <span>Growth Solutions</span></div>
            <p>Advisory and digital tools helping Nigerian MSMEs, with a focus on women-led businesses, access the structure, compliance, and funding they deserve.</p>
            <p className="footer-tagline">Structure. Scale. Succeed.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Capacity Building</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Compliance Advisory</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Bookkeeping Tool</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Financial Statements</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Credit Checker</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Grant Portal</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#tools" onClick={(e) => handleSmoothScroll(e, '#tools')}>Loan Readiness Portal</a></li>
              <li><a href="#tools" onClick={(e) => handleSmoothScroll(e, '#tools')}>Grant Portal</a></li>
              <li><a href="#tools" onClick={(e) => handleSmoothScroll(e, '#tools')}>Bookkeeping Tool</a></li>
              <li><a href="#tools" onClick={(e) => handleSmoothScroll(e, '#tools')}>Financial Builder</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#programme" onClick={(e) => handleSmoothScroll(e, '#programme')}>Free Programme</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Business Plan Pack</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Loan Ready Toolkit</a></li>
              <li><a href="mailto:krisworthgrowthsolutions@gmail.com">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Krisworth Growth Solutions. All rights reserved.</p>
          <div className="tagline">Structure. Scale. Succeed.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;