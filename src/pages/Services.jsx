import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const LOGO =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const services = [
  {
    number: "01",
    title: "Website Development",
    short: "Fast, responsive & modern websites",
    description:
      "We build modern websites that are fast, responsive, accessible, and designed to turn visitors into customers.",
    features: [
      "Responsive design",
      "SEO-friendly structure",
      "Fast loading performance",
      "Modern UI/UX",
      "Cross-browser compatibility",
      "Easy content management",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    icon: "language",
  },
  {
    number: "02",
    title: "Web App Development",
    short: "Powerful applications for your business",
    description:
      "From dashboards to complete business platforms, we create scalable web applications tailored to your workflow.",
    features: [
      "Custom web applications",
      "Authentication & authorization",
      "API integrations",
      "Real-time functionality",
      "Scalable architecture",
      "Responsive interfaces",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: "web",
  },
  {
    number: "03",
    title: "Admin Panels & Dashboards",
    short: "Clear data. Better decisions.",
    description:
      "We create intuitive admin panels and dashboards that turn complex data into simple, actionable insights.",
    features: [
      "Interactive analytics",
      "Data visualization",
      "User management",
      "Role-based access",
      "Reports & statistics",
      "Responsive dashboard UI",
    ],
    stack: ["React", "JavaScript", "Node.js", "MongoDB"],
    icon: "dashboard",
  },
  {
    number: "04",
    title: "Database Solutions",
    short: "Secure & organized data systems",
    description:
      "Reliable database solutions designed to keep your business data secure, structured, accessible, and scalable.",
    features: [
      "Database architecture",
      "Data modeling",
      "API integration",
      "CRUD systems",
      "Performance optimization",
      "Secure data handling",
    ],
    stack: ["MongoDB", "Node.js", "Express", "REST API"],
    icon: "database",
  },
  {
    number: "05",
    title: "Graphic Designing",
    short: "Visuals that build your identity",
    description:
      "We design clean and memorable visual experiences that help businesses communicate their brand clearly.",
    features: [
      "Social media designs",
      "Brand identity",
      "Marketing graphics",
      "Post & banner designs",
      "Presentation designs",
      "Creative visual concepts",
    ],
    stack: ["Figma", "Canva", "Photoshop", "Illustrator"],
    icon: "palette",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    short: "Keep your digital products running",
    description:
      "Continuous maintenance and technical support to keep your website or application secure, updated, and reliable.",
    features: [
      "Bug fixes",
      "Performance improvements",
      "Security updates",
      "Content updates",
      "Technical support",
      "Regular monitoring",
    ],
    stack: ["React", "Node.js", "MongoDB", "Git"],
    icon: "support_agent",
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
          : "translate-y-6 opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function DashboardPreview() {
  const bars = [35, 52, 43, 67, 54, 78, 63, 91, 74, 96];

  return (
    <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <div className="h-2 w-20 rounded bg-slate-300" />
          <div className="mt-2 h-1.5 w-12 rounded bg-slate-200" />
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-slate-500">
            Live
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Revenue", "$24.8K"],
          ["Users", "12.4K"],
          ["Orders", "1,284"],
        ].map(([title, value], index) => (
          <div
            key={title}
            className="animate-[cardIn_.6s_ease-out_both] rounded-xl border border-slate-200 bg-white p-3"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <p className="text-[9px] text-slate-400">{title}</p>

            <p className="mt-1 text-xs font-bold text-slate-800">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400">
              Performance
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">
              +28.4%
            </p>
          </div>

          <Icon
            name="trending_up"
            className="text-blue-600"
          />
        </div>

        <div className="mt-5 flex h-24 items-end gap-1.5">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 overflow-hidden rounded-t bg-blue-100"
            >
              <div
                className="h-full origin-bottom animate-[barIn_.8s_ease-out_both] rounded-t bg-blue-500"
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 70}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(services[0]);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .services-page {
          min-height: 100vh !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          font-family: Inter, sans-serif !important;
        }

        .services-page section {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
          align-items: unset !important;
          justify-content: unset !important;
          margin: 0 !important;
        }

        .services-page .services-hero {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
          padding-top: 58px !important;
          padding-bottom: 48px !important;
        }

        .services-page .services-main {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
        }

        .services-page footer {
          min-height: auto !important;
          height: auto !important;
          display: block !important;
        }

        .services-grid {
          background-image:
            linear-gradient(rgba(148,163,184,.065) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.065) 1px, transparent 1px);
          background-size: 38px 38px;
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        }

        @keyframes navIn {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes detailIn {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes barIn {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        .services-nav-animation {
          animation: navIn .6s ease-out both;
        }

        .services-hero-animation {
          animation: heroIn .7s ease-out both;
        }

        .hero-delay-1 {
          animation-delay: .08s;
        }

        .hero-delay-2 {
          animation-delay: .16s;
        }

        .hero-delay-3 {
          animation-delay: .24s;
        }

        .service-detail-animation {
          animation: detailIn .5s cubic-bezier(.22,1,.36,1) both;
        }

        .floating-icon {
          animation: floating 4s ease-in-out infinite;
        }

        @media (max-width: 767px) {
          .services-page .services-hero {
            padding-top: 42px !important;
            padding-bottom: 38px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .services-page *,
          .services-page *::before,
          .services-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="services-page overflow-hidden bg-white">
        <header className="services-nav-animation sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
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
                className="border-b border-slate-100 py-3 text-sm font-semibold text-blue-600 md:border-0 md:py-0"
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
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:text-blue-600 md:border-0 md:py-0"
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
                <Icon
                  name="arrow_forward"
                  className="text-[16px]"
                />
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

        <main className="services-main">
          <section className="services-hero relative overflow-hidden bg-slate-50">
            <div className="services-grid pointer-events-none absolute inset-0" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

            <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
              <div className="services-hero-animation hero-delay-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[11px] font-semibold text-blue-600 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
                  What we build
                </span>
              </div>

              <h1 className="services-hero-animation hero-delay-2 mt-5 text-4xl font-extrabold tracking-[-.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                Our <span className="text-blue-600">Services</span>
              </h1>

              <p className="services-hero-animation hero-delay-3 mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Explore what we build. Pick a service to see how we can
                help.
              </p>

              <div className="services-hero-animation hero-delay-3 mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2">
                {services.map((service) => (
                  <button
                    key={service.number}
                    onClick={() => setActive(service)}
                    className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold transition duration-300 sm:px-4 sm:text-xs ${
                      active.number === service.number
                        ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-sm"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-14 sm:py-18 lg:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
                <Reveal>
                  <div className="lg:sticky lg:top-24">
                    <p className="text-[11px] font-bold uppercase tracking-[.2em] text-blue-600">
                      Explore services
                    </p>

                    <h2 className="mt-3 text-2xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-3xl">
                      Everything you need to go digital.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Select a service and discover how we can help
                      transform your idea into a reliable digital
                      experience.
                    </p>

                    <div className="mt-6 space-y-1.5">
                      {services.map((service) => (
                        <button
                          key={service.number}
                          onClick={() => setActive(service)}
                          className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition duration-300 ${
                            active.number === service.number
                              ? "border-blue-100 bg-blue-50/60"
                              : "border-transparent hover:border-slate-100 hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                              active.number === service.number
                                ? "bg-blue-600 text-white"
                                : "bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                            }`}
                          >
                            {service.number}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-xs font-bold text-slate-800">
                              {service.title}
                            </span>

                            <span className="mt-0.5 block truncate text-[10px] text-slate-400">
                              {service.short}
                            </span>
                          </span>

                          <Icon
                            name="arrow_forward"
                            className={`text-[16px] transition duration-300 ${
                              active.number === service.number
                                ? "text-blue-600"
                                : "text-slate-300 group-hover:translate-x-1 group-hover:text-blue-500"
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
                    className="service-detail-animation relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,.07)] sm:p-8"
                  >
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="floating-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon
                            name={active.icon}
                            className="text-[25px]"
                          />
                        </div>

                        <div>
                          <p className="text-[10px] font-bold tracking-[.18em] text-blue-600">
                            SERVICE {active.number}
                          </p>

                          <h3 className="mt-1.5 text-2xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-3xl">
                            {active.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        {active.description}
                      </p>

                      <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            What you get
                          </h4>

                          <div className="mt-4 space-y-3">
                            {active.features.map((feature, index) => (
                              <div
                                key={feature}
                                className="flex items-center gap-3"
                                style={{
                                  animation:
                                    "heroIn .45s ease-out both",
                                  animationDelay: `${index * 55}ms`,
                                }}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                  <Icon
                                    name="check"
                                    className="text-[14px]"
                                  />
                                </span>

                                <span className="text-sm text-slate-600">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            Technologies
                          </h4>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {active.stack.map((tech, index) => (
                              <span
                                key={tech}
                                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                style={{
                                  animation:
                                    "cardIn .45s ease-out both",
                                  animationDelay: `${index * 70}ms`,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {active.number === "03" ? (
                            <DashboardPreview />
                          ) : (
                            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                                  <Icon
                                    name="auto_awesome"
                                    className="text-[18px]"
                                  />
                                </div>

                                <div>
                                  <p className="text-xs font-bold text-slate-800">
                                    Built with purpose
                                  </p>

                                  <p className="mt-1 text-[10px] leading-5 text-slate-500">
                                    Clean, scalable and focused on
                                    real results.
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Ready to build something better?
                        </div>

                        <a
                          href="https://wa.me/923323265152"
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
                        >
                          Discuss your project
                          <Icon
                            name="arrow_forward"
                            className="text-[15px] transition group-hover:translate-x-1"
                          />
                        </a>
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
                  Have an idea? Let's turn it into reality.
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
                  Tell us what you're building and we'll help you
                  choose the right digital solution.
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
                  Contact
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
              <p>© 2026 Aplinode. All rights reserved.</p>

              <div className="flex gap-5">
                <Link
                  to="/privacy"
                  className="hover:text-blue-600"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="hover:text-blue-600"
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