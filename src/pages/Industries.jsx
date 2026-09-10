import { useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const industries = [
  {
    name: "Startups",
    icon: "rocket",
    tagline: "Move fast. Scale smart.",
    description:
      "From MVP to Series A and beyond. We build scalable foundations that investors love and users crave.",
    challenges: [
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
    icon: "cloud",
    tagline: "Build products people rely on.",
    description:
      "We create reliable SaaS platforms with intuitive experiences, scalable infrastructure, and the flexibility to grow with your customers.",
    challenges: [
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
    icon: "restaurant",
    tagline: "Serve better. Grow faster.",
    description:
      "Digital experiences that help restaurants connect with customers, simplify operations, and create stronger online experiences.",
    challenges: [
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
    icon: "medical_services",
    tagline: "Technology that puts people first.",
    description:
      "We build accessible and dependable digital solutions that help healthcare businesses deliver better experiences.",
    challenges: [
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
    icon: "apartment",
    tagline: "Turn property into opportunity.",
    description:
      "Modern real estate platforms that make property discovery, presentation, and customer engagement simpler.",
    challenges: [
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
    icon: "groups",
    tagline: "Present your work. Win more clients.",
    description:
      "We help agencies create digital experiences that communicate their value clearly and turn visitors into opportunities.",
    challenges: [
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
    icon: "school",
    tagline: "Turn expertise into impact.",
    description:
      "Digital platforms that help coaches build credibility, attract clients, and deliver their expertise online.",
    challenges: [
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
    icon: "shopping_cart",
    tagline: "Sell more. Make shopping effortless.",
    description:
      "Conversion-focused e-commerce experiences designed to make discovery, checkout, and customer journeys seamless.",
    challenges: [
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

function Icon({ name, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

export default function Industries() {
  const [active, setActive] = useState(industries[0]);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <style>{`
        .industries-page {
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
          background: #fff;
          color: #0f172a;
          font-family: Inter, sans-serif;
        }

        .industries-page section {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
        }

        .industries-grid {
          background-image:
            linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        }

        .industry-item {
          transition:
            background .2s ease,
            border-color .2s ease,
            color .2s ease,
            transform .2s ease;
        }

        .industry-item:hover {
          transform: translateX(2px);
        }

        .industry-active {
          background: #eff6ff !important;
          border-color: #bfdbfe !important;
          color: #2563eb !important;
        }

        .industry-panel {
          animation: industryPanel .45s ease-out both;
        }

        @keyframes industryPanel {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .industry-hero-title {
          animation: heroTitle .65s ease-out both;
        }

        .industry-hero-copy {
          animation: heroCopy .65s ease-out .08s both;
        }

        @keyframes heroTitle {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroCopy {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .industry-mobile-menu {
            display: flex;
          }

          .industry-desktop-nav {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .industry-mobile-menu {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industries-page *,
          .industries-page *::before,
          .industries-page *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="industries-page overflow-hidden bg-white">
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

            <Link
              to="/"
              onClick={() => setMenu(false)}
              className="flex items-center gap-2.5"
            >
              <img
                src={LOGO}
                alt="Aplinode"
                className="h-8 w-auto object-contain"
              />

              <span className="text-[19px] font-extrabold tracking-[-.04em] text-slate-900">
                Aplinode
              </span>
            </Link>

            <nav className="industry-desktop-nav flex items-center gap-7">
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
                className="ml-1 inline-flex h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-[12px] font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </nav>

            <button
              onClick={() => setMenu(!menu)}
              className="industry-mobile-menu hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            >
              <Icon name={menu ? "close" : "menu"} />
            </button>
          </div>

          {menu && (
            <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col">

                <Link
                  to="/"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-600"
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-600"
                >
                  Services
                </Link>

                <Link
                  to="/process"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-600"
                >
                  Process
                </Link>

                <Link
                  to="/technologies"
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-600"
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
                  className="rounded-lg px-3 py-3 text-sm text-slate-600"
                >
                  FAQ
                </Link>

                <a
                  href="https://wa.me/923323265152"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Get Started
                  <Icon name="arrow_forward" />
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          <section className="relative overflow-hidden bg-slate-50">
            <div className="industries-grid pointer-events-none absolute inset-0" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

            <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 text-center sm:px-8 sm:pt-16 lg:px-10 lg:pb-14">

              <div className="industry-hero-title">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-blue-600 shadow-sm">
                  <Icon name="category" className="text-[15px]" />
                  What We Build For
                </span>

                <h1 className="mt-5 text-4xl font-extrabold tracking-[-.06em] text-slate-950 sm:text-5xl lg:text-6xl">
                  Industries We{" "}
                  <span className="text-blue-600">Empower</span>
                </h1>
              </div>

              <p className="industry-hero-copy mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Deep domain expertise meets technical excellence. We speak
                your industry's language.
              </p>
            </div>
          </section>

          <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

              <div className="grid gap-8 lg:grid-cols-[270px_1fr] lg:gap-16">

                <div>
                  <div className="lg:sticky lg:top-24">

                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[11px] font-bold uppercase tracking-[.2em] text-slate-400">
                        Explore Industries
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
                      {industries.map((industry) => {
                        const isActive = active.name === industry.name;

                        return (
                          <button
                            key={industry.name}
                            onClick={() => setActive(industry)}
                            className={`industry-item flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left ${
                              isActive
                                ? "industry-active"
                                : "border-transparent bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            <Icon
                              name={industry.icon}
                              className="text-[21px]"
                            />

                            <span className="text-[13px] font-semibold">
                              {industry.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  key={active.name}
                  className="industry-panel relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,.06)] sm:p-8 lg:p-10"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/[.06] blur-3xl" />

                  <div className="relative">

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon
                          name={active.icon}
                          className="text-[25px]"
                        />
                      </div>

                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-blue-600">
                          {active.name}
                        </p>

                        <h2 className="mt-1 text-2xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-3xl">
                          {active.name}
                        </h2>
                      </div>
                    </div>

                    <h3 className="mt-7 text-xl font-bold tracking-[-.025em] text-slate-900">
                      {active.tagline}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                      {active.description}
                    </p>

                    <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 sm:grid-cols-2">

                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-500">
                          What You Face
                        </h4>

                        <div className="mt-4 space-y-3">
                          {active.challenges.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm text-slate-600"
                            >
                              <Icon
                                name="do_not_disturb_on"
                                className="text-[18px] text-slate-400"
                              />

                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-500">
                          What We Deliver
                        </h4>

                        <div className="mt-4 space-y-3">
                          {active.deliver.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm text-slate-600"
                            >
                              <Icon
                                name="task_alt"
                                className="text-[19px] text-blue-600"
                              />

                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="border-y border-slate-100 bg-slate-50">
            <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">

              <div className="border-b border-slate-200 px-6 py-8 text-center sm:border-b-0 sm:border-r">
                <div className="text-4xl font-extrabold tracking-[-.06em] text-slate-950">
                  9<span className="text-blue-600">+</span>
                </div>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-400">
                  Industries
                </p>
              </div>

              <div className="border-b border-slate-200 px-6 py-8 text-center sm:border-b-0 sm:border-r">
                <div className="text-4xl font-extrabold tracking-[-.06em] text-slate-950">
                  50<span className="text-blue-600">+</span>
                </div>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-400">
                  Projects
                </p>
              </div>

              <div className="px-6 py-8 text-center">
                <div className="text-4xl font-extrabold tracking-[-.06em] text-slate-950">
                  100<span className="text-blue-600">%</span>
                </div>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-400">
                  Commitment
                </p>
              </div>

            </div>
          </section>

          <section className="relative overflow-hidden bg-blue-600 py-14 sm:py-18 lg:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />

            <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">

              <h2 className="text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">
                Don't see your industry?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                We adapt to any domain. Let's talk about how we can solve your
                unique challenges.
              </p>

              <a
                href="https://wa.me/923323265152"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Let's Talk
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>

            </div>
          </section>
        </main>

        <footer className="border-t border-slate-100 bg-white">

          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">

            <div>
              <Link
                to="/"
                className="flex items-center gap-2.5"
              >
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
              <h3 className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-900">
                Quick Links
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">

                <Link
                  to="/services"
                  className="text-sm text-slate-500 hover:text-blue-600"
                >
                  Services
                </Link>

                <Link
                  to="/process"
                  className="text-sm text-slate-500 hover:text-blue-600"
                >
                  Our Process
                </Link>

                <Link
                  to="/technologies"
                  className="text-sm text-slate-500 hover:text-blue-600"
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
                  className="text-sm text-slate-500 hover:text-blue-600"
                >
                  FAQ
                </Link>

              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-900">
                Contact Us
              </h3>

              <div className="mt-4 space-y-3">

                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Icon name="location_on" className="text-[18px]" />
                  Karachi, Pakistan
                </div>

                <a
                  href="tel:+923323265152"
                  className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600"
                >
                  <Icon name="call" className="text-[18px]" />
                  +92 332 326 5152
                </a>

                <a
                  href="mailto:contact@aplinode.com"
                  className="flex items-center gap-3 text-sm text-slate-500 hover:text-blue-600"
                >
                  <Icon name="mail" className="text-[18px]" />
                  contact@aplinode.com
                </a>

              </div>
            </div>

          </div>

          <div className="border-t border-slate-100">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

              <p>© 2026 Aplinode</p>

              <div className="flex gap-5">
                <Link
                  to="#"
                  className="hover:text-slate-700"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="#"
                  className="hover:text-slate-700"
                >
                  Terms of Service
                </Link>
              </div>

            </div>
          </div>

        </footer>
      </div>
    </>
  );
}