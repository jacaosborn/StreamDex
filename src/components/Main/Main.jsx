import { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import FilterBar from "../FilterBar/FilterBar";
import Preloader from "../Preloader/Preloader";
import "./main.css";

function Main({ fetchBrowsePage }) {
  const [psExGames, setPsExGames] = useState([]);
  const [psPremGames, setPsPremGames] = useState([]);
  const [gpGames, setGpGames] = useState([]);
  const [errors, setErrors] = useState({
    psEx: false,
    psPrem: false,
    gp: false,
  });
  const [cardsCount, setCardsCount] = useState(3);
  // add later
  // const [eaPlGames, setEaPlayGames] = useState([]);

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
      setPsExGames(psEx);
      setPsPremGames(psPrem);
      setGpGames(gp);
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
  const uniqueGames = [
    ...new Map(allGames.map((g) => [normalizeName(g.name), g])).values(),
  ];
  console.log(uniqueGames);

  return (
    <div className="main">
      <FilterBar />
      <section className="main__cards">
        {uniqueGames.length === 0 && <Preloader />}
        <ul className="main__cards-list">
          {uniqueGames.slice(0, cardsCount).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
        {cardsCount < uniqueGames.length && (
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
