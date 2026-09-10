import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Technologies from "./pages/Technologies";
import Industries from "./pages/Industries";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import TechTest from "./pages/TechTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/process" element={<Process />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/tech-test" element={<TechTest />} />
    </Routes>
  );
}

export default App;