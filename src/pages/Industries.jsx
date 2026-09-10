
import { Navbar, Industries, CTA, Footer } from "../components";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-eyebrow">Who We Help</span>
            <h1>Industries We Empower</h1>
            <p>
              We create digital experiences for startups and businesses across
              different industries.
            </p>
          </div>
        </section>

        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

