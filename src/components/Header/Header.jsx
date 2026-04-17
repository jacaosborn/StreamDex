import NavBar from "../Navigation/Navbar";
import "./header.css";
import gamesubDexLogo from "../../assets/gamesubDexLogo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={gamesubDexLogo}
        alt="Gamesub Dex Logo"
        className="header__logo"
      />
      <div className="header__subheading">
        Search across game subscriptions to find where to play what
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
