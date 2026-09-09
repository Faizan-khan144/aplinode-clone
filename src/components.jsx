import { useState } from "react";

const services = [
  {
    icon: "⌘",
    title: "Website Development",
    items: [
      "Professional Portfolios",
      "High-Conversion Landing Pages",
      "Multi-page Business Sites",
      "Blog & Content Platforms",
    ],
  },
  {
    icon: "▣",
    title: "Web App Development",
    items: [
      "Custom SaaS Solutions",
      "E-commerce Marketplaces",
      "Dynamic User Portals",
      "Social Networking Apps",
    ],
  },
  {
    icon: "▤",
    title: "Admin Panels & Dashboards",
    items: [
      "Inventory Management",
      "CRM Integration",
      "Real-time Data Visualization",
      "User Role Control (RBAC)",
    ],
  },
  {
    icon: "◈",
    title: "Database Solutions",
    items: [
      "Database Architecture",
      "Real-time Sync (Firestore)",
      "Relational Systems (Supabase)",
      "Data Migration & API Design",
    ],
  },
  {
    icon: "✦",
    title: "Graphic Designing",
    items: [
      "Brand Identity & Logo Design",
      "UI/UX Design",
      "Social Media Graphics",
      "Print & Marketing Collateral",
    ],
  },
  {
    icon: "⚙",
    title: "Maintenance & Support",
    items: [
      "Security Updates & Audits",
      "Performance Monitoring",
      "Feature Upgrades",
      "Hosting Management",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: "⌕",
    description:
      "Understanding your business goals and target audience.",
    detail:
      "We start by diving deep into your vision, requirements, and challenges to ensure a strategic foundation.",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    icon: "⌖",
    description:
      "Mapping out architecture, timeline, and milestones.",
    detail:
      "We create a detailed roadmap, choose the right tech stack, and define clear deliverables for every phase.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    icon: "✦",
    description:
      "Crafting visually stunning and intuitive experiences.",
    detail:
      "High-fidelity wireframes and interactive prototypes that represent your brand perfectly.",
  },
  {
    number: "04",
    title: "Development",
    icon: "</>",
    description:
      "Turning designs into fully functional code.",
    detail:
      "Our engineers build and integrate every component with clean code, performance optimization, and security best practices.",
  },
  {
    number: "05",
    title: "Testing & QA",
    icon: "✓",
    description:
      "Rigorous quality assurance before launch.",
    detail:
      "We test across devices, browsers, and edge cases to ensure a flawless experience before going live.",
  },
  {
    number: "06",
    title: "Launch & Support",
    icon: "↗",
    description:
      "Deploy and grow with ongoing maintenance.",
    detail:
      "We deploy your project, monitor performance, and provide ongoing support to keep everything running smoothly.",
  },
];

const industries = [
  ["🚀", "Startups"],
  ["☁", "SaaS"],
  ["⌂", "Restaurants"],
  ["✚", "Clinics"],
  ["▦", "Real Estate"],
  ["♧", "Agencies"],
  ["▣", "Coaches"],
  ["◉", "Consultants"],
  ["🛒", "E-commerce"],
  ["?", "Your Industry?"],
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical landing page takes 1-2 weeks, while complex web applications can take 4-8 weeks depending on features and integrations.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, performance monitoring, feature upgrades, and technical support after launch.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build follows a responsive-first approach and is optimized for mobile, tablet, and desktop devices.",
  },
];

function Logo() {
  return (
    <span className="brand-logo">
      <span>✣</span>
      Aplinode
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <Logo />
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#technologies" onClick={() => setOpen(false)}>Technologies</a>
          <a href="#industries" onClick={() => setOpen(false)}>Industries</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get Started
        </a>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard-wrap">
      <div className="responsive-floating-card">
        <span>▣</span>
        <div>
          <small>Responsiveness</small>
          <strong>Fully Responsive</strong>
        </div>
      </div>

      <div className="hero-dashboard">
        <div className="dashboard-header">
          <div className="dashboard-logo">
            <span>✣</span>
            <div>
              <strong>Aplinode</strong>
              <small>Software Solutions</small>
            </div>
          </div>

          <div className="dashboard-overview">
            <strong>Overview</strong>
            <small>Track performance, projects & growth.</small>
          </div>
        </div>

        <div className="dashboard-stats">
          <div>
            <span>Active Projects</span>
            <strong>12</strong>
            <em>↗ 24%</em>
          </div>

          <div>
            <span>New Clients</span>
            <strong>06</strong>
            <em>↗ 32%</em>
          </div>

          <div>
            <span>Completed</span>
            <strong>05</strong>
            <em>↗ 25%</em>
          </div>

          <div>
            <span>Satisfaction</span>
            <strong>98%</strong>
            <em>↗ 8%</em>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-box">
            <div className="box-title">
              <strong>Projects Overview</strong>
              <span>Monthly⌄</span>
            </div>

            <div className="chart">
              <i style={{ height: "35%" }} />
              <i style={{ height: "52%" }} />
              <i style={{ height: "44%" }} />
              <i style={{ height: "68%" }} />
              <i style={{ height: "57%" }} />
              <i style={{ height: "79%" }} />
              <i style={{ height: "94%" }} />
            </div>
          </div>

          <div className="dashboard-box donut-panel">
            <div className="box-title">
              <strong>Projects by Service</strong>
            </div>

            <div className="donut">
              <span>6</span>
            </div>
          </div>
        </div>

        <div className="dashboard-bottom">
          <div>
            <div className="box-title">
              <strong>Top Services</strong>
            </div>

            <div className="service-progress">
              <span>Web Development</span>
              <b>45%</b>
            </div>
            <div className="service-progress">
              <span>Mobile Development</span>
              <b>25%</b>
            </div>
            <div className="service-progress">
              <span>UI/UX Design</span>
              <b>18%</b>
            </div>
            <div className="service-progress">
              <span>Other</span>
              <b>12%</b>
            </div>
          </div>

          <div className="dashboard-activity">
            <div className="box-title">
              <strong>Recent Activity</strong>
            </div>

            <p><span />New project started</p>
            <p><span />Client meeting completed</p>
            <p><span />Project milestone reached</p>
          </div>
        </div>
      </div>

      <div className="play-circle">▶</div>
      <span className="hero-dot hero-dot-one" />
      <span className="hero-dot hero-dot-two" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            ENGINEERING TRUST, DELIVERING GROWTH
          </div>

          <h1>
            <span className="blue-text">Web Development</span>
            <span>&amp; Modern Digital</span>
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
            <a
              href="https://wa.me/923323265152"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Start Your Project
              <span>→</span>
            </a>

            <a
              href="mailto:contact@aplinode.com"
              className="secondary-button"
            >
              Book Free Consultation
            </a>
          </div>

          <div className="hero-features">
            <span>⚡ Fast Loading</span>
            <span>⌕ SEO Friendly</span>
            <span>▣ Mobile Responsive</span>
            <span>✓ Secure</span>
            <span>↗ Scalable</span>
            <span>✦ Modern Design</span>
          </div>
        </div>

        <div className="hero-visual">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">WHAT WE BUILD</span>

          <h2>
            Solutions Crafted For <span>Impact</span>
          </h2>

          <p>
            From concept to deployment, we engineer digital products that
            give your business a competitive edge.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card ${active === index ? "active" : ""}`}
              key={service.title}
              onMouseEnter={() => setActive(index)}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <div className="service-items">
                {service.items.map((item) => (
                  <div key={item}>
                    <span>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <span className="service-card-arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    ["✦", "Premium UI", "World-class visual aesthetics."],
    ["◉", "Conversion Focused", "Designed to turn visitors into leads."],
    ["ϟ", "Fast Delivery", "Rapid development cycles."],
    ["↗", "Startup Friendly", "Scalable foundations for growth."],
  ];

  return (
    <section className="why-section">
      <div className="section-container why-grid">
        <div className="why-content">
          <span className="section-label">WHY APLINODE</span>

          <h2>
            Why Businesses Choose <span>Aplinode</span>
          </h2>

          <p>
            We don't just write code; we solve business problems. Our
            approach combines technical expertise with a deep understanding
            of marketing and user psychology.
          </p>

          <div className="reasons-grid">
            {reasons.map(([icon, title, text]) => (
              <div className="reason-card" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="roadmap-card">
          <div className="roadmap-top">
            <div>
              <small>Project Roadmap</small>
              <strong>Active Status</strong>
            </div>
            <span>85%</span>
          </div>

          <div className="roadmap-status">
            <span />
            Milestone 4: Development
          </div>

          <div className="roadmap-progress">
            <div />
          </div>

          <div className="roadmap-bottom">
            <span>85% Complete</span>
            <span>100%</span>
          </div>

          <div className="qa-box">
            <span>✓</span>
            <div>
              <small>Quality Assurance</small>
              <strong>Ready for final testing</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <section className="process-section" id="process">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">OUR MASTERPLAN</span>

          <h2>
            The <span>Masterplan</span>
          </h2>

          <p>
            Our systematic approach to engineering excellence.
          </p>
        </div>

        <div className="process-layout">
          <div className="process-list">
            {processSteps.map((item, index) => (
              <button
                type="button"
                className={`process-item ${active === index ? "active" : ""}`}
                key={item.number}
                onClick={() => setActive(index)}
              >
                <span className="process-item-number">
                  {item.number}
                </span>

                <span className="process-item-icon">
                  {item.icon}
                </span>

                <span className="process-item-text">
                  <small>Step {item.number}</small>
                  <strong>{item.title}</strong>
                </span>

                <span>→</span>
              </button>
            ))}
          </div>

          <div className="process-detail" key={active}>
            <div className="process-detail-top">
              <div className="process-big-icon">{step.icon}</div>
              <span>{step.number}</span>
            </div>

            <small>STEP {step.number}</small>

            <h3>{step.title}</h3>

            <p className="process-main-description">
              {step.description}
            </p>

            <div className="process-detail-line" />

            <p className="process-detail-text">
              {step.detail}
            </p>

            <div className="process-progress">
              <div>
                <span>PROCESS</span>
                <strong>
                  {active + 1} / {processSteps.length}
                </strong>
              </div>

              <div className="process-track">
                <div
                  style={{
                    width: `${((active + 1) / processSteps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Technologies() {
  const groups = [
    {
      icon: "</>",
      title: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: "▣",
      title: "Backend & DB",
      items: ["Supabase", "Firebase", "Node.js", "PostgreSQL"],
    },
    {
      icon: "⚒",
      title: "Tools & Cloud",
      items: ["Vercel", "Git / GitHub", "Figma", "Docker"],
    },
    {
      icon: "◉",
      title: "Next Gen",
      items: ["AI Assisted Dev", "AI Research", "Generative UI"],
    },
  ];

  return (
    <section className="technology-section" id="technologies">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">OUR ARSENAL</span>

          <h2>
            The Tech Behind <span>Performance</span>
          </h2>

          <p>
            We use modern, battle-tested technologies to build systems
            that scale with your ambitions.
          </p>
        </div>

        <div className="tech-grid">
          {groups.map((group) => (
            <div className="tech-card" key={group.title}>
              <div className="tech-card-top">
                <span>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="tech-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="founder-section">
      <div className="section-container founder-grid">
        <div className="founder-image">
          <img
            src="https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto/f_auto/v1781987865/mustafa-shahzad_vjlziu.png"
            alt="Mustafa Shahzad"
          />
        </div>

        <div className="founder-content">
          <span className="section-label">VISIONARY</span>

          <h2>
            Founded by engineers with a passion for
            <span> world-class digital experiences.</span>
          </h2>

          <div className="founder-line" />

          <h3>Mustafa Shahzad</h3>
          <p>Co-Founder</p>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">WHO WE SERVE</span>

          <h2>
            Industries We <span>Empower</span>
          </h2>

          <p>
            Digital solutions designed around the unique needs of modern
            industries.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map(([icon, name]) => (
            <div className="industry-card" key={name}>
              <span>{icon}</span>
              <strong>{name}</strong>
              <small>Explore →</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">CLIENT STORIES</span>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p>
            Real feedback from businesses we've helped grow.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">“</div>

          <p>
            Thanks brother I'm very satisfied with your service and price
            hope to do more good business together in future 🤝
          </p>

          <div className="testimonial-footer">
            <div className="client-icon">⌂</div>

            <div>
              <strong>Trendz Automotive</strong>
              <small>Business Client</small>
            </div>

            <a
              href="https://trendzautomotive.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="section-container faq-container">
        <div className="section-heading">
          <span className="section-label">FAQ</span>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${open === index ? "open" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>
                <b>{open === index ? "−" : "+"}</b>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="section-label">LET'S BUILD</span>

        <h2>
          Let's Build Something <span>Exceptional</span>
        </h2>

        <p>
          Transform your vision into a world-class digital reality.
          Your business deserves better than "good enough."
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/923323265152"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            WhatsApp Us Now →
          </a>

          <a
            href="mailto:contact@aplinode.com"
            className="cta-outline-button"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container contact-grid">
        <div className="contact-intro">
          <span className="section-label">CONTACT</span>

          <h2>
            Let's connect and bring your
            <span> ideas to life.</span>
          </h2>
        </div>

        <div className="contact-details">
          <div>
            <span>⌖</span>
            <div>
              <small>Address</small>
              <strong>Karachi, Pakistan</strong>
            </div>
          </div>

          <div>
            <span>☎</span>
            <div>
              <small>Phone</small>
              <strong>+92 332 326 5152</strong>
            </div>
          </div>

          <div>
            <span>✉</span>
            <div>
              <small>Email</small>
              <strong>contact@aplinode.com</strong>
            </div>
          </div>

          <div>
            <span>◉</span>
            <div>
              <small>Website</small>
              <strong>aplinode.com</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <Logo />

          <p>
            Crafting Modern Digital Experiences That Build Trust.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/aplinode"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://wa.me/923323265152"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/aplinode/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/aplinode"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>

          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#technologies">Technology</a>
          <a href="#industries">Industries</a>
          <a href="#faq">FAQ</a>
        </div>

        <div>
          <h4>Contact Us</h4>

          <a href="#contact">Karachi, Pakistan</a>
          <a href="tel:+923323265152">+92 332 326 5152</a>
          <a href="mailto:contact@aplinode.com">
            contact@aplinode.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="section-container">
          © 2026 Aplinode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}