import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Navbar,
  Hero,
  Services,
  WhyChooseUs,
  Process,
  Technologies,
  Founder,
  Industries,
  Testimonials,
  FAQ,
  CTA,
  Contact,
  Footer,
} from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Founder />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </React.StrictMode>
);