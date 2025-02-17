import { Hero } from "./components/Hero";
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
