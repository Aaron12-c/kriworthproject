// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\PlatformPage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './platformPage.css';

const PlatformPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      name: "Bookkeeping Tool",
      description: "Daily income and expense tracking. Simple enough for any business owner. Powerful enough to build a financial record funders accept.",
      status: "live",
      icon: "ti ti-book",
      features: ["Track daily transactions", "Categorize expenses", "Generate basic reports", "Export data"]
    },
    {
      name: "Financial Statements Builder",
      description: "Income statement, balance sheet, and cash flow statement generated from your records. Your business story, told in numbers.",
      status: "live",
      icon: "ti ti-chart-bar",
      features: ["Income statement", "Balance sheet", "Cash flow statement", "PDF export"]
    },
    {
      name: "Loan Readiness Assessment",
      description: "Know your credit standing and loan eligibility before you approach a lender. A full readiness score with an action plan to improve it.",
      status: "live",
      icon: "ti ti-chart-arrows",
      features: ["Credit assessment", "Eligibility score", "Action plan", "Lender matching"]
    },
    {
      name: "Grant Portal",
      description: "100 active grants for Nigerian SMEs. Search by sector, type, and eligibility. Track your applications from research to award.",
      status: "live",
      icon: "ti ti-gift",
      features: ["100+ active grants", "Smart search filters", "Application tracking", "Deadline reminders"]
    },
    {
      name: "Loan Planning Calculator",
      description: "Model your repayment before you commit. See what you can afford, what the loan will cost, and how long repayment takes.",
      status: "coming",
      icon: "ti ti-calculator",
      features: ["Repayment modeling", "Interest calculation", "Affordability check", "Comparison tool"]
    },
    {
      name: "Lender Matching",
      description: "Qualified clients are connected to financial institutions that match their profile. The final step on the Krisworth readiness journey.",
      status: "coming",
      icon: "ti ti-users",
      features: ["Profile matching", "Lender database", "Application support", "Follow-up tracking"]
    }
  ];

  const resources = [
    {
      title: "Business Plan Template Pack",
      description: "Professional templates to create a compelling business plan that funders trust.",
      type: "Downloadable",
      icon: "ti ti-file-text"
    },
    {
      title: "Financial Readiness Guide",
      description: "Step-by-step guide to prepare your business for funding applications.",
      type: "E-book",
      icon: "ti ti-book"
    },
    {
      title: "Grant Writing Toolkit",
      description: "Tips, templates, and strategies for successful grant applications.",
      type: "Toolkit",
      icon: "ti ti-tool"
    },
    {
      title: "Video Training Library",
      description: "On-demand video tutorials on financial management and funding readiness.",
      type: "Video Series",
      icon: "ti ti-video"
    }
  ];

  return (
    <div className="platform-page">
      {/* Hero Section */}
      <section className="platform-hero">
        <div className="platform-hero-overlay"></div>
        <div className="platform-hero-content">
          <div className="platform-hero-badge">
            <i className="ti ti-device-laptop"></i>
            <span>Digital Platform</span>
          </div>
          <h1 className="platform-hero-title">
            Tools that work<br />while you sleep.
          </h1>
          <p className="platform-hero-description">
            The Krisworth digital platform brings your financial readiness tools, grant access, 
            and loan preparation into one place. Built for Nigerian women business owners.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="container">
          <div className="tools-header">
            <div className="section-tag">Our Tools</div>
            <h2 className="section-title">Everything you need to<br />become funding ready</h2>
            <p className="section-subtitle">
              From daily bookkeeping to grant applications, our integrated tools guide you 
              through every step of your funding journey.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`tool-card ${isVisible ? 'fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tool-icon">
                  <i className={tool.icon}></i>
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <div className={`tool-status status-${tool.status}`}>
                  <span className="status-dot"></span>
                  {tool.status === 'live' ? 'Live now' : 'Coming soon'}
                </div>
                <div className="tool-features">
                  {tool.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to="/contact" className="tool-link">
                  Learn more <i className="ti ti-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-header">
            <div className="section-tag">Free Resources</div>
            <h2 className="section-title">Downloadable toolkits & guides</h2>
            <p className="section-subtitle">
              Access our library of free resources to help you build a stronger business.
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <div className="resource-icon">
                  <i className={resource.icon}></i>
                </div>
                <div className="resource-info">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <div className="resource-meta">
                    <span className="resource-type">{resource.type}</span>
                    <Link to="/contact" className="resource-link">
                      Download <i className="ti ti-download"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="container">
          <div className="integration-content">
            <div className="integration-text">
              <div className="section-tag">Connected Ecosystem</div>
              <h2 className="section-title">Every tool leads<br />to the next</h2>
              <p>
                Bookkeeping to statements. Statements to funding readiness. 
                No hard sells. Just a natural progression that helps you build 
                the financial foundation funders trust.
              </p>
              <ul className="integration-list">
                <li><i className="ti ti-check"></i> Seamless data transfer between tools</li>
                <li><i className="ti ti-check"></i> Real-time progress tracking</li>
                <li><i className="ti ti-check"></i> Centralized dashboard</li>
                <li><i className="ti ti-check"></i> Automated reports and insights</li>
              </ul>
              <Link to="/contact" className="btn-primary">Get Started Today</Link>
            </div>
            <div className="integration-image">
              <div className="integration-placeholder">
                <i className="ti ti-device-laptop"></i>
                <p>Platform Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="platform-cta">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Start using our tools today</h2>
            <p>Join our free programme and get access to basic tools immediately.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Create Free Account</Link>
              <Link to="/service" className="btn-outline-light">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;