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
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
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

function SectionHeading({ eyebrow, title, description, center = false }) {
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
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Aplinode" />
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
            <Icon name="arrow_forward" />
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
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              Engineering Trust, Delivering Growth
            </div>

            <h1>
              Web Development & Modern Digital Experiences{" "}
              <span>that Build Trust</span>
            </h1>

            <p className="hero-description">
              Aplinode is a web development agency building premium websites,
              landing pages, web applications, dashboards, and digital
              experiences for modern businesses.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <Icon name="trending_flat" />
              </Link>

              <a
                href="mailto:contact@aplinode.com"
                className="btn-secondary"
              >
                Book Free Consultation
                <Icon name="calendar_month" />
              </a>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-item">
                <Icon name="verified" />
                Premium Quality
              </div>

              <div className="hero-trust-item">
                <Icon name="speed" />
                Fast Delivery
              </div>

              <div className="hero-trust-item">
                <Icon name="devices" />
                Responsive First
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual reveal-right" delay={150}>
            <div className="hero-image-border">
              <div className="hero-image-wrap">
                <img
                  src={HERO_IMAGE}
                  alt="Aplinode digital project"
                />
                <div className="hero-image-overlay" />

                <div className="hero-play">
                  <Icon name="play_arrow" />
                </div>
              </div>
            </div>

            <div className="hero-floating-card hero-card-top">
              <div className="hero-floating-icon">
                <Icon name="speed" />
              </div>
              <div>
                <strong>Fast Loading</strong>
                <span>Optimized performance</span>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <div className="hero-floating-icon">
                <Icon name="verified_user" />
              </div>
              <div>
                <strong>Secure & Scalable</strong>
                <span>Built for growth</span>
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
            ["phone_iphone", "Mobile Responsive"],
            ["verified_user", "Secure"],
            ["upgrade", "Scalable"],
            ["brush", "Modern Design"],
          ].map(([icon, text]) => (
            <div className="feature-item" key={text}>
              <Icon name={icon} />
              {text}
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
    description:
      "High-quality websites designed around your business goals.",
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
    description:
      "Powerful web applications built around real business workflows.",
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
    description:
      "Clean dashboards that turn complex information into useful insights.",
    items: [
      "Inventory Management",
      "CRM Integration",
      "Real-time Data Visualization",
      "User Role Control",
    ],
  },
  {
    icon: "database",
    title: "Database Solutions",
    description:
      "Reliable data architecture and integrations for modern applications.",
    items: [
      "Database Architecture",
      "Real-time Sync",
      "Relational Systems",
      "Data Migration & API Design",
    ],
  },
  {
    icon: "palette",
    title: "Graphic Designing",
    description:
      "Visual systems that make your brand consistent and memorable.",
    items: [
      "Brand Identity & Logo Design",
      "UI/UX Design",
      "Social Media Graphics",
      "Marketing Collateral",
    ],
  },
  {
    icon: "settings_suggest",
    title: "Maintenance & Support",
    description:
      "Continuous improvements that keep your digital product healthy.",
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
            <Reveal key={service.title} delay={index * 70}>
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
                <p>{service.description}</p>

                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Icon name="check_circle" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="service-arrow">
                  <Icon name="arrow_forward" />
                </div>
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
              We don't just write code; we solve business problems. Our
              approach combines technical expertise with a deep understanding
              of design, marketing, and user experience.
            </p>

            <Link to="/contact" className="text-link">
              Start a conversation
              <Icon name="arrow_forward" />
            </Link>
          </Reveal>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 90}>
                <article className="reason-card">
                  <div className="reason-icon">
                    <Icon name={reason.icon} />
                  </div>

                  <span className="reason-index">
                    0{index + 1}
                  </span>

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
            <div className="roadmap-top">
              <div>
                <span className="roadmap-label">
                  Project Roadmap
                </span>
                <h3>Milestone 4: Development</h3>
              </div>

              <div className="roadmap-status">
                <span />
                Active Status
              </div>
            </div>

            <div className="roadmap-title-row">
              <span>Development Progress</span>
              <strong>85%</strong>
            </div>

            <div className="roadmap-progress">
              <span />
            </div>

            <div className="roadmap-meta">
              <span>Milestone 4</span>

              <div className="roadmap-mini-progress">
                <span />
              </div>

              <span>100% Quality Assurance</span>
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
    short: "Understand the vision",
    progress: 15,
    description:
      "We start by diving deep into your vision, requirements, target audience, and challenges to create a strategic foundation.",
    current: "Business Discovery",
    time: "1–2 Days",
    deliverables: "Project Brief",
  },
  {
    icon: "route",
    title: "Planning & Strategy",
    short: "Build the roadmap",
    progress: 30,
    description:
      "We create a detailed roadmap, choose the right technology stack, and define clear deliverables for every phase.",
    current: "Project Planning",
    time: "2–4 Days",
    deliverables: "Technical Roadmap",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    short: "Design the experience",
    progress: 48,
    description:
      "High-fidelity wireframes and polished interfaces create an intuitive digital experience that represents your brand.",
    current: "Interface Design",
    time: "3–7 Days",
    deliverables: "UI/UX System",
  },
  {
    icon: "code",
    title: "Development",
    short: "Build the product",
    progress: 85,
    description:
      "Our engineers build and integrate every component with clean code, responsive layouts, performance optimization, and security best practices.",
    current: "Development",
    time: "1–4 Weeks",
    deliverables: "Working Product",
  },
  {
    icon: "verified",
    title: "Testing & QA",
    short: "Validate everything",
    progress: 95,
    description:
      "We test across devices, browsers, responsive breakpoints, and edge cases to ensure a reliable experience before launch.",
    current: "Quality Assurance",
    time: "2–5 Days",
    deliverables: "QA Report",
  },
  {
    icon: "rocket_launch",
    title: "Launch & Support",
    short: "Go live & grow",
    progress: 100,
    description:
      "We deploy your project, monitor performance, and provide ongoing support to keep everything running smoothly.",
    current: "Production Launch",
    time: "Ongoing",
    deliverables: "Live Product",
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
          <div className="masterplan-dashboard">
            <aside className="masterplan-sidebar">
              <div className="masterplan-sidebar-head">
                <span>Project Journey</span>

                <span className="masterplan-live">
                  <i />
                  Live
                </span>
              </div>

              <div className="masterplan-nav">
                {masterplanSteps.map((item, index) => (
                  <button
                    key={item.title}
                    className={`masterplan-nav-item ${
                      active === index ? "active" : ""
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <span className="masterplan-nav-number">
                      0{index + 1}
                    </span>

                    <span className="masterplan-nav-icon">
                      <Icon name={item.icon} />
                    </span>

                    <span className="masterplan-nav-copy">
                      <strong>{item.title}</strong>
                      <small>{item.short}</small>
                    </span>

                    <Icon
                      name="chevron_right"
                      className="masterplan-chevron"
                    />
                  </button>
                ))}
              </div>
            </aside>

            <div className="masterplan-content">
              <div className="masterplan-content-top">
                <div>
                  <span className="masterplan-badge">
                    Phase {active + 1} of 6
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                <div className="masterplan-complete">
                  <span>Completion</span>
                  <strong>{step.progress}%</strong>
                </div>
              </div>

              <div className="masterplan-progress-line">
                <span style={{ width: `${step.progress}%` }} />
              </div>

              <div className="masterplan-details">
                <div className="masterplan-detail-card">
                  <div className="masterplan-detail-icon">
                    <Icon name="track_changes" />
                  </div>

                  <div>
                    <small>Current Phase</small>
                    <strong>{step.current}</strong>
                  </div>
                </div>

                <div className="masterplan-detail-card">
                  <div className="masterplan-detail-icon">
                    <Icon name="schedule" />
                  </div>

                  <div>
                    <small>Estimated Time</small>
                    <strong>{step.time}</strong>
                  </div>
                </div>

                <div className="masterplan-detail-card">
                  <div className="masterplan-detail-icon">
                    <Icon name="inventory_2" />
                  </div>

                  <div>
                    <small>Deliverables</small>
                    <strong>{step.deliverables}</strong>
                  </div>
                </div>

                <div className="masterplan-detail-card">
                  <div className="masterplan-detail-icon">
                    <Icon name="verified_user" />
                  </div>

                  <div>
                    <small>Quality Gate</small>
                    <strong>Ready for next phase</strong>
                  </div>
                </div>
              </div>

              <div className="masterplan-description">
                <span>Phase Objective</span>
                <p>{step.description}</p>
              </div>

              <div className="masterplan-bottom">
                <div className="masterplan-check">
                  <Icon name="check_circle" />
                  Clear deliverables
                </div>

                <div className="masterplan-check">
                  <Icon name="check_circle" />
                  Quality focused
                </div>

                <div className="masterplan-check">
                  <Icon name="check_circle" />
                  Client aligned
                </div>
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
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: "storage",
    title: "Backend & DB",
    items: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase"],
  },
  {
    icon: "handyman",
    title: "Tools & Cloud",
    items: ["Vercel", "Git", "GitHub", "Figma", "Cloudinary"],
  },
  {
    icon: "psychology",
    title: "Next Gen",
    items: ["Python", "AI", "Automation", "Generative UI"],
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
            <Reveal key={technology.title} delay={index * 80}>
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
        <div className="founder-grid">
          <Reveal className="founder-visual reveal-left">
            <div className="founder-image-wrap">
              <img src={FOUNDER_IMAGE} alt="Mustafa Shahzad" />
            </div>

            <div className="founder-image-label">
              <Icon name="verified" />
              Visionary Leadership
            </div>
          </Reveal>

          <Reveal className="founder-copy" delay={150}>
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Visionary
            </div>

            <h2>Building Digital Experiences With Purpose</h2>

            <p>
              Founded by engineers with a passion for world-class digital
              experiences, Aplinode focuses on building products that look
              exceptional and perform even better.
            </p>

            <div className="founder-meta">
              <div className="founder-avatar">
                <img src={FOUNDER_IMAGE} alt="Mustafa Shahzad" />
              </div>

              <div>
                <strong>Mustafa Shahzad</strong>
                <span>Co-Founder</span>
              </div>
            </div>
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
            eyebrow="Who We Serve"
            title="Industries We Empower"
            description="Digital solutions tailored for ambitious businesses across different industries."
            center
          />
        </Reveal>

        <div className="industries-grid">
          {industries.map(([icon, title], index) => (
            <Reveal key={title} delay={index * 45}>
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
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            description="Real feedback from businesses we've helped grow."
            center
          />
        </Reveal>

        <Reveal delay={100}>
          <article className="testimonial-card">
            <div className="testimonial-quote">
              <Icon name="format_quote" />
            </div>

            <div className="testimonial-content">
              <h2>Trusted by businesses</h2>

              <blockquote>
                “Thanks brother I'm very satisfied with your service and price
                hope to do more good business together in future.”
              </blockquote>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <Icon name="business" />
                </div>

                <div>
                  <strong>Trendz Automotive</strong>
                  <span>Business Client</span>
                </div>
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
      "A typical landing page takes 1–2 weeks, while complex web applications can take 4–8 weeks depending on features and integrations.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Ongoing maintenance can include hosting management, security updates, performance optimization, and future feature improvements.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every product is designed responsively so it works smoothly across smartphones, tablets, laptops, and desktop screens.",
  },
];

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-grid">
          <Reveal className="faq-intro">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              FAQ
            </div>

            <h2>Frequently Asked Questions</h2>

            <p>
              Everything you need to know before starting your next digital
              project.
            </p>
          </Reveal>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 70}>
                <div className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActive(active === index ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <Icon
                      name={
                        active === index
                          ? "remove"
                          : "add"
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
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-glow cta-glow-one" />
      <div className="cta-glow cta-glow-two" />

      <div className="container">
        <Reveal>
          <div className="cta-inner">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Ready When You Are
            </div>

            <h2>Let's Build Something Exceptional</h2>

            <p>
              Transform your vision into a world-class digital reality. Your
              business deserves better than "good enough."
            </p>

            <div className="cta-actions">
              <a
                href="mailto:contact@aplinode.com"
                className="btn-primary"
              >
                Schedule Consultation
                <Icon name="calendar_month" />
              </a>

              <a
                href="mailto:contact@aplinode.com"
                className="btn-secondary"
              >
                Email Us
                <Icon name="mail" />
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
        <div className="contact-grid">
          <Reveal className="contact-copy">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              Contact Us
            </div>

            <h2>Let's connect and bring your ideas to life.</h2>

            <p>
              Have a project in mind? Tell us what you're building and let's
              turn the idea into a digital experience.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="location_on" />
                </div>

                <div>
                  <small>Address</small>
                  <strong>Karachi, Pakistan</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="call" />
                </div>

                <div>
                  <small>Phone</small>
                  <strong>+92 332 326 5152</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Icon name="mail" />
                </div>

                <div>
                  <small>Email</small>
                  <strong>contact@aplinode.com</strong>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap reveal-right" delay={120}>
            <form className="contact-form">
              <div className="contact-form-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 0000000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Website Development</option>
                    <option>Web App Development</option>
                    <option>Admin Dashboard</option>
                    <option>UI/UX Design</option>
                    <option>Maintenance & Support</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    placeholder="Tell us a little about your project..."
                  />
                </div>
              </div>

              <button type="button" className="btn-primary">
                Send Inquiry
                <Icon name="arrow_forward" />
              </button>
            </form>
          </Reveal>
        </div>
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
            <Link to="/">
              <img src={LOGO} alt="Aplinode" />
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
          <span>© 2026 Aplinode. All rights reserved.</span>

          <div>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}