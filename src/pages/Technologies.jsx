
import { Navbar, Technologies, CTA, Footer } from "../components";

export default function TechnologiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-eyebrow">Our Arsenal</span>
            <h1>The Technology Behind Performance</h1>
            <p>
              Modern, battle-tested technologies selected to create fast,
              scalable, secure, and maintainable digital products.
            </p>
          </div>
        </section>

        <Technologies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

