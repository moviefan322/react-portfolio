import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    document.title = `${currentPage} | Philip Neumann}`;
  }, [currentPage]);

  const handleLinkClick = (page) => {
    setCurrentPage(page);
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
          <Link
            to="/resume"
            style={
              currentPage === "Resume"
                ? { color: "yellow" }
                : { color: "#FFFFFF" }
            }
            onClick={() => handleLinkClick("Resume")}
          >
            Resume
          </Link>
        </ul>
      </div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link
              to="/"
              style={
                currentPage === "About"
                  ? { color: "yellow" }
                  : { color: "#FFFFFF" }
              }
              onClick={() => handleLinkClick("About")}
              className="menu__item"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={
                currentPage === "Portfolio"
                  ? { color: "yellow" }
                  : { color: "#FFFFFF" }
              }
              onClick={() => handleLinkClick("Portfolio")}
              className="menu__item"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={
                currentPage === "Contact"
                  ? { color: "yellow" }
                  : { color: "#FFFFFF" }
              }
              onClick={() => handleLinkClick("Contact")}
              className="menu__item"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              style={
                currentPage === "Resume"
                  ? { color: "yellow" }
                  : { color: "#FFFFFF" }
              }
              onClick={() => handleLinkClick("Resume")}
              className="menu__item"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
