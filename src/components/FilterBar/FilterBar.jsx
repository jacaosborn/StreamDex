import "./FilterBar.css";

function FilterBar({ activeFilters, toggleFilter, sortOrder, setSortOrder }) {
  return (
    <div className="filter-bar">
      <p className="filter-bar__text">Show only:</p>

      <button
        className={`filter-bar__button filter-bar__button_gp${activeFilters.includes("gp") ? " filter-bar__button_active_gp" : ""}`}
        onClick={() => toggleFilter("gp")}
        data-tooltip="EA Play is included with Game Pass Ultimate and PC Game Pass"
      >
        Xbox
        <br />
        Game Pass
      </button>

      <span className="filter-bar__text">|</span>

      {/* <button
        className={`filter-bar__button filter-bar__button_ps${activeFilters.includes("ps-ex") ? " filter-bar__button_active_ps" : ""}`}
        onClick={() => toggleFilter("ps-ex")}
      >
        PlayStation Plus
        <br />
        Extra
      </button> */}
      <button
        className={`filter-bar__button filter-bar__button_ps${activeFilters.includes("ps-prem") ? " filter-bar__button_active_ps" : ""}`}
        onClick={() => {
          toggleFilter("ps-prem");
          toggleFilter("ps-ex");
        }}
        // data-tooltip="PS+ Premium includes all games in the Extra tier"
      >
        PlayStation
        <br />
        Plus
      </button>
      <span className="filter-bar__text">|</span>

      <button
        className={`filter-bar__button filter-bar__button_ea${activeFilters.includes("ea") ? " filter-bar__button_active_ea" : ""}`}
        onClick={() => toggleFilter("ea")}
      >
        EA
        <br />
        Play
      </button>

      <select
        className="filter-bar__sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option className="filter-bar__sort-option" value="asc">
          A → Z
        </option>
        <option className="filter-bar__sort-option" value="desc">
          Z → A
        </option>
      </select>
    </div>
  );
}

export default FilterBar;
