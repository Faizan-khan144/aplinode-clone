import { useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const industries = [
  {
    name: "Startups",
    icon: "🚀",
    tagline: "Move fast. Scale smart.",
    description:
      "From MVP to Series A and beyond. We build scalable foundations that investors love and users crave.",
    face: [
      "Limited time & budget",
      "Rapid iteration",
      "Scaling 0 to 1",
    ],
    deliver: [
      "Lean MVP development",
      "Scalable architecture",
      "Fast deployment",
    ],
  },
  {
    name: "SaaS",
    icon: "☁",
    tagline: "Build products people rely on.",
    description:
      "We create reliable SaaS platforms with intuitive experiences, scalable infrastructure, and the flexibility to grow with your customers.",
    face: [
      "Complex product requirements",
      "Growing user base",
      "Reliable infrastructure",
    ],
    deliver: [
      "Scalable SaaS architecture",
      "Modern product interfaces",
      "Performance optimization",
    ],
  },
  {
    name: "Restaurants",
    icon: "🍽️",
    tagline: "Serve better. Grow faster.",
    description:
      "Digital experiences that help restaurants connect with customers, simplify operations, and create stronger online experiences.",
    face: [
      "Managing online presence",
      "Customer engagement",
      "Operational efficiency",
    ],
    deliver: [
      "Restaurant websites",
      "Online ordering experiences",
      "Digital customer journeys",
    ],
  },
  {
    name: "Healthcare",
    icon: "✚",
    tagline: "Technology that puts people first.",
    description:
      "We build accessible and dependable digital solutions that help healthcare businesses deliver better experiences.",
    face: [
      "Patient experience",
      "Data management",
      "Accessible digital services",
    ],
    deliver: [
      "Healthcare platforms",
      "Patient-focused interfaces",
      "Secure digital systems",
    ],
  },
  {
    name: "Real Estate",
    icon: "⌂",
    tagline: "Turn property into opportunity.",
    description:
      "Modern real estate platforms that make property discovery, presentation, and customer engagement simpler.",
    face: [
      "Property discovery",
      "Lead generation",
      "Managing large listings",
    ],
    deliver: [
      "Property platforms",
      "Advanced listing experiences",
      "Lead-focused websites",
    ],
  },
  {
    name: "Agencies",
    icon: "◉",
    tagline: "Present your work. Win more clients.",
    description:
      "We help agencies create digital experiences that communicate their value clearly and turn visitors into opportunities.",
    face: [
      "Standing out online",
      "Showcasing expertise",
      "Converting visitors",
    ],
    deliver: [
      "High-converting websites",
      "Portfolio experiences",
      "Custom digital platforms",
    ],
  },
  {
    name: "Coaches",
    icon: "◌",
    tagline: "Turn expertise into impact.",
    description:
      "Digital platforms that help coaches build credibility, attract clients, and deliver their expertise online.",
    face: [
      "Building personal brand",
      "Client acquisition",
      "Managing digital content",
    ],
    deliver: [
      "Personal brand websites",
      "Booking experiences",
      "Client-focused platforms",
    ],
  },
  {
    name: "E-commerce",
    icon: "🛒",
    tagline: "Sell more. Make shopping effortless.",
    description:
      "Conversion-focused e-commerce experiences designed to make discovery, checkout, and customer journeys seamless.",
    face: [
      "Customer conversion",
      "Large product catalogs",
      "Smooth shopping journeys",
    ],
    deliver: [
      "Modern online stores",
      "Conversion-focused UX",
      "Scalable commerce systems",
    ],
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Industries() {
  const [active, setActive] = useState(industries[0]);
  const [menu, setMenu] = useState(false);

  const selectIndustry = (industry) => {
    setActive(industry);
    setMenu(false);
  };

  return (
    <>
      <style>{`
        .industries-page {
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #0f172a;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .industries-page *,
        .industries-page *::before,
        .industries-page *::after {
          box-sizing: border-box;
        }

        .industry-card {
          position: relative;
          overflow: hidden;
          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            background .25s ease;
        }

        .industry-card:hover {
          transform: translateY(-2px);
          border-color: #bfdbfe;
        }

        .industry-card-active {
          border-color: #2563eb !important;
          background: #eff6ff !important;
          box-shadow: 0 12px 35px rgba(37, 99, 235, .09);
        }

        .industry-card-active::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #2563eb;
        }

        .industry-detail {
          animation: industryIn .45s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes industryIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .industry-hero {
          background:
            radial-gradient(circle at 50% 0%, rgba(59,130,246,.12), transparent 34%),
            linear-gradient(to bottom, #f8fafc, #ffffff);
        }

        .industry-grid {
          background-image:
            linear-gradient(rgba(148,163,184,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.055) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
        }

        .industry-glow {
          animation: glowFloat 5s ease-in-out infinite;
        }

        @keyframes glowFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .industry-number {
          font-variant-numeric: tabular-nums;
          letter-spacing: -.06em;
        }

        @media (max-width: 767px) {
          .industries-page .desktop-nav {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .industries-page .mobile-menu-button {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industries-page *,
          .industries-page *::before,
          .industries-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="industries-page overflow-hidden">
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
            <Link
              to="/"
              onClick={() => setMenu(false)}
              className="group flex items-center gap-2.5"
            >
              <img
                src={LOGO}
                alt="Aplinode"
                className="h-8 w-auto object-contain transition duration-300 group-hover:scale-105"
              />

              <span className="text-[19px] font-extrabold tracking-[-.04em] text-slate-900">
                Aplinode
              </span>
            </Link>

            <nav className="desktop-nav flex items-center gap-7">
              <Link
                to="/"
                className="text-[13px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-[13px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                Services
              </Link>

              <Link
                to="/process"
                className="text-[13px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                Process
              </Link>

              <Link
                to="/technologies"
                className="text-[13px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                Technologies
              </Link>

              <Link
                to="/industries"
                className="text-[13px] font-semibold text-blue-600"
              >
                Industries
              </Link>

              <Link
                to="/faq"
                className="text-[13px] font-medium text-slate-500 transition hover:text-blue-600"
              >
                FAQ
              </Link>

              <a
                href="https://wa.me/923323265152"
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-[12px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get Started
                <ArrowIcon width="15" height="15" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMenu(!menu)}
              className="mobile-menu-button flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
              aria-label="Toggle menu"
            >
              {menu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {menu && (
            <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Services
                </Link>

                <Link
                  to="/process"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Process
                </Link>

                <Link
                  to="/technologies"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Technologies
                </Link>

                <Link
                  to="/industries"
                  onClick={() => setMenu(false)}
                  className="rounded-lg bg-blue-50 px-3 py-3 text-sm font-semibold text-blue-600"
                >
                  Industries
                </Link>

                <Link
                  to="/faq"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  FAQ
                </Link>

                <a
                  href="https://wa.me/923323265152"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Get Started
                  <ArrowIcon />
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          <section className="industry-hero relative overflow-hidden">
            <div className="industry-grid pointer-events-none absolute inset-0" />

            <div className="industry-glow pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-20 lg:px-10 lg:pb-16 lg:pt-24">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] text-blue-600 shadow-sm">
                What We Build For
              </span>

              <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-[-.06em] text-slate-950 sm:text-5xl lg:text-6xl">
                Industries We{" "}
                <span className="text-blue-600">Empower</span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Deep domain expertise meets technical excellence. We speak
                your industry's language.
              </p>
            </div>
          </section>

          <section className="bg-white py-10 sm:py-14 lg:py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
                <aside>
                  <div className="lg:sticky lg:top-24">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">
                      Industries
                    </p>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
                      {industries.map((industry) => {
                        const selected = active.name === industry.name;

                        return (
                          <button
                            key={industry.name}
                            type="button"
                            onClick={() => selectIndustry(industry)}
                            className={`industry-card flex min-h-[54px] items-center gap-3 rounded-xl border px-3 text-left ${
                              selected
                                ? "industry-card-active"
                                : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-base shadow-sm">
                              {industry.icon}
                            </span>

                            <span
                              className={`text-[12px] font-semibold ${
                                selected
                                  ? "text-blue-700"
                                  : "text-slate-600"
                              }`}
                            >
                              {industry.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                <div
                  key={active.name}
                  className="industry-detail rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,.07)] sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                          {active.icon}
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-600">
                            Industry
                          </p>

                          <h2 className="mt-0.5 text-3xl font-extrabold tracking-[-.045em] text-slate-950">
                            {active.name}
                          </h2>
                        </div>
                      </div>

                      <h3 className="mt-7 text-xl font-bold tracking-[-.025em] text-slate-900 sm:text-2xl">
                        {active.tagline}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                        {active.description}
                      </p>
                    </div>

                    <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-3xl sm:flex">
                      {active.icon}
                    </div>
                  </div>

                  <div className="mt-9 grid gap-8 border-t border-slate-100 pt-8 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
                        What You Face
                      </p>

                      <div className="mt-4 space-y-3">
                        {active.face.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            </span>

                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-600">
                        What We Deliver
                      </p>

                      <div className="mt-4 space-y-3">
                        {active.deliver.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm text-slate-700"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                              <CheckIcon />
                            </span>

                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y border-slate-100 bg-slate-50">
            <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
              <div className="border-b border-slate-200 px-6 py-9 text-center sm:border-b-0 sm:border-r">
                <div className="industry-number text-4xl font-extrabold text-slate-950 sm:text-5xl">
                  9<span className="text-blue-600">+</span>
                </div>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.18em] text-slate-400">
                  Industries
                </p>
              </div>

              <div className="border-b border-slate-200 px-6 py-9 text-center sm:border-b-0 sm:border-r">
                <div className="industry-number text-4xl font-extrabold text-slate-950 sm:text-5xl">
                  50<span className="text-blue-600">+</span>
                </div>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.18em] text-slate-400">
                  Projects
                </p>
              </div>

              <div className="px-6 py-9 text-center">
                <div className="industry-number text-4xl font-extrabold text-slate-950 sm:text-5xl">
                  100<span className="text-blue-600">%</span>
                </div>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.18em] text-slate-400">
                  Commitment
                </p>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-blue-600 py-16 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-blue-100">
                Let's build together
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-[-.045em] text-white sm:text-4xl">
                Don't see your industry?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                We adapt to any domain. Let's talk about how we can solve your
                unique challenges.
              </p>

              <a
                href="https://wa.me/923323265152"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Let's Talk
                <ArrowIcon />
              </a>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
            <div>
              <Link to="/" className="inline-flex items-center gap-2.5">
                <img
                  src={LOGO}
                  alt="Aplinode"
                  className="h-8 w-auto object-contain"
                />

                <span className="text-[19px] font-extrabold tracking-[-.04em] text-slate-900">
                  Aplinode
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                Crafting Modern Digital Experiences That Build Trust.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.16em] text-slate-900">
                Quick Links
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                <Link
                  to="/services"
                  className="text-sm text-slate-500 transition hover:text-blue-600"
                >
                  Services
                </Link>

                <Link
                  to="/process"
                  className="text-sm text-slate-500 transition hover:text-blue-600"
                >
                  Our Process
                </Link>

                <Link
                  to="/technologies"
                  className="text-sm text-slate-500 transition hover:text-blue-600"
                >
                  Technology
                </Link>

                <Link
                  to="/industries"
                  className="text-sm text-blue-600"
                >
                  Industries
                </Link>

                <Link
                  to="/faq"
                  className="text-sm text-slate-500 transition hover:text-blue-600"
                >
                  FAQ
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[.16em] text-slate-900">
                Contact Us
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <LocationIcon />
                  Karachi, Pakistan
                </div>

                <a
                  href="tel:+923323265152"
                  className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-blue-600"
                >
                  <PhoneIcon />
                  +92 332 326 5152
                </a>

                <a
                  href="mailto:contact@aplinode.com"
                  className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-blue-600"
                >
                  <MailIcon />
                  contact@aplinode.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
              <p>© 2026 Aplinode</p>

              <div className="flex gap-5">
                <a
                  href="#"
                  className="transition hover:text-slate-700"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="transition hover:text-slate-700"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}