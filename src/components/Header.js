import logo from "../assets/images/logo.png";

const Header = () => {
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
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
