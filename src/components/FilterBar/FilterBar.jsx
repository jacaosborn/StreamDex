import "./FilterBar.css";

function FilterBar({ activeFilters, toggleFilter }) {
  return (
    <div className="filter-bar">
      <p className="filter-bar__text">Show only:</p>

      <button
        className={`filter-bar__button filter-bar__button_gp${activeFilters.includes("gp") ? " filter-bar__button_active_gp" : ""}`}
        onClick={() => toggleFilter("gp")}
      >
        Xbox
        <br />
        Game Pass
      </button>

      <span className="filter-bar__text">|</span>

      <button
        className={`filter-bar__button filter-bar__button_ps${activeFilters.includes("ps-ex") ? " filter-bar__button_active_ps" : ""}`}
        onClick={() => toggleFilter("ps-ex")}
      >
        PlayStation Plus
        <br />
        Extra
      </button>
      <button
        className={`filter-bar__button filter-bar__button_ps${activeFilters.includes("ps-prem") ? " filter-bar__button_active_ps" : ""}`}
        onClick={() => toggleFilter("ps-prem")}
      >
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
