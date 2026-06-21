// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\AboutPage.jsx
import React from 'react';
import './AboutPage.css';

// Import hero image
import heroImage from '../assets/image.png';

const AboutPage = () => {
  // Company values - UPDATED
  const values = [
    {
      icon: '🤝',
      title: 'Dignity in Delivery',
      description: 'We treat every client with respect, professionalism, and a commitment to excellence in everything we do.'
    },
    {
      icon: '📊',
      title: 'Evidence over Aspiration',
      description: 'We believe in data-driven decisions. Our solutions are grounded in real evidence, not just good intentions.'
    },
    {
      icon: '🔓',
      title: 'Access as Design',
      description: 'We build systems and tools that make funding, compliance, and growth accessible to every business.'
    },
    {
      icon: '♾️',
      title: 'Continuity of Support',
      description: 'We walk with you beyond the transaction. Our commitment to your success is long-term and consistent.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">About Kriworth</span>
            <h1 className="hero-title">
              Bridging the Gap Between<br />
              <span className="highlight">Potential and Performance</span>
            </h1>
            <p className="hero-subtitle">
              We exist to bridge the gap between potential and performance through 
              structure, clarity, and access. Empowering Nigerian MSMEs to build 
              scalable and bankable systems.
            </p>
          </div>
        </div>
        <div className="hero-shape"></div>
        <div className="hero-background-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </section>

      {/* Purpose Section */}
      <section className="purpose-section">
        <div className="container">
          <div className="purpose-content">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title">Why We Exist</h2>
            <p className="purpose-text">
              We exist to bridge the gap between potential and performance through 
              structure, clarity and access. Every business has untapped potential. 
              We provide the tools, systems, and guidance to unlock it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Providing SMEs with the structure, compliance, tools, systems and 
                funding access they need to grow with confidence. We equip businesses 
                to move from informal to institutional, from uncertain to bankable.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading growth solutions provider enabling businesses to 
                build scalable and bankable systems. We envision a future where every 
                African SME has the structure and access to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Our values shape everything we do and guide us in serving our clients better
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build a Bankable Business?</h2>
            <p>Let's work together to build the structure, clarity, and access you need to grow with confidence.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Started Today</button>
              <button className="btn-outline">Schedule a Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
