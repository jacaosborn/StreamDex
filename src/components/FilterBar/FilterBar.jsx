import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="filter-bar">
      <p className="filter-bar__text">Show only:</p>

      <button className="filter-bar__button filter-bar__button_gp">
        Xbox
        <br />
        Game Pass
      </button>

      <span className="filter-bar__text">|</span>

      <button className="filter-bar__button filter-bar__button_ps">
        PlayStation Plus
        <br />
        Extra
      </button>
      <button className="filter-bar__button filter-bar__button_ps">
        PlayStation Plus
        <br />
        Premium
      </button>

      {/* add feature later
      <span className="filter-bar__text">|</span>

      <button className="filter-bar__button filter-bar__button_ea">
        EA
        <br />
        Play
      </button> */}
    </div>
  );
}

export default FilterBar;
