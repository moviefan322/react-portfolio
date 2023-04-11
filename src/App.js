import "./assets/css/App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Body from "./pages/About.js";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
