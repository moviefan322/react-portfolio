import logo from "../logo.png";

const Header = () => {
  return (
    <nav>
      <div className="App-header">
        <img height="100px" src={logo} alt="top cat in gangster style" />
        <h1>Philip Neumann</h1>
        <ul className="App-header">
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
