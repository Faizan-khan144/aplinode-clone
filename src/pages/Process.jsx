import { useState } from "react";
import { Link } from "react-router";

const logo =
  "https://res.cloudinary.com/dca2lhkw2/image/upload/q_auto,f_auto/v1781987890/logo_xt9ve6.png";

const steps = [
  {
    number: "01",
    icon: "search",
    title: "Discovery",
    description:
      "We dive deep into your business goals, target audience, market landscape, and technical requirements.",
    deliverables: [
      "In-depth stakeholder interviews to capture your vision",
      "Competitor and market analysis to identify opportunities",
      "Technical feasibility assessment and platform recommendations",
      "Project scope definition with clear success metrics",
    ],
  },
  {
    number: "02",
    icon: "map",
    title: "Planning & Strategy",
    description:
      "We create a comprehensive blueprint covering architecture, technology stack, timeline, and milestones.",
    deliverables: [
      "System architecture design and infrastructure planning",
      "Technology stack selection based on your specific needs",
      "Detailed project roadmap with sprint-by-sprint deliverables",
      "Risk assessment and mitigation strategy",
    ],
  },
  {
    number: "03",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "High-fidelity wireframes and interactive prototypes that align with your brand identity.",
    deliverables: [
      "User flow diagrams and information architecture",
      "High-fidelity wireframes and interactive prototypes in Figma",
      "Design system creation with reusable components",
      "User testing and iteration based on feedback",
    ],
  },
  {
    number: "04",
    icon: "code",
    title: "Development",
    description:
      "Agile development with clean, maintainable code following industry best practices.",
    deliverables: [
      "Sprint-based agile development with weekly progress demos",
      "Responsive, mobile-first implementation across all devices",
      "API development and third-party integration",
      "Performance optimization and security hardening",
    ],
  },
  {
    number: "05",
    icon: "verified",
    title: "Testing & QA",
    description:
      "Rigorous testing across browsers, devices, and edge cases before anything ships.",
    deliverables: [
      "Cross-browser and cross-device compatibility testing",
      "Performance benchmarking and load testing",
      "Security audit and vulnerability scanning",
      "User acceptance testing with your team",
    ],
  },
  {
    number: "06",
    icon: "rocket_launch",
    title: "Launch & Support",
    description:
      "We handle the entire launch process and provide ongoing support post-launch.",
    deliverables: [
      "Zero-downtime deployment strategy",
      "DNS, SSL, and CDN configuration",
      "Post-launch monitoring and alerting setup",
      "Ongoing maintenance and priority support",
    ],
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function BrandLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="Aplinode"
        className="h-11 w-11 object-contain"
      />
      <span className="text-[23px] font-extrabold tracking-[-0.055em] text-slate-950">
        Aplinode
      </span>
    </Link>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Process", path: "/process" },
    { label: "Technologies", path: "/technologies" },
    { label: "Industries", path: "/industries" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <BrandLogo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-medium transition-colors ${
                link.path === "/process"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="mailto:contact@aplinode.com"
            className="text-[13px] text-slate-500 transition-colors hover:text-blue-600"
          >
            contact@aplinode.com
          </a>

          <Link
            to="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 lg:hidden"
          aria-label="Toggle navigation"
        >
          <Icon className="text-[27px]">
            {menuOpen ? "close" : "menu"}
          </Icon>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-slate-100 py-4 text-sm font-medium ${
                  link.path === "/process"
                    ? "text-blue-600"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="mailto:contact@aplinode.com"
              className="py-4 text-sm text-slate-500"
            >
              contact@aplinode.com
            </a>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mb-2 rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <BrandLogo />

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              Crafting Modern Digital Experiences That Build Trust.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/services"
                className="text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                Services
              </Link>

              <Link
                to="/process"
                className="text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                Our Process
              </Link>

              <Link
                to="/technologies"
                className="text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                Technology
              </Link>

              <Link
                to="/industries"
                className="text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                Industries
              </Link>

              <Link
                to="/faq"
                className="text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <Icon className="text-[18px] text-blue-600">
                  location_on
                </Icon>
                Karachi, Pakistan
              </div>

              <a
                href="tel:+923323265152"
                className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                <Icon className="text-[18px] text-blue-600">
                  call
                </Icon>
                +92 332 326 5152
              </a>

              <a
                href="mailto:contact@aplinode.com"
                className="flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                <Icon className="text-[18px] text-blue-600">
                  mail
                </Icon>
                contact@aplinode.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-xs text-slate-400">
            © 2026 Aplinode
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Process() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
          <h1 className="text-5xl font-extrabold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Our Process
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            A proven, step-by-step approach to engineering digital products
            that deliver real results.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="space-y-3">
            {steps.map((step, index) => {
              const isOpen = openStep === index;

              return (
                <article
                  key={step.number}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenStep(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="w-9 shrink-0 font-mono text-xs font-semibold text-slate-400">
                      {step.number}
                    </span>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-slate-50 text-slate-500"
                      }`}
                    >
                      <Icon className="text-[21px]">
                        {step.icon}
                      </Icon>
                    </span>

                    <span className="flex-1 text-lg font-bold tracking-[-0.02em] text-slate-900 sm:text-xl">
                      {step.title}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-50 text-blue-600"
                          : "bg-slate-50 text-slate-400"
                      }`}
                    >
                      <Icon className="text-[21px]">
                        expand_more
                      </Icon>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-8 pt-6 sm:px-7 sm:pl-[132px]">
                      <p className="max-w-3xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                        {step.description}
                      </p>

                      <div className="mt-7">
                        <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-900">
                          Key Deliverables
                        </h3>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          {step.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3"
                            >
                              <Icon className="mt-0.5 shrink-0 text-[18px] text-blue-600">
                                check_circle
                              </Icon>

                              <span className="text-sm leading-6 text-slate-600">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}