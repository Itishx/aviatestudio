import './App.css'
import logo from './assets/aviatestudio.png'
import brandingImage from './assets/branding.png'
import gdImage from './assets/gd.png'
import { useState } from 'react'
import Portfolio from './Portfolio'

function App() {
  const [currentImage, setCurrentImage] = useState(brandingImage)
  const [currentPage, setCurrentPage] = useState('home')

  const handleServiceHover = (serviceType) => {
    switch(serviceType) {
      case 'branding':
        setCurrentImage(brandingImage)
        break
      case 'social-media':
        setCurrentImage(gdImage)
        break
      case 'web-development':
        setCurrentImage(brandingImage)
        break
      case 'video-editing':
        setCurrentImage(gdImage)
        break
      default:
        setCurrentImage(brandingImage)
    }
  }

  if (currentPage === 'portfolio') {
    return <Portfolio onNavigateHome={() => setCurrentPage('home')} />
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Aviate Logo" className="navbar-logo-img" />
          </div>
          <ul className="nav-menu">
            <li><a href="#services">Services</a></li>
            <li><button onClick={() => setCurrentPage('portfolio')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '0.65rem 1.5rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '400', fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", transition: 'all 0.3s ease' }} className="nav-portfolio-link">Portfolio</button></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="cta-link">Get Started</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-description">
            We are a creative marketing agency <em>designed</em> to never let you need another
          </p>
          <p className="hero-subparagraph">
            We aim to be the marketing agency you can finally settle down with. This could be a long-term relationship, built on creativity, results, and a healthy dose of 'we told you so, in a good way of course.
          </p>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <p className="mission-text">
            At Aviate, our mission is simple: to fuel your venture's growth with strategic, optimized solutions. We don't just deliver results—we make the process seamless, engaging, and tailored to your vision. Your goals become ours, and together, we craft a brand presence that commands recognition. With us, you don't just dream of success—you see it in real numbers.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="intelligence-section">
        <div className="intelligence-container">
          <div className="intelligence-content">
            <div className="intelligence-image">
              <img 
                src={currentImage} 
                alt="Service showcase" 
                className="service-showcase-image"
              />
            </div>
            <div className="intelligence-text">
              <div className="intelligence-label">
                SERVICES
              </div>
              <h2 className="intelligence-heading">
                What We Can Do For You
              </h2>
              <p className="intelligence-description">
                We're designed to handle all kinds of services a brand or startup would need to grow online and get people talking. Here's an overview of everything we can do for you.
              </p>
              <div className="intelligence-features">
                <div 
                  className="feature-block"
                  onMouseEnter={() => handleServiceHover('branding')}
                >
                  <h3 className="feature-title">01 - A-Z Branding</h3>
                  <p className="feature-description">We will build/ rebuild your brand identity from the ground up ↗</p>
                </div>
                <div 
                  className="feature-block"
                  onMouseEnter={() => handleServiceHover('social-media')}
                >
                  <h3 className="feature-title">02 - Social Media Management</h3>
                  <p className="feature-description">Like Graphic Design, Ad creation, Marketing Strategy and more ↗</p>
                </div>
                <div 
                  className="feature-block"
                  onMouseEnter={() => handleServiceHover('web-development')}
                >
                  <h3 className="feature-title">03 - Complete Web Design and Development</h3>
                  <p className="feature-description">Complete Web Design and Development + Deployment ↗</p>
                </div>
                <div 
                  className="feature-block"
                  onMouseEnter={() => handleServiceHover('video-editing')}
                >
                  <h3 className="feature-title">04 - LinkedIn Optimisation</h3>
                  <p className="feature-description">LinkedIn optimisation and growth for brands and founders ↗</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#branding">Branding</a></li>
                <li><a href="#digital">Digital Marketing</a></li>
                <li><a href="#content">Content Strategy</a></li>
                <li><a href="#design">Design</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section footer-logo-wrapper">
              <div className="logo-with-description">
                <img src={logo} alt="Aviate Logo" className="footer-logo-bottom-enlarged" />
                <p className="footer-logo-description">
                  Aviate is a creative marketing agency dedicated to helping brands elevate their presence. We transform visions into reality through strategic creativity, data-driven insights, and unwavering commitment to your success.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Aviate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
