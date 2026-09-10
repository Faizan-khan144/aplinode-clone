import { useState } from "react";
import { Link } from "react-router";

const services = [
  {
    number: "01",
    icon: "language",
    title: "Website Development",
    short: "Premium websites built for speed, trust, and conversions.",
    description:
      "High-performance websites that load fast, look stunning, and convert visitors into loyal customers. Every site is built responsive-first with clean semantics and SEO best practices.",
    features: [
      {
        title: "Professional Portfolios",
        text: "Showcase your work with elegant, image-rich portfolios that leave a lasting impression.",
      },
      {
        title: "High-Conversion Landing Pages",
        text: "Purpose-built pages designed around a single goal: conversion.",
      },
      {
        title: "Multi-page Business Sites",
        text: "Complete websites with multiple service lines, team pages, and contact flows.",
      },
      {
        title: "Blog & Content Platforms",
        text: "Scalable content management with rich editing, categories, and reader analytics.",
      },
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: "apps",
    title: "Web App Development",
    short: "Scalable applications designed around your business.",
    description:
      "Full-stack web applications engineered for scale, security, and seamless user experiences. From real-time collaboration tools to complex data platforms.",
    features: [
      {
        title: "Custom SaaS Solutions",
        text: "Multi-tenant architecture with subscription billing and role-based access control.",
      },
      {
        title: "E-commerce Marketplaces",
        text: "Product catalogs, shopping carts, payment gateways, and vendor dashboards.",
      },
      {
        title: "Dynamic User Portals",
        text: "Personalized dashboards with real-time data, notifications, and file uploads.",
      },
      {
        title: "Social Networking Apps",
        text: "Feeds, messaging, friend systems, and push notifications at scale.",
      },
    ],
    stack: ["Node.js", "Supabase", "Firebase"],
  },
  {
    number: "03",
    icon: "dashboard",
    title: "Admin Panels & Dashboards",
    short: "Clear, powerful interfaces for managing your operations.",
    description:
      "Powerful back-office interfaces that give you complete control over your operations with beautiful data visualization and intuitive workflows.",
    features: [
      {
        title: "Inventory Management",
        text: "Track stock levels, manage suppliers, automate reorder points, and generate reports.",
      },
      {
        title: "CRM Integration",
        text: "Centralized customer data with interaction history, lead scoring, and pipeline tracking.",
      },
      {
        title: "Real-time Data Visualization",
        text: "Interactive charts, graphs, and heatmaps powered by real-time technologies.",
      },
      {
        title: "User Role Control",
        text: "Granular permission systems with customizable roles and audit logs.",
      },
    ],
    stack: ["React", "Charts", "WebSocket"],
  },
  {
    number: "04",
    icon: "database",
    title: "Database Solutions",
    short: "Reliable data architecture built to grow with you.",
    description:
      "Robust data architecture and management systems designed for reliability, speed, and growth. We work with both relational and NoSQL databases.",
    features: [
      {
        title: "Database Architecture",
        text: "Schema design, indexing strategies, query optimization, and data modeling.",
      },
      {
        title: "Real-time Sync",
        text: "Live data synchronization across clients with offline support.",
      },
      {
        title: "Relational Systems",
        text: "PostgreSQL-based solutions with security and auto-generated APIs.",
      },
      {
        title: "Data Migration & API Design",
        text: "Seamless migration from legacy systems with RESTful and GraphQL APIs.",
      },
    ],
    stack: ["PostgreSQL", "Firestore", "REST API"],
  },
  {
    number: "05",
    icon: "palette",
    title: "Graphic Designing",
    short: "Visual identities that make your brand memorable.",
    description:
      "Eye-catching visual designs that communicate your brand story, engage your audience, and elevate your business presence across every medium.",
    features: [
      {
        title: "Brand Identity & Logo Design",
        text: "Memorable logos, brand guidelines, color palettes, and typography systems.",
      },
      {
        title: "UI/UX Design",
        text: "User-centric interfaces with wireframes, prototypes, and pixel-perfect mockups.",
      },
      {
        title: "Social Media Graphics",
        text: "Scroll-stopping posts, stories, banners, and ad creatives for every platform.",
      },
      {
        title: "Print & Marketing Collateral",
        text: "Brochures, flyers, business cards, and packaging that leave a lasting impression.",
      },
    ],
    stack: ["Figma", "Adobe CC", "Branding"],
  },
  {
    number: "06",
    icon: "settings_backup_restore",
    title: "Maintenance & Support",
    short: "Continuous care to keep your digital product performing.",
    description:
      "Ongoing care to keep your digital products secure, fast, and up-to-date. We handle the technical heavy lifting so you can focus on your business.",
    features: [
      {
        title: "Security Updates & Audits",
        text: "Regular vulnerability scanning, dependency updates, and SSL management.",
      },
      {
        title: "Performance Monitoring",
        text: "Uptime monitoring, load testing, CDN optimization, and query profiling.",
      },
      {
        title: "Feature Upgrades",
        text: "Add new features, integrations, and improvements as your business evolves.",
      },
      {
        title: "Hosting Management",
        text: "Server configuration, scaling, backups, disaster recovery, and DNS management.",
      },
    ],
    stack: ["CI/CD", "Monitoring", "SSL"],
  },
];

const benefits = [
  {
    icon: "devices",
    title: "Responsive First",
    text: "Every experience is designed to work beautifully across every screen.",
  },
  {
    icon: "speed",
    title: "Fast Performance",
    text: "Optimized builds that keep loading times low and experiences smooth.",
  },
  {
    icon: "search_check",
    title: "SEO Friendly",
    text: "Clean structure and best practices that help your business get discovered.",
  },
  {
    icon: "lock",
    title: "Secure & Scalable",
    text: "Reliable foundations built with security and future growth in mind.",
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
  return (
    <div
      className={`animate-[fadeUp_0.7s_ease-out_both] ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.10),transparent_30%)]" />

        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
          <Reveal>
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                <span className="h-0.5 w-6 rounded-full bg-blue-600" />
                What We Build
              </div>

              <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                Our Services
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                Explore what we build. Pick a service to see how we can help
                turn your ideas into reliable digital experiences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap gap-3">
              {services.map((service, index) => (
                <button
                  key={service.number}
                  onClick={() => {
                    setActiveService(index);
                    document
                      .getElementById("service-details")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className={`group flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeService === index
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      activeService === index
                        ? "text-blue-100"
                        : "text-slate-400"
                    }`}
                  >
                    {service.number}
                  </span>

                  {service.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 px-0 sm:grid-cols-4 lg:mx-10 lg:max-w-none xl:mx-auto xl:max-w-7xl">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="h-full bg-white p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon name={benefit.icon} className="text-[21px]" />
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="service-details"
        className="scroll-mt-10 bg-slate-50 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                  <span className="h-0.5 w-6 rounded-full bg-blue-600" />
                  Our Expertise
                </div>

                <h2 className="max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
                  Digital solutions crafted for impact.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Select any service to explore the capabilities and technologies
                we bring to your project.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
                {services.map((service, index) => (
                  <button
                    key={service.number}
                    onClick={() => setActiveService(index)}
                    className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                      activeService === index
                        ? "bg-blue-50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold ${
                        activeService === index
                          ? "text-blue-600"
                          : "text-slate-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                        activeService === index
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                          : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <Icon name={service.icon} className="text-[20px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-sm font-bold ${
                          activeService === index
                            ? "text-blue-700"
                            : "text-slate-800"
                        }`}
                      >
                        {service.title}
                      </span>

                      <span className="mt-0.5 block truncate text-[11px] text-slate-400">
                        {service.short}
                      </span>
                    </span>

                    <Icon
                      name="arrow_forward"
                      className={`text-[17px] transition-transform ${
                        activeService === index
                          ? "translate-x-0 text-blue-600"
                          : "-translate-x-1 text-slate-300 group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <article
                key={active.number}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-11"
              >
                <div className="flex flex-col gap-7 border-b border-slate-200 pb-8 sm:flex-row sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Icon name={active.icon} className="text-[29px]" />
                  </div>

                  <div>
                    <div className="mb-2 font-mono text-xs font-bold tracking-widest text-blue-600">
                      SERVICE {active.number}
                    </div>

                    <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950 sm:text-3xl">
                      {active.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-0 sm:grid-cols-2">
                  {active.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className={`flex gap-4 py-7 ${
                        index < 2
                          ? "border-b border-slate-200"
                          : "sm:border-b-0"
                      } ${index % 2 === 0 ? "sm:border-r sm:border-slate-200 sm:pr-8" : "sm:pl-8"}`}
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Icon name="check" className="text-[16px] font-bold" />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {feature.title}
                        </h4>

                        <p className="mt-1.5 text-xs leading-6 text-slate-500">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {active.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-[10px] font-semibold text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="grid overflow-hidden rounded-[28px] border border-blue-100 bg-blue-600 lg:grid-cols-[1fr_auto]">
              <div className="relative p-8 sm:p-12 lg:p-16">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-100">
                    <span className="h-0.5 w-6 rounded-full bg-blue-200" />
                    Start Building
                  </div>

                  <h2 className="max-w-3xl text-4xl font-extrabold leading-none tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                    Have a project in mind?
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                    Tell us what you're building and let's turn your idea into
                    a digital experience that actually performs.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/923323265152"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-blue-600 transition hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                      Start Your Project
                      <Icon name="arrow_outward" className="text-[17px]" />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      Contact Us
                      <Icon name="arrow_forward" className="text-[17px]" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hidden w-64 items-center justify-center border-l border-white/10 p-10 lg:flex">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl">
                    <Icon name="rocket_launch" className="text-[32px]" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}