import "./assets/css/App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import About from "./pages/About.js";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
