// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\Program.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Program.css';

const ProgramPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    cohort: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    setTimeout(() => {
      console.log('Registration submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        cohort: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const programmeDays = [
    {
      day: "Day 1",
      title: "Fix Your Finances",
      topics: [
        "Money mindset transformation",
        "Separating personal and business money",
        "Simple record keeping systems",
        "Understanding your profit margins"
      ]
    },
    {
      day: "Day 2",
      title: "Become Funding Ready",
      topics: [
        "What funders look for in applications",
        "How to apply for grants successfully",
        "Understanding your loan readiness score",
        "Creating your 30-day action plan"
      ]
    }
  ];

  const benefits = [
    {
      icon: "ti ti-device-laptop",
      title: "Tools Included",
      description: "Access to Krisworth Finance Tracker, Grant Portal, and Loan Readiness Calculator"
    },
    {
      icon: "ti ti-certificate",
      title: "Certificate of Completion",
      description: "Receive a certificate to add to your funding applications"
    },
    {
      icon: "ti ti-users",
      title: "Community Access",
      description: "Join our community of women business owners"
    },
    {
      icon: "ti ti-headset",
      title: "Post-Programme Support",
      description: "30 days of email support after the programme"
    }
  ];

  const upcomingCohorts = [
    { date: "June 15-16, 2025", spots: 45, status: "Almost Full" },
    { date: "July 20-21, 2025", spots: 60, status: "Open" },
    { date: "August 17-18, 2025", spots: 75, status: "Open" }
  ];

  return (
    <div className="program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="program-hero-overlay"></div>
        <div className="program-hero-content">
          <div className="program-hero-badge">
            <i className="ti ti-school"></i>
            <span>Free Programme</span>
          </div>
          <h1 className="program-hero-title">
            Free Financial Readiness<br />Programme
          </h1>
          <p className="program-hero-description">
            A two-day programme for women business owners who want to fix their financial 
            foundation and understand what it takes to access funding. No cost. No prior 
            knowledge required. Just show up.
          </p>
          <div className="program-stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Days</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">100% Free</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Graduates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Days Section */}
      <section className="programme-days">
        <div className="container">
          <div className="days-header">
            <div className="section-tag">What You'll Learn</div>
            <h2 className="section-title">Two days that will transform<br />your business finances</h2>
          </div>
          
          <div className="days-grid">
            {programmeDays.map((day, index) => (
              <div key={index} className={`day-card ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="day-number">{day.day}</div>
                <h3>{day.title}</h3>
                <ul className="day-topics">
                  {day.topics.map((topic, idx) => (
                    <li key={idx}>
                      <i className="ti ti-check"></i>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <div className="section-tag">What's Included</div>
            <h2 className="section-title">Everything you need to succeed</h2>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Cohorts */}
      <section className="cohorts-section">
        <div className="container">
          <div className="cohorts-header">
            <div className="section-tag">Upcoming Cohorts</div>
            <h2 className="section-title">Join the next session</h2>
          </div>
          
          <div className="cohorts-grid">
            {upcomingCohorts.map((cohort, index) => (
              <div key={index} className="cohort-card">
                <div className="cohort-date">
                  <i className="ti ti-calendar"></i>
                  <span>{cohort.date}</span>
                </div>
                <div className="cohort-spots">
                  <i className="ti ti-users"></i>
                  <span>{cohort.spots} spots available</span>
                </div>
                <div className={`cohort-status status-${cohort.status === 'Almost Full' ? 'full' : 'open'}`}>
                  {cohort.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="registration-section">
        <div className="container">
          <div className="registration-grid">
            <div className="registration-info">
              <div className="section-tag">Register Now</div>
              <h2 className="section-title">Secure your spot today</h2>
              <p className="section-subtitle">
                Spaces are limited. Register now to secure your spot in our next cohort.
              </p>
              
              <div className="info-box">
                <i className="ti ti-info-circle"></i>
                <div>
                  <h4>What happens after registration?</h4>
                  <p>You'll receive a confirmation email within 24 hours with programme details, schedule, and pre-programme preparation materials.</p>
                </div>
              </div>
              
              <div className="info-box">
                <i className="ti ti-device-laptop"></i>
                <div>
                  <h4>What you'll need</h4>
                  <p>A laptop or smartphone with internet connection, a notebook, and an open mind ready to learn.</p>
                </div>
              </div>
            </div>

            <div className="registration-form-wrapper">
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="ti ti-circle-check"></i>
                  <h3>Registration Successful!</h3>
                  <p>Thank you for registering. We'll send programme details to your email.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Enter your business name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cohort">Preferred Cohort *</label>
                  <select
                    id="cohort"
                    name="cohort"
                    value={formData.cohort}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a cohort</option>
                    {upcomingCohorts.map((cohort, index) => (
                      <option key={index} value={cohort.date}>{cohort.date}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="register-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ti ti-loader"></i>
                      Registering...
                    </>
                  ) : (
                    <>
                      Register for Free
                      <i className="ti ti-arrow-right"></i>
                    </>
                  )}
                </button>
                
                <p className="form-note">
                  By registering, you agree to receive programme communications from Krisworth.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="section-tag">Success Stories</div>
            <h2 className="section-title">What past participants say</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>This programme transformed how I think about my business finances. Within 3 months of completing it, I secured my first business loan.</p>
              <div className="testimonial-author">
                <strong>Adaobi E.</strong>
                <span>Fashion Retailer, Lagos</span>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>The practical tools and step-by-step guidance made financial management accessible. I finally understand what funders are looking for.</p>
              <div className="testimonial-author">
                <strong>Chioma O.</strong>
                <span>Catering Business, Abuja</span>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="ti ti-quote"></i>
              <p>Best decision for my business. The grant portal alone helped me find and apply for opportunities I never knew existed.</p>
              <div className="testimonial-author">
                <strong>Funke A.</strong>
                <span>Agri-business, Ibadan</span>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* CTA Section */}
      <section className="program-cta">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Don't miss this opportunity</h2>
            <p>Join hundreds of women entrepreneurs who have transformed their businesses.</p>
            <Link to="#registration" className="btn-primary">Register Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramPage;