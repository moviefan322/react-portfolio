import "./assets/css/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import Resume from "./pages/Resume.js";
import projects from "./assets/docs/projects.json";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/react-portfolio" element={<About />} />
          <Route
            path="/myportfolio"
            element={<Portfolio projects={projects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
