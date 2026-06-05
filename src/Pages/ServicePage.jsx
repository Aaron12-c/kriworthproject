// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\ServicePage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Capacity Building",
      category: "Free",
      categoryType: "free",
      description: "Structured training on business setup, financial management, and growth readiness. Delivered free online.",
      fullDescription: "The entry point for most Krisworth clients. Our capacity building programme provides comprehensive training on business fundamentals, financial literacy, and growth strategies. Participants gain practical knowledge they can immediately apply to their businesses.",
      features: [
        "Online training modules",
        "Business setup guidance",
        "Financial management basics",
        "Growth readiness assessment",
        "Certificate of completion"
      ],
      icon: "ti ti-school"
    },
    {
      id: 2,
      number: "02",
      title: "Compliance Advisory",
      category: "Paid",
      categoryType: "paid",
      description: "Guidance on every document and structure your business needs to operate without regulatory risk.",
      fullDescription: "We make sure nothing is missing before you approach a funder. Our compliance advisory service ensures your business meets all regulatory requirements and is properly structured for growth and funding.",
      features: [
        "Business registration guidance",
        "Regulatory compliance check",
        "Documentation review",
        "Legal structure advisory",
        "Risk assessment"
      ],
      icon: "ti ti-certificate"
    },
    {
      id: 3,
      number: "03",
      title: "Simple Bookkeeping Tool",
      category: "Subscription",
      categoryType: "subscription",
      description: "Track your income and expenses daily. The financial foundation every funded business needs.",
      fullDescription: "The simplest way to start building your records. Our bookkeeping tool helps you track every transaction, categorize expenses, and generate basic financial reports with ease.",
      features: [
        "Daily income/expense tracking",
        "Automated categorization",
        "Receipt capture",
        "Basic financial reports",
        "Export to Excel/PDF"
      ],
      icon: "ti ti-book"
    },
    {
      id: 4,
      number: "04",
      title: "Financial Statements Builder",
      category: "Subscription",
      categoryType: "subscription",
      description: "Generate your income statement, balance sheet, and cash flow statement.",
      fullDescription: "The intelligence that lets you tell your business story to investors and funders. Transform your raw financial data into professional financial statements that lenders and investors trust.",
      features: [
        "Income statement generation",
        "Balance sheet creation",
        "Cash flow statements",
        "Financial ratio analysis",
        "PDF export ready for lenders"
      ],
      icon: "ti ti-chart-bar"
    },
    {
      id: 5,
      number: "05",
      title: "Credit Score Checker",
      category: "Pay as you go",
      categoryType: "payg",
      description: "Know your credit standing before you walk into a lender's office.",
      fullDescription: "No more surprises. No wasted applications. Just clarity before you commit. Check your credit score instantly and understand what lenders see when they evaluate your application.",
      features: [
        "Instant credit score check",
        "Credit report analysis",
        "Improvement recommendations",
        "Lender-specific insights",
        "Monthly monitoring option"
      ],
      icon: "ti ti-credit-card"
    },
    {
      id: 6,
      number: "06",
      title: "Credit and Funding Readiness",
      category: "Pay as you go",
      categoryType: "payg",
      description: "A full assessment of your credit standing and estimated loan eligibility.",
      fullDescription: "Understand exactly what you qualify for and what to fix before you apply. Get a comprehensive readiness score and a personalized action plan to improve your funding chances.",
      features: [
        "Comprehensive credit assessment",
        "Loan eligibility estimation",
        "Personalized action plan",
        "Funder requirement mapping",
        "Readiness score tracking"
      ],
      icon: "ti ti-chart-arrows"
    },
    {
      id: 7,
      number: "07",
      title: "Grant Portal",
      category: "Subscription",
      categoryType: "subscription",
      description: "100 active grants for Nigerian SMEs. Search, filter, and track your applications.",
      fullDescription: "Find your match and track your applications from one place. Access hundreds of active grants for Nigerian SMEs, filtered by sector, eligibility, and deadline.",
      features: [
        "100+ active grants database",
        "Smart search and filters",
        "Application tracking",
        "Deadline reminders",
        "Eligibility checker"
      ],
      icon: "ti ti-gift"
    },
    {
      id: 8,
      number: "08",
      title: "Accounting Services",
      category: "Paid",
      categoryType: "paid",
      description: "Professional accounting and audited financial statements.",
      fullDescription: "For businesses that need the full documentation package for serious funding conversations. Get professional accounting support and audited financial statements.",
      features: [
        "Professional bookkeeping",
        "Audited financial statements",
        "Tax preparation support",
        "Financial advisory",
        "Funding documentation"
      ],
      icon: "ti ti-calculator"
    },
    {
      id: 9,
      number: "09",
      title: "Business Plan Guidance",
      category: "Paid",
      categoryType: "paid",
      description: "A structured plan that answers every question a bank or grant funder will ask.",
      fullDescription: "Supported by the Krisworth Business Plan Template Pack. Create a compelling business plan that tells your story and convinces funders to invest in your vision.",
      features: [
        "Business plan template pack",
        "Step-by-step guidance",
        "Financial projection tools",
        "Funder-specific customization",
        "Review and feedback"
      ],
      icon: "ti ti-file-description"
    }
  ];

  const getCategoryBadgeClass = (type) => {
    switch(type) {
      case 'free': return 'badge-free';
      case 'subscription': return 'badge-sub';
      case 'payg': return 'badge-payg';
      case 'paid': return 'badge-paid';
      default: return '';
    }
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <div className="service-hero-badge">
            <i className="ti ti-grid"></i>
            <span>Our Services</span>
          </div>
          <h1 className="service-hero-title">
            Nine services.<br />One ecosystem.
          </h1>
          <p className="service-hero-description">
            Every Krisworth service connects to the next. Start with capacity building, 
            discover the bookkeeping tool, generate financial statements, and unlock 
            funding readiness. The ecosystem is designed so clients grow with us.
          </p>
          <div className="service-stats">
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Services</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Pricing Tiers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Digital Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-main">
        <div className="container">
          <div className="services-header">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Complete financial ecosystem<br />for Nigerian MSMEs</h2>
            <p className="section-subtitle">
              From foundational training to advanced funding preparation, 
              we have a service for every stage of your business journey.
            </p>
          </div>

          <div className="all-services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-detail-card ${isVisible ? 'fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="service-card-header">
                  <div className="service-number">{service.number}</div>
                  <span className={`service-badge ${getCategoryBadgeClass(service.categoryType)}`}>
                    {service.category}
                  </span>
                </div>
                <div className="service-icon-wrapper">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className={`service-expanded ${activeService === service.id ? 'expanded' : ''}`}>
                  <p className="service-full-description">{service.fullDescription}</p>
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="ti ti-check"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-action">
                    <Link to="/contact" className="service-learn-more">
                      Get Started <i className="ti ti-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                
                <button 
                  className="expand-button" 
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  {activeService === service.id ? 'Show Less' : 'Learn More'}
                  <i className={`ti ti-chevron-${activeService === service.id ? 'up' : 'down'}`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-header">
            <div className="section-tag">How We Work</div>
            <h2 className="section-title">Simple, flexible pricing</h2>
            <p className="section-subtitle">
              Choose the plan that works for your business. Start free, scale as you grow.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card pricing-free">
              <div className="pricing-icon">
                <i className="ti ti-rocket"></i>
              </div>
              <h3>Start for free</h3>
              <div className="pricing-price">$0</div>
              <p className="pricing-period">No payment required to begin</p>
              <ul className="pricing-features">
                <li><i className="ti ti-check"></i> Capacity building training</li>
                <li><i className="ti ti-check"></i> Grant Portal basic access</li>
                <li><i className="ti ti-check"></i> Loan Readiness score overview</li>
                <li><i className="ti ti-check"></i> Financial Readiness Programme</li>
              </ul>
              <Link to="/contact" className="pricing-btn btn-outline-teal">Get Started Free</Link>
            </div>

            <div className="pricing-card pricing-subscription featured">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-icon">
                <i className="ti ti-crown"></i>
              </div>
              <h3>Subscription access</h3>
              <div className="pricing-price">From ₦5,000<span>/month</span></div>
              <p className="pricing-period">Monthly or annual. Cancel anytime.</p>
              <ul className="pricing-features">
                <li><i className="ti ti-check"></i> Full bookkeeping tool with history</li>
                <li><i className="ti ti-check"></i> Financial Statements Builder + PDF</li>
                <li><i className="ti ti-check"></i> Grant Portal with full tracking</li>
                <li><i className="ti ti-check"></i> Priority support</li>
              </ul>
              <p className="annual-savings">Annual plan saves 25%</p>
              <Link to="/contact" className="pricing-btn btn-primary">Subscribe Now</Link>
            </div>

            <div className="pricing-card pricing-payg">
              <div className="pricing-icon">
                <i className="ti ti-wallet"></i>
              </div>
              <h3>Pay as you go</h3>
              <div className="pricing-price">Per use</div>
              <p className="pricing-period">Use what you need, when you need it</p>
              <ul className="pricing-features">
                <li><i className="ti ti-check"></i> Credit score check (per use)</li>
                <li><i className="ti ti-check"></i> Funding readiness assessment</li>
                <li><i className="ti ti-check"></i> One-on-one advisory</li>
                <li><i className="ti ti-check"></i> Accounting services</li>
              </ul>
              <Link to="/contact" className="pricing-btn btn-outline">Contact for Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Ready to structure your business for funding?</h2>
            <p>Join thousands of Nigerian MSMEs building financial readiness with Krisworth.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get Started Today</Link>
              <Link to="/programme" className="btn-outline-light">Join Free Programme</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;