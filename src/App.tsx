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

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
