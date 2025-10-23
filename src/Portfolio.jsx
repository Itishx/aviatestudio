import './App.css'
import './PortfolioStyles.css'
import logo from './assets/aviatestudio.png'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Portfolio({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('branding')
  const [tabUnderlineStyle, setTabUnderlineStyle] = useState({})
  const tabsContainerRef = useRef(null)
  const navigate = useNavigate()

  const services = [
    {
      id: 'branding',
      title: 'A-Z Branding',
      description: 'Strategic brand identity and positioning that elevates your business. From logo design to brand guidelines, we create cohesive identities that resonate with your target audience.',
      projects: [
        { id: 1, name: 'Project 1', image: '' },
        { id: 2, name: 'Project 2', image: '' },
        { id: 3, name: 'Project 3', image: '' },
        { id: 4, name: 'Project 4', image: '' }
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      description: 'Engaging content creation and community management across all platforms. We handle graphic design, ad creation, marketing strategy, and more to grow your presence online.',
      projects: [
        { id: 1, name: 'Project 1', image: '' },
        { id: 2, name: 'Project 2', image: '' },
        { id: 3, name: 'Project 3', image: '' },
        { id: 4, name: 'Project 4', image: '' }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Design & Development',
      description: 'Complete web design and development solutions that convert. From responsive design to deployment, we build digital solutions tailored to your business goals.',
      projects: [
        { id: 1, name: 'Project 1', image: '' },
        { id: 2, name: 'Project 2', image: '' },
        { id: 3, name: 'Project 3', image: '' }
      ]
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Optimisation',
      description: 'Professional presence and thought leadership on LinkedIn. We optimize profiles, create engaging content, and build strategies for brands and founders to grow their network.',
      projects: [
        { id: 1, name: 'Project 1', image: '' },
        { id: 2, name: 'Project 2', image: '' },
        { id: 3, name: 'Project 3', image: '' }
      ]
    }
  ]

  const handleTabHover = (e, tabId) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const containerRect = tabsContainerRef.current.getBoundingClientRect()
    
    setTabUnderlineStyle({
      width: rect.width,
      left: rect.left - containerRect.left
    })
  }

  const handleTabClick = (serviceId) => {
    setActiveTab(serviceId)
    const element = document.getElementById(`service-${serviceId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTabsContainerLeave = () => {
    const activeTabElement = tabsContainerRef.current?.querySelector(`[data-tab="${activeTab}"]`)
    if (activeTabElement) {
      const rect = activeTabElement.getBoundingClientRect()
      const containerRect = tabsContainerRef.current.getBoundingClientRect()
      
      setTabUnderlineStyle({
        width: rect.width,
        left: rect.left - containerRect.left
      })
    }
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <button onClick={onNavigateHome} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
              <img src={logo} alt="Aviate Logo" className="navbar-logo-img" />
            </button>
          </div>
          <ul className="nav-menu">
            <li><a href="/#services">Services</a></li>
            <li><button onClick={onNavigateHome} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '0.65rem 1.5rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '400', fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, Arial, sans-serif", transition: 'all 0.3s ease' }}>Portfolio</button></li>
            <li><a href="/#contact" className="cta-link">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          {/* Portfolio Header */}
          <div className="portfolio-header">
            <h1 className="portfolio-title">Portfolio</h1>
            <p className="portfolio-intro">
              Explore our collection of work across different services. Each project represents our commitment to delivering exceptional results for our clients.
            </p>
            <a href="#" className="download-portfolio-btn" download>
              Download Our Portfolio
            </a>
          </div>

          {/* Tabs Navigation */}
          <div className="tabs-container" ref={tabsContainerRef} onMouseLeave={handleTabsContainerLeave}>
            {services.map((service) => (
              <button
                key={service.id}
                className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => handleTabClick(service.id)}
                onMouseEnter={(e) => handleTabHover(e, service.id)}
                data-tab={service.id}
              >
                {service.title}
              </button>
            ))}
            <div className="tab-underline" style={tabUnderlineStyle}></div>
          </div>

          {/* Service Sections */}
          {services.map((service) => (
            <div key={service.id} id={`service-${service.id}`} className="service-section">
              <div className="service-header">
                <h2 className="service-title">{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>

              {/* Projects Grid */}
              <div className="projects-grid">
                {service.projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-image-placeholder">
                      <span>Project Image</span>
                    </div>
                    <div className="project-info">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-meta">Click to view details</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/#careers">Careers</a></li>
                <li><a href="/#blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="/#branding">Branding</a></li>
                <li><a href="/#digital">Digital Marketing</a></li>
                <li><a href="/#content">Content Strategy</a></li>
                <li><a href="/#design">Design</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><button onClick={onNavigateHome} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontFamily: 'inherit' }}>Portfolio</button></li>
                <li><a href="/#case-studies">Case Studies</a></li>
                <li><a href="/#testimonials">Testimonials</a></li>
                <li><a href="/#faq">FAQ</a></li>
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

export default Portfolio