// C:\Users\Aaron Hope\Desktop\kriworth project\frontend\src\Pages\AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: '20+ years experience in business transformation',
      image: 'https://via.placeholder.com/300x300?text=Team+Member',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Adebayo',
      role: 'Head of Operations',
      bio: 'Expert in operational excellence',
      image: 'https://via.placeholder.com/300x300?text=Team+Member',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 3,
      name: 'Chioma Okafor',
      role: 'Lead Consultant',
      bio: 'Strategic business advisor',
      image: 'https://via.placeholder.com/300x300?text=Team+Member',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      id: 4,
      name: 'David Okonkwo',
      role: 'Tech Innovation Lead',
      bio: 'Digital transformation specialist',
      image: 'https://via.placeholder.com/300x300?text=Team+Member',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
  ];

  // Company values
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We deliver nothing but the best for our clients'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Transparency and honesty in all our dealings'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly evolving to meet modern challenges'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Creating lasting positive change in communities'
    }
  ];

  // Milestones data
  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to transform businesses' },
    { year: '2021', title: 'First 100 Clients', description: 'Reached milestone of 100 satisfied clients' },
    { year: '2022', title: 'Expansion', description: 'Opened offices in 3 major cities' },
    { year: '2023', title: 'Industry Awards', description: 'Recognized for excellence in service delivery' },
    { year: '2024', title: 'Global Reach', description: 'Expanded operations to international markets' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">About Kriworth</span>
            <h1 className="hero-title">
              Empowering Businesses<br />
              <span className="highlight">For Over 5 Years</span>
            </h1>
            <p className="hero-subtitle">
              We are dedicated to providing innovative solutions that drive growth, 
              efficiency, and sustainable success for businesses across Africa.
            </p>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge solutions, strategic guidance, 
                and innovative tools that drive sustainable growth and operational excellence.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become Africa's leading business transformation partner, creating 
                lasting impact for enterprises across the continent and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">A Journey of<br />Growth & Excellence</h2>
              <div className="story-text">
                <p>
                  Kriworth was founded with a simple yet powerful vision: to bridge the gap 
                  between traditional business practices and modern digital solutions. What 
                  started as a small consulting firm has grown into a comprehensive business 
                  transformation partner.
                </p>
                <p>
                  Today, we've helped over 500+ businesses streamline their operations, 
                  increase revenue, and achieve their strategic goals. Our team of experts 
                  combines deep industry knowledge with cutting-edge technology to deliver 
                  results that matter.
                </p>
                <p>
                  We believe in creating lasting partnerships with our clients, providing 
                  continuous support and guidance throughout their growth journey.
                </p>
              </div>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clients Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Industry Experts</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">🏢</div>
              </div>
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

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Milestones That<br />Define Our Path</h2>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership Team</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-subtitle">
              Passionate professionals dedicated to your success
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">🔗</a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">🐦</a>
                    <a href={member.social.email}>📧</a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's work together to achieve your goals and drive success</p>
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