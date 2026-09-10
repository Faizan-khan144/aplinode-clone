import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const technologies = [
  {
    number: "01",
    name: "HTML",
    category: "FRONTEND",
    icon: "code",
    description:
      "The foundation of every modern web experience, giving websites clean structure, accessibility, and semantic markup.",
    features: [
      "Semantic and accessible HTML structure",
      "Modern HTML5 standards",
      "SEO-friendly page architecture",
      "Responsive content structure",
    ],
  },
  {
    number: "02",
    name: "CSS",
    category: "FRONTEND",
    icon: "palette",
    description:
      "We create polished, responsive interfaces with modern CSS techniques that work beautifully across every screen.",
    features: [
      "Responsive layouts across devices",
      "Modern animations and transitions",
      "Flexible Grid and Flexbox systems",
      "Clean and maintainable styling",
    ],
  },
  {
    number: "03",
    name: "JavaScript",
    category: "FRONTEND",
    icon: "javascript",
    description:
      "Powering dynamic interactions, complex functionality, and engaging experiences throughout modern web applications.",
    features: [
      "Modern ES6+ JavaScript",
      "Interactive user experiences",
      "Asynchronous API integration",
      "Performance-focused development",
    ],
  },
  {
    number: "04",
    name: "React",
    category: "FRONTEND",
    icon: "widgets",
    description:
      "A powerful component-based library for building scalable, interactive, and maintainable digital products.",
    features: [
      "Reusable component architecture",
      "Dynamic single-page applications",
      "State and data management",
      "Scalable frontend architecture",
    ],
  },
  {
    number: "05",
    name: "Next.js",
    category: "FRONTEND",
    icon: "bolt",
    description:
      "Production-ready React applications with powerful rendering, routing, optimization, and performance capabilities.",
    features: [
      "Server and client rendering",
      "Optimized application performance",
      "File-based routing",
      "Production-ready architecture",
    ],
  },
  {
    number: "06",
    name: "Tailwind CSS",
    category: "FRONTEND",
    icon: "design_services",
    description:
      "A utility-first approach that helps us build modern, consistent, and highly responsive interfaces efficiently.",
    features: [
      "Utility-first development",
      "Responsive design systems",
      "Reusable UI patterns",
      "Fast interface development",
    ],
  },
  {
    number: "07",
    name: "Bootstrap",
    category: "FRONTEND",
    icon: "grid_view",
    description:
      "A dependable framework for quickly creating responsive layouts and consistent user interfaces.",
    features: [
      "Responsive grid system",
      "Prebuilt interface components",
      "Cross-browser compatibility",
      "Rapid development workflow",
    ],
  },
  {
    number: "08",
    name: "Node.js",
    category: "BACKEND",
    icon: "dns",
    description:
      "A powerful JavaScript runtime for creating scalable APIs, backend services, and real-time applications.",
    features: [
      "Scalable backend services",
      "REST API development",
      "Real-time application support",
      "Efficient asynchronous architecture",
    ],
  },
  {
    number: "09",
    name: "Supabase",
    category: "BACKEND",
    icon: "cloud",
    description:
      "Modern backend infrastructure providing authentication, databases, storage, and APIs for digital products.",
    features: [
      "Authentication and authorization",
      "Database and API services",
      "File and asset storage",
      "Real-time data capabilities",
    ],
  },
  {
    number: "10",
    name: "MongoDB",
    category: "DATABASE",
    icon: "database",
    description:
      "A flexible NoSQL database designed for applications that need scalable and adaptable data structures.",
    features: [
      "Flexible document-based data",
      "Scalable database architecture",
      "Fast application queries",
      "Easy integration with Node.js",
    ],
  },
  {
    number: "11",
    name: "PostgreSQL",
    category: "DATABASE",
    icon: "table_chart",
    description:
      "A powerful relational database for applications that require reliable, structured, and consistent data.",
    features: [
      "Reliable relational data",
      "Advanced SQL capabilities",
      "Strong data integrity",
      "Scalable database architecture",
    ],
  },
  {
    number: "12",
    name: "SQL",
    category: "DATABASE",
    icon: "storage",
    description:
      "Structured query language for managing, querying, and working with reliable relational data systems.",
    features: [
      "Structured data queries",
      "Database management",
      "Complex data relationships",
      "Reliable data operations",
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

function Reveal({ children, delay = 0, className = "" }) {
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
      { threshold: 0.08 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Technologies() {
  const [active, setActive] = useState(technologies[0]);
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">

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

          <nav
            className={`${
              menu ? "flex" : "hidden"
            } absolute left-0 top-[70px] w-full flex-col border-b border-slate-100 bg-white p-5 shadow-xl md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <Link
              to="/"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
            >
              Services
            </Link>

            <Link
              to="/process"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
            >
              Process
            </Link>

            <Link
              to="/technologies"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-semibold text-blue-600 md:border-0 md:py-0"
            >
              Technologies
            </Link>

            <Link
              to="/industries"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
            >
              Industries
            </Link>

            <Link
              to="/faq"
              onClick={() => setMenu(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
            >
              FAQ
            </Link>

            <a
              href="https://wa.me/923323265152"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 md:mt-0"
            >
              Get Started
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenu(!menu)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menu}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>

        </div>
      </header>

      <main>

        <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">

          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.065) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              maskImage:
                "linear-gradient(to bottom, black 15%, transparent 100%)",
            }}
          />

          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="text-center">

              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-blue-600 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                  Our technology stack
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-5 text-4xl font-extrabold tracking-[-.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                  The Tech Behind{" "}
                  <span className="text-blue-600">Performance</span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  We use modern, battle-tested technologies to build
                  systems that scale with your ambitions.
                </p>
              </Reveal>

            </div>

          </div>
        </section>

        <section className="bg-white py-14 sm:py-18 lg:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-14">

              <Reveal>
                <div className="lg:sticky lg:top-24">

                  <p className="text-[11px] font-bold uppercase tracking-[.2em] text-blue-600">
                    Our Arsenal
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-3xl">
                    Built with the right tools.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    From frontend interfaces to powerful backend
                    infrastructure, we choose technologies based on
                    what your product actually needs.
                  </p>

                  <div className="mt-7 space-y-2">

                    {technologies.map((technology) => (
                      <button
                        key={technology.number}
                        onClick={() => setActive(technology)}
                        className={`group flex w-full items-center gap-3 rounded-xl p-2 text-left transition duration-300 ${
                          active.number === technology.number
                            ? "bg-blue-50/70"
                            : "hover:bg-slate-50"
                        }`}
                      >

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition duration-300 ${
                            active.number === technology.number
                              ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20"
                              : "border-slate-200 bg-white text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600"
                          }`}
                        >
                          {technology.number}
                        </span>

                        <span
                          className={`text-xs font-bold transition ${
                            active.number === technology.number
                              ? "text-blue-600"
                              : "text-slate-700 group-hover:text-blue-600"
                          }`}
                        >
                          {technology.name}
                        </span>

                        <Icon
                          name="chevron_right"
                          className={`ml-auto text-[17px] transition duration-300 ${
                            active.number === technology.number
                              ? "translate-x-0 text-blue-600"
                              : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-blue-500"
                          }`}
                        />

                      </button>
                    ))}

                  </div>

                </div>
              </Reveal>

              <Reveal delay={100}>

                <article
                  key={active.number}
                  className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,.07)] sm:p-8 lg:p-10"
                >

                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

                  <div className="relative">

                    <div className="flex items-start justify-between gap-5">

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-500 hover:rotate-3 hover:scale-105">
                          <Icon
                            name={active.icon}
                            className="text-[25px]"
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold tracking-[.18em] text-blue-600">
                            {active.category}
                          </p>

                          <h3 className="mt-1.5 text-2xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-3xl">
                            {active.name}
                          </h3>
                        </div>

                      </div>

                      <span className="hidden text-6xl font-extrabold tracking-[-.08em] text-slate-100 sm:block">
                        {active.number}
                      </span>

                    </div>

                    <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      {active.description}
                    </p>

                    <div className="mt-8 border-t border-slate-100 pt-7">

                      <h4 className="text-sm font-bold text-slate-900">
                        What we use it for
                      </h4>

                      <div className="mt-5 grid gap-4 sm:grid-cols-2">

                        {active.features.map((feature, index) => (
                          <div
                            key={feature}
                            className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50/40"
                            style={{
                              transitionDelay: `${index * 40}ms`,
                            }}
                          >
                            <div className="flex gap-3">

                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                                <Icon
                                  name="check_circle"
                                  className="text-[17px]"
                                />
                              </span>

                              <p className="text-xs leading-5 text-slate-600">
                                {feature}
                              </p>

                            </div>
                          </div>
                        ))}

                      </div>

                    </div>

                    <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        {active.category}
                      </div>

                      <div className="flex gap-2">

                        {Number(active.number) > 1 && (
                          <button
                            onClick={() =>
                              setActive(
                                technologies[
                                  Number(active.number) - 2
                                ]
                              )
                            }
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                          >
                            <Icon
                              name="arrow_back"
                              className="text-[15px]"
                            />
                            Previous
                          </button>
                        )}

                        {Number(active.number) < 12 && (
                          <button
                            onClick={() =>
                              setActive(
                                technologies[
                                  Number(active.number)
                                ]
                              )
                            }
                            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                          >
                            Next
                            <Icon
                              name="arrow_forward"
                              className="text-[15px] transition group-hover:translate-x-1"
                            />
                          </button>
                        )}

                      </div>

                    </div>

                  </div>

                </article>

              </Reveal>

            </div>

          </div>

        </section>

        <section className="relative overflow-hidden bg-blue-600 py-14 sm:py-18 lg:py-20">

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-950/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

            <Reveal>

              <Icon
                name="rocket_launch"
                className="text-[30px] text-white"
              />

              <h2 className="mt-4 text-3xl font-extrabold tracking-[-.04em] text-white sm:text-4xl">
                Ready to build something great?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Let's choose the right technology stack and turn
                your idea into a powerful digital product.
              </p>

              <a
                href="https://wa.me/923323265152"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-600 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started
                <Icon
                  name="arrow_forward"
                  className="text-[17px]"
                />
              </a>

            </Reveal>

          </div>

        </section>

      </main>

      <footer className="border-t border-slate-100 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

          <div className="grid gap-10 md:grid-cols-3">

            <div>

              <Link
                to="/"
                className="inline-flex items-center gap-2"
              >
                <img
                  src={LOGO}
                  alt="Aplinode"
                  className="h-8 w-auto"
                />

                <span className="text-lg font-extrabold text-slate-900">
                  Aplinode
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                Crafting Modern Digital Experiences That Build
                Trust.
              </p>

            </div>

            <div>

              <h3 className="text-sm font-bold text-slate-900">
                Quick Links
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-y-3">

                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Process", "/process"],
                  ["Technologies", "/technologies"],
                  ["Industries", "/industries"],
                  ["FAQ", "/faq"],
                ].map(([name, path]) => (
                  <Link
                    key={name}
                    to={path}
                    className="text-xs text-slate-500 transition hover:translate-x-1 hover:text-blue-600"
                  >
                    {name}
                  </Link>
                ))}

              </div>

            </div>

            <div>

              <h3 className="text-sm font-bold text-slate-900">
                Contact Us
              </h3>

              <div className="mt-4 space-y-3 text-xs text-slate-500">

                <p className="flex items-center gap-2">
                  <Icon
                    name="location_on"
                    className="text-[17px] text-blue-600"
                  />
                  Karachi, Pakistan
                </p>

                <a
                  href="tel:+923323265152"
                  className="flex items-center gap-2 transition hover:text-blue-600"
                >
                  <Icon
                    name="call"
                    className="text-[17px] text-blue-600"
                  />
                  +92 332 326 5152
                </a>

                <a
                  href="mailto:contact@aplinode.com"
                  className="flex items-center gap-2 transition hover:text-blue-600"
                >
                  <Icon
                    name="mail"
                    className="text-[17px] text-blue-600"
                  />
                  contact@aplinode.com
                </a>

              </div>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <p>© 2026 Aplinode</p>

            <div className="flex gap-5">

              <span>Crafting Modern Digital Experiences</span>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

