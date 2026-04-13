import NavBar from "../Navigation/Navbar";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Where2Play LOGO</h1>
      <div className="header__subheading">
        Search across game subscriptions to find where to play what
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
