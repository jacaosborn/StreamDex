import NavBar from "../Navigation/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./header.css";
import gamesubDexLogo from "../../assets/gamesubDexLogo.png";

function Header({ onSearchChange }) {
  return (
    <header className="header">
      {/* <img
        src={gamesubDexLogo}
        alt="Gamesub Dex Logo"
        className="header__logo"
      /> */}
      <h1 className="header__title">GameSub Search</h1>
      <div className="header__subheading">
        Search across game subscriptions to find where to play what
      </div>
      <SearchBar onSearchChange={onSearchChange} />
      <NavBar />
    </header>
  );
}

export default Header;
