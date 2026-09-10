import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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

function MailIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.5"
        y="5"
        width="17"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4.5 7 7.5 5.5L19.5 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.2 4.5 9.5 4c.6-.1 1.1.2 1.3.8l1 2.8c.2.5 0 1-.4 1.3L9.9 10c1 2 2.2 3.2 4.1 4.1l1.1-1.5c.3-.4.8-.6 1.3-.4l2.8 1c.6.2.9.7.8 1.3l-.5 2.3c-.1.7-.8 1.2-1.5 1.2C10.1 18 6 13.9 6 8c0-.7.5-1.4 1.2-1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="contact-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #fff;
        }

        .contact-page {
          min-height: 100vh;
          background: #fff;
          color: #111827;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .contact-page a {
          text-decoration: none;
        }

        .contact-nav {
          height: 68px;
          width: 100%;
          border-bottom: 1px solid #edf0f4;
          background: rgba(255,255,255,.97);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
        }

        .contact-nav-inner {
          width: min(1120px, calc(100% - 36px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .contact-brand {
          width: 128px;
          height: 42px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .contact-brand img {
          width: 112px !important;
          height: auto !important;
          max-height: 34px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        .contact-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-left: auto;
        }

        .contact-nav-links a {
          color: #4b5563;
          font-size: 13px;
          font-weight: 500;
          transition: color .2s ease;
        }

        .contact-nav-links a:hover,
        .contact-nav-links .active {
          color: #2563eb;
        }

        .contact-nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .contact-email {
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
        }

        .contact-start {
          padding: 10px 16px;
          border-radius: 6px;
          background: #2563eb;
          color: #fff !important;
          font-size: 12px;
          font-weight: 700;
          transition: .2s ease;
        }

        .contact-start:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .contact-hero {
          width: min(850px, calc(100% - 36px));
          margin: auto;
          padding: 90px 0 60px;
          text-align: center;
        }

        .contact-eyebrow {
          margin-bottom: 14px;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .contact-title {
          margin: 0;
          color: #111827;
          font-size: clamp(42px, 5vw, 60px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -.045em;
        }

        .contact-subtitle {
          max-width: 600px;
          margin: 18px auto 0;
          color: #6b7280;
          font-size: 16px;
          line-height: 1.7;
        }

        .contact-main {
          width: min(1060px, calc(100% - 36px));
          margin: auto;
          padding-bottom: 95px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: start;
        }

        .contact-info-title {
          margin: 0 0 13px;
          color: #111827;
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -.025em;
        }

        .contact-info-text {
          max-width: 410px;
          margin: 0 0 32px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.75;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          border: 1px solid #edf0f4;
          border-radius: 10px;
          background: #fff;
          transition: .2s ease;
        }

        .contact-detail:hover {
          border-color: #dbe7ff;
          box-shadow: 0 8px 25px rgba(15,23,42,.05);
          transform: translateY(-1px);
        }

        .contact-detail-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-detail-label {
          margin-bottom: 4px;
          color: #9ca3af;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .contact-detail-value {
          color: #111827;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-detail a {
          color: #111827;
        }

        .contact-detail a:hover {
          color: #2563eb;
        }

        .contact-form-card {
          padding: 30px;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 15px 45px rgba(15,23,42,.06);
        }

        .contact-form-title {
          margin: 0 0 6px;
          color: #111827;
          font-size: 21px;
          font-weight: 750;
        }

        .contact-form-description {
          margin: 0 0 25px;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.6;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .contact-field label {
          color: #374151;
          font-size: 11px;
          font-weight: 700;
        }

        .contact-field input,
        .contact-field textarea,
        .contact-field select {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 7px;
          outline: none;
          background: #fff;
          color: #111827;
          font-family: inherit;
          font-size: 13px;
          padding: 12px 13px;
          transition: .2s ease;
        }

        .contact-field input,
        .contact-field select {
          height: 43px;
        }

        .contact-field textarea {
          min-height: 115px;
          resize: vertical;
        }

        .contact-field input:focus,
        .contact-field textarea:focus,
        .contact-field select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,.08);
        }

        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #9ca3af;
        }

        .contact-submit {
          width: 100%;
          height: 45px;
          margin-top: 2px;
          border: 0;
          border-radius: 7px;
          background: #2563eb;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: .2s ease;
        }

        .contact-submit:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(37,99,235,.18);
        }

        .contact-note {
          margin: 13px 0 0;
          color: #9ca3af;
          font-size: 10px;
          line-height: 1.5;
          text-align: center;
        }

        .contact-cta {
          margin-top: 85px;
          padding: 55px 30px;
          border: 1px solid #dbe7ff;
          border-radius: 16px;
          background:
            radial-gradient(
              circle at 50% -25%,
              rgba(59,130,246,.14),
              transparent 55%
            ),
            #f8fbff;
          text-align: center;
        }

        .contact-cta-label {
          margin-bottom: 9px;
          color: #2563eb;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .contact-cta h2 {
          margin: 0;
          color: #111827;
          font-size: 29px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -.025em;
        }

        .contact-cta p {
          max-width: 560px;
          margin: 13px auto 24px;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
        }

        .contact-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 19px;
          border-radius: 7px;
          background: #2563eb;
          color: #fff !important;
          font-size: 13px;
          font-weight: 700;
          transition: .2s ease;
        }

        .contact-whatsapp:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(37,99,235,.2);
        }

        .contact-footer {
          border-top: 1px solid #edf0f4;
          background: #fff;
        }

        .contact-footer-inner {
          width: min(1060px, calc(100% - 36px));
          margin: auto;
          padding: 55px 0 25px;
        }

        .contact-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
        }

        .contact-footer-logo {
          width: 108px !important;
          height: auto !important;
          max-height: 32px;
          object-fit: contain;
          display: block;
          margin-bottom: 16px;
        }

        .contact-footer-description {
          max-width: 280px;
          margin: 0;
          color: #6b7280;
          font-size: 13px;
          line-height: 1.7;
        }

        .contact-footer-heading {
          margin: 0 0 14px;
          color: #111827;
          font-size: 12px;
          font-weight: 700;
        }

        .contact-footer-links {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .contact-footer-links a,
        .contact-footer-links span {
          color: #6b7280;
          font-size: 12px;
        }

        .contact-footer-links a:hover {
          color: #2563eb;
        }

        .contact-footer-bottom {
          margin-top: 45px;
          padding-top: 19px;
          border-top: 1px solid #edf0f4;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .contact-footer-bottom span,
        .contact-footer-bottom a {
          color: #9ca3af;
          font-size: 11px;
        }

        .contact-legal {
          display: flex;
          gap: 18px;
        }

        @media (max-width: 950px) {
          .contact-nav-links {
            display: none;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .contact-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-nav {
            height: 62px;
          }

          .contact-nav-inner {
            width: calc(100% - 28px);
          }

          .contact-brand {
            width: 108px;
            height: 34px;
          }

          .contact-brand img {
            width: 96px !important;
            max-height: 29px;
          }

          .contact-email {
            display: none;
          }

          .contact-start {
            padding: 9px 13px;
            font-size: 11px;
          }

          .contact-hero {
            padding: 70px 0 50px;
          }

          .contact-title {
            font-size: 40px;
          }

          .contact-subtitle {
            font-size: 14px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-card {
            padding: 22px;
          }

          .contact-cta {
            margin-top: 60px;
            padding: 45px 20px;
          }

          .contact-cta h2 {
            font-size: 25px;
          }

          .contact-cta p {
            font-size: 13px;
          }

          .contact-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .contact-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
          }
        }
      `}</style>

      <header className="contact-nav">
        <div className="contact-nav-inner">
          <Link to="/" className="contact-brand">
            <img src={LOGO} alt="Aplinode" />
          </Link>

          <nav className="contact-nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/faq">FAQ</Link>
          </nav>

          <div className="contact-nav-right">
            <a
              href="mailto:contact@aplinode.com"
              className="contact-email"
            >
              contact@aplinode.com
            </a>

            <Link to="/contact" className="contact-start">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="contact-hero">
        <div className="contact-eyebrow">
          Let's Build Together
        </div>

        <h1 className="contact-title">
          Start a Conversation
        </h1>

        <p className="contact-subtitle">
          Have an idea, a project, or a challenge to solve?
          Tell us what you're building and let's create
          something meaningful together.
        </p>
      </section>

      <main className="contact-main">
        <div className="contact-grid">

          <section>
            <h2 className="contact-info-title">
              Let's talk about your project.
            </h2>

            <p className="contact-info-text">
              Whether you're starting from scratch or improving
              an existing product, we're ready to understand your
              goals and help you choose the right digital solution.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MailIcon />
                </div>

                <div>
                  <div className="contact-detail-label">
                    Email
                  </div>

                  <a
                    href="mailto:contact@aplinode.com"
                    className="contact-detail-value"
                  >
                    contact@aplinode.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <PhoneIcon />
                </div>

                <div>
                  <div className="contact-detail-label">
                    Phone
                  </div>

                  <a
                    href="tel:+923323265152"
                    className="contact-detail-value"
                  >
                    +92 332 326 5152
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <LocationIcon />
                </div>

                <div>
                  <div className="contact-detail-label">
                    Location
                  </div>

                  <span className="contact-detail-value">
                    Karachi, Pakistan
                  </span>
                </div>
              </div>

            </div>
          </section>

          <section className="contact-form-card">

            <h2 className="contact-form-title">
              Tell us about your project
            </h2>

            <p className="contact-form-description">
              Share a few details and we'll get back to you.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="contact-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

              </div>

              <div className="contact-field">
                <label>Company / Business</label>
                <input
                  type="text"
                  placeholder="Your company name"
                />
              </div>

              <div className="contact-field">
                <label>What do you need?</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Website Development</option>
                  <option>Web Application</option>
                  <option>UI/UX Design</option>
                  <option>Business Software</option>
                  <option>Maintenance & Support</option>
                  <option>Something Else</option>
                </select>
              </div>

              <div className="contact-field">
                <label>Project Details</label>

                <textarea
                  placeholder="Tell us about your idea, requirements, goals, or challenges..."
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <Arrow />
              </button>

            </form>

            <p className="contact-note">
              We'll review your message and get back to you
              as soon as possible.
            </p>

          </section>

        </div>

        <section className="contact-cta">

          <div className="contact-cta-label">
            Prefer WhatsApp?
          </div>

          <h2>
            Let's discuss your idea directly.
          </h2>

          <p>
            Send us a message on WhatsApp and tell us what
            you're looking to build. We'll take it from there.
          </p>

          <a
            href="https://wa.me/923323265152"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >
            Chat on WhatsApp
            <Arrow />
          </a>

        </section>
      </main>

      <footer className="contact-footer">
        <div className="contact-footer-inner">

          <div className="contact-footer-grid">

            <div>
              <img
                src={LOGO}
                alt="Aplinode"
                className="contact-footer-logo"
              />

              <p className="contact-footer-description">
                Crafting Modern Digital Experiences That Build Trust.
              </p>
            </div>

            <div>
              <h3 className="contact-footer-heading">
                Quick Links
              </h3>

              <div className="contact-footer-links">
                <Link to="/services">Services</Link>
                <Link to="/process">Our Process</Link>
                <Link to="/technologies">Technology</Link>
                <Link to="/industries">Industries</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>

            <div>
              <h3 className="contact-footer-heading">
                Contact Us
              </h3>

              <div className="contact-footer-links">
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

          <div className="contact-footer-bottom">
            <span>
              © 2026 Aplinode. All rights reserved.
            </span>

            <div className="contact-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

