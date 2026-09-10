import { useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const categories = [
  {
    name: "General",
    count: 4,
    questions: [
      {
        q: "What does Aplinode do?",
        a: "Aplinode is a full-service software development studio. We design, build, and maintain digital products — websites, web apps, admin panels, databases, and automation systems — for startups, agencies, and businesses across industries.",
      },
      {
        q: "What types of businesses do you work with?",
        a: "We work with startups, SaaS companies, restaurants, healthcare businesses, real estate companies, agencies, coaches, e-commerce businesses, and other organizations that need reliable digital solutions.",
      },
      {
        q: "Where is Aplinode based?",
        a: "Aplinode is based in Karachi, Pakistan, and works with businesses and teams across different locations.",
      },
      {
        q: "How do I get started?",
        a: "Getting started is simple. Contact us through WhatsApp or email and tell us about your idea, business, or project. We will discuss your requirements and recommend the right approach.",
      },
    ],
  },
  {
    name: "Development",
    count: 4,
    questions: [
      {
        q: "What technologies do you use?",
        a: "We use modern technologies and frameworks based on the requirements of each project, including React, JavaScript, Node.js, databases, APIs, cloud services, and other reliable development tools.",
      },
      {
        q: "Can you build a complete web application?",
        a: "Yes. We can handle the complete development process, from planning and interface development to backend systems, databases, integrations, deployment, and ongoing improvements.",
      },
      {
        q: "Can you work with an existing project?",
        a: "Yes. We can review existing websites and applications, fix issues, improve performance, add new features, redesign interfaces, and continue development.",
      },
      {
        q: "Do you provide custom development?",
        a: "Yes. Every project is approached according to its specific business requirements. We build custom solutions instead of forcing every business into the same template.",
      },
    ],
  },
  {
    name: "Design",
    count: 3,
    questions: [
      {
        q: "Do you provide UI/UX design?",
        a: "Yes. We create clean, modern, responsive interfaces designed around usability, business goals, and the needs of the target audience.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Absolutely. We can improve an existing website's visual design, structure, responsiveness, usability, and overall digital experience.",
      },
      {
        q: "Do you create responsive designs?",
        a: "Yes. Our interfaces are designed to work smoothly across desktop, tablet, and mobile devices.",
      },
    ],
  },
  {
    name: "Pricing",
    count: 3,
    questions: [
      {
        q: "How much does a project cost?",
        a: "Project pricing depends on the scope, complexity, features, design requirements, and timeline. Contact us with your requirements and we can discuss the appropriate solution.",
      },
      {
        q: "Do you offer fixed-price projects?",
        a: "Yes, depending on the project scope. Once the requirements are clear, we can discuss an appropriate pricing structure.",
      },
      {
        q: "Is there a free consultation?",
        a: "Yes. You can contact Aplinode to discuss your project and requirements before deciding how you would like to proceed.",
      },
    ],
  },
  {
    name: "Support & Maintenance",
    count: 4,
    questions: [
      {
        q: "Do you provide ongoing maintenance?",
        a: "Yes. We can provide ongoing maintenance, updates, improvements, bug fixes, and technical support after a project is launched.",
      },
      {
        q: "Can you fix bugs in an existing website?",
        a: "Yes. We can investigate existing issues, identify their causes, and implement appropriate fixes.",
      },
      {
        q: "Can you improve website performance?",
        a: "Yes. We can review loading performance, frontend structure, assets, code, and other technical areas to identify opportunities for improvement.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Yes. We can continue supporting your digital product after launch through maintenance, improvements, troubleshooting, and feature development.",
      },
    ],
  },
  {
    name: "Security",
    count: 3,
    questions: [
      {
        q: "How do you handle project security?",
        a: "Security is considered throughout development. We follow appropriate development practices and take care with application access, data handling, authentication, and integrations.",
      },
      {
        q: "Can you build secure authentication systems?",
        a: "Yes. We can implement authentication and authorization systems appropriate to the requirements of the application.",
      },
      {
        q: "Can you work with sensitive business data?",
        a: "Yes. We can design systems with appropriate access controls and data-handling practices based on the project's requirements.",
      },
    ],
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="17" height="17">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transformOrigin: "center",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform .25s ease",
        }}
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="21" height="21">
      <path
        d="M20 11.5c0 4.14-3.58 7.5-8 7.5-1.13 0-2.2-.22-3.15-.62L4 20l1.38-3.7C4.51 15 4 13.32 4 11.5 4 7.36 7.58 4 12 4s8 3.36 8 7.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentCategory =
    categories.find((category) => category.name === activeCategory) ||
    categories[0];

  const selectCategory = (category) => {
    setActiveCategory(category.name);
    setOpenQuestion(0);
  };

  return (
    <div className="faq-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #ffffff;
        }

        .faq-page {
          min-height: 100vh;
          background: #ffffff;
          color: #111827;
          font-family: Arial, Helvetica, sans-serif;
        }

        .faq-page a {
          text-decoration: none;
        }

        .faq-nav {
          height: 68px;
          border-bottom: 1px solid #edf0f4;
          background: rgba(255,255,255,.96);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
        }

        .faq-nav-inner {
          width: min(1120px, calc(100% - 36px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .faq-brand {
          width: 128px;
          height: 42px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .faq-brand img {
          width: 112px !important;
          height: auto !important;
          max-height: 34px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        .faq-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-left: auto;
        }

        .faq-nav-links a {
          color: #4b5563;
          font-size: 13px;
          font-weight: 500;
          transition: color .2s ease;
        }

        .faq-nav-links a:hover,
        .faq-nav-links .active {
          color: #2563eb;
        }

        .faq-nav-action {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .faq-email {
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
        }

        .faq-get-started {
          padding: 10px 16px;
          border-radius: 6px;
          background: #2563eb;
          color: white !important;
          font-size: 12px;
          font-weight: 700;
          transition: .2s ease;
        }

        .faq-get-started:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .faq-hero {
          width: min(820px, calc(100% - 36px));
          margin: auto;
          padding: 88px 0 65px;
          text-align: center;
        }

        .faq-eyebrow {
          margin-bottom: 14px;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .faq-title {
          margin: 0;
          color: #111827;
          font-size: clamp(40px, 5vw, 58px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -.045em;
        }

        .faq-subtitle {
          max-width: 570px;
          margin: 18px auto 0;
          color: #6b7280;
          font-size: 16px;
          line-height: 1.7;
        }

        .faq-main {
          width: min(1060px, calc(100% - 36px));
          margin: auto;
          padding-bottom: 90px;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: 205px minmax(0,1fr);
          gap: 65px;
          align-items: start;
        }

        .faq-sidebar {
          position: sticky;
          top: 88px;
        }

        .faq-sidebar-title {
          margin-bottom: 10px;
          color: #9ca3af;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .faq-category {
          width: 100%;
          padding: 11px 12px;
          border: 0;
          border-left: 2px solid transparent;
          background: transparent;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
        }

        .faq-category:hover {
          color: #2563eb;
          background: #f8fafc;
        }

        .faq-category.active {
          color: #2563eb;
          background: #eff6ff;
          border-left-color: #2563eb;
          font-weight: 700;
        }

        .faq-count {
          color: #9ca3af;
          font-size: 11px;
        }

        .faq-content-title {
          margin: 0 0 20px;
          color: #111827;
          font-size: 22px;
          font-weight: 700;
        }

        .faq-list {
          border-top: 1px solid #e5e7eb;
        }

        .faq-item {
          border-bottom: 1px solid #e5e7eb;
        }

        .faq-question {
          width: 100%;
          min-height: 68px;
          padding: 19px 2px;
          border: 0;
          background: #fff;
          color: #111827;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
        }

        .faq-question:hover {
          color: #2563eb;
        }

        .faq-question.open {
          color: #2563eb;
        }

        .faq-chevron {
          color: #6b7280;
          display: flex;
          flex-shrink: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height .3s ease, opacity .25s ease;
        }

        .faq-answer.open {
          max-height: 350px;
          opacity: 1;
        }

        .faq-answer-inner {
          padding: 0 35px 23px 2px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.75;
        }

        .faq-answer-inner p {
          margin: 0;
        }

        .faq-cta {
          margin-top: 82px;
          padding: 58px 30px;
          border: 1px solid #dbe7ff;
          border-radius: 16px;
          background:
            radial-gradient(
              circle at 50% -20%,
              rgba(59,130,246,.14),
              transparent 55%
            ),
            #f8fbff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .faq-cta-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 18px;
          border: 1px solid #dbe7ff;
          border-radius: 12px;
          background: #ffffff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37,99,235,.08);
        }

        .faq-cta-label {
          margin-bottom: 9px;
          color: #2563eb;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .faq-cta h2 {
          margin: 0;
          color: #111827;
          font-size: 29px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -.025em;
        }

        .faq-cta p {
          max-width: 550px;
          margin: 13px auto 25px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
        }

        .faq-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 19px;
          border-radius: 7px;
          background: #2563eb;
          color: #fff !important;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(37,99,235,.18);
          transition: .2s ease;
        }

        .faq-cta-button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        .faq-footer {
          border-top: 1px solid #edf0f4;
          background: #fff;
        }

        .faq-footer-inner {
          width: min(1060px, calc(100% - 36px));
          margin: auto;
          padding: 55px 0 25px;
        }

        .faq-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
        }

        .faq-footer-logo {
          width: 108px !important;
          height: auto !important;
          max-height: 32px;
          object-fit: contain;
          display: block;
          margin-bottom: 16px;
        }

        .faq-footer-description {
          max-width: 280px;
          margin: 0;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.7;
        }

        .faq-footer-heading {
          margin: 0 0 14px;
          color: #111827;
          font-size: 12px;
          font-weight: 700;
        }

        .faq-footer-links {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .faq-footer-links a,
        .faq-footer-links span {
          color: #6b7280;
          font-size: 12px;
        }

        .faq-footer-links a:hover {
          color: #2563eb;
        }

        .faq-footer-bottom {
          margin-top: 45px;
          padding-top: 19px;
          border-top: 1px solid #edf0f4;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .faq-footer-bottom span,
        .faq-footer-bottom a {
          color: #9ca3af;
          font-size: 11px;
        }

        .faq-legal {
          display: flex;
          gap: 18px;
        }

        @media (max-width: 950px) {
          .faq-nav-links {
            display: none;
          }

          .faq-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .faq-sidebar {
            position: static;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 4px;
          }

          .faq-sidebar-title {
            grid-column: 1 / -1;
          }

          .faq-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .faq-nav {
            height: 62px;
          }

          .faq-nav-inner {
            width: calc(100% - 28px);
          }

          .faq-brand {
            width: 108px;
            height: 34px;
          }

          .faq-brand img {
            width: 96px !important;
            max-height: 29px;
          }

          .faq-email {
            display: none;
          }

          .faq-get-started {
            padding: 9px 13px;
            font-size: 11px;
          }

          .faq-hero {
            padding: 70px 0 50px;
          }

          .faq-title {
            font-size: 39px;
          }

          .faq-subtitle {
            font-size: 14px;
          }

          .faq-sidebar {
            grid-template-columns: 1fr;
          }

          .faq-question {
            min-height: 64px;
            font-size: 14px;
          }

          .faq-answer-inner {
            padding-right: 15px;
            font-size: 13px;
          }

          .faq-cta {
            margin-top: 65px;
            padding: 45px 20px;
          }

          .faq-cta h2 {
            font-size: 25px;
          }

          .faq-cta p {
            font-size: 13px;
          }

          .faq-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .faq-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
          }
        }
      `}</style>

      <header className="faq-nav">
        <div className="faq-nav-inner">
          <Link to="/" className="faq-brand">
            <img src={LOGO} alt="Aplinode" />
          </Link>

          <nav className="faq-nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/faq" className="active">FAQ</Link>
          </nav>

          <div className="faq-nav-action">
            <a
              href="mailto:contact@aplinode.com"
              className="faq-email"
            >
              contact@aplinode.com
            </a>

            <Link to="/contact" className="faq-get-started">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="faq-hero">
        <div className="faq-eyebrow">
          Got Questions?
        </div>

        <h1 className="faq-title">
          Frequently Asked Questions
        </h1>

        <p className="faq-subtitle">
          Everything you need to know about working with Aplinode.
        </p>
      </section>

      <main className="faq-main">
        <div className="faq-layout">
          <aside className="faq-sidebar">
            <div className="faq-sidebar-title">
              Categories
            </div>

            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                className={`faq-category ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => selectCategory(category)}
              >
                <span>{category.name}</span>
                <span className="faq-count">
                  {category.count}
                </span>
              </button>
            ))}
          </aside>

          <section>
            <h2 className="faq-content-title">
              {currentCategory.name}
            </h2>

            <div className="faq-list">
              {currentCategory.questions.map((item, index) => {
                const open = openQuestion === index;

                return (
                  <div className="faq-item" key={item.q}>
                    <button
                      type="button"
                      className={`faq-question ${
                        open ? "open" : ""
                      }`}
                      onClick={() =>
                        setOpenQuestion(open ? -1 : index)
                      }
                      aria-expanded={open}
                    >
                      <span>{item.q}</span>

                      <span className="faq-chevron">
                        <Chevron open={open} />
                      </span>
                    </button>

                    <div
                      className={`faq-answer ${
                        open ? "open" : ""
                      }`}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section className="faq-cta">
          <div className="faq-cta-icon">
            <MessageIcon />
          </div>

          <div className="faq-cta-label">
            Let's Talk
          </div>

          <h2>
            Have a project in mind?
          </h2>

          <p>
            Still have questions? Tell us what you're building
            and we'll help you find the right digital solution.
          </p>

          <a
            href="https://wa.me/923323265152"
            target="_blank"
            rel="noreferrer"
            className="faq-cta-button"
          >
            Start a Conversation
            <Arrow />
          </a>
        </section>
      </main>

      <footer className="faq-footer">
        <div className="faq-footer-inner">
          <div className="faq-footer-grid">
            <div>
              <img
                src={LOGO}
                alt="Aplinode"
                className="faq-footer-logo"
              />

              <p className="faq-footer-description">
                Crafting Modern Digital Experiences That Build Trust.
              </p>
            </div>

            <div>
              <h3 className="faq-footer-heading">
                Quick Links
              </h3>

              <div className="faq-footer-links">
                <Link to="/services">Services</Link>
                <Link to="/process">Our Process</Link>
                <Link to="/technologies">Technology</Link>
                <Link to="/industries">Industries</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>

            <div>
              <h3 className="faq-footer-heading">
                Contact Us
              </h3>

              <div className="faq-footer-links">
                <span>Karachi, Pakistan</span>

                <a href="tel:+923323265152">
                  +92 332 326 5152
                </a>

                <a href="mailto:contact@aplinode.com">
                  contact@aplinode.com
                </a>
              </div>
            </div>
          </div>

          <div className="faq-footer-bottom">
            <span>
              © 2026 Aplinode. All rights reserved.
            </span>

            <div className="faq-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

