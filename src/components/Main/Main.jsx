import { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import FilterBar from "../FilterBar/FilterBar";
import Preloader from "../Preloader/Preloader";
import "./main.css";

function Main({ fetchBrowsePage }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [psExGames, setPsExGames] = useState([]);
  const [psPremGames, setPsPremGames] = useState([]);
  const [gpGames, setGpGames] = useState([]);
  // add later
  // const [eaPlGames, setEaPlayGames] = useState([]);
  const [errors, setErrors] = useState({
    psEx: false,
    psPrem: false,
    gp: false,
  });
  const [cardsCount, setCardsCount] = useState(3);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  useEffect(() => {
    Promise.all([
      fetchBrowsePage("ps-plus-games-catalog").catch((err) => {
        console.error(err);
        setErrors((e) => ({ ...e, psEx: true }));
        return [];
      }),
      fetchBrowsePage("ps-plus-premium-games").catch((err) => {
        console.error(err);
        setErrors((e) => ({ ...e, psPrem: true }));
        return [];
      }),
      fetchBrowsePage("game-pass").catch((err) => {
        console.error(err);
        setErrors((e) => ({ ...e, gp: true }));
        return [];
      }),
    ]).then(([psEx, psPrem, gp]) => {
      const taggedPsEx = psEx.map((g) => ({ ...g, platforms: ["ps-ex"] }));
      const taggedPsPrem = psPrem.map((g) => ({
        ...g,
        platforms: ["ps-prem"],
      }));
      const taggedGp = gp.map((g) => ({ ...g, platforms: ["gp"] }));
      setPsExGames(taggedPsEx);
      setPsPremGames(taggedPsPrem);
      setGpGames(taggedGp);
    });
  }, []);
  // ea play - add later
  // useEffect(() => {
  //   fetchBrowsePage("ea-play").then(setEaPlayGames).catch(console.error);
  // }, []);
  // FEATURE TO ADD LATER - free games from playstation, epic, and prime gaming
  //  useEffect(() => {
  //   fetchBrowsePage("ps-plus-monthly")
  //     .then(setGpUltGames)
  //     .catch(console.error);
  // }, []);

  const normalizeName = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const allGames = [...psExGames, ...psPremGames, ...gpGames];
  // add key value to each game to id which sub it's on. also make sure that when filtering the game retains all subs
  const uniqueGames = Object.values(
    allGames.reduce((acc, g) => {
      const key = normalizeName(g.name);
      if (acc[key]) {
        acc[key] = {
          ...acc[key],
          platforms: [...acc[key].platforms, ...g.platforms],
        };
      } else {
        acc[key] = { ...g };
      }
      return acc;
    }, {}),
  );
  const filteredGames =
    activeFilters.length === 0
      ? uniqueGames
      : uniqueGames.filter((g) =>
          activeFilters.some((f) => g.platforms.includes(f)),
        );
  console.log(uniqueGames);

  return (
    <div className="main">
      <FilterBar activeFilters={activeFilters} toggleFilter={toggleFilter} />
      <section className="main__cards">
        {uniqueGames.length === 0 && <Preloader />}
        <div className="main__cards-list">
          {filteredGames.slice(0, cardsCount).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {cardsCount < filteredGames.length && (
          <button
            className="main__load-more"
            onClick={() => setCardsCount((prev) => prev + 3)}
          >
            Load More
          </button>
        )}
        <p
          className={`main__error-message${uniqueGames.length === 0 && Object.values(errors).some(Boolean) ? "" : " main__error-message_hidden"}`}
        >
          Sorry, something went wrong during the reqest. There may be a
          connection issue or the server may be down. Please try again later.
        </p>
      </section>
    </div>
  );
}

export default Main;
