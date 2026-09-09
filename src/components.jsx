export function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-mark">✣</span>
          <span>Aplinode</span>
        </a>

        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#technologies">Technologies</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Started
        </a>

        <button className="mobile-menu" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}

function DashboardMockup() {
  return (
    <div className="dashboard-wrapper">

      <div className="responsive-card">
        <div className="responsive-icon">▣</div>
        <div>
          <small>Responsiveness</small>
          <strong>Fully Responsive</strong>
        </div>
      </div>

      <div className="dashboard">
        <div className="dashboard-top">
          <div className="dashboard-brand">
            <span>✣</span>
            <div>
              <strong>Aplinode</strong>
              <small>Software Solutions</small>
            </div>
          </div>

          <div className="dashboard-title">
            <strong>Overview</strong>
            <small>Track performance, projects, growth across your agency.</small>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <span>Active Projects</span>
            <strong>12</strong>
            <em>↗ 24%</em>
          </div>

          <div className="stat">
            <span>New Clients</span>
            <strong>6</strong>
            <em>↗ 32%</em>
          </div>

          <div className="stat">
            <span>Projects Completed</span>
            <strong>5</strong>
            <em>↗ 25%</em>
          </div>

          <div className="stat">
            <span>Client Satisfaction</span>
            <strong>98%</strong>
            <em>↗ 8%</em>
          </div>
        </div>

        <div className="dashboard-grid">

          <div className="chart-box">
            <div className="box-heading">
              <strong>Projects Overview</strong>
              <span>Monthly⌄</span>
            </div>

            <div className="bars">
              <i style={{ height: "35%" }} />
              <i style={{ height: "50%" }} />
              <i style={{ height: "42%" }} />
              <i style={{ height: "68%" }} />
              <i style={{ height: "57%" }} />
              <i style={{ height: "80%" }} />
              <i style={{ height: "92%" }} />
            </div>
          </div>

          <div className="donut-box">
            <div className="box-heading">
              <strong>Projects by Service</strong>
            </div>

            <div className="donut">
              <span>6</span>
            </div>
          </div>

        </div>

        <div className="bottom-grid">
          <div>
            <div className="box-heading">
              <strong>Top Services</strong>
            </div>

            <div className="service-line">
              <span>Web Development</span>
              <b>45%</b>
            </div>

            <div className="service-line">
              <span>Mobile Development</span>
              <b>25%</b>
            </div>

            <div className="service-line">
              <span>UI/UX Design</span>
              <b>18%</b>
            </div>

            <div className="service-line">
              <span>Other</span>
              <b>12%</b>
            </div>
          </div>

          <div className="activity">
            <div className="box-heading">
              <strong>Recent Activity</strong>
            </div>

            <p><span /> New project started</p>
            <p><span /> Client meeting completed</p>
            <p><span /> Project milestone reached</p>
          </div>
        </div>
      </div>

      <div className="play-button">
        ▶
      </div>

      <div className="floating-dot dot-one" />
      <div className="floating-dot dot-two" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">

      <div className="hero-glow" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span />
            ENGINEERING TRUST, DELIVERING GROWTH
          </div>

          <h1>
            <span className="blue-text">Web Development</span>
            <span>&amp;</span>
            <span>Modern Digital</span>
            <span>Experiences that Build</span>
            <span className="blue-text">Trust</span>
          </h1>

          <p className="hero-description">
            Aplinode is a web development agency in Pakistan building
            premium websites, landing pages, web applications, dashboards,
            and automation systems for modern businesses who refuse to
            settle for average.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Start Your Project
              <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              Book Free Consultation
            </a>
          </div>

          <div className="hero-decoration">
            <span className="line" />
            <span className="mini-text">BUILD • GROW • SCALE</span>
          </div>

        </div>

        <div className="hero-visual">
          <DashboardMockup />
        </div>

      </div>
    </section>
  );
}