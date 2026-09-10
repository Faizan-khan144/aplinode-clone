import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const technologies = [
  {
    name: "HTML",
    category: "Frontend",
    description: "Semantic, accessible markup for strong digital foundations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
        <path d="M7.5 7h9M7.8 11h8.4M8.3 15h7.4" />
      </svg>
    ),
  },
  {
    name: "CSS",
    category: "Frontend",
    description: "Responsive styling and polished interfaces across every screen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" />
        <path d="M7.5 7h9M7 11h8M8 15h6" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description: "Dynamic functionality and modern web interactions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 17v-1.2c0-.8.5-1.3 1.3-1.3.9 0 1.5.6 1.5 1.5V18M16 14.5c-.5-.4-1-.6-1.6-.6-.9 0-1.5.5-1.5 1.2 0 1.5 3.1 1 3.1 2.7 0 .8-.7 1.3-1.6 1.3-.7 0-1.3-.2-1.8-.7" />
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven applications built for speed and scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="9" ry="3.7" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Production-ready React applications with powerful performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 16V8l8 8M13 8h3" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "UI & Styling",
    description: "Flexible utility-first styling for precise interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 15c2.2-4.2 4.8-4.2 7-1.8 2.2 2.4 4.8 2.4 7-1.8" />
        <path d="M6 19c2.2-4.2 4.8-4.2 7-1.8 2.2 2.4 4.8 2.4 7-1.8" />
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    category: "UI & Styling",
    description: "Reliable UI foundations for efficient product development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M9 7h4.2a2.3 2.3 0 0 1 0 4.6H9m0 0h4.7a2.5 2.5 0 0 1 0 5H9V7Z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Fast, scalable server-side applications and APIs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M9 12.2c0-1.1.8-1.8 2-1.8 1.1 0 1.8.5 2.5 1.1.6.5 1.2.8 1.9.8.9 0 1.6-.6 1.6-1.5 0-.8-.6-1.2-1.7-1.6l-1.1-.4c-1.5-.5-2.3-1.2-2.3-2.4 0-1.2 1-2 2.5-2 1.2 0 2.1.4 2.9 1.2" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Modern backend infrastructure for connected applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13.5 3 5 13h6l-.5 8L19 11h-6l.5-8Z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Flexible document-based data storage for modern products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3c-2 3-4.5 5.3-4.5 9.2 0 3.4 2 6.3 4.5 8.8 2.5-2.5 4.5-5.4 4.5-8.8C16.5 8.3 14 6 12 3Z" />
        <path d="M12 9v11" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Powerful relational data systems built for reliability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 17c-1.2-2-1.5-5.5-.8-8.4C6.8 5.5 9.1 4 12 4c2.9 0 5.2 1.5 5.8 4.6.7 2.9.4 6.4-.8 8.4" />
        <path d="M9 16c1.5 1.2 4.5 1.2 6 0M8 9c1.3-.8 2.7-.8 4 0M12 9c1.3-.8 2.7-.8 4 0" />
        <path d="M9.5 20c.5-1.4.7-2.7.5-4M14.5 20c-.5-1.4-.7-2.7-.5-4" />
      </svg>
    ),
  },
  {
    name: "SQL",
    category: "Database",
    description: "Structured data querying for robust business systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
  },
];

const categories = [
  {
    title: "Frontend",
    text: "Interfaces built to feel fast, intuitive, and effortless.",
  },
  {
    title: "UI & Styling",
    text: "Flexible systems for clean, responsive digital experiences.",
  },
  {
    title: "Backend",
    text: "Reliable application logic, APIs, and scalable infrastructure.",
  },
  {
    title: "Database",
    text: "Secure and structured data solutions for growing products.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Technologies() {
  return (
    <div className="tech-page">
      <style>{`
        .tech-page {
          min-height: 100vh;
          background: #ffffff;
          color: #0b1728;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .tech-nav {
          width: 100%;
          height: 76px;
          border-bottom: 1px solid #e8edf3;
          background: rgba(255,255,255,.96);
          display: flex;
          align-items: center;
          position: relative;
          z-index: 20;
        }

        .tech-nav-inner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .tech-brand {
          width: 128px;
          height: 42px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tech-brand img {
          width: 112px !important;
          height: auto !important;
          max-height: 34px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        .tech-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 27px;
          flex: 1;
        }

        .tech-links a {
          color: #596678;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color .2s ease;
          white-space: nowrap;
        }

        .tech-links a:hover,
        .tech-links a.active {
          color: #1264d9;
        }

        .tech-nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .tech-email {
          color: #647184;
          text-decoration: none;
          font-size: 12px;
          white-space: nowrap;
        }

        .tech-cta {
          height: 38px;
          padding: 0 18px;
          border-radius: 7px;
          background: #1264d9;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          transition: background .2s ease, transform .2s ease;
        }

        .tech-cta:hover {
          background: #0d55bc;
          transform: translateY(-1px);
        }

        .tech-hero {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 108px 0 78px;
          text-align: center;
        }

        .tech-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #1264d9;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
          margin-bottom: 19px;
        }

        .tech-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: #1264d9;
        }

        .tech-hero h1 {
          max-width: 760px;
          margin: 0 auto;
          color: #0a1525;
          font-size: clamp(42px, 5.3vw, 68px);
          line-height: 1.02;
          letter-spacing: -.045em;
          font-weight: 700;
        }

        .tech-hero h1 span {
          color: #1264d9;
        }

        .tech-hero p {
          max-width: 610px;
          margin: 25px auto 0;
          color: #6a7687;
          font-size: 16px;
          line-height: 1.75;
        }

        .tech-orbit {
          width: min(980px, 100%);
          height: 18px;
          margin: 46px auto 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
        }

        .tech-orbit span {
          display: block;
          height: 4px;
          border-radius: 99px;
          background: #d9e7f8;
        }

        .tech-orbit span:nth-child(1) { width: 34px; }
        .tech-orbit span:nth-child(2) { width: 70px; }
        .tech-orbit span:nth-child(3) { width: 120px; background: #1264d9; }
        .tech-orbit span:nth-child(4) { width: 70px; }
        .tech-orbit span:nth-child(5) { width: 34px; }

        .tech-stack-section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 20px 0 100px;
        }

        .tech-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 25px;
        }

        .tech-section-head h2 {
          margin: 0;
          font-size: 25px;
          letter-spacing: -.025em;
          color: #101d2d;
        }

        .tech-section-head p {
          margin: 0;
          color: #778293;
          font-size: 13px;
          max-width: 390px;
          line-height: 1.6;
          text-align: right;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #e5ebf2;
          border-left: 1px solid #e5ebf2;
        }

        .tech-card {
          min-height: 205px;
          padding: 27px 25px 25px;
          border-right: 1px solid #e5ebf2;
          border-bottom: 1px solid #e5ebf2;
          background: #fff;
          position: relative;
          transition: background .2s ease, transform .2s ease, box-shadow .2s ease;
        }

        .tech-card:hover {
          background: #f8fbff;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(22, 67, 115, .07);
          z-index: 2;
        }

        .tech-icon {
          width: 43px;
          height: 43px;
          border-radius: 9px;
          background: #eef6ff;
          color: #1264d9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .tech-icon svg {
          width: 23px;
          height: 23px;
        }

        .tech-category {
          color: #8a95a4;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .1em;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .tech-card h3 {
          margin: 0;
          color: #122034;
          font-size: 17px;
          font-weight: 650;
          letter-spacing: -.015em;
        }

        .tech-card p {
          margin: 9px 0 0;
          color: #748092;
          font-size: 12px;
          line-height: 1.65;
        }

        .tech-category-section {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 0 0 110px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .category-card {
          padding: 28px 25px;
          border: 1px solid #e6ebf1;
          border-radius: 10px;
          background: #fbfcfe;
        }

        .category-number {
          color: #1264d9;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          margin-bottom: 22px;
        }

        .category-card h3 {
          margin: 0;
          color: #142135;
          font-size: 17px;
          letter-spacing: -.015em;
        }

        .category-card p {
          margin: 10px 0 0;
          color: #788494;
          font-size: 12px;
          line-height: 1.65;
        }

        .tech-bottom {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto 100px;
          padding: 62px 70px;
          border-radius: 14px;
          background: #f3f8fe;
          border: 1px solid #e0ebf7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .tech-bottom-copy {
          max-width: 610px;
        }

        .tech-bottom-copy .small {
          color: #1264d9;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
          margin-bottom: 13px;
        }

        .tech-bottom-copy h2 {
          margin: 0;
          color: #0e1c2d;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.15;
          letter-spacing: -.035em;
        }

        .tech-bottom-copy p {
          margin: 14px 0 0;
          color: #687688;
          font-size: 13px;
          line-height: 1.7;
        }

        .tech-bottom-link {
          flex-shrink: 0;
          height: 45px;
          padding: 0 22px;
          border-radius: 7px;
          background: #1264d9;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 650;
          transition: background .2s ease, transform .2s ease;
        }

        .tech-bottom-link:hover {
          background: #0d55bc;
          transform: translateY(-1px);
        }

        .tech-bottom-link svg {
          width: 16px;
          height: 16px;
        }

        .tech-footer {
          border-top: 1px solid #e7ecf2;
          background: #fff;
        }

        .tech-footer-inner {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 55px 0 25px;
        }

        .tech-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          padding-bottom: 48px;
        }

        .tech-footer-brand {
          max-width: 310px;
        }

        .tech-footer-brand img {
          width: 112px !important;
          height: auto !important;
          max-height: 34px;
          object-fit: contain;
          object-position: left center;
        }

        .tech-footer-brand p {
          color: #7a8593;
          font-size: 12px;
          line-height: 1.7;
          margin: 17px 0 0;
        }

        .tech-footer-links h4,
        .tech-footer-contact h4 {
          margin: 0 0 17px;
          color: #172438;
          font-size: 12px;
          font-weight: 700;
        }

        .tech-footer-links a {
          display: block;
          color: #788494;
          text-decoration: none;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .tech-footer-links a:hover {
          color: #1264d9;
        }

        .tech-footer-contact p {
          color: #788494;
          font-size: 12px;
          margin: 0 0 10px;
        }

        .tech-footer-bottom {
          border-top: 1px solid #edf0f4;
          padding-top: 19px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .tech-footer-bottom span,
        .tech-footer-bottom a {
          color: #9aa3ae;
          font-size: 10px;
          text-decoration: none;
        }

        .tech-footer-legal {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 1000px) {
          .tech-links {
            gap: 17px;
          }

          .tech-email {
            display: none;
          }

          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .tech-nav {
            height: 68px;
          }

          .tech-nav-inner {
            width: min(100% - 28px, 600px);
          }

          .tech-links {
            display: none;
          }

          .tech-nav-right {
            margin-left: auto;
          }

          .tech-hero {
            padding: 75px 0 60px;
          }

          .tech-hero h1 {
            font-size: clamp(39px, 11vw, 56px);
          }

          .tech-hero p {
            font-size: 14px;
          }

          .tech-stack-section,
          .tech-category-section,
          .tech-bottom,
          .tech-footer-inner {
            width: min(100% - 28px, 600px);
          }

          .tech-section-head {
            display: block;
          }

          .tech-section-head p {
            text-align: left;
            margin-top: 10px;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tech-bottom {
            padding: 40px 28px;
            display: block;
          }

          .tech-bottom-link {
            margin-top: 25px;
          }

          .tech-footer-top {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px 25px;
          }

          .tech-footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 520px) {
          .tech-brand {
            width: 108px;
            height: 34px;
          }

          .tech-brand img {
            width: 96px !important;
            max-height: 29px;
          }

          .tech-cta {
            height: 35px;
            padding: 0 13px;
            font-size: 11px;
          }

          .tech-hero {
            padding-top: 65px;
          }

          .tech-eyebrow {
            font-size: 10px;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .tech-card {
            min-height: auto;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .tech-bottom {
            margin-bottom: 70px;
          }

          .tech-footer-top {
            grid-template-columns: 1fr;
          }

          .tech-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .tech-footer-legal {
            gap: 14px;
          }
        }
      `}</style>

      <header className="tech-nav">
        <div className="tech-nav-inner">
          <Link to="/" className="tech-brand">
            <img src={LOGO} alt="Aplinode" />
          </Link>

          <nav className="tech-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/technologies" className="active">
              Technologies
            </Link>
            <Link to="/industries">Industries</Link>
            <Link to="/faq">FAQ</Link>
          </nav>

          <div className="tech-nav-right">
            <a
              href="mailto:contact@aplinode.com"
              className="tech-email"
            >
              contact@aplinode.com
            </a>
            <a
              href="https://wa.me/923323265152"
              target="_blank"
              rel="noreferrer"
              className="tech-cta"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="tech-hero">
          <div className="tech-eyebrow">Our Arsenal</div>

          <h1>
            The Tech Behind <span>Performance</span>
          </h1>

          <p>
            We use modern, battle-tested technologies to build systems that
            scale with your ambitions.
          </p>

          <div className="tech-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="tech-stack-section">
          <div className="tech-section-head">
            <h2>Our Technology Stack</h2>
            <p>
              Carefully selected tools for creating reliable, scalable, and
              high-performing digital products.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((technology) => (
              <article className="tech-card" key={technology.name}>
                <div className="tech-icon">{technology.icon}</div>
                <div className="tech-category">{technology.category}</div>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-category-section">
          <div className="tech-section-head">
            <h2>Built Around the Right Tools</h2>
            <p>
              From the first interface to the underlying database, every layer
              is chosen with the product in mind.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <article className="category-card" key={category.title}>
                <div className="category-number">
                  0{index + 1}
                </div>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-bottom">
          <div className="tech-bottom-copy">
            <div className="small">Ready to build?</div>
            <h2>Let’s turn the right technology into the right product.</h2>
            <p>
              Tell us what you are building and we’ll help you choose the
              technology stack that fits your goals.
            </p>
          </div>

          <a
            href="https://wa.me/923323265152"
            target="_blank"
            rel="noreferrer"
            className="tech-bottom-link"
          >
            Start a Conversation
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="tech-footer">
        <div className="tech-footer-inner">
          <div className="tech-footer-top">
            <div className="tech-footer-brand">
              <img src={LOGO} alt="Aplinode" />
              <p>
                Crafting Modern Digital Experiences That Build Trust.
              </p>
            </div>

            <div className="tech-footer-links">
              <h4>Quick Links</h4>
              <Link to="/services">Services</Link>
              <Link to="/process">Our Process</Link>
              <Link to="/technologies">Technology</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/faq">FAQ</Link>
            </div>

            <div className="tech-footer-contact">
              <h4>Contact Us</h4>
              <p>Karachi, Pakistan</p>
              <p>+92 332 326 5152</p>
              <p>contact@aplinode.com</p>
            </div>
          </div>

          <div className="tech-footer-bottom">
            <span>© 2026 Aplinode</span>

            <div className="tech-footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Technologies;

