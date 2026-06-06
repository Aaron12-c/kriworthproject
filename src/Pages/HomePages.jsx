// frontend/src/Pages/HomePages.jsx
import { useEffect, useState } from 'react';
import './HomePage.css';

// Import hero images
import heroImg1 from '../assets/hero.png';
import heroImg2 from '../assets/hero image.png';
import heroImg3 from '../assets/hero image 2.png';
import image1 from '../assets/image.png';
import image2 from '../assets/image 2.png';

// Import custom icons for "Who We Serve" section
import trendingIcon from '../assets/trending_up_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import plantIcon from '../assets/potted_plant_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import handshakeIcon from '../assets/handshake_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';
import scaleIcon from '../assets/scale_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';

const HomePages = () => {
  const [, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images
  const heroImages = [heroImg1, heroImg2, heroImg3, image1, image2];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero">
        {/* Background Images */}
        <div className="hero-background">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-bg-line"></div>
        <div className="hero-bg-dot"></div>
        <div className="hero-bg-dot2"></div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <i className="ti ti-building-store" aria-hidden="true"></i>
            <span>Advisory and digital tools for Nigerian MSMEs</span>
          </div>
          <h1 className="hero-title">
            Turn your business into<br />a <em>funded, structured</em><br />enterprise.
          </h1>
          <p className="hero-sub">
            Krisworth Growth Solutions provides capacity building, compliance advisory, 
            financial tools, and funding access support for women-led SMEs across Nigeria.
          </p>
          <div className="hero-actions">
            <a href="#programme" onClick={(e) => handleSmoothScroll(e, '#programme')} className="btn-primary">
              Join the Free Programme
            </a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="btn-outline">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">9</div>
              <div className="stat-label">Service areas</div>
            </div>
            <div>
              <div className="stat-num">100+</div>
              <div className="stat-label">Grants tracked</div>
            </div>
            <div>
              <div className="stat-num">Free</div>
              <div className="stat-label">Entry programme</div>
            </div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="hero-nav-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="serve" id="about">
        <div className="inner">
          <div className="section-head">
            <div className="section-tag">Who we serve</div>
            <h2 className="section-title">
              Built for Nigerian MSMEs.<br />With a focus on women-led businesses.
            </h2>
            <p className="section-sub">
              From the woman running a food business from her home to the registered SME 
              owner preparing a loan application, Krisworth exists to close the gap between 
              effort and access.
            </p>
          </div>
          <div className="serve-grid">
            <div className="serve-card">
              <div className="serve-icon">
                <img 
                  src={trendingIcon} 
                  alt="Growth-stage SMEs icon"
                  className="serve-icon-img"
                />
              </div>
              <h3>Growth-stage SMEs</h3>
              <p>You are established and ready for the next level. You need audited statements, a strong business plan, and the right funding connection.</p>
            </div>
            <div className="serve-card">
              <div className="serve-icon">
                <img 
                  src={plantIcon} 
                  alt="Early-stage businesses icon"
                  className="serve-icon-img"
                />
              </div>
              <h3>Early-stage businesses</h3>
              <p>You are generating revenue but have no formal financial structure. We help you build the foundation that lenders and funders need to see.</p>
            </div>
            <div className="serve-card">
              <div className="serve-icon">
                <img 
                  src={handshakeIcon} 
                  alt="Businesses seeking funding icon"
                  className="serve-icon-img"
                />
              </div>
              <h3>Businesses seeking funding</h3>
              <p>You need a loan, a grant, or an investor but do not know if you qualify or where to start. We walk you through the full readiness journey.</p>
            </div>
            <div className="serve-card">
              <div className="serve-icon">
                <img 
                  src={scaleIcon} 
                  alt="Businesses needing compliance icon"
                  className="serve-icon-img"
                />
              </div>
              <h3>Businesses needing compliance</h3>
              <p>You want to formalise, register, and make sure your business is legally and financially structured. We provide the guidance and the tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="inner">
          <div className="services-intro">
            <div>
              <div className="section-tag">Our Services</div>
              <h2 className="section-title">Nine services. One ecosystem.</h2>
            </div>
            <div className="services-intro-right">
              <p>Every Krisworth service connects to the next. A client who starts with capacity building discovers the bookkeeping tool. The bookkeeping tool leads to financial statements. Financial statements open the door to funding readiness. The ecosystem is designed so that clients grow with us.</p>
              <p>Services are delivered digitally, with advisory support available for clients who need it.</p>
            </div>
          </div>
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">01</div>
              <span className="svc-tag tag-free">Free</span>
              <h3>Capacity Building</h3>
              <p>Structured training on business setup, financial management, and growth readiness. Delivered free online. The entry point for most Krisworth clients.</p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">02</div>
              <span className="svc-tag tag-paid">Paid</span>
              <h3>Compliance Advisory</h3>
              <p>Guidance on every document and structure your business needs to operate without regulatory risk. We make sure nothing is missing before you approach a funder.</p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">03</div>
              <span className="svc-tag tag-sub">Subscription</span>
              <h3>Simple Bookkeeping Tool</h3>
              <p>Track your income and expenses daily. The financial foundation every funded business needs and the simplest way to start building your records.</p>
            </div>
            {/* Service 4 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">04</div>
              <span className="svc-tag tag-sub">Subscription</span>
              <h3>Financial Statements Builder</h3>
              <p>Generate your income statement, balance sheet, and cash flow statement. The intelligence that lets you tell your business story to investors and funders.</p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">05</div>
              <span className="svc-tag tag-payg">Pay as you go</span>
              <h3>Credit Score Checker</h3>
              <p>Know your credit standing before you walk into a lender's office. No more surprises. No wasted applications. Just clarity before you commit.</p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">06</div>
              <span className="svc-tag tag-payg">Pay as you go</span>
              <h3>Credit and Funding Readiness</h3>
              <p>A full assessment of your credit standing and estimated loan eligibility. Understand exactly what you qualify for and what to fix before you apply.</p>
            </div>
            {/* Service 7 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">07</div>
              <span className="svc-tag tag-sub">Subscription</span>
              <h3>Grant Portal</h3>
              <p>100 active grants for Nigerian SMEs. Search, filter by sector and eligibility, find your match, and track your applications from one place.</p>
            </div>
            {/* Service 8 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">08</div>
              <span className="svc-tag tag-paid">Paid</span>
              <h3>Accounting Services</h3>
              <p>Professional accounting and audited financial statements for businesses that need the full documentation package for serious funding conversations.</p>
            </div>
            {/* Service 9 */}
            <div className="service-card">
              <i className="ti ti-arrow-up-right svc-arrow"></i>
              <div className="svc-num">09</div>
              <span className="svc-tag tag-paid">Paid</span>
              <h3>Business Plan Guidance</h3>
              <p>A structured plan that answers every question a bank or grant funder will ask. Supported by the Krisworth Business Plan Template Pack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY SECTION */}
      <section className="journey" id="journey">
        <div className="inner">
          <div className="section-head">
            <div className="section-tag">Client Journey</div>
            <h2 className="section-title">How clients enter, stay, and grow.</h2>
            <p className="section-sub">Krisworth is designed as a connected ecosystem. Every entry point leads somewhere. Every service connects to the next.</p>
          </div>
          <div className="journey-grid">
            <div className="journey-col">
              <h3>Enter</h3>
              <div className="journey-item">
                <div className="journey-item-label">Free Capacity Building</div>
                <div className="journey-item-text">Watch the training. Receive real value. Follow the call to action into the platform.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Direct Tool Access</div>
                <div className="journey-item-text">Come in directly through the bookkeeping tool or financial statements builder. No training required.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Aggregator Route</div>
                <div className="journey-item-text">Reach us through cooperative societies, market associations, government programmes, or NGO partners.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Other Services</div>
                <div className="journey-item-text">Referrals, compliance enquiries, and accounting requests all open into the full Krisworth ecosystem.</div>
              </div>
            </div>
            <div className="journey-col">
              <h3>Stay</h3>
              <div className="journey-item">
                <div className="journey-item-label">Connected Products</div>
                <div className="journey-item-text">Each tool leads naturally to the next. Bookkeeping to statements. Statements to funding readiness. No hard sells.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Subscription Model</div>
                <div className="journey-item-text">Monthly or annual plans with automated renewal reminders. The habit forms and the subscription follows.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Ongoing Content</div>
                <div className="journey-item-text">Free training and resources on the website bring clients back regularly and deepen their trust in the platform.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Progress Visibility</div>
                <div className="journey-item-text">Clients who see their progress stay longer. Milestone acknowledgements and milestone improvements drive continued engagement.</div>
              </div>
            </div>
            <div className="journey-col">
              <h3>Grow</h3>
              <div className="journey-item">
                <div className="journey-item-label">Good Exit: Funded and Scaled</div>
                <div className="journey-item-text">The client achieved what they came for. Advanced tiers, accounting services, and business plan guidance are waiting for the next phase.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Lender Referral</div>
                <div className="journey-item-text">Qualifying clients are connected to financial institutions. Funding access is the final product of the readiness journey.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Re-entry</div>
                <div className="journey-item-text">Clients who lapse or move on can always return. There are no closed doors in the Krisworth ecosystem.</div>
              </div>
              <div className="journey-item">
                <div className="journey-item-label">Institutional Pathway</div>
                <div className="journey-item-text">Organisations and cooperatives can access Krisworth tools in bulk for their members. Scale without individual acquisition.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL TOOLS SECTION */}
      <section className="tools" id="tools">
        <div className="inner">
          <div className="section-head">
            <div className="section-tag">Digital Platform</div>
            <h2 className="section-title">Tools that work while you sleep.</h2>
            <p className="section-sub">The Krisworth digital platform brings your financial readiness tools, grant access, and loan preparation into one place. Built for Nigerian women business owners.</p>
          </div>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-name">Bookkeeping Tool</div>
              <div className="tool-desc">Daily income and expense tracking. Simple enough for any business owner. Powerful enough to build a financial record funders accept.</div>
              <div className="tool-status status-live"><span className="status-dot dot-live"></span> Live now</div>
            </div>
            <div className="tool-card">
              <div className="tool-name">Financial Statements Builder</div>
              <div className="tool-desc">Income statement, balance sheet, and cash flow statement generated from your records. Your business story, told in numbers.</div>
              <div className="tool-status status-live"><span className="status-dot dot-live"></span> Live now</div>
            </div>
            <div className="tool-card">
              <div className="tool-name">Loan Readiness Assessment</div>
              <div className="tool-desc">Know your credit standing and loan eligibility before you approach a lender. A full readiness score with an action plan to improve it.</div>
              <div className="tool-status status-live"><span className="status-dot dot-live"></span> Live now</div>
            </div>
            <div className="tool-card">
              <div className="tool-name">Grant Portal</div>
              <div className="tool-desc">100 active grants for Nigerian SMEs. Search by sector, type, and eligibility. Track your applications from research to award.</div>
              <div className="tool-status status-live"><span className="status-dot dot-live"></span> Live now</div>
            </div>
            <div className="tool-card">
              <div className="tool-name">Loan Planning Calculator</div>
              <div className="tool-desc">Model your repayment before you commit. See what you can afford, what the loan will cost, and how long repayment takes.</div>
              <div className="tool-status status-soon"><span className="status-dot dot-soon"></span> Coming soon</div>
            </div>
            <div className="tool-card">
              <div className="tool-name">Lender Matching</div>
              <div className="tool-desc">Qualified clients are connected to financial institutions that match their profile. The final step on the Krisworth readiness journey.</div>
              <div className="tool-status status-soon"><span className="status-dot dot-soon"></span> Coming soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE PROGRAMME SECTION */}
      <section className="free-prog" id="programme">
        <div className="free-prog-inner">
          <div>
            <h2>Free Financial Readiness Programme</h2>
            <p>A two-day programme for women business owners who want to fix their financial foundation and understand what it takes to access funding. No cost. No prior knowledge required. Just show up.</p>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="btn-primary">Register for the next cohort</a>
          </div>
          <div className="free-prog-cards">
            <div className="prog-card">
              <i className="ti ti-calendar-event prog-card-icon"></i>
              <div>
                <div className="prog-card-title">Day 1: Fix Your Finances</div>
                <div className="prog-card-text">Money mindset, separating personal and business money, simple record keeping, and understanding your profit.</div>
              </div>
            </div>
            <div className="prog-card">
              <i className="ti ti-chart-arrows prog-card-icon"></i>
              <div>
                <div className="prog-card-title">Day 2: Become Funding Ready</div>
                <div className="prog-card-text">What funders look for, how to apply for grants, your loan readiness score, and your 30-day action plan.</div>
              </div>
            </div>
            <div className="prog-card">
              <i className="ti ti-tools prog-card-icon"></i>
              <div>
                <div className="prog-card-title">Tools Included</div>
                <div className="prog-card-text">Access to the Krisworth Finance Tracker, Grant Portal, and Loan Readiness Calculator as part of the programme.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="revenue" id="pricing">
        <div className="inner">
          <div className="section-head">
            <div className="section-tag">How We Work</div>
            <h2 className="section-title">Simple, flexible pricing.</h2>
            <p className="section-sub">Start free. Pay only for what you need. Scale with us as your business grows.</p>
          </div>
          <div className="revenue-layers">
            <div className="rev-layer layer-teal">
              <div className="rev-layer-num">
                <div className="lnum">01</div>
                <div className="llab">FREE</div>
              </div>
              <div className="rev-layer-body">
                <h3>Start for free</h3>
                <div className="rev-sub" style={{ color: 'var(--teal-l)' }}>No payment required to begin.</div>
                <ul>
                  <li>Capacity building training on the website</li>
                  <li>Grant Portal basic access</li>
                  <li>Loan Readiness score (overview level)</li>
                  <li>Financial Readiness Programme registration</li>
                </ul>
              </div>
            </div>
            <div className="rev-layer layer-navy">
              <div className="rev-layer-num">
                <div className="lnum">02</div>
                <div className="llab">SUBSCR.</div>
              </div>
              <div className="rev-layer-body">
                <h3>Subscription access</h3>
                <div className="rev-sub" style={{ color: '#78A0D4' }}>Monthly or annual. Cancel anytime.</div>
                <ul>
                  <li>Bookkeeping tool with full history and export</li>
                  <li>Financial Statements Builder with PDF export</li>
                  <li>Grant Portal with full tracking and match features</li>
                  <li>Annual plan available at a significant discount on monthly</li>
                </ul>
              </div>
            </div>
            <div className="rev-layer layer-gold">
              <div className="rev-layer-num">
                <div className="lnum">03</div>
                <div className="llab">PAYG</div>
              </div>
              <div className="rev-layer-body">
                <h3>Pay as you go</h3>
                <div className="rev-sub" style={{ color: 'var(--gold-l)' }}>Use what you need, when you need it.</div>
                <ul>
                  <li>Credit score check per use</li>
                  <li>Credit and funding readiness full assessment</li>
                  <li>One-on-one advisory consultation</li>
                  <li>Accounting services and audited financial statements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" id="contact">
        <div className="inner">
          <div className="section-tag">Get Started</div>
          <h2 className="section-title">Your business deserves structure.</h2>
          <p className="section-sub">Whether you are starting from scratch or preparing for funding, Krisworth has the tools and support to get you there.</p>
          <div className="cta-actions">
            <a href="#programme" onClick={(e) => handleSmoothScroll(e, '#programme')} className="btn-primary">Join the Free Programme</a>
            <a href="mailto:krisworthgrowthsolutions@gmail.com" className="btn-outline cta-outline">Contact Us</a>
          </div>
          <p className="contact-email">krisworthgrowthsolutions@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default HomePages;