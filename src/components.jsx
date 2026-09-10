import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const HERO_IMAGE =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/w_1536,q_auto,f_auto/v1781987794/WhatsApp_Image_2026-06-21_at_1.35.55_AM_ukc9zz.jpg";

const FOUNDER_IMAGE =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987865/mustafa-shahzad_vjlziu.png";

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <div className="section-eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </div>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Process", "/process"],
    ["Technologies", "/technologies"],
    ["Industries", "/industries"],
    ["FAQ", "/faq"],
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
          <img src={LOGO} alt="Aplinode" />
          <span>Aplinode</span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, path]) => (
            <Link
              key={label}
              to={path}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-background-grid" />

        <div className="hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Engineering Trust, Delivering Growth
            </div>

            <h1>
              <span className="blue-text">Web Development</span>
              <span>&amp; Modern Digital</span>
              <span>Experiences that Build</span>
              <span className="blue-text">Trust</span>
            </h1>

            <p className="hero-description">
              Aplinode is a web development agency in Pakistan
              building premium websites, landing pages, web
              applications, dashboards, and automation systems for
              modern businesses who refuse to settle for average.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/923323265152"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Start Your Project
                <Icon name="trending_flat" />
              </a>

              <a
                href="mailto:contact@aplinode.com"
                className="btn-secondary"
              >
                Book Free Consultation
              </a>
            </div>
          </Reveal>

          <Reveal
            className="hero-visual"
            delay={120}
          >
            <div className="hero-image-wrap">
              <img
                src={HERO_IMAGE}
                alt="Web development project built by Aplinode"
              />

              <div className="hero-play">
                <Icon name="play_arrow" />
              </div>
            </div>

            <div className="hero-responsive-card">
              <div className="hero-responsive-icon">
                <Icon name="devices" />
              </div>

              <div>
                <span>Responsiveness</span>
                <strong>Fully Responsive</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="feature-strip">
        <div className="feature-strip-inner">
          {[
            ["devices", "Fully Responsive"],
            ["speed", "Fast Loading"],
            ["search", "SEO Friendly"],
            ["devices", "Mobile Responsive"],
            ["verified_user", "Secure"],
            ["upgrade", "Scalable"],
            ["brush", "Modern Design"],
          ].map(([icon, text]) => (
            <div className="feature-item" key={text}>
              <Icon name={icon} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const services = [
  {
    icon: "language",
    title: "Website Development",
    items: [
      "Professional Portfolios",
      "High-Conversion Landing Pages",
      "Multi-page Business Sites",
      "Blog & Content Platforms",
    ],
  },
  {
    icon: "layers",
    title: "Web App Development",
    items: [
      "Custom SaaS Solutions",
      "E-commerce Marketplaces",
      "Dynamic User Portals",
      "Social Networking Apps",
    ],
  },
  {
    icon: "dashboard",
    title: "Admin Panels & Dashboards",
    items: [
      "Inventory Management",
      "CRM Integration",
      "Real-time Data Visualization",
      "User Role Control (RBAC)",
    ],
  },
  {
    icon: "database",
    title: "Database Solutions",
    items: [
      "Database Architecture",
      "Real-time Sync (Firestore)",
      "Relational Systems (Supabase)",
      "Data Migration & API Design",
    ],
  },
  {
    icon: "palette",
    title: "Graphic Designing",
    items: [
      "Brand Identity & Logo Design",
      "UI/UX Design",
      "Social Media Graphics",
      "Print & Marketing Collateral",
    ],
  },
  {
    icon: "settings_suggest",
    title: "Maintenance & Support",
    items: [
      "Security Updates & Audits",
      "Performance Monitoring",
      "Feature Upgrades",
      "Hosting Management",
    ],
  },
];

export function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Solutions Crafted For Impact"
            description="From concept to deployment, we engineer digital products that give your business a competitive edge."
          />
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 60}
            >
              <article className="service-card">
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon name={service.icon} />
                  </div>

                  <span className="service-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Icon name="check_circle" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: "palette",
    title: "Premium UI",
    description: "World-class visual aesthetics.",
  },
  {
    icon: "ads_click",
    title: "Conversion Focused",
    description: "Designed to turn visitors into leads.",
  },
  {
    icon: "bolt",
    title: "Fast Delivery",
    description: "Rapid development cycles.",
  },
  {
    icon: "rocket_launch",
    title: "Startup Friendly",
    description: "Scalable foundations for growth.",
  },
];

export function WhyAplinode() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-layout">
          <Reveal className="why-copy">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Why Aplinode
            </div>

            <h2>Why Businesses Choose Aplinode</h2>

            <p>
              We don't just write code; we solve business problems.
              Our approach combines technical expertise with a deep
              understanding of marketing and user psychology.
            </p>
          </Reveal>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <Reveal
                key={reason.title}
                delay={index * 70}
              >
                <article className="reason-card">
                  <div className="reason-icon">
                    <Icon name={reason.icon} />
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="roadmap-section">
      <div className="container">
        <Reveal>
          <div className="roadmap-card">
            <div className="roadmap-header">
              <div className="roadmap-label">
                Project Roadmap
              </div>

              <div className="roadmap-status">
                <span />
                Active Status
              </div>
            </div>

            <div className="roadmap-main">
              <h3>Milestone 4: Development</h3>

              <div className="roadmap-percentage">
                <strong>85%</strong>
                <span>Complete</span>
              </div>
            </div>

            <div className="roadmap-progress">
              <span />
            </div>

            <div className="roadmap-bottom">
              <span>Milestone 4</span>

              <div className="roadmap-quality">
                <span />
                Quality Assurance
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const masterplanSteps = [
  {
    icon: "search",
    title: "Discovery",
    description:
      "We start by diving deep into your vision, requirements, and challenges to ensure a strategic foundation.",
  },
  {
    icon: "route",
    title: "Planning & Strategy",
    description:
      "We create a detailed roadmap, choose the right tech stack, and define clear deliverables for every phase.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "High-fidelity wireframes and interactive prototypes that represent your brand perfectly.",
  },
  {
    icon: "code",
    title: "Development",
    description:
      "Our engineers build and integrate every component with clean code, performance optimization, and security best practices.",
  },
  {
    icon: "verified",
    title: "Testing & QA",
    description:
      "We test across devices, browsers, and edge cases to ensure a flawless experience before going live.",
  },
  {
    icon: "rocket_launch",
    title: "Launch & Support",
    description:
      "We deploy your project, monitor performance, and provide ongoing support to keep everything running smoothly.",
  },
];

export function Masterplan() {
  const [active, setActive] = useState(0);
  const step = masterplanSteps[active];

  return (
    <section className="section masterplan-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="The Masterplan"
            description="Our systematic approach to engineering excellence."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="masterplan">
            <div className="masterplan-list">
              {masterplanSteps.map((item, index) => (
                <button
                  key={item.title}
                  className={`masterplan-step ${
                    active === index ? "active" : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  <span className="masterplan-number">
                    {index + 1}
                  </span>

                  <span className="masterplan-step-icon">
                    <Icon name={item.icon} />
                  </span>

                  <span className="masterplan-step-text">
                    <strong>{item.title}</strong>
                  </span>

                  <Icon
                    name="chevron_right"
                    className="masterplan-arrow"
                  />
                </button>
              ))}
            </div>

            <div className="masterplan-detail">
              <div className="masterplan-detail-top">
                <span>Phase {active + 1} of 6</span>

                <strong>
                  {Math.round(((active + 1) / 6) * 100)}%
                </strong>
              </div>

              <div className="masterplan-detail-icon">
                <Icon name={step.icon} />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <div className="masterplan-line">
                <span
                  style={{
                    width: `${((active + 1) / 6) * 100}%`,
                  }}
                />
              </div>

              <div className="masterplan-detail-footer">
                <span>
                  <Icon name="check_circle" />
                  Clear deliverables
                </span>

                <span>
                  <Icon name="verified" />
                  Quality focused
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const technologies = [
  {
    icon: "terminal",
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    icon: "storage",
    title: "Backend & DB",
    items: [
      "Supabase",
      "Firebase",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    icon: "handyman",
    title: "Tools & Cloud",
    items: [
      "Vercel",
      "Git / GitHub",
      "Figma",
      "Docker",
    ],
  },
  {
    icon: "psychology",
    title: "Next Gen",
    items: [
      "AI Assisted Dev",
      "AI Research",
      "Generative UI",
    ],
  },
];

export function Technologies() {
  return (
    <section className="section tech-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Arsenal"
            title="The Tech Behind Performance"
            description="We use modern, battle-tested technologies to build systems that scale with your ambitions."
            center
          />
        </Reveal>

        <div className="tech-grid">
          {technologies.map((technology, index) => (
            <Reveal
              key={technology.title}
              delay={index * 70}
            >
              <article className="tech-card">
                <div className="tech-icon">
                  <Icon name={technology.icon} />
                </div>

                <h3>{technology.title}</h3>

                <div className="tech-list">
                  {technology.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="section founder-section">
      <div className="container">
        <div className="founder-layout">
          <Reveal className="founder-copy">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Visionary
            </div>

            <p className="founder-intro">
              Founded by engineers with a passion for world-class
              digital experiences.
            </p>

            <div className="founder-person">
              <div className="founder-avatar">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Mustafa Shahzad"
                />
              </div>

              <div>
                <h3>Mustafa Shahzad</h3>
                <span>Co-Founder</span>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="founder-image"
            delay={120}
          >
            <img
              src={FOUNDER_IMAGE}
              alt="Mustafa Shahzad"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const industries = [
  ["rocket_launch", "Startups"],
  ["cloud", "SaaS"],
  ["restaurant", "Restaurants"],
  ["medical_services", "Clinics"],
  ["apartment", "Real Estate"],
  ["groups", "Agencies"],
  ["school", "Coaches"],
  ["psychology", "Consultants"],
  ["shopping_cart", "E-commerce"],
  ["help_outline", "Your Industry?"],
];

export function Industries() {
  return (
    <section className="section industries-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Industries We Empower"
            description="Digital solutions tailored for ambitious businesses across different industries."
            center
          />
        </Reveal>

        <div className="industries-grid">
          {industries.map(([icon, title], index) => (
            <Reveal
              key={title}
              delay={index * 40}
            >
              <div className="industry-card">
                <Icon name={icon} />
                <span>{title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="What Our Clients Say"
            description="Real feedback from businesses we've helped grow."
            center
          />
        </Reveal>

        <Reveal delay={100}>
          <article className="testimonial-card">
            <div className="testimonial-icon">
              <Icon name="format_quote" />
            </div>

            <blockquote>
              “Thanks brother I'm very satisfied with your service
              and price hope to do more good business together in
              future 🤝”
            </blockquote>

            <div className="testimonial-client">
              <div className="testimonial-client-icon">
                <Icon name="business" />
              </div>

              <div>
                <strong>Trendz Automotive</strong>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical landing page takes 1-2 weeks, while complex web applications can take 4-8 weeks depending on features and integrations.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance packages that include hosting management, security updates, and performance optimization.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every single product we build is responsive-first, ensuring a flawless experience on smartphones, tablets, and desktops.",
  },
];

export function FAQ() {
  const [active, setActive] = useState(-1);

  return (
    <section className="section faq-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Frequently Asked Questions"
            center
          />
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              delay={index * 60}
            >
              <div className="faq-item">
                <button
                  className="faq-question"
                  onClick={() =>
                    setActive(
                      active === index ? -1 : index
                    )
                  }
                >
                  <span>{faq.question}</span>

                  <Icon
                    name={
                      active === index
                        ? "remove"
                        : "expand_more"
                    }
                  />
                </button>

                <div
                  className={`faq-answer ${
                    active === index ? "open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <div className="cta-inner">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Ready When You Are
            </div>

            <h2>Let's Build Something Exceptional</h2>

            <p>
              Transform your vision into a world-class digital
              reality. Your business deserves better than "good
              enough."
            </p>

            <div className="cta-actions">
              <a
                href="https://wa.me/923323265152"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp Us Now
                <Icon name="chat" />
              </a>

              <a
                href="mailto:contact@aplinode.com"
                className="btn-secondary"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Contact Information</h2>

              <p>
                Let's connect and bring your ideas to life.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="location_on" />
                </div>

                <div>
                  <span>Address</span>
                  <strong>Karachi, Pakistan</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="call" />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+92 332 326 5152</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="mail" />
                </div>

                <div>
                  <span>Email</span>
                  <strong>contact@aplinode.com</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="language" />
                </div>

                <div>
                  <span>Website</span>
                  <a
                    href="https://www.aplinode.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.aplinode.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={LOGO} alt="Aplinode" />
              <span>Aplinode</span>
            </Link>

            <p>
              Crafting Modern Digital Experiences That Build Trust.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>

            <Link to="/services">Services</Link>
            <Link to="/process">Our Process</Link>
            <Link to="/technologies">Technology</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>

            <span>Karachi, Pakistan</span>
            <span>+92 332 326 5152</span>
            <span>contact@aplinode.com</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Aplinode</span>

          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}