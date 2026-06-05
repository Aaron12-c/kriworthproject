// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\Contact.jsx
import { useEffect, useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: '',
    service: ''
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
    
    // Simulate form submission - Replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: '',
        service: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "ti ti-mail",
      title: "Email Us",
      details: "krisworthgrowthsolutions@gmail.com",
      link: "mailto:krisworthgrowthsolutions@gmail.com"
    },
    {
      icon: "ti ti-phone",
      title: "Call Us",
      details: "+234 123 456 7890",
      link: "tel:+2341234567890"
    },
    {
      icon: "ti ti-map-pin",
      title: "Visit Us",
      details: "Lagos, Nigeria",
      link: "#"
    },
    {
      icon: "ti ti-clock",
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  const services = [
    "Capacity Building",
    "Compliance Advisory",
    "Bookkeeping Tool",
    "Financial Statements Builder",
    "Credit Score Checker",
    "Credit & Funding Readiness",
    "Grant Portal",
    "Accounting Services",
    "Business Plan Guidance"
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <i className="ti ti-mail"></i>
            <span>Get in Touch</span>
          </div>
          <h1 className="contact-hero-title">
            Let's talk about<br />your business goals.
          </h1>
          <p className="contact-hero-description">
            Whether you have questions about our services or want to start your funding journey,
            we're here to help. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`info-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
                <a href={info.link} className="info-link">
                  Contact <i className="ti ti-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-grid">
            <div className="form-content">
              <div className="section-tag">Send a Message</div>
              <h2 className="section-title">We'd love to hear<br />from you.</h2>
              <p className="section-subtitle">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="form-availability">
                <i className="ti ti-headset"></i>
                <div>
                  <h4>Quick Response Guarantee</h4>
                  <p>We respond to all inquiries within 24 business hours</p>
                </div>
              </div>
            </div>

            <div className="form-wrapper">
              {submitStatus === 'success' && (
                <div className="success-message">
                  <i className="ti ti-circle-check"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
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
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ti ti-loader"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ti ti-send"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <div className="section-tag">FAQs</div>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I get started with Krisworth?</h3>
              <p>Start by joining our free Financial Readiness Programme or book a consultation call with our team. We'll assess your needs and recommend the right services for your business.</p>
            </div>
            <div className="faq-item">
              <h3>Are your services only for women-led businesses?</h3>
              <p>While we have a particular focus on women-led businesses, our services are available to all Nigerian MSMEs seeking financial structure and funding access.</p>
            </div>
            <div className="faq-item">
              <h3>How much do your services cost?</h3>
              <p>We offer flexible pricing including free options, subscription plans starting from ₦5,000/month, and pay-as-you-go services. Contact us for detailed pricing.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to become funding ready?</h3>
              <p>Depending on your current financial structure, most clients become funding-ready within 30-90 days of actively using our tools and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Ready to structure your business for funding?</h2>
            <p>Join our Free Financial Readiness Programme today.</p>
            <div className="cta-buttons">
              <a href="#programme" className="btn-primary">Join Free Programme</a>
              <a href="mailto:krisworthgrowthsolutions@gmail.com" className="btn-outline-light">Email Us Directly</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;