import "./searchBar.css";
function SearchBar({ onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        placeholder="Find a game.."
        id="input"
        className="search-bar__input"
        name="text"
        type="text"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
