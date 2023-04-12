import logo from "../assets/images/logo.png";
import resume from "../assets/docs/Resume.pdf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("About Me");

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  useEffect(() => {
    document.title = `${currentPage} | Philip Neumann}`;
  }, [currentPage]);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
  };

  return (
    <nav>
      <div className="App-header">
        <img
          id="logo"
          height="100px"
          src={logo}
          alt="top cat in gangster style"
        />
        <h1 id="name">Philip Neumann</h1>
        <ul id="navlinks">
          <Link
            to="/"
            style={
              currentPage === "About"
                ? { color: "yellow" }
                : { color: "#FFFFFF" }
            }
            onClick={() => handleLinkClick("About")}
          >
            About Me
          </Link>
          <Link
            to="/portfolio"
            style={
              currentPage === "Portfolio"
                ? { color: "yellow" }
                : { color: "#FFFFFF" }
            }
            onClick={() => handleLinkClick("Portfolio")}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            style={
              currentPage === "Contact"
                ? { color: "yellow" }
                : { color: "#FFFFFF" }
            }
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </Link>
          <a href={resume}>Resume</a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
