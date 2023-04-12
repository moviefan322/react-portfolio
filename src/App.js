import "./assets/css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
