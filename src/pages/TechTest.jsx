export default function TechTest() {
  const technologies = [
    {
      name: "HTML",
      category: "FRONTEND",
      description: "The foundation of every modern web experience.",
      icon: "</>",
    },
    {
      name: "CSS",
      category: "FRONTEND",
      description: "Beautiful, responsive and polished interfaces.",
      icon: "#",
    },
    {
      name: "JavaScript",
      category: "FRONTEND",
      description: "Dynamic interactions and powerful web experiences.",
      icon: "JS",
    },
    {
      name: "React",
      category: "FRONTEND",
      description: "Scalable and interactive user interfaces.",
      icon: "R",
    },
    {
      name: "Next.js",
      category: "FRONTEND",
      description: "Fast and production-ready modern web applications.",
      icon: "N",
    },
    {
      name: "Tailwind CSS",
      category: "FRONTEND",
      description: "Flexible styling for clean modern interfaces.",
      icon: "TW",
    },
    {
      name: "Bootstrap",
      category: "FRONTEND",
      description: "Reliable responsive development made efficient.",
      icon: "B",
    },
    {
      name: "Node.js",
      category: "BACKEND",
      description: "Powerful and scalable backend applications.",
      icon: "N",
    },
    {
      name: "Supabase",
      category: "BACKEND",
      description: "Modern backend infrastructure for digital products.",
      icon: "S",
    },
    {
      name: "MongoDB",
      category: "DATABASE",
      description: "Flexible database solutions for modern applications.",
      icon: "M",
    },
    {
      name: "PostgreSQL",
      category: "DATABASE",
      description: "Reliable relational data for powerful systems.",
      icon: "P",
    },
    {
      name: "SQL",
      category: "DATABASE",
      description: "Structured data management for dependable applications.",
      icon: "SQL",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-[#111]">
      <main>
        <section className="mx-auto w-[calc(100%-40px)] max-w-[1320px] pb-24 pt-36 sm:w-[calc(100%-80px)] sm:pb-32 sm:pt-48">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a0a0a0] sm:text-[11px]">
            Our Arsenal
          </p>

          <h1 className="max-w-[1000px] text-[58px] font-medium leading-[0.91] tracking-[-0.07em] sm:text-[8vw] lg:text-[112px]">
            The Tech Behind
            <br />
            <span className="text-[#c9c9c9]">Performance</span>
          </h1>

          <p className="mt-8 max-w-[570px] text-[15px] leading-[1.7] text-[#858585] sm:text-[17px]">
            We use modern, battle-tested technologies to build
            systems that scale with your ambitions.
          </p>
        </section>

        <section className="mx-auto w-[calc(100%-40px)] max-w-[1320px] pb-24 sm:w-[calc(100%-80px)] sm:pb-36">
          <div className="mb-7 flex items-end justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a0a0a0]">
              Technologies we use
            </p>

            <p className="text-xs text-[#aaa]">
              12 technologies
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <article
                key={technology.name}
                className="group relative flex min-h-[285px] flex-col justify-between overflow-hidden border-b border-r border-[#e5e5e5] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-[#f8f8f6] sm:min-h-[320px] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[15px] bg-[#f1f1ef] text-base font-bold tracking-[-0.04em] text-[#222] transition-all duration-500 group-hover:scale-105 group-hover:rotate-[-2deg] group-hover:bg-white">
                    {technology.icon}
                  </div>

                  <span className="text-[10px] tracking-[0.17em] text-[#b4b4b4]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <span className="mb-2 block text-[9px] font-bold tracking-[0.17em] text-[#adadad]">
                    {technology.category}
                  </span>

                  <h2 className="mb-3 text-[28px] font-medium leading-none tracking-[-0.045em]">
                    {technology.name}
                  </h2>

                  <p className="max-w-[320px] text-[13px] leading-[1.7] text-[#888]">
                    {technology.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-9 right-9 h-[2px] origin-left scale-x-0 bg-[#111] transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-24 w-[calc(100%-40px)] max-w-[1320px] overflow-hidden rounded-[28px] bg-[#111] px-7 py-14 text-white sm:mb-36 sm:w-[calc(100%-80px)] sm:rounded-[34px] sm:px-[75px] sm:py-[82px]">
          <div className="flex flex-col items-start justify-between gap-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#777]">
                Ready to build?
              </p>

              <h2 className="text-[46px] font-medium leading-[0.94] tracking-[-0.06em] sm:text-[6vw] lg:text-[78px]">
                Let's turn your
                <br />
                idea into reality.
              </h2>
            </div>

            <a
              href="https://wa.me/923323265152"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-7 py-4 text-[13px] font-semibold text-[#111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eee]"
            >
              Start a Project
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}