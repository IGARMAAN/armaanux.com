// import { About } from "./components/About";
// import { Cta } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
// import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Projects } from "./pages/Projects";
import { Milestones } from "./pages/Milestones";
import { Contact } from "./pages/Contact";
import { Blogs } from "./pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/milestones" element={<Milestones />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blogs" element={<Blogs />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
