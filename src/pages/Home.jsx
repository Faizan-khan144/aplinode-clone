import {
  Navbar,
  Hero,
  Services,
  WhyAplinode,
  Process,
  Masterplan,
  Technologies,
  Founder,
  Industries,
  Testimonial,
  FAQ,
  CTA,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyAplinode />
        <Process />
        <Masterplan />
        <Technologies />
        <Founder />
        <Industries />
        <Testimonial />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}